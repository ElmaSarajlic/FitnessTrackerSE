package ba.edu.ibu.fitnesstracker.rest.dto;

import ba.edu.ibu.fitnesstracker.core.model.Routine;
import ba.edu.ibu.fitnesstracker.core.model.WorkoutLog;
import java.util.Date;
import java.util.List;

public class WorkoutLogRequestDTO {
    private List<Routine.ExerciseDetail> exercises;
    private String userId;

    public WorkoutLogRequestDTO() { }

    public WorkoutLogRequestDTO(WorkoutLog workoutLog) {
        this.exercises = workoutLog.getExercises();
        this.userId = workoutLog.getUserId();
    }

    public WorkoutLog toEntity() {
        WorkoutLog workoutLog = new WorkoutLog();
        workoutLog.setExercises(exercises);
        workoutLog.setUserId(userId);
        workoutLog.setDateCompleted(new Date());
        return workoutLog;
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
}
