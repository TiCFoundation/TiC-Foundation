package ticfoundation.app_backend.domain;

import jakarta.persistence.Entity;
import lombok.Data;

import java.util.Set;

@Data
public class User {
    private Long id;
    private String name;
    private String username;
    private String password;
    private String email;
    private String role;
    private byte[] profilePicture;

    // Manually added getter methods
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public String getEmail() {
        return email;
    }

    public String getRole() {
        return role;
    }

    public byte[] getProfilePicture() {
        return null;
    }

    public void setRoles(Set<Role> roleUser) {
    }
}