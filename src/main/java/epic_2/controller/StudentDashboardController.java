package epic_2.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class StudentDashboardController {

    @GetMapping("/dashboard/student")
    public ResponseEntity<?> getStudentDashboard() {
        // Placeholder: aggregate student's jobs, preferences, CV, and match result
        return ResponseEntity.ok("Student dashboard data retrieved");
    }
}
