import React from 'react';
import Marquee from 'react-fast-marquee';

const impactWords = [
  'Você é luz',
  'Você é amor',
  'Você é cura',
  'Adeus aos vícios',
  'Eleve sua consciência',
  'Harmonize sua vida',
  'Exapanda sua consciência',
  'Eleve sua energia',
  'Ascenda seu espírito',
];

const MarqueeText: React.FC = () => {
  return (
    <Marquee
      className="py-4 md:py-6 bg-white/5 backdrop-blur-sm"
      gradient={false}
      speed={40}
    >
      {impactWords.map((word, index) => (
        <span
          key={index}
          className="text-xl md:text-2xl font-bold text-purple-200 mx-6 md:mx-8"
        >
          {word}
        </span>
      ))}
    </Marquee>
  );
};

export default MarqueeText;
