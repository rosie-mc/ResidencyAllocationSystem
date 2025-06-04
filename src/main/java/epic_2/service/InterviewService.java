package epic_2.service;

import epic_2.model.Interview;
import epic_2.repository.InterviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InterviewService {

    @Autowired
    private InterviewRepository interviewRepository;

    public void submitInterviewScore(Interview interview) {
        interviewRepository.save(interview);
    }
}