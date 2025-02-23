package ticfoundation.app_backend.config;

import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.type.JdbcType;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import ticfoundation.app_backend.typehandler.RoleSetTypeHandler;

import java.util.Set;

@Configuration
@MapperScan("ticfoundation.app_backend.mapper")
public class MyBatisConfig {

    @Bean
    public SqlSessionFactory sqlSessionFactory(javax.sql.DataSource dataSource) throws Exception {
        SqlSessionFactoryBean sessionFactory = new SqlSessionFactoryBean();
        sessionFactory.setDataSource(dataSource);
        org.apache.ibatis.session.Configuration configuration = new org.apache.ibatis.session.Configuration();
        configuration.getTypeHandlerRegistry().register(Set.class, JdbcType.VARCHAR, RoleSetTypeHandler.class);
        sessionFactory.setConfiguration(configuration);
        return sessionFactory.getObject();
    }
}