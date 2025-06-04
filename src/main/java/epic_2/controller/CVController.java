package epic_2.controller;

import epic_2.model.CV;
import epic_2.repository.CVRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")
public class CVController {

    @Autowired
    private CVRepository cvRepository;

    @PostMapping("/upload-cv")
    public ResponseEntity<?> uploadCV(@RequestParam("file") MultipartFile file) {
        // Placeholder: real file storage logic would go here
        return ResponseEntity.ok("CV uploaded successfully (file storage not yet implemented)");
    }
}
