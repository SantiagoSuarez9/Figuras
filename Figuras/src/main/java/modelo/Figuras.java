package main.java.modelo;
import main.java.requerimiento.Requerimiento01;

public abstract class Figuras implements Requerimiento01 { /*"extends" es para heredar; "implements" para agregar el código faltante declaro la clase como abstracta para no escribir código. Una clase abstracta hace que no se pueda escribir ningún código en ella, pero puede ser extendendida por otras clases, todas las interfaces son abstractas.*/

    private Float altura = 0f; /*Puedo ponerlo public o sin poner nada y como esta dentro de la misma carpeta que Rectangulo, lo toma*/
    private Float base = 0f;

    /*Se puede sobrecargar métodos de la clase pero siempre y cuando tenga algún parametro de más o de menos que el que tenga el método original*/
    public Figuras() {

    }


    /*Esto permite poder acceder a los atributos PRIVATE de la clase 'Figuras' (las clases protejen sus estructuras de datos)*/
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

}
