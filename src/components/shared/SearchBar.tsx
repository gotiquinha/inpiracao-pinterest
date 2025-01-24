"use client";

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

interface SearchBarProps {
  onSearch: (query: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function SearchBar({ onSearch, selectedCategory, onCategoryChange }: SearchBarProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
  const categories = [
    'Todos',
    'Workspace',
    'Arquitetura',
    'Arte Digital',
    'UI Design',
    'Natureza',
    'Arte Abstrata',
    'Interiores',
    'Moda',
    'Culinária',
    'Viagens'
  ];

  const scrollCategories = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="sticky top-16 bg-white z-40 px-4 py-3 shadow-sm">
      <div className="max-w-6xl mx-auto space-y-4">
        {/* Barra de pesquisa */}
        <div className="relative">
          <input
            type="text"
            placeholder="Pesquisar pins..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pinterest-red focus:border-transparent"
          />
          <span className="absolute right-4 top-2.5 text-gray-400">
            🔍
          </span>
        </div>

        {/* Categorias com botões de navegação */}
        <div className="relative group">
          <div 
            className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-20 flex items-center justify-start pl-1"
          >
            <button
              onClick={() => scrollCategories('left')}
              className="p-1.5 text-gray-600 hover:text-pinterest-red transition-colors"
              aria-label="Rolar para a esquerda"
            >
              <IoChevronBack size={20} />
            </button>
          </div>
          
          <div className="flex overflow-x-auto hide-scrollbar px-10" ref={scrollContainerRef}>
            <div className="flex space-x-2 py-1">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onCategoryChange(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    selectedCategory === category
                      ? 'bg-pinterest-red text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          <div 
            className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-20 flex items-center justify-end pr-1"
          >
            <button
              onClick={() => scrollCategories('right')}
              className="p-1.5 text-gray-600 hover:text-pinterest-red transition-colors"
              aria-label="Rolar para a direita"
            >
              <IoChevronForward size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 