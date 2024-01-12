"use client";

import {
  Suspense,
  useEffect,
  useRef,
  useState,
} from "react";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  KeyboardControls,
  OrbitControls,
  PerspectiveCamera,
  RenderTexture,
  Text,
  useKeyboardControls,
} from "@react-three/drei";
import {
  Physics,
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";

import {
  Lighting,
  Performance,
} from "./components/exports";

const boxGeometry = new THREE.BoxGeometry(100, 1, 100);
const floor1Material = new THREE.MeshStandardMaterial({
  color: "limegreen",
});

function Floor({
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
      >
        <Decal
          position={[0, 0, 0.75]}
          rotation={[-0.4, Math.PI, 0]}
          scale={[0.9, 0.25, 1]}
        >
          <meshStandardMaterial
            roughness={0.6}
            transparent
            polygonOffset
            polygonOffsetFactor={-10}
          >
            <RenderTexture attach="map" anisotropy={16}>
              <PerspectiveCamera
                makeDefault
                manual
                aspect={0.9 / 0.25}
                position={[0, 0, 5]}
              />
              <color
                attach="background"
                args={["#af2040"]}
              />
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} />
              <Text
                rotation={[0, Math.PI, 0]}
                fontSize={200}
                color="white"
              >
                Hello from Drei
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </Decal>
      </mesh>
    </RigidBody>
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

  const [smoothedCameraPosition] = useState(
    new THREE.Vector3(10, 10, 10)
  );
  const [smoothedCameraTarget] = useState(
    new THREE.Vector3()
  );

  useFrame((state, delta) => {
    if (playerRef) {
      // const bodyPosition =
      //   playerRef.current!.translation() as THREE.Vector3;
      // const cameraPosition = new THREE.Vector3();
      // cameraPosition.copy(bodyPosition);
      // cameraPosition.z += 2.25;
      // cameraPosition.y += 2;
      // const cameraTarget = new THREE.Vector3();
      // cameraTarget.copy(bodyPosition);
      // cameraTarget.y += 0.25;
      // smoothedCameraPosition.lerp(
      //   cameraPosition,
      //   5 * delta
      // );
      // smoothedCameraTarget.lerp(cameraTarget, 5 * delta);
      // state.camera.position.copy(smoothedCameraPosition);
      // state.camera.lookAt(smoothedCameraTarget);
    }
  });

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
