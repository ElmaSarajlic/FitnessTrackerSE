package ba.edu.ibu.fitnesstracker.core.model;

import lombok.Builder;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.Date;

@Builder
@Document
public class WorkoutLog {

    @Id
    private String id;

    private Date dateCompleted;

    private List<Routine.ExerciseDetail> exercises;

    private String userId;

    public WorkoutLog() {
    }

    public WorkoutLog(String id, Date dateCompleted, List<Routine.ExerciseDetail> exercises, String userId) {
        this.id = id;
        this.dateCompleted = dateCompleted;
        this.exercises = exercises;
        this.userId = userId;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Date getDateCompleted() {
        return dateCompleted;
    }

    public void setDateCompleted(Date dateCompleted) {
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
}
