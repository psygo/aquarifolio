import {
  MeshTransmissionMaterial,
  Text3D,
} from "@react-three/drei"

import { WithPositionAndRotation } from "./utils"

export function Title() {
  return (
    <group>
      <TitleText
        text="Philippe Fanaro"
        position={[-2, 3, 4.2]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.8}
      />
      <TitleText
        text="Full Stack"
        position={[0, -3.5, 4.4]}
        rotation={[0, Math.PI / 2, Math.PI/2]}
        scale={1.2}
      />
      <TitleText
        text="Developer"
        position={[0, 4.2, -4]}
        rotation={[0, Math.PI / 2, -Math.PI/2]}
        scale={1.2}
      />
    </group>
  )
}

type TitleTextProps = WithPositionAndRotation & {
  text: string
  scale?: number
}

function TitleText({
  text,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
}: TitleTextProps) {
  return (
    <Text3D
      position={position}
      rotation={rotation}
      castShadow
      bevelEnabled
      font="/Inter_Medium_Regular.json"
      scale={scale}
      letterSpacing={-0.03}
      height={0.25}
      bevelSize={0.01}
      bevelSegments={10}
      curveSegments={128}
      bevelThickness={0.01}
    >
      <MeshTransmissionMaterial
        distortionScale={0.1}
        temporalDistortion={0}
        color="blue"
        ior={1.5}
      />
      {text}
    </Text3D>
  )
}
