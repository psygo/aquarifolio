import { useMemo } from "react"

import * as THREE from "three"
import { SVGLoader } from "three/examples/jsm/Addons.js"
import { useLoader } from "@react-three/fiber"
import { Float } from "@react-three/drei"

export type Position = [number, number, number]

//----------------------------------------------------------

type ExtrudedSvgProps = {
  filename: string
  depth?: number
  scale?: number
  position?: Position
}

export function ExtrudedSvg({
  filename,
  depth = 5,
  scale = 1,
  position = [-10, 10, 0],
}: ExtrudedSvgProps) {
  const svgData = useLoader(SVGLoader, filename)
  const shapes = useMemo(
    () => svgData.paths.map((p) => p.toShapes(true)),
    [svgData]
  )

  return (
    <mesh scale={scale} position={position}>
      {shapes.map((s, i) => (
        <mesh key={i}>
          <extrudeGeometry
            args={[
              s,
              {
                depth,
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
    </mesh>
  )
}

//----------------------------------------------------------
// Logos

export function FanaroIoLogo() {
  return (
    <ExtrudedSvg
      filename="fanaro.io.svg"
      scale={0.1}
      position={[-2, 2, 0]}
    />
  )
}

export function FicLogo() {
  return (
    <ExtrudedSvg
      filename="fic.svg"
      scale={0.01}
      depth={40}
      position={[1, 10, 2]}
    />
  )
}

export function GithubLogo() {
  return (
    <ExtrudedSvg
      filename="github.svg"
      scale={0.01}
      depth={20}
      position={[-3, 12, 0]}
    />
  )
}

export function NextjsLogo() {
  return (
    <ExtrudedSvg
      filename="next.js.svg"
      scale={0.005}
      depth={20}
      position={[0, 21, 0]}
    />
  )
}

export function ReactLogo() {
  return (
    <ExtrudedSvg
      filename="react.svg"
      scale={0.005}
      depth={50}
      position={[1, -2, 0]}
    />
  )
}

export function ThreejsLogo() {
  return (
    <ExtrudedSvg
      filename="three.js.svg"
      scale={0.01}
      depth={30}
      position={[-3, 15, 0]}
    />
  )
}

export function YtKbdNavLogo() {
  return (
    <ExtrudedSvg
      filename="yt_kbd_nav.svg"
      scale={0.01}
      depth={40}
      position={[1, 17, -2]}
    />
  )
}

export function FloatingLogos() {
  return (
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
    </group>
  )
}

//----------------------------------------------------------