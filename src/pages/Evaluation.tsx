// src/pages/Evaluation.tsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ArrowLeft, Check } from 'lucide-react';
import { songs as initialSongs } from '../data/songs';
import SpotifyPlayer from '../components/SpotifyPlayer';
import { getRandomAmount } from '../data/evaluations';
import { useAuth } from '../context/AuthContext';
import useEvaluations from '../hooks/useEvaluations';

// Função para obter uma avaliação do localStorage
const getRating = (songId: string): number | null => {
  const ratings = JSON.parse(localStorage.getItem('ratings') || '{}');
  return ratings[songId] || null;
};

const Evaluation = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { updateBalance } = useAuth();
  const [song] = useState(() => initialSongs.find(s => s.id === id)); // Estado da música atual
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [amount, setAmount] = useState(0);
  const [alreadyRated, setAlreadyRated] = useState(false);

  // Usa o hook personalizado
  useEvaluations();

  useEffect(() => {
    if (!song) {
      navigate('/');
    } else {
      // Verifica se a música já foi avaliada
      const savedRating = getRating(song.id);
      if (savedRating !== null) {
        setAlreadyRated(true);
        setRating(savedRating);
      }
    }
  }, [song, navigate]);

  const handleSubmit = () => {
    if (rating === 0 || alreadyRated) return;
    
    const earnedAmount = getRandomAmount();
    setAmount(earnedAmount);
    updateBalance(earnedAmount);
    setSubmitted(true);

    // Salva a avaliação no localStorage
    const ratings = JSON.parse(localStorage.getItem('ratings') || '{}');
    ratings[song!.id] = rating;
    localStorage.setItem('ratings', JSON.stringify(ratings));

    // Marca a música como avaliada no array `songs`
    const updatedSongs = initialSongs.map(s => {
      if (s.id === song!.id) {
        return { ...s, evaluated: true }; // Atualiza a propriedade `evaluated`
      }
      return s;
    });
    localStorage.setItem('songs', JSON.stringify(updatedSongs));

    // Salva o horário da última avaliação
    localStorage.setItem('lastEvaluationTime', new Date().getTime().toString());
  };

  if (!song) return null;

  return (
    <div className="container mx-auto px-4 py-8">
      <button 
        onClick={() => navigate('/')}
        className="flex items-center text-green-600 mb-6 hover:text-green-800 transition-colors"
      >
        <ArrowLeft size={20} className="mr-2" />
        Voltar para a lista
      </button>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden p-6">
        {!submitted ? (
          <>
              {/* Player do Spotify */}
              <div className="w-auto md:w-auto">
                <SpotifyPlayer song={song} />
              </div>

            {/* Sistema de Avaliação */}
            <div className="text-center">
              <p className="text-gray-700 mb-4 font-medium">
                {alreadyRated ? 'Você já avaliou esta música:' : 'Avalie esta música:'}
              </p>
              <div className="flex justify-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => !alreadyRated && setRating(star)}
                    onMouseEnter={() => !alreadyRated && setHoveredRating(star)}
                    onMouseLeave={() => !alreadyRated && setHoveredRating(0)}
                    className="text-3xl focus:outline-none"
                    disabled={alreadyRated} // Desabilita as estrelas se a música já foi avaliada
                  >
                    <Star 
                      size={32} 
                      fill={(hoveredRating || rating) >= star ? '#f59e0b' : 'none'} 
                      color={(hoveredRating || rating) >= star ? '#f59e0b' : '#d1d5db'} 
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Botão de Enviar Avaliação */}
            <div className="mt-6 text-center">
              <button
                onClick={handleSubmit}
                disabled={rating === 0 || alreadyRated}
                className={`px-6 py-3 rounded-lg text-white font-medium ${
                  rating === 0 || alreadyRated
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-green-600 hover:bg-green-700'
                }`}
              >
                {alreadyRated ? 'Avaliação Enviada' : 'Enviar Avaliação'}
              </button>
            </div>
          </>
        ) : (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Avaliação enviada com sucesso!</h2>
            <p className="text-gray-600 mb-6">
              Obrigado por avaliar "{song.title}" de {song.artist}.
            </p>
            <div className="bg-green-50 p-4 rounded-lg inline-block">
              <p className="text-green-800 font-medium">
                Você ganhou R$ {amount.toFixed(2)} por esta avaliação!
              </p>
            </div>
            <div className="mt-8">
              <button
                onClick={() => navigate('/')}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Avaliar mais músicas
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Evaluation;