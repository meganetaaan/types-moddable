declare class Net {
  public static get(property: string): string | number
  public static resolve(host: string, callback: (name: string, address?: string) => void): void
}
export = Net
