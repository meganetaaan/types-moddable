declare class SNTP {
  public constructor(
    dictionary: {
      host: string
    },
    callback: (message: number, value: string | number | null) => void
  )
}
export = SNTP
