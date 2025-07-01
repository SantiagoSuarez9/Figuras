package com.figuras.dto;

/**
 * DTO para respuestas de cálculo de área
 */
public class AreaResponse {
    private String tipoFigura;
    private Float area;
    private String formula;
    private Object dimensiones;
    private String mensaje;

    // Constructores
    public AreaResponse() {}

    public AreaResponse(String tipoFigura, Float area, String formula, Object dimensiones) {
        this.tipoFigura = tipoFigura;
        this.area = area;
        this.formula = formula;
        this.dimensiones = dimensiones;
        this.mensaje = String.format("El área del %s es %.2f cm²", tipoFigura.toLowerCase(), area);
    }

    // Getters y Setters
    public String getTipoFigura() {
        return tipoFigura;
    }

    public void setTipoFigura(String tipoFigura) {
        this.tipoFigura = tipoFigura;
    }

    public Float getArea() {
        return area;
    }

    public void setArea(Float area) {
        this.area = area;
    }

    public String getFormula() {
        return formula;
    }

    public void setFormula(String formula) {
        this.formula = formula;
    }

    public Object getDimensiones() {
        return dimensiones;
    }

    public void setDimensiones(Object dimensiones) {
        this.dimensiones = dimensiones;
    }

    public String getMensaje() {
        return mensaje;
    }

    public void setMensaje(String mensaje) {
        this.mensaje = mensaje;
    }
}
