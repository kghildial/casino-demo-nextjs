import Image from 'next/image';

import HomeMobIcon from '@/assets/icons/menu/mobile/home.svg';
import SearchIcon from '@/assets/icons/menu/mobile/search.svg';
import DepositIcon from '@/assets/icons/menu/mobile/deposit.svg';
import ChatIcon from '@/assets/icons/menu/mobile/chat.svg';
import MenuIcon from '@/assets/icons/menu/mobile/menu.svg';

const MobileMenu = () => {
  return (
    <div className="fixed bottom-0 z-50 flex w-screen justify-between bg-menu-background px-10 py-2.5 md:hidden">
      <Image src={HomeMobIcon} width={30} height={38} alt="home" />
      <Image src={SearchIcon} width={37} height={38} alt="search" />
      <div className="flex h-[50px] w-[50px] items-center justify-center">
        <Image src={DepositIcon} fill alt="desposit" />
      </div>
      <Image src={ChatIcon} width={30} height={38} alt="chat" />
      <Image src={MenuIcon} width={30} height={38} alt="menu" />
    </div>
  );
};

export default MobileMenu;
