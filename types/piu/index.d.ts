declare namespace piu {
  class Behavior {}
  /**
   * Objects for graphical parts of their user interface, such as buttons, icons, sliders, switches, and tabs.
   */
  class Content {
    /**
     * Content constructor
     * @param behaviorData 	A parameter that is passed into the onCreate function of this content's behavior. This may be any type of object, including null or a dictionary with arbitrary parameters.
     * @param dictionary An object with properties to initialize the result.
     */
    public constructor(behaviorData: any, dictionary: ContentConstructorParam);
    /**
     *
     * @param x
     * @param y
     */
    public adjust(x: number, y: number): void;
    public bubble(id: string, ...extras: any[]): void;
    public captureTouch(id: string, x: number, y: number, ticks: number): void;
    public defer(id: string, ...extras: any[]): void;
    public delegate(id: string, ...extras: any[]): void;
    public distribute(id: string, ...extras: any[]): void;
    public focus(): void;
    public hit(x: number, y: number): Content | undefined;
    public measure(): Size;
    public moveBy(x: number, y: number): void;
    public render(): void;
    public sizeBy(width: number, height: number): void;
    public start(): void;
    public stop(): void;
    public onCreate(content: Content, data: object, context: object): void;
    public onDisplaying(content: Content): void;
    public onFinished(content: Content): void;
    public onTimeChanged(content: Content): void;
    public onTouchBegan(
      content: Content,
      id: string,
      x: number,
      y: number,
      ticks: number
    ): void;
    public onTouchCancelled(content: Content, id: string): void;
    public onTouchended(
      content: Content,
      id: string,
      x: number,
      y: number,
      ticks: number
    ): void;
    public onTouchMoved(
      content: Content,
      id: string,
      x: number,
      y: number,
      ticks: number
    ): void;
    public static template(
      anonymous: (param: any) => ContentConstructorParam
    ): ContentConstructor;

    public readonly previous: Content | null;
    public readonly next: Content | null;
    public readonly application: Application;
    public readonly container: Container | null;
    public readonly index: number;
    public name: string;
    public active: boolean;
    public anchor: string;
    public behavior: object;
    public coordinates: Coordinates;
    public bounds: Bounds;
    public backgroundTouch: boolean;
    public exclusiveTouch: boolean;
    public multipleTouch: boolean;

    public time: number;
    public duration: number;
    public fraction: number;
    public interval: number;
    public loop: boolean;

    public offset: undefined | Position;
    public position: undefined | Position;
    public size: Size;
    public state: number;
    public variant: number;
    public skin: Skin | null;
    public style: Style | null;
    public visible: boolean;
    public x: number;
    public y: number;
    public width: number;
    public height: number;
  }
  interface ContentConstructor {
    new (dictionary?: ContentConstructorParam): Content;
    template(dictionary: ContentConstructorParam | any): ContentConstructor;
  }
  class Template extends Content {
    public constructor(behavior: any, param: any);
    public constructor(param: any);
  }
  class Style {
    public constructor(dictionary: StyleConstructorParam);
    public measure(string: string): Size;
  }
  class Texture {
    public constructor(path: string);
    public constructor(dictionary: TextureConstructorParam);
    public readonly height: number;
    public readonly width: number;
    public static template(
      dictionary: TextureConstructorParam
    ): TextureConstructor;
  }
  class Skin {
    public constructor(dictionary: TextureSkinConstructorParam);
    public constructor(dictionary: ColorSkinConstructorParam);
    public static template(
      dictionary: TextureSkinConstructorParam | ColorSkinConstructorParam
    ): SkinConstructor;
    public borders: Coordinates;
    public fill: Color | Color[];
    public stroke: Color | Color[];
    public texture: Texture;
    public color: Color;
    public bounds: Bounds;
    public height: number;
    public width: number;
    public states?: number;
    public variants?: number;
    public tiles?: Coordinates;
    public top?: number;
    public right?: number;
    public bottom?: number;
    public left?: number;
  }
  class Transition {
    public constructor(duration: number);
    public onBegin(container: Container, ...extras: any[]): void;
    public onEnd(container: Container, ...extras: any[]): void;
    public onStep(fraction: number): void;
  }
  class Container extends Content {
    public constructor(
      behaviorData: any,
      dictionary: ContainerConstructorParam
    );
    public clip: boolean;
    public readonly first: Content | null;
    public readonly last: Content | null;
    public readonly length: number;
    public readonly transitioning: boolean;
    public add(content: Content): void;
    public content(at: number | string): Content;
    public empty(start?: number, stop?: number): void;
    public firstThat(id: string, ...extras: any[]): void;
    public insert(content: Content, before: Content): void;
    public lastThat(id: string, ...extras: any[]): void;
    public remove(content: Content): void;
    public replace(content: Content, by: Content): void;
    public run(transition: Transition, ...extras: any[]): void;
    public swap(content0: Content, content1: Content): void;
    public onTransitionBeginning(container: Container): void;
    public onTransitionEnded(container: Container): void;
    public static template(
      anonymous: (param: any) => ContainerConstructorParam
    ): ContainerConstructor;
  }
  interface ContainerConstructor {
    new (dictionary: ContainerConstructor | any): Container;
    template(dictionary: ContainerConstructorParam | any): ContainerConstructor;
  }
  class Label extends Content {
    public constructor(behaviorData: any, dictionary: LabelConstructorParam);
    public string: string;
    public static template(
      anonymous: (param: any) => LabelConstructorParam
    ): LabelConstructor;
  }
  class Port extends Content {
    public drawContent(
      x: number,
      y: number,
      width: number,
      height: number
    ): void;
    public drawLabel(
      string: string,
      x: number,
      y: number,
      width: number,
      height: number
    ): void;
    public drawSkin(
      skin: Skin,
      x: number,
      y: number,
      width: number,
      height: number,
      variant?: number,
      state?: number
    ): void;
    public drawString(
      string: string,
      style: Style,
      color: Color,
      x: number,
      y: number,
      width: number,
      height: number
    ): void;
    public drawStyle(
      string: string,
      style: Style,
      x: number,
      y: number,
      width: number,
      height: number,
      ellipsis?: boolean,
      state?: number
    ): void;
    public drawTexture(
      texture: Texture,
      color: Color,
      x: number,
      y: number,
      sx: number,
      sy: number,
      sw: number,
      sh: number
    ): void;
    public fillColor(
      color: Color,
      x: number,
      y: number,
      width: number,
      height: number
    ): void;
    public fillTexture(
      texture: Texture,
      color: Color,
      x: number,
      y: number,
      width: number,
      height: number,
      sx?: number,
      sy?: number,
      sw?: number,
      sh?: number
    ): void;
    public invalidate(
      x?: number,
      y?: number,
      width?: number,
      height?: number
    ): void;
    public measureString(string: string, style: Style): Size;
    public popClip(): void;
    public pushClip(
      x?: number,
      y?: number,
      width?: number,
      height?: number
    ): void;
    public onDraw(
      port: Port,
      x: number,
      y: number,
      width: number,
      height: number
    ): void;
  }
  class Text extends Content {
    public constructor(begaviorData: any, dictionary: TextConstructorParam);
    public blocks: {
      behavior: object | null;
      style: Style | null;
      spans: string | string[];
    }[];
    public string: string;
    public begin(): void;
    public beginBlock(style?: Style, behavior?: object): void;
    public beginSpan(style: Style, behavior?: object): void;
    public concat(string: string): void;
    public end(): void;
    public endBlock(): void;
    public endSpan(): void;
    public static template(
      anonymous: (param: any) => TextConstructorParam
    ): TextConstructor;
  }
  interface LabelConstructor extends ContentConstructor {
    new (dictionary?: LabelConstructorParam): Label;
    template(dictionary: LabelConstructorParam | any): LabelConstructor;
  }
  interface TextConstructor extends ContentConstructor {
    new (dictionary?: TextConstructorParam): Text;
    template(dictionary: TextConstructorParam | any): TextConstructor;
  }
  class Application extends Container {
    public constructor(
      behaviorData: any,
      dictionary: ApplicationConstructorParam
    );
    public displayListLength: number;
    public commandListLength: number;
  }
  interface ApplicationConstructorParam extends ContainerConstructorParam {
    displayListLength?: number;
    commandListLength?: number;
  }
  class Column extends Container {}
  class Layout extends Container {
    public onFitHorizontally(layout: Layout, width: number): void;
    public onFitVertically(layout: Layout, height: number): void;
    public onMeasureHorizontally(layout: Layout, width: number): void;
    public onMeasureVertically(layout: Layout, height: number): void;
  }
  class Image extends Content {
    public constructor(behaviorData: any, dictionary: ImageConstructorParam);
    public readonly frameCount: never;
    public frameIndex: number;
  }
  class Die extends Layout {
    public constructor(behaviorData: any, dictionary: ContentConstructorParam);
    public set(x: number, y: number, width: number, height: number): Die;
    public sub(x: number, y: number, width: number, height: number): Die;
    public and(x: number, y: number, width: number, height: number): Die;
    public or(x: number, y: number, width: number, height: number): Die;
    public xor(x: number, y: number, width: number, height: number): Die;
    public fill(): Die;
    public empty(): Die;
    public cut(): void;
    public attach(content: Content): void;
    public detach(): void;
  }
  class Row extends Container {}
  class Scroller extends Container {
    public constructor(behaviorData: any, dictionary: ScrollerConstructorParam);
    public readonly constraint: Position;
    public loop: boolean;
    public scroll: Position;
    public tracking: boolean;
    public reveal(bounds: Bounds): void;
    public scrollBy(dx: number, dy: number): void;
    public scrollTo(x: number, y: number): void;
    public onScrolled(scroller: Scroller): void;
  }
  class Timeline {
    public constructor();
    public duration: number;
    public fraction: number;
    public time: number;
    public from(
      target: object,
      fromProperties: object,
      duration: number,
      easing?: string,
      delay?: number
    ): Timeline;
    public seekTo(time: number): void;
    public to(
      target: object,
      fromProperties: object,
      duration: number,
      easing?: string,
      delay?: number
    ): Timeline;
  }
  interface ContentConstructorParam
    extends Coordinates,
      Size,
      ContentState,
      TimeProperty,
      TouchProperty {
    /**
     * This content's name
     */
    name?: string;
    /**
     * Creates an anchor, a reference to the created content object in the instantiating data
     */
    anchor?: string;
    /**
     * A function that creates instances of Behavior.prototype; generally a class that extends the Behavior class. This content will create an instance of this behavior, set its behavior parameter to the created instance, and trigger the onCreate method.
     */
    Behavior?: new () => Behavior;
    /**
     * This content's skin
     */
    skin?: Skin;
    /**
     * A function that creates instances of Skin.prototype. This content will create an instance of this skin, and set its skin parameter to the created instance.
     */
    Skin?: () => Skin;
    /**
     * This content's style
     */
    style?: Style;
    /**
     * A function that creates instances of Style.prototype. This content will create an instance of this style, and set its style parameter to the created instance.
     */
    Style?: () => Style;
    /**
     * If true, this content is visible.
     */
    visible?: boolean;
  }
  interface TimeProperty {
    /**
     * This content's time, in milliseconds. When its time is set, this content triggers the onTimeChanged event.
     */
    time?: number;
    /**
     * This content's duration, in milliseconds. This content triggers the onFinished event when its clock is running and its time equals its duration.
     */
    duration?: number;
    /**
     * This content's fraction--that is, the ratio of its time to its duration
     */
    fraction?: number;
    /**
     * The time between ticks of this content's clock--that is, number of milliseconds between triggering the onTimeChanged events of the content's behavior when its clock is running.
     */
    interval?: number;
    /**
     * If true, this content will restart its clock when its time equals its duration
     */
    loop?: boolean;
  }
  interface ContentState {
    /**
     * 	This content's state. If this content's skin defines states, setting the state changes the appearance of this content.
     */
    state?: number;
    /**
     * This content's variant. If this content's skin defines variants, setting the variant changes the appearance of this content.
     */
    variant?: number;
  }
  interface TouchProperty {
    /**
     * If true, this content can be touched; that is, it triggers touch events.
     */
    active?: boolean;
    /**
     * If true, this container receives any touch events that are received by its contents; that is, it will trigger touch events when one of its contents has been touched.
     */
    backgroundTouch?: boolean;
    /**
     * 	If true, this content always captures touches; that is, captureTouch is implicitly invoked on onTouchDown for this content. Setting exclusiveTouch to true is equivalent to calling captureTouch in response to the onTouchDown event for every touch id.
     */
    exclusiveTouch?: boolean;
    /**
     * If true, this content handles multiple touches.
     */
    multipleTouch?: boolean;
  }
  interface Coordinates {
    /**
     * This content's top coordinate, in pixels (setting top in the created instance's coordinates property)
     */
    top?: number;
    /**
     * This content's right coordinate, in pixels (setting right in the created instance's coordinates property)
     */
    right?: number;
    /**
     * This content's bottom coordinate, in pixels (setting bottom in the created instance's coordinates property)
     */
    bottom?: number;
    /**
     * This content's left coordinate, in pixels (setting left in the created instance's coordinates property)
     */
    left?: number;
  }
  interface Position {
    x?: number;
    y?: number;
  }
  interface Size {
    /**
     * This content's width, in pixels (setting width in the created instance's coordinates property)
     */
    width?: number;
    /**
     * This content's height, in pixels (setting height in the created instance's coordinates property)
     */
    height?: number;
  }
  interface Bounds extends Position, Size {}
  interface TextConstructorParam extends ContentConstructorParam {
    blocks?: {
      behavior: object | null;
      style: Style | null;
      spans: string | string[];
    }[];
    string: string;
  }
  interface ImageConstructorParam extends ContentConstructorParam {
    path: string;
  }
  interface LabelConstructorParam extends ContentConstructorParam {
    string: string;
  }
  interface ContainerConstructorParam extends ContentConstructorParam {
    clip?: boolean;
    contents: Content[];
  }
  interface ScrollerConstructorParam extends ContainerConstructorParam {
    loop: boolean;
  }
  interface TextureConstructorParam {
    path: string;
  }
  interface TextureSkinConstructorParam extends Coordinates, Bounds {
    texture?: Texture;
    Texture: TextureConstructor;
    color?: Color;
    states?: number;
    variants?: number;
    tiles?: Coordinates;
  }
  interface ColorSkinConstructorParam {
    borders?: Coordinates;
    fill?: Color | Color[];
    stroke?: Color | Color[];
  }
  type StyleConstructorParam =
    | LabelStyleConstructorParam
    | TextStyleConstructorParam;
  interface ContentConstructor {
    new (name: string, dictionary: ContentConstructorParam): Content;
  }
  interface TextureConstructor {
    new (dictionary?: TextureConstructorParam): Texture;
    template(dictionary: TextureConstructorParam | any): TextureConstructor;
  }
  interface SkinConstructor {
    new (dictionary?: SkinConstructorParam): Skin;
    template(dictionary: SkinConstructorParam | any): SkinConstructor;
  }
  type SkinConstructorParam =
    | ColorSkinConstructorParam
    | TextureSkinConstructorParam;
  interface TextStyleConstructorParam extends StyleConstructorParamBase {
    leading?: number;
    right?: number;
    bottom?: number;
    left?: number;
  }
  interface LabelStyleConstructorParam extends StyleConstructorParamBase {
    vertical?: string;
  }
  interface StyleConstructorParamBase {
    color: Color | Color[];
    font: string;
    horizontal?: string;
    top?: number;
  }
  type Color = string;
}
export = piu;
