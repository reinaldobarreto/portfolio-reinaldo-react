
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} scale={2.5}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#3b82f6"
        roughness={0.3}
        metalness={0.7}
      />
    </mesh>
  );
};

const Scene3D = () => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        style={{ height: '100%' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Scene3D;
