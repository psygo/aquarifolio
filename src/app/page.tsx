"use client"

import { Suspense } from "react"

import { Canvas } from "@react-three/fiber"
import { Loader } from "@react-three/drei"

import {
  Aquarium,
  Circles,
  Env,
  FloatingLogos,
  FloatingSquircles,
  Overlay,
  Performance,
  ReactAtom,
} from "./components/exports"

export default function App() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        shadows
        camera={{
          position: [30, 0, -3],
          fov: 35,
          zoom: 1.4,
        }}
      >
        <Suspense fallback={null}>
          <Env />
          <Performance />

          <Aquarium position={[0, 0.25, 0]}>
            <ReactAtom />
            <FloatingLogos />
            <FloatingSquircles />
            <Circles />
          </Aquarium>
        </Suspense>
      </Canvas>

      <Overlay />
      <Loader />
    </main>
  )
}
