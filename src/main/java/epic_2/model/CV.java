package epic_2.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Table(name = "cvs")
@Data
public class CV {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "student_id")
    private User student;

    @ManyToOne
    @JoinColumn(name = "residency_id")
    private Residency residency;

    @Column(name = "file_url")
    private String fileUrl;

    @Column(name = "uploaded_time")
    private LocalDateTime uploadedTime;
}
