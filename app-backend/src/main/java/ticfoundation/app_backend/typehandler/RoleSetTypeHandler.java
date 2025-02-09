package ticfoundation.app_backend.typehandler;

import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;
import ticfoundation.app_backend.domain.Role;

import java.sql.*;
import java.util.HashSet;
import java.util.Set;

public class RoleSetTypeHandler extends BaseTypeHandler<Set<Role>> {

    @Override
    public void setNonNullParameter(PreparedStatement ps, int i, Set<Role> parameter, JdbcType jdbcType) throws SQLException {
        ps.setString(i, parameter.toString());
    }

    @Override
    public Set<Role> getNullableResult(ResultSet rs, String columnName) throws SQLException {
        String rolesString = rs.getString(columnName);
        return parseRoles(rolesString);
    }

    @Override
    public Set<Role> getNullableResult(ResultSet rs, int columnIndex) throws SQLException {
        String rolesString = rs.getString(columnIndex);
        return parseRoles(rolesString);
    }

    @Override
    public Set<Role> getNullableResult(CallableStatement cs, int columnIndex) throws SQLException {
        String rolesString = cs.getString(columnIndex);
        return parseRoles(rolesString);
    }

    private Set<Role> parseRoles(String rolesString) {
        Set<Role> roles = new HashSet<>();
        if (rolesString != null && !rolesString.isEmpty()) {
            String[] rolesArray = rolesString.replaceAll("[\\[\\]]", "").split(",\\s*");
            for (String role : rolesArray) {
                roles.add(Role.valueOf(role.trim()));
            }
        }
        return roles;
    }
}