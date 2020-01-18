declare namespace pins {
  class AudioIn {
    public constructor();
    public close(): void;
    public read(samples: number): number;
    public readonly sampleRate: number;
    public readonly bitsPerSample: number;
    public readonly numChannels: number;
  }
  namespace AudioIn {}
  class Digital {
    public constructor(dictionary: Digital.ConstructorParam);
    public constructor(pin: number, mode: number);
    public constructor(port: string, pin: number, mode: number);
    public read(): number;
    public write(value: number): void;
    public mode(mode: number): void;
    public static read(pin: number): number;
    public static write(pin: number, value: number): void;
    public static readonly Input: number;
    public static readonly InputPullUp: number;
    public static readonly InputPullDown: number;
    public static readonly InputPullUpDown: number;
    public static readonly Output: number;
    public static readonly OutputOpenDrain: number;
  }
  namespace Digital {
    interface ConstructorParam {
      pin: number;
      mode: number;
      port?: string;
    }
    class Monitor {
      public constructor(dictionary: Monitor.ConstructorParam);
      public onChanged(callback: () => void): void;
      public read(): number;
      public close(): void;
      public rises: number;
      public falls: number;
    }
    namespace Monitor {
      interface ConstructorParam {
        pin: number;
        port?: string;
        mode: number;
        edges: Edge;
      }
      enum Edge {
        Rising,
        Falling
      }
    }
  }
  class Analog {
    public static read(pin: number): number;
  }

  class PWM {
    public constructor(dictionary: PWM.ConstructorParam);
    public write(value: number): void;
    public close(): void;
  }
  namespace PWM {
    interface ConstructorParam {
      pin: number;
      mode?: string;
    }
  }

  class I2C {
    public constructor(dictionary: I2C.ConstructorParam);
    public constructor(port: number[], pin: number, mode: number);
    public close(): void;
    public read(count: number, buffer?: ArrayBuffer): void;
    public write(first: any, ...valuesOrStop: (any | boolean)[]): void;
  }
  namespace I2C {
    interface ConstructorParam {
      scl?: number;
      sda?: number;
      address: number;
      hz?: number;
    }
  }

  class SMBus {
    public constructor(dictionary: SMBus.ConstructorParam);
    public readByte(register: number): number;
    public readWord(register: number): number;
    public readBlock(
      register: number,
      count: number,
      buffer?: ArrayBuffer
    ): Uint8Array;
    public writeByte(register: number, value: number): void;
    public writeWord(register: number, value: number): void;
    public writeBlock(
      register: number,
      first: any,
      ...valuesOrStop: (any | boolean)[]
    ): void;
  }
  namespace SMBus {
    type ConstructorParam = I2C.ConstructorParam;
    // interface ConstructorParam extends I2C.ConstructorParam {}
  }

  class Servo {
    public constructor(dictionary: Servo.ConstructorParam);
    public write(degrees: number): void;
    public writeMicroseconds(us: number): void;
  }
  namespace Servo {
    interface ConstructorParam {
      pin: number;
      min?: number;
      max?: number;
    }
  }

  class SPI {
    // There is no JavaScript API to access SPI at this time.
  }
}

export = pins;
