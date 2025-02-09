package ticfoundation.app_backend;

import io.github.cdimascio.dotenv.Dotenv;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springdoc.core.GroupedOpenApi;

@SpringBootApplication
@MapperScan("ticfoundation.app_backend.mapper")
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class AppBackendApplication {
	public static void main(String[] args) {
		Dotenv dotenv = Dotenv.load();
		dotenv.entries().forEach(entry -> System.setProperty(entry.getKey(), entry.getValue()));
		SpringApplication.run(AppBackendApplication.class, args);
	}

	@Bean
	public OpenAPI customOpenAPI() {
		return new OpenAPI().info(
				new Info()
						.title("TiC Foundation Backend")
						.version("v1.0.0")
						.description("TiC Foundation Backend API")
		);
	}

	@Bean
	public GroupedOpenApi publicApi() {
		return GroupedOpenApi.builder()
				.group("default")
				.pathsToMatch("/**")
				.build();
	}
}