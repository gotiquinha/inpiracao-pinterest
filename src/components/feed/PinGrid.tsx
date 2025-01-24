"use client";

import React, { useState, useEffect } from 'react';
import PinCard from './PinCard';

const IMAGES_BY_CATEGORY = {
  'Todos': [
    { 
      url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174', 
      title: 'Modern Workspace Setup', 
      author: 'John Doe',
      description: 'Um espaço de trabalho minimalista e moderno, perfeito para aumentar a produtividade e criatividade.',
      hashtags: ['workspace', 'minimalismo', 'produtividade', 'design']
    },
    { 
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', 
      title: 'Minimal Interior Design', 
      author: 'Jane Smith',
      description: 'Design de interiores que combina elegância e simplicidade, criando um ambiente acolhedor e sofisticado.',
      hashtags: ['interiordesign', 'minimalismo', 'decoração', 'arquitetura']
    },
    { 
      url: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead', 
      title: 'Abstract Art Piece', 
      author: 'Mike Wilson',
      description: 'Uma obra de arte abstrata que explora formas e cores de maneira única e expressiva.',
      hashtags: ['arte', 'abstrato', 'cores', 'contemporâneo']
    },
    { 
      url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2', 
      title: 'Creative Workspace', 
      author: 'Emma Davis',
      description: 'Ambiente criativo com elementos modernos e tecnológicos para inspirar inovação.',
      hashtags: ['criatividade', 'tecnologia', 'inovação', 'workspace']
    },
    { 
      url: 'https://images.unsplash.com/photo-1511385348-a52b4a160dc2', 
      title: 'Modern Architecture', 
      author: 'Chris Martin',
      description: 'Projeto arquitetônico contemporâneo que desafia as convenções tradicionais.',
      hashtags: ['arquitetura', 'design', 'contemporâneo', 'inovação']
    },
    { url: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f', title: 'Interior Goals', author: 'Sarah Johnson' },
    { url: 'https://images.unsplash.com/photo-1460411794035-42aac080490a', title: 'Nature Photography', author: 'David Brown' },
    { url: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d', title: 'Digital Art Creation', author: 'Lisa Anderson' },
    { url: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a', title: 'UI Design Inspiration', author: 'Tom Wilson' },
    { url: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836', title: 'Food Art', author: 'Maria Garcia' },
  ],
  'Workspace': [
    { 
      url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174', 
      title: 'Modern Workspace Setup', 
      author: 'John Doe',
      description: 'Espaço de trabalho ergonômico com iluminação natural e organização inteligente.',
      hashtags: ['homeoffice', 'setup', 'produtividade', 'ergonomia']
    },
    { 
      url: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2', 
      title: 'Creative Workspace', 
      author: 'Emma Davis',
      description: 'Ambiente de trabalho que estimula a criatividade e o bem-estar.',
      hashtags: ['workspace', 'criatividade', 'bemestar', 'design']
    },
    { 
      url: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705', 
      title: 'Home Office Design', 
      author: 'Alex Turner',
      description: 'Home office planejado para maximizar conforto e eficiência.',
      hashtags: ['homeoffice', 'design', 'produtividade', 'decoração']
    },
  ],
  'Arquitetura': [
    { url: 'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a', title: 'Urban Architecture', author: 'Peter Jones' },
    { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1', title: 'Minimal Building Design', author: 'Rachel White' },
  ],
  'Arte Digital': [
    { 
      url: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d', 
      title: 'Digital Art Creation', 
      author: 'Lisa Anderson',
      description: 'Arte digital contemporânea explorando temas futuristas.',
      hashtags: ['artedigital', 'futuro', 'tecnologia', 'arte']
    },
    { 
      url: 'https://images.unsplash.com/photo-1634986666676-ec8fd927c23d', 
      title: 'Digital Illustration', 
      author: 'Mark Davis',
      description: 'Ilustração digital que combina técnicas tradicionais e modernas.',
      hashtags: ['ilustração', 'digital', 'arte', 'design']
    },
    { url: 'https://images.unsplash.com/photo-1633186710895-309db2eca9e4', title: 'Creative Digital Design', author: 'Sophie Lee' },
  ],
  'UI Design': [
    { 
      url: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a', 
      title: 'UI Design Inspiration', 
      author: 'Tom Wilson',
      description: 'Interface moderna com foco em experiência do usuário.',
      hashtags: ['uidesign', 'ux', 'interface', 'web']
    },
    { 
      url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e', 
      title: 'App Interface Design', 
      author: 'James Miller',
      description: 'Design de aplicativo mobile com elementos interativos inovadores.',
      hashtags: ['app', 'mobile', 'design', 'interação']
    },
    { url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8', title: 'Web Design Layout', author: 'Emily Clark' },
  ],
  'Natureza': [
    { url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b', title: 'Landscape Beauty', author: 'Michael Green' },
    { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e', title: 'Forest Path', author: 'Laura Taylor' },
  ],
  'Arte Abstrata': [
    { url: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968', title: 'Modern Abstract', author: 'Daniel Lee' },
    { url: 'https://images.unsplash.com/photo-1507908708918-778587c9e563', title: 'Color Study', author: 'Anna White' },
  ],
  'Interiores': [
    { url: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f', title: 'Interior Goals', author: 'Sarah Johnson' },
    { url: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a', title: 'Modern Living Room', author: 'Kate Brown' },
  ],
  'Moda': [
    { url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f', title: 'Fashion Style', author: 'Emma White' },
    { url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c', title: 'Street Fashion', author: 'Sophie Chen' },
    { url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae', title: 'Minimal Style', author: 'Alice Kim' },
  ],
  'Culinária': [
    { url: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327', title: 'Food Photography', author: 'John Smith' },
    { url: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352', title: 'Culinary Creation', author: 'Paul Chen' },
  ],
  'Viagens': [
    { url: 'https://images.unsplash.com/photo-1488085061387-422e29b40080', title: 'Travel Adventure', author: 'Jack Wilson' },
    { url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1', title: 'Wanderlust', author: 'Lucy Davis' },
    { url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800', title: 'Explore More', author: 'Tom Brown' },
  ],
};

interface ImageData {
  url: string;
  title: string;
  author: string;
  description: string;
  hashtags: string[];
}

interface Pin {
  id: number;
  imageUrl: string;
  title: string;
  author: string;
  description: string;
  hashtags: string[];
}

const generatePins = (startIndex: number, count: number, category: string = 'Todos') => {
  const images = IMAGES_BY_CATEGORY[category as keyof typeof IMAGES_BY_CATEGORY] as ImageData[];
  return Array.from({ length: Math.min(count, images.length) }, (_, i) => {
    const imageIndex = (startIndex + i) % images.length;
    const image = images[imageIndex];
    return {
      id: startIndex + i,
      imageUrl: `${image.url}?w=236&h=350&fit=crop`,
      title: image.title,
      author: image.author,
      description: image.description || 'Uma imagem inspiradora',
      hashtags: image.hashtags || ['inspiração', 'design']
    };
  });
};

const PINS_PER_PAGE = 20;
const MAX_PAGES = 3;

interface PinGridProps {
  searchQuery: string;
  selectedCategory: string;
}

export default function PinGrid({ searchQuery, selectedCategory }: PinGridProps) {
  const [pins, setPins] = useState<Pin[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setPins(generatePins(0, PINS_PER_PAGE, selectedCategory));
  }, []);

  useEffect(() => {
    if (mounted) {
      setPins(generatePins(0, PINS_PER_PAGE, selectedCategory));
      setPage(1);
    }
  }, [selectedCategory, mounted]);

  const filteredPins = pins.filter(pin => 
    pin.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pin.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const loadMorePins = () => {
    if (page >= MAX_PAGES || loading) return;
    
    setLoading(true);
    const newPins = generatePins(pins.length, PINS_PER_PAGE, selectedCategory);
    
    setTimeout(() => {
      setPins([...pins, ...newPins]);
      setPage(page + 1);
      setLoading(false);
    }, 1000);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight * 1.5) {
      loadMorePins();
    }
  };

  if (!mounted) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-pinterest-red"></div>
      </div>
    );
  }

  return (
    <div className="h-screen overflow-auto" onScroll={handleScroll}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {filteredPins.map((pin) => (
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
      {loading && (
        <div className="flex justify-center p-4">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-pinterest-red"></div>
        </div>
      )}
      {page >= MAX_PAGES && (
        <div className="text-center p-4 text-gray-500">
          Você chegou ao fim do feed! 🎨
        </div>
      )}
    </div>
  );
} 