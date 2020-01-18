declare class Ping {
  public constructor(
    dictionary: {
      host: string;
      id: string;
      interval?: number;
    },
    callback: (message: number, value: any, etc?: any) => void
  );
  public close(): void;
}
export = Ping;
