"use client";

import React, { useState } from 'react';
import PinGrid from '@/components/feed/PinGrid';
import Navbar from '@/components/shared/Navbar';
import SearchBar from '@/components/shared/SearchBar';

export default function FeedPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <SearchBar
          onSearch={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <div className="h-[calc(100vh-8rem)]">
          <PinGrid
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
          />
        </div>
      </main>
    </div>
  );
} 