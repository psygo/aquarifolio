export type Position = [number, number, number]
export type Rotation = Position

export type WithPositionAndRotation = {
  position?: Position
  rotation?: Rotation
}
