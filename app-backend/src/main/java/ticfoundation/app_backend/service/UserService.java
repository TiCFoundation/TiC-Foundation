package ticfoundation.app_backend.service;

import ticfoundation.app_backend.domain.User;

import java.util.List;

public interface UserService {
    User findByUsername(String username);
    void registerUser(User user);
    void updateUser(User user);
    void saveUser(User user);
    List<User> getUsers();
}