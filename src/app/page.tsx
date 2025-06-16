'use client';

import { Button } from '@/components/ui/button';
import LayoutWrapper from '../components/LayoutWrapper';
import Carousel from '@/widgets/Carousel';

import Banner1 from '@/assets/images/banners/banner1.png';
import Banner2 from '@/assets/images/banners/banner2.png';
import Banner3 from '@/assets/images/banners/banner3.png';
import Banner4 from '@/assets/images/banners/banner4.png';
import Banner5 from '@/assets/images/banners/banner5.png';

const Home = () => {
  return (
    <LayoutWrapper className="mt-20">
      <Carousel
        slides={[Banner1, Banner2, Banner3, Banner4, Banner5]}
        options={{ align: 'start', loop: true }}
        slideSize="basis-1/2"
        autoplay
        hidePrevNext
      />
    </LayoutWrapper>
  );
};

export default Home;
