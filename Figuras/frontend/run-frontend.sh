#!/bin/bash
echo "🌐 Iniciando Frontend de Figuras Geométricas..."

# Verificar si Python está disponible
if command -v python3 &> /dev/null; then
    echo "✅ Usando Python 3 para servidor HTTP"
    echo "🌐 Frontend disponible en: http://localhost:3000"
    echo "⏹️  Presiona Ctrl+C para detener"
    echo ""
    python3 -m http.server 3000
elif command -v python &> /dev/null; then
    echo "✅ Usando Python 2 para servidor HTTP"  
    echo "🌐 Frontend disponible en: http://localhost:3000"
    echo "⏹️  Presiona Ctrl+C para detener"
    echo ""
    python -m SimpleHTTPServer 3000
elif command -v node &> /dev/null; then
    echo "✅ Usando Node.js para servidor HTTP"
    if ! command -v npx &> /dev/null; then
        echo "❌ npx no disponible. Instalando http-server globalmente..."
        npm install -g http-server
    fi
    echo "🌐 Frontend disponible en: http://localhost:3000"
    echo "⏹️  Presiona Ctrl+C para detener"
    echo ""
    npx http-server -p 3000
else
    echo "❌ No se encontró Python ni Node.js"
    echo "💡 Opciones:"
    echo "   1. Instalar Python: sudo apt update && sudo apt install python3"
    echo "   2. Instalar Node.js: sudo apt update && sudo apt install nodejs npm"
    echo "   3. Abrir index.html directamente en el navegador"
    echo ""
    echo "🌐 Abriendo index.html en el navegador por defecto..."
    if command -v xdg-open &> /dev/null; then
        xdg-open index.html
    elif command -v gnome-open &> /dev/null; then
        gnome-open index.html
    else
        echo "📁 Abre manualmente: $(pwd)/index.html"
    fi
fi
