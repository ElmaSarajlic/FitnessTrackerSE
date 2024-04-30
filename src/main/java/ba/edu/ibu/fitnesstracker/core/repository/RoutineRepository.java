package ba.edu.ibu.fitnesstracker.core.repository;

import ba.edu.ibu.fitnesstracker.core.model.Routine;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoutineRepository extends MongoRepository<Routine, String> {
}
