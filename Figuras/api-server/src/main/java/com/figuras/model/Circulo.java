package com.figuras.model;

/**
 * Clase que representa un círculo
 */
public class Circulo extends Figura {
    private Float radio = 0f;

    public Circulo() {
        super();
    }

    public Circulo(Float radio) {
        this.radio = radio;
    }

    public Float getRadio() {
        return radio;
    }

    public void setRadio(Float radio) {
        this.radio = radio;
    }

    @Override
    public Float calcularArea() {
        if (radio == null) {
            throw new IllegalArgumentException("Radio es requerido");
        }
        if (radio <= 0) {
            throw new IllegalArgumentException("Radio debe ser mayor a 0");
        }
        return (float) (Math.PI * radio * radio);
    }

    @Override
    public String toString() {
        return String.format("Circulo{radio=%.2f, area=%.2f}", 
                           radio, calcularArea());
    }
}
