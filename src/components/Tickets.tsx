import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Crown, CheckCircle } from 'lucide-react';
import { SketchLogo } from "@phosphor-icons/react"

const tickets = [
  {
    title: 'Abundante',
    price: 'R$ 969',
    divideIn: 'Em até 6x de R$ 161',
    icon: SketchLogo,
    features: [
      'Acesso a todas as vivências',
      'Kit de boas-vindas exclusivo',
      '30% destinado a Nova Terra',
      'Embaixador da Nova Terra',
      'Área de descanso',
    ],
    gradient: 'from-purple-500 to-blue-500',
    featured: true,
    marketing: 'Mais vendido',
  },
  // {
  //   title: 'Semeador',
  //   price: 'R$ 1.696',
  //   divideIn: 'Em até 6x de R$ 282',
  //   icon: Crown,
  //   features: [
  //     'Acesso a todas as vivências',
  //     'Kit de boas-vindas exclusivo',
  //     'Almoço incluso',
  //     'Lanche da tarde incluso',
  //     'Coffee break',
  //     '30% destinado a Nova Terra',
  //     'Embaixador da Nova Terra',
  //     'Área de descanso',
  //   ],
  //   gradient: 'from-pink-500 to-purple-500',
  //   featured: true,
  //   marketing: 'Mais vendido',
  // },
  // {
  //   title: 'Ascencionado',
  //   price: 'R$ 1.969',
  //   divideIn: 'Em até 6x de R$ 328',
  //   icon: SketchLogo,
  //   features: [
  //     'Acesso a todas as vivências',
  //     'Kit de boas-vindas exclusivo',
  //     'Almoço incluso',
  //     'Lanche da tarde incluso',
  //     'Coffee break',
  //     '30% destinado a Nova Terra',
  //     'Embaixador da Nova Terra',
  //     'Área de descanso',
  //     'Muito mais...',
  //   ],
  //   gradient: 'from-yellow-500 to-pink-500',
  //   featured: true,
  //   marketing: 'Mais abundante',
  // },
];

const Tickets: React.FC = () => {

  const [isVisible, setIsVisible] = useState(false);

  const closePopup = () => {
    setIsVisible(false);
  };

  const handleClick = () => {
    window.location.href = "https://pay.infinitepay.io/the-divine/Ri02-1bIfwuGRTP-969,00";
  }

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 relative">
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a')] 
        bg-cover bg-fixed opacity-10"
      />
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-16">
          Valor do acesso
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tickets.map((ticket, index) => {
            const Icon = ticket.icon;
            return (
              <motion.div
                key={ticket.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative ${ticket.featured ? 'transform md:-translate-y-4' : ''
                  }`}
              >
                <div
                  className={`h-full bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 
                  border-2 ${ticket.featured
                      ? 'border-purple-400 shadow-lg shadow-purple-500/20'
                      : 'border-transparent'
                    }`}
                >
                  {ticket.featured && (
                    <div
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 
                      bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-1 rounded-full text-sm font-semibold text-white"
                    >
                      {ticket.marketing}
                    </div>
                  )}
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center
                    bg-gradient-to-r ${ticket.gradient}`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white text-center mb-2">
                    {ticket.title}
                  </h3>
                  <div className="flex mx-auto items-center gap-2 justify-center">
                    <p
                      className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-purple-300 to-pink-300 
                    bg-clip-text text-transparent"
                    >
                      {ticket.price}{' '}
                    </p>
                    <p className="text-1xl mb-6 text-white">
                      {ticket.divideIn}
                    </p>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {ticket.features.map((feature, i) => {
                      return (
                        <>
                          {feature != '30% destinado a Nova Terra' ? (
                            <li
                              key={i}
                              className="flex items-center text-purple-200"
                            >
                              <CheckCircle className="w-5 h-5 mr-2 text-purple-400" />
                              <span>{feature}</span>
                            </li>
                          ) : (
                            <li
                              key={i}
                              className="flex items-center text-purple-200"
                            >
                              <CheckCircle className="w-5 h-5 mr-2 text-purple-400" />
                              <span className="flex gap-2 items-center">
                                {feature}{' '}
                                <button onClick={() => setIsVisible(!isVisible)}
                                  className="px-3 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-[100px] 
                        transform hover:scale-105 transition-all duration-300 text-white font-semibold text-sm"
                                >
                                  +info
                                </button>
                              </span>
                            </li>
                          )}
                        </>
                      );
                    })}
                  </ul>
                  <button onClick={handleClick}
                    className={`w-full py-3 rounded-xl font-semibold transition-all duration-300
                    bg-gradient-to-r ${ticket.gradient} text-white transform hover:scale-105`}
                  >
                    Garantir meu acesso
                  </button>
                  <p className='text-center text-xs font-bold mb-6 bg-gradient-to-r from-purple-300 to-pink-300 
                    bg-clip-text text-transparent mt-4'>*Se você usa remédios controlados, possui transtornos mentais, está grávida ou é lactante ou possui problemas cardíacos ou de pressão, infelizmente esta reunião não é para você. Saiba mais sobre no FAQ.</p>
                </div>
              </motion.div>
            );
          })}

          {isVisible && (
            <div
              className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={closePopup} // Fecha o popup ao clicar
            >
              <div className="bg-white max-h-[500px] z-999 backdrop-blur-sm p-6 rounded-xl text-center shadow-lg w-[350px]"
                onClick={(e) => e.stopPropagation()} // Impede o clique de fechar quando clicar no conteúdo
              >
                <div className="text-4xl backdrop-blur-sm mb-4 flex justify-center items-center">
                  {/* Ícone de play usando FontAwesome */}
                  <img src="/nova-terra.png" alt="A Nova Terra de Cristo" className='rounded-xl' loading="lazy" />
                </div>
                <div className='max-h-[250px] overflow-y-auto'>
                  <h2 className="text-xl py-4 text-left font-semibold -mt-6">O que é a Nova Terra?</h2>
                  <p className="text-base font-semibold text-left">
                    A Nova Terra é mais do que um projeto; é uma revelação do coração de Sananda (Jesus Cristo), parte de um plano divino desenhado para unir a humanidade numa celebração da vida e da espiritualidade. Este movimento é uma ponte para você alcançar um novo patamar espiritual em sua jornada de volta para casa.
                  </p>
                  <br />

                  <p className="text-base text-left font-semibold">
                    Concebido como um movimento espiritualista/universalista, a Nova Terra é um santuário de inclusão que abraça todas as religiões. Aqui, o Criador é reverenciado em todas as suas manifestações, através de cada tradição e crença reconhecendo a presença onipresente em todas elas.
                  </p>
                  <br />

                  <p className="text-base text-left font-semibold">
                    Eu, o Canalizador, me envolvi neste divino empreendimento como um irmão pronto a servir a espiritualidade, conduzido pela missão da minha alma de atuar como um canal entre o espiritual e o material. Comprometido com este sagrado chamado, assumi a responsabilidade de guiar este movimento, lado a lado com guerreiros de luz e a grande espiritualidade.
                  </p>
                  <br />

                  <p className="text-base text-left font-semibold">
                    Em resumo, a Nova Terra irá moldar a forma como nos relacionamos com o Criador e como entendemos toda sua criação, nos tornando seres mais maduros espiritualmente falando, através de comunhões, celebrações e movimentos energéticos, que elevam nosso espírito a níveis conscienciais mais expandidos.
                  </p>
                  <br />

                  <h2 className="text-xl py-4 text-left font-semibold">Para quem é a Nova Terra?</h2>

                  <p className="text-base text-left font-semibold">
                    Este convite é para você. Independentemente de sua fé, cor, origem ou passado, a Nova Terra oferece um novo começo. Cada indivíduo é recebido com graça e começa uma jornada de transformação, emergindo como uma nova criatura iluminada pela compreensão e pelo amor.
                  </p>
                  <br />

                  <h2 className="text-xl py-4 text-left font-semibold">Qual é a proposta da Nova Terra?</h2>

                  <p className="text-base text-left font-semibold">
                    No coração do grande plano de Cristo, a Nova Terra é o palco de uma transição espiritual significativa, preparando-se para uma era de regeneração e paz que, conforme profetizado, florescerá por volta do ano 2550. Este é o momento de plantar as sementes para um futuro onde prevalecerão apenas o amor, a paz e a fraternidade entre todos os povos.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section >
  );
};

export default Tickets;
