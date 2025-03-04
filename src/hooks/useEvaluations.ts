import { useState, useEffect } from 'react';
import { songs as initialSongs } from '../data/songs';

interface Song {
  id: string;
  title: string;
  artist: string;
  evaluated: boolean;
  evaluatedAt?: number; // Horário em que a música foi avaliada (timestamp)
}

const useEvaluations = () => {
  const [songs, setSongs] = useState<Song[]>(() => {
    const savedSongs = localStorage.getItem('songs');
    return savedSongs ? JSON.parse(savedSongs) : initialSongs;
  });

  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  // Função para resetar as avaliações no localStorage e no estado
  const resetEvaluations = () => {
    const resetSongs = songs.map((song) => ({ ...song, evaluated: false, evaluatedAt: undefined }));
    localStorage.setItem('songs', JSON.stringify(resetSongs));
    setSongs(resetSongs);

    // Reseta as avaliações (ratings)
    localStorage.removeItem('ratings');

    // Reseta o horário da última avaliação
    localStorage.removeItem('lastEvaluationTime');
    setTimeLeft(null);
  };

  // Verifica se 1 minuto já se passou desde a última avaliação
  useEffect(() => {
    const lastEvaluationTime = localStorage.getItem('lastEvaluationTime');
    if (lastEvaluationTime) {
      const currentTime = new Date().getTime();
      const timeDifference = currentTime - Number(lastEvaluationTime);
      const oneMinuteInMs = 60 * 1000;

      if (timeDifference >= oneMinuteInMs) {
        resetEvaluations(); // Reseta as avaliações se 1 minuto já passou
      } else {
        const remainingTime = oneMinuteInMs - timeDifference;
        setTimeLeft(Math.floor(remainingTime / 1000)); // Converte para segundos

        const timer = setTimeout(() => {
          resetEvaluations(); // Reseta as avaliações após o tempo restante
        }, remainingTime);

        return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
      }
    }
  }, []);

  // Ordena as músicas: as não avaliadas primeiro, as avaliadas por último (na ordem em que foram avaliadas)
  const sortedSongs = [...songs].sort((a, b) => {
    if (!a.evaluated && !b.evaluated) return 0; // Mantém a ordem original para músicas não avaliadas
    if (a.evaluated && !b.evaluated) return 1; // Música avaliada vai para o final
    if (!a.evaluated && b.evaluated) return -1; // Música não avaliada vai para o início

    // Se ambas foram avaliadas, ordena pelo horário de avaliação (a mais antiga primeiro)
    return (a.evaluatedAt || 0) - (b.evaluatedAt || 0);
  });

  return {
    songs: sortedSongs,
    timeLeft,
    resetEvaluations,
  };
};

export default useEvaluations;