package com.example.mesh_backend.search.service;

import com.example.mesh_backend.login.service.TokenService;
import com.example.mesh_backend.search.dto.ProjectDetailResponse;
import com.example.mesh_backend.search.dto.ProjectResponseDTO;
import com.example.mesh_backend.post.entity.Post;
import com.example.mesh_backend.login.entity.User;
import com.example.mesh_backend.post.repository.PostRepository;
import com.example.mesh_backend.mark.repository.MarkRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.util.StringUtils;

import java.util.concurrent.TimeUnit;

@Service
@RequiredArgsConstructor
public class SearchService {

    private final PostRepository postRepository;
    private final MarkRepository markRepository;
    private final TokenService tokenService;
    private final RedisTemplate<String, Object> redisTemplate;

    public List<ProjectResponseDTO> searchProjects(String keyword, List<String> categories) {
        String cacheKey = buildCacheKey(keyword, categories);

        // Redis에서 데이터 조회
        ValueOperations<String, Object> valueOperations = redisTemplate.opsForValue();
        List<ProjectResponseDTO> cachedResponse = (List<ProjectResponseDTO>) valueOperations.get(cacheKey);

        if (cachedResponse != null) {
            return cachedResponse; // 캐시된 데이터 반환
        }

        // Redis에 데이터가 없으면 DB에서 조회
        List<Post> posts = postRepository.findByPostTitleContainingOrPostContentsContainingOrUser_NicknameContaining(
                keyword, keyword, keyword
        );

        List<ProjectResponseDTO> response = posts.stream()
                .filter(post -> {
                    if (categories != null && !categories.isEmpty()) {
                        return categories.stream().allMatch(category ->
                                post.getPmCategories().stream().anyMatch(cat -> cat.getKeyword().equals(category)) ||
                                        post.getDesignCategories().stream().anyMatch(cat -> cat.getKeyword().equals(category)) ||
                                        post.getBackCategories().stream().anyMatch(cat -> cat.getKeyword().equals(category)) ||
                                        post.getFrontCategories().stream().anyMatch(cat -> cat.getKeyword().equals(category))
                        );
                    }
                    return true;
                })
                .map(post -> {
                    List<String> postCategories = collectCategories(post);
                    boolean isBookmarked = markRepository.existsByUser_UserIdAndPost_PostId(
                            post.getUser().getUserId(), post.getPostId()
                    );
                    return new ProjectResponseDTO(
                            post.getPostId(),
                            post.getPostTitle(),
                            post.getStatus().toString(),
                            post.getViews() != null ? post.getViews().intValue() : 0,
                            post.getProjectImageUrl(),
                            post.getUser().getNickname(),
                            post.getUser().getProfileImageUrl(),
                            isBookmarked,
                            postCategories
                    );
                })
                .collect(Collectors.toList());

        // Redis에 데이터 캐싱
        valueOperations.set(cacheKey, response, 10, TimeUnit.MINUTES); // 10분 동안 캐싱

        return response;
    }

    private String buildCacheKey(String keyword, List<String> categories) {
        StringBuilder keyBuilder = new StringBuilder("search::");
        keyBuilder.append(keyword);

        if (categories != null && !categories.isEmpty()) {
            keyBuilder.append("::").append(String.join(",", categories));
        }

        return keyBuilder.toString();
    }

    public ProjectDetailResponse getProjectDetail(Long projectId, String token) {
        String accessToken = token.replace("Bearer ", "");
        User user = tokenService.getUserFromAccessToken(accessToken);

        Post post = postRepository.findById(projectId)
                .orElseThrow(() -> new RuntimeException("프로젝트를 찾을 수 없습니다."));

        post.setViews(post.getViews() != null ? post.getViews() + 1 : 1L);
        postRepository.save(post);

        boolean isMarked = markRepository.existsByUser_UserIdAndPost_PostId(user.getUserId(), projectId);

        return new ProjectDetailResponse(
                post.getPostId(),
                post.getPostTitle(),
                post.getPostContents(),
                post.getProjectImageUrl(),
                post.getProjectFile(),
                post.getViews(),
                post.getDeadline(),
                post.getCreateAt(),
                post.getStatus(),
                post.getUser().getNickname(),
                post.getUser().getProfileImageUrl(),
                isMarked
        );
    }

    private List<String> collectCategories(Post post) {
        List<String> categories = new ArrayList<>();

        if (post.getPmCategories() != null && !post.getPmCategories().isEmpty()) {
            categories.add("PM");
        }
        if (post.getDesignCategories() != null && !post.getDesignCategories().isEmpty()) {
            categories.add("Design");
        }
        if (post.getBackCategories() != null && !post.getBackCategories().isEmpty()) {
            categories.add("Back");
        }
        if (post.getFrontCategories() != null && !post.getFrontCategories().isEmpty()) {
            categories.add("Front");
        }

        return categories;
    }
}
