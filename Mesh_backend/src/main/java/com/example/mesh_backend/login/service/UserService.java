package com.example.mesh_backend.login.service;

import com.example.mesh_backend.common.utils.S3Uploader;
import com.example.mesh_backend.login.dto.response.KakaoTokenResponse;
import com.example.mesh_backend.login.entity.User;
import com.example.mesh_backend.login.repository.RefreshtokenRepository;
import com.example.mesh_backend.login.repository.UserRepository;
import com.nimbusds.jose.shaded.gson.JsonObject;
import com.nimbusds.jose.shaded.gson.JsonParser;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final RefreshtokenRepository refreshtokenRepository;
    private final S3Uploader s3Uploader;
    private final RestTemplate restTemplate = new RestTemplate();

    @Value("${spring.security.oauth2.client.registration.kakao.client-id}")
    private String kakaoClientId;

    @Value("${spring.security.oauth2.client.registration.kakao.redirect-uri}")
    private String redirectUri;

    @Value("${spring.security.oauth2.client.provider.kakao.token-uri}")
    private String kakaoTokenUrl;

    @Value("${spring.security.oauth2.client.provider.kakao.user-info-uri}")
    private String kakaoUserInfoUrl;

    @Value("${spring.security.oauth2.client.registration.kakao.client-secret}")
    private String kakaoClientSecret;

    @Value("${kakao.admin-key}")
    private String adminKey;

    // code로 accessToken 받기
    public String getKakaoAccessToken(String code) {

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("grant_type", "authorization_code");
        params.add("client_id", kakaoClientId);
        params.add("redirect_uri", redirectUri);
        params.add("client_secret", kakaoClientSecret);
        params.add("code", code);

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(params, headers);
        ResponseEntity<KakaoTokenResponse> response = restTemplate.exchange(
                kakaoTokenUrl, HttpMethod.POST, request, KakaoTokenResponse.class);

        return response.getBody().getAccessToken();
    }


    // 카카오에서 사용자 정보 가져오기
    public User getKakaoUser(String accessToken) {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + accessToken);

        HttpEntity<Void> request = new HttpEntity<>(headers);
        ResponseEntity<String> response = restTemplate.exchange(
                kakaoUserInfoUrl, HttpMethod.GET, request, String.class);

        String responseBody = response.getBody();
        if (responseBody != null) {

            JsonObject jsonObject = JsonParser.parseString(responseBody).getAsJsonObject();
            JsonObject kakaoAccount = jsonObject.getAsJsonObject("kakao_account");
            JsonObject properties = jsonObject.getAsJsonObject("properties");

            Long kakaoId = jsonObject.get("id").getAsLong();
            String email = kakaoAccount.get("email").getAsString();
            String profileImageUrl = properties.get("profile_image").getAsString();

            User user = new User();
            user.setKakaoId(kakaoId);
            user.setEmail(email);
            user.setProfileImageUrl(profileImageUrl);

            return user;
        }

        throw new RuntimeException("유저의 정보가 없습니다.");
    }


    // 회원가입 (카카오에서 받은 정보를 DB에 저장)
    public User signup(User user) {
        return userRepository.save(user);
    }

    public void validateNickname(String nickname) {
        if (userRepository.findByNickname(nickname).isPresent()) {
            throw new IllegalArgumentException("이미 존재하는 닉네임입니다.");
        }
    }


    public void logout(String accessToken) {
        String url = "https://kapi.kakao.com/v1/user/logout";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        headers.set("Authorization", "Bearer " + accessToken);

        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);

        if (response.getStatusCode() == HttpStatus.OK) {
            System.out.println("Kakao 로그아웃 성공");
        } else {
            throw new RuntimeException("Kakao 로그아웃 실패: " + response.getStatusCode());
        }
    }

    //회원 탈퇴 -> Kakao 회원탈퇴 메소드
    public void withdraw(String authorizationHeader, Long userId) {

        Optional<User> optionalUser = userRepository.findByUserId(userId);


        if (optionalUser.isPresent()) {

            User user = optionalUser.get();
            Long kakaoId = user.getKakaoId();

            String url = "https://kapi.kakao.com/v1/user/unlink";

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
            headers.set("Authorization", authorizationHeader);

            MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
            body.add("target_id_type", "user_id");
            body.add("target_id", kakaoId.toString()); // 카카오 ID를 설정

            HttpEntity<MultiValueMap<String, String>> entity = new HttpEntity<>(body, headers);

            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);

            if (response.getStatusCode() == HttpStatus.OK) {

                //외래키로 엮여있기에 자식키 -> 부모키 순으로 삭제 되도록
                refreshtokenRepository.deleteById(userId);
                userRepository.deleteById(userId);

            } else {
                throw new RuntimeException("Kakao 연결 끊기 실패: " + response.getStatusCode());
            }
        } else {
            throw new RuntimeException("유저를 찾을 수 없습니다.");
        }
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email).orElse(null);
    }

    public User findByUserId(final Long  userId) {
        return userRepository.findByUserId(userId).orElse(null);
    }


    public void updateUser(User user) {
        userRepository.save(user);
    }


    @Transactional
    public String updateUserProfileImage(User user,  MultipartFile profileImage) throws IOException {
        // 기존 프로필 이미지가 있을 경우 S3에서 삭제
        if (user.getProfileImageUrl() != null) {
            String existingFileName = extractFileName(user.getProfileImageUrl());
            if (existingFileName != null && !existingFileName.isEmpty()) {
                s3Uploader.deleteFile("profile-images", existingFileName);
            }
        }

        // 새 이미지 URL로부터 파일을 다운로드하여 S3에 업로드
        String newImageUrl = s3Uploader.uploadFiles(profileImage, "profile-images");
        user.setProfileImageUrl(newImageUrl);
        userRepository.save(user);
        return newImageUrl;
    }

    private String extractFileName(String imageUrl) {
        return imageUrl.substring(imageUrl.lastIndexOf("/") + 1);
    }

}