package epic_2.controller;

import epic_2.model.Preference;
import epic_2.service.PreferenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class PreferenceController {

    @Autowired
    private PreferenceService preferenceService;

    @PostMapping("/preferences")
    public ResponseEntity<?> submitPreferences(@RequestBody List<Preference> preferences) {
        preferenceService.submitPreferences(preferences);
        return ResponseEntity.ok("Preferences submitted successfully");
    }
}
