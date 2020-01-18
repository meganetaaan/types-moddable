declare namespace socket {
  class Socket {
    public constructor(dictionary: SocketConstructorParam);
    public close(): void;
    public read(type: StringConstructor, until?: number | string): string;
    public read(
      type: ArrayBufferConstructor,
      until?: number | string
    ): ArrayBuffer;
    public read(type: NumberConstructor, until?: number): number;
    public read(numer: number): void;
    public write(): number;
    public write(firstPacket: Packet, ...packet: Packet[]): number;
    public write(address: string, packet: Packet): number;
    public write(address: string, port: number, packet: Packet): number;
    public callback(message: number, value?: any): void;
  }
  type Packet = string | ArrayBuffer | number;
  class Listener {
    public constructor(dictionary: ListenerConstructorParam);
    public callback(): void;
  }
  interface ListenerConstructorParam {
    port: number;
  }
  interface SocketConstructorParam {
    address?: string;
    host?: string;
    port?: number;
    kind?: string;
    listener?: Listener;
  }
}

export = socket;
