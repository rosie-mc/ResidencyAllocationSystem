package epic_2.residencymatch.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/companies")
public class CompanyController {

    @PostMapping("/post-job")
    public String postJob(@RequestBody String jobData) {
        // You can replace with a proper Job class later
        System.out.println("Job posted: " + jobData);
        return "Job listing created successfully.";
    }
}
