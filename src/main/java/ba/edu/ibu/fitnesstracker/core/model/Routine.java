package ba.edu.ibu.fitnesstracker.core.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document
public class Routine {

    @Id
    private String id;
    private String name;
    private List<ExerciseDetail> exercises;
    private String userId;
    private Date creationDate;

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

    public List<ExerciseDetail> getExercises() {
        return exercises;
    }

    public void setExercises(List<ExerciseDetail> exercises) {
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

    // nested static class for array of exercises in the routine and their details
     /* {
        "_id": "RoutineID",
            "name": "Upper Body Routine",
            "userId": "userID",
            "exercises": [
        {
            "exerciseId": "excerciseID",
                "weight": 50,
                "sets": 4,
                "reps": 8
        },
        {
            "exerciseId": "excerciseID",
                "weight": 60,
                "sets": 3,
                "reps": 10
        }
    ],
        "creationDate": "2023-10-21T10:30:45Z"
    } */

    public static class ExerciseDetail {
        private String exerciseId;
        private double weight;
        private int sets;
        private int reps;

        public String getExerciseId() {
            return exerciseId;
        }

        public void setExerciseId(String exerciseId) {
            this.exerciseId = exerciseId;
        }

        public double getWeight() {
            return weight;
        }

        public void setWeight(double weight) {
            this.weight = weight;
        }

        public int getSets() {
            return sets;
        }

        public void setSets(int sets) {
            this.sets = sets;
        }

        public int getReps() {
            return reps;
        }

        public void setReps(int reps) {
            this.reps = reps;
        }
    }
}
