package epic_2.residencymatch.model;

import jakarta.persistence.*;

@Entity
public class Student {
    @Id @GeneratedValue
    private Long id;

    private String email;
    private String password;
}
