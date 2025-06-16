'use client';

import { type FC as ReactFC, memo } from 'react';

import { Input } from '@/components/ui/input';
import { ICurrencyInput } from './Input.types';
import { cn } from '@/lib/utils';

const CurrencyInput: ReactFC<ICurrencyInput> = ({
  onChange,
  placeholder,
  className,
  value,
  setValue,
}) => {
  return (
    <Input
      type="string"
      value={value}
      className={cn('text-sm font-medium', className)}
      placeholder={placeholder}
      onChange={e => {
        const amount = e.target.value.replace(/\D/g, '');
        const formattedAmount = new Intl.NumberFormat().format(Number(amount));
        setValue(formattedAmount);
        onChange(formattedAmount);
      }}
    />
  );
};

export default memo(CurrencyInput);
