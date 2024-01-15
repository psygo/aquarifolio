import {
  Float,
  Instance,
  Instances,
} from "@react-three/drei"

export type CircleProps = {
  position: number[] | THREE.Vector3
  scale: number
  speed: number
  color: string
}
export function Circle({
  position,
  scale = 1,
  speed = 0.1,
  color = "white",
}: CircleProps) {
  return (
    <Float
      rotationIntensity={40}
      floatIntensity={20}
      speed={speed / 2}
    >
      <Instance
        // @ts-ignore
        position={position}
        scale={scale}
        color={color}
      />
    </Float>
  )
}

const circlesParams: CircleProps[] = [
  {
    scale: 1,
    color: "orange",
    speed: 0.05,
    position: [-4, -1, -1],
  },
  {
    scale: 0.75,
    color: "hotpink",
    speed: 0.1,
    position: [-4, -2, -2],
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
