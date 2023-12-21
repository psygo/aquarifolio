"use client";

import { Box } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

import { FanaroIoLogo, Squircle } from "./objects/exports";

function Plane() {
  return (
    <RigidBody type="fixed">
      <Box position={[0, 0, 0]} args={[10, 1, 10]}>
        <meshStandardMaterial color="springgreen" />
      </Box>
    </RigidBody>
  );
}

export function Experience() {
  return (
    <group>
      <group>
        <FanaroIoLogo />
        <Squircle />
      </group>

      <Plane />
    </group>
  );
}
