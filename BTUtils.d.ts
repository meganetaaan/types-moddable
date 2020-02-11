declare class GAP {}
// import GAP from './gap'

declare namespace BTUtils {
  export class Bytes extends ArrayBuffer {
    public constructor(bytes: ArrayBuffer, littleEndian: boolean)
    public set(bytes: ArrayBuffer, littleEndian: boolean): void
    public equals(bytes: Bytes): boolean
  }
  export function uuid(strings: string[]): Bytes
  export function address(strings: string[]): Bytes
  export class AdvertisementSerializer {
    public static incompleteUUID16List(
      data: ArrayBuffer
    ): {
      type: number
      data: Uint8Array
    }
    public static completeUUID16List(
      data: ArrayBuffer
    ): {
      type: number
      data: Uint8Array
    }
    public static incompleteUUID128List(
      data: ArrayBuffer
    ): {
      type: number
      data: Uint8Array
    }
    public static completeUUID128List(
      data: ArrayBuffer
    ): {
      type: number
      data: Uint8Array
    }
    public static shortName(
      data: string
    ): {
      type: number
      data: Uint8Array
    }
    public static completeName(
      data: string
    ): {
      type: number
      data: Uint8Array
    }
    public static flags(
      data: number
    ): {
      type: number
      data: Uint8Array
    }
    public static manufacturerSpecific(data: {
      identifier: number
      data: ArrayBuffer
    }): {
      type: number
      data: Uint8Array
    }
    public static txPowerLevel(
      data: number
    ): {
      type: number
      data: Uint8Array
    }
    public static connectionInterval(param: {
      intervalMin: number
      intervalMax: number
    }): {
      type: number
      data: DataView
    }
    public static solicitationUUID16List(
      param: ArrayBuffer
    ): {
      type: number
      data: Uint8Array
    }
    public static solicitationUUID128List(
      param: ArrayBuffer
    ): {
      type: number
      data: Uint8Array
    }
    public static serviceDataUUID16(param: {
      uuid: number
      data?: ArrayBuffer
    }): {
      type: number
      data: Uint8Array
    }
    public static serviceDataUUID128(param: {
      uuid: number
      data?: ArrayBuffer
    }): {
      type: number
      data: Uint8Array
    }
    public static appearance(
      param: number
    ): {
      type: number
      data: Uint8Array
    }
    public static publicAddress(
      param: string
    ): {
      type: number
      data: Uint8Array
    }
    public static randomAddress(
      param: string
    ): {
      type: number
      data: Uint8Array
    }
    public static advertisingInterval(
      param: number
    ): {
      type: number
      data: Uint8Array
    }
    //static deviceAddress(param) {}
    public static role(
      param: number
    ): {
      type: number
      data: Uint8Array
    }
    public static uri(
      param: string
    ): {
      type: number
      data: Uint8Array
    }
  }
}

export = BTUtils
