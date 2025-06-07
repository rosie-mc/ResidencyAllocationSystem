package epic_2.controller;

import epic_2.model.User;
import epic_2.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import epic_2.dto.LoginRequest;  // Import your new DTO
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


@RestController
@RequestMapping("/api")
public class AuthController {

    private static final Logger logger = LoggerFactory.getLogger(AuthController.class);

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            return ResponseEntity.badRequest().body("Email already exists");
        }
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        logger.info("Login attempt with email: {}", loginRequest.getEmail());
        logger.debug("Password received: {}", loginRequest.getPassword());

        User user = userRepository.findByEmail(loginRequest.getEmail());
        if (user == null) {
            logger.warn("Login failed: user not found with email {}", loginRequest.getEmail());
            return ResponseEntity.badRequest().body("Invalid email or password");
        }

        logger.info("User found: {}. Comparing passwords.", user.getEmail());
        if (!user.getPassword().equals(loginRequest.getPassword())) {
            logger.warn("Login failed: password mismatch for user {}", loginRequest.getEmail());
            return ResponseEntity.badRequest().body("Invalid email or password");
        }

        logger.info("Login successful for user: {}", user.getEmail());
        return ResponseEntity.ok(user);
    }

}
