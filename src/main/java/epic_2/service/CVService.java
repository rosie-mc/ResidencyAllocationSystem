package epic_2.service;

import epic_2.model.CV;
import epic_2.repository.CVRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CVService {

    @Autowired
    private CVRepository cvRepository;

    public void uploadCV(CV cv) {
        cvRepository.save(cv);
    }
}
