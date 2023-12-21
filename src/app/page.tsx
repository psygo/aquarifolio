"use client";

import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Perf } from "r3f-perf";

import { Experience } from "@components/exports";

function Lighting() {
  return (
    <group>
      <ambientLight intensity={0.5} />
      <spotLight
        intensity={0.5}
        position={[300, 300, 4000]}
      />
    </group>
  );
}

function Performance() {
  return (
    <group>
      <Perf />
      <Stats />
    </group>
  );
}

export default function ThreePortfolio() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [25, 20, 3], fov: 75 }}>
        <Performance />

        <Lighting />

        {/* <OrbitControls /> */}

        <Suspense>
          <Physics debug>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
    </main>
  );
}
