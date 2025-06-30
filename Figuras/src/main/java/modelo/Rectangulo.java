package main.java.modelo;

public class Rectangulo extends Figuras {

    public Rectangulo() {

    }

    @Override /*Este método esta sobreescribiendo a otro*/
    public Float calcular_area() {
        // TODO Auto-generated method stub
        //throw new UnsupportedOperationException("Unimplemented method 'calcular_area'");
        Float area = this.getAltura() * this.getBase();
        
        return area;
    }

}
