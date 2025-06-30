package main.java.modelo;

public class Circulo extends Figuras {
    private Float radio = 0f;

    public Circulo() {
        super();
    }

    public Float getRadio() {
        return radio;
    }

    public void setRadio(Float radio) {
        this.radio = radio;
    }

    @Override
    public Float calcular_area() {
        return (float) (Math.PI * radio * radio);
    }
} 