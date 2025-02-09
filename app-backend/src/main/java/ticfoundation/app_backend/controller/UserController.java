package ticfoundation.app_backend.controller;

import io.swagger.v3.oas.annotations.Operation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ticfoundation.app_backend.domain.LoginRequest;
import ticfoundation.app_backend.domain.User;
import ticfoundation.app_backend.service.FileStorageService;
import ticfoundation.app_backend.service.UserService;
import ticfoundation.app_backend.util.AllowedRoles;
import ticfoundation.app_backend.util.JwtUtil;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private static final Logger log = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private FileStorageService fileStorageService;

    // Endpoint for registering a user
    @PostMapping("/register")
    @Operation(summary = "Register a new user", description = "Create a new user with an optional profile picture")
    public ResponseEntity<String> registerUser(
            @RequestPart("user") User user,
            @RequestPart(value = "profilePicture", required = false) MultipartFile profilePicture) {
        log.info("Added a new user: {}", user.getUsername());

        try {
            if (profilePicture != null) {
                String filePath = fileStorageService.storeFile(profilePicture);
                user.setProfilePicture(Files.readAllBytes(Paths.get(filePath)));
            }
        } catch (IOException e) {
            log.error("Error saving file", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error saving file");
        }

        String responseMessage = userService.registerUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(responseMessage);
    }

    // Login endpoint
    @PostMapping("/login")
    @Operation(summary = "Login to the system", description = "Login to the system and receive a JWT token")
    public String login(@RequestBody LoginRequest loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();

        User foundUser = userService.findByUsername(username);
        if (foundUser != null && foundUser.getPassword().equals(password)) {
            String token = jwtUtil.generateToken(username);
            return String.format("You have successfully logged in. Token: %s", token);
        }
        return "Invalid credentials";
    }

    // Get user profile (authenticated only)
    @AllowedRoles(value = {"ADMIN", "USER"})
    @GetMapping("/profile")
    @Operation(summary = "Retrieve the User Profile Page", description = "Returns user profile")
    public String getProfile(@AuthenticationPrincipal String username) {
        System.out.println("Extracted username: " + username);  // Log the username

        User user = userService.findByUsername(username);

        if (user == null) {
            return "User not found";
        }

        return "This is your profile page";
    }

    // Update user (admin ONLY)
    @PutMapping("/update")
    @Operation(summary = "Update a user", description = "Update a user's details")
    public String updateUser(@RequestBody User user) {
        userService.updateUser(user);
        return "User updated successfully";
    }

    @AllowedRoles(value = {"ADMIN"})
    @GetMapping("/getAllUsers")
    @Operation(summary = "Retrieve a list of users", description = "Returns all users in the system")
    public List<User> getUsers() {
        return userService.getUsers();
    }
}