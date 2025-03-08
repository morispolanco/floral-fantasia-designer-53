
import React, { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Array of image paths for the gallery
const galleryImages = [
  "/lovable-uploads/70d95cb8-a853-423d-8768-594a49e23f2d.png",
  "/lovable-uploads/a04b268a-bf0d-4735-805b-f24bce29e30f.png",
  "/lovable-uploads/34a09cb8-2331-40cc-8a93-7b9170109b26.png",
  "/lovable-uploads/ef071a0f-363a-4f2a-8e2f-3c19505c2156.png",
  "/lovable-uploads/3d07645f-688f-4844-9907-3dc4a02e4954.png",
  "/lovable-uploads/d645c929-7894-4651-8d46-2ee628efc2c2.png",
  "/lovable-uploads/263e52cb-d9ac-4ee7-bbdb-285000687bab.png",
  "/lovable-uploads/9c14c1d5-ffc9-4f8a-9484-93cbc84215eb.png",
  "/lovable-uploads/aceaa3df-551b-482c-9345-f4fbbad0c158.png"
];

interface GalleryProps {
  className?: string;
}

const Gallery = ({ className }: GalleryProps) => {
  const [mounted, setMounted] = useState(false);
  
  // Handle mounting to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Autoplay plugin configuration
  const autoplayOptions = {
    delay: 3000,
    stopOnInteraction: false,
    rootNode: (emblaRoot: any) => emblaRoot.parentElement,
  };

  // Initialize carousel with autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)]);

  if (!mounted) {
    return (
      <div className="relative mx-auto rounded-3xl shadow-xl overflow-hidden" style={{ maxHeight: '80vh' }}>
        <img 
          src={galleryImages[0]} 
          alt="Arreglo floral" 
          className="w-full h-auto object-cover"
        />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <div className="w-full max-w-4xl mx-auto">
        <div className="overflow-hidden rounded-3xl shadow-xl" ref={emblaRef}>
          <div className="flex">
            {galleryImages.map((image, index) => (
              <div 
                className="flex-[0_0_100%] min-w-0 relative" 
                key={index}
              >
                <img 
                  src={image} 
                  alt={`Arreglo floral ${index + 1}`} 
                  className="w-full h-auto object-cover mx-auto"
                  style={{ maxHeight: '80vh' }}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Interactive navigation buttons */}
        <div className="mt-4 flex justify-center gap-2">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full transition-all duration-300 focus:outline-none"
              style={{
                backgroundColor: emblaApi?.selectedScrollSnap() === index ? '#D946EF' : '#e2e8f0',
                transform: emblaApi?.selectedScrollSnap() === index ? 'scale(1.5)' : 'scale(1)',
              }}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Ir a la imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Floating info card */}
      <div className="absolute -top-3 -right-3 md:-top-6 md:-right-6 bg-white/80 backdrop-blur-sm px-4 py-3 md:px-6 md:py-4 rounded-2xl shadow-sm max-w-xs z-10">
        <p className="text-sm md:text-base font-medium">✨ Diseña arreglos florales increíbles con un solo clic</p>
      </div>
    </div>
  );
};

export default Gallery;
