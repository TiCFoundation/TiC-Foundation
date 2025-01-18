package ticfoundation.app_backend.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ticfoundation.app_backend.domain.User;
import ticfoundation.app_backend.mapper.UserMapper;
import ticfoundation.app_backend.service.UserService;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public User findByUsername(String username) {
        return userMapper.findByUsername(username);
    }

    @Override
    public void registerUser(User user) {
        userMapper.saveUser(user);
    }

    @Override
    public void updateUser(User user) {
        userMapper.updateUser(user);
    }

    @Override
    public void saveUser(User user) {
        userMapper.saveUser(user);
    }
    @Override
    public List<User> getUsers() {
        return userMapper.getUsers();
    }
}