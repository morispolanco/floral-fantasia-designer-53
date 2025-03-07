
import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';
import AnimatedText from './AnimatedText';

const CallToAction = () => {
  return (
    <section id="cta" className="section-padding bg-gradient-to-br from-primary/5 to-floral-cream/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText
            as="h2"
            text="Únete a nosotros hoy mismo"
            animation="slideUp"
            className="font-heading section-heading"
          />
          <AnimatedText
            as="p"
            text="Descubre el arte de crear arreglos florales personalizados con nuestro Diseñador de Arreglos Florales. ¡Es gratis probar la versión de demostración y empezar a diseñar tu primer arreglo floral hoy mismo!"
            animation="slideUp"
            delay={100}
            className="section-subheading"
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 animate-slideUp" style={{ animationDelay: '300ms' }}>
            <a href="https://florales.streamlit.app/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" icon={<ArrowRight size={18} />}>
                Prueba la Demo Ahora
              </Button>
            </a>
            <Button size="lg" variant="outline">
              Regístrate para Acceso Ilimitado
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
