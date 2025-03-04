import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  
  const handleLogout = () => {
    setIsLoggingOut(true);
    
    // Simulate a small delay for better UX
    setTimeout(() => {
      logout();
      navigate('/login');
    }, 500);
  };
  
  const handleCancel = () => {
    navigate('/');
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8 text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <LogOut size={32} className="text-red-600" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Confirmar saída</h2>
          <p className="text-gray-600 mb-6">
            Tem certeza que deseja sair da sua conta? Você precisará fazer login novamente para acessar sua conta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleCancel}
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className={`px-6 py-3 bg-red-600 text-white rounded-lg ${
                isLoggingOut ? 'opacity-70 cursor-not-allowed' : 'hover:bg-red-700'
              } transition-colors`}
            >
              {isLoggingOut ? 'Saindo...' : 'Confirmar Saída'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logout;