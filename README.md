# Configuración de un Proyecto React con Vite

Este documento proporciona una guía paso a paso sobre cómo configurar un entorno de desarrollo para crear aplicaciones React utilizando Vite.

## Pre-requisitos

Antes de comenzar, asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu sistema. Esta configuración se ha realizado utilizando las siguientes versiones de las dependencias:

- `@vitejs/plugin-react` versión ^4.2.1
- `react` y `react-dom` versión 18.2.0
- `vite` versión ^5.1.0

## Instalación de Dependencias

Inicialmente, necesitarás instalar las dependencias requeridas, incluyendo React, ReactDOM y el plugin de React para Vite. Abre una terminal y ejecuta los siguientes comandos en la raíz de tu proyecto:

```bash
npm install @vitejs/plugin-react
npm install react react-dom
```

## Configuración de Vite para React

### Modificación del archivo `vite.config.js`

Crea o edita tu `vite.config.js` en la raíz de tu proyecto e importa `@vitejs/plugin-react`. Asegúrate de configurar Vite para usar este plugin, lo que habilitará las características específicas de React, como el fast refresh.

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig ({
    plugins: [react()]
})
```

### Creación del Punto de Entrada

Define el punto de entrada de tu aplicación React creando un archivo `main.jsx`. En este archivo, usarás `react-dom/client` para renderizar tu aplicación en el DOM.

```javascript
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('app')).render(<h1> Hello World </h1>)
```

### Preparación de `index.html`

Tu archivo `index.html` actúa como la plantilla para tu aplicación. Debes asegurarte de que tiene un elemento `div` con el id `app`, que es donde React montará la aplicación. También, necesitas referenciar tu archivo `main.jsx` para que tu código React se ejecute correctamente.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite App</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/main.jsx"></script>
  </body>
</html>
```

## Conclusión

Con estos pasos, has configurado exitosamente tu proyecto para utilizar React con Vite.