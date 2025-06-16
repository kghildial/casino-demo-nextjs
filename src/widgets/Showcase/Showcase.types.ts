import type { StaticImageData } from 'next/image';

export interface IShowcase {
  title: { icon: StaticImageData; label: string };
  data: StaticImageData[];
}
