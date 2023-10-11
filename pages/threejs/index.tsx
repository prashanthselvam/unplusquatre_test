import React from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useLoader, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Object3D } from 'three';

type ModelProps = {
  url: string;
};

const Model: React.FC<ModelProps> = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url);
  const meshRef = React.useRef<Object3D>();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005; // Adjust this value for faster or slower rotation
    }
  });

  return <primitive ref={meshRef} object={gltf.scene} />;
};

const Viewer: React.FC<ModelProps> = ({ url }) => {
  return (
    <Canvas className="w-full">
      <PerspectiveCamera position={[0, 0, 0]} fov={100}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 1]} />
        <Model url={url} />
        <OrbitControls />
      </PerspectiveCamera>
    </Canvas>
  );
};

export default function Three() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Viewer url="/images/TESTexport1.glb" />
    </div>
  );
}
