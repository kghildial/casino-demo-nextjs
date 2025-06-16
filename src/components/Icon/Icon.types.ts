import type { ImageProps } from 'next/image';

export interface IStaticIcon extends ImageProps {
  href?: string;
}

export interface IDynamicIcon extends ImageProps {
  onClick: () => void;
}
