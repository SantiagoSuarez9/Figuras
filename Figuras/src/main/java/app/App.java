package main.java.app;

import main.java.modelo.Rectangulo;
import main.java.modelo.TrianguloRectangulo;

public class App {
    public static void main(String[] args) {

        /*Calcular área del rectángulo*/
        Rectangulo rect = new Rectangulo();

        rect.setAltura(10f);
        rect.setBase(5f);

        Float area = rect.calcular_area();

        System.out.println("El area de este rectángulo es: " + area);

        //////////////////////////////////////////////////////////////

        /*Calcular área del triángulo rectángulo*/
        TrianguloRectangulo tri = new TrianguloRectangulo();

        tri.setAltura(10f);
        tri.setBase(5f);

        area = tri.calcular_area();

        System.out.println("El area de este triángulo es: " + area);

        //////////////////////////////////////////////////////////////

    }
}
