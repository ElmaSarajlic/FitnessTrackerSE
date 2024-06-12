package ba.edu.ibu.fitnesstracker.rest.dto;

import ba.edu.ibu.fitnesstracker.core.model.Routine;
import lombok.Builder;

import java.util.Date;
import java.util.List;

@Builder
public class RoutineDTO {
    private String id;
    private String name;
    private List<Routine.ExerciseDetail> exercises;
    private Date creationDate;
    private String userId;
    private Boolean isPrivate;
    private int likes;

    public RoutineDTO(Routine routine) {
        this.id = routine.getId();
        this.name = routine.getName();
        this.exercises = routine.getExercises();
        this.creationDate = routine.getCreationDate();
        this.userId = routine.getUserId();
        this.isPrivate = routine.getIsPrivate();
        this.likes = routine.getLikes();
    }

    public RoutineDTO() {
    }

    public RoutineDTO(String id, String name, List<Routine.ExerciseDetail> exercises, Date creationDate, String userId, Boolean isPrivate, int likes) {
        this.id = id;
        this.name = name;
        this.exercises = exercises;
        this.creationDate = creationDate;
        this.userId = userId;
        this.isPrivate = isPrivate;
        this.likes = likes;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public Date getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(Date creationDate) {
        this.creationDate = creationDate;
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

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }
}
