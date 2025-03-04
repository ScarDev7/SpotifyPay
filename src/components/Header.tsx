import { Link } from 'react-router-dom';
import { BadgeDollarSign } from 'lucide-react';
import { User } from 'lucide-react';
import { CornerDownLeft } from 'lucide-react';
import { Airplay } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  useAuth();
  
  return (
    <header className="bg-gradient-to-r from-green-600 to-green-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex justify-center">
            <img 
                  src={'https://cdn.discordapp.com/attachments/865077720043618304/1344752150424715304/spotify-logo-branca-white.png?ex=67c75388&is=67c60208&hm=c7ba8b44e7eb0967ff31405167522b0cefb1691c2ec66c8d3bdc01fe5602a8bc&'} 
                  className="w-auto h-10 rounded-full object-cover mr-0"
                />
            </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-green-200 transition-colors">
                <Airplay size={25}/>
              </Link>
            </li>
            <li>
              <Link to="/profile" className="hover:text-green-200 transition-colors">
                <User size={25}/>
              </Link>
            </li>
            <li>
              <Link to="/withdraw" className="hover:text-green-200 transition-colors">
              <BadgeDollarSign size={25}/>
              </Link>
            </li>
            <li>
              <Link to="/logout" className="hover:text-green-200 transition-colors">
                <CornerDownLeft size={25}/>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;