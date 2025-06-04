package epic_2.controller;

import epic_2.model.Interview;
import epic_2.service.InterviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class InterviewController {

    @Autowired
    private InterviewService interviewService;

    @PostMapping("/submit-score")
    public ResponseEntity<?> submitInterviewScore(@RequestBody Interview interview) {
        interviewService.submitInterviewScore(interview);
        return ResponseEntity.ok("Interview score submitted successfully");
    }
}