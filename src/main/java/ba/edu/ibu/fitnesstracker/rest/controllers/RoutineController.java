package ba.edu.ibu.fitnesstracker.rest.controllers;

import ba.edu.ibu.fitnesstracker.core.service.RoutineService;
import ba.edu.ibu.fitnesstracker.rest.dto.RoutineDTO;
import ba.edu.ibu.fitnesstracker.rest.dto.RoutineRequestDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/routines")
public class RoutineController {

    private final RoutineService routineService;

    public RoutineController(RoutineService routineService) {
        this.routineService = routineService;
    }

    @RequestMapping(method = RequestMethod.GET, path = "/")
    public ResponseEntity<List<RoutineDTO>> getRoutines() {
        return ResponseEntity.ok(routineService.getRoutines());
    }

    @RequestMapping(method = RequestMethod.POST, path = "/")
    public ResponseEntity<RoutineDTO> addRoutine(@RequestBody RoutineRequestDTO routine) {
        return ResponseEntity.ok(routineService.addRoutine(routine));
    }

    @RequestMapping(method = RequestMethod.GET, path = "/{id}")
    public ResponseEntity<RoutineDTO> getRoutineById(@PathVariable String id) {
        return ResponseEntity.ok(routineService.getRoutineById(id));
    }

    @RequestMapping(method = RequestMethod.PUT, path = "/{id}")
    public ResponseEntity<RoutineDTO> updateRoutine(@PathVariable String id, @RequestBody RoutineRequestDTO routine) {
        return ResponseEntity.ok(routineService.updateRoutine(id, routine));
    }

    @RequestMapping(method = RequestMethod.DELETE, path = "/{id}")
    public ResponseEntity<Void> deleteRoutine(@PathVariable String id) {
        routineService.deleteRoutine(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
