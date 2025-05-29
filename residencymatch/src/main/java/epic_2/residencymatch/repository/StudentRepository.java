package epic_2.residencymatch.repository;

import epic_2.residencymatch.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {}
