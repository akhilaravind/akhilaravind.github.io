import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  as?: 'h1' | 'h2';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
  as = 'h2',
}) => {
  const HeadingTag = as;

  return (
    <div className={`mb-10 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <HeadingTag className="text-3xl font-extrabold text-[#2B2B2B] tracking-tight">
        {title}
      </HeadingTag>
      {subtitle && (
        <p className="mt-3 text-[#595959] text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
