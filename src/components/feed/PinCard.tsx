"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { IoHeart, IoHeartOutline, IoClose, IoShareSocial, IoBookmark, IoBookmarkOutline } from 'react-icons/io5';
import { usePins } from '@/contexts/PinsContext';

interface PinCardProps {
  id: number;
  imageUrl: string;
  title: string;
  author: string;
  description?: string;
  hashtags?: string[];
}

export default function PinCard({ 
  id,
  imageUrl, 
  title, 
  author, 
  description = "Uma imagem inspiradora que captura a essência do design moderno e da criatividade.",
  hashtags = ["inspiração", "design", "criatividade"]
}: PinCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { 
    savePin, 
    unsavePin, 
    likePin, 
    unlikePin, 
    isSaved, 
    isLiked 
  } = usePins();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLiked(id)) {
      unlikePin(id);
    } else {
      likePin({ id, imageUrl, title, author, description, hashtags });
    }
  };

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isSaved(id)) {
      unsavePin(id);
    } else {
      savePin({ id, imageUrl, title, author, description, hashtags });
    }
  };

  if (!mounted) {
    return (
      <div className="relative rounded-lg overflow-hidden" style={{ paddingBottom: '140%' }}>
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
      </div>
    );
  }

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative rounded-lg overflow-hidden cursor-pointer group"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative" style={{ paddingBottom: '140%' }}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
            priority={false}
            loading="lazy"
            quality={75}
            className="object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={handleLike}
                className={`p-2 rounded-full transition-colors ${
                  isLiked(id) ? 'bg-pinterest-red text-white' : 'bg-white/90 hover:bg-white text-gray-700'
                }`}
              >
                {isLiked(id) ? <IoHeart size={20} /> : <IoHeartOutline size={20} />}
              </button>
              <button
                onClick={handleSave}
                className={`p-2 rounded-full transition-colors ${
                  isSaved(id) ? 'bg-pinterest-red text-white' : 'bg-white/90 hover:bg-white text-gray-700'
                }`}
              >
                {isSaved(id) ? <IoBookmark size={20} /> : <IoBookmarkOutline size={20} />}
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
          <h3 className="text-white font-medium truncate">{title}</h3>
          <p className="text-white/80 text-sm truncate">{author}</p>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && mounted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-gray-100 transition-colors"
              >
                <IoClose size={24} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[50vh] md:h-[80vh]">
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col h-full">
                  <h2 className="text-2xl font-bold mb-2">{title}</h2>
                  <p className="text-gray-600 mb-4">por {author}</p>
                  
                  <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <p className="text-gray-700 mb-4">{description}</p>
                    <div className="flex flex-wrap gap-2">
                      {hashtags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm hover:bg-gray-300 cursor-pointer transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mt-auto">
                    <button
                      onClick={handleLike}
                      className={`p-3 rounded-full transition-colors flex items-center space-x-2 ${
                        isLiked(id)
                          ? 'bg-pinterest-red text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      {isLiked(id) ? <IoHeart size={24} /> : <IoHeartOutline size={24} />}
                      <span>{isLiked(id) ? 'Curtido' : 'Curtir'}</span>
                    </button>
                    
                    <button
                      onClick={handleSave}
                      className={`p-3 rounded-full transition-colors flex items-center space-x-2 ${
                        isSaved(id)
                          ? 'bg-pinterest-red text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      {isSaved(id) ? <IoBookmark size={24} /> : <IoBookmarkOutline size={24} />}
                      <span>{isSaved(id) ? 'Salvo' : 'Salvar'}</span>
                    </button>
                    
                    <button
                      className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors flex items-center space-x-2"
                    >
                      <IoShareSocial size={24} />
                      <span>Compartilhar</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 