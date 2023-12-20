"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { Experience } from "./components/exports";

export default function Home() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight
          intensity={0.5}
          position={[300, 300, 4000]}
        />

        <Experience />
      </Canvas>
    </main>
  );
}
