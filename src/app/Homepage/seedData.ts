import type { StaticImageData } from 'next/image';

import VisaIcon from '@/assets/icons/payments/visa.svg';
import MastercardIcon from '@/assets/icons/payments/mastercard.svg';
import ApplePayIcon from '@/assets/icons/payments/apple_pay.svg';
import GooglePayIcon from '@/assets/icons/payments/g_pay.svg';
import NetellerIcon from '@/assets/icons/payments/neteller.svg';
import SkrillIcon from '@/assets/icons/payments/skrill.svg';
import Revolut from '@/assets/icons/payments/revolut.svg';

export const paymentIcons = [
  VisaIcon,
  MastercardIcon,
  ApplePayIcon,
  GooglePayIcon,
  NetellerIcon,
  SkrillIcon,
  Revolut,
] as StaticImageData[];
