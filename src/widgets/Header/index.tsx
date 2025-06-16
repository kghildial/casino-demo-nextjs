import NxtImg from 'next/image';

import Icons from './Icons';
import Deposit from './Deposit';
import LayoutWrapper from '@/components/LayoutWrapper';

import MainLogo from '@/assets/icons/main_logo.svg';

const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-screen bg-secondary text-foreground">
      <LayoutWrapper className="flex w-[95vw] justify-between py-2.5 md:w-full">
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
