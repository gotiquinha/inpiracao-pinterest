"use client";

import React from 'react';
import Link from 'next/link';
import Logo from '@/components/shared/Logo';
import Navbar from '@/components/shared/Navbar';
import { useAuth } from '@/contexts/AuthContext';

export default function HomePage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <main className="pt-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
          {/* Pins simulados */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i} 
              className="relative group rounded-lg overflow-hidden"
              style={{
                paddingBottom: '140%',
                backgroundColor: `hsl(${Math.random() * 360}, 70%, 80%)`
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </main>

      {/* Welcome Modal - só mostra se não estiver logado */}
      {!user && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
            <div className="flex justify-center mb-6">
              <Logo width={56} height={56} />
            </div>
            <h1 className="text-3xl font-bold text-center mb-4">
              Bem-vindo ao InspiraPin
            </h1>
            <p className="text-gray-600 text-center mb-6">
              Descubra e salve ideias criativas para seus projetos
            </p>
            <div className="space-y-4">
              <Link 
                href="/auth/login" 
                className="block w-full py-3 text-center bg-pinterest-red text-white rounded-full hover:bg-pinterest-dark-red transition-colors"
              >
                Entrar
              </Link>
              <Link 
                href="/auth/register" 
                className="block w-full py-3 text-center bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors"
              >
                Cadastrar
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 