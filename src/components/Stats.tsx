import React from 'react';
import { motion } from 'framer-motion';
import { Ticket, Users, Timer } from 'lucide-react';

interface StatsProps {
  totalTickets: number;
  ticketsSold: number;
  remainingTickets: number;
}

const Stats: React.FC<StatsProps> = ({
  totalTickets,
  ticketsSold,
  remainingTickets,
}) => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 relative">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <img
          src="/ritual.png"
          alt="The Divine Experience"
          className="mx-auto -mt-12 mb-12"
          loading='lazy'
        />
      </motion.div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center"
          >
            <Ticket className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-white" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {totalTickets}
            </h3>
            <p className="text-purple-200">Acessos Totais</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center"
          >
            <Users className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-white" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {ticketsSold}
            </h3>
            <p className="text-purple-200">Acessos Vendidos</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center"
          >
            <Timer className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-white" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              {remainingTickets}
            </h3>
            <p className="text-purple-200">Acessos Restantes</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
