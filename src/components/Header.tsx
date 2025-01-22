import React from 'react';
// import { Link } from "react-router-dom"

const Header: React.FC = () => {
  return (
    <header className="fixed w-full z-50 bg-white/10 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex justify-center space-x-4">
            <img src="/geo.png" alt="Logo" style={{ height: '60px' }} />
            <span className="text-xl font-bold text-white"></span>
          </div>
          {/* <nav>
          <ul className="flex gap-2 items-center">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/cronograma">Cronograma</Link></li>
            <li><Link to="/acesso">Acesso</Link></li>
            <li><Link to="/faq">Faq</Link></li>
        </ul>
          </nav> */}
          <button
            className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-lg 
            transform hover:scale-105 transition-all duration-300 text-white font-semibold text-sm"
          >
            Garantir meu acesso
          </button>
        </div>

        
      </div>
    </header>
  );
};

export default Header;
