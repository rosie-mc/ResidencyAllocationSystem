package epic_2;

import jakarta.persistence.*;

@Entity
@Table(name = "residencies")
public class Residency {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "job_title")
    private String jobTitle;

    @Column(name = "job_description", columnDefinition = "TEXT")
    private String jobDescription;

    @Column(name = "job_slots")
    private Integer jobSlots;

    @Column(name = "interview_quota")
    private Integer interviewQuota;

    @Column(name = "recruitment_description", columnDefinition = "TEXT")
    private String recruitmentDescription;

    @ManyToOne
    @JoinColumn(name = "company_id")
    private User company;
}
