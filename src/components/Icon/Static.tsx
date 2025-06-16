import Link from 'next/link';
import Image from 'next/image';

import type { FC as ReactFC } from 'react';

import { IStaticIcon } from './Icon.types';

const StaticIcon: ReactFC<IStaticIcon> = ({ src, href = '#', className, width, height, alt }) => {
  return (
    <Link href={href} className={className}>
      <Image src={src} width={width} height={height} alt={alt} />
    </Link>
  );
};

export default StaticIcon;
