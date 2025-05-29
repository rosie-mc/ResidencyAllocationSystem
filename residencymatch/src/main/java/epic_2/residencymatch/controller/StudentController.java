package epic_2.residencymatch.controller;

import epic_2.residencymatch.model.Student;
import epic_2.residencymatch.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/students")
public class StudentController {



    @Autowired
    private StudentRepository repo;

    // 🔹 Test endpoint
    @GetMapping("/")
    public String test() {
        return "Student controller is working!";
    }

    @PostMapping("/register")
    public Student register(@RequestBody Student student) {

        return repo.save(student);
    }
    @PostMapping("/rank")
    public String submitRanking(@RequestBody String rankingData) {
        // You can later replace this with a Ranking object
        System.out.println("Received ranking: " + rankingData);
        return "Ranking submitted!";
    }
}
