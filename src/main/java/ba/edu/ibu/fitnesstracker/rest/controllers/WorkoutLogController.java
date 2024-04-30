package ba.edu.ibu.fitnesstracker.rest.controllers;

import ba.edu.ibu.fitnesstracker.core.service.WorkoutLogService;
import ba.edu.ibu.fitnesstracker.rest.dto.WorkoutLogDTO;
import ba.edu.ibu.fitnesstracker.rest.dto.WorkoutLogRequestDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/workoutlogs")
public class WorkoutLogController {

    private final WorkoutLogService workoutLogService;

    public WorkoutLogController(WorkoutLogService workoutLogService) {
        this.workoutLogService = workoutLogService;
    }

    @RequestMapping(method = RequestMethod.GET, path = "/")
    public ResponseEntity<List<WorkoutLogDTO>> getWorkoutLogs() {
        return ResponseEntity.ok(workoutLogService.getWorkoutLogs());
    }

    @RequestMapping(method = RequestMethod.POST, path = "/")
    public ResponseEntity<WorkoutLogDTO> register(@RequestBody WorkoutLogRequestDTO WorkoutLog) {
        return ResponseEntity.ok(workoutLogService.addWorkoutLog(WorkoutLog));
    }

    @RequestMapping(method = RequestMethod.GET, path = "/{id}")
    public ResponseEntity<WorkoutLogDTO> getWorkoutLogById(@PathVariable String id) {
        return ResponseEntity.ok(workoutLogService.getWorkoutLogById(id));
    }

    @RequestMapping(method = RequestMethod.PUT, path = "/{id}")
    public ResponseEntity<WorkoutLogDTO> updateWorkoutLog(@PathVariable String id, @RequestBody WorkoutLogRequestDTO WorkoutLog) {
        return ResponseEntity.ok(workoutLogService.updateWorkoutLog(id, WorkoutLog));
    }

    @RequestMapping(method = RequestMethod.DELETE, path = "/{id}")
    public ResponseEntity<Void> deleteWorkoutLog(@PathVariable String id) {
        workoutLogService.deleteWorkoutLog(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
