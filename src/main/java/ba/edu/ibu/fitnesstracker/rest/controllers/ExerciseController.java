package ba.edu.ibu.fitnesstracker.rest.controllers;

import ba.edu.ibu.fitnesstracker.core.service.ExerciseService;
import ba.edu.ibu.fitnesstracker.rest.dto.ExerciseDTO;
import ba.edu.ibu.fitnesstracker.rest.dto.ExerciseRequestDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/exercise")
public class ExerciseController {

    private final ExerciseService exerciseService;

    public ExerciseController(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

    @RequestMapping(method = RequestMethod.GET, path = "/")
    public ResponseEntity<List<ExerciseDTO>> getExercises() {
        return ResponseEntity.ok(exerciseService.getExercises());
    }

    @RequestMapping(method = RequestMethod.POST, path = "/")
    public ResponseEntity<ExerciseDTO> register(@RequestBody ExerciseRequestDTO Exercise) {
        return ResponseEntity.ok(exerciseService.addExercise(Exercise));
    }

    @RequestMapping(method = RequestMethod.GET, path = "/{id}")
    public ResponseEntity<ExerciseDTO> getExerciseById(@PathVariable String id) {
        return ResponseEntity.ok(exerciseService.getExerciseById(id));
    }

    @RequestMapping(method = RequestMethod.PUT, path = "/{id}")
    public ResponseEntity<ExerciseDTO> updateExercise(@PathVariable String id, @RequestBody ExerciseRequestDTO Exercise) {
        return ResponseEntity.ok(exerciseService.updateExercise(id, Exercise));
    }

    @RequestMapping(method = RequestMethod.DELETE, path = "/{id}")
    public ResponseEntity<Void> deleteExercise(@PathVariable String id) {
        exerciseService.deleteExercise(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}