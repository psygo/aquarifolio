import { ReactNode, useLayoutEffect, useRef } from "react"

import { Group, Object3DEventMap } from "three"
import {
  MeshTransmissionMaterial,
  useGLTF,
  useMask,
} from "@react-three/drei"

import { Position } from "./utils"

type AquariumProps = {
  position?: Position
  children: ReactNode
}

export function Aquarium({
  children,
  position = [0, 0, 0],
}: AquariumProps) {
  const ref = useRef<Group<Object3DEventMap>>(null)
  const { nodes } = useGLTF("/shapes-transformed.glb")
  const stencil = useMask(1, false)

  useLayoutEffect(() => {
    ref.current?.traverse(
      (child: any) =>
        child.material &&
        Object.assign(child.material, { ...stencil })
    )
  }, [stencil])

  return (
    <group position={position} dispose={null}>
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
      <group ref={ref}>
        <AquariumInternalLighting />
        {children}
      </group>
    </group>
  )
}

function AquariumInternalLighting() {
  return (
    <group>
      <ambientLight intensity={0.75} />
      <spotLight
        intensity={0.5}
        position={[300, 300, 4000]}
      />
    </group>
  )
}
