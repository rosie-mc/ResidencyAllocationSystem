package epic_2.controller;

import epic_2.service.MatchingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private MatchingService matchingService;

    @PostMapping("/run-matching")
    public ResponseEntity<String> runMatching() {
        matchingService.runMatchingAlgorithm(1); // round 1
        return ResponseEntity.ok("✅ Matching complete");
    }
}
