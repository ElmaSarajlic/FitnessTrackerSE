package ba.edu.ibu.fitnesstracker.rest.controllers;

import ba.edu.ibu.fitnesstracker.core.model.enums.ExerciseGroup;
import ba.edu.ibu.fitnesstracker.core.service.ExerciseService;
import ba.edu.ibu.fitnesstracker.rest.dto.ExerciseDTO;
import ba.edu.ibu.fitnesstracker.rest.dto.ExerciseRequestDTO;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/exercise")
@SecurityRequirement(name = "JWT Security")
public class ExerciseController {

    private final ExerciseService exerciseService;

    public ExerciseController(ExerciseService exerciseService) {
        this.exerciseService = exerciseService;
    }

    @RequestMapping(method = RequestMethod.GET, path = "/")
    public ResponseEntity<List<ExerciseDTO>> getExercises() {
        return ResponseEntity.ok(exerciseService.getExercises());
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @RequestMapping(method = RequestMethod.POST, path = "/")
    public ResponseEntity<ExerciseDTO> register(@RequestBody ExerciseRequestDTO Exercise) {
        return ResponseEntity.ok(exerciseService.addExercise(Exercise));
    }

    @PreAuthorize("hasAnyAuthority('MEMBER', 'ADMIN')")
    @RequestMapping(method = RequestMethod.GET, path = "/{id}")
    public ResponseEntity<ExerciseDTO> getExerciseById(@PathVariable String id) {
        return ResponseEntity.ok(exerciseService.getExerciseById(id));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @RequestMapping(method = RequestMethod.PUT, path = "/{id}")
    public ResponseEntity<ExerciseDTO> updateExercise(@PathVariable String id, @RequestBody ExerciseRequestDTO Exercise) {
        return ResponseEntity.ok(exerciseService.updateExercise(id, Exercise));
    }

    @PreAuthorize("hasAuthority('ADMIN')")
    @RequestMapping(method = RequestMethod.DELETE, path = "/{id}")
    public ResponseEntity<Void> deleteExercise(@PathVariable String id) {
        exerciseService.deleteExercise(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // to search for exercises by muscle group
    @PreAuthorize("hasAnyAuthority('ADMIN', 'MEMBER')")
    @RequestMapping(method = RequestMethod.GET, path = "/muscleGroup")
    public ResponseEntity<List<ExerciseDTO>> findByMuscleGroup(@RequestParam ExerciseGroup muscleGroup) {
        return ResponseEntity.ok(exerciseService.findByMuscleGroup(muscleGroup));
    }

    // to search for exercise name - helper for later
    @PreAuthorize("hasAnyAuthority('ADMIN', 'MEMBER')")
    @RequestMapping(method = RequestMethod.GET, path = "/{exerciseId}/exerciseName")
    public ResponseEntity<String> findExerciseNameById(@PathVariable String exerciseId) {
        return ResponseEntity.ok(exerciseService.findExerciseNameById(exerciseId));
    }

}