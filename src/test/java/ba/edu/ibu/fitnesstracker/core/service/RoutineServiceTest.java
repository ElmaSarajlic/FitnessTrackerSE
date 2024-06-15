package ba.edu.ibu.fitnesstracker.core.service;

import ba.edu.ibu.fitnesstracker.core.model.Routine;
import ba.edu.ibu.fitnesstracker.core.repository.RoutineRepository;
import ba.edu.ibu.fitnesstracker.rest.dto.RoutineDTO;
import ba.edu.ibu.fitnesstracker.rest.dto.RoutineRequestDTO;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;

@AutoConfigureMockMvc
@SpringBootTest
public class RoutineServiceTest {

    @MockBean
    RoutineRepository routineRepository;

    @Autowired
    RoutineService routineService;

    @Test
    public void shouldReturnRoutinesWhenCreated() {
        Routine routine = new Routine();
        routine.setId("someId");
        routine.setName("Day 4");
        routine.setExercises(List.of(
                new Routine.ExerciseDetail("detailID", "exerciseID", 50, 12, 12),
                new Routine.ExerciseDetail("detailID", "exerciseID", 50, 12, 12)
        ));
        routine.setUserId("someUserId");

        Mockito.when(routineRepository.save(ArgumentMatchers.any(Routine.class))).thenReturn(routine);

        RoutineDTO savedRoutine = routineService.addRoutine(new RoutineRequestDTO(routine));
        assertThat(routine.getName()).isEqualTo(savedRoutine.getName());
        assertThat(routine.getExercises()).isNotNull();
        System.out.println(savedRoutine.getId());
    }
}
