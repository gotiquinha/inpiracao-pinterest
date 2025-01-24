"use client";

import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { usePins } from '@/contexts/PinsContext';
import Navbar from '@/components/shared/Navbar';
import PinCard from '@/components/feed/PinCard';
import { motion } from 'framer-motion';

type Tab = 'criados' | 'salvos' | 'curtidos';

export default function ProfilePage() {
  const { user } = useAuth();
  const { savedPins, likedPins } = usePins();
  const [activeTab, setActiveTab] = useState<Tab>('salvos');

  // Pins criados (exemplo)
  const createdPins = [
    { 
      id: 999, 
      imageUrl: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead', 
      title: 'Minha Criação', 
      author: user?.email || 'Usuário',
      description: 'Uma composição original que explora cores e formas de maneira única.',
      hashtags: ['arte', 'criação', 'original', 'design']
    },
  ];

  const getPins = () => {
    switch (activeTab) {
      case 'salvos':
        return savedPins;
      case 'curtidos':
        return likedPins;
      case 'criados':
        return createdPins;
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Cabeçalho do Perfil */}
          <div className="text-center py-8">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-gray-600">
                {user?.email?.[0].toUpperCase() || '?'}
              </span>
            </div>
            <h1 className="text-2xl font-bold mb-2">{user?.email || 'Usuário'}</h1>
            <p className="text-gray-600">@{user?.email?.split('@')[0] || 'usuario'}</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-8 border-b">
            <button
              onClick={() => setActiveTab('salvos')}
              className={`px-6 py-3 font-medium transition-colors relative ${
                activeTab === 'salvos' ? 'text-pinterest-red' : 'text-gray-600'
              }`}
            >
              Pins Salvos
              {activeTab === 'salvos' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-pinterest-red"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('curtidos')}
              className={`px-6 py-3 font-medium transition-colors relative ${
                activeTab === 'curtidos' ? 'text-pinterest-red' : 'text-gray-600'
              }`}
            >
              Pins Curtidos
              {activeTab === 'curtidos' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-pinterest-red"
                />
              )}
            </button>
            <button
              onClick={() => setActiveTab('criados')}
              className={`px-6 py-3 font-medium transition-colors relative ${
                activeTab === 'criados' ? 'text-pinterest-red' : 'text-gray-600'
              }`}
            >
              Pins Criados
              {activeTab === 'criados' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-pinterest-red"
                />
              )}
            </button>
          </div>

          {/* Grid de Pins */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {getPins().map((pin) => (
              <div key={pin.id} className="mb-4">
                <PinCard
                  id={pin.id}
                  imageUrl={pin.imageUrl}
                  title={pin.title}
                  author={pin.author}
                  description={pin.description}
                  hashtags={pin.hashtags}
                />
              </div>
            ))}
          </div>

          {/* Mensagem quando não há pins */}
          {getPins().length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                Nenhum pin {
                  activeTab === 'salvos' 
                    ? 'salvo' 
                    : activeTab === 'curtidos'
                      ? 'curtido'
                      : 'criado'
                } ainda.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 