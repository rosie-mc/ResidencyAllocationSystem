package epic_2.controller;

import epic_2.model.CV;
import epic_2.service.CVService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CVController {

    @Autowired
    private CVService cvService;

    @PostMapping("/upload-cv")
    public ResponseEntity<?> uploadCV(@RequestBody CV cv) {
        cvService.uploadCV(cv);
        return ResponseEntity.ok("CV uploaded successfully");
    }
}