package main.java.modelo;

public class TrianguloRectangulo extends Figuras {

    public TrianguloRectangulo() {

    }

    @Override
    public Float calcular_area() {
        // TODO Auto-generated method stub
        //throw new UnsupportedOperationException("Unimplemented method 'calcular_area'");
        Float area = (this.getAltura() * this.getBase()) / 2;
        
        return area;
    }

}