// ========== CONFIGURACIÓN Y VARIABLES GLOBALES ==========
class FigureCalculator {
    constructor() {
        this.currentFigure = null;
        this.currentData = {};
        this.apiBaseUrl = 'http://localhost:8080/api/figuras'; // URL de la API
        this.init();
    }

    init() {
        this.bindEvents();
        this.showScreen('home-screen');
        this.checkApiStatus(); // Verificar estado de la API al iniciar
    }

    // ========== GESTIÓN DE PANTALLAS ==========
    showScreen(screenId) {
        // Ocultar todas las pantallas
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Mostrar la pantalla seleccionada
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
        }
    }

    // ========== EVENTOS ==========
    bindEvents() {
        // Botón iniciar
        document.getElementById('start-btn').addEventListener('click', () => {
            this.showScreen('selection-screen');
        });

        // Botones de navegación
        document.getElementById('back-to-home').addEventListener('click', () => {
            this.showScreen('home-screen');
        });

        document.getElementById('back-to-selection').addEventListener('click', () => {
            this.showScreen('selection-screen');
        });

        document.getElementById('modify-data').addEventListener('click', () => {
            this.modifyCurrentData();
        });

        document.getElementById('new-calculation').addEventListener('click', () => {
            this.showScreen('selection-screen');
            this.resetCalculator();
        });

        // Selección de figuras
        document.querySelectorAll('.figure-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const figureType = card.getAttribute('data-figure');
                this.selectFigure(figureType);
            });
        });

        // Formulario de cálculo
        document.getElementById('calculation-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.calculateArea();
        });

        // Validación en tiempo real
        document.addEventListener('input', (e) => {
            if (e.target.matches('.dimension-input')) {
                this.validateInput(e.target);
            }
        });
    }

    // ========== SELECCIÓN DE FIGURA ==========
    selectFigure(figureType) {
        this.currentFigure = figureType;
        this.setupCalculationScreen();
        this.showScreen('calculation-screen');
    }

    setupCalculationScreen() {
        const config = this.getFigureConfig(this.currentFigure);
        
        // Actualizar título e icono (título normal para nueva selección)
        document.getElementById('calculation-title').innerHTML = `Calculando ${config.name}`;
        document.getElementById('selected-figure-icon').innerHTML = config.icon;

        // Generar campos de entrada
        this.generateInputFields(config.inputs);
    }

    getFigureConfig(figureType) {
        const configs = {
            rectangle: {
                name: 'Rectángulo',
                icon: '<div class="rectangle-icon"></div>',
                inputs: [
                    { name: 'base', label: 'Base', unit: 'cm' },
                    { name: 'altura', label: 'Altura', unit: 'cm' }
                ],
                formula: 'Base × Altura',
                apiEndpoint: '/rectangulo/area'
            },
            triangle: {
                name: 'Triángulo Rectángulo',
                icon: '<div class="triangle-icon"></div>',
                inputs: [
                    { name: 'base', label: 'Base', unit: 'cm' },
                    { name: 'altura', label: 'Altura', unit: 'cm' }
                ],
                formula: '(Base × Altura) ÷ 2',
                apiEndpoint: '/triangulo/area'
            },
            circle: {
                name: 'Círculo',
                icon: '<i class="fas fa-circle"></i>',
                inputs: [
                    { name: 'radio', label: 'Radio', unit: 'cm' }
                ],
                formula: 'π × Radio²',
                apiEndpoint: '/circulo/area'
            }
        };

        return configs[figureType];
    }

    generateInputFields(inputs) {
        const container = document.getElementById('input-fields');
        container.innerHTML = '';

        inputs.forEach(input => {
            const inputGroup = document.createElement('div');
            inputGroup.className = 'input-group';
            
            inputGroup.innerHTML = `
                <label for="${input.name}">${input.label} (${input.unit}):</label>
                <input 
                    type="number" 
                    id="${input.name}" 
                    name="${input.name}"
                    class="dimension-input"
                    min="1" 
                    max="100" 
                    step="0.01"
                    placeholder="Ingrese ${input.label.toLowerCase()} entre 1 y 100"
                    required
                >
                <div class="input-error" id="${input.name}-error">
                    El valor debe estar entre 1 y 100 ${input.unit}
                </div>
            `;
            
            container.appendChild(inputGroup);
        });
    }

    // ========== VALIDACIÓN ==========
    validateInput(input) {
        const value = parseFloat(input.value);
        const errorElement = document.getElementById(`${input.name}-error`);
        
        // Limpiar estilos previos
        input.classList.remove('error');
        errorElement.classList.remove('show');

        if (input.value === '') {
            return true; // Campo vacío es válido durante la escritura
        }

        if (isNaN(value) || value < 1 || value > 100) {
            input.classList.add('error');
            errorElement.classList.add('show');
            return false;
        }

        return true;
    }

    validateAllInputs() {
        const inputs = document.querySelectorAll('.dimension-input');
        let allValid = true;
        const data = {};

        inputs.forEach(input => {
            const isValid = this.validateInput(input);
            if (!isValid || input.value === '') {
                allValid = false;
            } else {
                data[input.name] = parseFloat(input.value);
            }
        });

        return { valid: allValid, data };
    }

    // ========== CÁLCULO CON API REST ==========
    async calculateArea() {
        const validation = this.validateAllInputs();
        
        if (!validation.valid) {
            this.showError('Por favor, complete todos los campos con valores válidos entre 1 y 100 cm.');
            return;
        }

        this.hideError();
        this.currentData = validation.data;
        
        const config = this.getFigureConfig(this.currentFigure);
        
        try {
            // Mostrar estado de carga
            this.showLoading(true);
            
            // Hacer llamada a la API
            const result = await this.callApi(config.apiEndpoint, this.currentData);
            
            if (result.success) {
                this.showResult(config, result.data);
            } else {
                this.showError(result.error || 'Error al calcular el área');
            }
            
        } catch (error) {
            console.error('Error en calculateArea:', error);
            this.showError('Error de conexión con el servidor. Verifique que la API esté funcionando.');
        } finally {
            this.showLoading(false);
        }
    }

    // ========== LLAMADA A LA API ==========
    async callApi(endpoint, data) {
        try {
            const url = this.apiBaseUrl + endpoint;
            
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const errorData = await response.json();
                return {
                    success: false,
                    error: errorData.mensaje || `Error HTTP: ${response.status}`
                };
            }

            const responseData = await response.json();
            return {
                success: true,
                data: responseData
            };

        } catch (error) {
            console.error('Error en API call:', error);
            return {
                success: false,
                error: 'Error de conexión con el servidor'
            };
        }
    }

    // ========== ESTADO DE CARGA ==========
    showLoading(show) {
        const calculateBtn = document.getElementById('calculate-btn');
        
        if (show) {
            calculateBtn.disabled = true;
            calculateBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Calculando...';
        } else {
            calculateBtn.disabled = false;
            calculateBtn.innerHTML = '<i class="fas fa-calculator"></i> Calcular Área';
        }
    }

    showError(message) {
        const errorElement = document.getElementById('error-message');
        errorElement.textContent = message;
        errorElement.classList.add('show');
        
        // Auto-ocultar después de 5 segundos
        setTimeout(() => {
            this.hideError();
        }, 5000);
    }

    hideError() {
        const errorElement = document.getElementById('error-message');
        errorElement.classList.remove('show');
    }

    // ========== RESULTADO ==========
    showResult(config, apiResponse) {
        // Actualizar información del resultado usando datos de la API
        document.getElementById('result-figure-name').textContent = apiResponse.tipoFigura;
        document.getElementById('area-value').textContent = `${apiResponse.area.toFixed(2)} cm²`;
        document.getElementById('formula-display').textContent = `Fórmula: ${apiResponse.formula}`;

        // Mostrar dimensiones desde la API
        this.displayDimensionsFromApi(apiResponse.dimensiones);
        
        // Dibujar figura
        this.drawFigure();
        
        // Mostrar pantalla de resultado
        this.showScreen('result-screen');
    }

    displayDimensionsFromApi(dimensiones) {
        const container = document.getElementById('result-dimensions');
        container.innerHTML = '';

        // Convertir el objeto dimensiones a elementos visuales
        Object.entries(dimensiones).forEach(([key, value]) => {
            const dimensionItem = document.createElement('div');
            dimensionItem.className = 'dimension-item';
            
            // Formatear el nombre del campo
            const labelName = key.charAt(0).toUpperCase() + key.slice(1);
            
            dimensionItem.innerHTML = `
                <span>${labelName}:</span>
                <span><strong>${value} cm</strong></span>
            `;
            container.appendChild(dimensionItem);
        });
    }

    drawFigure() {
        const container = document.getElementById('figure-drawing');
        let svg = '';

        switch (this.currentFigure) {
            case 'rectangle':
                svg = this.createRectangleSVG();
                break;
            case 'triangle':
                svg = this.createTriangleSVG();
                break;
            case 'circle':
                svg = this.createCircleSVG();
                break;
        }

        container.innerHTML = svg;
    }

    createRectangleSVG() {
        return `
            <svg class="figure-svg" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="rectGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#6366f1;stop-opacity:0.8" />
                        <stop offset="100%" style="stop-color:#10b981;stop-opacity:0.8" />
                    </linearGradient>
                </defs>
                <rect x="30" y="30" width="140" height="100" 
                      fill="url(#rectGradient)" 
                      stroke="#4f46e5" 
                      stroke-width="3" 
                      rx="8"/>
                <text x="100" y="85" text-anchor="middle" 
                      fill="#1f2937" font-size="16" font-weight="bold">
                    Rectángulo
                </text>
            </svg>
        `;
    }

    createTriangleSVG() {
        return `
            <svg class="figure-svg" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="triGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style="stop-color:#6366f1;stop-opacity:0.8" />
                        <stop offset="100%" style="stop-color:#10b981;stop-opacity:0.8" />
                    </linearGradient>
                </defs>
                <polygon points="40,130 40,30 160,130" 
                         fill="url(#triGradient)" 
                         stroke="#4f46e5" 
                         stroke-width="3"/>
                <text x="90" y="110" text-anchor="middle" 
                      fill="#1f2937" font-size="14" font-weight="bold">
                    Triángulo
                </text>
            </svg>
        `;
    }

    createCircleSVG() {
        return `
            <svg class="figure-svg" viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="circGradient" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" style="stop-color:#10b981;stop-opacity:0.8" />
                        <stop offset="100%" style="stop-color:#6366f1;stop-opacity:0.8" />
                    </radialGradient>
                </defs>
                <circle cx="100" cy="80" r="50" 
                        fill="url(#circGradient)" 
                        stroke="#4f46e5" 
                        stroke-width="3"/>
                <text x="100" y="85" text-anchor="middle" 
                      fill="#1f2937" font-size="16" font-weight="bold">
                    Círculo
                </text>
            </svg>
        `;
    }

    // ========== MODIFICAR DATOS ==========
    modifyCurrentData() {
        // Mantener la figura actual y los datos
        this.setupCalculationScreen();
        this.populateCurrentData();
        this.showModifyMessage();
        this.showScreen('calculation-screen');
    }

    populateCurrentData() {
        // Rellenar los campos con los datos actuales
        Object.keys(this.currentData).forEach(key => {
            const input = document.getElementById(key);
            if (input) {
                input.value = this.currentData[key];
                // Validar el campo para mostrar que está correcto
                this.validateInput(input);
            }
        });
    }

    showModifyMessage() {
        const config = this.getFigureConfig(this.currentFigure);
        const titleElement = document.getElementById('calculation-title');
        titleElement.innerHTML = `
            Modificando ${config.name}
            <small style="display: block; font-size: 0.7em; color: var(--text-secondary); margin-top: 0.5rem;">
                Puedes cambiar los valores y calcular nuevamente
            </small>
        `;
    }

    // ========== VERIFICACIÓN DE API ==========
    async checkApiStatus() {
        try {
            const response = await fetch(`${this.apiBaseUrl}/health`);
            if (response.ok) {
                this.showApiStatus(true);
            } else {
                this.showApiStatus(false);
            }
        } catch (error) {
            this.showApiStatus(false);
        }
    }

    showApiStatus(isOnline) {
        // Crear indicador de estado si no existe
        let statusIndicator = document.getElementById('api-status');
        if (!statusIndicator) {
            statusIndicator = document.createElement('div');
            statusIndicator.id = 'api-status';
            statusIndicator.style.cssText = `
                position: fixed;
                top: 10px;
                right: 10px;
                padding: 8px 12px;
                border-radius: 20px;
                font-size: 12px;
                font-weight: 500;
                z-index: 1000;
                transition: all 0.3s ease;
            `;
            document.body.appendChild(statusIndicator);
        }

        if (isOnline) {
            statusIndicator.innerHTML = '🟢 API Conectada';
            statusIndicator.style.background = 'rgba(16, 185, 129, 0.1)';
            statusIndicator.style.color = '#059669';
            statusIndicator.style.border = '1px solid rgba(16, 185, 129, 0.3)';
        } else {
            statusIndicator.innerHTML = '🔴 API Desconectada';
            statusIndicator.style.background = 'rgba(239, 68, 68, 0.1)';
            statusIndicator.style.color = '#dc2626';
            statusIndicator.style.border = '1px solid rgba(239, 68, 68, 0.3)';
        }
    }

    // ========== UTILIDADES ==========
    resetCalculator() {
        this.currentFigure = null;
        this.currentData = {};
        this.hideError();
        this.clearInputFields();
    }

    clearInputFields() {
        // Limpiar campos de entrada
        document.querySelectorAll('.dimension-input').forEach(input => {
            input.value = '';
            input.classList.remove('error');
        });
        
        // Ocultar errores
        document.querySelectorAll('.input-error').forEach(error => {
            error.classList.remove('show');
        });
    }
}

// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', () => {
    const calculator = new FigureCalculator();
    
    // Agregar efectos visuales adicionales
    addVisualEffects();
});

// ========== EFECTOS VISUALES ==========
function addVisualEffects() {
    // Efecto de partículas en el fondo (opcional)
    createFloatingShapes();
    
    // Efecto de hover mejorado en los botones
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

function createFloatingShapes() {
    const shapes = ['circle', 'square', 'triangle'];
    const container = document.body;
    
    for (let i = 0; i < 6; i++) {
        const shape = document.createElement('div');
        shape.className = `floating-shape floating-${shapes[i % shapes.length]}`;
        shape.style.cssText = `
            position: fixed;
            width: ${Math.random() * 20 + 10}px;
            height: ${Math.random() * 20 + 10}px;
            background: rgba(99, 102, 241, 0.1);
            border-radius: ${shapes[i % shapes.length] === 'circle' ? '50%' : '0'};
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            animation: float ${Math.random() * 10 + 15}s infinite linear;
            pointer-events: none;
            z-index: -1;
        `;
        
        container.appendChild(shape);
    }
    
    // Agregar animación CSS para las formas flotantes
    if (!document.getElementById('floating-animation')) {
        const style = document.createElement('style');
        style.id = 'floating-animation';
        style.textContent = `
            @keyframes float {
                0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateY(-100px) rotate(360deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// ========== FUNCIONES DE UTILIDAD ==========
function formatNumber(num, decimals = 2) {
    return parseFloat(num).toFixed(decimals);
}

function validateRange(value, min = 1, max = 100) {
    const num = parseFloat(value);
    return !isNaN(num) && num >= min && num <= max;
}

// ========== MANEJO DE ERRORES GLOBALES ==========
window.addEventListener('error', (e) => {
    console.error('Error en la aplicación:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('Promesa rechazada:', e.reason);
});

// ========== EXPORTAR PARA USO EXTERNO ==========
window.FigureCalculator = FigureCalculator;
