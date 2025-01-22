import { useState } from 'react';
import { Headphones } from '@phosphor-icons/react';
 
 export const PopupExperience = () => {
    // Estado para controlar a visibilidade do popup
    const [isVisible, setIsVisible] = useState(true);
  
    // Função para fechar o popup
    const closePopup = () => {
      setIsVisible(false);
    };
  
    return (
      <>
        {/* Condicionalmente renderiza o popup */}
        {isVisible && (
          <div
            className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={closePopup} // Fecha o popup ao clicar
          >
            <div className="bg-white backdrop-blur-sm p-8 rounded-xl text-center shadow-lg w-[350px]"
            onClick={(e) => e.stopPropagation()} // Impede o clique de fechar quando clicar no conteúdo
          >
            <div className="text-4xl backdrop-blur-sm mb-4 flex justify-center items-center">
              {/* Ícone de play usando FontAwesome */}
              <Headphones />
            </div>
            <p className="text-xl font-semibold">Prepare-se para iniciar a experiência. Se puder, use fones de ouvido.</p>
          </div>
        </div>
      )}
    </>
  );
};