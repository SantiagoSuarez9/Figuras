# 🐧 **INSTRUCCIONES PARA LINUX**

## 🚀 **Cómo ejecutar el proyecto en Linux**

### **📋 Requisitos previos:**

```bash
# Actualizar sistema
sudo apt update

# Instalar Java 17
sudo apt install openjdk-17-jdk

# Instalar Maven
sudo apt install maven

# Instalar Python (para servidor web del frontend)
sudo apt install python3

# Verificar instalaciones
java -version
mvn -version
python3 --version
```

### **🔧 Configuración inicial (solo la primera vez):**

```bash
# Hacer scripts ejecutables
chmod +x run-project-linux.sh
chmod +x api-server/run-api.sh
chmod +x frontend/run-frontend.sh
```

### **🚀 Opciones de ejecución:**

#### **Opción 1: Proyecto completo (recomendado)**
```bash
./run-project-linux.sh
```
- ✅ Inicia API y Frontend automáticamente
- ✅ Configura puertos correctamente
- ✅ Maneja errores automáticamente

#### **Opción 2: Por separado**
```bash
# Terminal 1 - API
cd api-server
./run-api.sh

# Terminal 2 - Frontend  
cd frontend
./run-frontend.sh
```

### **🌐 Acceso a la aplicación:**

- **🔧 API REST**: http://localhost:8080
- **🌐 Frontend**: http://localhost:3000
- **📊 Prueba API**: http://localhost:8080/api/rectangulo?base=5&altura=3

### **⏹️ Detener el proyecto:**

```bash
# Si usas run-project-linux.sh:
Ctrl + C

# Si ejecutas por separado:
Ctrl + C en cada terminal
```

### **🐛 Solución de problemas:**

#### **❌ Error: "Java no encontrado"**
```bash
sudo apt update
sudo apt install openjdk-17-jdk
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
```

#### **❌ Error: "Maven no encontrado"**
```bash
sudo apt install maven
```

#### **❌ Error: "Puerto ocupado"**
```bash
# Verificar qué proceso usa el puerto
sudo netstat -tulpn | grep :8080
sudo netstat -tulpn | grep :3000

# Matar proceso si es necesario
sudo kill -9 <PID>
```

#### **❌ Frontend no se abre**
```bash
# Verificar Python
python3 --version

# Si no tienes Python, abrir directamente:
xdg-open frontend/index.html
```

### **📂 Estructura después de configurar:**

```
Figuras/
├── run-project-linux.sh    # ✅ Script principal Linux
├── api-server/
│   ├── run-api.bat         # Para Windows
│   ├── run-api.sh          # ✅ Para Linux
│   └── ...
├── frontend/
│   ├── run-frontend.sh     # ✅ Para Linux
│   └── ...
└── README.md
```

### **🎯 Comandos útiles:**

```bash
# Ver logs de la API en tiempo real
cd api-server && ./run-api.sh | tee api.log

# Verificar que todo funciona
curl http://localhost:8080/api/rectangulo?base=10&altura=5

# Ver procesos de Java corriendo
jps
```

---

## 🎉 **¡Listo!**

Tu proyecto ahora funciona perfectamente tanto en:
- 🪟 **Windows** (con .bat)
- 🐧 **Linux** (con .sh)

**¡Disfruta calculando áreas con arquitectura moderna!** 🚀
