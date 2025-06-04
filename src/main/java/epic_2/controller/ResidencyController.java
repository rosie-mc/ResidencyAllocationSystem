package epic_2.controller;

import epic_2.model.Residency;
import epic_2.repository.ResidencyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ResidencyController {

    @Autowired
    private ResidencyRepository residencyRepository;

    @GetMapping("/jobs")
    public List<Residency> getAllJobs() {
        return residencyRepository.findAll();
    }

    @PostMapping("/jobs")
    public ResponseEntity<?> postJob(@RequestBody Residency residency) {
        residencyRepository.save(residency);
        return ResponseEntity.ok("Job posted successfully");
    }
}