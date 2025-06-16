import Image from 'next/image';

import MainLogo from '@/assets/icons/main_logo.svg';

import { footerComplianceLogos, footerLinks, footerPayIcons } from './seedData';
import Link from 'next/link';
import LayoutWrapper from '@/components/LayoutWrapper';

import FooterMobPromo1 from '@/assets/images/footer/footer_mob_promo1.png';
import FooterMobPromo2 from '@/assets/images/footer/footer_mob_promo2.png';

const Footer = () => {
  return (
    <div className="w-screen bg-primary">
      <LayoutWrapper>
        <div className="flex flex-col border-b-2 border-muted py-9 md:flex-row">
          <div className="mr-7 flex w-full flex-col border-b-2 border-muted pb-3.5 md:max-w-[300px] md:border-b-0 md:pb-0">
            <Image src={MainLogo} width={75} height={40} alt="main_logo" className="mb-3" />
            <p className="text-sm font-normal text-muted-foreground">
              Strike it rich at *******! Experience heart-pounding action with massive jackpots,
              fast payouts, and VIP treatment that keeps champions coming back. Join thousands of
              winners today - your fortune awaits!
            </p>
          </div>
          <div className="mt-7 flex w-full flex-wrap justify-start gap-y-5 md:mt-0 md:flex-nowrap md:justify-between md:gap-y-0">
            {footerLinks.map(({ title, links }) => (
              <div className="flex w-[33%] flex-col md:w-auto" key={title}>
                <h3 className="mb-3.5 text-base font-bold text-foreground">{title}</h3>
                {links.map(({ label, href }) => (
                  <Link
                    key={`${title}_${label}`}
                    href={href}
                    className="mb-2 text-sm font-normal text-secondary-foreground transition-all hover:text-foreground"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            ))}
            <div className="flex flex-col md:hidden">
              <Image
                src={FooterMobPromo1}
                width={130}
                height={73}
                alt="footer_mob_promo_1"
                className="mt-2.5"
              />
              <Image
                src={FooterMobPromo2}
                width={130}
                height={73}
                alt="footer_mob_promo_2"
                className="mt-4"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3.5 border-b-2 border-muted py-8 md:flex-nowrap">
          {footerPayIcons.map((icon, index) => (
            <Image
              key={`footer_icon_${index}`}
              src={icon}
              width={45}
              height={45}
              alt={`footer_icon_${index}`}
              className="w-[15%] md:w-auto"
            />
          ))}
        </div>

        <div className="flex flex-col-reverse items-center justify-center py-5 md:flex-row md:items-start md:justify-end">
          <p className="flex-1 text-center text-sm font-normal text-muted-foreground md:ml-32">
            © 2025 *******. All Rights Reserved.
          </p>
          <div className="mb-5 flex w-full justify-center gap-2.5 border-b-2 border-muted pb-5 md:mb-0 md:w-auto md:justify-start md:border-b-0 md:pb-0">
            {footerComplianceLogos.map((icon, index) => (
              <Image
                key={`footer_compliance_icon_${index}`}
                src={icon}
                width={35}
                height={35}
                alt={`footer_compliance_icon_${index}`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col pb-20 text-center md:pb-0">
          <p className="text-sm font-normal text-muted-foreground">
            GAMBLING CAN BE ADDICTIVE. PLAY RESPONSIBLY!
          </p>
          <p className="my-5 text-sm font-normal text-muted-foreground">
            ******* casino is operated by *******, ensuring a secure and fair gaming environment for
            all players. We strictly adhere to all regulatory requirements to maintain transparency
            and fairness. Our commitment to integrity and ethical practices is at the core of our
            business. We employ advanced security measures, including SSL encryption and robust
            firewall systems, to protect your personal and financial information. Promoting
            responsible gaming is a priority at ******* Casino. We provide tools and resources to
            help you gamble responsibly. We offer a variety of secure payment methods and ensure
            seamless transactions. All payment processes are encrypted and compliant with industry
            standards. Our customer support team is available 24/7 to assist you with any questions
            or issues you may have. Contact us via Live Chat, Email, or Phone for prompt and
            professional assistance.
          </p>
        </div>
      </LayoutWrapper>
    </div>
  );
};

export default Footer;
