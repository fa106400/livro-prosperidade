import React from 'react';

interface BenefitCardProps {
  icon: string;
  title: string;
  subtitle: string;
  iconPosition: 'left' | 'right';
  alt: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, subtitle, iconPosition, alt }) => {
  return (
    <article className="flex min-h-[145px] w-full gap-3 pl-4 pr-[15px] pt-4 pb-[9px] rounded-lg">
      {iconPosition === 'left' && (
        <div className="flex min-h-[120px] flex-col items-stretch justify-center w-1/3 px-2.5 py-[11px]">
          <img
            src={icon}
            alt={alt}
            className="aspect-[1.01] object-contain w-[100px] rounded-[55px]"
          />
        </div>
      )}
      
      <div className="min-h-[120px] text-[rgba(18,23,20,1)] w-2/3">
        <h3 className="w-full text-xl font-bold leading-none">{title}</h3>
        <p className="w-full text-base font-normal leading-[25px] mt-[15px]">{subtitle}</p>
      </div>
      
      {iconPosition === 'right' && (
        <img
          src={icon}
          alt={alt}
          className="aspect-[1] object-contain w-1/3 shrink-0"
        />
      )}
    </article>
  );
};

const Benefits = () => {
  const benefits = [
    {
      icon: "./images/benefit-1.png",
      title: "Saia da escassez",
      subtitle: "Aprenda a alinhar espiritualidade e riqueza com propósito.",
      iconPosition: 'left' as const,
      alt: "Escassez icon"
    },
    {
      icon: "./images/benefit-2.png",
      title: "Atraia Abundância",
      subtitle: "Descubra o que está bloqueando sua vida.",
      iconPosition: 'right' as const,
      alt: "Abundância icon"
    },
    {
      icon: "./images/benefit-3.png",
      title: "Pratique junto",
      subtitle: "Aprenda estratégias práticas para manifestar prosperidade.",
      iconPosition: 'left' as const,
      alt: "Prática icon"
    },
    {
      icon: "./images/benefit-4.png",
      title: "Aprofunde Sua Fé",
      subtitle: "Fortaleça sua conexão com o divino.",
      iconPosition: 'right' as const,
      alt: "Fé icon"
    }
  ];

  return (
    <section className="min-h-[960px] w-full pb-[54px]">
      <div className="min-h-[906px] w-full pt-10 px-4">
        <header className="flex w-full flex-col items-center text-[rgba(18,23,20,1)] text-center">
          <h2 className="min-h-10 w-full max-w-[720px] text-[25px] font-extrabold leading-[1.6]">
            Transforme Sua Vida
          </h2>
          <p className="w-full max-w-[720px] text-base font-medium leading-[25px] mt-4">
            Uma jornada{" "}
            <span className="font-bold">transformadora</span>,<br />
            guiando você com{" "}
            <span className="font-bold">passos práticos</span> em
            direção ao{" "}
            <span className="font-bold">bem-estar financeiro</span>.
          </p>
        </header>
        
        <div className="flex min-h-[700px] w-full flex-col items-stretch mt-[35px]">
          {benefits.map((benefit, index) => (
            <React.Fragment key={index}>
              <BenefitCard {...benefit} />
              {index < benefits.length - 1 && (
                <div className="self-center flex w-full max-w-full flex-col items-stretch justify-center mt-2.5 p-2.5">
                  <hr className="border-0.5 min-h-px w-full border-gray-250 border-solid" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
