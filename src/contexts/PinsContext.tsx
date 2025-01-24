"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

interface Pin {
  id: number;
  imageUrl: string;
  title: string;
  author: string;
  description: string;
  hashtags: string[];
}

interface PinsContextType {
  savedPins: Pin[];
  likedPins: Pin[];
  savePin: (pin: Pin) => void;
  unsavePin: (pinId: number) => void;
  likePin: (pin: Pin) => void;
  unlikePin: (pinId: number) => void;
  isSaved: (pinId: number) => boolean;
  isLiked: (pinId: number) => boolean;
}

const PinsContext = createContext<PinsContextType | undefined>(undefined);

export function PinsProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [savedPins, setSavedPins] = useState<Pin[]>([]);
  const [likedPins, setLikedPins] = useState<Pin[]>([]);

  // Carregar pins do localStorage quando o usuário fizer login
  useEffect(() => {
    if (user) {
      const savedPinsData = localStorage.getItem(`savedPins_${user.email}`);
      const likedPinsData = localStorage.getItem(`likedPins_${user.email}`);
      
      if (savedPinsData) {
        setSavedPins(JSON.parse(savedPinsData));
      }
      if (likedPinsData) {
        setLikedPins(JSON.parse(likedPinsData));
      }
    } else {
      setSavedPins([]);
      setLikedPins([]);
    }
  }, [user]);

  // Salvar pins no localStorage quando houver mudanças
  useEffect(() => {
    if (user) {
      localStorage.setItem(`savedPins_${user.email}`, JSON.stringify(savedPins));
      localStorage.setItem(`likedPins_${user.email}`, JSON.stringify(likedPins));
    }
  }, [savedPins, likedPins, user]);

  const savePin = (pin: Pin) => {
    setSavedPins(prev => [...prev, pin]);
  };

  const unsavePin = (pinId: number) => {
    setSavedPins(prev => prev.filter(pin => pin.id !== pinId));
  };

  const likePin = (pin: Pin) => {
    setLikedPins(prev => [...prev, pin]);
  };

  const unlikePin = (pinId: number) => {
    setLikedPins(prev => prev.filter(pin => pin.id !== pinId));
  };

  const isSaved = (pinId: number) => {
    return savedPins.some(pin => pin.id === pinId);
  };

  const isLiked = (pinId: number) => {
    return likedPins.some(pin => pin.id === pinId);
  };

  return (
    <PinsContext.Provider 
      value={{ 
        savedPins, 
        likedPins, 
        savePin, 
        unsavePin, 
        likePin, 
        unlikePin,
        isSaved,
        isLiked
      }}
    >
      {children}
    </PinsContext.Provider>
  );
}

export function usePins() {
  const context = useContext(PinsContext);
  if (context === undefined) {
    throw new Error('usePins must be used within a PinsProvider');
  }
  return context;
} 