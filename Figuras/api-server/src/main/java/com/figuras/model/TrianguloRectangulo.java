package com.figuras.model;

/**
 * Clase que representa un triángulo rectángulo
 */
public class TrianguloRectangulo extends Figura {

    public TrianguloRectangulo() {
        super();
    }

    public TrianguloRectangulo(Float base, Float altura) {
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
        return (base * altura) / 2;
    }

    @Override
    public String toString() {
        return String.format("TrianguloRectangulo{base=%.2f, altura=%.2f, area=%.2f}", 
                           base, altura, calcularArea());
    }
}
