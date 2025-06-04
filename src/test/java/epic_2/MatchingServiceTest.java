package epic_2;

// ✅ Import model classes that represent the domain objects (User, Residency, Preference, etc.)
import epic_2.model.*;
import epic_2.repository.*;

// ✅ Import test libraries from JUnit and Mockito
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;

import java.util.List;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

public class MatchingServiceTest {

    // ✅ Mocking all repositories so we don't actually interact with the database.
    @Mock private UserRepository userRepository;
    @Mock private ResidencyRepository residencyRepository;
    @Mock private PreferenceRepository preferenceRepository;
    @Mock private MatchRepository matchRepository;

    // ✅ InjectMocks automatically creates an instance of MatchingService
    // ✅ and injects the mocked repositories into it.
    @InjectMocks private MatchingService matchingService;

    // ✅ This method runs before each test.
    // ✅ It initializes the mocks using Mockito framework so that our @Mock and @InjectMocks work.
    @BeforeEach
    void setup() {
        MockitoAnnotations.openMocks(this);
    }

    // ✅ This is our actual unit test for the matching algorithm.
    @Test
    void testRunMatchingAlgorithm() {
        // ✅ Creating a mock student who will be matched to a residency.
        User student = new User();
        student.setId(1L);  // ✅ Giving the student an ID
        student.setRole(Role.student);  // ✅ Setting the role to student (important because only students get matched)

        // ✅ Creating a mock residency which has 1 job slot available.
        Residency residency = new Residency();
        residency.setId(1L);  // ✅ Residency ID
        residency.setJobSlots(1);  // ✅ Only one available slot to fill

        // ✅ Creating a mock preference that links the student to the residency.
        Preference preference = new Preference();
        preference.setStudent(student);  // ✅ Assign student to preference
        preference.setResidency(residency);  // ✅ Assign residency to preference
        preference.setRankPosition(1);  // ✅ The student's ranking of this residency (highest preference)
        preference.setRound(1);  // ✅ The matching round
        preference.setRankingStage(1);  // ✅ Additional ranking stage data

        // ✅ MOCKING REPOSITORY BEHAVIOR:
        // ✅ When userRepository.findAll() is called by the matching algorithm, return this mock student.
        when(userRepository.findAll()).thenReturn(List.of(student));

        // ✅ When residencyRepository.findAll() is called, return this mock residency.
        when(residencyRepository.findAll()).thenReturn(List.of(residency));

        // ✅ When preferenceRepository.findAll() is called, return this mock preference.
        when(preferenceRepository.findAll()).thenReturn(List.of(preference));

        // ✅ Now we actually run the matching algorithm (this is the method under test).
        matchingService.runMatchingAlgorithm(1);

        // ✅ After running, verify that a match was saved to the match repository.
        // ✅ This confirms that the student was matched to the residency.
        verify(matchRepository, times(1)).save(any(Match.class));
    }
}
