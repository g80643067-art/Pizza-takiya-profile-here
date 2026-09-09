import React from 'react';

interface VegBadgeProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const VegBadge: React.FC<VegBadgeProps> = ({ className = '', size = 'md', showLabel = false }) => {
  const boxSizes = {
    sm: 'w-3.5 h-3.5 p-0.5',
    md: 'w-4 h-4 p-0.5',
    lg: 'w-5 h-5 p-0.5',
  };

  const dotSizes = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5',
  };

  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <div 
        className={`border border-emerald-500/80 bg-[#1C1916] flex items-center justify-center ${boxSizes[size]}`}
        title="100% Vegetarian"
      >
        <div className={`bg-emerald-500 ${dotSizes[size]}`} />
      </div>
      {showLabel && (
        <span className="text-xs font-semibold text-emerald-400 tracking-wide">
          100% VEG
        </span>
      )}
    </div>
  );
};
