package com.figuras;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Aplicación principal de Spring Boot para la API de Figuras Geométricas
 */
@SpringBootApplication
@RestController
public class FigurasApiApplication {

    public static void main(String[] args) {
        System.out.println("🚀 Iniciando API de Figuras Geométricas...");
        SpringApplication.run(FigurasApiApplication.class, args);
        System.out.println("✅ API iniciada correctamente en http://localhost:8080");
    }

    @GetMapping("/")
    public String home() {
        return "🔺 API de Figuras Geométricas - Funcionando correctamente! " +
               "Usa /api/figuras/info para ver los endpoints disponibles.";
    }
}
