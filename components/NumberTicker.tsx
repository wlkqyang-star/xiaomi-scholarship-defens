import React, { useEffect, useState, useRef } from 'react';

const NumberTicker: React.FC<{ value: string; className?: string }> = ({ value, className }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = numericValue;
          const duration = 2000;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out quart
            const ease = 1 - Math.pow(1 - progress, 4);
            
            const current = Math.floor(start + (end - start) * ease);
            setDisplayValue(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [numericValue]);

  return (
    <span ref={elementRef} className={`font-mono ${className}`}>
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
};

export default NumberTicker;