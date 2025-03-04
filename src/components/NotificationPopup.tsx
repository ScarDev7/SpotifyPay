import { useEffect, useState } from "react";

const randomNames = [
  "Carlos Souza", "Ana Lima", "Felipe Martins", "Mariana Oliveira", "Lucas Ferreira", 
  "Camila Rocha", "André Silva", "Juliana Costa", "Fernando Almeida", "Bruna Santos"
];

const getRandomName = () => randomNames[Math.floor(Math.random() * randomNames.length)];
const getRandomAmount = () => (Math.random() * (3 - 2) + 2).toFixed(2);

const NotificationPopup = () => {
    type NotificationType = { name: string; amount: string } | null;
    const [notification, setNotification] = useState<NotificationType>(null);
    ;

  useEffect(() => {
    const interval = setInterval(() => {
      setNotification({ name: getRandomName(), amount: getRandomAmount() });
      
      setTimeout(() => setNotification(null), 5000); // Oculta o pop-up após 5 segundos
    }, 20000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-10 left-5 z-50">
      {notification && (
        <div className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in">
          <p className="font-medium">{notification.name} avaliou uma música!</p>
          <p>Ganhou R$ {notification.amount}</p>
        </div>
      )}
    </div>
  );
};

export default NotificationPopup;