import React from "react"

import * as THREE from "three"

function generateSquircle(n: number) {
  const g = new THREE.OctahedronGeometry(1, 16)
  const p = g.attributes.position.array

  for (let i = 0; i < p.length; i += 3) {
    const v = new THREE.Vector3(p[i], p[i + 1], p[i + 2])

    v.x = Math.tanh(v.x)
    v.y = Math.tanh(v.y)
    v.z = Math.tanh(v.z)

    p[i] = THREE.MathUtils.lerp(p[i], v.x, n)
    p[i + 1] = THREE.MathUtils.lerp(p[i + 1], v.y, n)
    p[i + 2] = THREE.MathUtils.lerp(p[i + 2], v.z, n)
  }

  g.computeBoundingBox()

  return g
}

const squircleGeometry = generateSquircle(2)

type SquircleProps = {
  position?: [number, number, number]
}
/**
 * Source: [SB Code - Squircle](https://editor.sbcode.net/35094a3db3ace7db06731a7c540a7d2db45d0dfa)
 */
export function Squircle({
  position = [-2, -2, 0],
}: SquircleProps) {
  return (
    <mesh
      geometry={squircleGeometry}
      position-y={1}
      position={position}
    >
      <meshPhysicalMaterial
        metalness={0.1}
        roughness={0.36}
        clearcoat={1}
        transmission={1}
        ior={1.53}
        thickness={5}
      />
    </mesh>
  )
}
