import NeoPixel from "./neopixel";
import { Color } from "commodetto/index";
import Timeline from "./piu/Timeline";
declare class NeoStrand extends NeoPixel {
  public start(delay: number): void;
  public stop(): void;
  public setScheme(schemes: NeoStrandEffect[]): void;
  public set(idx: number, color: Color, start?: number, end?: number): void;
  public add(idx: number, color: Color, start?: number, end?: number): void;
  public sub(idx: number, color: Color, start?: number, end?: number): void;
  public hsvToRgb(h: number, s: number, v: number): Color;
  public rgbToHsv(r: number, g: number, b: number): Color;
  public op(
    idx: number,
    rgb: Color,
    mode?: number,
    start?: number,
    end?: number
  ): void;
}
declare class NeoStrandEffect {
  public constructor(dictionary: NeoStrand.NeoStrandEffectConstructorParam);
  public timeline: Timeline;
  public reset(effect: NeoStrandEffect): void;
  public loopPrepare(effect: NeoStrandEffect): void;
  public activate(effect: NeoStrandEffect): void;
  public idle(effect: NeoStrandEffect, ticks: number): void;
}

declare namespace NeoStrand {
  interface NeoStrandEffectConstructorParam {
    strand: NeoStrand;
    start?: number;
    end?: number;
    reverse?: number;
    duration?: number;
    position?: number | string;
    speed?: number;
    size?: number;
    loop?: number;
    tickle?: number;
    onComplete?: () => void;
  }
  interface HueSpanConstructorParam extends NeoStrandEffectConstructorParam {
    saturation?: number;
    value?: number;
  }
  interface SineConstructorParam extends NeoStrandEffectConstructorParam {
    amptitude?: number;
    offset?: number;
    vary?: number;
  }
  interface MarqeeConstructorParam extends NeoStrandEffectConstructorParam {
    sizeA?: number;
    sizeB?: number;
    rgbA?: number;
    rgbB?: number;
  }
  interface PulseConstructorParam extends NeoStrandEffectConstructorParam {
    mode?: number;
    fade?: number;
    rgb?: {
      r: number;
      g: number;
      b: number;
    };
    position?: number;
  }
  interface PatternConstructorParam extends NeoStrandEffectConstructorParam {
    pattern?: number[];
    mode?: number;
  }
  interface DimConstructorParam extends NeoStrandEffectConstructorParam {
    amount: number;
  }
  interface EaseConstructorParam extends NeoStrandEffectConstructorParam {
    // FIXME
    easing: any;
    mode?: number;
  }
  class HueSpan extends NeoStrandEffect {
    public constructor(dictionary: HueSpanConstructorParam);
    public hue: number;
  }
  class Sine extends NeoStrandEffect {
    public constructor(dictionary: SineConstructorParam);
    public effectValue: number;
  }
  class Marqee extends NeoStrandEffect {
    public constructor(dictionary: MarqeeConstructorParam);
    public step: number;
  }
  class Pulse extends NeoStrandEffect {
    public constructor(dictionary: PulseConstructorParam);
    public pulseLoc: number;
    public effectValue: number;
  }
  class Pattern extends NeoStrandEffect {
    public constructor(dictionary: PatternConstructorParam);
    public effectValue: number;
  }
  class Dim extends NeoStrandEffect {
    public constructor(dictionary: DimConstructorParam);
    public effectValue: number;
  }
  class Ease extends NeoStrandEffect {
    public constructor(dictionary: EaseConstructorParam);
    public step: number;
  }
}
// FIXME
type Scheme = any;

export = NeoPixel;
