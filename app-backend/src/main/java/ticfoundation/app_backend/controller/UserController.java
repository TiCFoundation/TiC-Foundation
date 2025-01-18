package ticfoundation.app_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import ticfoundation.app_backend.domain.LoginRequest;
import ticfoundation.app_backend.domain.User;
import ticfoundation.app_backend.service.UserService;
import ticfoundation.app_backend.util.AllowedRoles;
import ticfoundation.app_backend.util.JwtUtil;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private JwtUtil jwtUtil;

    // Endpoint for registering a user
    @PostMapping("/register")
    public String register(@RequestBody User user) {
        userService.registerUser(user);
        return "User registered successfully";
    }

    // Login endpoint
    @PostMapping("/login")
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
    public String getProfile(@AuthenticationPrincipal String username) {
        System.out.println("Extracted username: " + username);  // Log the username

        User user = userService.findByUsername(username);

        if (user == null) {
            return "User not found";
        }

        return "This is your profile page";
    }

    // Update user (admin ONLY)
//    @AllowedRoles(value = {"ADMIN"})
    @PutMapping("/update")
    public String updateUser(@RequestBody User user) {
        userService.updateUser(user);
        return "User updated successfully";
    }

    @AllowedRoles(value = {"ADMIN"})
    @GetMapping("/getAllUsers")
    public List<User> getUsers() {
        return userService.getUsers();
    }
}