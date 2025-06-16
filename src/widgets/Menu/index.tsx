'use client';

import { useState } from 'react';
import MenuItem from './MenuItem';
import { desktopMenuItems } from './seedData';
import { cn } from '@/lib/utils';

import MenuIcon from '@/assets/icons/menu/menu.svg';
import CloseIcon from '@/assets/icons/menu/close.svg';

const Desktop = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div
      className={cn(
        'fixed top-0 left-0 z-50 no-scrollbar hidden h-screen max-w-[80px] flex-col overflow-y-scroll bg-menu-background pt-20 transition-all md:flex',
        !collapsed ? 'max-w-[300px]' : '',
      )}
    >
      {collapsed ? (
        <MenuItem
          icon={MenuIcon}
          label=""
          href={''}
          collapsed={collapsed}
          className="bg-menu-foreground fixed top-0"
          iconClassName="mr-0"
          onClick={() => {
            setCollapsed(false);
          }}
        />
      ) : (
        <MenuItem
          icon={CloseIcon}
          label=""
          href={''}
          collapsed={collapsed}
          className="fixed top-0 bg-menu-background"
          iconClassName="mr-0"
          onClick={() => {
            setCollapsed(true);
          }}
        />
      )}
      {desktopMenuItems.map(({ icon, label, href }) => (
        <MenuItem key={label} icon={icon} label={label} href={href} collapsed={collapsed} />
      ))}
    </div>
  );
};

export default Desktop;
