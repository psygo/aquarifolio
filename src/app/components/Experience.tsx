"use client";

import * as THREE from "three";
import { Box } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

import {
  FanaroIoLogo,
  FicLogo,
  GithubLogo,
  Icosahedron,
  NextjsLogo,
  ReactLogo,
  Squircle,
  ThreejsLogo,
  YtKbdNavLogo,
} from "./objects/exports";
import { useState } from "react";

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
      <FicLogo />
      <GithubLogo />
      <NextjsLogo />
      <ReactLogo />
      <ThreejsLogo />
      <YtKbdNavLogo />
    </group>
  );
}

function OtherObjects() {
  const [isDragging, setIsDragging] = useState(false);
  const floorPlane = new THREE.Plane(
    new THREE.Vector3(0, 1, 0),
    0
  );

  return (
    <group>
      <Icosahedron
        setIsDragging={setIsDragging}
        floorPlane={floorPlane}
      />
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
