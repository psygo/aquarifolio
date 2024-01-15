"use client"

import * as THREE from "three"
import { Canvas } from "@react-three/fiber"
import {
  Instance,
  Float,
  AccumulativeShadows,
  RandomizedLight,
  Environment,
  Lightformer,
  CameraControls,
  MeshTransmissionMaterial,
  useMask,
  useGLTF,
  Instances,
  OrbitControls,
} from "@react-three/drei"
import { useLayoutEffect, useRef } from "react"
import {
  FanaroIoLogo,
  FicLogo,
  ReactLogo,
  Squircle,
} from "./components/svg/exports"

type SphereProps = {
  position: number[] | THREE.Vector3
  scale: number
  speed: number
  color: string
}

function Sphere({
  position,
  scale = 1,
  speed = 0.1,
  color = "white",
}: SphereProps) {
  return (
    <Float
      rotationIntensity={40}
      floatIntensity={20}
      speed={speed / 2}
    >
      <Instance
        // @ts-ignore
        position={position}
        scale={scale}
        color={color}
      />
    </Float>
  )
}

function Aquarium({ children, ...props }: any) {
  const ref = useRef()
  const { nodes } = useGLTF("/shapes-transformed.glb")
  const stencil = useMask(1, false)
  useLayoutEffect(() => {
    // Apply stencil to all contents
    // @ts-ignore
    ref.current?.traverse(
      (child: any) =>
        child.material &&
        Object.assign(child.material, { ...stencil })
    )
  }, [stencil])
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        scale={[0.61 * 6, 0.8 * 6, 1 * 6]}
        // @ts-ignore
        geometry={nodes.Cube.geometry}
      >
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={3}
          chromaticAberration={0.025}
          anisotropy={0.1}
          distortion={0.1}
          distortionScale={0.1}
          temporalDistortion={0.2}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
        />
      </mesh>
      {/* @ts-ignore */}
      <group ref={ref}>{children}</group>
    </group>
  )
}

export default function App() {
  const spheres: SphereProps[] = [
    {
      scale: 1,
      color: "orange",
      speed: 0.05,
      position: [-4, -1, -1],
    },
    {
      scale: 0.75,
      color: "hotpink",
      speed: 0.1,
      position: [-4, -2, -2],
    },
  ]

  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        shadows
        orthographic
        camera={{ position: [10, 20, 20], zoom: 80 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <color attach="background" args={["#c6e5db"]} />

        <Aquarium position={[0, 0.25, 0]}>
          <group>
            <ambientLight intensity={0.5} />
            <spotLight
              intensity={0.5}
              position={[300, 300, 4000]}
            />
          </group>

          <group>
            <Float
              rotationIntensity={2}
              floatIntensity={10}
              speed={4}
            >
              <ReactLogo />
            </Float>
            <Float
              rotationIntensity={2}
              floatIntensity={10}
              speed={4}
            >
              <FanaroIoLogo />
            </Float>
            <Float
              rotationIntensity={2}
              floatIntensity={10}
              speed={4}
            >
              <Squircle />
            </Float>
          </group>

          <Instances renderOrder={-1000}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshBasicMaterial depthTest={false} />
            {spheres.map(
              (
                { scale, color, speed, position },
                index
              ) => (
                <Sphere
                  key={index}
                  scale={scale}
                  color={color}
                  speed={speed}
                  position={position}
                />
              )
            )}
          </Instances>
        </Aquarium>

        {/* <CameraControls
          truckSpeed={0}
          dollySpeed={0}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        /> */}
        <OrbitControls />

        <AccumulativeShadows
          temporal
          frames={100}
          color="lightblue"
          colorBlend={2}
          opacity={0.7}
          scale={60}
          position={[0, -5, 0]}
        >
          <RandomizedLight
            amount={8}
            radius={15}
            ambient={0.5}
            intensity={1}
            position={[-5, 10, -5]}
            size={20}
          />
        </AccumulativeShadows>

        <Environment resolution={1024}>
          <group rotation={[-Math.PI / 3, 0, 0]}>
            <Lightformer
              intensity={4}
              rotation-x={Math.PI / 2}
              position={[0, 5, -9]}
              scale={[10, 10, 1]}
            />
            {[2, 0, 2, 0, 2, 0, 2, 0].map((x, i) => (
              <Lightformer
                key={i}
                form="circle"
                intensity={4}
                rotation={[Math.PI / 2, 0, 0]}
                position={[x, 4, i * 4]}
                scale={[4, 1, 1]}
              />
            ))}
            <Lightformer
              intensity={2}
              rotation-y={Math.PI / 2}
              position={[-5, 1, -1]}
              scale={[50, 2, 1]}
            />
            <Lightformer
              intensity={2}
              rotation-y={-Math.PI / 2}
              position={[10, 1, 0]}
              scale={[50, 2, 1]}
            />
          </group>
        </Environment>
      </Canvas>
    </main>
  )
}
