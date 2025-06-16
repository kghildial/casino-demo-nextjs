'use client';

import { type FC as ReactFC } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

import { useCarouselNav, usePrevNextButtons } from '@/hooks/carousel';

import { ICarouselNav } from './Carousel.types';

import ChevronRight from '@/assets/icons/chevron_right.svg';
import Image from 'next/image';

const CarouselNav: ReactFC<ICarouselNav> = ({
  hideDots = false,
  hidePrevNext = false,
  dotsClassname,
  prevNextClassname,
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
        <ul className={cn('flex gap-2.5', dotsClassname)}>
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
        <div className={cn('flex gap-2.5', prevNextClassname)}>
          <Button
            disabled={prevBtnDisabled}
            className="border-2 border-border bg-primary px-1.5"
            onClick={() => onPrevButtonClick()}
          >
            <Image src={ChevronRight} width={18} height={18} alt="Prev" className="rotate-180" />
          </Button>
          <Button
            disabled={nextBtnDisabled}
            className="border-2 border-border bg-primary px-1.5"
            onClick={() => onNextButtonClick()}
          >
            <Image src={ChevronRight} width={18} height={18} alt="Next" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default CarouselNav;
