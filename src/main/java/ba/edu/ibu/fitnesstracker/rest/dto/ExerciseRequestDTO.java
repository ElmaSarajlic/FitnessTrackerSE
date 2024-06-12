package ba.edu.ibu.fitnesstracker.rest.dto;

import ba.edu.ibu.fitnesstracker.core.model.Exercise;
import ba.edu.ibu.fitnesstracker.core.model.enums.ExerciseGroup;
import lombok.Builder;
import org.springframework.web.multipart.MultipartFile;
@Builder
public class ExerciseRequestDTO {
    private String name;
    private ExerciseGroup muscleGroup;
    private String description;
    private MultipartFile image;

    public ExerciseRequestDTO() {
    }

    public ExerciseRequestDTO(String name, ExerciseGroup muscleGroup, String description, MultipartFile image) {
        this.name = name;
        this.muscleGroup = muscleGroup;
        this.description = description;
        this.image = image;
    }

    public ExerciseRequestDTO(Exercise exercise) {
        this.name = exercise.getName();
        this.muscleGroup = exercise.getMuscleGroup();
        this.description = exercise.getDescription();
    }

    public Exercise toEntity() {
        return Exercise.builder()
                .name(name)
                .muscleGroup(muscleGroup)
                .description(description)
                .build();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ExerciseGroup getMuscleGroup() {
        return muscleGroup;
    }

    public void setMuscleGroup(ExerciseGroup muscleGroup) {
        this.muscleGroup = muscleGroup;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public MultipartFile getImage() {
        return image;
    }

    public void setImage(MultipartFile image) {
        this.image = image;
    }
}
