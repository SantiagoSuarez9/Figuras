package com.figuras.controller;

import com.figuras.dto.*;
import com.figuras.model.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.validation.annotation.Validated;
import jakarta.validation.Valid;

import java.util.HashMap;
import java.util.Map;

/**
 * Controlador REST para el cálculo de áreas de figuras geométricas
 */
@RestController
@RequestMapping("/api/figuras")
@CrossOrigin(origins = "*") // Permitir CORS para el frontend
@Validated
public class FigurasController {

    /**
     * Endpoint para calcular área de rectángulo
     */
    @PostMapping("/rectangulo/area")
    public ResponseEntity<AreaResponse> calcularAreaRectangulo(@Valid @RequestBody RectanguloRequest request) {
        try {
            Rectangulo rectangulo = new Rectangulo(request.getBase(), request.getAltura());
            Float area = rectangulo.calcularArea();
            
            Map<String, Float> dimensiones = new HashMap<>();
            dimensiones.put("base", request.getBase());
            dimensiones.put("altura", request.getAltura());
            
            AreaResponse response = new AreaResponse(
                "Rectángulo", 
                area, 
                "Base × Altura", 
                dimensiones
            );
            
            return ResponseEntity.ok(response);
            
        } catch (IllegalArgumentException e) {
            AreaResponse errorResponse = new AreaResponse();
            errorResponse.setMensaje("Error: " + e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        } catch (Exception e) {
            AreaResponse errorResponse = new AreaResponse();
            errorResponse.setMensaje("Error interno del servidor");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    /**
     * Endpoint para calcular área de triángulo rectángulo
     */
    @PostMapping("/triangulo/area")
    public ResponseEntity<AreaResponse> calcularAreaTriangulo(@Valid @RequestBody TrianguloRequest request) {
        try {
            TrianguloRectangulo triangulo = new TrianguloRectangulo(request.getBase(), request.getAltura());
            Float area = triangulo.calcularArea();
            
            Map<String, Float> dimensiones = new HashMap<>();
            dimensiones.put("base", request.getBase());
            dimensiones.put("altura", request.getAltura());
            
            AreaResponse response = new AreaResponse(
                "Triángulo Rectángulo", 
                area, 
                "(Base × Altura) ÷ 2", 
                dimensiones
            );
            
            return ResponseEntity.ok(response);
            
        } catch (IllegalArgumentException e) {
            AreaResponse errorResponse = new AreaResponse();
            errorResponse.setMensaje("Error: " + e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        } catch (Exception e) {
            AreaResponse errorResponse = new AreaResponse();
            errorResponse.setMensaje("Error interno del servidor");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    /**
     * Endpoint para calcular área de círculo
     */
    @PostMapping("/circulo/area")
    public ResponseEntity<AreaResponse> calcularAreaCirculo(@Valid @RequestBody CirculoRequest request) {
        try {
            Circulo circulo = new Circulo(request.getRadio());
            Float area = circulo.calcularArea();
            
            Map<String, Float> dimensiones = new HashMap<>();
            dimensiones.put("radio", request.getRadio());
            
            AreaResponse response = new AreaResponse(
                "Círculo", 
                area, 
                "π × Radio²", 
                dimensiones
            );
            
            return ResponseEntity.ok(response);
            
        } catch (IllegalArgumentException e) {
            AreaResponse errorResponse = new AreaResponse();
            errorResponse.setMensaje("Error: " + e.getMessage());
            return ResponseEntity.badRequest().body(errorResponse);
        } catch (Exception e) {
            AreaResponse errorResponse = new AreaResponse();
            errorResponse.setMensaje("Error interno del servidor");
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }

    /**
     * Endpoint de información de la API
     */
    @GetMapping("/info")
    public ResponseEntity<Map<String, Object>> getApiInfo() {
        Map<String, Object> info = new HashMap<>();
        info.put("nombre", "API de Figuras Geométricas");
        info.put("version", "1.0.0");
        info.put("descripcion", "API REST para calcular áreas de figuras geométricas");
        info.put("endpoints", Map.of(
            "rectangulo", "/api/figuras/rectangulo/area",
            "triangulo", "/api/figuras/triangulo/area",
            "circulo", "/api/figuras/circulo/area"
        ));
        info.put("validaciones", "Valores entre 1 y 100 cm");
        
        return ResponseEntity.ok(info);
    }

    /**
     * Endpoint de health check
     */
    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> healthCheck() {
        Map<String, String> status = new HashMap<>();
        status.put("status", "OK");
        status.put("timestamp", String.valueOf(System.currentTimeMillis()));
        status.put("mensaje", "API funcionando correctamente");
        
        return ResponseEntity.ok(status);
    }
}
