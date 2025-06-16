'use client';
import { useState } from 'react';

import Image from 'next/image';

import { Currency } from '@/components/Input';
import { Button } from '@/components/ui/button';

import USDIcon from '@/assets/icons/USD.svg';
import DepositIcon from '@/assets/icons/deposit.svg';

const Deposit = () => {
  const [amount, setAmount] = useState('');

  return (
    <form
      className="flex h-fit rounded-md border bg-input pl-2"
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        if (amount === '0' || amount === '') {
          alert('Please enter a non zero amount!');
        } else {
          alert('Deposit made!');
          setAmount('');
        }
      }}
    >
      <Image priority src={USDIcon} width={24} height={24} alt="$" />
      <Currency
        value={amount}
        setValue={setAmount}
        className="h-10 w-24 rounded-none py-3 pr-4 pl-2.5 md:w-32"
        placeholder="Amount"
        onChange={value => {
          console.log(value);
        }}
      />
      <Button className="hidden h-10 rounded-l-none rounded-r-md border-l border-l-transparent hover:border-l-border md:flex">
        DEPOSIT
      </Button>
      <Button className="h-10 rounded-l-none rounded-r-md border-l border-l-transparent px-2 hover:border-l-border md:hidden">
        <Image priority src={DepositIcon} width={24} height={24} alt="Deposit Icon" />
      </Button>
    </form>
  );
};

export default Deposit;
