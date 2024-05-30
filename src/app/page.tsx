"use client"

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
} from "../components/three/exports"

export default function App() {
  return (
    <main className="w-screen h-screen bg-[#c6e5db]">
      <Canvas
        shadows
        camera={{
          position: [30, 0, -3],
          fov: 35,
          zoom: 1.4,
        }}
      >
        <Env />
        {/* <Performance /> */}

        <Aquarium position={[0, 0.25, 0]}>
          <ReactAtom />
          <FloatingLogos />
          <FloatingSquircles />
          <Circles />
        </Aquarium>
      </Canvas>

      <Overlay />
      <Loader />
    </main>
  )
}
