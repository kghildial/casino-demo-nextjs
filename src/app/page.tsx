'use client';

import { Button } from '@/components/ui/button';
import LayoutWrapper from '../components/LayoutWrapper';

const Home = () => {
  return (
    <LayoutWrapper>
      <div className="bg-accent text-accent-foreground">Home</div>
      <Button variant="default">Click Me</Button>
    </LayoutWrapper>
  );
};

export default Home;
