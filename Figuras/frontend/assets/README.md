# 🔺 Calculadora de Figuras Geométricas

Una aplicación web moderna e interactiva para calcular áreas de figuras geométricas con validación de datos y diseño responsivo.

## 🚀 Características

- **🎨 Diseño Moderno**: Interfaz atractiva con gradientes y animaciones
- **📱 Totalmente Responsivo**: Se adapta a todos los dispositivos
- **✅ Validación Robusta**: Control de errores en tiempo real
- **🎯 Figuras Soportadas**:
  - Rectángulo (Base × Altura)
  - Triángulo Rectángulo ((Base × Altura) ÷ 2)
  - Círculo (π × Radio²)
- **📏 Restricción de Valores**: Solo acepta medidas entre 1 y 100 cm
- **🎭 Visualización de Figuras**: Dibujos SVG animados
- **💫 Efectos Visuales**: Animaciones y transiciones suaves

## 🏗️ Estructura

```
frontend/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos CSS modernos y responsivos
├── js/
│   └── app.js          # Lógica JavaScript principal
└── assets/
    └── README.md       # Documentación del frontend
```

## 📋 Funcionalidades

### 🏠 Pantalla de Inicio
- Título llamativo "Figuras Geométricas"
- Botón principal "Elegir Figura"
- Diseño centrado y atractivo

### 🔍 Selección de Figura
- Cards interactivas para cada figura
- Efectos hover con gradientes
- Iconos representativos (FontAwesome)

### 📊 Pantalla de Cálculo
- Campos de entrada dinámicos según la figura
- Validación en tiempo real
- Mensajes de error claros
- Botones de navegación

### 📈 Pantalla de Resultado
- Visualización de la figura con SVG
- Área calculada destacada
- Fórmula utilizada
- Dimensiones ingresadas
- Opciones para nueva calculación

## 🎛️ Validaciones

- **Rango de Valores**: Entre 1 y 100 cm
- **Formato Numérico**: Solo números válidos
- **Campos Requeridos**: Todos los datos necesarios
- **Feedback Visual**: Colores y mensajes de error

## 🌈 Diseño Visual

### Colores Principales
- **Primario**: #6366f1 (Índigo)
- **Secundario**: #10b981 (Esmeralda)
- **Acento**: #f59e0b (Ámbar)
- **Error**: #ef4444 (Rojo)

### Tipografía
- **Fuente Principal**: Poppins (Google Fonts)
- **Fallbacks**: System fonts

### Efectos
- Gradientes en botones y cards
- Sombras suaves
- Transiciones CSS
- Animaciones de entrada
- Formas flotantes de fondo

## 📱 Responsividad

- **Desktop**: Layout de dos columnas
- **Tablet**: Layout adaptado
- **Mobile**: Layout de una columna
- **Breakpoints**: 768px y 480px

## 🚀 Cómo Usar

1. **Inicio**: Haz clic en "Elegir Figura"
2. **Selección**: Elige la figura geométrica
3. **Datos**: Ingresa las dimensiones (1-100 cm)
4. **Cálculo**: Presiona "Calcular Área"
5. **Resultado**: Ve el área y la figura dibujada

## 🔧 Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: 
  - Variables CSS (Custom Properties)
  - Flexbox y CSS Grid
  - Animaciones y transiciones
  - Media queries
- **JavaScript (ES6+)**:
  - Clases y módulos
  - Event listeners
  - Validación de formularios
  - Manipulación del DOM
- **SVG**: Dibujo de figuras geométricas
- **FontAwesome**: Iconografía
- **Google Fonts**: Tipografía

## 🎯 Integración con Backend Java

El frontend está diseñado para complementar las clases Java:
- `Rectangulo.java`
- `TrianguloRectangulo.java` 
- `Circulo.java`
- `CalculadoraInteractiva.java`

## 🔮 Futuras Mejoras

- Más figuras geométricas
- Modo oscuro/claro
- Historial de cálculos
- Exportar resultados
- Calculadora de perímetros
- Comparación de figuras

---

## 📞 Soporte

Para más información sobre el proyecto completo, consulta el README principal del repositorio.

**¡Disfruta calculando áreas de manera visual e interactiva! 🎉**
