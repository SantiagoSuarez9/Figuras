# 🔺 API REST de Figuras Geométricas

API REST desarrollada con Spring Boot que expone las clases Java como servicios web.

## 🚀 Características

- **Framework**: Spring Boot 3.2.0
- **Java**: 17+
- **Validación**: Bean Validation con anotaciones
- **CORS**: Habilitado para frontend
- **Documentación**: Endpoints autodocumentados

## 📋 Endpoints Disponibles

### 🔳 Rectángulo
```http
POST /api/figuras/rectangulo/area
Content-Type: application/json

{
  "base": 10.5,
  "altura": 5.0
}
```

### 🔺 Triángulo Rectángulo
```http
POST /api/figuras/triangulo/area
Content-Type: application/json

{
  "base": 8.0,
  "altura": 6.0
}
```

### ⭕ Círculo
```http
POST /api/figuras/circulo/area
Content-Type: application/json

{
  "radio": 3.5
}
```

### ℹ️ Información de la API
```http
GET /api/figuras/info
```

### 💚 Health Check
```http
GET /api/figuras/health
```

## 📊 Ejemplo de Respuesta

```json
{
  "tipoFigura": "Rectángulo",
  "area": 52.5,
  "formula": "Base × Altura",
  "dimensiones": {
    "base": 10.5,
    "altura": 5.0
  },
  "mensaje": "El área del rectángulo es 52.50 cm²"
}
```

## 🛠️ Instalación y Ejecución

### Prerrequisitos
- Java 17 o superior
- Maven 3.6+

### Ejecución Rápida
```bash
# Opción 1: Script automático (Windows)
./run-api.bat

# Opción 2: Maven directo
mvn spring-boot:run

# Opción 3: Compilar y ejecutar JAR
mvn clean package
java -jar target/figuras-api-1.0.0.jar
```

### Verificar que funciona
1. Abrir navegador en: http://localhost:8080
2. Probar health check: http://localhost:8080/api/figuras/health

## 🔗 Integración con Frontend

El frontend web en `/frontend` está configurado para consumir esta API automáticamente cuando esté ejecutándose en puerto 8080.

## 📝 Validaciones

- **Rango**: Valores entre 1.0 y 100.0 cm
- **Requeridos**: Todos los campos son obligatorios
- **Formato**: Solo números decimales válidos

## 🚨 Manejo de Errores

### Error de Validación (400)
```json
{
  "mensaje": "Error: La base debe ser mayor o igual a 1"
}
```

### Error de Servidor (500)
```json
{
  "mensaje": "Error interno del servidor"
}
```

## 🏗️ Arquitectura

```
api-server/
├── src/main/java/com/figuras/
│   ├── FigurasApiApplication.java    # Aplicación principal
│   ├── controller/
│   │   └── FigurasController.java    # REST Controller
│   ├── model/                        # Clases de dominio
│   │   ├── Figura.java
│   │   ├── Rectangulo.java
│   │   ├── TrianguloRectangulo.java
│   │   └── Circulo.java
│   └── dto/                          # Data Transfer Objects
│       ├── RectanguloRequest.java
│       ├── TrianguloRequest.java
│       ├── CirculoRequest.java
│       └── AreaResponse.java
├── src/main/resources/
│   ├── application.properties        # Configuración
│   └── banner.txt                   # Banner personalizado
├── pom.xml                          # Dependencias Maven
└── run-api.bat                      # Script de ejecución
```

---

**🎯 ¡La API está lista para conectar el frontend con las clases Java reales!**
