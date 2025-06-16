import Image from 'next/image';

import Grid1 from '@/assets/images/hero_grid/grid1.png';
import Grid2 from '@/assets/images/hero_grid/grid2.png';
import Grid3 from '@/assets/images/hero_grid/grid3.png';
import Grid4 from '@/assets/images/hero_grid/grid4.png';
import Grid5 from '@/assets/images/hero_grid/grid5.png';
import Grid6 from '@/assets/images/hero_grid/grid6.png';

import GridMob1 from '@/assets/images/hero_grid/mobile/grid_mob1.png';
import GridMob2 from '@/assets/images/hero_grid/mobile/grid_mob2.png';
import GridMob3 from '@/assets/images/hero_grid/mobile/grid_mob3.png';
import GridMob4 from '@/assets/images/hero_grid/mobile/grid_mob4.png';

const HeroGrid = () => {
  return (
    <div className="mt-12 flex flex-col gap-[5px] md:flex-row md:gap-2.5">
      <div className="flex w-full flex-1 gap-[5px] md:w-[70%] md:gap-2.5">
        <Image priority src={Grid1} width={400} height={250} alt="Grid_1" />
        <Image priority src={Grid2} width={400} height={250} alt="Grid_2" />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="mb-2.5 flex flex-1 gap-2.5">
          <Image priority src={Grid3} width={185} height={130} alt="Grid_1" />
          <Image priority src={Grid4} width={185} height={130} alt="Grid_1" />
        </div>
        <div className="flex gap-2.5">
          <Image priority src={Grid5} width={185} height={130} alt="Grid_1" />
          <Image priority src={Grid6} width={185} height={130} alt="Grid_1" />
        </div>
      </div>

      <div className="flex gap-[5px] md:hidden">
        <Image priority src={GridMob1} width={85} height={85} alt="Grid_Mob_1" className="flex-1" />
        <Image priority src={GridMob2} width={85} height={85} alt="Grid_Mob_2" className="flex-1" />
        <Image priority src={GridMob3} width={85} height={85} alt="Grid_Mob_3" className="flex-1" />
        <Image priority src={GridMob4} width={85} height={85} alt="Grid_Mob_4" className="flex-1" />
      </div>
    </div>
  );
};

export default HeroGrid;
