import { useRef } from "react"

import * as THREE from "three"
import { useFrame } from "@react-three/fiber"
import {
  Float,
  Line,
  Sphere,
  Trail,
} from "@react-three/drei"

const ellipseCurve = new THREE.EllipseCurve(
  0,
  0,
  3,
  1.15,
  0,
  2 * Math.PI,
  false,
  0
).getPoints(100)

/**
 * Mostly from [the React EllipseCurve example](https://codesandbox.io/s/xzi6ps)
 */
export function ReactAtom() {
  return (
    <Float
      speed={4}
      rotationIntensity={1}
      floatIntensity={2}
      position={[0, 0, 0]}
      rotation={[0, Math.PI / 2, 0]}
      scale={0.4}
    >
      <group>
        <Line
          worldUnits
          points={ellipseCurve}
          color="turquoise"
          lineWidth={0.2}
        />
        <Line
          worldUnits
          points={ellipseCurve}
          color="turquoise"
          lineWidth={0.2}
          rotation={[0, 0, 1]}
        />
        <Line
          worldUnits
          points={ellipseCurve}
          color="turquoise"
          lineWidth={0.2}
          rotation={[0, 0, -1]}
        />
      </group>

      <group>
        <Electron position={[0, 0, 0.5]} speed={2.5} />
        <Electron
          position={[0, 0, 0.5]}
          rotation={[0, 0, Math.PI / 3]}
          speed={3}
        />
        <Electron
          position={[0, 0, 0.5]}
          rotation={[0, 0, -Math.PI / 3]}
          speed={3.5}
        />
      </group>

      <Sphere args={[0.55, 64, 64]}>
        <meshBasicMaterial
          color="turquoise"
          toneMapped={false}
        />
      </Sphere>
    </Float>
  )
}

function Electron({ radius = 2.75, speed = 6, ...props }) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed

    ref.current?.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) /
        Math.PI /
        1.25,
      0
    )
  })

  return (
    <group {...props}>
      {/* <Trail
        local
        width={5}
        length={6}
        color={new THREE.Color(2, 1, 10)}
        attenuation={(t) => t * t}
      > */}
      <mesh ref={ref}>
        <sphereGeometry args={[0.25]} />
        <meshBasicMaterial
          color="turquoise"
          toneMapped={false}
        />
      </mesh>
      {/* </Trail> */}
    </group>
  )
}
