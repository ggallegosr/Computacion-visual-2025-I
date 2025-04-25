# Three.js con React Three Fiber

Este proyecto consiste en una escena 3D interactiva de un cubo que cambia de colores desarrollada con **Vite**, **React**, **Three.js** y **React Three Fiber**.

> La bitácora y desarrollo puntual del ejercicio se encuentra en el wiki del repositorio.

## Características principales
- Cubo 3D animado
- Movimiento circular con función senoidal
- Rotación continua sobre su eje
- Escalado dinámico con `Math.sin(elapsedTime)`
- Cámara libre con `OrbitControls`

## Tecnologías utilizadas

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Three.js](https://threejs.org/)
- [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/)
- [@react-three/drei](https://github.com/pmndrs/drei)

## 📋 Pasos para ejecutar el proyecto

###  Instalar Node.js

Descargar desde: [https://nodejs.org](https://nodejs.org)  
Se recomienda la versión **LTS**.
Verifica la instalación:

```bash
node -v
npm -v
```

### Crear el proyecto con Vite
```bash
npm create vite@latest nombre-proyecto -- --template react
cd nombre-proyecto
npm install
```

###  Instalar Three.js y React Three Fiber
```bash
npm install three @react-three/fiber @react-three/drei
```

### Ejecutar el servidor de desarrollo
```bash
npm run dev
```
Luego abre tu navegador en `http://localhost:5173`.

### Requisitos

- Editor recomendado: **Visual Studio Code (VSCode)**
- Navegador actualizado: Chrome, Firefox, Edge, etc.
