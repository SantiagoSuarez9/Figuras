#!/bin/bash
echo "🚀 Iniciando Proyecto Completo - Figuras Geométricas"
echo "=================================================="

# Función para manejar Ctrl+C
cleanup() {
    echo ""
    echo "🛑 Deteniendo servicios..."
    jobs -p | xargs -r kill
    echo "✅ Proyecto detenido"
    exit 0
}

trap cleanup INT

# Hacer scripts ejecutables si no lo están
echo "🔧 Configurando permisos..."
chmod +x api-server/run-api.sh
chmod +x frontend/run-frontend.sh

# Navegar al directorio de la API
echo "1️⃣ Iniciando API REST..."
cd api-server

# Ejecutar API en background
./run-api.sh &
API_PID=$!

echo "⏳ Esperando que la API se inicie..."
sleep 15

# Verificar si la API está corriendo
if curl -s http://localhost:8080 > /dev/null 2>&1; then
    echo "✅ API iniciada correctamente"
else
    echo "⚠️  API aún iniciándose... (esto es normal)"
fi

echo ""
echo "2️⃣ Iniciando Frontend..."
cd ../frontend

# Ejecutar frontend en background
./run-frontend.sh &
FRONTEND_PID=$!

echo ""
echo "🎉 ¡Proyecto iniciado completamente!"
echo "📍 API REST: http://localhost:8080"
echo "📍 Frontend: http://localhost:3000"
echo ""
echo "⏹️  Presiona Ctrl+C para detener todo"

# Esperar indefinidamente
wait
