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
            @Result(property = "role", column = "ROLE"),
            @Result(property = "profilePicture", column = "PROFILE_PICTURE")
    })
    @Select("SELECT * FROM USERS WHERE username = #{username}")
    User findByUsername(String username);

    @Insert("INSERT INTO USERS (NAME, USERNAME, PASSWORD, EMAIL, ROLE, PROFILE_PICTURE) " +
            "VALUES (#{name}, #{username}, #{password}, #{email}, #{role}, #{profilePicture})")
    void saveUser(User user);

    @Update("UPDATE USERS SET " +
            "NAME = #{name}, " +
            "USERNAME = #{username}," +
            "PASSWORD = #{password}, " +
            "EMAIL = #{email}, " +
            "ROLE = #{role}, " +
            "PROFILE_PICTURE = #{profilePicture} " +
            "WHERE id = #{id}")
    void updateUser(User user);

    @Select("SELECT * FROM USERS")
    List<User> getUsers();
}
