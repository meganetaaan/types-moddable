declare class MDNS {
  public constructor(
    dictionary: {
      hostName?: string;
    },
    callback?: (message: number, value: any) => void
  );
  public monitor(
    serviceType: string,
    callback: (service: string, instance: Service) => void
  ): void;
  public add(service: Service): void;
  public update(service: Service): void;
  public remove(service: Service): void;
  public remove(serviceType: string): void;
  public services: Service[];
}
declare interface Service {
  name: string;
  protocol: string;
  port: number;
  txt: string;
}
export = MDNS;
