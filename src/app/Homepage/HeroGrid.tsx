import Image from 'next/image';

import Grid1 from '@/assets/images/hero_grid/grid1.png';
import Grid2 from '@/assets/images/hero_grid/grid2.png';
import Grid3 from '@/assets/images/hero_grid/grid3.png';
import Grid4 from '@/assets/images/hero_grid/grid4.png';
import Grid5 from '@/assets/images/hero_grid/grid5.png';
import Grid6 from '@/assets/images/hero_grid/grid6.png';

const HeroGrid = () => {
  return (
    <div className="mt-12 flex gap-2.5">
      <div className="flex w-[70%] flex-1 gap-2.5">
        <Image priority src={Grid1} width={400} height={250} alt="Grid_1" />
        <Image priority src={Grid2} width={400} height={250} alt="Grid_2" />
      </div>
      <div className="flex flex-col">
        <div className="mb-2.5 flex flex-1 gap-2.5">
          <Image priority src={Grid3} width={185} height={130} alt="Grid_1" />
          <Image priority src={Grid4} width={185} height={130} alt="Grid_1" />
        </div>
        <div className="flex gap-2.5">
          <Image priority src={Grid5} width={185} height={130} alt="Grid_1" />
          <Image priority src={Grid6} width={185} height={130} alt="Grid_1" />
        </div>
      </div>
    </div>
  );
};

export default HeroGrid;
