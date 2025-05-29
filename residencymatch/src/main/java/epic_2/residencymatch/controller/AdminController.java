package epic_2.residencymatch.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @PostMapping("/match")
    public String runMatchingAlgorithm() {
        // Placeholder logic for matching
        System.out.println("Matching algorithm triggered");
        return "Matching algorithm ran successfully.";
    }
}

