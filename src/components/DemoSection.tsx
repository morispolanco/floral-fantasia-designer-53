
import React, { useState } from 'react';
import { Copy, CheckCheck, ExternalLink } from 'lucide-react';
import Button from './Button';
import AnimatedText from './AnimatedText';

const DemoSection = () => {
  const [copied, setCopied] = useState<'username' | 'password' | null>(null);

  const credentials = {
    username: 'admin',
    password: 'admin123'
  };

  const copyToClipboard = (text: string, type: 'username' | 'password') => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="demo" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-floral-sage/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-floral-pink/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedText
              as="p"
              text="VERSIÓN DE DEMO"
              animation="slideDown"
              className="text-sm font-semibold tracking-wider text-primary mb-3"
            />
            <AnimatedText
              as="h2"
              text="Prueba nuestra aplicación sin registrarte"
              animation="slideUp"
              className="font-heading section-heading"
            />
            <AnimatedText
              as="p"
              text="Utiliza las siguientes credenciales para acceder a la versión de demostración y generar hasta 5 arreglos florales gratuitos por mes."
              animation="slideUp"
              delay={100}
              className="section-subheading"
            />
          </div>

          <div className="glass-card p-8 animate-scaleUp">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Credenciales de acceso</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Nombre de usuario</label>
                    <div className="flex items-center justify-between glass p-3 rounded-lg">
                      <span className="font-mono">{credentials.username}</span>
                      <button 
                        onClick={() => copyToClipboard(credentials.username, 'username')}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Copiar nombre de usuario"
                      >
                        {copied === 'username' ? (
                          <CheckCheck size={18} className="text-green-500" />
                        ) : (
                          <Copy size={18} />
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-1">Contraseña</label>
                    <div className="flex items-center justify-between glass p-3 rounded-lg">
                      <span className="font-mono">{credentials.password}</span>
                      <button 
                        onClick={() => copyToClipboard(credentials.password, 'password')}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Copiar contraseña"
                      >
                        {copied === 'password' ? (
                          <CheckCheck size={18} className="text-green-500" />
                        ) : (
                          <Copy size={18} />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <a href="https://florales.streamlit.app/" target="_blank" rel="noopener noreferrer" className="block w-full">
                    <Button size="lg" className="w-full">
                      Acceder a la Demo 
                      <ExternalLink size={16} className="ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <h4 className="text-lg font-medium mb-4">¿Qué puedes hacer con la demo?</h4>
                <ul className="space-y-3">
                  {[
                    'Diseñar hasta 5 arreglos florales personalizados por mes',
                    'Explorar todas las funcionalidades de la aplicación',
                    'Visualizar tus diseños con la IA generativa',
                    'Descubrir flores disponibles por región'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <h4 className="text-lg font-medium mb-3">Limitaciones de la demo:</h4>
                  <ul className="space-y-2">
                    {[
                      'Sin exportación a PDF',
                      'Máximo 5 diseños por mes'
                    ].map((limitation, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-muted-foreground mr-2">•</span>
                        <span className="text-muted-foreground">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
