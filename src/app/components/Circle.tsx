import { Vector3 } from "three"
import {
  Float,
  Instance,
  Instances,
} from "@react-three/drei"

export type CircleProps = {
  position: number[] | THREE.Vector3
  scale: number
  speed: number
  color: CssColors
}

export function Circle({
  position,
  scale = 1,
  speed = 0.1,
  color = CssColors.white,
}: CircleProps) {
  return (
    <Float
      rotationIntensity={40}
      floatIntensity={20}
      speed={speed / 2}
    >
      <Instance
        position={position as Vector3}
        scale={scale}
        color={color}
      />
    </Float>
  )
}

enum CssColors {
  white = "white",
  orange = "orange",
  hotpink = "hotpink",
  aquamarine = "aquamarine",
  lightblue = "lightblue",
  pink = "pink",
  skyblue = "skyblue",
}

const circlesParams: CircleProps[] = [
  {
    scale: 1,
    color: CssColors.orange,
    speed: 0.05,
    position: [-4, -1, -1],
  },
  {
    scale: 0.75,
    color: CssColors.hotpink,
    speed: 0.1,
    position: [-4, -2, -2],
  },
  {
    scale: 1.25,
    color: CssColors.aquamarine,
    speed: 0.2,
    position: [4, -3, 2],
  },
  {
    scale: 1.5,
    color: CssColors.lightblue,
    speed: 0.3,
    position: [-4, -2, -3],
  },
  {
    scale: 1,
    color: CssColors.pink,
    speed: 0.3,
    position: [-4, 2, -4],
  },
  {
    scale: 2,
    color: CssColors.skyblue,
    speed: 0.3,
    position: [-4, 2, -4],
  },
  {
    scale: 1.4,
    color: CssColors.orange,
    speed: 0.05,
    position: [-4, -1, -1],
  },
  {
    scale: 2,
    color: CssColors.hotpink,
    speed: 0.1,
    position: [-4, 2, -2],
  },
  {
    scale: 1.5,
    color: CssColors.aquamarine,
    speed: 0.2,
    position: [-4, -3, 2],
  },
  {
    scale: 1.25,
    color: CssColors.lightblue,
    speed: 0.3,
    position: [-4, -2, -3],
  },
  {
    scale: 1,
    color: CssColors.pink,
    speed: 0.3,
    position: [-4, 2, -4],
  },
  {
    scale: 1,
    color: CssColors.skyblue,
    speed: 0.3,
    position: [-4, 2, -4],
  },
]

export function Circles() {
  return (
    <Instances renderOrder={-1000}>
      <sphereGeometry args={[1, 64, 64]} />
      <meshBasicMaterial depthTest={false} />

      {circlesParams.map(
        ({ scale, color, speed, position }, index) => (
          <Circle
            key={index}
            scale={scale}
            color={color}
            speed={speed}
            position={position}
          />
        )
      )}
    </Instances>
  )
}
