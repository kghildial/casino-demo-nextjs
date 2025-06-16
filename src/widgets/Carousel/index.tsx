'use client';

import { useCallback, type FC as ReactFC } from 'react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType } from 'embla-carousel';

import { cn } from '@/lib/utils';
import CarouselNav from './CarouselNav';
import { ICarousel } from './Carousel.types';

const Carousel: ReactFC<ICarousel> = ({
  slides,
  options,
  hideDots = false,
  hidePrevNext = false,
  autoplay = false,
  slideSize = 'basis-full',
  slideSpacing = 'pl-2.5',
  slideMarginAdjust = '-ml-2.5',
}) => {
  const getAutoplayOptions = () => {
    const options = {
      delay: 3000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    };

    if (autoplay === true) {
      return options;
    } else if (autoplay === false) {
      return {};
    }

    if (typeof autoplay === 'object') {
      const { delay, stopOnInteraction, stopOnMouseEnter } = autoplay;
      // Override autoplay defaults if given
      if (delay) {
        options.delay = delay;
      }

      if (stopOnInteraction) {
        options.stopOnInteraction = stopOnInteraction;
      }

      if (stopOnMouseEnter) {
        options.stopOnMouseEnter = stopOnMouseEnter;
      }

      return options;
    }
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(getAutoplayOptions())]);

  // Callback to run autoplay if option is enabled
  const configureAutoplay = useCallback(
    (emblaApi: EmblaCarouselType) => {
      if (!autoplay) return;
      else if (typeof autoplay !== 'boolean') {
      }

      const autoplayApi = emblaApi?.plugins()?.autoplay;
      if (!autoplayApi) return;

      const resetOrStop =
        autoplayApi.options.stopOnInteraction === false ? autoplayApi.reset : autoplayApi.stop;

      resetOrStop();
    },
    [autoplay],
  );

  return (
    <section className="m-auto w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className={cn('flex touch-pan-y touch-pinch-zoom', slideMarginAdjust)}>
          {slides.map((src, index) => {
            return (
              <div
                key={index}
                className={cn('min-w-0 shrink-0 grow-0 transform-gpu', slideSpacing, slideSize)}
              >
                {/* <div
                  className={cn(
                    'flex items-center justify-center rounded-sm border border-red-500 text-2xl font-medium select-none',
                    slideHeight,
                  )}
                > */}
                <Image src={src} width={595} height={300} alt={`Banner_${index + 1}`} />
                {/* </div> */}
              </div>
            );
          })}
        </div>
      </div>

      <CarouselNav
        emblaApi={emblaApi}
        configureAutoplay={configureAutoplay}
        hideDots={hideDots}
        hidePrevNext={hidePrevNext}
      />
    </section>
  );
};

export default Carousel;
