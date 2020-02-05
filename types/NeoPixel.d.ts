import { HostBuffer } from 'commodetto/index'

declare class NeoPixel extends HostBuffer {
  public constructor()
  public constructor(dictionary: { length: number; pin: number; order?: string; timing?: Timing })
  public makeRGB(r: number, g: number, b: number, w?: number): Color
  public makeHSB(h: number, s: number, b: number, w?: number): Color
  public close(): void
  public update(): void
  public setPixel(index: number, color: Color): void
  public fill(color: Color): void
  public fill(color: Color, index: number): void
  public fill(color: Color, index: number, count: number): void
  public brightness: number
  public readonly length: number
}
type Color = number
interface Timing {
  mark: Level
  space: Level
  reset: Level
}
interface Level {
  level0: number
  duration0: number
  level1: number
  duration1: number
}
export = NeoPixel
