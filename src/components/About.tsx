import React from 'react';
import { YinYang } from '@phosphor-icons/react';

const About: React.FC = () => {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 relative">
      <div className="container mx-auto">
        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <span className='flex justify-center pb-4'>
                <YinYang size={48} color="#fff" className='animate-spin duration-100' />
              </span>
              <h2 className="text-3xl md:text-4xl text-center font-bold text-white mb-6">
                Um portal que só se abre uma vez
              </h2>
              <div className="text-4xl backdrop-blur-sm mb-4 flex justify-center items-center">
                  <img src="/theritual.png" alt="A Nova Terra de Cristo" className='rounded-xl' loading="lazy" />
                </div>
              <p className="text-purple-200 text-base md:text-lg leading-relaxed mb-6">
                Algo extraordinário está para acontecer.{' '}
                <b>25 de julho de 2025</b>, no Rio de Janeiro, os filhos da luz
                se reunirão para abrir um portal de cura, despertar e elevação
                espiritual.
                <br />
                <br /> Durante <b>19 horas transformadoras</b>, você será
                envolvido por praticas de elevação do ser e a noite você estará
                diante de um trabalho espiritual que marcará para sempre seu
                espírito e transcenderá seus limites.
                <br />
                <br />
                <b>Vagas extremamente limitadas.</b> Este encontro é para
                aqueles que sentem, no fundo da alma, que estão prontos para uma
                experiência evolutiva inenarrável.
                <br />
                <br />
                <b>Sua alma está preparada? </b>
                Reserve seu lugar antes que o portal se feche. O Criador
                está te convidando. Ouça a frequência do amor. Conecte-se ao fluxo, ao coração do universo!
                <br />
                <br />
                <b>O tempo está correndo. </b>
                Essa é a oportunidade de ressignificar toda sua vida em uma
                experiência a nível espiritual.
              </p>
            </div>
            <img
              src="/angel2.png"
              className="animate-pulse mx-auto h-[400px] -mt-20"
              alt="Anjo metálico com luz no lugar da cabeça, passando a ideia de consciência iluminada"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
