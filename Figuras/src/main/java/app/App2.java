package main.java.app;

import main.java.modelo.*;

public class App2 {
    
    /*Método constructor*/
    public App2() {
        
    }

    public static void main(String[] args) {

        /*Polimorfismo: Sirve en los lenguaje de programación tipados para declarar un método que puede ser llamado desde cualquier lugar del programa. Se debe poseer una intancia de herencia para que el método pueda ser llamado desde una clase que hereda de la clase original.*/
        Figuras figura = new Rectangulo();

        figura.setAltura(10f);
        figura.setBase(5f);

        Calcular_area2(figura);

        /*Esto es un polimorfismo porque el objeto figura es una referencia que apunta a un objeto de tipo Rectangulo*/
        figura = new TrianguloRectangulo();

        figura.setAltura(10f);
        figura.setBase(5f);

        Calcular_area2(figura);

        figura = new Circulo();
        ((Circulo)figura).setRadio(3f);
        Calcular_area2(figura);

    }

    public static void Calcular_area2(Figuras f) {
        System.out.println("El area es: " + f.calcular_area());
    }


}
