package com.figuras.model;

/**
 * Clase base abstracta para todas las figuras geométricas
 */
public abstract class Figura implements CalculadorArea {
    protected Float altura = 0f;
    protected Float base = 0f;

    public Figura() {}

    // Getters y Setters
    public Float getAltura() {
        return altura;
    }

    public void setAltura(Float altura) {
        this.altura = altura;
    }

    public Float getBase() {
        return base;
    }

    public void setBase(Float base) {
        this.base = base;
    }

    // Método abstracto que deben implementar las subclases
    public abstract Float calcularArea();
}
