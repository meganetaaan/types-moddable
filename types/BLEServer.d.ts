import { IOCapability } from './SM'
import { Bytes } from './BTUtils'

declare class BLEServer {
  public onReady(): void
  public deploy(): void
  public startAdvertising(params?: BLEServer.StartAdvertisingParam): void
  public stopAdvertising(): void
  public notifyValue(characteristic: Characteristic, value: ArrayBuffer): void
  public onCharacteristicNotifyEnabled(charasteristic: Characteristic): void
  public onCharacteristicWritten(params: { uuid: Bytes; name: string; type: string; handle: string; value: any }): void
  public onCharacteristicRead(params: { uuid: Bytes; name: string; type: string; handle: number }): any
  public disconnect(): void
  public onConnected(device: Device): void
  public onDisconnected(device: Device): void
  public close(): void
  /*
  onDiscovered(device: Device): void;
  stopScanning(): void;
  connect(device: Device): void;
  */
  public deviceName: string
  public localAddress: Bytes
  public securityParameters: SecurityParameters
}
declare namespace BLEServer {
  interface StartAdvertisingParam {
    advertisingData?: AdvertisementData
    connectable?: boolean
    discoverable?: boolean
    fast?: boolean
    scanResponseData?: object
  }
}
type AdvertisementData = object
declare class Device {
  public connection: number
  public address: Bytes
  public scanResponse: Advertisement
  public readRSSI(): void
  public onRSSI(device: Device, rssi: number): void
  public discoverAllPrimaryServices(): void
  public discoverPrimaryService(uuid: Bytes): void
  public findServiceByUUID(uuid: Bytes): void
  public onServices(services: Service[]): void
  public close(): void
  public onDisconnected(): void
}
declare class Service {
  public connection: number
  public uuid: Bytes
  public start: number
  public end: number
  public characteristics: Characteristic[]
  public discoverAllCharacteristics(): void
  public discoverCharacteristic(uuid: Bytes): void
  public findCharacteristicByUUID(uuid: Bytes): void
  public onCharacteristics(characteristics: Characteristic[]): void
}
declare namespace btutils {
  function address(literals: TemplateStringsArray, ...placeholders: string[]): Bytes
  function uuid(literals: TemplateStringsArray, ...placeholders: string[]): Bytes
}
declare class Advertisement {
  public completeName: string
  public shortName: string
  public manufacturerSpecific: object
  public flags: number
}
declare class Characteristic {
  public connection: number
  public uuid: Bytes
  public service: Service
  public handle: number
  public descriptors: Descriptor[]
  public discoverAllDescriptors(): void
  public onDescriptors(descriptors: Descriptor[]): void
  public enableNotifications(): void
  public onCharacteristicNotificationEnabled(charasteristic: Characteristic): void
  public disableNotifications(): void
  public onCharacteristicNotificationDisabled(characteristic: Characteristic): void
  public onCharacteristicNotification(characteristic: Characteristic, value: ArrayBuffer): void
  public readValue(auth?: Authorization): void
  public onCharacteristicValue(characteristic: Characteristic, value: ArrayBuffer): void
  public writeWithoutResponse(value: ArrayBuffer): void
}
declare class Authorization {
  public static readonly None: number
  public static readonly NoMITM: number
  public static readonly MITM: number
  public static readonly SignedNoMITM: number
  public static readonly SignedMITM: number
}
declare class Descriptor {
  public connection: number
  public uuid: Bytes
  public characteristic: Characteristic
  public handle: number
  public readvalue(auth: Authorization): void
  public writeValue(value: ArrayBuffer): void
}
declare interface SecurityParameters {
  encryption: boolean
  bonding: boolean
  mitm: boolean
  ioCapability: IOCapability
}
export = BLEServer
