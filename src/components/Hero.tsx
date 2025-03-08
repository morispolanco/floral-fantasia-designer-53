
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';
import AnimatedText from './AnimatedText';
import Gallery from './Gallery';

const Hero = () => {
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!galleryRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = (clientX - innerWidth / 2) / innerWidth * 10;
      const moveY = (clientY - innerHeight / 2) / innerHeight * 10;
      
      galleryRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-24 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-floral-cream/30 to-white/0"></div>
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-floral-pink/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-floral-lilac/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-foreground text-sm font-medium mb-6 animate-slideDown">
            🌸 Diseño floral único y personalizado 🌸
          </div>
          
          <AnimatedText
            as="h1"
            text="Diseñador de Arreglos Florales Personalizados"
            animation="slideUp"
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
          />
          
          <AnimatedText
            as="p"
            text="Crea arreglos florales únicos adaptados a tus necesidades con nuestra aplicación intuitiva. Personaliza cada detalle y visualiza tu diseño antes de crearlo."
            animation="slideUp"
            delay={200}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slideUp" style={{ animationDelay: '400ms' }}>
            <a href="https://florales.streamlit.app/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" icon={<ArrowRight size={18} />}>Probar Demo</Button>
            </a>
            <a href="https://form.jotform.com/250651149373053" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline">Registrarse</Button>
            </a>
          </div>
        </div>
        
        <div className="relative order-first lg:order-last flex justify-center items-center">
          <div 
            ref={galleryRef}
            className="relative z-10 transition-transform duration-200 ease-out w-full"
          >
            <Gallery />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
