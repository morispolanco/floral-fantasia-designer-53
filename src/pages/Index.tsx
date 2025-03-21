
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import DemoSection from '@/components/DemoSection';
import Testimonials from '@/components/Testimonials';
import AffiliateProgram from '@/components/AffiliateProgram';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import Seo from '@/components/Seo';

const Index = () => {
  useEffect(() => {
    const handleScrollReveal = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('revealed');
        }
      }
    };

    window.addEventListener('scroll', handleScrollReveal);
    // Initial check
    handleScrollReveal();
    
    return () => window.removeEventListener('scroll', handleScrollReveal);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Seo 
        title="Floral Designer - Diseña Arreglos Florales Personalizados con IA"
        description="Crea arreglos florales únicos adaptados a tus necesidades con nuestra aplicación intuitiva basada en IA."
      />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DemoSection />
        <Testimonials />
        <AffiliateProgram />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
