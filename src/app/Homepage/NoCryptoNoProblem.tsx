import Image from 'next/image';

import { paymentIcons } from './seedData';
import { Button } from '@/components/ui/button';

const NoCryptoNoProblem = () => {
  return (
    <div className="mt-5 mb-5 flex flex-col items-center rounded-sm bg-primary px-4 py-8 text-center md:flex-row md:px-6 md:text-start">
      <h2 className="text-xl font-bold">
        You don&nbsp;t have Crypto? <br /> No problem.
      </h2>
      <div className="mt-2.5 mb-4 flex flex-wrap justify-center gap-0 md:mx-10 md:mt-0 md:mb-0 md:flex-nowrap md:gap-4">
        {paymentIcons.map((icon, index) => (
          <Image
            key={`payment_mode_${index + 1}`}
            src={icon}
            width={80}
            height={55}
            alt={`payment_mode_${index + 1}`}
          />
        ))}
      </div>
      <Button className="font-poppins h-12 px-12 py-4 text-sm font-semibold">BUY NOW</Button>
    </div>
  );
};

export default NoCryptoNoProblem;
