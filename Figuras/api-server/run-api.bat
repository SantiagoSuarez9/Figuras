@echo off
echo 🚀 Iniciando API de Figuras Geométricas...
echo.

cd /d "%~dp0"

echo 📦 Verificando Maven...
where mvn >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Maven no está instalado o no está en el PATH
    echo 💡 Instala Maven desde: https://maven.apache.org/download.cgi
    pause
    exit /b 1
)

echo ✅ Maven encontrado
echo.

echo 🔧 Compilando proyecto...
call mvn clean compile
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Error al compilar el proyecto
    pause
    exit /b 1
)

echo ✅ Compilación exitosa
echo.

echo 🏃‍♂️ Ejecutando API...
echo 📍 La API estará disponible en: http://localhost:8080
echo 🛑 Presiona Ctrl+C para detener la API
echo.

call mvn spring-boot:run

pause
