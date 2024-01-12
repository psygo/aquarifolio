import { useEffect, useRef, useState } from "react";

import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";
import {
  RapierRigidBody,
  RigidBody,
} from "@react-three/rapier";

export function Player() {
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
