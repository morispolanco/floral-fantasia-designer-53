
import React, { useEffect, useState } from 'react';
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
  // Add more images as needed
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
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {galleryImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative rounded-3xl shadow-xl overflow-hidden">
                <img 
                  src={image} 
                  alt={`Arreglo floral ${index + 1}`} 
                  className="w-full h-auto object-cover mx-auto"
                  style={{ maxHeight: '80vh' }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
        <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
      </Carousel>
      
      {/* Floating info card */}
      <div className="absolute -top-3 -right-3 md:-top-6 md:-right-6 glass px-4 py-3 md:px-6 md:py-4 rounded-2xl shadow-sm max-w-xs z-10">
        <p className="text-sm md:text-base font-medium">✨ Diseña arreglos florales increíbles con un solo clic</p>
      </div>
    </div>
  );
};

export default Gallery;
