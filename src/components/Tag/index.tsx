'use client';

import { type FC as ReactFC } from 'react';

import Image from 'next/image';

import { ITag } from './Tag.types';
import { cn } from '@/lib/utils';

const Tag: ReactFC<ITag> = ({ data: { id, name, icon }, onClick, className }) => {
  return (
    <div
      className={cn(
        'flex min-w-fit cursor-pointer rounded-md border border-tag-border bg-tag-background px-1 py-2.5 text-secondary-foreground hover:bg-accent hover:text-foreground md:px-2.5',
        className,
      )}
      onClick={() => onClick({ id, name, icon })}
    >
      <Image src={icon} width={24} height={24} alt={id} />
      <p>{name}</p>
    </div>
  );
};

export default Tag;
