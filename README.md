# 🎬 My Movies

## 📖 Descripción

**My Movies** es una aplicación web desarrollada en Vue.js utilizando Nuxt y PrimeVue. La aplicación permite a los usuarios buscar películas por título usando la API de TMDb, mostrando detalles básicos de las películas y, al seleccionarlas, información más detallada.

## 🌟 Características

- 🔍 **Búsqueda por título**: Permite a los usuarios buscar películas introduciendo el nombre en la barra de búsqueda.
- 🎥 **Lista de resultados**: Muestra una lista de películas que coinciden con el término de búsqueda, incluyendo detalles como el título y el año de lanzamiento.
- 📝 **Información detallada**: Al hacer clic en una película, se muestra un diálogo modal con información detallada sobre la misma.
- ⚙️ **Manejo de estados**: La aplicación maneja estados de carga, éxito y error:
  - ⏳ Muestra un indicador de carga mientras se obtienen los datos.
  - ❌ Muestra un mensaje de error si no se encuentran resultados o hay un problema con la API.
  - 🛠️ Maneja entradas vacías o incorrectas en el campo de búsqueda.

## 💻 Tecnologías Utilizadas

- **Vue.js**: Framework JavaScript para la construcción de interfaces de usuario.
- **Nuxt.js**: Framework basado en Vue.js para crear aplicaciones universales.
- **PrimeVue**: Biblioteca de componentes UI para Vue.js.
- **CSS**: Estilos personalizados para la aplicación.
- **TMDb API**: API utilizada para obtener los datos de las películas.

## 🔧 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- 🟢 Node.js
- 🟠 npm
- 🔑 Una clave API gratuita de TMDb (puedes obtenerla registrándote en [TMDb](https://www.themoviedb.org/)).

## 🚀 Instalación

Sigue estos pasos para clonar y ejecutar la aplicación en tu máquina local:

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/PauSanchezzz/MyMovies.git
   ```

2. **Entrar al directorio del proyecto**:
   ```bash
   cd MyMovies
   ```

3. **Instalar las dependencias**:
   ```bash
   npm install
   ```

4. **Configurar la clave API**:
   
   Crear archivo `.env` siguiendo la estructura definida en `.env.example `, se debe agregar la API KEY.

4. **Ejecutar la aplicación en modo de desarrollo**:
   ```bash
   npm run dev

## 🎯 Uso

1. **Buscar películas**:
   - Introduce el título de una película en la barra de búsqueda y presiona Enter o haz clic en el botón de búsqueda.

2. **Ver detalles de una película**:
   - Haz clic en una película de la lista de resultados para ver información detallada en un diálogo modal.
