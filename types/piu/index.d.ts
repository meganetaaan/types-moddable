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
    public constructor(behaviorData: any, dictionary: ContentConstructorParam)
    /**
     * @param x
     * @param y
     * @deprecated
     */
    public adjust(x: number, y: number): void
    /**
     * Causes this content and all container objects upward in the containment hierarchy to trigger an event named by the value of id. The bubbling halts when a bubbled event returns true. Note that the first parameter of a bubbled event is the container object that triggers the event, not this content. Additional parameters, if any, of a bubbled event are the extra parameters of the bubble function.
     * @param id The name of the event to trigger
     * @param extras Zero or more extra parameters
     */
    public bubble(id: string, ...extras: any[]): void
    /**
     * Causes this content to capture the touch named id, meaning that only this content will trigger the remaining onTouchMoved and onTouchEnded events related to that touch. Other content objects concerned with the captured touch trigger the onTouchCancelled event when the captureTouch function is called.
     * @param id The identifier of the touch
     * @param x The global position of the touch, in pixels
     * @param y The global position of the touch, in pixels
     * @param ticks The global time of the touch
     */
    public captureTouch(id: string, x: number, y: number, ticks: number): void
    /**
     * The defer function is similar to the delegate function; both cause this content to trigger an event named by the value of id. The difference is in their timing. The delegate function sends the event immediately while the defer functions posts the event. The event will be triggered at the following iteration of the main event loop.
     * The first parameter of the deferred event is this content. Additional parameters, if any, of the deferred event are the extra parameters of the defer function.
     * @param id The name of the event to trigger
     * @param extras Zero or more extra parameters
     */
    public defer(id: string, ...extras: any[]): void
    /**
     * Causes this content to trigger an event named by the value of id. The first parameter of the delegated event is this content. Additional parameters, if any, of the delegated event are the extra parameters of the delegate function.
     * @param id The name of the event to trigger
     * @param extras Zero or more extra parameters
     */
    public delegate(id: string, ...extras: any[]): void
    /**
     * Causes this container and all content objects downward in the containment hierarchy to trigger an event named by the value of id. The order of traversal is depth first. Traversal halts when one of the triggered event-handling functions returns true. Note that the first parameter of a distributed event is the content object that triggers the event, not this container. Additional parameters, if any, of the event are the extra parameters of the distribute function.
     * @param id The name of the event
     * @param extras Zero or more extra parameters
     */
    public distribute(id: string, ...extras: any[]): void
    /**
     * Focuses this content so that it triggers keyboard events. Only one content object at a time is focused.
     */
    public focus(): void
    /**
     * Returns this content if this content is active, bound, and contains the position, and undefined otherwise. If this content is a container instance, returns either one of its contents or itself if the content or itself is active, bound, and contains the position, or undefined.
     * @param x The global position to test, in pixels
     * @param y The global position to test, in pixels
     */
    public hit(x: number, y: number): Content | undefined
    /**
     * Returns the measured size of this content, as an object with width and height parameters.
     */
    public measure(): Size
    /**
     * Moves this content as specified by the parameters. If the content's coordinates constrain its position, the moveBy function ignores the corresponding horizontal or vertical deltas.
     * @param x The deltas by which to move this content, in pixels
     * @param y The deltas by which to move this content, in pixels
     */
    public moveBy(x: number, y: number): void

    public render(): void
    /**
     * Sizes this content as specified by the parameters. If this content's coordinates constrain its size, the sizeBy function ignores the corresponding horizontal or vertical deltas.
     * @param width The deltas by which to size this content, in pixels
     * @param height The deltas by which to size this content, in pixels
     */
    public sizeBy(width: number, height: number): void
    /**
     * Starts this content's clock
     */
    public start(): void
    /**
     * Stops this content's clock
     */
    public stop(): void
    /**
     * This event is triggered when the content is constructed.
     * @param content The content object that triggered the evet
     * @param data The parameters of the constructor of the content object that references or contains the behavior
     * @param context The parameters of the constructor of the content object that references or contains the behavior
     */
    public onCreate(content: Content, data: object, context: object): void
    /**
     * This event is triggered after the specified content object is added to the containment hierarchy and has been measured and fitted, but before it is visible to the user. This is the first event the object receives after its coordinates have been computed.
     * @param content The content object that triggered the evet
     */
    public onDisplaying(content: Content): void
    /**
     * This event is triggered when the specified content object is running and its time equals its duration.
     * @param content The content object that triggered the evet
     */
    public onFinished(content: Content): void
    /**
     * This event is triggered when the time of the specified content object changes.
     * @param content The content object that triggered the evet
     */
    public onTimeChanged(content: Content): void
    /**
     * These events are triggered when the specified content object is active and touched.
     * @param content The content object that triggered the evet
     * @param id The identifier of the touch
     * @param x The global coordinates of the event, in pixels
     * @param y The global coordinates of the event, in pixels
     * @param ticks The global time of the event
     */
    public onTouchBegan(content: Content, id: string, x: number, y: number, ticks: number): void
    /**
     * These events are triggered when the specified content object is active and touched.
     * @param content The content object that triggered the evet
     * @param id The identifier of the touch
     * @param x The global coordinates of the event, in pixels
     * @param y The global coordinates of the event, in pixels
     * @param ticks The global time of the event
     */
    public onTouchCancelled(content: Content, id: string): void
    /**
     * These events are triggered when the specified content object is active and touched.
     * @param content The content object that triggered the evet
     * @param id The identifier of the touch
     * @param x The global coordinates of the event, in pixels
     * @param y The global coordinates of the event, in pixels
     * @param ticks The global time of the event
     */
    public onTouchended(content: Content, id: string, x: number, y: number, ticks: number): void
    /**
     * These events are triggered when the specified content object is active and touched.
     * @param content The content object that triggered the evet
     * @param id The identifier of the touch
     * @param x The global coordinates of the event, in pixels
     * @param y The global coordinates of the event, in pixels
     * @param ticks The global time of the event
     */
    public onTouchMoved(content: Content, id: string, x: number, y: number, ticks: number): void
    /**
     * Returns a constructor, a function that creates instances of Content.prototype. The prototype property of the result is Content.prototype. The result also provides a template function.
     * @param anonymous	A function that returns an object with properties to initialize the instances that the result creates
     */
    public static template(anonymous: (param: any) => ContentConstructorParam): ContentConstructor
    /**
     * The previous content object in this content's container; null if this content is the first content object of this content's container or if this content has no container
     */
    public readonly previous: Content | null
    /**
     * The next content object of this content's container; null if this content is the last content object of this content's container or if this content has no container
     */
    public readonly next: Content | null
    /**
     * @deprecated
     */
    public readonly application: Application
    /**
     * This content's container, or null if this content is unbound--that is, if it has no container
     */
    public readonly container: Container | null
    /**
     * The index of this content in its container, or –1 if this content is unbound
     */
    public readonly index: number
    /**
     * This content's name
     */
    public name: string
    /**
     * If true, this content can be touched; that is, it triggers touch events.
     */
    public active: boolean
    /**
     * The identifier of the property that references this content object in its instantiating data
     */
    public anchor: string
    /**
     * This content's behavior object or null. When this content triggers an event, it calls the corresponding function property of its behavior, if any.
     */
    public behavior: object
    /**
     * This content's coordinates, as an object with left, width, right, top, height, or bottom number properties (specified in pixels), or an empty object if no coordinates are passed into the constructor
     */
    public coordinates: Coordinates
    /**
     * This content's global position and size, as an object with x, y, width, and height number properties, specified in pixels. If this content is unbound, the getter returns undefined and the setter is ignored.
     */
    public bounds: Bounds
    /**
     *	If true, this container receives any touch events that are received by its contents; that is, it will trigger touch events when one of its contents has been touched.
     */
    public backgroundTouch: boolean
    /**
     * If true, this content always captures touches; that is, captureTouch is implicitly invoked on onTouchDown for this content. Setting exclusiveTouch to true is equivalent to calling captureTouch in response to the onTouchDown event for every touch id.
     */
    public exclusiveTouch: boolean
    /**
     * If true, this content handles multiple touches.
     */
    public multipleTouch: boolean

    /**
     * This content's time, in milliseconds. When its time is set, this content triggers the onTimeChanged event.
     */
    public time: number
    /**
     * This content's duration, in milliseconds. This content triggers the onFinished event when its clock is running and its time equals its duration.
     */
    public duration: number
    /**
     * This content's fraction--that is, the ratio of its time to its duration. If the duration is 0, the getter returns undefined and the setter is ignored. This content triggers the onTimeChanged event when its fraction is set.
     */
    public fraction: number
    /**
     * The time between ticks of this content's clock--that is, number of milliseconds between triggering the onTimeChanged events of the content's behavior when its clock is running.
     */
    public interval: number
    /**
     * If true, this content will restart its clock when its time equals its duration
     */
    public loop: boolean
    /**
     * If true, this content's clock is running.
     */
    public running: boolean
    /**
     * This content's local position, as an object with x and y number properties, specified in pixels. If this content is unbound, the getter returns undefined and the setter is ignored.
     */
    public offset: undefined | Position
    /**
     * This content's global position, as an object with x and y number properties, specified in pixels. If this content is unbound, the getter returns undefined and the setter is ignored.
     */
    public position: undefined | Position
    /**
     * This content's size, as an object with width and height number properties, specified in pixels
     */
    public size: Size
    /**
     * This content's state. If this content's skin defines states, setting the state changes the appearance of this content.
     */
    public state: number
    /**
     * This content's variant. If this content's skin defines variants, setting the variant changes the appearance of this content.
     */
    public variant: number
    /**
     * This content's skin or null
     */
    public skin: Skin | null
    /**
     * This content's style or null
     */
    public style: Style | null
    /**
     * If true, this content is visible.
     */
    public visible: boolean
    /**
     * This content's global x position. If this content is unbound, the getters return undefined and the setters are ignored.
     */
    public x: number
    /**
     * This content's global y position. If this content is unbound, the getters return undefined and the setters are ignored.
     */
    public y: number
    /**
     * This content's width, in pixels
     */
    public width: number
    /**
     * This content's height, in pixels
     */
    public height: number
  }
  interface ContentConstructor {
    new (dictionary?: ContentConstructorParam): Content
    template(dictionary: ContentConstructorParam | any): ContentConstructor
  }
  class Style {
    /**
     * @param dictionary An object with properties to initialize the result. Only parameters specified in the Dictionary section below will have an effect; other parameters will be ignored.
     */
    public constructor(dictionary: StyleConstructorParam)
    public measure(string: string): Size
  }
  class Texture {
    /**
     * @param path The URL of the image file. It must be a file URL.
     */
    public constructor(path: string)
    /**
     * @param dictionary An object with properties to initialize the result. Only parameters specified in the Dictionary section below will have an effect; other parameters will be ignored.
     */
    public constructor(dictionary: TextureConstructorParam)
    /**
     * This texture's height, in physical pixels
     */
    public readonly height: number
    /**
     * This texture's width, in physical pixels
     */
    public readonly width: number
    /**
     * Returns a constructor, a function that creates instances of Texture.prototype. The prototype property of the result is Texture.prototype.
     * @param dictionary An object with properties to initialize the result. Only parameters specified in the Dictionary section below will have an effect; other parameters will be ignored.
     */
    public static template(dictionary: TextureConstructorParam): TextureConstructor
  }
  class Skin {
    /**
     * Returns a skin instance, an object that inherits from Skin.prototype
     * @param dictionary An object with properties to initialize the result. Only parameters specified in the Dictionary section below will have an effect; other parameters will be ignored.
     */
    public constructor(dictionary: TextureSkinConstructorParam)
    /**
     * Returns a skin instance, an object that inherits from Skin.prototype
     * @param dictionary An object with properties to initialize the result. Only parameters specified in the Dictionary section below will have an effect; other parameters will be ignored.
     */
    public constructor(dictionary: ColorSkinConstructorParam)
    /**
     * Returns a constructor, a function that creates instances of Skin.prototype. The prototype property of the result is Skin.prototype.
     * @param dictionary An object with properties to initialize the result. Only parameters specified in the Dictionary section below will have an effect; other parameters will be ignored.
     */
    public static template(dictionary: TextureSkinConstructorParam | ColorSkinConstructorParam): SkinConstructor
    /**
     * The borders to stroke content objects with, as an object with left, right, top, or bottom number properties, specified in pixels. The default is no borders.
     */
    public borders: Coordinates
    /**
     * This skin's fill color(s), as an array of strings of the form specified in the Color section of this document.
     * The state property of the content object using the skin determines the index of the array; if state is not an integer, colors from surrounding states are blended. If specified as one string instead of an array, it is treated as an array with a single item. The default fill color is transparent.
     */
    public fill: Color | Color[]
    /**
     * This skin's stroke color(s), as an array of strings of the form specified in the Color section of this document.
     * The state property of the content object using the skin determines the index of the array; if state is not an integer, colors from surrounding states are blended. If specified as one string instead of an array, it is treated as an array with a single item. The default stroke color is transparent.
     */
    public stroke: Color | Color[]
    /**
     * This skin's texture
     */
    public texture: Texture
    /**
     * If the texture has only an alpha bitmap, the value of the color property will be used to colorize the bitmap. Must be a string or array of strings of the form specified in the Colors section of this document.
     */
    public color: Color
    /**
     * The portion of the texture object to extract, as an object with x, y, width, and height number properties, specified in pixels
     */
    public bounds: Bounds
    /**
     * This skin's height, in pixels
     */
    public height: number
    /**
     * This skin's width, in pixels
     */
    public width: number
    /**
     * This skin's vertical offset between states, in pixels
     */
    public states?: number
    /**
     * This skin's horizontal offset between variants, in pixels
     */
    public variants?: number
    /**
     * This skin's tiles, as an object with left, right, top, and bottom number properties, specified in pixels
     */
    public tiles?: Coordinates
    /**
     * The skin's top tile
     */
    public top?: number
    /**
     * The skin's left tile
     */
    public right?: number
    /**
     * The skin's bottom tile
     */
    public bottom?: number
    /**
     * The skin's left tile
     */
    public left?: number
  }
  class Transition {
    public constructor(duration: number)
    /**
     * Invoked when this transition starts. The extra parameters are the extra parameters of the call to the run function that bound this transition to the specified container object.
     * @param container The container object that is running the transition
     * @param extras Zero or more extra parameters
     */
    public onBegin(container: Container, ...extras: any[]): void
    /**
     * Invoked when this transition ends. The extra parameters are the extra parameters of the call to the run function that bound this transition to the specified container object.
     * @param container The container object that is running the transition
     * @param extras Zero or more extra parameters
     */
    public onEnd(container: Container, ...extras: any[]): void
    /**
     * Called while this transition is running; called at least twice (with a fraction parameter of 0 and 1) and at most at the display refresh rate--for example, 60 times a second
     * @param container The container object that is running the transition
     * @param extras Zero or more extra parameters
     */
    public onStep(fraction: number): void
    /**
     * The duration of the transition, in milliseconds
     */
    public duration?: number
  }
  /**
   * The container object is a content object that can contain other content objects. In a container, content objects are stored in a doubly linked list. The content objects can also be accessed by index or by name using the content property, for instance container.content(0) or container.content("foo").
   */
  class Container extends Content {
    /**
     * @param behaviorData A parameter that is passed into the onCreate function of this container's behavior. This may be any type of object, including null or a dictionary with arbitrary parameters.
     * @param dictionary An object with properties to initialize the result.Only parameters specified in the Dictionary section below will have an effect; other parameters will be ignored.
     */
    public constructor(behaviorData: any, dictionary: ContainerConstructorParam)
    /**
     * If true, this container will clip its contents.
     */
    public clip: boolean
    /**
     * The first content object in this container, or null if this container is empty
     */
    public readonly first: Content | null
    /**
     * The last content object in this container, or null if this container is empty
     */
    public readonly last: Content | null
    /**
     * The number of content objects in this container
     */
    public readonly length: number
    /**
     * If true, this container is running a transition object.
     */
    public readonly transitioning: boolean
    /**
     * Adds the specified content object to this container. The content object becomes the last content object in this container.
     * @param content The content object to add. It must be unbound; that is, its container must be null.
     */
    public add(content: Content): void
    /**
     * Returns the specified content object, or undefined if no content with the index or name specified is in this container
     * @param at The index or name property of the content object you want to access
     */
    public content(at: number | string): Content | undefined
    /**
     *
     * @param start The starting index (0 by default)
     * @param stop The stopping index (this.length by default)
     */
    public empty(start?: number, stop?: number): void
    /**
     * Causes all content objects in this container to trigger an event named by the value of id. The order of traversal is from the first to the last. Traversal halts when a distributed event returns true. Note that the first parameter of a distributed event is the content object that triggers the event, not this container. Additional parameters, if any, of the event are the extra parameters of the firstThat function.
     * @param id The name of the event to trigger
     * @param extras Zero or more extra parameters
     */
    public firstThat(id: string, ...extras: any[]): void
    /**
     * Inserts one content object before another in this container as specified by the parameters
     * @param content The content object to insert. Its container must be null.
     * @param before The content object before which to insert. Its container must be this container.
     */
    public insert(content: Content, before: Content): void
    /**
     * Causes all content objects in this container to trigger an event named by the value of id. The order of traversal is from the last to the first. Traversal halts when a distributed event returns true. Note that the first parameter of a distributed event is the content object that triggers the event, not this container. Additional parameters, if any, of the event are the extra parameters of the lastThat function.
     * @param id The name of the event to trigger
     * @param extras Zero or more extra parameters
     */
    public lastThat(id: string, ...extras: any[]): void
    /**
     * Removes the specified content object from this container
     * @param content The content object to remove. Its container must be this container.
     */
    public remove(content: Content): void
    /**
     * Replaces one content object with another in this container as specified by the parameters
     * @param content The content object to replace. Its container must be this container.
     * @param by The replacing content object. It must be unbound; that is, its container must be null.
     */
    public replace(content: Content, by: Content): void
    /**
     * Runs the specified transition object in this container, binding that object to this container for the duration of the transition. The extra parameters are passed to the onBegin and onEnd functions of the transition object. The container triggers the onTransitionBeginning event before the transition starts and the onTransitionEnded event after the transition ends.
     * @param transition The transition object to run
     * @param extras Zero or more extra parameters
     */
    public run(transition: Transition, ...extras: any[]): void
    /**
     * Swaps the specified content objects in this container
     * @param content0 The content objects to swap. The container of both objects must be this container.
     * @param content1 The content objects to swap. The container of both objects must be this container.
     */
    public swap(content0: Content, content1: Content): void
    /**
     * This event is triggered when a transition object starts in the specified container object.
     * @param container The container object that triggered the event
     */
    public onTransitionBeginning(container: Container): void
    /**
     * This event is triggered when a transition object ends in the specified container object.
     * @param container The container object that triggered the event
     */
    public onTransitionEnded(container: Container): void
    /**
     * Returns a constructor, a function that creates instances of Container.prototype. The prototype property of the result is Container.prototype. The result also provides a template function.
     * @param anonymous A function that returns an object with properties to initialize the instances that the result creates
     */
    public static template(anonymous: (param: any) => ContainerConstructorParam): ContainerConstructor
  }
  interface ContainerConstructor {
    new (dictionary: ContainerConstructor | any): Container
    template(dictionary: ContainerConstructorParam | any): ContainerConstructor
  }
  class Label extends Content {
    public constructor(behaviorData: any, dictionary: LabelConstructorParam)
    public string: string
    public static template(anonymous: (param: any) => LabelConstructorParam): LabelConstructor
  }
  class Port extends Content {
    public drawContent(x: number, y: number, width: number, height: number): void
    public drawLabel(string: string, x: number, y: number, width: number, height: number): void
    public drawSkin(
      skin: Skin,
      x: number,
      y: number,
      width: number,
      height: number,
      variant?: number,
      state?: number
    ): void
    public drawString(
      string: string,
      style: Style,
      color: Color,
      x: number,
      y: number,
      width: number,
      height: number
    ): void
    public drawStyle(
      string: string,
      style: Style,
      x: number,
      y: number,
      width: number,
      height: number,
      ellipsis?: boolean,
      state?: number
    ): void
    public drawTexture(
      texture: Texture,
      color: Color,
      x: number,
      y: number,
      sx: number,
      sy: number,
      sw: number,
      sh: number
    ): void
    public fillColor(color: Color, x: number, y: number, width: number, height: number): void
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
    ): void
    public invalidate(x?: number, y?: number, width?: number, height?: number): void
    public measureString(string: string, style: Style): Size
    public popClip(): void
    public pushClip(x?: number, y?: number, width?: number, height?: number): void
    public onDraw(port: Port, x: number, y: number, width: number, height: number): void
  }
  class Text extends Content {
    public constructor(begaviorData: any, dictionary: TextConstructorParam)
    public blocks: {
      behavior: object | null
      style: Style | null
      spans: string | string[]
    }[]
    public string: string
    public begin(): void
    public beginBlock(style?: Style, behavior?: object): void
    public beginSpan(style: Style, behavior?: object): void
    public concat(string: string): void
    public end(): void
    public endBlock(): void
    public endSpan(): void
    public static template(anonymous: (param: any) => TextConstructorParam): TextConstructor
  }
  interface LabelConstructor extends ContentConstructor {
    new (dictionary?: LabelConstructorParam): Label
    template(dictionary: LabelConstructorParam | any): LabelConstructor
  }
  interface TextConstructor extends ContentConstructor {
    new (dictionary?: TextConstructorParam): Text
    template(dictionary: TextConstructorParam | any): TextConstructor
  }
  class Application extends Container {
    public constructor(behaviorData: any, dictionary: ApplicationConstructorParam)
    public displayListLength: number
    public commandListLength: number
  }
  interface ApplicationConstructorParam extends ContainerConstructorParam {
    displayListLength?: number
    commandListLength?: number
  }
  class Column extends Container {}
  class Layout extends Container {
    public onFitHorizontally(layout: Layout, width: number): void
    public onFitVertically(layout: Layout, height: number): void
    public onMeasureHorizontally(layout: Layout, width: number): void
    public onMeasureVertically(layout: Layout, height: number): void
  }
  class Image extends Content {
    public constructor(behaviorData: any, dictionary: ImageConstructorParam)
    public readonly frameCount: never
    public frameIndex: number
  }
  class Die extends Layout {
    public constructor(behaviorData: any, dictionary: ContentConstructorParam)
    public set(x: number, y: number, width: number, height: number): Die
    public sub(x: number, y: number, width: number, height: number): Die
    public and(x: number, y: number, width: number, height: number): Die
    public or(x: number, y: number, width: number, height: number): Die
    public xor(x: number, y: number, width: number, height: number): Die
    public fill(): Die
    public empty(): Die
    public cut(): void
    public attach(content: Content): void
    public detach(): void
  }
  class Row extends Container {}
  class Scroller extends Container {
    public constructor(behaviorData: any, dictionary: ScrollerConstructorParam)
    public readonly constraint: Position
    public loop: boolean
    public scroll: Position
    public tracking: boolean
    public reveal(bounds: Bounds): void
    public scrollBy(dx: number, dy: number): void
    public scrollTo(x: number, y: number): void
    public onScrolled(scroller: Scroller): void
  }
  class Timeline {
    public constructor()
    public duration: number
    public fraction: number
    public time: number
    public from(target: object, fromProperties: object, duration: number, easing?: string, delay?: number): Timeline
    public seekTo(time: number): void
    public to(target: object, fromProperties: object, duration: number, easing?: string, delay?: number): Timeline
  }
  interface ContentConstructorParam extends Coordinates, Size, ContentState, TimeProperty, TouchProperty {
    /**
     * This content's name
     */
    name?: string
    /**
     * Creates an anchor, a reference to the created content object in the instantiating data
     */
    anchor?: string
    /**
     * A function that creates instances of Behavior.prototype; generally a class that extends the Behavior class. This content will create an instance of this behavior, set its behavior parameter to the created instance, and trigger the onCreate method.
     */
    Behavior?: new () => Behavior
    /**
     * This content's skin
     */
    skin?: Skin
    /**
     * A function that creates instances of Skin.prototype. This content will create an instance of this skin, and set its skin parameter to the created instance.
     */
    Skin?: () => Skin
    /**
     * This content's style
     */
    style?: Style
    /**
     * A function that creates instances of Style.prototype. This content will create an instance of this style, and set its style parameter to the created instance.
     */
    Style?: () => Style
    /**
     * If true, this content is visible.
     */
    visible?: boolean
  }
  interface TimeProperty {
    /**
     * This content's time, in milliseconds. When its time is set, this content triggers the onTimeChanged event.
     */
    time?: number
    /**
     * This content's duration, in milliseconds. This content triggers the onFinished event when its clock is running and its time equals its duration.
     */
    duration?: number
    /**
     * This content's fraction--that is, the ratio of its time to its duration
     */
    fraction?: number
    /**
     * The time between ticks of this content's clock--that is, number of milliseconds between triggering the onTimeChanged events of the content's behavior when its clock is running.
     */
    interval?: number
    /**
     * If true, this content will restart its clock when its time equals its duration
     */
    loop?: boolean
  }
  interface ContentState {
    /**
     * 	This content's state. If this content's skin defines states, setting the state changes the appearance of this content.
     */
    state?: number
    /**
     * This content's variant. If this content's skin defines variants, setting the variant changes the appearance of this content.
     */
    variant?: number
  }
  interface TouchProperty {
    /**
     * If true, this content can be touched; that is, it triggers touch events.
     */
    active?: boolean
    /**
     * If true, this container receives any touch events that are received by its contents; that is, it will trigger touch events when one of its contents has been touched.
     */
    backgroundTouch?: boolean
    /**
     * 	If true, this content always captures touches; that is, captureTouch is implicitly invoked on onTouchDown for this content. Setting exclusiveTouch to true is equivalent to calling captureTouch in response to the onTouchDown event for every touch id.
     */
    exclusiveTouch?: boolean
    /**
     * If true, this content handles multiple touches.
     */
    multipleTouch?: boolean
  }
  interface Coordinates {
    /**
     * This content's top coordinate, in pixels (setting top in the created instance's coordinates property)
     */
    top?: number
    /**
     * This content's right coordinate, in pixels (setting right in the created instance's coordinates property)
     */
    right?: number
    /**
     * This content's bottom coordinate, in pixels (setting bottom in the created instance's coordinates property)
     */
    bottom?: number
    /**
     * This content's left coordinate, in pixels (setting left in the created instance's coordinates property)
     */
    left?: number
  }
  interface Position {
    x?: number
    y?: number
  }
  interface Size {
    /**
     * This content's width, in pixels (setting width in the created instance's coordinates property)
     */
    width?: number
    /**
     * This content's height, in pixels (setting height in the created instance's coordinates property)
     */
    height?: number
  }
  interface Bounds extends Position, Size {}
  interface TextConstructorParam extends ContentConstructorParam {
    blocks?: {
      behavior: object | null
      style: Style | null
      spans: string | string[]
    }[]
    string: string
  }
  interface ImageConstructorParam extends ContentConstructorParam {
    path: string
  }
  interface LabelConstructorParam extends ContentConstructorParam {
    string: string
  }
  interface ContainerConstructorParam extends ContentConstructorParam {
    clip?: boolean
    contents: Content[]
  }
  interface ScrollerConstructorParam extends ContainerConstructorParam {
    loop: boolean
  }
  interface TextureConstructorParam {
    path: string
  }
  interface TextureSkinConstructorParam extends Coordinates, Bounds {
    texture?: Texture
    Texture: TextureConstructor
    color?: Color
    states?: number
    variants?: number
    tiles?: Coordinates
  }
  interface ColorSkinConstructorParam {
    borders?: Coordinates
    fill?: Color | Color[]
    stroke?: Color | Color[]
  }
  type StyleConstructorParam = LabelStyleConstructorParam | TextStyleConstructorParam
  interface ContentConstructor {
    new (name: string, dictionary: ContentConstructorParam): Content
  }
  interface TextureConstructor {
    new (dictionary?: TextureConstructorParam): Texture
    template(dictionary: TextureConstructorParam | any): TextureConstructor
  }
  interface SkinConstructor {
    new (dictionary?: SkinConstructorParam): Skin
    template(dictionary: SkinConstructorParam | any): SkinConstructor
  }
  type SkinConstructorParam = ColorSkinConstructorParam | TextureSkinConstructorParam
  interface TextStyleConstructorParam extends StyleConstructorParamBase {
    leading?: number
    right?: number
    bottom?: number
    left?: number
  }
  interface LabelStyleConstructorParam extends StyleConstructorParamBase {
    vertical?: string
  }
  interface StyleConstructorParamBase {
    color: Color | Color[]
    font: string
    horizontal?: string
    top?: number
  }
  type Color = string
}
export = piu
