'use client';

import { type FC as ReactFC } from 'react';
import Image from 'next/image';

import { IDynamicIcon } from './Icon.types';
import { cn } from '@/lib/utils';

const DynamicIcon: ReactFC<IDynamicIcon> = ({ src, width, height, alt, onClick, className }) => {
  return (
    <div className={cn('cursor-pointer', className)} onClick={onClick}>
      <Image src={src} width={width} height={height} alt={alt} />
    </div>
  );
};

export default DynamicIcon;
