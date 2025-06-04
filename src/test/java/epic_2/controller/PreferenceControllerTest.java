package epic_2.controller;

// Importing model classes for User, Residency, Preference, etc.
import epic_2.model.*;
import epic_2.repository.PreferenceRepository;
import epic_2.repository.UserRepository;
import epic_2.repository.ResidencyRepository;

// Importing testing libraries
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;

import java.util.*;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class PreferenceControllerTest {

    // ✅ Mocking all repositories so we don’t use real database during testing
    @Mock
    private PreferenceRepository preferenceRepository;

    @Mock
    private UserRepository userRepository;

    @Mock
    private ResidencyRepository residencyRepository;

    // ✅ Injecting the mocks into PreferenceController for isolated unit testing
    @InjectMocks
    private PreferenceController preferenceController;

    // ✅ This runs before each test to initialize the mocks (Mockito framework)
    @BeforeEach
    void setup() {
        MockitoAnnotations.openMocks(this);
    }

    // ✅ This test checks whether getting all preferences works correctly
    @Test
    void testGetAllPreferences() {
        // Creating mock user and residency objects
        User user = new User();
        Residency residency = new Residency();

        // Creating a preference and assigning the mock user & residency
        Preference preference = new Preference();
        preference.setStudent(user);
        preference.setResidency(residency);
        preference.setRankPosition(1);
        preference.setRound(1);
        preference.setRankingStage(1);

        // ✅ When repository's findAll() is called, return this mock preference list
        when(preferenceRepository.findAll()).thenReturn(List.of(preference));

        // ✅ Call the actual method in PreferenceController
        List<Preference> result = preferenceController.getAllPreferences();

        // ✅ Asserting that one preference is returned
        assertEquals(1, result.size());
        assertEquals(preference, result.get(0));
    }

    // ✅ This test checks whether submitting a preference works as expected
    @Test
    void testSubmitPreferenceSuccess() {
        Long studentId = 1L;    // Mock student ID
        Long residencyId = 2L;  // Mock residency ID

        // Creating mock user and residency to simulate lookup from database
        User user = new User();
        Residency residency = new Residency();

        // ✅ When repositories are asked to findById, return these mocks
        when(userRepository.findById(studentId)).thenReturn(Optional.of(user));
        when(residencyRepository.findById(residencyId)).thenReturn(Optional.of(residency));

        // ✅ Creating a request object simulating user input
        PreferenceController.PreferenceRequest request = new PreferenceController.PreferenceRequest();
        request.setStudentId(studentId);
        request.setResidencyId(residencyId);
        request.setRankPosition(1);
        request.setRound(1);
        request.setRankingStage(1);

        // ✅ Actually call the submitPreference method
        String response = preferenceController.submitPreference(request);

        // ✅ Confirm response string equals success message
        assertEquals("Preference submitted successfully", response);

        // ✅ Verify that preferenceRepository.save() was called once
        verify(preferenceRepository, times(1)).save(any(Preference.class));
    }
}
