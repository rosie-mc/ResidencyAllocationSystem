package epic_2.service;

import epic_2.model.*;
import epic_2.repository.MatchRepository;
import epic_2.repository.PreferenceRepository;
import epic_2.repository.ResidencyRepository;
import epic_2.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.*;

@Service
public class MatchingService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ResidencyRepository residencyRepository;

    @Autowired
    private PreferenceRepository preferenceRepository;

    @Autowired
    private MatchRepository matchRepository;

    /**
     * The core matching algorithm — run per round.
     */
    public void runMatchingAlgorithm(int round) {
        List<User> students = userRepository.findAll().stream()
                .filter(u -> u.getRole() == Role.student)
                .toList();

        List<Residency> residencies = residencyRepository.findAll();
        List<Preference> preferences = preferenceRepository.findAll();

        // Build student preference map
        Map<Long, List<Preference>> studentPrefsMap = new HashMap<>();
        for (Preference p : preferences) {
            studentPrefsMap.computeIfAbsent(p.getStudent().getId(), k -> new ArrayList<>()).add(p);
        }

        // Track remaining slots for each residency
        Map<Long, Integer> slotsLeft = new HashMap<>();
        for (Residency r : residencies) {
            slotsLeft.put(r.getId(), r.getJobSlots());
        }

        Set<Long> matchedStudents = new HashSet<>();
        boolean changed = true;

        while (changed) {
            changed = false;

            for (User student : students) {
                if (matchedStudents.contains(student.getId())) continue;

                List<Preference> prefs = studentPrefsMap.get(student.getId());
                if (prefs == null || prefs.isEmpty()) continue;

                prefs.sort(Comparator.comparingInt(Preference::getRankPosition));

                for (Preference pref : prefs) {
                    Long resId = pref.getResidency().getId();
                    if (slotsLeft.getOrDefault(resId, 0) > 0) {
                        Match match = new Match();
                        match.setStudent(student);
                        match.setResidency(pref.getResidency());
                        match.setRound(round);
                        match.setTimestamp(LocalDateTime.now());
                        matchRepository.save(match);

                        slotsLeft.put(resId, slotsLeft.get(resId) - 1);
                        matchedStudents.add(student.getId());
                        changed = true;
                        break;
                    }
                }
            }
        }

        System.out.println("✅ Matching complete: " + matchedStudents.size() + " students matched.");
    }

    /**
     * Fetch match results for a student
     */
    public List<Match> getMatchesForStudent(Long studentId) {
        return matchRepository.findByStudentId(studentId);
    }
}
