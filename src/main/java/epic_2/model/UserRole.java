package epic_2.model;

import com.fasterxml.jackson.annotation.JsonCreator;

public enum UserRole {
    STUDENT, COMPANY, ADMIN;

    @JsonCreator
    public static UserRole fromString(String value) {
        return UserRole.valueOf(value.toUpperCase());
    }
}
