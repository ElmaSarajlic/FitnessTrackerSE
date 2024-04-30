package ba.edu.ibu.fitnesstracker.core.service;

import ba.edu.ibu.fitnesstracker.core.exceptions.repository.ResourceNotFoundException;
import ba.edu.ibu.fitnesstracker.core.model.Exercise;
import ba.edu.ibu.fitnesstracker.core.repository.ExerciseRepository;
import ba.edu.ibu.fitnesstracker.rest.dto.ExerciseDTO;
import ba.edu.ibu.fitnesstracker.rest.dto.ExerciseRequestDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static java.util.stream.Collectors.toList;

@Service
public class ExerciseService {

    private final ExerciseRepository exerciseRepository;

    public ExerciseService(ExerciseRepository exerciseRepository) {
        this.exerciseRepository = exerciseRepository;
    }

    public List<ExerciseDTO> getExercises() {
        List<Exercise> users = exerciseRepository.findAll();

        return users
                .stream()
                .map(ExerciseDTO::new)
                .collect(toList());
    }

    public ExerciseDTO getExerciseById(String id) {
        Optional<Exercise> exercise = exerciseRepository.findById(id);

        if (exercise.isEmpty()) {
            throw new ResourceNotFoundException("Exercise with the given ID does not exist.");
        }

        return new ExerciseDTO(exercise.get());
    }

    public ExerciseDTO addExercise(ExerciseRequestDTO payload) {
        Exercise exercise = exerciseRepository.save(payload.toEntity());
        return new ExerciseDTO(exercise);
    }

    public ExerciseDTO updateExercise(String id, ExerciseRequestDTO payload) {
        Optional<Exercise> exercise = exerciseRepository.findById(id);

        if (exercise.isEmpty()) {
            throw new ResourceNotFoundException("Exercise with the given ID does not exist.");
        }

        Exercise updatedExercise = payload.toEntity();
        updatedExercise.setId(exercise.get().getId());
        updatedExercise = exerciseRepository.save(updatedExercise);
        return new ExerciseDTO(updatedExercise);
    }

    public void deleteExercise(String id) {
        Optional<Exercise> exercise = exerciseRepository.findById(id);
        exercise.ifPresent(exerciseRepository::delete);
    }
}
