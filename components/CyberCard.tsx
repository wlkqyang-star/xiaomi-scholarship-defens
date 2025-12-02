import React, { useState } from 'react';

interface CyberCardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  highlight?: boolean;
  className?: string;
}

const CyberCard: React.FC<CyberCardProps> = ({ title, subtitle, children, highlight = false, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`glass-panel rounded-xl overflow-hidden transition-all duration-500 group hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(157,179,229,0.2)] ${
        highlight 
          ? 'border-azure-orange/50 bg-azure-orange/5' 
          : 'border-white/10 hover:border-azure-card/40'
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className={`px-5 py-4 flex justify-between items-center border-b border-white/5 ${highlight ? 'bg-azure-orange/10' : 'bg-azure-bg-dark/30'}`}>
        <h3 className={`font-sans text-sm font-bold truncate pr-4 ${highlight ? 'text-azure-orange' : 'text-azure-cream'}`}>
          {title}
        </h3>
        {subtitle && <span className="text-xs text-azure-card/80 font-mono tracking-wider">{subtitle}</span>}
      </div>

      {/* Content */}
      <div className="p-5">
        {children}
      </div>

      {/* Hover glow effect */}
      <div 
        className={`absolute inset-0 bg-gradient-to-tr from-azure-card/5 via-transparent to-transparent pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      ></div>
    </div>
  );
};

export default CyberCard;