/* eslint-disable @typescript-eslint/camelcase */
declare namespace Commodetto {
  enum CommodettoBitmapFormat {
    kCommodettoBitmapDefault = 1,
    kCommodettoBitmapMonochrome = 3,
    kCommodettoBitmapGray16,
    kCommodettoBitmapGray256,
    kCommodettoBitmapRGB332,
    kCommodettoBitmapRGB565LE,
    kCommodettoBitmapRGB565BE,
    kCommodettoBitmap24RGB,
    kCommodettoBitmap32RGBA,
    kCommodettoBitmapCLUT16,
    kCommodettoBitmapPacked = 0x80
  }
  class Bitmap {
    public constructor(
      width: number,
      height: number,
      format: number,
      buffer: ArrayBuffer,
      offset: number
    );
    public width: number;
    public height: number;
    public format: number;
    public static depth(pixelFormat: number): number;
    public static readonly Default: number;
    public static readonly RLE: number;
    public static readonly Monochrome: number;
    public static readonly Gray16: number;
    public static readonly Gray256: number;
    public static readonly RGB332: number;
    public static readonly RGB565LE: number;
    public static readonly RGB565BE: number;
    public static readonly RGB24: number;
    public static readonly RGBA32: number;
    public static readonly CLUT16: number;
  }
  abstract class PixelsOut {
    public constructor(params: {
      width: number;
      height: number;
      pixelFormat: number;
    });
    public begin(x: number, y: number, width: number, height: number): void;
    public end(): void;
    public continue(x: number, y: number, width: number, height: number): void;
    public send(pixels: ArrayBuffer, offset: number, count: number): void;
    public adaptInvalid(r: Rectangle): void;
    public pixelsToBytes(count: number): void;
    public readonly width: number;
    public readonly height: number;
    public readonly pixelFormat: number;
    public readonly async: boolean;
    public readonly c_dispatch?: HostBuffer;
    // clut: any;
  }
  class HostBuffer extends ArrayBuffer {}
  class SPIOut extends PixelsOut {}
  class BufferOut extends PixelsOut {
    public readonly bitmap: Bitmap;
  }
  class BMPOut extends PixelsOut {}
  class RLE4Out extends PixelsOut {}
  class ColorCellOut extends PixelsOut {}

  class JPEG {
    public constructor();
    public constructor(jpegData: ArrayBuffer);
    public read(): Bitmap;
    public push(buffer?: ArrayBuffer): void;
    public readonly ready: boolean;
    public readonly width: number;
    public readonly height: number;
  }

  class PNG {
    public static decompress(pngData: ArrayBuffer, hasAlpha?: boolean): Bitmap;
    public read(): ArrayBuffer;
    public readonly width: number;
    public readonly height: number;
    public readonly depth: number;
    public readonly channels: number;
    public readonly bpp: number;
  }

  abstract class Render {
    public constructor(pixelsOut: PixelsOut, dictionary: any);
    public begin(x: number, y: number, width: number, height: number): void;
    public begin(x: number, y: number): void;
    public begin(): void;
    public end(): void;
    public continue(x: number, y: number, width: number, height: number): void;
    public adaptInvalid(r: Rectangle): void;
  }
  type Rectangle = any;

  class Convert {
    public constructor(src: Bitmap, dst: Bitmap);
    public convert(src: ArrayBuffer | HostBuffer, dst: ArrayBuffer): void;
  }

  class Poco extends Render {
    public readonly height: number;
    public readonly width: number;
    public constructor(
      pixelsOut: PixelsOut,
      dictionary: {
        displaylistLength: number;
        clip(x: number, y: number, width: number, height: number): void;
        clip(): void;
        origin(x: number, y: number): void;
        makeColor(r: number, g: number, b: number): Color;
        fillRectangle(
          color: ColorCellOut,
          x: number,
          y: number,
          width: number,
          height: number
        ): void;
        blendRectangle(
          color: ColorCellOut,
          blend: number,
          x: number,
          y: number,
          width: number,
          height: number
        ): void;
        drawPixel(color: ColorCellOut, x: number, y: number): void;
        drawBitmap(
          bits: Bitmap,
          x: number,
          y: number,
          sx?: number,
          sy?: number,
          sw?: number,
          sh?: number
        ): void;
        drawMonochrome(
          monochrome: Bitmap,
          fore: number,
          back: number,
          x: number,
          y: number,
          sx?: number,
          sy?: number,
          sw?: number,
          sh?: number
        ): void;
        drawGray(
          bits: Bitmap,
          color: number,
          x: number,
          y: number,
          sx?: number,
          sy?: number,
          sw?: number,
          sh?: number,
          blend?: number
        ): void;
        drawMasked(
          bits: Bitmap,
          x: number,
          y: number,
          sx?: number,
          sy?: number,
          sw?: number,
          sh?: number,
          mask?: number,
          mask_sx?: number,
          mask_sy?: number,
          blend?: number
        ): void;
        fillPattern(
          bits: Bitmap,
          x: number,
          y: number,
          w: number,
          h: number,
          sx?: number,
          sy?: number,
          sw?: number,
          sh?: number,
          mask?: number,
          mask_sx?: number,
          mask_sy?: number,
          blend?: number
        ): void;
        drawText(
          text: string,
          font: BMFont,
          color: Color,
          x: number,
          y: number,
          width?: number
        ): void;
        getTextWidth(text: string, font: BMFont): number;
        drawFrame(
          frame: ColorCell,
          dictionary: {
            width: number;
            height: number;
          },
          x: number,
          y: number
        ): void;
      }
    );
  }
  function loadJPEG(image: ArrayBuffer): Bitmap;
  function parseBMF(buffer: ArrayBuffer): BMFont;
  function parseRLE(buffer: ArrayBuffer): Bitmap;
  function parseBMP(buffer: ArrayBuffer): Bitmap;

  class Stream {
    public constructor(
      buffer: ArrayBuffer,
      dictionary: {
        loop: boolean;
      }
    );
    public initialize(
      buffer: ArrayBuffer,
      dictionary: {
        loop: boolean;
      }
    ): void;
    public next(): ArrayBuffer;
    public read(offset: number, size: number): ArrayBuffer;
    public readonly width: number;
    public readonly height: number;
  }
  // TODO
  type BMFont = any;
  type Color = number;
  type ColorCell = any;
}

export = Commodetto;
