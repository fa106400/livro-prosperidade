import React from 'react';

interface TestimonialProps {
  image?: string;
  quote: string;
  author: string;
  hasPlaceholder?: boolean;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ image, quote, author, hasPlaceholder }) => {
  return (
    <article className="shadow-[0px_4px_4px_rgba(0,0,0,0.25)] min-w-60 w-60 rounded-lg p-4">
      {hasPlaceholder ? (
        <div className="flex w-[68px] flex-col overflow-hidden items-stretch justify-center px-3.5 py-5 rounded-xl">
          <div className="bg-[rgba(13,153,255,0.9)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex w-full shrink-0 h-7" />
        </div>
      ) : (
        <img
          src={image}
          alt={`${author} profile`}
          className="aspect-[1] object-contain w-[68px] rounded-xl"
        />
      )}
      
      <div className="w-full mt-4">
        <blockquote className="w-full text-base text-[rgba(18,23,20,1)] font-medium leading-6">
          {quote}
        </blockquote>
        <br></br>
        <cite className="w-full text-sm text-[rgba(12,39,70,1)] font-semibold mt-2.5 not-italic">
          {author}
        </cite>
      </div>
    </article>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      image: "./images/quotes.svg",
      quote: '"Sempre tive fé, mas esse livro me mostrou que é possível alinhar espiritualidade com ações práticas. Já estou colhendo frutos!"',
      author: "Luiza, 52 anos – Goiânia/GO"
    },
    {
      image: "./images/quotes.svg",
      quote: '"Eu sempre lutei com minhas finanças, mas este livro me deu as ferramentas e a mentalidade para atrair abundância para minha vida."',
      author: "Paulo, 47 anos – Recife/PE"
    },
    {
      image: "./images/quotes.svg",
      quote: '"As percepções do Dr. Abreu são profundas e práticas. Este livro é uma leitura obrigatória para quem busca crescimento espiritual e financeiro."',
      author: "Tânia, 39 anos – Contagem/MG"
    },
    {
      image: "./images/quotes.svg",
      quote: '"Comecei a aplicar o que aprendi no livro e minha vida começou a mudar. Deus realmente usa ferramentas simples pra grandes transformações."',
      author: "Marcos, 45 anos – Campinas/SP"
    }
  ];

  return (
    <section className="w-full py-[15px]">
      <header className="flex w-full flex-col text-[25px] text-[rgba(18,23,20,1)] font-bold text-center leading-7 pt-5 pb-3 px-4">
        <h2>Quem leu, sentiu a mudança</h2>
      </header>
      
      <div className="flex w-full mt-[5px]">
        <div className="overflow-x-auto flex min-w-60 w-full items-stretch gap-4 pl-4 py-4">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
