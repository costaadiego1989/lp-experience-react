import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Timer } from 'lucide-react';
import { Carrot, FlowerLotus, FlyingSaucer, HandsPraying, MicrophoneStage, PersonSimpleTaiChi, SketchLogo, StarAndCrescent, SunHorizon, Waveform, YinYang } from '@phosphor-icons/react';

const timeline = [
  {
    time: '11:00',
    title: 'Abertura dos Portais',
    description: 'Ritual do aposento e cerimônia de abertura',
    icon: <StarAndCrescent size={48} color='#fff' />
  },
  {
    time: '12:00',
    title: 'Almoço consciente',
    description: 'Momento de se conectar com um almoço leve e consciente',
    icon: <Carrot size={48} color='#fff' />
  },
  {
    time: '14:00',
    title: 'Palestra: Quebrando Tabus Espirituais',
    description: 'Entender o que é a espiritualidade em um contexto macro',
    icon: <FlyingSaucer size={48} color='#fff' />
  },
  {
    time: '15:30',
    title: 'Cristaloterapia',
    description: 'Alinhamento dos chakras com cristais',
    icon: <SketchLogo size={48} color='#fff' />
  },
  {
    time: '17:00',
    title: 'Banho de som',
    description: 'Soundhealing como ferramenta de cura',
    icon: <Waveform size={48} color='#fff' />
  },
  {
    time: '18:30',
    title: 'Kundalini Yoga',
    description: 'Despertando a serpente interior',
    icon: <PersonSimpleTaiChi size={48} color='#fff' />
  },
  {
    time: '20:00',
    title: 'Apresentação musical',
    description: 'Expressão do divino através da música autoconsciente',
    icon: <MicrophoneStage size={48} color='#fff' />
  },
  {
    time: '21:30',
    title: 'Meditação do silêncio',
    description: 'Receba insights valiosos sobre o que vivenciou',
    icon: <FlowerLotus size={48} color='#fff' />
  },
  {
    time: '22:00',
    title: 'Apresentação musical II',
    description: 'Música medicina com artista influente na espiritualidade',
    icon: <MicrophoneStage size={48} color='#fff' />
  },
  {
    time: '00:00',
    title: 'The Divine Experience',
    description: 'Se entregue a experiência...',
    icon: <YinYang size={48} color='#fff' />
  },
  {
    time: '05:30',
    title: 'Set Psycho Sirius A',
    description: 'A gratidão pela vida manifestada no ápice da cura',
    icon: <SunHorizon size={48} color='#fff' />
  },
  {
    time: '07:00',
    title: 'Encerramento Sagrado',
    description: 'Ritual de encerramento e partilha',
    icon: <HandsPraying size={48} color='#fff' />
  },
];

const Timeline: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 relative" id="timeline" ref={ref}>
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a')] 
        bg-cover bg-fixed opacity-10"
      />
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-16">
          Cronograma da reunião
        </h2>
        <div className="relative">
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500 
            transform md:-translate-x-1/2"
          />
          {timeline.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-start mb-8 md:mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'
                } pl-12 md:pl-0`}
              >
                <div
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 
                  transition-all duration-300"
                >
                  <div className='pb-6 absolute right-6'>
                    <span className='text-purple-300'>{event.icon}</span>
                  </div>
                  <div className="text-xl flex gap-2 md:text-2xl font-bold text-white mb-2">
                    <Timer /> {event.time}
                  </div>
                  <div className="md:text-2xl font-bold text-white mb-2">
                    {event.title}
                  </div>
                  <div className="text-purple-300">{event.description}</div>
                </div>
              </div>
              <div className="absolute left-4 md:left-1/2 w-6 h-6 transform -translate-x-1/2 mt-6 md:mt-4">
                <div className="w-full h-full bg-purple-500 rounded-full border-4 border-indigo-900 shadow-lg" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
