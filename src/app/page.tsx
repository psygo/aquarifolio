"use client";

import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics } from "@react-three/rapier";

import { Experience } from "@components/exports";

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

        <Suspense>
          <Physics debug>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
    </main>
  );
}
