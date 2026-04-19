import { useState } from 'react';
import type { CardData } from './data';
import { cardsData } from './data';
import { SwipeCard } from './components/SwipeCard';

// Função para embaralhar e pegar 4 cards
const getRandomCards = () => {
  return [...cardsData].sort(() => 0.5 - Math.random()).slice(0, 4);
};

export default function App() {
  const [gameCards] = useState<CardData[]>(getRandomCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState<{ show: boolean; isCorrect: boolean; text: string }>({
    show: false,
    isCorrect: false,
    text: '',
  });

  const currentCard = gameCards[currentIndex];
  const isGameOver = currentIndex >= gameCards.length;

  const handleSwipe = (direction: 'left' | 'right') => {
    const userChoice = direction === 'left' ? 'cilada' : 'sustentavel';
    const isCorrect = userChoice === currentCard.type;

    if (isCorrect) setScore((prev) => prev + 1);

    setFeedback({
      show: true,
      isCorrect,
      text: currentCard.feedback,
    });
  };

  const handleNextCard = () => {
    setFeedback({ show: false, isCorrect: false, text: '' });
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <div className="flex h-[100dvh] w-full items-center justify-center bg-gray-900 sm:p-4">
      {/* h-full para mobile, 
          h-[95dvh] para garantir que cabe na tela do PC/Tablet, 
          e max-h-[850px] para não esticar demais em telas gigantes. */}
      <div className="relative flex w-full max-w-md flex-col overflow-hidden bg-gray-50 h-full sm:h-[95dvh] sm:max-h-[850px] sm:rounded-[2.5rem] sm:border-[6px] sm:border-gray-800 sm:shadow-2xl">
        
        <header className="bg-[#075E54] p-4 text-white shadow-md z-10 shrink-0">
          <h1 className="text-xl font-bold">Zap Consciente</h1>
          <p className="text-sm opacity-80">Proteja-se e seja sustentável</p>
        </header>

        <main className="relative flex flex-1 items-center justify-center bg-[#E5DDD5] p-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

          {!isGameOver && !feedback.show && (
            <SwipeCard key={currentCard.id} card={currentCard} onSwipe={handleSwipe} />
          )}

          {feedback.show && (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/80 p-6 text-center text-white backdrop-blur-sm">
              <h2 className={`mb-4 text-3xl font-bold ${feedback.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                {feedback.isCorrect ? '✅ Acertou!' : '❌ Ops!'}
              </h2>
              <p className="mb-8 text-lg leading-relaxed">{feedback.text}</p>
              <button
                onClick={handleNextCard}
                className="rounded-full bg-[#25D366] px-8 py-3 font-bold text-white shadow-lg transition-transform active:scale-95"
              >
                Próxima Mensagem
              </button>
            </div>
          )}

          {isGameOver && (
            <div className="z-20 flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-xl w-full max-w-[320px]">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Fim de Jogo!</h2>
              <p className="text-gray-600 mb-6">Você identificou {score} de {gameCards.length} situações corretamente.</p>
              
              <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
                <div 
                  className="bg-[#25D366] h-4 rounded-full transition-all duration-1000" 
                  style={{ width: `${(score / gameCards.length) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Obrigado por aprender sobre consumo sustentável (ODS 12) e segurança digital!
              </p>
              <button
                onClick={() => window.location.reload()}
                className="rounded-full bg-gray-800 px-6 py-2 text-sm font-bold text-white transition-transform active:scale-95"
              >
                Jogar Novamente
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}