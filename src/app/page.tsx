"use client";

import { Suspense, useMemo } from "react";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Environment,
  Grid,
  Html,
  KeyboardControls,
  Line,
  OrbitControls,
  PerspectiveCamera,
  Plane,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";

import {
  Floor,
  Lighting,
  Performance,
  Player,
} from "./components/exports";

const boxGeometry = new THREE.BoxGeometry(3, 1, 3);

export default function ThreePortfolio() {
  const points = useMemo(
    () =>
      new THREE.EllipseCurve(
        0,
        0,
        3,
        1.15,
        0,
        2 * Math.PI,
        false,
        0
      ).getPoints(100),
    []
  );

  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <Environment preset="forest" background />
        <color attach="background" args={["green"]} />
        <OrbitControls />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />

        {/* <Plane args={[10, 10, 1]} rotation={[]} /> */}

        <mesh geometry={boxGeometry}>
          {/* <icosahedronGeometry args={[1]} /> */}
          <meshPhysicalMaterial
            reflectivity={1}
            transmission={1}
            roughness={0}
            metalness={0}
            clearcoat={0.3}
            clearcoatRoughness={0.25}
            color="black"
            ior={1.5}
          />

          <Decal
            position={[0, 1, 0]}
            rotation={[-Math.PI / 2, Math.PI, 0]}
            scale={[1.8, 0.5, 2]}
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

                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} />

                <color
                  attach="background"
                  args={["#af2040"]}
                />

                <group>
                  {/* <Grid
                    position={[0, 0.5, 0]}
                    cellColor={"green"}
                    args={[20, 20]}
                    scale={0.2}
                  /> */}
                  <Line
                    worldUnits
                    points={points}
                    color="turquoise"
                    lineWidth={0.3}
                  />
                  <Line
                    points={[
                      [0, 0, 0],
                      [2, 0, 0],
                    ]}
                    color="black"
                    lineWidth={1}
                  />

                  <Text
                    onClick={() => {
                      console.log("here");
                    }}
                    position={[0, 0, 0]}
                    rotation={[0, Math.PI, 0]}
                    fontSize={1}
                    color="white"
                  >
                    Hello from Drei 1233413241234
                  </Text>

                  <Text
                    onClick={() => {
                      console.log("here");
                    }}
                    position={[0, 0, 0]}
                    rotation={[0, Math.PI, 0]}
                    fontSize={2}
                    color="white"
                  >
                    Hello from D
                  </Text>
                </group>
              </RenderTexture>
            </meshStandardMaterial>
          </Decal>
        </mesh>
      </Canvas>
    </main>
  );
}
