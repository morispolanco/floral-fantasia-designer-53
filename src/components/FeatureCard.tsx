
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedText from './AnimatedText';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  className?: string;
}

const FeatureCard = ({
  title,
  description,
  icon,
  delay = 0,
  className
}: FeatureCardProps) => {
  return (
    <div 
      className={cn(
        'glass-card p-6 transition-all duration-300 hover:shadow-md',
        className
      )}
    >
      <div className="flex flex-col items-start">
        <div className="rounded-full p-3 bg-primary/10 text-primary-foreground/80 mb-5">
          {icon}
        </div>
        <AnimatedText
          as="h3"
          text={title}
          animation="slideUp"
          delay={delay}
          className="text-xl font-semibold mb-3"
        />
        <AnimatedText
          as="p"
          text={description}
          animation="slideUp"
          delay={delay + 100}
          className="text-muted-foreground"
        />
      </div>
    </div>
  );
};

export default FeatureCard;
