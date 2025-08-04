import React from 'react';

interface QAItemProps {
  text: string;
  checkIcon: string;
}

const QAItem: React.FC<QAItemProps> = ({ text, checkIcon }) => {
  return (
    <div className="bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex w-full items-center gap-[5px] px-2.5 py-[7px] rounded-xl">
      <div className="self-stretch flex flex-col overflow-hidden items-stretch justify-center my-auto px-1.5 py-[9px]">
        <img
          src={checkIcon}
          alt="Check mark"
          className="aspect-[1.26] object-contain w-6"
        />
      </div>
      <div className="self-stretch flex min-w-60 items-center gap-2.5 text-sm text-[rgba(12,39,70,1)] font-normal leading-[21px] justify-center flex-1 shrink basis-3 my-auto">
        <p className="self-stretch flex-1 shrink basis-[0%] my-auto">
          {text}
        </p>
      </div>
    </div>
  );
};

const QASection = () => {
  const qaItems = [
    {
      text: "Conteúdo é baseado em princípios cristãos e valores de fé, com linguagem respeitosa e inspiradora.",
      checkIcon: "./images/check-icon.svg"
    },
    {
      text: "Não promete fórmulas mágicas. Propõe uma transformação de dentro para fora.",
      checkIcon: "./images/check-icon.svg"
    },
    {
      text: "Receba o livro em PDF, logo após a compra. Leitura fácil no celular ou computador.",
      checkIcon: "./images/check-icon.svg"
    }
  ];

  return (
    <section className="bg-[rgba(93,211,255,1)] min-h-[400px] w-full py-[15px]">
      <header className="flex min-h-[60px] w-full flex-col text-[25px] text-[rgba(18,23,20,1)] font-bold text-center leading-none pt-5 pb-3 px-4">
        <h2>Você está pronto?</h2>
      </header>
      
      <div className="w-full flex-1 px-4 py-5 space-y-5">
        {qaItems.map((item, index) => (
          <QAItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default QASection;
