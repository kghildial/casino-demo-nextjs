'use client';

import { type FC as ReactFC } from 'react';

import { cn } from '@/lib/utils';
import { useCarouselNav, usePrevNextButtons } from '@/hooks/carousel';
import { Button } from '@/components/ui/button';
import { ICarouselNav } from './Carousel.types';

const CarouselNav: ReactFC<ICarouselNav> = ({
  hideDots = false,
  hidePrevNext = false,
  emblaApi,
  configureAutoplay,
}) => {
  const { activeIndex, scrollSnaps, onNavItemClick } = useCarouselNav(emblaApi, configureAutoplay);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi, configureAutoplay);

  return (
    <div
      className={cn(
        'mt-2.5 flex w-full items-center justify-between',
        hidePrevNext ? 'justify-center' : '',
        hideDots ? 'justify-end' : '',
      )}
    >
      {/* Dots */}
      {!hideDots && (
        <ul className="flex gap-2.5">
          {scrollSnaps.map((_: number, index: number) => (
            <li
              key={index}
              className={cn(
                'h-2 w-6 cursor-pointer rounded-md border border-accent',
                index === activeIndex ? 'bg-accent' : 'bg-background',
              )}
              onClick={() => onNavItemClick(index)}
            />
          ))}
        </ul>
      )}

      {/* Prev, Next */}
      {!hidePrevNext && (
        <div className="flex gap-2.5">
          <Button disabled={prevBtnDisabled} onClick={() => onPrevButtonClick()}>
            Prev
          </Button>
          <Button disabled={nextBtnDisabled} onClick={() => onNextButtonClick()}>
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default CarouselNav;
