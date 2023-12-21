"use client";

import { Box } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

import {
  FanaroIoLogo,
  GithubLogo,
  NextjsLogo,
  ReactLogo,
  Squircle,
  ThreejsLogo,
} from "./objects/exports";

function Plane() {
  return (
    <RigidBody type="fixed">
      <Box position={[0, 0, 0]} args={[20, 1, 20]}>
        <meshStandardMaterial color="springgreen" />
      </Box>
    </RigidBody>
  );
}

function Logos() {
  return (
    <group>
      <FanaroIoLogo />
      <GithubLogo />
      <NextjsLogo />
      <ReactLogo />
      <ThreejsLogo />
    </group>
  );
}

function OtherObjects() {
  return (
    <group>
      <Squircle />
    </group>
  );
}

export function Experience() {
  return (
    <group>
      <group>
        <Logos />
        <OtherObjects />
      </group>

      <Plane />
    </group>
  );
}
