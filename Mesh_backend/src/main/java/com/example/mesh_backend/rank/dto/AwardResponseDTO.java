package com.example.mesh_backend.rank.dto;

import com.example.mesh_backend.mypage.entity.Scale;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class AwardResponseDTO {

    private String projectName;
    private List<String> certificateUrls;
    private Scale scale;
}
