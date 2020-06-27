declare class WiFi {
  public constructor(dictionary: WiFi.WiFiParam, callback: (message: string) => void)
  public close(): void
  public static scan(
    dictionary: { hidden?: boolean; channel?: number },
    callback: (item: WiFi.WiFiParam | null) => void
  ): void
  public readonly status: number
  public readonly mode: number
  public static connect(dictionary: WiFi.WiFiParam): void
  public static accessPoint(dictionary: {
    ssid: string
    password?: string
    channel?: number
    hidden?: boolean
    interval?: number
    max?: number
  }): void
}
declare namespace WiFi {
  interface WiFiParam {
    ssid?: string
    password?: string
    bssid?: string
  }
}
export = WiFi
