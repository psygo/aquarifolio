"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import {
  Aquarium,
  Circles,
  Env,
  FloatingLogos,
  FloatingSquircle,
  Performance,
} from "./components/exports"

export default function App() {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        shadows
        camera={{ position: [10, 20, 20], zoom: 80 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Performance />

        <Aquarium position={[0, 0.25, 0]}>
          <FloatingLogos />
          <FloatingSquircle />
          <Circles />
        </Aquarium>

        <OrbitControls />
        {/* <CameraControls
          truckSpeed={0}
          dollySpeed={0}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
        /> */}

        <Env />
      </Canvas>
    </main>
  )
}
