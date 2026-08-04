declare module "imagesloaded" {
  interface ImagesLoadedOptions {
    background?: boolean;
  }

  interface ImagesLoadedInstance {
    destroy(): void;
  }

  function imagesLoaded(
    elem: Element | NodeList | string,
    options?: ImagesLoadedOptions,
    callback?: () => void
  ): ImagesLoadedInstance;

  export default imagesLoaded;
}
