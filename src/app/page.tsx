"use client";

import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import {
  Html,
  KeyboardControls,
  OrbitControls,
  Text,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";

import {
  Floor,
  Lighting,
  Performance,
  Player,
} from "./components/exports";

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
            fov: 10,
            zoom: 3,
          }}
        >
          <OrbitControls />
          <Performance />

          <Lighting />

          <Suspense>
            <Text
              position={[0, 0.3, 0]}
              rotation={[Math.PI / 2, Math.PI, 0]}
            >
              Hello Text
            </Text>
            <Physics debug>
              <Html
                position={[0, 0.3, 0]}
                scale={0.2}
                transform
                rotation={[Math.PI / 2, Math.PI, 0]}
              >
                <h1 style={{ color: "white" }}>
                  Hello There!
                </h1>
                <p>My name is Philippe Fanaro</p>
              </Html>
              <Floor />
              <Player />
            </Physics>
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </main>
  );
}
