"use client"

import { Suspense } from "react"

import { Canvas } from "@react-three/fiber"
import { Loader, OrbitControls } from "@react-three/drei"

import {
  Aquarium,
  Circles,
  Env,
  FloatingLogos,
  FloatingSquircles,
  Overlay,
  Performance,
  Title,
} from "./components/exports"

export default function App() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Loader />

      <Canvas
        shadows
        camera={{
          position: [30, 0, -3],
          fov: 35,
          near: 1,
          far: 50,
        }}
      >
        <Suspense fallback={null}>
          <Performance />
          <Env />
          <OrbitControls />

          <Title />
          <Aquarium position={[0, 0.25, 0]}>
            <FloatingLogos />
            <FloatingSquircles />
            <Circles />
          </Aquarium>
        </Suspense>
      </Canvas>

      <Overlay />
    </main>
  )
}
