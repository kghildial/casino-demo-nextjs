import NxtImg from 'next/image';

import Icons from './Icons';
import Deposit from './Deposit';
import LayoutWrapper from '@/components/LayoutWrapper';

import MainLogo from '@/assets/icons/main_logo.svg';

const Header = () => {
  return (
    <header className="bg-secondary text-foreground">
      <LayoutWrapper className="flex w-full justify-between py-2.5">
        <NxtImg src={MainLogo} width={75} height={40} alt="main_logo" />
        <div className="flex gap-1.5">
          <Deposit />
          <Icons />
        </div>
      </LayoutWrapper>
    </header>
  );
};

export default Header;
