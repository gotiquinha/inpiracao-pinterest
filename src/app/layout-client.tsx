"use client";

import React from 'react';
import { Inter } from 'next/font/google';
import { AuthProvider } from '@/contexts/AuthContext';
import { PinsProvider } from '@/contexts/PinsContext';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AuthProvider>
          <PinsProvider>
            {children}
          </PinsProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
