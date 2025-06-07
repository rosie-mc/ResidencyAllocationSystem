package epic_2.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

public enum CollegeYear {
    _1, _2, _3, _4, _5;

    @JsonCreator
    public static CollegeYear forValue(String value) {
        return CollegeYear.valueOf(value);
    }

    @JsonValue
    public String toValue() {
        return this.name();
    }
}
