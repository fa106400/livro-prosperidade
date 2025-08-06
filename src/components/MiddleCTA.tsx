import React from 'react';

const MiddleCTA = () => {
  const handleClick = () => {
    window.location.href = 'https://pay.kiwify.com.br/T8j6OGz';
  };

  return (
    <section className="bg-black min-h-[266px] w-full text-base text-white text-center">
      <div className="w-full flex-1 px-4 py-6">
        <header className="w-full text-[25px] font-extrabold leading-[1.6] tracking-[0.5px]">
          <h2>Sua virada começa agora</h2>
        </header>
        
        <p className="min-h-[50px] w-full font-medium leading-[25px] mt-3.5 tracking-[0.5px]">
          Um guia direto para quem quer
          <br />
          <span className="font-bold">mudar de vida</span> com{" "}
          <span className="font-bold">Deus</span> no centro.
        </p>
        
        <div className="flex w-full items-stretch text-[rgba(18,23,20,1)] font-bold leading-none justify-center flex-1 h-full mt-3.5">
          <div className="flex min-w-60 w-[357px] flex-col items-center justify-center">
            <button 
              onClick={handleClick}
              className="bg-[rgba(20,226,90,1)] shadow-[2px_4px_4px_rgba(0,0,0,0.25)] flex min-w-[84px] min-h-[52px] w-[280px] max-w-full items-center overflow-hidden justify-center px-4 rounded-[100px] hover:bg-[rgba(18,203,81,1)] transition-colors cursor-pointer"
            >
              <span className="self-stretch w-[220px] overflow-hidden my-auto">
                Quero meu livro 
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MiddleCTA;
