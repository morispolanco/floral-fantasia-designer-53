
import React, { useEffect, useRef } from 'react';
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  animation?: 'fade' | 'slideUp' | 'slideDown' | 'slideLeft' | 'slideRight';
  delay?: number;
  duration?: number;
  as?: React.ElementType;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  animation = 'fade',
  delay = 0,
  duration = 500,
  as: Component = 'span'
}) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-' + animation);
              entry.target.classList.remove('opacity-0');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, [animation, delay]);

  return (
    <Component
      ref={textRef}
      className={cn('opacity-0', className)}
      style={{
        animationDuration: `${duration}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {text}
    </Component>
  );
};

export default AnimatedText;
