import React from 'react';

const FinalCTA = () => {
  const paymentIcons = [
    "https://api.builder.io/api/v1/image/assets/TEMP/08342c0edb20a7fb4f0d43aeea5d3e4fc54c0914?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/TEMP/89e0bd37fdd8e3099548ba8cb08126e007fe0d73?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/TEMP/3f04817e48de611ed7001d6858d9ae6bda65869f?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/TEMP/3b70cf8775ed03477fe37ee3a2e9a494eb2876f5?placeholderIfAbsent=true",
    "https://api.builder.io/api/v1/image/assets/TEMP/fe43947129dd335331f18c96f49eaaebd3077f15?placeholderIfAbsent=true"
  ];

  return (
    <section className="bg-white w-full">
      <div className="w-full px-4 py-[30px]">
        <header className="w-full text-[32px] text-[rgba(18,23,20,1)] font-bold text-center leading-10">
          <h2>Comece sua jornada agora mesmo!</h2>
        </header>
        
        <div className="w-full text-center mt-6">
          <p className="w-full text-base text-[rgba(18,23,20,1)] font-medium leading-10">
            De:{" "}
            <span className="line-through">R$ 69,99</span>{" "}
            por <span className="font-bold">apenas:</span>
          </p>
          
          <div className="w-full text-2xl text-[rgba(225,29,29,1)] font-bold leading-loose mt-[5px]">
            <div className="w-full">
              <span className="text-[32px]">R$</span>{" "}
              <span className="text-[48px] text-[rgba(225,29,29,1)]">19,99</span>
            </div>
          </div>
        </div>
        
        <div className="flex w-full text-base text-[rgba(18,23,20,1)] font-bold text-center leading-none justify-center mt-6">
          <div className="flex min-w-60 w-[280px] justify-center">
            <button className="bg-[rgba(20,226,90,1)] shadow-[2px_4px_4px_rgba(0,0,0,0.25)] flex min-w-[84px] min-h-[52px] w-[280px] items-center overflow-hidden justify-center max-w-[480px] px-4 rounded-[100px] hover:bg-[rgba(18,203,81,1)] transition-colors">
              <span className="self-stretch w-[180px] overflow-hidden my-auto">
                Quero meu livro
              </span>
            </button>
          </div>
        </div>
        
        <div className="w-full mt-6">
          <p className="w-full text-sm text-[rgba(18,23,20,1)] font-semibold text-center leading-10">
            PAGAMENTO 100% SEGURO
          </p>
          
          <div className="flex w-full items-center gap-2 justify-center mt-[5px]">
            {paymentIcons.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt={`Payment method ${index + 1}`}
                className={`object-contain self-stretch shrink-0 my-auto ${
                  index === 2 ? 'aspect-[2.67] w-6' : 
                  index === 3 ? 'aspect-[1.38] w-[33px]' : 
                  'aspect-[1] w-6'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
