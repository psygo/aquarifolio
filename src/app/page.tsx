"use client";

import { Suspense, useEffect, useRef } from "react";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  KeyboardControls,
  Lightformer,
  OrbitControls,
  Stats,
  useKeyboardControls,
} from "@react-three/drei";
import {
  Physics,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";
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

// export default function ThreePortfolio() {
//   return (
//     <main style={{ width: "100vw", height: "100vh" }}>
//       <Underlay />
//       <Canvas camera={{ position: [25, 20, 3], fov: 75 }}>
//         <Performance />

//         <Lighting />

//         <OrbitControls />

//         <Suspense>
//           <Physics>
//             <Experience />
//           </Physics>
//         </Suspense>
//       </Canvas>
//     </main>
//   );
// }

function Lighting2() {
  return (
    <group>
      <directionalLight
        castShadow
        position={[4, 4, 1]}
        intensity={1.5}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={10}
        shadow-camera-right={10}
        shadow-camera-bottom={-10}
        shadow-camera-left={-10}
      />
    </group>
  );
}

const boxGeometry = new THREE.BoxGeometry(100, 1, 100);
const floor1Material = new THREE.MeshStandardMaterial({
  color: "limegreen",
});

function BlockStart({
  position = [0, 0, 0],
}: {
  position?: [number, number, number];
}) {
  return (
    <RigidBody type="fixed" colliders="cuboid">
      <mesh
        geometry={boxGeometry}
        material={floor1Material}
        position={position}
        // rotation={[0, 0, 0]}
        // scale={[10, 0.2, 10]}
        receiveShadow
      ></mesh>
    </RigidBody>
  );
}

function Level() {
  return (
    <group>
      <BlockStart />
    </group>
  );
}

function Player() {
  const playerRef = useRef<RapierRigidBody>(null);

  const [subscribeKeys, getKeys] = useKeyboardControls();

  function jump() {
    playerRef.current!.applyImpulse(
      { x: 0, y: 0.5, z: 0 },
      false
    );
  }

  useEffect(() => {
    const unsubscribeKeys = subscribeKeys(
      (state) => state.jump,
      (value) => {
        if (value) {
          jump();
        }
      }
    );

    return () => unsubscribeKeys();
  }, [subscribeKeys]);

  useFrame((_, delta) => {
    const { forward, backward, leftward, rightward } =
      getKeys();

    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };

    const impulseStrength = 0.6 * delta;
    const torqueStrength = 0.2 * delta;

    if (forward) {
      impulse.z -= impulseStrength;
      torque.x -= torqueStrength;
    }
    if (rightward) {
      impulse.x += impulseStrength;
      torque.z -= torqueStrength;
    }
    if (backward) {
      impulse.z += impulseStrength;
      torque.x += torqueStrength;
    }
    if (leftward) {
      impulse.x -= impulseStrength;
      torque.z += torqueStrength;
    }

    if (playerRef.current) {
      playerRef.current.applyImpulse(impulse, false);
      playerRef.current.applyTorqueImpulse(torque, false);
    }
  });

  return (
    <RigidBody
      ref={playerRef}
      canSleep={false}
      colliders="ball"
      restitution={0.2}
      friction={1}
      linearDamping={0.5}
      angularDamping={0.5}
      position={[0, 1, 0]}
    >
      <mesh castShadow>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial
          flatShading
          color="mediumpurple"
        />
      </mesh>
    </RigidBody>
  );
}

export default function Portfolio2() {
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
          <Performance />

          <OrbitControls />

          <Lighting2 />

          <Suspense>
            <Physics debug>
              <Level />
              <Player />
            </Physics>
          </Suspense>
        </Canvas>
      </KeyboardControls>
    </main>
  );
}
