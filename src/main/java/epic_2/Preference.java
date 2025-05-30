package epic_2;

import jakarta.persistence.*;

@Entity
@Table(name = "preferences")
public class Preference {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private User student;

    @ManyToOne
    @JoinColumn(name = "residency_id")
    private Residency residency;

    @Column(name = "rank_position", nullable = false)
    private Integer rankPosition;

    private Integer round;

    @Column(name = "ranking_stage")
    private Integer rankingStage;
}
