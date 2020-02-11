declare namespace piu {
  /**
   * The behavior object contains functions corresponding to events triggered by a content object. A content object checks whether its behavior owns or inherits a function property with the name of the event, and if so calls that function, passing itself as the first parameter.
   */
  export class Behavior {}
  /**
   * Objects for graphical parts of their user interface, such as buttons, icons, sliders, switches, and tabs.
   */
  export class Content {
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
  export class Style {
    /**
     * @param dictionary An object with properties to initialize the result. Only parameters specified in the Dictionary section below will have an effect; other parameters will be ignored.
     */
    public constructor(dictionary: StyleConstructorParam)
    public measure(string: string): Size
  }
  export class Texture {
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
  export class Skin {
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
  export class Transition {
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
  export class Container extends Content {
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
  /**
   * The label object is a content object that renders a string on a single line with a single style. The string is truncated if it does not fit the bounds of the label object.
   */
  export class Label extends Content {
    public constructor(behaviorData: any, dictionary: LabelConstructorParam)
    /**
     * This label's string
     */
    public string: string
    public static template(anonymous: (param: any) => LabelConstructorParam): LabelConstructor
  }
  /**
   * The port object is a content object that delegates drawing to a script in its behavior that draws using simple Piu graphics commands.
   * The port object has a clip rectangle (initially the bounds of the port object) that affects all drawing.
   */
  export class Port extends Content {
    /**
     * Draws this port's skin in the position specified
     * @param x The local position and size of the area in which to draw, in pixels
     * @param y The local position and size of the area in which to draw, in pixels
     * @param width The local position and size of the area in which to draw, in pixels
     * @param height The local position and size of the area in which to draw, in pixels
     */
    public drawContent(x: number, y: number, width: number, height: number): void
    /**
     * Draws the string the way a label instance would, with the style of this port
     * @param string The string to draw
     * @param x The local position and size of the area in which to draw, in pixels
     * @param y The local position and size of the area in which to draw, in pixels
     * @param width The local position and size of the area in which to draw, in pixels
     * @param height The local position and size of the area in which to draw, in pixels
     */
    public drawLabel(string: string, x: number, y: number, width: number, height: number): void
    /**
     * Draws the skin the way a content instance would, with the state, variant, and position specified.
     * @param skin The skin to draw
     * @param x The local position and size of the area in which to draw, in pixels
     * @param y The local position and size of the area in which to draw, in pixels
     * @param width The local position and size of the area in which to draw, in pixels
     * @param height The local position and size of the area in which to draw, in pixels
     * @param variant The variant of the skin to draw. If the specified skin defines variants, setting the variant changes the appearance.
     * @param state The state of the skin to draw. If the specified skin defines states, setting the state changes the appearance.
     */
    public drawSkin(
      skin: Skin,
      x: number,
      y: number,
      width: number,
      height: number,
      variant?: number,
      state?: number
    ): void
    /**
     * Draws the string the way a label instance would, with the style, color, and position specified.
     * @param string The string to draw
     * @param style The style to use to draw the string
     * @param color The color to draw the string, as a string of the form specified in the Color section of this document
     * @param x  The local position and size of the area in which to draw, in pixels
     * @param y The local position and size of the area in which to draw, in pixels
     * @param width The local position and size of the area in which to draw, in pixels
     * @param height The local position and size of the area in which to draw, in pixels
     */
    public drawString(
      string: string,
      style: Style,
      color: Color,
      x: number,
      y: number,
      width: number,
      height: number
    ): void
    /**
     * Draws a string with the style, position, and state specified.
     * @param string The string to draw
     * @param style The style to use to draw the string
     * @param x The local position and size of the area in which to draw, in pixels
     * @param y The local position and size of the area in which to draw, in pixels
     * @param width The local position and size of the area in which to draw, in pixels
     * @param height The local position and size of the area in which to draw, in pixels
     * @param ellipsis If true, the string is truncated to fit the specified bounds. If false, the entire string is drawn, even if it extends beyond the specified bounds.
     * @param state The state of the style to draw. If the specified style has multiple fill colors, setting the state selects which color to use.
     */
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
    /**
     * Draws the image referenced by the texture.
     * @param texture The texture to draw
     * @param color If the texture has only an alpha bitmap, the value of the color property will be used to colorize the bitmap. Must be a string of the form specified in the Color section of this document.
     * @param x The local position and size of the area in which to draw, in pixels
     * @param y The local position and size of the area in which to draw, in pixels
     * @param sx The source area--the position and size of the area to copy pixels from, in pixels. The default is the entire image.
     * @param sy The source area--the position and size of the area to copy pixels from, in pixels. The default is the entire image.
     * @param sw The source area--the position and size of the area to copy pixels from, in pixels. The default is the entire image.
     * @param sh The source area--the position and size of the area to copy pixels from, in pixels. The default is the entire image.
     */
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
    /**
     * Fills the area with the color specified.
     * @param color The color to draw the image in, as a string of the form specified in the Color section of this document
     * @param x The local position and size of the area to fill, in pixels
     * @param y The local position and size of the area to fill, in pixels
     * @param width The local position and size of the area to fill, in pixels
     * @param height The local position and size of the area to fill, in pixels
     */
    public fillColor(color: Color, x: number, y: number, width: number, height: number): void
    /**
     * Fills the area with the image. The source area of the image is repeated to cover the destination area.
     * @param texture The filling image
     * @param color The color to draw the image in, as a string of the form specified in the Color section of this document
     * @param x The destination area--the local position and size of the area to copy pixels to, in pixels
     * @param y The destination area--the local position and size of the area to copy pixels to, in pixels
     * @param width The destination area--the local position and size of the area to copy pixels to, in pixels
     * @param height The destination area--the local position and size of the area to copy pixels to, in pixels
     * @param sx The source area--the position and size of the area to copy pixels from, in pixels. The default is the entire image.
     * @param sy The source area--the position and size of the area to copy pixels from, in pixels. The default is the entire image.
     * @param sw The source area--the position and size of the area to copy pixels from, in pixels. The default is the entire image.
     * @param sh The source area--the position and size of the area to copy pixels from, in pixels. The default is the entire image.
     */
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
    /**
     * Invalidates the specified area of this port (or the entire port if no area is specified), which triggers the onDraw event.
     * @param x The local position and size of the area to invalidate, in pixels
     * @param y The local position and size of the area to invalidate, in pixels
     * @param width The local position and size of the area to invalidate, in pixels
     * @param height The local position and size of the area to invalidate, in pixels
     */
    public invalidate(x?: number, y?: number, width?: number, height?: number): void
    /**
     * Measures the string the way a label instance would, with the style specified
     * @param string The string to measure
     * @param style The style to use when measuring the string
     */
    public measureString(string: string, style: Style): Size
    /**
     * Restores the current clip rectangle from this port's clip rectangles stack
     */
    public popClip(): void
    /**
     * Saves the specified clip rectangle to this port's clip rectangles stack
     * @param x The local position and size of the clip rectangle
     * @param y The local position and size of the clip rectangle
     * @param width The local position and size of the clip rectangle
     * @param height The local position and size of the clip rectangle
     */
    public pushClip(x?: number, y?: number, width?: number, height?: number): void
    /**
     * The port object that triggered the event
     * @param port The port object that triggered the event
     * @param x 	The local position and size of the area to draw, in pixels
     * @param y 	The local position and size of the area to draw, in pixels
     * @param width 	The local position and size of the area to draw, in pixels
     * @param height 	The local position and size of the area to draw, in pixels
     */
    public onDraw(port: Port, x: number, y: number, width: number, height: number): void
  }
  /**
   * The text object is a content object that renders a string on multiple lines with multiple styles. There are two ways to modify the string of a text object. An application typically uses only one of these approaches for a specific text object.
   *   1. Set the string property. This replaces the full string.
   *   2. Build the string with blocks and spans, between calls to the begin and end functions. This appends characters to the string. This method provides the most control, since each span can have a different style.
   */
  export class Text extends Content {
    public constructor(begaviorData: any, dictionary: TextConstructorParam)
    public blocks: {
      /**
       * When this text is active and the block is touched, the block calls the corresponding function properties of its behavior.
       */
      behavior: object | null
      /**
       * A style instance or null (the default).
       */
      style: Style | null
      /**
       * A string or an array of spans.
       */
      spans: string | string[]
    }[]
    /**
     * This text's string. Setting this string creates one block containing one span that uses this text's style.
     */
    public string: string
    /**
     * Starts the process of defining the string and styles of this text using blocks and spans. The string is reset to empty. The begin function must be called before beginBlock or beginSpan. After defining the string and styles, call end.
     */
    public begin(): void
    /**
     * Creates and opens a new block. The begin function must have been already called without a corresponding end. There cannot be another block already open.
     * @param style The style of the block
     * @param behavior The behavior of the block
     */
    public beginBlock(style?: Style, behavior?: object): void
    /**
     * Creates and opens a new span. There must be an open block. There cannot be another open span.
     * @param style The style of the span
     * @param behavior The behavior of the span
     */
    public beginSpan(style: Style, behavior?: object): void
    /**
     * Concatenates the specified string to this text. There must be an open span.
     * @param string The string to concatenate
     */
    public concat(string: string): void
    /**
     * Completes the process of building this text's string and styles using blocks and spans; must be called after begin and before this text can be measured, fit, or rendered
     */
    public end(): void
    /**
     * Closes the open block
     */
    public endBlock(): void
    /**
     * Closes the open span
     */
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
  /**
   * All Piu applications must have an application object at the root of their containment hierarchy. All other content objects must be added to the application to appear on screen.
   * There is no default object, so you have to create one yourself and export it in the main module.
   * Alternatively, you can export a function that returns an application object.
   * @example
   * export default new Application();
   *
   * @example
   * export default function() {
   *   return new Application();
   * }
   */
  export class Application extends Container {
    public constructor(behaviorData: any, dictionary: ApplicationConstructorParam)
    /**
     * The size of the display list buffer in bytes for targets using the Poco rendering engine
     */
    public displayListLength: number
    /**
     * The size of the command list buffer in bytes used for holding Piu drawing operations
     */
    public commandListLength: number
    /**
     * The number of touch events that can trigger at the same time
     */
    public touchCount: number
  }
  interface ApplicationConstructorParam extends ContainerConstructorParam {
    /**
     * The size of the display list buffer in bytes for targets using the Poco rendering engine
     */
    displayListLength?: number
    /**
     * The size of the command list buffer in bytes used for holding Piu drawing operations
     */
    commandListLength?: number
    /**
     * The number of touch events that can trigger at the same time
     */
    touchCount?: number
  }
  /**
   * The column object is a container object that arranges its contents vertically.
   */
  export class Column extends Container {}
  /**
   * The layout object is a container object that delegates positioning and sizing of its contents to a script in its behavior.
   * When its width is measured, the layout object triggers the onMeasureHorizontally event, and the behavior can modify the measured width of the layout object or the coordinates of its contents.
   * When its height is measured, the layout object triggers the onMeasureVertically event, and the behavior can modify the measured height of the layout object or the coordinates of its contents.
   */
  export class Layout extends Container {
    /**
     * This event is triggered when the fitted width of the layout object is calculated. Once this is triggered, the behavior can modify the coordinates of its contents. Returns the fitted width of the layout object, in pixels.
     * @param layout The layout object that triggered the event
     * @param width The fitted width of the layout object, in pixels
     */
    public onFitHorizontally(layout: Layout, width: number): void
    /**
     * This event is triggered when the fitted height of the layout object is calculated. Once this is triggered, the behavior can modify the coordinates of its contents. Returns the height of the layout object, in pixels.
     * @param layout The layout object that triggered the event
     * @param height The fitted height of the layout object, in pixels
     */
    public onFitVertically(layout: Layout, height: number): void
    /**
     * This event is triggered when the measured width of the layout object is calculated. Returns the measured width of the layout object, in pixels.
     * @param layout The layout object that triggered the event
     * @param width The fitted width of the layout object, in pixels
     */
    public onMeasureHorizontally(layout: Layout, width: number): void
    /**
     * This event is triggered when the measured height of the layout object is calculated. Returns the measured height of the layout object, in pixels.
     * @param layout The layout object that triggered the event
     * @param height The fitted height of the layout object, in pixels
     */
    public onMeasureVertically(layout: Layout, height: number): void
  }
  /**
   * The image object is a content object that displays images.
   * Image assets may be a GIF, JPEG, or PNG file, or a folder of JPEG and PNG files. The images example provides an example for every supported type.
   * Assets must be defined in the resources of your manifest. The quality of JPEG and PNG files can be set to a value between 1 and 100; higher numbers correspond to higher quality.
   * ```json
"resources":{
	"*-image(100)": [
		"$(MODDABLE)/examples/assets/images/screen1",
	],
	"*-image(40)": [
		"$(MODDABLE)/examples/assets/images/screen2",
	]
},
```
   * Images in a folder are used as frames of a single animated image. The frame rate is determined by the name of the folder. For example, the fish.15fps folder from the example images folder tells the application to run at 15 frames per second. In the manifest, the .15fps is dropped from the path.
   * ```json
"resources":{
	"*-image": [
		"$(MODDABLE)/examples/assets/images/fish",
	],
}
```
   * The frame rate of a GIF is set in the file itself and cannot be changed by the application.
   * All supported image types are compressed into a single resource with a .cs extension. These are the files that should be referenced in the application's script code. For example, to create image objects using the assets mentioned above, the application would use the paths "screen1.cs", "screen2.cs", and "street.cs".
   */
  export class Image extends Content {
    public constructor(behaviorData: any, dictionary: ImageConstructorParam)
    /**
     * The total number of frames in this image
     */
    public readonly frameCount: never
    /**
     * The index of the current frame
     */
    public frameIndex: number
  }
  /**
   * The die object is a layout object that allows you to “die cut” its contents with a region, minimizing the areas to invalidate and to update. These are useful for building animations and transitions on constrained devices that cannot update every screen pixel at every frame.
   * The die object maintains two regions:
   *   - the work region that the available operations build,
   *   - the clip region that clips the contents of the die object
   * Both regions are initially empty.
   */
  export class Die extends Layout {
    public constructor(behaviorData: any, dictionary: ContentConstructorParam)
    public set(x: number, y: number, width: number, height: number): Die
    public sub(x: number, y: number, width: number, height: number): Die
    /**
     * Intersects the rectangle with the work region and returns this.
     * @param x A local rectangle, in pixels
     * @param y A local rectangle, in pixels
     * @param width A local rectangle, in pixels
     * @param height A local rectangle, in pixels
     */
    public and(x: number, y: number, width: number, height: number): Die
    /**
     * Inclusively unions the rectangle with the work region and returns this.
     * @param x A local rectangle, in pixels
     * @param y A local rectangle, in pixels
     * @param width A local rectangle, in pixels
     * @param height A local rectangle, in pixels
     */
    public or(x: number, y: number, width: number, height: number): Die
    /**
     * Exclusively unions the work region with the rectangle and returns this.
     * @param x A local rectangle, in pixels
     * @param y A local rectangle, in pixels
     * @param width A local rectangle, in pixels
     * @param height A local rectangle, in pixels
     */
    public xor(x: number, y: number, width: number, height: number): Die
    /**
     * Sets the work region to the bounds of this die object and returns this.
     */
    public fill(): Die
    /**
     * Empties the work region and returns this.
     */
    public empty(): Die
    /**
     * Copies the work region into the current region, and invalidates only the difference between the work and the clip regions.
     */
    public cut(): void
    /**
     * Binds the die object to the containment hierarchy by replacing the specified content object in the content's container with this die object and adding the content object to this die object.
     * @param content The content object to attach
     */
    public attach(content: Content): void
    /**
     * Unbind this die object from the content hierarchy by removing the first content object from this die object and replacing this die object in its container with the removed content object.
     */
    public detach(): void
  }
  /**
   * The row object is a container object that arranges its contents horizontally.
   */
  export class Row extends Container {}
  /**
   * The scroller object is a container object that scrolls its first content object horizontally and vertically.
   */
  export class Scroller extends Container {
    public constructor(behaviorData: any, dictionary: ScrollerConstructorParam)
    /**
     * The constrained scroll offsets of this scroller, as an object with x and y number properties. The scroll offsets when this scroller is tracking may be different from the constrained scroll offsets.
     */
    public readonly constraint: Position
    /**
     * If true, this content will restart its clock when its time equals its duration
     */
    public loop: boolean
    /**
     * The scroll offsets of this scroller, as an object with x and y number properties, specified in pixels
     */
    public scroll: Position
    /**
     * If true, this scroller is tracking. When tracking, the scroller does not constrain its scroll offsets.
     */
    public tracking: boolean
    /**
     * Scrolls this scroller to reveal the specified area
     * @param bounds The local position and size of the area to reveal, as an object with x, y, width, and height properties, specified in pixels
     */
    public reveal(bounds: Bounds): void
    /**
     * Adds the deltas to the scroll offsets of this scroller
     * @param dx The deltas by which to scroll this scroller, in pixels
     * @param dy The deltas by which to scroll this scroller, in pixels
     */
    public scrollBy(dx: number, dy: number): void
    /**
     * Changes the scroll offsets of this scroller
     * @param x The offsets to which to scroll this scroller, in pixels
     * @param y The offsets to which to scroll this scroller, in pixels
     */
    public scrollTo(x: number, y: number): void
    /**
     * This event is triggered when the specified scroller object scrolls.
     * When triggered by a scroller, this event is also triggered by all the contents of the scroller. This makes it easier to implement scrollbars, for example.
     * @param scroller The scroller object that triggered the event
     */
    public onScrolled(scroller: Scroller): void
  }
  /**
   * The timeline object provides a mechanism for sequencing and running a collection of tweens. This is useful for managing transitions between Piu screens and other animations.
   * Tweens work by taking in a target object and an object that specifies a list of properties and values. When the tween is set to a specific fraction, the appropriate properties of the target object are updated with values between their initial value and the destination value. The specifics of how this works are determined by the type of tween ("on", "from", or "to", as described below) and the easing function used for the tween.
   * The application manages all of the tweens in a timeline at once by seeking to a particular point in the timeline. This is usually driven by the onTimeChanged function of a content object.
   * The Piu Timeline implementation is based on the TimelineLite class developed by GreenSock.
   * Note that the Timeline class must be imported into your application to be used:
   */
  export class Timeline {
    public constructor()
    /**
     * How long this timeline will take to complete once started, in ms.
     */
    public duration: number
    /**
     * The fraction of this timeline that has completed, as a decimal between 0 and 1. Setting the fraction is equivalent to calling `seekTo(fraction * duration)`.
     */
    public fraction: number
    /**
     * The amount of time the timeline has completed, in ms. This should not be modified directly — use seekTo(time) instead.
     */
    public time: number
    /**
     * Adds a "from tween" to the timeline. A "from tween" eases the properties of the target object from the values specified in the toProperties object to the original values of the target object over duration ms.
     * Returns this timeline, useful for chaining together multiple to, from, and on calls.
     * @param target The object that will have its properties tweened by the timeline.
     * @param fromProperties The keys of this object are the properties of the target object that will be tweened by the timeline. Their values are the starting values the properties of the target object will have at the begining of the tween.
     * @param duration The duration of the tween in ms.
     * @param easing An easing function to use for the tween. If null is provided, the tween will use a linear easing function.
     * @param delay The number of ms after the previous tween in the timeline completes that this one should begin. If this number is negative, the tween will begin before the prior tween completes. If no duration is provided, the tween will begin immediately upon completion of the prior tween.
     */
    public from(target: object, fromProperties: object, duration: number, easing?: string, delay?: number): Timeline
    /**
     * Adds an "on tween" to the timeline. An "on tween" eases the values of the target object through a sequence of steps as specified by arrays in the onProperties object over duration ms.
     * Returns this timeline, useful for chaining together multiple to, from, and on calls.
     * @param target The object that will have its properties tweened by the timeline.
     * @param onProperties The keys of this object are the properties of the target object that will be tweened by the timeline. Their values are arrays of values that the tween will ease between over the duration of the timeline.
     * @param duration The duration of the tween in ms.
     * @param easing An easing function to use for the tween. If null is provided, the tween will use a linear easing function.
     * @param delay The number of ms after the previous tween in the timeline completes that this one should begin. If this number is negative, the tween will begin before the prior tween completes. If no duration is provided, the tween will begin immediately upon completion of the prior tween.
     * @example ```
let sampleContainer = new Container(null, {
	top: 0, bottom: 0, left: 0, right: 0, skin: new Skin({ fill: "white" }),
	contents: [
		Content(null, { top: 0, height: 50, left: 0, width: 50, skin: new Skin({ fill: ["blue", "red"] }) })
	],
	Behavior: class extends Behavior {
		onDisplaying(container) {
			this.startAnimation(container);
		}
		startAnimation(container) {
			let timeline = this.timeline = new Timeline();
			let l=0, r=150, b=150, t=0;
			timeline.on(container.first, { x: [l, r, r, l, l], y: [t, t, b, b, t], state: [0, 1] }, 1000, Math.quadEaseInOut, 500);
			container.duration = timeline.duration;
			timeline.seekTo(0);
			container.time = 0;
			container.start();
		}
		onTimeChanged(container) {
			let time = container.time;
			if (this.reverse) time = container.duration - time;
			this.timeline.seekTo(time);
		}
		onFinished(container) {
			this.reverse = !this.reverse;
			this.startAnimation(container);
		}
	}
});
application.add(sampleContainer);
```
     */
    public on(target: object, onProperties: object, duration: number, easing?: number, delay?: number): Timeline
    /**
     * Causes this timeline to jump its tweens to the specified time. This sets the properties of the tweens' target objects.
     * @param time The position in the Timeline to seek to.
     * @example ```
let sampleStyle = new Style({ font: "600 28px Open Sans", color: ["blue", "white"] });
let sampleColumn = new Column(null, {
	top: 0, bottom: 0, left: 0, right: 0, 
	skin: new Skin({ fill: "white" }), style: sampleStyle,
	contents: [
		Label(null, { top: 90, height: 28, left: 80, string: "Hello", state: 0 }),
		Label(null, { top: 2, height: 28, left: 80, string: "Moddable", state: 0 }),
	],
	Behavior: class extends Behavior {
		onDisplaying(column) {
			let timeline = this.timeline = new Timeline();
			timeline.to(column.first, { x: -column.first.width, state: 1 }, 1000, Math.quadEaseOut, 1000)
				.to(column.last, { x: application.width, state: 1 }, 800, Math.quadEaseOut, -800);
			column.duration = timeline.duration;
			timeline.seekTo(0);
			column.time = 0;
			column.start();
		}
		onTimeChanged(column) {
			this.timeline.seekTo(column.time);
		}
	}
});
application.add(sampleColumn);
```
     */
    public seekTo(time: number): void
    /**
     * Adds a "to tween" to the timeline. A "to tween" eases the properties of the target object from its current values to the desired values specified in the toProperties object over duration ms.
     * Returns this timeline, useful for chaining together multiple to, from, and on calls.
     * @param target The object that will have its properties tweened by the timeline.
     * @param fromProperties The keys of this object are the properties of the target object that will be tweened by the timeline. Their values are the destination values the properties of the target object will have when the tween is complete.
     * @param duration The duration of the tween in ms.
     * @param easing An easing function to use for the tween. If null is provided, the tween will use a linear easing function.
     * @param delay The number of ms after the previous tween in the timeline completes that this one should begin. If this number is negative, the tween will begin before the prior tween completes. If no duration is provided, the tween will begin immediately upon completion of the prior tween.
     */
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
    /**
     * If true, this content will restart its clock when its time equals its duration
     */
    loop?: boolean
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
