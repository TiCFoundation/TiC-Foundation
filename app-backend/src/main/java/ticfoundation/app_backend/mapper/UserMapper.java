package ticfoundation.app_backend.mapper;

import org.apache.ibatis.annotations.*;
import org.apache.ibatis.exceptions.PersistenceException;
import ticfoundation.app_backend.domain.User;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@Mapper
public interface UserMapper {

    Logger log = LoggerFactory.getLogger(UserMapper.class);

    @Results(id = "userResultMap", value = {
            @Result(property = "id", column = "ID"),
            @Result(property = "name", column = "NAME"),
            @Result(property = "username", column = "USERNAME"),
            @Result(property = "password", column = "PASSWORD"),
            @Result(property = "email", column = "EMAIL"),
            @Result(property = "roles", column = "ROLES"),
            @Result(property = "profilePicture", column = "PROFILE_PICTURE")
    })
    @Select("SELECT * FROM USERS WHERE username = #{username}")
    User findByUsername(String username);

    @Insert("INSERT INTO USERS (NAME, USERNAME, PASSWORD, EMAIL, ROLES, PROFILE_PICTURE) " +
            "VALUES (#{name}, #{username}, #{password}, #{email}, #{roles}, #{profilePicture})")
    void saveUser(User user);

    @Update("UPDATE USERS SET " +
            "NAME = #{name}, " +
            "USERNAME = #{username}," +
            "PASSWORD = #{password}, " +
            "EMAIL = #{email}, " +
            "ROLES = #{roles}, " +
            "PROFILE_PICTURE = #{profilePicture} " +
            "WHERE id = #{id}")
    void updateUser(User user);

    @Select("SELECT * FROM USERS")
    @ResultMap("userResultMap")
    default List<User> getUsers() {
        try {
            log.info("Attempting to retrieve all users from the database");
            List<User> users = executeGetUsers();
            log.info("Successfully retrieved {} users from the database", users.size());
            return users;
        } catch (PersistenceException e) {
            log.error("Error retrieving users from the database", e);
            throw new RuntimeException("Failed to retrieve users", e);
        }
    }

    @Select("SELECT * FROM USERS")
    @ResultMap("userResultMap")
    List<User> executeGetUsers();
}