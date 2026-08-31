import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Manrope } from 'next/font/google';
import 'modern-normalize';
import './globals.css';

export const metadata: Metadata = {
  title: 'RentalCar - Car Rental Company',
  description:
    'Reliable and budget-friendly rentals for any journey. Easy online booking.',
};

interface RootLayoutProps {
  children: ReactNode;
}

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
});

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={manrope.variable}>{children}</body>
    </html>
  );
}
