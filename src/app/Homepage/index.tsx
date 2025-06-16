import LayoutWrapper from '@/components/LayoutWrapper';
import Carousel from '@/widgets/Carousel';

import Banner1 from '@/assets/images/banners/banner1.png';
import Banner2 from '@/assets/images/banners/banner2.png';
import Banner3 from '@/assets/images/banners/banner3.png';
import Banner4 from '@/assets/images/banners/banner4.png';
import Banner5 from '@/assets/images/banners/banner5.png';

import HeroGrid from './HeroGrid';

const Homepage = () => {
  return (
    <LayoutWrapper className="mt-20">
      {/* Hero Banner */}
      <Carousel
        slides={[Banner1, Banner2, Banner3, Banner4, Banner5]}
        options={{ align: 'start', loop: true }}
        slideSize="md:basis-1/2 basis-full"
        slideSpacing="pl-2.5"
        slideMarginAdjust="-ml-2.5"
        autoplay
        hidePrevNext
      />

      <HeroGrid />
    </LayoutWrapper>
  );
};

export default Homepage;
