declare class Resource {
  public constructor(path: string);
  public static exists(path: string): boolean;
  public slice(begin: number, end?: number): ArrayBuffer;
}
export = Resource;
