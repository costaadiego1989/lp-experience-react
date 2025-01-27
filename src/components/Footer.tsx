import React from 'react';
import { ChevronRight, Info, Clock, Ticket, HelpCircle } from 'lucide-react';
import { HandsPraying } from '@phosphor-icons/react';

const Footer: React.FC = () => {
  return (
    <>
      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 py-2 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20 md:hidden z-50">
        <div className="flex justify-around items-center h-16">
          <a href="#about" className="flex flex-col items-center text-purple-200 hover:text-white transition-colors">
            <Info className="w-6 h-6" />
            <span className="text-xs mt-1">Sobre</span>
          </a>
          <a href="#timeline" className="flex flex-col items-center text-purple-200 hover:text-white transition-colors">
            <HandsPraying className="w-6 h-6" />
            <span className="text-xs mt-1">Vivência</span>
          </a>
          <div className="relative -mt-8">
            <a href="/" className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                <img src="/geo.png" alt="Logo" className="w-12 h-12 shadow-2xl hover:shadow-3xl transition-shadow duration-300" />
              </div>
            </a>
          </div>
          <a href="#tickets" className="flex flex-col items-center text-purple-200 hover:text-white transition-colors">
            <Ticket className="w-6 h-6" />
            <span className="text-xs mt-1">Comprar</span>
          </a>
          <a href="#faq" className="flex flex-col items-center text-purple-200 hover:text-white transition-colors">
            <HelpCircle className="w-6 h-6" />
            <span className="text-xs mt-1">FAQ</span>
          </a>
        </div>
      </nav>

      {/* Desktop Footer */}
      <footer className="bg-indigo-950/50 backdrop-blur-sm py-12 md:py-20 px-4 md:px-6 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">
                The Divine Experience
              </h3>
              <p className="text-purple-200">
                Uma jornada de transformação espiritual que mudará sua vida para
                sempre.
              </p>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">
                Contato
              </h4>
              <ul className="space-y-3 md:space-y-4 text-purple-200">
                <li>divinexperience@gmail.com</li>
                <li>+55 (21) 99300-1883</li>
                <li>Rio de Janeiro, RJ</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">
                Links Rápidos
              </h4>
              <ul className="space-y-3 md:space-y-4 text-purple-200">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#timeline" className="hover:text-white transition-colors">
                    Programação
                  </a>
                </li>
                <li>
                  <a href="#tickets" className="hover:text-white transition-colors">
                    Ingressos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6">
                Newsletter
              </h4>
              <p className="text-purple-200 mb-4">
                Receba atualizações e conteúdo exclusivo.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-2 rounded-l-lg bg-white/10 text-white placeholder-purple-300 
                    focus:outline-none text-sm md:text-base"
                />
                <button className="px-4 md:px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-r-lg text-white">
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Add padding to prevent content from being hidden behind mobile nav */}
      <div className="h-16 md:hidden"></div>
    </>
  );
};

export default Footer;