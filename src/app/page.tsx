"use client";

import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  OrbitControls,
  Stats,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import {
  Bloom,
  EffectComposer,
  N8AO,
} from "@react-three/postprocessing";

import { Perf } from "r3f-perf";

import { Experience } from "@components/exports";
import { Underlay } from "./components/Underlay";

function Lighting() {
  return (
    <group>
      <ambientLight intensity={0.4} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />

      <EffectComposer disableNormalPass multisampling={8}>
        <N8AO
          distanceFalloff={1}
          aoRadius={1}
          intensity={4}
        />
        <Bloom
          mipmapBlur
          luminanceThreshold={1}
          radius={0.7}
        />
      </EffectComposer>

      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer
            form="circle"
            intensity={4}
            rotation-x={Math.PI / 2}
            position={[0, 5, -9]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={Math.PI / 2}
            position={[-5, -1, -1]}
            scale={2}
          />
          <Lightformer
            form="circle"
            intensity={2}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={8}
          />
        </group>
      </Environment>
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
      <Underlay />
      <Canvas camera={{ position: [25, 20, 3], fov: 75 }}>
        <Performance />

        <Lighting />

        <OrbitControls />

        <Suspense>
          <Physics>
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
    </main>
  );
}
