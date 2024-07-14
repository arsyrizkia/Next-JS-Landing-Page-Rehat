import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo />}>
        <li>
          <Link href="https://instagram.com/rehat_coliving">Instagram</Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Pengalaman coliving modern untuk \n'}
            <span className="text-primary-500">Mahasiswa.</span>
          </>
        }
        description="Cara termudah untuk menemukan tempat tinggal bersama yang nyaman, seru, dan mendukung kegiatan akademis serta sosialmu."
        button={
          <Link href="https://wa.me/6281213076424">
            <Button xl>Booking Sekarang</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
