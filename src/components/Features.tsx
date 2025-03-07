
import React from 'react';
import { 
  Palette, 
  Bot, 
  Globe, 
  BookOpen, 
  FileDown, 
  MousePointer, 
  Infinity
} from 'lucide-react';
import FeatureCard from './FeatureCard';
import AnimatedText from './AnimatedText';

const Features = () => {
  const features = [
    {
      icon: <Palette size={24} />,
      title: 'Personalización Total',
      description: 'Elige entre una amplia variedad de flores, colores y estilos basados en tu región.'
    },
    {
      icon: <Bot size={24} />,
      title: 'Generación con IA',
      description: 'Utilizamos inteligencia artificial avanzada para generar descripciones detalladas e imágenes de tus arreglos.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Opciones Regionales',
      description: 'Selecciona tu región para descubrir las flores más populares y disponibles en tu área.'
    },
    {
      icon: <BookOpen size={24} />,
      title: 'Demo Gratuita',
      description: 'Prueba la aplicación con nuestra versión de demostración y genera hasta 10 arreglos florales gratuitos.'
    },
    {
      icon: <FileDown size={24} />,
      title: 'Exportación a PDF',
      description: 'Guarda y comparte tus diseños fácilmente exportándolos como archivos PDF.'
    },
    {
      icon: <MousePointer size={24} />,
      title: 'Interfaz Intuitiva',
      description: 'Nuestra interfaz está diseñada para ser accesible para todos, desde principiantes hasta expertos.'
    },
    {
      icon: <Infinity size={24} />,
      title: 'Acceso Ilimitado',
      description: 'Regístrate para obtener acceso ilimitado a la generación de arreglos florales.'
    }
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-b from-white to-floral-cream/20">
      <div className="section-container">
        <div className="text-center mb-16">
          <AnimatedText
            as="p"
            text="CARACTERÍSTICAS"
            animation="slideDown"
            className="text-sm font-semibold tracking-wider text-primary mb-3"
          />
          <AnimatedText
            as="h2"
            text="Todo lo que necesitas para crear arreglos florales increíbles"
            animation="slideUp"
            className="section-heading max-w-3xl mx-auto"
          />
          <AnimatedText
            as="p"
            text="Nuestra aplicación está diseñada para ayudarte a crear arreglos florales únicos y personalizados con facilidad."
            animation="slideUp"
            delay={100}
            className="section-subheading"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
