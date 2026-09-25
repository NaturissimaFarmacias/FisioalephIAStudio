import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'isotipo' | 'light';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
}) => {
  const isLight = variant === 'light';
  const textColor = isLight ? '#ffffff' : '#003441';
  const accentColor = isLight ? '#5ce9fe' : '#0f4c5c';

  const heights = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Precision SVG Isotype of Fisioaleph astronaut on curved horizon */}
      <svg
        viewBox="0 0 140 100"
        className={`${heights[size]} w-auto shrink-0`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Fisioaleph Isotipo"
      >
        {/* Curved planet horizon */}
        <path
          d="M 12 76 Q 70 38 128 76"
          stroke={accentColor}
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Flag on the right */}
        <line x1="114" y1="67" x2="114" y2="52" stroke={accentColor} strokeWidth="1.8" />
        <polygon points="114,52 124,56 114,61" fill={accentColor} />

        {/* Astronaut runner symbol (F silhouette) */}
        <g transform="translate(48, 10)">
          {/* Helmet with antenna */}
          <rect x="14" y="2" width="16" height="15" rx="7" stroke={accentColor} strokeWidth="2.8" fill={isLight ? '#003441' : '#ffffff'} />
          <line x1="22" y1="2" x2="22" y2="-4" stroke={accentColor} strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="22" cy="9.5" rx="5.5" ry="4.5" fill={accentColor} />

          {/* Torso & dynamic forward run */}
          <path
            d="M 18 18 L 26 18 L 24 34 L 14 34 Z"
            fill={accentColor}
          />
          {/* Front horizontal arm */}
          <path
            d="M 23 20 L 37 20 C 39 20 40 22 39 24 C 38 25 36 25 35 25 L 23 25 Z"
            fill={accentColor}
          />
          {/* Back arm */}
          <path
            d="M 17 21 L 10 27 C 9 28 7 28 7 26 C 7 25 8 23 10 22 L 18 19 Z"
            fill={accentColor}
          />
          {/* Back bent leg (forming the 'F' bar) */}
          <path
            d="M 22 28 L 32 28 C 34 28 35 30 35 32 L 35 38 C 35 40 33 40 32 39 L 30 35 L 22 35 Z"
            fill={accentColor}
          />
          {/* Forward running leg planted firmly */}
          <path
            d="M 16 34 L 16 48 C 16 52 12 55 7 55 L 4 55 C 2.5 55 2 53.5 3 52 C 4 50 6 50 8 50 L 11 50 L 11 34 Z"
            fill={accentColor}
          />
        </g>
      </svg>

      {variant !== 'isotipo' && (
        <div className="flex flex-col justify-center">
          <span
            className="font-bold tracking-tight uppercase leading-none"
            style={{
              fontFamily: '"Space Grotesk", sans-serif',
              fontSize: size === 'sm' ? '18px' : size === 'lg' ? '24px' : '20px',
              color: textColor,
              letterSpacing: '0.02em',
            }}
          >
            FISIOALEPH
          </span>
          <span
            className="text-[9px] tracking-wider uppercase font-medium mt-0.5"
            style={{
              fontFamily: '"JetBrains Mono", monospace',
              color: isLight ? 'rgba(255,255,255,0.75)' : '#006874',
            }}
          >
            Rehabilitación &amp; Movimiento
          </span>
        </div>
      )}
    </div>
  );
};
