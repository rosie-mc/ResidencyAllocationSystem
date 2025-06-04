package epic_2.controller;

import epic_2.model.Interview;
import epic_2.repository.InterviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class InterviewController {

    @Autowired
    private InterviewRepository interviewRepository;

    @PostMapping("/submit-score")
    public ResponseEntity<?> submitInterviewScore(@RequestBody Interview interview) {
        interviewRepository.save(interview);
        return ResponseEntity.ok("Interview score submitted successfully");
    }
}
