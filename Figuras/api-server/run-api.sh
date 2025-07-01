#!/bin/bash
echo "🚀 Iniciando API de Figuras Geométricas en Linux..."
echo "📋 Verificando Java y Maven..."

# Verificar Java
if ! command -v java &> /dev/null; then
    echo "❌ Java no está instalado. Por favor instala Java 17 o superior."
    echo "   sudo apt update && sudo apt install openjdk-17-jdk"
    exit 1
fi

# Verificar Maven
if ! command -v mvn &> /dev/null; then
    echo "❌ Maven no está instalado. Por favor instala Maven."
    echo "   sudo apt update && sudo apt install maven"
    exit 1
fi

echo "✅ Java version: $(java -version 2>&1 | head -n 1)"
echo "✅ Maven version: $(mvn -version | head -n 1)"

echo ""
echo "🔧 Compilando proyecto..."

# Compilar el proyecto
mvn clean compile

if [ $? -eq 0 ]; then
    echo "✅ Compilación exitosa"
    echo ""
    echo "🌟 Ejecutando API..."
    echo "🌐 La API estará disponible en: http://localhost:8080"
    echo "⏹️  Presiona Ctrl+C para detener la API"
    echo ""
    
    # Ejecutar la aplicación
    mvn spring-boot:run
else
    echo "❌ Error en la compilación"
    exit 1
fi
