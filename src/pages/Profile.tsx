import { useState, useEffect } from 'react';
import { User, Calendar } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Evaluation } from '../data/evaluations';

const Profile = () => {
  const { user } = useAuth();
  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
  
  // In a real app, this would fetch from an API
  // For demo purposes, we'll use mock data
  useEffect(() => {
    const mockEvaluations: Evaluation[] = [
      {
        id: '1',
        songId: '1',
        songTitle: 'Blinding Lights - The Weeknd',
        rating: 5,
        amount: 8.75,
        date: '2023-05-15'
      },
      {
        id: '2',
        songId: '3',
        songTitle: 'Levitating - Dua Lipa',
        rating: 4,
        amount: 7.20,
        date: '2023-05-14'
      },
      {
        id: '3',
        songId: '5',
        songTitle: 'Montero - Lil Nas X',
        rating: 5,
        amount: 8.50,
        date: '2023-05-12'
      }
    ];
    
    setEvaluations(mockEvaluations);
  }, []);
  
  if (!user) return null;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-green-600 p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Meu Perfil</h1>
          <p>Gerencie suas informações e acompanhe seus ganhos</p>
        </div>
        
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-gray-100 p-6 rounded-lg">
                <div className="w-24 h-24 bg-green-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User size={40} className="text-green-700" />
                </div>
                <h2 className="text-xl font-bold text-center mb-1">{user.name}</h2>
                <p className="text-gray-600 text-center mb-4">{user.email}</p>
                
                <div className="bg-green-100 p-4 rounded-lg">
                  <p className="text-green-800 font-medium text-center">
                    Saldo disponível: R$ {user.balance.toFixed(2)}
                  </p>
                </div>
                
                <div className="mt-6">
                  <p className="text-gray-600 text-sm mb-2">Status da conta:</p>
                  <div className={`px-3 py-1 rounded-full text-center text-sm font-medium ${
                    user.verified ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {user.verified ? 'Verificada' : 'Não verificada'}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h2 className="text-xl font-bold mb-4">Histórico de Avaliações</h2>
              
              {evaluations.length > 0 ? (
                <div className="space-y-4">
                  {evaluations.map(evaluation => (
                    <div key={evaluation.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium">{evaluation.songTitle}</h3>
                          <div className="flex items-center mt-1">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star 
                                  key={i} 
                                  size={16} 
                                  fill={i < evaluation.rating ? '#f59e0b' : 'none'} 
                                  color={i < evaluation.rating ? '#f59e0b' : '#d1d5db'} 
                                  className="mr-1"
                                />
                              ))}
                            </div>
                            <span className="text-gray-500 text-sm ml-2">
                              {evaluation.rating}/5
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-green-600 font-medium">
                            +R$ {evaluation.amount.toFixed(2)}
                          </span>
                          <div className="flex items-center text-gray-500 text-sm mt-1 justify-end">
                            <Calendar size={14} className="mr-1" />
                            {evaluation.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <p className="text-gray-600">
                    Você ainda não fez nenhuma avaliação.
                  </p>
                  <button 
                    onClick={() => window.location.href = '/'}
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Começar a avaliar
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Star = ({ size, fill, color, className }: { size: number, fill: string, color: string, className?: string }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={fill} 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
};

export default Profile;