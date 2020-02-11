declare class Preference {
  public set(domain: string, key: string, value: PreferenceValue): void
  public get(domain: string, key: string): PreferenceValue
  public delete(domain: string, key: string): void
  public keys(domain: string): string[]
}
type PreferenceValue = string | number | boolean | ArrayBuffer
export = Preference
