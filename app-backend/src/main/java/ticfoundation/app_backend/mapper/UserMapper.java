package ticfoundation.app_backend.mapper;

import org.apache.ibatis.annotations.*;
import ticfoundation.app_backend.domain.User;

import java.util.List;
@Mapper
public interface UserMapper {

    @Results(id = "userResultMap", value = {
            @Result(property = "name", column = "NAME"),
            @Result(property = "username", column = "USERNAME"),
            @Result(property = "password", column = "PASSWORD"),
            @Result(property = "email", column = "EMAIL"),
            @Result(property = "roles", column = "ROLES"),
            @Result(property = "profilePicture", column = "PROFILE_PICTURE")
    })
    @Select("SELECT * FROM APP_USERS WHERE username = #{username}")
    User findByUsername(String username);

    @Insert("INSERT INTO APP_USERS (NAME, USERNAME, PASSWORD, EMAIL, ROLES, PROFILE_PICTURE) " +
            "VALUES (#{name}, #{username}, #{password}, #{email}, #{roles}, #{profilePicture})")
    void saveUser(User user);

    @Update("UPDATE APP_USERS SET " +
            "NAME = #{name}, " +
            "USERNAME = #{username}," +
            "PASSWORD = #{password}, " +
            "EMAIL = #{email}, " +
            "ROLES = #{roles}, " +
            "PROFILE_PICTURE = #{profilePicture} " +
            "WHERE id = #{id}")
    void updateUser(User user);

    @Select("SELECT * FROM APP_USERS")
    List<User> getUsers();
}
