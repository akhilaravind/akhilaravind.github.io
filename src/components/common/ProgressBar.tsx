import React from 'react';

interface ProgressBarProps {
  label: string;
  percentage: number;
  sublabel?: string;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  percentage,
  sublabel,
  className = '',
}) => {
  return (
    <div className={`space-y-1.5 ${className}`}>
      <div className="flex justify-between items-center text-xs">
        <span className="font-medium text-[#2B2B2B]">{label}</span>
        <span className="text-[#767676] font-semibold">{percentage}%</span>
      </div>
      <div className="h-1.5 w-full bg-[#F0F0F6] rounded-full overflow-hidden p-[1px] border border-[#E4E4E8]">
        <div
          className="h-full bg-[#FFB400] rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${Math.min(Math.max(percentage, 0), 100)}%` }}
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${label} proficiency: ${percentage}%`}
        />
      </div>
      {sublabel && (
        <span className="text-[10px] text-[#A0A0A0] block -mt-0.5">{sublabel}</span>
      )}
    </div>
  );
};
