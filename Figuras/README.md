# 🔺 Calculadora de Figuras Geométricas
## 🏗️ **Arquitectura Moderna con API RE### 💻 Tecnologías Utilizadas

#### Backend API
- **Spring Boot 3.2.0**: Framework para API REST
- **Bean Validation**: Validación automática de requests
- **CORS**: Habilitado para comunicación frontend-backend
- **Maven**: Gestión de dependencias y builds

#### Frontend Moderno
- **Fetch API**: Comunicación HTTP asíncrona con el backend
- **Async/Await**: Manejo moderno de operaciones asíncronas
- **Error Handling**: Manejo robusto de errores de red y validación
- **Loading States**: Indicadores de carga durante peticiones HTTP

#### UI/UX
- **HTML5**: Estructura semántica moderna
- **CSS3**: Variables CSS, Flexbox, Grid, Animaciones
- **JavaScript ES6+**: Clases, módulos, manipulación del DOM
- **SVG**: Dibujo vectorial de figuras geométricas
- **FontAwesome**: Iconografía moderna
- **Google Fonts**: Tipografía Poppins **Flujo Frontend ↔ Backend**

```
┌─────────────────┐    HTTP/JSON    ┌─────────────────┐    Lógica de    ┌─────────────────┐
│   Frontend Web  │ ────────────→   │  API REST       │    Negocio      │  Clases Modelo  │
│   (HTML/CSS/JS) │                 │  (Spring Boot)  │ ──────────────→ │  (Cálculos)     │
│                 │ ←────────────   │  Puerto 8080    │                 │                 │
└─────────────────┘    Respuesta    └─────────────────┘ ←────────────── └─────────────────┘
```

### ✅ **Beneficios de la Arquitectura Limpia**

1. **🎯 Separación de Responsabilidades**: Frontend, API y lógica separados
2. **🔒 Validación Centralizada**: Validación en el backend (API)
3. **📡 Protocolo Estándar**: API REST para comunicación
4. **🚀 Escalabilidad**: Fácil agregar endpoints y funcionalidades
5. **🧪 Testeable**: Cada capa es independiente y testeable
6. **📚 Reutilizable**: La API puede ser consumida por otras aplicacionesra calcular áreas de figuras geométricas con arquitectura Frontend → API REST → Backend Java.

## 🚀 Características

- **� API REST**: Spring Boot que expone servicios de cálculo de áreas
- **🎯 Frontend Web**: Interfaz moderna que consume la API REST en tiempo real
- **✅ Validación Robusta**: Control de errores y rangos de valores (1-100 cm)
- **🎨 Diseño Moderno**: Gradientes, animaciones y efectos visuales
- **🔗 Arquitectura Limpia**: Separación clara entre frontend y backend

## 📁 Estructura del Proyecto

```
Figuras/
├── README.md               # Documentación principal del proyecto
├── api-server/             # 🚀 API REST con Spring Boot
│   ├── src/main/java/com/figuras/    # Código Spring Boot
│   │   ├── FigurasApiApplication.java    # Aplicación principal
│   │   ├── controller/FigurasController.java  # REST Controller
│   │   ├── model/                    # Clases de modelo para cálculos
│   │   │   ├── Figura.java          # Clase base abstracta
│   │   │   ├── Rectangulo.java      # Implementación rectángulo
│   │   │   ├── TrianguloRectangulo.java  # Implementación triángulo
│   │   │   ├── Circulo.java         # Implementación círculo
│   │   │   └── CalculadorArea.java  # Utilidad de cálculo
│   │   └── dto/                     # Data Transfer Objects
│   │       ├── RectanguloRequest.java
│   │       ├── TrianguloRequest.java
│   │       ├── CirculoRequest.java
│   │       └── AreaResponse.java
│   ├── pom.xml                      # Dependencias Maven
│   ├── run-api.bat                  # Script de ejecución rápida
│   └── README.md                    # Documentación de la API
└── frontend/               # 🌐 Aplicación web moderna
    ├── index.html          # Página principal
    ├── css/styles.css      # Estilos modernos y responsivos
    ├── js/app.js          # Lógica JavaScript + consumo de API
    └── assets/README.md    # Documentación del frontend
```

## �️ **Nueva Arquitectura con API REST**

### 🔗 **Conexión Real Frontend ↔ Java**

```
┌─────────────────┐    HTTP/JSON    ┌─────────────────┐    Llamadas     ┌─────────────────┐
│   Frontend Web  │ ────────────→   │  API REST       │ ──────────────→ │  Clases Java    │
│   (HTML/CSS/JS) │                 │  (Spring Boot)  │                 │  (Modelo Real)  │
│                 │ ←────────────   │  Puerto 8080    │ ←────────────── │                 │
└─────────────────┘    Respuesta    └─────────────────┘    Resultados   └─────────────────┘
```

### ✅ **Beneficios de la Nueva Arquitectura**

1. **🎯 Conexión Real**: Frontend usa directamente las clases Java
2. **🔒 Validación Centralizada**: Una sola fuente de validación (Java)
3. **📡 API REST**: Protocolo estándar para comunicación
4. **🚀 Escalabilidad**: Fácil agregar más endpoints
5. **🧪 Testeable**: API independiente y testeable
6. **📚 Reutilizable**: Otras aplicaciones pueden usar la API

### � Tecnologías Utilizadas

#### Backend API
- **Spring Boot 3.2.0**: Framework para API REST
- **Bean Validation**: Validación automática de requests
- **CORS**: Habilitado para comunicación frontend-backend
- **Maven**: Gestión de dependencias y builds

#### Frontend Moderno
- **Fetch API**: Comunicación HTTP asíncrona con el backend
- **Async/Await**: Manejo moderno de operaciones asíncronas
- **Error Handling**: Manejo robusto de errores de red y validación
- **Loading States**: Indicadores de carga durante peticiones HTTP

## �🎯 Figuras Soportadas

### 🔳 Rectángulo
- **Fórmula**: Base × Altura
- **Inputs**: Base, Altura (1-100 cm)

### 🔺 Triángulo Rectángulo  
- **Fórmula**: (Base × Altura) ÷ 2
- **Inputs**: Base, Altura (1-100 cm)

### ⭕ Círculo
- **Fórmula**: π × Radio²
- **Inputs**: Radio (1-100 cm)

## 🏃‍♂️ Cómo Ejecutar

### 🪟 **Windows**

#### **1️⃣ Iniciar la API REST**
```cmd
cd api-server
run-api.bat
```

#### **2️⃣ Abrir el Frontend**
```cmd
# Abrir en navegador:
frontend/index.html
```

### 🐧 **Linux**

#### **📋 Requisitos (primera vez):**
```bash
# Instalar dependencias
sudo apt update
sudo apt install openjdk-17-jdk maven python3

# Hacer scripts ejecutables
chmod +x run-project-linux.sh
chmod +x api-server/run-api.sh
chmod +x frontend/run-frontend.sh
```

#### **🚀 Ejecutar proyecto completo (recomendado):**
```bash
./run-project-linux.sh
```

#### **🔧 O ejecutar por separado:**
```bash
# Terminal 1 - API
cd api-server && ./run-api.sh

# Terminal 2 - Frontend  
cd frontend && ./run-frontend.sh
```

### 🌐 **Acceso**
- **🔧 API REST**: http://localhost:8080
- **🌐 Frontend**: 
  - Windows: Abrir `frontend/index.html`
  - Linux: http://localhost:3000

### 🌐 **Endpoints de la API**

- **GET** `/api/rectangulo?base=5&altura=3` - Calcular área de rectángulo
- **GET** `/api/triangulo?base=4&altura=6` - Calcular área de triángulo  
- **GET** `/api/circulo?radio=2.5` - Calcular área de círculo

### 🔍 **Verificar API**

```bash
# Probar endpoints directamente:
curl "http://localhost:8080/api/rectangulo?base=5&altura=3"
curl "http://localhost:8080/api/triangulo?base=4&altura=6"
curl "http://localhost:8080/api/circulo?radio=2.5"
```

📖 **Para más detalles sobre Linux**: Ver [LINUX-README.md](LINUX-README.md)

## 🎨 Frontend - Características Destacadas

- **🎭 Interfaz Moderna**: Diseño con gradientes y animaciones
- **📱 Totalmente Responsivo**: Se adapta a móviles, tablets y desktop
- **✅ Validación en Tiempo Real**: Feedback instantáneo de errores
- **🖼️ Visualización SVG**: Figuras dibujadas dinámicamente
- **🎪 Efectos Visuales**: Transiciones suaves y formas flotantes
- **🎯 UX/UI Cuidado**: Navegación intuitiva entre pantallas

## 🎛️ Validaciones Implementadas

### Backend (API REST)
- **Rango de Valores**: Entre 1 y 100 cm (Bean Validation)
- **Tipo de Datos**: Validación automática de números
- **Campos Obligatorios**: Parámetros requeridos en endpoints
- **Respuestas HTTP**: Códigos de estado apropiados (200, 400, 500)

### Frontend
- **Validación en Tiempo Real**: Feedback instantáneo
- **Formato Numérico**: Solo acepta números válidos
- **Mensajes de Error**: Claros y descriptivos
- **Estados de Carga**: Indicadores durante peticiones HTTP

## � Patrones de Diseño y Arquitectura

### Backend (API REST)
- **MVC Pattern**: Separación en Controller, Model y Response DTOs
- **Repository Pattern**: Encapsulación de lógica de cálculo
- **Dependency Injection**: Gestión automática por Spring Boot
- **RESTful Design**: Endpoints claros y semánticos

### Frontend
- **Single Page Application**: Navegación fluida sin recargas
- **Event-Driven Architecture**: Manejo de eventos de usuario
- **Async Programming**: Operaciones no bloqueantes
- **Component-Based**: Separación clara de responsabilidades

### Modelo de Datos
- **Herencia**: Clase base `Figura` con implementaciones específicas
- **Polimorfismo**: Método `calcularArea()` sobrescrito
- **Encapsulación**: Atributos privados con validación
- **Single Responsibility**: Cada clase tiene una responsabilidad clara

## 🌈 Paleta de Colores (Frontend)

- **Primario**: #6366f1 (Índigo moderno)
- **Secundario**: #10b981 (Verde esmeralda)
- **Acento**: #f59e0b (Ámbar cálido)
- **Error**: #ef4444 (Rojo vibrante)
- **Texto**: #1f2937 (Gris oscuro)

---

## 📚 Documentación Adicional

- [API Server README](api-server/README.md) - Documentación detallada de la API REST
- [Frontend README](frontend/assets/README.md) - Documentación detallada del frontend
- Comentarios en código fuente para comprensión completa

**¡Disfruta calculando áreas con una arquitectura moderna y profesional! 🚀**
