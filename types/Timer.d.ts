declare class Timer {
  public static set(callback: TimerCallback, interval?: number, repeat?: boolean): TimerId
  public static repeat(callback: TimerCallback, interval: number): TimerId
  public static schedule(id: TimerId, interval: number, repeat?: boolean): TimerId
  public static clear(id: TimerId): void
  public static delay(ms: number): void
}

type TimerCallback = (id: TimerId) => void
type TimerId = number

export = Timer
