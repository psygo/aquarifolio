import { useMemo } from "react"

import * as THREE from "three"
import { SVGLoader } from "three/examples/jsm/Addons.js"
import { useLoader } from "@react-three/fiber"

export type Position = [number, number, number]

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
