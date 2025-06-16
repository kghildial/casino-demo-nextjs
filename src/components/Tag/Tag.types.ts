import type { HTMLAttributes } from 'react';
import type { StaticImageData } from 'next/image';

export interface ITagData {
  id: string;
  name: string;
  icon: StaticImageData;
}

export interface ITag extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  data: ITagData;
  onClick: (data: ITagData) => void;
}
