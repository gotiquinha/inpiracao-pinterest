"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Logo from './Logo';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';

export default function Navbar() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/');
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-4 py-2 bg-white shadow-sm z-50">
      <div className="flex items-center">
        <Link href={user ? "/feed" : "/"} className="flex items-center">
          <Logo width={32} height={32} className="mr-2" />
          <span className="text-pinterest-red font-bold text-lg">InspiraPin</span>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <Link 
              href="/feed" 
              className="px-4 py-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              Feed
            </Link>
            <Link 
              href="/profile" 
              className="px-4 py-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              Perfil
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-pinterest-red hover:bg-gray-100 rounded-full transition-colors"
            >
              Sair
            </button>
          </>
        ) : (
          <>
            <Link 
              href="/auth/login" 
              className="px-4 py-2 text-pinterest-red hover:bg-gray-100 rounded-full transition-colors"
            >
              Entrar
            </Link>
            <Link 
              href="/auth/register" 
              className="px-4 py-2 bg-pinterest-red text-white hover:bg-pinterest-dark-red rounded-full transition-colors"
            >
              Cadastrar
            </Link>
          </>
        )}
      </div>
    </nav>
  );
} 