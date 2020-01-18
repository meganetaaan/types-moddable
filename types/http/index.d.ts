import { SocketConstructorParam, Socket } from "socket/index";

declare namespace http {
  class Request {
    public constructor(dictionary: RequestConstructorParam);
    public close(): void;
    public read(type: StringConstructor, until?: number | string): string;
    public read(
      type: ArrayBufferConstructor,
      until?: number | string
    ): ArrayBuffer;
    public read(type: NumberConstructor, until?: number): number;
    public read(numer: number): void;
    // TODO
    public callback(message: number, value1?: any, value2?: any): any;
  }
  class Server {
    public constructor(dictionary: ServerConstructorParam);
    public close(): void;
    public callback(message: number, value1?: any, value2?: any): any;
  }
  enum Method {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE"
  }
  interface RequestConstructorParam extends SocketConstructorParam {
    port?: number;
    path?: string;
    method?: Method | string;
    headers?: string[];
    body?: ArrayBufferConstructor | StringConstructor | boolean;
    response?: ArrayBufferConstructor | StringConstructor;
  }
  interface ServerConstructorParam extends SocketConstructorParam {
    port?: number;
  }
}

export = http;
