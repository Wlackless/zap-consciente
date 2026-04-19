// src/components/SwipeCard.tsx

import { motion, useMotionValue, useTransform } from "framer-motion";
import type { CardData } from "../data";

interface SwipeCardProps {
  card: CardData;
  onSwipe: (direction: 'left' | 'right') => void;
}

export function SwipeCard({ card, onSwipe }: SwipeCardProps) {
  // Rastrea o movimento no eixo X
  const x = useMotionValue(0);
  
  // Rotaciona levemente o card enquanto ele é arrastado
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  
  // Muda a opacidade dependendo da distância arrastada (para sumir)
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  // Muda a cor de fundo dinamicamente: Vermelho p/ esquerda, Verde p/ direita
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#fee2e2", "#ffffff", "#dcfce7"] // Tailwind colors: red-100, white, green-100
  );

  const handleDragEnd = (_: any, info: any) => {
    const swipeThreshold = 100; // Distância mínima para considerar um swipe válido
    if (info.offset.x > swipeThreshold) {
      onSwipe('right');
    } else if (info.offset.x < -swipeThreshold) {
      onSwipe('left');
    }
  };

  return (
    <motion.div
      style={{ x, rotate, opacity, background }}
      drag="x" // Permite arrastar apenas horizontalmente
      dragConstraints={{ left: 0, right: 0 }} // Faz o card voltar pro centro se soltar antes do limite
      onDragEnd={handleDragEnd}
      whileTap={{ scale: 0.95 }}
      className="absolute w-full max-w-[320px] h-[400px] rounded-2xl shadow-xl flex flex-col justify-center items-center p-6 text-center cursor-grab active:cursor-grabbing border-2 border-gray-200"
    >
      <div className="bg-[#25D366] text-white p-3 rounded-full mb-6">
        {/* Ícone simples para simular o "Zap" */}
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      </div>
      
      <p className="text-xl font-medium text-gray-800 leading-relaxed pointer-events-none">
        "{card.text}"
      </p>
      
      <div className="absolute bottom-6 w-full flex justify-between px-8 text-sm font-bold opacity-50 pointer-events-none">
        <span className="text-red-600">← CILADA</span>
        <span className="text-green-600">SUSTENTÁVEL →</span>
      </div>
    </motion.div>
  );
}