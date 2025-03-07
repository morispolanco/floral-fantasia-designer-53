
import React from 'react';
import { Flower2, Github, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Producto',
      links: [
        { name: 'Características', href: '#features' },
        { name: 'Precios', href: '#' },
        { name: 'Demo', href: '#demo' },
        { name: 'Recursos', href: '#' }
      ]
    },
    {
      title: 'Compañía',
      links: [
        { name: 'Acerca de', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Contacto', href: '#' },
        { name: 'Carreras', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Términos', href: '#' },
        { name: 'Privacidad', href: '#' },
        { name: 'Cookies', href: '#' }
      ]
    }
  ];

  return (
    <footer className="bg-white pt-16 pb-6 border-t border-gray-100">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Flower2 className="h-8 w-8 text-primary" />
              <span className="font-semibold text-lg">Floral Designer</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Crea arreglos florales únicos y personalizados con nuestra aplicación intuitiva y fácil de usar.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Twitter size={18} />, label: 'Twitter' },
                { icon: <Facebook size={18} />, label: 'Facebook' },
                { icon: <Instagram size={18} />, label: 'Instagram' },
                { icon: <Github size={18} />, label: 'GitHub' }
              ].map((social, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((group, i) => (
            <div key={i}>
              <h3 className="font-medium text-foreground mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link, j) => (
                  <li key={j}>
                    <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {year} Floral Designer. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Términos
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacidad
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
