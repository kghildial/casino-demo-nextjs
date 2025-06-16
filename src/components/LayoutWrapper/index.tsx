import React, { type FC as ReactFC } from 'react';
import { ILayoutWrapper } from './LayoutWrapper.types';
import { cn } from '@/lib/utils';

const LayoutWrapper: ReactFC<ILayoutWrapper> = ({ children, className }) => (
  <div className="flex justify-center">
    <div className={cn('w-[95vw] max-w-[1200px]', className)}>{children}</div>
  </div>
);

export default LayoutWrapper;
