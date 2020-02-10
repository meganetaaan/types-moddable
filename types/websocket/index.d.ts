import { SocketConstructorParam, ListenerConstructorParam } from 'socket/index'

declare namespace websocket {
  export class Client {
    public constructor(dictionary: WebSocketClientConstructorParam)
    public close(): void
    public write(message: string | ArrayBuffer): void
    public callback(message: number, value: any): void
  }

  export class Server {
    public constructor(dictionary: WebSocketServerConstructorParam)
    public close(): void
    public write(message: string | ArrayBuffer): void
    public callback(message: number, value: any): void
  }

  type WebSocketServerConstructorParam = ListenerConstructorParam
  // interface WebSocketServerConstructorParam extends ListenerConstructorParam {}
  interface WebSocketClientConstructorParam extends SocketConstructorParam {
    port: number
    path: string
  }
}

export = websocket
