import { IFooterLinksSet } from './Footer.types';

export const footerLinks: IFooterLinksSet[] = [
  {
    title: 'Games',
    links: [
      {
        label: 'Slots',
        href: '#',
      },
      {
        label: 'Live Dealers',
        href: '#',
      },
      {
        label: 'Table Games',
        href: '#',
      },
      {
        label: 'Video Poker',
        href: '#',
      },
      {
        label: 'Crash',
        href: '#',
      },
    ],
  },
  {
    title: 'Promotions',
    links: [
      {
        label: 'Welcome Bonus',
        href: '#',
      },
      {
        label: 'Cash Back Deals',
        href: '#',
      },
      {
        label: 'Weekly Cashback',
        href: '#',
      },
      {
        label: 'Tournaments',
        href: '#',
      },
      {
        label: 'VIP Club',
        href: '#',
      },
    ],
  },
  {
    title: 'Banking',
    links: [
      {
        label: 'Deposit Options',
        href: '#',
      },
      {
        label: 'Withdraw Options',
        href: '#',
      },
      {
        label: 'Refund Policy',
        href: '#',
      },
      {
        label: 'Payment Security',
        href: '#',
      },
      {
        label: 'AML Policy',
        href: '#',
      },
    ],
  },
  {
    title: 'Casino',
    links: [
      {
        label: 'Terms & Conditions',
        href: '#',
      },
      {
        label: 'Privacy Policy',
        href: '#',
      },
      {
        label: 'Bonus Terms',
        href: '#',
      },
      {
        label: 'Affiliate Program',
        href: '#',
      },
      {
        label: 'About *******',
        href: '#',
      },
    ],
  },
  {
    title: 'Customer Care',
    links: [
      {
        label: 'Live Chat',
        href: '#',
      },
      {
        label: 'Phone Support',
        href: '#',
      },
      {
        label: 'Email Support',
        href: '#',
      },
      {
        label: 'Help Desk',
        href: '#',
      },
      {
        label: 'Responsible Gaming',
        href: '#',
      },
    ],
  },
];

import BTCIcon from '@/assets/icons/footer/btc.svg';
import ETCIcon from '@/assets/icons/footer/eth.svg';
import TetherIcon from '@/assets/icons/footer/tether.svg';
import BTCCashIcon from '@/assets/icons/footer/btc_cash.svg';
import LitecoinIcon from '@/assets/icons/footer/litecoin.svg';
import USDCIcon from '@/assets/icons/footer/usdc.svg';
import DogeIcon from '@/assets/icons/footer/doge.svg';
import RippleIcon from '@/assets/icons/footer/ripple.svg';
import VisaIcon from '@/assets/icons/footer/visa.svg';
import MCIcon from '@/assets/icons/footer/mastercard.svg';
import AmexIcon from '@/assets/icons/footer/amex.svg';
import DinersClubIcon from '@/assets/icons/footer/diners_club.svg';
import DiscoverICon from '@/assets/icons/footer/discover.svg';
import { StaticImageData } from 'next/image';

export const footerPayIcons: StaticImageData[] = [
  BTCIcon,
  ETCIcon,
  TetherIcon,
  BTCCashIcon,
  LitecoinIcon,
  USDCIcon,
  DogeIcon,
  RippleIcon,
  VisaIcon,
  MCIcon,
  AmexIcon,
  DinersClubIcon,
  DiscoverICon,
];

import AnjLogo from '@/assets/icons/footer/complaince/anj_logo.svg';
import GameCareLogo from '@/assets/icons/footer/complaince/game_care_logo.svg';
import GALogo from '@/assets/icons/footer/complaince/g_a_logo.svg';
import Logo18 from '@/assets/icons/footer/complaince/18_logo.svg';

export const footerComplianceLogos: StaticImageData[] = [AnjLogo, GameCareLogo, GALogo, Logo18];
