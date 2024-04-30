package ba.edu.ibu.fitnesstracker.core.service;

import ba.edu.ibu.fitnesstracker.core.exceptions.repository.ResourceNotFoundException;
import ba.edu.ibu.fitnesstracker.core.model.Routine;
import ba.edu.ibu.fitnesstracker.core.repository.RoutineRepository;
import ba.edu.ibu.fitnesstracker.rest.dto.RoutineDTO;
import ba.edu.ibu.fitnesstracker.rest.dto.RoutineRequestDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static java.util.stream.Collectors.toList;

@Service
public class RoutineService {

    private final RoutineRepository routineRepository;

    public RoutineService(RoutineRepository routineRepository) {
        this.routineRepository = routineRepository;
    }

    public List<RoutineDTO> getRoutines() {
        List<Routine> routines = routineRepository.findAll();

        return routines
                .stream()
                .map(RoutineDTO::new)
                .collect(toList());
    }

    public RoutineDTO addRoutine(RoutineRequestDTO payload) {
        Routine routine = routineRepository.save(payload.toEntity());
        return new RoutineDTO(routine);
    }

    public RoutineDTO getRoutineById(String id) {
        Optional<Routine> routine = routineRepository.findById(id);

        if (routine.isEmpty()) {
            throw new ResourceNotFoundException("Routine with the given ID does not exist.");
        }

        return new RoutineDTO(routine.get());
    }

    public RoutineDTO updateRoutine(String id, RoutineRequestDTO payload) {
        Optional<Routine> routine = routineRepository.findById(id);

        if (routine.isEmpty()) {
            throw new ResourceNotFoundException("Routine with the given ID does not exist.");
        }

        Routine updatedRoutine = payload.toEntity();
        updatedRoutine.setId(routine.get().getId());
        updatedRoutine = routineRepository.save(updatedRoutine);
        return new RoutineDTO(updatedRoutine);
    }

    public void deleteRoutine(String id) {
        Optional<Routine> routine = routineRepository.findById(id);
        routine.ifPresent(routineRepository::delete);
    }

}
