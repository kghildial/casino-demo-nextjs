import { StaticImageData } from 'next/image';

export interface IMenuItem {
  icon: StaticImageData;
  label: string;
  href: string;
}

export interface IDesktopMenuItem extends IMenuItem {
  collapsed: boolean;
  className?: string;
  iconClassName?: string;
  onClick?: () => void;
}
