'use client';
import { DynamicIcon } from '@/components/Icon/';

import BellIcon from '@/assets/icons/Bell.svg';
import ProfileIcon from '@/assets/icons/Profile.svg';

const Icons = () => {
  return (
    <div className="flex gap-x-[5px]">
      {[
        { name: 'BellIcon', src: BellIcon },
        { name: 'ProfileIcon', src: ProfileIcon },
      ].map(({ name, src }) => (
        <DynamicIcon
          key={name}
          src={src}
          width={40}
          height={40}
          alt={name}
          onClick={() => {
            alert(`${name} clicked!`);
          }}
        />
      ))}
    </div>
  );
};

export default Icons;
