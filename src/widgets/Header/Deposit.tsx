'use client';

import NxtImg from 'next/image';

import { Currency } from '@/components/Input';
import { Button } from '@/components/ui/button';

import DollorIcon from '@/assets/icons/$.svg';

const Deposit = () => {
  return (
    <form
      className="flex h-fit rounded-md border bg-input pl-2"
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Form submitted!');
      }}
    >
      <NxtImg src={DollorIcon} width={24} height={24} alt="$" />
      <Currency
        className="w-32 rounded-none py-3 pr-4 pl-2.5"
        placeholder="Enter amount"
        onChange={value => {
          console.log(value);
        }}
      />
      <Button className="rounded-l-none rounded-r-md border-l border-l-transparent hover:border-l-border">
        DEPOSIT
      </Button>
    </form>
  );
};

export default Deposit;
