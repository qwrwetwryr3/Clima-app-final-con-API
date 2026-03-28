# clima-app-final

# 🌦️ Clima App Final

Aplicación web desarrollada en **Vue 3 + Vuex** que consume la API de **OpenWeatherMap** para mostrar pronósticos del clima.  
Proyecto de certificación y portafolio final.

---

## 📌 Enlace al repositorio
[Repositorio público en GitHub]
https://github.com/qwrwetwryr3/Clima-app-final-con-API
---

## ⚙️ Instrucciones de ejecución local

### Requisitos
- Node.js (versión 16 o superior recomendada)
- npm (incluido con Node.js)

### Pasos básicos
Clonar el repositorio:
   ```bash
   git clone https://github.com/qwrwetwryr3/Clima-app-final-con-API.git
   cd clima-app-final

- Instalar dependencias:
npm install
- Configurar variables de entorno:
- Crear un archivo .env en la raíz del proyecto.
- Agregar tu API key de OpenWeatherMap (Debes crearte una cuenta):
VITE_API_KEY=tu_api_key_aqui

## 🔑 Configuración de variables de entorno

Este proyecto utiliza un archivo `.env` para manejar la clave de la API de OpenWeatherMap.  
⚠️ **Importante:** el archivo `.env` no debe subirse a GitHub, ya que contiene información sensible.

### Pasos para configurar
1. Copiar el archivo de ejemplo:
   ```bash
   cp .env.example .env

- Editar el archivo .env y colocar tu API key:
VITE_API_KEY=tu_api_key_aqui
- Guardar los cambios y ejecutar la aplicación con:
npm run dev
Nota- El archivo .env.example está incluido en el repositorio como guía.
- Cada persona que clone el proyecto debe crear su propio .env local a partir de ese ejemplo.
- El .env está listado en .gitignore para evitar que se suba al repositorio.


- Abrir en el navegador:
http://localhost:5173



🛣️ Rutas principales de la aplicación
- / → Home: listado de ciudades disponibles para consultar el clima.
- /detalle/:ciudad → Detalle: muestra pronóstico de la ciudad seleccionada, estadísticas y alertas.
- (La vista Configuración fue eliminada, la app funciona siempre en Celsius).

✨ Funcionalidades clave
- Consumo de API: integración con OpenWeatherMap.
- Pronóstico detallado: temperaturas mínimas, máximas y promedio.
- Alertas automáticas:
- Ola de calor (si la máxima supera 30 °C).
- Semana fría (si el promedio es menor a 10 °C).
- Manejo de errores: mensajes claros si la API falla o la ciudad no existe.
- Estilo con Bootstrap: interfaz limpia y responsiva.

📸 Capturas de pantalla
(Opcional: agrega imágenes para mejorar la presentación)
- Home
[Parece que el resultado no era seguro para mostrar. ¡Cambiemos de enfoque y probemos algo diferente!]
- Detalle
[Parece que el resultado no era seguro para mostrar. ¡Cambiemos de enfoque y probemos algo diferente!]

🧑‍💻 Autor
Proyecto desarrollado por Daniel Martínez Curilén como parte del curso Desarrollo de Aplicaciones Front-End Trainee V2.0 (Talento Digital).
