import type { Dispatch, SetStateAction } from 'react';

export interface ICurrencyInput {
  className?: string;
  placeholder: string;
  onChange: (value: string) => void;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}
