package com.figuras.dto;

import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;

/**
 * DTO para solicitudes de cálculo de círculo
 */
public class CirculoRequest {
    
    @NotNull(message = "El radio es requerido")
    @DecimalMin(value = "1.0", message = "El radio debe ser mayor o igual a 1")
    @DecimalMax(value = "100.0", message = "El radio debe ser menor o igual a 100")
    private Float radio;

    // Constructores
    public CirculoRequest() {}

    public CirculoRequest(Float radio) {
        this.radio = radio;
    }

    // Getters y Setters
    public Float getRadio() {
        return radio;
    }

    public void setRadio(Float radio) {
        this.radio = radio;
    }
}
