
import { useState, useEffect, useRef, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: string;
  threshold?: number;
  delay?: number;
}

export function AnimateOnScroll({ 
  children, 
  className = "", 
  animation = "fade-in", 
  threshold = 0.1,
  delay = 0 
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px',
      }
    );
    
    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);
  
  const style = {
    opacity: 0,
    transform: animation.includes('fade-in') ? 'translateY(20px)' : animation.includes('slide-in') ? 'translateX(-20px)' : 'none',
    transitionDelay: `${delay}ms`
  };
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${isVisible ? animation : ''}`}
      style={isVisible ? { transitionDelay: `${delay}ms` } : style}
    >
      {children}
    </div>
  );
}
