"use client";

// import { useState } from "react";

// import * as THREE from "three";
import { Box } from "@react-three/drei";
import {
  BallCollider,
  RigidBody,
} from "@react-three/rapier";

import {
  FanaroIoLogo,
  FicLogo,
  GithubLogo,
  // Icosahedron,
  NextjsLogo,
  ReactLogo,
  Squircle,
  ThreejsLogo,
  YtKbdNavLogo,
} from "./objects/exports";
import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

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
      {/* <FanaroIoLogo /> */}
      {/* <FicLogo />
      <GithubLogo />
      <NextjsLogo />
      <ReactLogo />
      <ThreejsLogo />
      <YtKbdNavLogo /> */}
    </group>
  );
}

function OtherObjects() {
  // const [isDragging, setIsDragging] = useState(false);
  // const floorPlane = new THREE.Plane(
  //   new THREE.Vector3(0, 1, 0),
  //   0
  // );

  return (
    <group>
      {/* <Icosahedron
        setIsDragging={setIsDragging}
        floorPlane={floorPlane}
      /> */}
      <Squircle />
      <Squircle position={[-2, 18, 0]} />
      <Squircle position={[-2, 18, 2]} />
      <Squircle position={[-2, 15, 0]} />
      <Squircle position={[-2, 13, 0]} />
      <Squircle position={[-2, 14, 0]} />
      <Squircle position={[-2, 16, 0]} />
    </group>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef<any>(null);

  useFrame(({ mouse, viewport }) => {
    vec.lerp(
      new THREE.Vector3(
        (mouse.x * viewport.width) / 2,
        (mouse.y * viewport.height) / 2,
        0
      ),
      0.2
    );

    if (ref.current) {
      // @ts-ignore
      ref.current.setNextKinematicTranslation(vec);
    }
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[0.2]} />
    </RigidBody>
  );
}

export function Experience() {
  return (
    <group>
      <group>
        <Logos />
        <OtherObjects />
        <Pointer />
      </group>

      {/* <Plane /> */}
    </group>
  );
}
