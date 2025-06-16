'use client';

import { Button } from '@/components/ui/button';
import LayoutWrapper from '../components/LayoutWrapper';

const Home = () => {
  return (
    <LayoutWrapper>
      <div className="bg-background text-foreground">Home</div>
      <Button>Click Me</Button>
    </LayoutWrapper>
  );
};

export default Home;
