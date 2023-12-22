import { useMemo, useRef } from "react";

import * as THREE from "three";
import { SVGLoader } from "three/examples/jsm/Addons.js";
import {
  Canvas,
  useFrame,
  useLoader,
} from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
} from "@react-three/drei";
import {
  BallCollider,
  Physics,
  RigidBody,
} from "@react-three/rapier";

const baubles = [...Array(50)].map(() => ({
  scale: [0.75, 0.75, 1, 1, 1.25][
    Math.floor(Math.random() * 5)
  ],
}));

function Bauble({
  vec = new THREE.Vector3(),
  scale,
  r = THREE.MathUtils.randFloatSpread,
}: any) {
  const api = useRef<any>(null);

  useFrame((state, delta) => {
    delta = Math.min(0.1, delta);
    api.current?.applyImpulse(
      vec
        .copy(api.current.translation())
        .normalize()
        .multiply({
          x: -50 * delta * scale,
          y: -150 * delta * scale,
          z: -50 * delta * scale,
        })
    );
  });

  const svgData = useLoader(SVGLoader, "fic.svg");
  const shapes = useMemo(
    () => svgData.paths.map((p) => p.toShapes(true)),
    [svgData]
  );

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={"cuboid"}
      // dispose={null}
      
    >
      {/* <BallCollider args={[scale]} /> */}

      {shapes.map((s, i) => (
        <mesh
          key={i}
          scale={scale / 2}
          position={[0, 0, 0]}
        >
          <extrudeGeometry
            args={[
              s,
              {
                depth: 5,
                bevelEnabled: false,
                steps: 30,
              },
            ]}
          />
          <meshPhongMaterial
            attach="material"
            color={svgData.paths[i].color}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
      {/* <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={baubleMaterial}
      />
      <mesh
        castShadow
        scale={2.5 * scale}
        position={[0, 0, -1.8 * scale]}
        geometry={nodes.Mesh_1.geometry}
        material={capMaterial}
      /> */}
    </RigidBody>
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

    // @ts-ignore
    ref.current?.setNextKinematicTranslation(vec);
  });

  return (
    <RigidBody
      position={[100, 100, 100]}
      type="kinematicPosition"
      colliders={false}
      ref={ref}
    >
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

export function Portfolio2() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        shadows
        gl={{
          alpha: true,
          stencil: false,
          depth: false,
          antialias: false,
        }}
        camera={{
          position: [0, 0, 20],
          fov: 32.5,
          // near: 1,
          // far: 100,
        }}
        onCreated={(state) =>
          (state.gl.toneMappingExposure = 1.5)
        }
      >
        <ambientLight intensity={1} />
        <spotLight
          position={[20, 20, 25]}
          penumbra={1}
          angle={0.2}
          color="white"
          castShadow
          shadow-mapSize={[512, 512]}
        />
        <directionalLight
          position={[0, 5, -4]}
          intensity={4}
        />
        <directionalLight
          position={[0, -15, -0]}
          intensity={4}
          color="red"
        />
        <Environment files="/adamsbridge.hdr" />

        <OrbitControls />

        <Physics gravity={[0, 0, 0]}>
          <Pointer />
          {
            [baubles[1]].map((props, i) => <Bauble key={i} {...props} />) /* prettier-ignore */
          }
        </Physics>
      </Canvas>
    </main>
  );
}
