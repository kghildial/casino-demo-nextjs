'use client';

import { Button } from '@/components/ui/button';
import LayoutWrapper from '../components/LayoutWrapper';
import Carousel from '@/widgets/Carousel';

const Home = () => {
  return (
    <LayoutWrapper className="mt-20">
      <div className="bg-background text-foreground">Home</div>
      <Button>Click Me</Button>
      <Carousel
        slides={[
          { a: 1 },
          { b: 2 },
          { a: 1 },
          { b: 2 },
          { a: 1 },
          { b: 2 },
          { a: 1 },
          { b: 2 },
          { a: 1 },
          { b: 2 },
          { a: 1 },
          { b: 2 },
        ]}
        options={{ align: 'start', loop: true }}
        autoplay
        hidePrevNext
      />
    </LayoutWrapper>
  );
};

export default Home;
