"use client";

import {
  Box,
  OrbitControls,
  Sphere,
} from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import ExtrudedSvg from "./ExtrudedSvg";

export function Experience() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[-10, 10, 0]}
        intensity={0.4}
      />
      <OrbitControls />

      <RigidBody colliders="hull" position={[-5, 20, 0]}>
        <ExtrudedSvg
          filename="fanaro.io.svg"
          scale={0.1}
          position={[-5, 10, 0]}
        />
      </RigidBody>

      <RigidBody position={[0, 10, 3]}>
        <Box>
          <meshStandardMaterial color="royalblue" />
        </Box>
      </RigidBody>
      <RigidBody position={[1, 10, 3]} colliders="ball">
        <Sphere>
          <meshStandardMaterial color="pink" />
        </Sphere>
      </RigidBody>

      {/* [`RigidBody` `type`](https://rapier.rs/docs/user_guides/bevy_plugin/rigid_bodies/#:~:text=Rigid%2Dbody%20type&text=It%20acts%20as%20if%20it,for%20temporarily%20freezing%20a%20body.) */}
      <RigidBody type="fixed">
        <Box position={[0, 0, 0]} args={[10, 1, 10]}>
          <meshStandardMaterial color="springgreen" />
        </Box>
      </RigidBody>
    </>
  );
}
