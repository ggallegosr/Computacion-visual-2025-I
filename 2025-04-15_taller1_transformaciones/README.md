## Taller 1 - Transformaciones Básicas en Computación Visual

### Objetivo

Explorar conceptos fundamentales de **transformaciones geométricas** (traslación, rotación y escala) en distintos entornos de programación visual. Cada implementación debe mostrar un objeto o escena básica con transformaciones **estáticas y animadas en función del tiempo**.

---

### 🔹 Entornos de desarrollo

#### 1. 💻 Python (Colab / Jupyter Notebook)
- Herramientas: `matplotlib`, `numpy`, `imageio`
- Crear una figura 2D (puntos o formas)
- Aplicar transformaciones con matrices
- Generar animación y exportar como GIF
- Opcional: mostrar matrices de transformación dinámicamente

#### 2. 🎮 Unity (opcional)
- Crear escena 3D con cubo o esfera
- Script en C# con:
  - Traslación aleatoria por eje
  - Rotación constante con `Time.deltaTime`
  - Escala oscilante con `Mathf.Sin(Time.time)`

#### 3. 🌐 Three.js con React Three Fiber
- Proyecto con Vite y R3F
- Animaciones con `useFrame`:
  - Trayectoria senoidal o circular
  - Rotación por eje
  - Escala suave en el tiempo
- Bonus: agregar `OrbitControls`

#### 4. 🎨 Processing (2D o 3D)
- Sketch con figura geométrica
- Aplicar transformaciones con `translate()`, `rotate()`, `scale()`
- Uso de `pushMatrix()` / `popMatrix()` y `millis()` o `frameCount` para animar

---
