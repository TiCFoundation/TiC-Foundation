package ticfoundation.app_backend.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import ticfoundation.app_backend.domain.Role;
import ticfoundation.app_backend.domain.User;
import ticfoundation.app_backend.mapper.UserMapper;
import ticfoundation.app_backend.service.UserService;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public User findByUsername(String username) {
        return userMapper.findByUsername(username);
    }

    @Override
    public String registerUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        // Ensure roles are set correctly
        if (user.getRoles() == null || user.getRoles().isEmpty()) {
            Set<Role> roles = new HashSet<>();
            roles.add(Role.ROLE_USER); // Default role
            user.setRoles(roles);
        }

        userMapper.saveUser(user);
        return null;
    }

    @Override
    public void updateUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userMapper.updateUser(user);
    }

    @Override
    public void saveUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userMapper.saveUser(user);
    }

    @Override
    public List<User> getUsers() {
        return userMapper.getUsers();
    }
}