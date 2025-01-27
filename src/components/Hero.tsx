import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { useCountdown } from '../hooks/useCountdown';

const Hero: React.FC = () => {

  const handleClick = () => {
    window.location.href = "https://pay.infinitepay.io/the-divine/Ri02-1bIfwuGRTP-969,00";
  }

  const timeLeft = useCountdown(new Date('2025-07-12T11:00:00'));

  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 relative">
      <div
        className="absolute inset-0 bg-[url('/back-hero.jpg')] 
        bg-cover bg-[-925px] opacity-20"
      />
      <div className="container mx-auto text-center relative z-10">
        <div className="mb-8 mt-8 text-4xl md:text-4xl font-bold text-white">
        <div className="flex justify-center mx-auto -mt-20 mb-8">
            <img src="/geo.png" alt="Logo" style={{ height: '100px' }} />
            <span className="text-xl font-bold text-white"></span>
          </div>
          <Typewriter
            options={{
              strings: [
                'Olá ser de luz...',
                'O chamado foi ouvido',
                'Estava a sua espera',
              ],
              autoStart: true,
              loop: true,
              delay: 100,
              cursor: '|',
            }}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img
            src="/tdexp.png"
            alt="The Divine Experience"
            className="mx-auto mb-8"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.5 }}
          className="text-lg md:text-xl text-purple-200 mb-8 md:mb-12"
        >
          12 • Julho • 2025 • Rio de Janeiro
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-xs md:max-w-2xl mx-auto mb-8 md:mb-12">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <motion.div
              key={unit}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4"
            >
              <div className="text-2xl md:text-4xl font-bold text-white">
                {value}
              </div>
              <div className="text-sm md:text-base text-purple-200 capitalize">
                {unit}
              </div>
            </motion.div>
          ))}
        </div>

        <button onClick={handleClick}
          className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-pink-500 rounded-lg 
            transform hover:scale-105 transition-all duration-300 text-white font-semibold text-sm"
        >
          Garantir meu acesso
        </button>
      </div>
    </section>
  );
};

export default Hero;
