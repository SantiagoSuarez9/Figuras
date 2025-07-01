package com.figuras.dto;

import jakarta.validation.constraints.DecimalMax;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotNull;

/**
 * DTO para solicitudes de cálculo de rectángulo
 */
public class RectanguloRequest {
    
    @NotNull(message = "La base es requerida")
    @DecimalMin(value = "1.0", message = "La base debe ser mayor o igual a 1")
    @DecimalMax(value = "100.0", message = "La base debe ser menor o igual a 100")
    private Float base;
    
    @NotNull(message = "La altura es requerida")
    @DecimalMin(value = "1.0", message = "La altura debe ser mayor o igual a 1")
    @DecimalMax(value = "100.0", message = "La altura debe ser menor o igual a 100")
    private Float altura;

    // Constructores
    public RectanguloRequest() {}

    public RectanguloRequest(Float base, Float altura) {
        this.base = base;
        this.altura = altura;
    }

    // Getters y Setters
    public Float getBase() {
        return base;
    }

    public void setBase(Float base) {
        this.base = base;
    }

    public Float getAltura() {
        return altura;
    }

    public void setAltura(Float altura) {
        this.altura = altura;
    }
}
