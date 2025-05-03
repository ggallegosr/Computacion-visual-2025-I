import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei'; // Quitamos STLLoader de aquí
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'; // Ya corregido anteriormente
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'; // Nueva importación desde three

function Model({ format }) {
  let model;
  const modelPaths = {
    OBJ: '/models/12140_Skull_v3_L2.obj',
    STL: '/models/skull.stl',
    GLTF: '/models/skull.glb',
  };

  console.log(`Cargando modelo para el formato: ${format}`); // Depuración

  if (format === 'OBJ') {
    const obj = useLoader(OBJLoader, modelPaths.OBJ);
    console.log('OBJ cargado:', obj);
    model = <primitive object={obj} />;
  } else if (format === 'STL') {
    const geometry = useLoader(STLLoader, modelPaths.STL);
    console.log('Geometría STL cargada:', geometry);
    model = (
      <mesh geometry={geometry}>
        <meshStandardMaterial color="gray" />
      </mesh>
    );
  } else if (format === 'GLTF') {
    const { scene } = useGLTF(modelPaths.GLTF);
    console.log('Escena GLTF cargada:', scene);
    model = <primitive object={scene} />;
  }

  let vertexCount = 0;
  if (format === 'OBJ' || format === 'GLTF') {
    model.props.object.traverse((child) => {
      if (child.isMesh) {
        const vertices = child.geometry.attributes.position?.array;
        if (vertices) vertexCount += vertices.length / 3;
      }
    });
  } else if (format === 'STL') {
    const vertices = model.props.geometry.attributes.position?.array;
    if (vertices) vertexCount = vertices.length / 3;
  }

  return (
    <group position={[0, 0, 0]} scale={[1, 1, 1]}>
      {model}
      {console.log('Conteo de vértices:', vertexCount)}
    </group>
  );
}

function App() {
  const [format, setFormat] = useState('OBJ');

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <select
        value={format}
        onChange={(e) => setFormat(e.target.value)}
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          padding: '5px',
          zIndex: 1,
        }}
      >
        <option value="OBJ">OBJ</option>
        <option value="STL">STL</option>
        <option value="GLTF">GLTF</option>
      </select>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Model format={format} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;