import type { StaticImageData } from 'next/image';
import type { EmblaCarouselType } from 'embla-carousel';

export interface IAutoPlayOptions {
  delay?: number;
  stopOnInteraction?: boolean;
  stopOnMouseEnter?: boolean;
}

export interface ICarousel {
  slides: StaticImageData[];
  options: Record<string, unknown>;
  hideDots?: boolean;
  hidePrevNext?: boolean;
  autoplay?: IAutoPlayOptions | boolean;
  slideSize?: string;
  slideSpacing?: string;
  slideMarginAdjust?: string;
}

export type TCarouselHookCb = (emblaApi: EmblaCarouselType) => void;

export interface ICarouselNav {
  hideDots?: boolean;
  hidePrevNext?: boolean;
  emblaApi: EmblaCarouselType | undefined;
  configureAutoplay: TCarouselHookCb;
}

export type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};
