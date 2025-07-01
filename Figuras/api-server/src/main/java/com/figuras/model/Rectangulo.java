package com.figuras.model;

/**
 * Clase que representa un rectángulo
 */
public class Rectangulo extends Figura {

    public Rectangulo() {
        super();
    }

    public Rectangulo(Float base, Float altura) {
        this.base = base;
        this.altura = altura;
    }

    @Override
    public Float calcularArea() {
        if (base == null || altura == null) {
            throw new IllegalArgumentException("Base y altura son requeridos");
        }
        if (base <= 0 || altura <= 0) {
            throw new IllegalArgumentException("Base y altura deben ser mayores a 0");
        }
        return base * altura;
    }

    @Override
    public String toString() {
        return String.format("Rectangulo{base=%.2f, altura=%.2f, area=%.2f}", 
                           base, altura, calcularArea());
    }
}
