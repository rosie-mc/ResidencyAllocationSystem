package epic_2.controller;

import epic_2.model.Preference;
import epic_2.model.Residency;
import epic_2.model.User;
import epic_2.repository.PreferenceRepository;
import epic_2.repository.ResidencyRepository;
import epic_2.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/preferences")
public class PreferenceController {

    @Autowired
    private PreferenceRepository preferenceRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ResidencyRepository residencyRepository;

    // GET all preferences
    @GetMapping
    public List<Preference> getAllPreferences() {
        return preferenceRepository.findAll();
    }

    // GET preferences by student ID
    @GetMapping("/student/{studentId}")
    public List<Preference> getPreferencesByStudent(@PathVariable Long studentId) {
        return preferenceRepository.findByStudentId(studentId);
    }

    // POST to submit a new preference
    @PostMapping
    public String submitPreference(@RequestBody PreferenceRequest request) {
        Optional<User> studentOpt = userRepository.findById(request.getStudentId());
        Optional<Residency> residencyOpt = residencyRepository.findById(request.getResidencyId());

        if (studentOpt.isEmpty() || residencyOpt.isEmpty()) {
            return "Invalid student or residency ID";
        }

        Preference pref = new Preference();
        pref.setStudent(studentOpt.get());
        pref.setResidency(residencyOpt.get());
        pref.setRankPosition(request.getRankPosition());
        pref.setRound(request.getRound());
        pref.setRankingStage(request.getRankingStage());

        preferenceRepository.save(pref);
        return "Preference submitted successfully";
    }

    // DTO for preference request
    public static class PreferenceRequest {
        private Long studentId;
        private Long residencyId;
        private int rankPosition;
        private int round;
        private int rankingStage;

        // Getters and setters
        public Long getStudentId() { return studentId; }
        public void setStudentId(Long studentId) { this.studentId = studentId; }

        public Long getResidencyId() { return residencyId; }
        public void setResidencyId(Long residencyId) { this.residencyId = residencyId; }

        public int getRankPosition() { return rankPosition; }
        public void setRankPosition(int rankPosition) { this.rankPosition = rankPosition; }

        public int getRound() { return round; }
        public void setRound(int round) { this.round = round; }

        public int getRankingStage() { return rankingStage; }
        public void setRankingStage(int rankingStage) { this.rankingStage = rankingStage; }
    }
}
