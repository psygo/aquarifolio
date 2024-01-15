"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import {
  Aquarium,
  Circles,
  Env,
  FloatingLogos,
  FloatingSquircles,
  Performance,
} from "./components/exports"

export default function App() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas shadows camera={{ position: [16, 9, 9] }}>
        <Performance />
        <Env />
        <OrbitControls />

        <Aquarium position={[0, 0.25, 0]}>
          <FloatingLogos />
          <FloatingSquircles />
          <Circles />
        </Aquarium>
      </Canvas>
    </main>
  )
}
