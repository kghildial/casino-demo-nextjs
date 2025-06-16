import { FC as ReactFC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IDesktopMenuItem } from './Desktop.types';
import { cn } from '@/lib/utils';

const MenuItem: ReactFC<IDesktopMenuItem> = ({
  icon,
  label,
  href,
  collapsed,
  className,
  iconClassName,
  onClick = () => {},
}) => (
  <div
    className={cn('flex cursor-pointer p-5 transition-all hover:bg-accent', className)}
    onClick={() => onClick()}
  >
    <Image src={icon} width={24} height={24} alt={label} className={iconClassName} />
    {!collapsed && (
      <Link href={href} className="ml-5">
        {label}
      </Link>
    )}
  </div>
);

export default MenuItem;
