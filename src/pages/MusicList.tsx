import { useNavigate } from 'react-router-dom';
import useEvaluations from '../hooks/useEvaluations';

const MusicList = () => {
  const navigate = useNavigate();
  const { songs } = useEvaluations(); // Usa o hook personalizado

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Lista de Músicas</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {songs.map((song: any) => (
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
                {song.evaluated ? 'Avaliada' : 'Avaliar'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusicList;