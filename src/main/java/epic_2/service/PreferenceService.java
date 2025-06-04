package epic_2.service;

import epic_2.model.Preference;
import epic_2.repository.PreferenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PreferenceService {

    @Autowired
    private PreferenceRepository preferenceRepository;

    public void submitPreferences(List<Preference> preferences) {
        preferenceRepository.saveAll(preferences);
    }
}