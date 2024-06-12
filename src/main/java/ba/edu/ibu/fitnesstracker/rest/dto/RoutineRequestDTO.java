package ba.edu.ibu.fitnesstracker.rest.dto;

import ba.edu.ibu.fitnesstracker.core.model.Routine;
import lombok.Builder;

import java.util.Date;
import java.util.List;

@Builder
public class RoutineRequestDTO {

    private String name;
    private List<Routine.ExerciseDetail> exercises;
    private String userId;

    private Boolean isPrivate;

    public RoutineRequestDTO() { }

    public RoutineRequestDTO(Routine routine) {
        this.name = routine.getName();
        this.exercises = routine.getExercises();
        this.userId = routine.getUserId();
        this.isPrivate = routine.getIsPrivate();
    }

    public RoutineRequestDTO(String name, List<Routine.ExerciseDetail> exercises, String userId, Boolean isPrivate) {
        this.name = name;
        this.exercises = exercises;
        this.userId = userId;
        this.isPrivate = isPrivate;
    }

    public Routine toEntity() {
        return Routine.builder()
                .name(name)
                .exercises(exercises)
                .userId(userId)
                .creationDate(new Date())
                .isPrivate(isPrivate)
                .build();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Routine.ExerciseDetail> getExercises() {
        return exercises;
    }

    public void setExercises(List<Routine.ExerciseDetail> exercises) {
        this.exercises = exercises;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Boolean getIsPrivate() {
        return isPrivate;
    }

    public void setIsPrivate(Boolean aPrivate) {
        isPrivate = aPrivate;
    }
}
