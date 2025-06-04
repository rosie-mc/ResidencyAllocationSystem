package epic_2.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class MatchingController {

    @PostMapping("/run-matching")
    public ResponseEntity<?> runMatching(@RequestParam("round") int round) {
        // Placeholder: your real matching algorithm would go here
        return ResponseEntity.ok("Matching algorithm executed for round " + round);
    }

    @GetMapping("/match-result/{studentId}")
    public ResponseEntity<?> getMatchResult(@PathVariable Long studentId) {
        // Placeholder: fetch match result from DB
        return ResponseEntity.ok("Returned match result for student: " + studentId);
    }
}
