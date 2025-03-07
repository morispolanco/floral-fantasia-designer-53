
import React from 'react';
import { UserPlus, DollarSign, PercentIcon, Share2 } from 'lucide-react';
import Button from './Button';
import AnimatedText from './AnimatedText';

const AffiliateProgram = () => {
  return (
    <section id="afiliados" className="section-padding bg-floral-cream/30">
      <div className="section-container">
        <div className="text-center mb-12">
          <AnimatedText
            as="h2"
            text="Programa de Afiliados"
            animation="slideUp"
            className="font-heading section-heading"
          />
          <AnimatedText
            as="p"
            text="Gana dinero compartiendo la magia de los arreglos florales"
            animation="slideUp"
            delay={100}
            className="section-subheading max-w-2xl mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="reveal">
            <div className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full"></div>
              
              <h3 className="text-2xl font-heading mb-6">¿Cómo funciona?</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full">
                    <UserPlus size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Invita a amigos y colegas</h4>
                    <p className="text-muted-foreground text-sm">Comparte tu enlace único de afiliado con personas interesadas en diseño floral.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full">
                    <PercentIcon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Gana comisiones generosas</h4>
                    <p className="text-muted-foreground text-sm">Recibe el <span className="font-bold text-primary">40%</span> de cada suscripción anual ($79), equivalente a <span className="font-bold text-primary">$31.60</span> por cada referido.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="mr-4 p-2 bg-primary/10 rounded-full">
                    <DollarSign size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium">Pagos trimestrales</h4>
                    <p className="text-muted-foreground text-sm">Los pagos se realizan trimestralmente a través de PayPal o transferencia bancaria.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="reveal" style={{ animationDelay: '200ms' }}>
            <div className="bg-gradient-to-br from-floral-lilac/30 to-floral-pink/30 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading mb-6">Comienza a ganar hoy</h3>
              <p className="mb-6">Únete a nuestro programa de afiliados y convierte tu pasión por el diseño floral en ingresos extra.</p>
              
              <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                <h4 className="font-medium mb-2">Cálculo rápido:</h4>
                <p className="text-sm text-muted-foreground mb-4">Suscripción anual: <span className="font-medium">$79</span></p>
                <p className="text-sm text-muted-foreground mb-4">Tu comisión (40%): <span className="font-medium text-primary">$31.60</span></p>
                <p className="text-sm mb-2">Si refieres a:</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex justify-between text-sm">
                    <span>5 personas</span>
                    <span className="font-medium">$158</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span>10 personas</span>
                    <span className="font-medium">$316</span>
                  </li>
                  <li className="flex justify-between text-sm">
                    <span>20 personas</span>
                    <span className="font-medium">$632</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <a 
                  href="https://form.jotform.com/250656769818070" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    icon={<Share2 size={18} />} 
                    iconPosition="left"
                  >
                    Regístrate como Afiliado
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AffiliateProgram;
