
import React from 'react';
import { Star, Quote } from 'lucide-react';
import AnimatedText from './AnimatedText';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  rating: number;
  delay?: number;
}

const TestimonialCard = ({ quote, author, position, rating, delay = 0 }: TestimonialProps) => {
  return (
    <div className="glass-card p-6 relative overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="absolute -top-1 -right-1 text-[#F8B7CD] opacity-10">
        <Quote size={80} />
      </div>
      <div className="relative z-10">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              size={16} 
              className={i < rating ? "text-[#F8B7CD] fill-[#F8B7CD]" : "text-gray-300"} 
            />
          ))}
        </div>
        <AnimatedText
          as="p"
          text={quote}
          animation="slideUp"
          delay={delay}
          className="text-muted-foreground italic mb-4"
        />
        <AnimatedText
          as="p"
          text={author}
          animation="slideUp"
          delay={delay + 100}
          className="font-semibold"
        />
        <AnimatedText
          as="p"
          text={position}
          animation="slideUp"
          delay={delay + 150}
          className="text-sm text-muted-foreground"
        />
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Esta aplicación cambió mi negocio de florería. Ahora puedo mostrar a mis clientes cómo se verán sus arreglos antes de crearlos.",
      author: "María Rodríguez",
      position: "Propietaria de Flores del Valle",
      rating: 5
    },
    {
      quote: "Como aficionada a las flores, esta herramienta me permite experimentar con diferentes combinaciones sin desperdiciar flores.",
      author: "Carmen Jiménez",
      position: "Entusiasta de jardinería",
      rating: 5
    },
    {
      quote: "Gracias a esta aplicación, he mejorado mis habilidades para crear arreglos florales. La versión premium vale cada centavo.",
      author: "Luis Martínez",
      position: "Estudiante de diseño floral",
      rating: 4
    },
    {
      quote: "Organizo eventos y esta herramienta me ha ayudado a comunicarme mejor con mis proveedores florales. Simplemente brillante.",
      author: "Ana Gómez",
      position: "Planificadora de eventos",
      rating: 5
    },
    {
      quote: "Increíble aplicación para visualizar mis ideas antes de llevarlas a la realidad. La función regional es especialmente útil.",
      author: "Pedro Sánchez",
      position: "Florista profesional",
      rating: 4
    },
    {
      quote: "La IA genera descripciones tan detalladas que parecen escritas por un florista experto. Recomiendo la versión completa.",
      author: "Sofía Mendoza",
      position: "Diseñadora de interiores",
      rating: 5
    }
  ];

  return (
    <section id="testimonios" className="section-padding bg-gradient-to-b from-floral-cream/20 to-white">
      <div className="section-container">
        <div className="text-center mb-16">
          <AnimatedText
            as="p"
            text="TESTIMONIOS"
            animation="slideDown"
            className="text-sm font-semibold tracking-wider text-primary mb-3"
          />
          <AnimatedText
            as="h2"
            text="Lo que dicen nuestros usuarios"
            animation="slideUp"
            className="section-heading max-w-3xl mx-auto"
          />
          <AnimatedText
            as="p"
            text="Descubre cómo nuestra aplicación está transformando la forma en que las personas diseñan arreglos florales."
            animation="slideUp"
            delay={100}
            className="section-subheading"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              position={testimonial.position}
              rating={testimonial.rating}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
