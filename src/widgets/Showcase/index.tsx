import Image from 'next/image';
import { type FC as ReactFC } from 'react';

import Carousel from '@/widgets/Carousel';

import { IShowcase } from './Showcase.types';

const Showcase: ReactFC<IShowcase> = ({ title: { icon, label }, data }) => {
  return (
    <div className="mt-5 flex flex-col">
      <div className="mb-3 flex">
        <Image src={icon} width={24} height={24} alt={label} />
        <h2 className="ml-2.5">{label}</h2>
      </div>
      <Carousel
        prevNextClassname="absolute -top-11"
        slides={data}
        options={{ align: 'start', loop: true }}
        slideSize="md:basis-1/8 basis-1/3"
        slideSpacing="pl-2.5"
        slideMarginAdjust="-ml-2.5"
        hideDots
      />
    </div>
  );
};

export default Showcase;
