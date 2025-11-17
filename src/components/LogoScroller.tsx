import { useState } from 'react';

interface LogoScrollerProps {
  logos: Array<{
    name: string;
    src: string;
    alt: string;
  }>;
  speed?: 'slow' | 'normal' | 'fast';
}

export function LogoScroller({ logos, speed = 'normal' }: LogoScrollerProps) {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];
  
  const speedClass = {
    slow: 'animate-scroll-slow',
    normal: 'animate-scroll',
    fast: 'animate-scroll-fast'
  }[speed];

  return (
    <div className="relative w-full overflow-hidden py-12">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent z-10 pointer-events-none"></div>
      
      <div className={`flex gap-16 items-center ${speedClass} will-change-transform`} style={{ width: 'max-content' }}>
        {duplicatedLogos.map((logo, index) => (
          <LogoItem key={`${logo.name}-${index}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}

function LogoItem({ logo }: { logo: { name: string; src: string; alt: string } }) {
  const [imageError, setImageError] = useState(false);
  
  // Apply smaller max-width for Itron logo to match other logos
  const isItron = logo.name.toLowerCase() === 'itron';
  const imgClassName = isItron 
    ? "h-full w-full object-contain opacity-90 hover:opacity-100 transition-opacity max-w-[140px] md:max-w-[160px]"
    : "h-full w-full object-contain opacity-90 hover:opacity-100 transition-opacity";

  return (
    <div className="flex-shrink-0 flex items-center justify-center h-28 md:h-32 w-64 md:w-80 px-8">
      {!imageError ? (
        <img
          src={logo.src}
          alt={logo.alt}
          className={imgClassName}
          loading="lazy"
          onError={() => setImageError(true)}
        />
      ) : (
        <span className="text-slate-400 text-lg md:text-xl font-semibold text-center whitespace-nowrap">
          {logo.name}
        </span>
      )}
    </div>
  );
}

