package epic_2.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "users")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @Column(name = "role", columnDefinition = "user_role")
    private UserRole role;


    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(name = "course_code")
    private String courseCode;

    @Enumerated(EnumType.STRING)
    @Column(name = "college_year", columnDefinition = "college_year_enum")
    private CollegeYear collegeYear;

}
