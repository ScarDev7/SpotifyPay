import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Star } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import useEvaluations from '../hooks/useEvaluations';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { user } = useAuth();
  const { songs, timeLeft } = useEvaluations(); // Usa o hook personalizado

  // Filtra as músicas com base no termo de pesquisa
  const filteredSongs = songs.filter((song: any) =>
    song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    song.artist.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-gray-800">Avalie músicas e ganhe dinheiro!</h1>
          <div className="bg-green-100 px-4 py-2 rounded-lg">
            <p className="text-green-800 font-semibold">
              Saldo: R$ {user?.balance.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="container mx-auto px-0 py-1">
          <button
            onClick={() => navigate('/music-list')}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Lista de Músicas
          </button>
        </div>
        
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Pesquisar músicas..."
            className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
        </div>
        
        <div className="bg-green-100 p-4 rounded-lg mb-6">
          <p className="text-green-800">
            Avalie músicas e ganhe entre R$ 2,00 e R$ 3,00 por avaliação! Quanto mais avaliações, mais você ganha.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSongs.map((song: any) => (
          <div key={song.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <img 
              src={song.coverUrl} 
              alt={`${song.title} cover`} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-grow">
              <h3 className="font-bold text-lg mb-1">{song.title}</h3>
              <p className="text-gray-600 mb-2">{song.artist}</p>
              <p className="text-gray-500 text-sm">{song.album}</p>
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-100">
              <button 
                onClick={() => navigate(`/evaluation/${song.id}`)}
                className={`w-full ${
                  song.evaluated
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-green-600 hover:bg-green-700'
                } text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center`}
                disabled={song.evaluated} // Desabilita o botão apenas se a música já foi avaliada
              >
                <Star size={18} className="mr-2" />
                {song.evaluated ? 'Avaliada' : 'Avaliar'}
              </button>
              {timeLeft !== null && song.evaluated && (
                <p className="text-center text-sm text-gray-600 mt-2">
                  Próxima avaliação disponível em: {timeLeft} segundos
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;