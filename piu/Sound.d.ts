declare class Sound {
  public constructor(dictionary: SoundConstructorParam)
  public readonly bitsPerSample: number
  public readonly numChannels: number
  public readonly sampleRate: number
  public volume: number
  public static close(): void
  public play(stream?: number, repeat?: number, callback?: Function): void
}
interface SoundConstructorParam {
  path: string
  offset?: number
  size?: number
}

export = Sound
