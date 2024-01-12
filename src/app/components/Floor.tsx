import * as THREE from "three";
import {
  Decal,
  PerspectiveCamera,
  RenderTexture,
  Text,
} from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

const boxGeometry = new THREE.BoxGeometry(100, 1, 100);
const floor1Material = new THREE.MeshStandardMaterial({
  color: "limegreen",
});

export function Floor({
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
