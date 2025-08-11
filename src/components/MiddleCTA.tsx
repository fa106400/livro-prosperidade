import React from 'react';

const MiddleCTA = () => {
  const handleClick = () => {
    window.location.href = 'https://pay.kiwify.com.br/T8j6OGz';
  };

  return (
    <section className="bg-black w-full text-white text-center py-8 px-4 flex flex-col items-center">
      <h2 className="text-[25px] font-extrabold mb-3">Não é apenas um livro!</h2>
      <p className="max-w-xl mx-auto text-base md:text-lg mb-6 font-medium">
        Programa <span className="font-bold">completo</span> de <span className="font-bold">100 dias</span> que une inspiração, fé e ação para <span className="font-bold">transformar</span> sua vida de dentro para fora.
      </p>
      <div className="mb-6">
        <span className="text-[20px] font-bold">Peça <span className="font-extrabold">hoje mesmo</span> e receba também:</span>
      </div>
      <ul className="flex flex-col gap-3 items-start mx-auto mb-8 max-w-md">
        <li className="flex items-center text-left text-base md:text-lg">
          <img src="/public/images/check-icon.svg" alt="check" className="w-6 h-6 mr-2" />
          Livro: Orações de Poder
        </li>
        <li className="flex items-center text-left text-base md:text-lg">
          <img src="/public/images/check-icon.svg" alt="check" className="w-6 h-6 mr-2" />
          Livro: Afirmações para a Abundância
        </li>
        <li className="flex items-center text-left text-base md:text-lg">
          <img src="/public/images/check-icon.svg" alt="check" className="w-6 h-6 mr-2" />
          Planner de 100 dias para o Sucesso
        </li>
      </ul>
      <button
        onClick={handleClick}
        className="bg-[rgba(20,226,90,1)] hover:bg-[rgba(18,203,81,1)] transition-colors text-black font-bold rounded-full px-8 py-4 text-lg shadow-md min-w-[260px]"
      >
        Quero o pacote completo
      </button>
    </section>
  );
};

export default MiddleCTA;
