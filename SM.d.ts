declare class SM {
  public deleteAllBondings(): void
  public onSecurityParameters(params: any): void
  public onAuthenticated(): void
  public onPasskeyConfirm(params: { address: ArrayBuffer; passKey: SM.PassKey }): boolean
  public onPassKeyDisplay(params: { address: ArrayBuffer; passKey: SM.PassKey }): void
  public onPassKeyRequested(params: { address: ArrayBuffer }): SM.PassKey
}
declare namespace SM {
  type PassKey = number
  export class IOCapability {
    public static readonly NoInputNoOutput: number
    public static readonly DisplayOnly: number
    public static readonly KeyboardOnly: number
    public static readonly KeyboardDisplay: number
    public static readonly DisplayYesNo: number
  }
}

export = SM
