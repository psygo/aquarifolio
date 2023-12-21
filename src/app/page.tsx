"use client";

import { Suspense, useRef } from "react";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Stats,
} from "@react-three/drei";
import {
  BallCollider,
  Physics,
  RigidBody,
} from "@react-three/rapier";
import { Perf } from "r3f-perf";

import { Experience } from "@components/exports";
import { RigidBody as RG } from "three/examples/jsm/Addons.js";

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

/**
 * From the [Lusion Connectors example](https://codesandbox.io/p/sandbox/lusion-connectors-xy8c8z?file=%2Fsrc%2FApp.js%3A97%2C15)
 */
function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef<typeof RigidBody>(null);
  useFrame(({ mouse, viewport }) => {
    // @ts-ignore
    ref.current?.setNextKinematicTranslation(
      vec.set(
        (mouse.x * viewport.width) / 2,
        (mouse.y * viewport.height) / 2,
        0
      )
    );
  });
  return (
    <RigidBody
      position={[0, 0, 0]}
      type="kinematicPosition"
      colliders={false}
      // @ts-ignore
      ref={ref}
    >
      <BallCollider args={[1]} />
    </RigidBody>
  );
}

export default function ThreePortfolio() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ position: [25, 20, 3], fov: 75 }}>
        <Performance />

        <Lighting />

        <color attach="background" args={["black"]} />
        <Stars saturation={0} count={400} speed={0.5} />

        <OrbitControls />

        <Suspense>
          <Physics debug>
            {/* <Pointer /> */}
            <Experience />
          </Physics>
        </Suspense>
      </Canvas>
    </main>
  );
}
