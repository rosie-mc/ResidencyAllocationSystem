package epic_2.controller;

import epic_2.model.Match;
import epic_2.service.MatchingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class MatchingController {

    @Autowired
    private MatchingService matchingService;

    @PostMapping("/run-matching")
    public ResponseEntity<?> runMatching(@RequestParam("round") int round) {
        matchingService.runMatchingAlgorithm(round);
        return ResponseEntity.ok("Matching algorithm executed for round " + round);
    }

    @GetMapping("/match-result/{studentId}")
    public ResponseEntity<?> getMatchResult(@PathVariable Long studentId) {
        List<Match> matches = matchingService.getMatchesForStudent(studentId);
        return ResponseEntity.ok(matches);
    }
}
