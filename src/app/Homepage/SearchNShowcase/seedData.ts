import type { StaticImageData } from 'next/image';
import { ITagData } from '@/components/Tag/Tag.types';
import { IShowcase } from '@/widgets/Showcase/Showcase.types';

import TagIcon_1 from '@/assets/icons/tags/1.svg';
import TagIcon_2 from '@/assets/icons/tags/2.svg';
import TagIcon_3 from '@/assets/icons/tags/3.svg';
import TagIcon_4 from '@/assets/icons/tags/4.svg';
import TagIcon_5 from '@/assets/icons/tags/5.svg';
import TagIcon_6 from '@/assets/icons/tags/6.svg';
import TagIcon_7 from '@/assets/icons/tags/7.svg';
import TagIcon_8 from '@/assets/icons/tags/8.svg';

export const tagsList: ITagData[] = [
  { id: '1', name: 'All Games', icon: TagIcon_1 as StaticImageData },
  { id: '2', name: 'Slots', icon: TagIcon_2 as StaticImageData },
  { id: '3', name: 'Blackjack', icon: TagIcon_3 as StaticImageData },
  { id: '4', name: 'Roulette', icon: TagIcon_4 as StaticImageData },
  { id: '5', name: 'Live', icon: TagIcon_5 as StaticImageData },
  { id: '6', name: 'Baccarat', icon: TagIcon_6 as StaticImageData },
  { id: '7', name: 'Crash', icon: TagIcon_7 as StaticImageData },
  { id: '8', name: 'Dice', icon: TagIcon_8 as StaticImageData },
];

import Showcase1 from '@/assets/icons/showcases/showcase_1.svg';
import Showcase1_1 from '@/assets/images/showcases/1/showcase_1_1.png';
import Showcase1_2 from '@/assets/images/showcases/1/showcase_1_2.png';
import Showcase1_3 from '@/assets/images/showcases/1/showcase_1_3.png';
import Showcase1_4 from '@/assets/images/showcases/1/showcase_1_4.png';
import Showcase1_5 from '@/assets/images/showcases/1/showcase_1_5.png';
import Showcase1_6 from '@/assets/images/showcases/1/showcase_1_6.png';
import Showcase1_7 from '@/assets/images/showcases/1/showcase_1_7.png';
import Showcase1_8 from '@/assets/images/showcases/1/showcase_1_8.png';

export const featured: IShowcase = {
  title: {
    icon: Showcase1 as StaticImageData,
    label: 'Featured Games',
  },
  data: [
    Showcase1_1,
    Showcase1_2,
    Showcase1_3,
    Showcase1_4,
    Showcase1_5,
    Showcase1_6,
    Showcase1_7,
    Showcase1_8,
    Showcase1_3,
    Showcase1_4,
    Showcase1_5,
    Showcase1_6,
  ] as StaticImageData[],
};

import Showcase2 from '@/assets/icons/showcases/showcase_2.svg';
import Showcase2_1 from '@/assets/images/showcases/2/showcase_2_1.png';
import Showcase2_2 from '@/assets/images/showcases/2/showcase_2_2.png';
import Showcase2_3 from '@/assets/images/showcases/2/showcase_2_3.png';
import Showcase2_4 from '@/assets/images/showcases/2/showcase_2_4.png';
import Showcase2_5 from '@/assets/images/showcases/2/showcase_2_5.png';
import Showcase2_6 from '@/assets/images/showcases/2/showcase_2_6.png';
import Showcase2_7 from '@/assets/images/showcases/2/showcase_2_7.png';
import Showcase2_8 from '@/assets/images/showcases/2/showcase_2_8.png';

export const newReleases: IShowcase = {
  title: {
    icon: Showcase2 as StaticImageData,
    label: 'New Releases',
  },
  data: [
    Showcase2_1,
    Showcase2_2,
    Showcase2_3,
    Showcase2_4,
    Showcase2_5,
    Showcase2_6,
    Showcase2_7,
    Showcase2_8,
    Showcase2_3,
    Showcase2_4,
    Showcase2_5,
    Showcase2_6,
  ] as StaticImageData[],
};

import Showcase3 from '@/assets/icons/showcases/showcase_3.svg';
import Showcase3_1 from '@/assets/images/showcases/3/showcase_3_1.png';
import Showcase3_2 from '@/assets/images/showcases/3/showcase_3_2.png';
import Showcase3_3 from '@/assets/images/showcases/3/showcase_3_3.png';
import Showcase3_4 from '@/assets/images/showcases/3/showcase_3_4.png';
import Showcase3_5 from '@/assets/images/showcases/3/showcase_3_5.png';
import Showcase3_6 from '@/assets/images/showcases/3/showcase_3_6.png';
import Showcase3_7 from '@/assets/images/showcases/3/showcase_3_7.png';
import Showcase3_8 from '@/assets/images/showcases/3/showcase_3_8.png';

export const hotGames: IShowcase = {
  title: {
    icon: Showcase3 as StaticImageData,
    label: 'Hot Games',
  },
  data: [
    Showcase3_1,
    Showcase3_2,
    Showcase3_3,
    Showcase3_4,
    Showcase3_5,
    Showcase3_6,
    Showcase3_7,
    Showcase3_8,
    Showcase3_3,
    Showcase3_4,
    Showcase3_5,
    Showcase3_6,
  ] as StaticImageData[],
};

import Showcase4 from '@/assets/icons/showcases/showcase_4.svg';
import Showcase4_1 from '@/assets/images/showcases/4/showcase_4_1.png';
import Showcase4_2 from '@/assets/images/showcases/4/showcase_4_2.png';
import Showcase4_3 from '@/assets/images/showcases/4/showcase_4_3.png';
import Showcase4_4 from '@/assets/images/showcases/4/showcase_4_4.png';
import Showcase4_5 from '@/assets/images/showcases/4/showcase_4_5.png';
import Showcase4_6 from '@/assets/images/showcases/4/showcase_4_6.png';
import Showcase4_7 from '@/assets/images/showcases/4/showcase_4_7.png';
import Showcase4_8 from '@/assets/images/showcases/4/showcase_4_8.png';

export const bonusPlay: IShowcase = {
  title: {
    icon: Showcase4 as StaticImageData,
    label: 'Bonus Play',
  },
  data: [
    Showcase4_1,
    Showcase4_2,
    Showcase4_3,
    Showcase4_4,
    Showcase4_5,
    Showcase4_6,
    Showcase4_7,
    Showcase4_8,
    Showcase4_3,
    Showcase4_4,
    Showcase4_5,
    Showcase4_6,
  ] as StaticImageData[],
};

import Showcase5 from '@/assets/icons/showcases/showcase_5.svg';
import Showcase5_1 from '@/assets/images/showcases/5/showcase_5_1.png';
import Showcase5_2 from '@/assets/images/showcases/5/showcase_5_2.png';
import Showcase5_3 from '@/assets/images/showcases/5/showcase_5_3.png';
import Showcase5_4 from '@/assets/images/showcases/5/showcase_5_4.png';
import Showcase5_5 from '@/assets/images/showcases/5/showcase_5_5.png';
import Showcase5_6 from '@/assets/images/showcases/5/showcase_5_6.png';
import Showcase5_7 from '@/assets/images/showcases/5/showcase_5_7.png';
import Showcase5_8 from '@/assets/images/showcases/5/showcase_5_8.png';

export const liveGames: IShowcase = {
  title: {
    icon: Showcase5 as StaticImageData,
    label: 'Live Games',
  },
  data: [
    Showcase5_1,
    Showcase5_2,
    Showcase5_3,
    Showcase5_4,
    Showcase5_5,
    Showcase5_6,
    Showcase5_7,
    Showcase5_8,
    Showcase5_3,
    Showcase5_4,
    Showcase5_5,
    Showcase5_6,
  ] as StaticImageData[],
};

import Showcase6 from '@/assets/icons/showcases/showcase_6.svg';
import Showcase6_1 from '@/assets/images/showcases/6/showcase_6_1.png';
import Showcase6_2 from '@/assets/images/showcases/6/showcase_6_2.png';
import Showcase6_3 from '@/assets/images/showcases/6/showcase_6_3.png';
import Showcase6_4 from '@/assets/images/showcases/6/showcase_6_4.png';
import Showcase6_5 from '@/assets/images/showcases/6/showcase_6_5.png';
import Showcase6_6 from '@/assets/images/showcases/6/showcase_6_6.png';
import Showcase6_7 from '@/assets/images/showcases/6/showcase_6_7.png';
import Showcase6_8 from '@/assets/images/showcases/6/showcase_6_8.png';

export const providers: IShowcase = {
  title: {
    icon: Showcase6 as StaticImageData,
    label: 'Providers',
  },
  data: [
    Showcase6_1,
    Showcase6_2,
    Showcase6_3,
    Showcase6_4,
    Showcase6_5,
    Showcase6_6,
    Showcase6_7,
    Showcase6_8,
    Showcase6_3,
    Showcase6_4,
    Showcase6_5,
    Showcase6_6,
  ] as StaticImageData[],
};
