"use client";

import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import {
  Decal,
  KeyboardControls,
  OrbitControls,
  Text,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";

import {
  Floor,
  Lighting,
  Performance,
} from "./components/exports";
import { Player } from "./components/Player";

export default function ThreePortfolio() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <KeyboardControls
        map={[
          { name: "forward", keys: ["ArrowUp", "KeyW"] },
          { name: "backward", keys: ["ArrowDown", "KeyS"] },
          { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
          {
            name: "rightward",
            keys: ["ArrowRight", "KeyD"],
          },
          { name: "jump", keys: ["Space"] },
        ]}
      >
        <Canvas
          camera={{
            position: [25, 20, 3],
            fov: 30,
            zoom: 3,
          }}
        >
          <OrbitControls />
          <Performance />

          <Lighting />

          <Suspense>
            <Physics debug>
              <mesh position={[0, 2, 0]}>
                <dodecahedronGeometry args={[0.75]} />
                <meshStandardMaterial />
                <Decal
                  position={[0, -0.2, 0.5]}
                  scale={0.75}
                  // map-anisotropy={16}
                >
                  <Text color="black">hello</Text>
                </Decal>
              </mesh>

              <Floor />
              <Player />
            </Physics>
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </main>
  );
}
