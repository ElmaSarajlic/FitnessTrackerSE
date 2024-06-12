package ba.edu.ibu.fitnesstracker.rest.dto;

import ba.edu.ibu.fitnesstracker.core.model.Routine;
import ba.edu.ibu.fitnesstracker.core.model.WorkoutLog;
import lombok.Builder;

import java.util.Date;
import java.util.List;

@Builder
public class WorkoutLogRequestDTO {
    private List<Routine.ExerciseDetail> exercises;
    private String userId;
    private Date dateCompleted;

    public WorkoutLogRequestDTO() { }

    public WorkoutLogRequestDTO(WorkoutLog workoutLog) {
        this.exercises = workoutLog.getExercises();
        this.userId = workoutLog.getUserId();
        this.dateCompleted = workoutLog.getDateCompleted();
    }

    public WorkoutLog toEntity() {
        return WorkoutLog.builder()
                .exercises(exercises)
                .userId(userId)
                .dateCompleted(dateCompleted)
                .build();
    }

    public WorkoutLogRequestDTO(List<Routine.ExerciseDetail> exercises, String userId, Date dateCompleted) {
        this.exercises = exercises;
        this.userId = userId;
        this.dateCompleted = dateCompleted;
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

    public Date getDateCompleted() {
        return dateCompleted;
    }

    public void setDateCompleted(Date dateCompleted) {
        this.dateCompleted = dateCompleted;
    }
}
