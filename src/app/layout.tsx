import { Inter } from 'next/font/google';
import RootLayoutClient from './layout-client';
import { metadata } from './metadata';

const inter = Inter({ subsets: ['latin'] });

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
} 