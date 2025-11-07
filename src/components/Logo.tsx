interface LogoProps {
  className?: string;
  animate?: boolean;
}

export function Logo({ className = "", animate = true }: LogoProps) {
  return (
    <svg
      viewBox="0 0 500 150"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#22d3ee', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
        </linearGradient>

        {animate && (
          <style>
            {`
              @keyframes arrowSlide1 {
                0%, 100% { transform: translateX(0px); opacity: 0.6; }
                50% { transform: translateX(10px); opacity: 1; }
              }
              @keyframes arrowSlide2 {
                0%, 100% { transform: translateX(0px); opacity: 0.7; }
                50% { transform: translateX(10px); opacity: 1; }
              }
              @keyframes arrowSlide3 {
                0%, 100% { transform: translateX(0px); opacity: 0.8; }
                50% { transform: translateX(10px); opacity: 1; }
              }
              .arrow1 { animation: arrowSlide1 2s ease-in-out infinite; }
              .arrow2 { animation: arrowSlide2 2s ease-in-out 0.2s infinite; }
              .arrow3 { animation: arrowSlide3 2s ease-in-out 0.4s infinite; }
            `}
          </style>
        )}
      </defs>

      <text
        x="10"
        y="105"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="100"
        fontWeight="700"
        fill="#0ea5e9"
      >
        goAI
      </text>

      <g className={animate ? "arrow1" : ""} style={{ transformOrigin: '320px 75px' }}>
        <path
          d="M 265 30 L 330 75 L 265 120 L 280 120 L 345 75 L 280 30 Z"
          fill="url(#arrowGradient)"
          opacity={animate ? "0.6" : "0.8"}
        />
      </g>

      <g className={animate ? "arrow2" : ""} style={{ transformOrigin: '380px 75px' }}>
        <path
          d="M 325 30 L 390 75 L 325 120 L 340 120 L 405 75 L 340 30 Z"
          fill="url(#arrowGradient)"
          opacity={animate ? "0.7" : "0.9"}
        />
      </g>

      <g className={animate ? "arrow3" : ""} style={{ transformOrigin: '440px 75px' }}>
        <path
          d="M 385 30 L 450 75 L 385 120 L 400 120 L 465 75 L 400 30 Z"
          fill="url(#arrowGradient)"
          opacity={animate ? "0.8" : "1"}
        />
      </g>
    </svg>
  );
}
