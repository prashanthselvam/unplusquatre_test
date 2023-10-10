import React from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useLoader } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

type ModelProps = {
  url: string;
};

const Model: React.FC<ModelProps> = ({ url }) => {
  const gltf = useLoader(GLTFLoader, url);

  return <primitive object={gltf.scene} />;
};

const Viewer: React.FC<ModelProps> = ({ url }) => {
  return (
    <Canvas className="w-full h-screen">
      <PerspectiveCamera position={[0, 0, 0]} fov={10}>
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
