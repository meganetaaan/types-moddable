declare namespace DNS {
  enum PR {
    PTR,
  }
  enum OPCODE {
    QUERY,
    UPDATE,
  }
  enum CLASS {
    IN,
    NONE,
    ANY,
  }
  enum SECTION {
    QUESTION,
    ANSWER,
  }
  class Parser {
    public constructor(buffer: ArrayBuffer)
    public questions(index: number): Record
    public answers(index: number): Record
    public authorities(index: number): Record
    public additionarls(index: number): Record
  }
  // FIXME
  type Record = any
  class Serializer {
    public constructor(dictionary: { opcode: number; query: boolean; authoritative: boolean; id: number })
    public add(section: number, name: string, type: number, clss: number, ttl: number, ...extras: any[]): void
    public build(): ArrayBuffer
  }
  class Server {
    public constructor(callback: (message: number, value: any) => void)
    public close(): void
  }
}
export = DNS
