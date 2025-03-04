import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DollarSign, AlertCircle, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Withdraw = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [pixKey, setPixKey] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!pixKey.trim()) {
      setError('Por favor, insira uma chave PIX válida.');
      return;
    }
    
    const withdrawAmount = parseFloat(amount);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
      setError('Por favor, insira um valor válido.');
      return;
    }
    
    if (user && withdrawAmount > user.balance) {
      setError('Saldo insuficiente para este saque.');
      return;
    }
    
    if (!user?.verified) {
      navigate('/verification');
      return;
    }
    
    // In a real app, this would make an API call to process the withdrawal
    alert(`Saque de R$ ${withdrawAmount.toFixed(2)} solicitado com sucesso! O valor será enviado para a chave PIX ${pixKey} em até 24 horas.`);
  };
  
  if (!user) return null;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-green-600 p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Saque via PIX</h1>
          <p>Transfira seus ganhos para sua conta bancária</p>
        </div>
        
        <div className="p-6">
          {!user.verified && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex">
                <AlertCircle size={24} className="text-yellow-400 mr-3" />
                <div>
                  <p className="font-medium text-yellow-800">Conta não verificada</p>
                  <p className="text-yellow-700 mt-1">
                    Para realizar saques, você precisa verificar sua conta primeiro.
                  </p>
                  <button 
                    onClick={() => navigate('/verification')}
                    className="mt-2 flex items-center text-yellow-800 hover:text-yellow-900"
                  >
                    Verificar agora <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          )}
          
          <div className="bg-green-50 p-4 rounded-lg mb-6">
            <div className="flex items-center">
              <DollarSign size={24} className="text-green-600 mr-3" />
              <div>
                <p className="font-medium text-green-800">Saldo disponível</p>
                <p className="text-green-700 text-xl font-bold">
                  R$ {user.balance.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-4">
                {error}
              </div>
            )}
            
            <div className="mb-4">
              <label htmlFor="pixKey" className="block text-gray-700 font-medium mb-2">
                Chave PIX
              </label>
              <input
                type="text"
                id="pixKey"
                value={pixKey}
                onChange={(e) => setPixKey(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="CPF, e-mail, telefone ou chave aleatória"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">
                Valor do saque (R$)
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="0,00"
                min="20"
                max={user.balance}
                step="0.01"
              />
              <p className="text-gray-500 text-sm mt-1">
                Valor mínimo: R$ 20,00
              </p>
            </div>
            
            <button
              type="submit"
              className={`w-full py-3 rounded-lg text-white font-medium ${
                !user.verified 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-green-600 hover:bg-green-700'
              }`}
              disabled={!user.verified}
            >
              {!user.verified ? 'Verifique sua conta para sacar' : 'Solicitar Saque'}
            </button>
          </form>
          
          <div className="mt-6 text-sm text-gray-600">
            <p className="font-medium mb-1">Informações importantes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Os saques são processados em até 24 horas úteis.</li>
              <li>O valor mínimo para saque é de R$ 20,00.</li>
              <li>Certifique-se de que a chave PIX informada está correta.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdraw;