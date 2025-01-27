import React from 'react';
import { motion } from 'framer-motion';
import { PlusCircle, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'O que é The Divine Experience?',
    answer: 'The Divine Experience é um encontro espiritual único que reúne práticas ancestrais, meditações profundas e experiências transformadoras. Durante 19 horas, você será guiado em uma jornada de autodescoberta, cura e elevação espiritual.'
  },
  {
    question: 'Quem pode participar?',
    answer: 'Esse encontro foi feito para quem ouvir o chamado, porém contra indicado para quem utiliza de remédios de tarja preta, possui disturbios da mente e ou deficiência mental, mulheres grávidas e lactantes e pessoas com problemas cardíacos ou pressão alta.'
  },
  {
    question: 'O que é Ayahuasca?',
    answer: 'o Ritual da Ayahuasca é uma cerimônia sagrada que utiliza uma beberagem também chamada de Uni que os povos originários da América do Sul consagram há milênios com base em registros arqueológicos para se conectarem com o plano divino e se curarem de suas chaga físicas, mentais e espirituais.'
  },
  {
    question: 'O que é o Cacau?',
    answer: 'O Ritual do Cacau é uma cerimônia sagrada que utiliza o cacau em sua forma pura e natural como uma "medicina do coração". Originário das tradições indígenas da América Central, especialmente dos povos Maias e Astecas, o cacau é considerado um alimento espiritual que promove a conexão interior, a abertura do coração e a expansão da consciência.'
  },
  {
    question: 'Preciso ter experiência prévia com espiritualidade?',
    answer: 'Não. O evento foi desenhado para acolher tanto iniciantes quanto praticantes experientes. O mais importante é estar aberto para vivenciar uma experiência transformadora.'
  },
  {
    question: 'O que devo levar para o evento?',
    answer: 'Recomendamos trazer roupas confortáveis e claras, um tapete para meditação, uma garrafa de água, caderno para anotações e itens para seu conforto. Todos os materiais específicos para as práticas serão fornecidos pela organização.'
  },
  {
    question: 'Existem contraindicações para participar?',
    answer: 'O evento é seguro para a maioria das pessoas. No entanto, gestantes, pessoas com condições psiquiátricas graves ou sob uso de medicações específicas devem consultar seus médicos antes de participar.'
  },
  {
    question: 'Como funciona o reembolso em caso de desistência?',
    answer: 'Oferecemos reembolso total até 30 dias antes do evento. Entre 30 e 15 dias antes do evento, o reembolso é de 50%. Após esse período, não há reembolso, mas é possível transferir o ingresso para outra pessoa.'
  },
  {
    question: 'O que significa "30% destinado a Nova Terra"?',
    answer: '30% do valor de cada ingresso é destinado ao projeto Nova Terra, uma iniciativa que visa a construção de centros de cura e desenvolvimento espiritual, proporcionando acesso gratuito a práticas de elevação do ser.'
  },
  {
    question: 'Haverá alimentação durante o evento?',
    answer: 'Sim. Serviremos almoço vegetariano, lanches e coffee break. Todas as refeições são preparadas com alimentos naturais e energeticamente harmonizados.'
  },
  {
    question: 'Onde exatamente será realizado o evento?',
    answer: 'O evento será realizado em um espaço sagrado no Rio de Janeiro. O endereço exato será enviado por e-mail 30 dias antes do evento, após a confirmação de sua participação.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 relative" id="faq">
      <div className="absolute inset-0 bg-[url('/back-hero.jpg')] bg-cover bg-fixed opacity-20" />
      <div className="container mx-auto relative">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-16">
          Perguntas Frequentes
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="text-lg font-semibold text-white max-w-[300px]">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-purple-300 flex-shrink-0" />
                ) : (
                  <PlusCircle className="w-5 h-5 text-purple-300 flex-shrink-0" />
                )}
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4">
                  <p className="text-purple-200">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;