import React from 'react';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import MiddleCTA from '@/components/MiddleCTA';
import Testimonials from '@/components/Testimonials';
import QASection from '@/components/QASection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="bg-white max-w-[480px] w-full mx-auto">
      <div className="bg-white min-h-[844px] w-full overflow-hidden">
        <div className="w-full">
          <Hero />
          <Benefits />
          <MiddleCTA />
          <Testimonials />
          <QASection />
          <FinalCTA />
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default Index;
