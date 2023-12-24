"use client";

import { useRef } from "react";

import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import {
  BallCollider,
  RigidBody,
} from "@react-three/rapier";

import {
  FanaroIoLogo,
  FicLogo,
  GithubLogo,
  NextjsLogo,
  ReactLogo,
  Squircle,
  ThreejsLogo,
  YtKbdNavLogo,
} from "./objects/exports";

function Logos() {
  return (
    <group>
      <FanaroIoLogo />
      <FicLogo />
      <GithubLogo />
      <NextjsLogo />
      <ReactLogo />
      <ThreejsLogo />
      {/* <YtKbdNavLogo /> */}
    </group>
  );
}

function OtherObjects() {
  return (
    <group>
      <Squircle position={[-2, 18, 0]} />
      <Squircle position={[-2, 15, 0]} />
      <Squircle position={[-2, 13, 0]} />
    </group>
  );
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef<any>(null);

  useFrame(({ mouse, viewport }) => {
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
    </group>
  );
}
