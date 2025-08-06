import React from 'react';

const Hero = () => {
  const handleClick = () => {
    window.location.href = 'https://pay.kiwify.com.br/T8j6OGz';
  };

  return (
    <section className="bg-[rgba(12,39,70,1)] w-full">
      <div className="w-full">
        <div className="flex min-h-[480px] w-full flex-col overflow-hidden items-stretch justify-center py-[35px]">
          <div className="flex w-full gap-[5px] justify-center">
            <div className="flex items-center gap-2.5 text-sm text-white font-semibold whitespace-nowrap text-center tracking-[1px] leading-none justify-center">
              <div className="self-stretch my-auto">4,9</div>
            </div>
            <div className="flex items-center gap-0.5 justify-center">
              <img
                src="./images/star.svg"
                alt="Star rating"
                className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              />
              <img
                src="./images/star.svg"
                alt="Star rating"
                className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              />
              <img
                src="./images/star.svg"
                alt="Star rating"
                className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              />
              <img
                src="./images/star.svg"
                alt="Star rating"
                className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              />
              <img
                src="./images/star.svg"
                alt="Star rating"
                className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              />
            </div>
            <div className="flex items-center gap-2.5 text-sm text-white font-semibold whitespace-nowrap text-center tracking-[1px] leading-none justify-center">
              <div className="self-stretch my-auto">22.021</div>
            </div>
          </div>
          
          <div className="self-center w-[358px] max-w-full mt-[30px]">
            <header className="min-h-[100px] w-full text-4xl text-white text-center leading-none">
              <h1 className="font-medium tracking-[2px]">Desbloqueie sua</h1>
              <h1 className="font-extrabold tracking-[5px]">prosperidade</h1>
            </header>
            
            <div className="flex w-full items-stretch mt-[5px]">
              <div className="flex flex-col items-stretch text-base text-white font-medium leading-[30px] justify-center flex-1 shrink basis-[0%] px-2.5">
                <p>
                  Este livro revela os{" "}
                  <span className="font-bold text-white">segredos</span>{" "}
                  para
                  <br />
                  alinhar suas crenças espirituais <br />e atrair o{" "}
                  <span className="font-bold text-white">sucesso financeiro</span>
                  .
                </p>
              </div>
              <div className="flex min-h-[241px] flex-col items-stretch justify-center flex-1 shrink basis-5 my-auto">
                <div className="flex w-full flex-col items-stretch justify-center">
                  <img
                    src="./images/book-cover.png"
                    alt="Book cover"
                    className="aspect-[0.83] object-contain w-[189px]"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <button 
            onClick={handleClick}
            className="bg-[rgba(20,226,90,1)] shadow-[2px_4px_4px_rgba(0,0,0,0.25)] self-center flex min-w-[84px] min-h-[52px] w-[280px] max-w-full items-center overflow-hidden text-base text-[rgba(18,23,20,1)] font-bold text-center leading-none justify-center mt-[30px] px-4 rounded-[25px] hover:bg-[rgba(18,203,81,1)] transition-colors cursor-pointer"
          >
            <span className="self-stretch w-[136px] overflow-hidden my-auto">
              Quero meu livro
            </span>
          </button>
          
          <div className="flex w-full items-center gap-[25px] justify-center mt-[30px] py-[15px]">
            <div className="self-stretch min-h-[35px] w-[78px] my-auto">
              <img
                src="./images/amazon-logo.png"
                alt="Amazon logo"
                className="aspect-[3.25] object-contain w-[78px] transform translate-y-3"
              />
            </div>
            <img
              src="./images/platform-logo1.png"
              alt="Platform logo"
              className="aspect-[2.96] object-contain w-[65px] self-stretch shrink-0 my-auto"
            />
            <img
              src="./images/platform-logo2.png"
              alt="Platform logo"
              className="aspect-[2.54] object-contain w-[61px] self-stretch shrink-0 my-auto"
            />
            <img
              src="./images/platform-logo3.png"
              alt="Platform logo"
              className="aspect-[1.64] object-contain w-[41px] self-stretch shrink-0 my-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
