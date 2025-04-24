// src/App.jsx
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

function AnimatedCube() {
  const mesh = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // Trayectoria circular centrada en el origen
    const radius = 1.5
    mesh.current.position.x = Math.cos(t) * radius
    mesh.current.position.z = Math.sin(t) * radius // Completamos
    mesh.current.position.y = 0 // Aseguramos que el cubo esté centrado en el eje Y

    // Rotación suave
    mesh.current.rotation.y = t * 0.5
    mesh.current.rotation.x = t * 0.3

    // Escalado oscilante
    const scale = 1 + 0.5 * Math.sin(t * 2)
    mesh.current.scale.set(scale, scale, scale)
  })

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} /> {/* Aumentamos el tamaño del cubo a 2x2x2 */}
      <meshStandardMaterial color="skyblue" />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas
      camera={{ position: [0, 2, 5], fov: 50 }} // Ajustamos la posición de la cámara
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <AnimatedCube />
      <OrbitControls />
    </Canvas>
  )
}