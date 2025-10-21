"use client";

interface AnimatedIconProps {
  className?: string;
  delay?: number;
}

export function AnimatedTrybIcon({
  className = "",
  delay = 0,
}: AnimatedIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`w-16 h-16 ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        .icon-float {
          animation: float 3s ease-in-out infinite;
        }
        .icon-rotate {
          animation: rotate 20s linear infinite;
        }
        .icon-pulse {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
      <g className="icon-float">
        <path
          d="M 30 50 L 40 35 L 50 50 L 40 65 Z"
          fill="#ff5b04"
          className="icon-pulse"
        />
        <path
          d="M 50 30 L 60 45 L 50 60 L 40 45 Z"
          fill="#025356"
          opacity="0.7"
        />
      </g>
    </svg>
  );
}

export function AnimatedGradientBg() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-10 dark:opacity-5"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
    >
      <style>{`
        @keyframes gradient-shift {
          0% { offset: 0%; }
          100% { offset: 100%; }
        }
        .gradient-line {
          animation: gradient-shift 8s linear infinite;
          stroke-width: 2;
        }
      `}</style>
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#025356" />
          <stop offset="100%" stopColor="#ff5b04" />
        </linearGradient>
      </defs>
      <circle
        cx="200"
        cy="150"
        r="100"
        fill="none"
        stroke="url(#grad1)"
        className="gradient-line"
      />
      <circle
        cx="1000"
        cy="450"
        r="150"
        fill="none"
        stroke="url(#grad1)"
        className="gradient-line"
      />
      <path
        d="M 0 300 Q 300 200 600 300 T 1200 300"
        fill="none"
        stroke="url(#grad1)"
        className="gradient-line"
      />
    </svg>
  );
}

export function AnimatedDots() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 100 100">
      <style>{`
        @keyframes dot-bounce {
          0%, 100% { cy: 50; opacity: 1; }
          50% { cy: 30; opacity: 0.5; }
        }
        .dot-1 { animation: dot-bounce 1.4s infinite; }
        .dot-2 { animation: dot-bounce 1.4s infinite 0.2s; }
        .dot-3 { animation: dot-bounce 1.4s infinite 0.4s; }
      `}</style>
      <circle cx="25" cy="50" r="8" fill="#025356" className="dot-1" />
      <circle cx="50" cy="50" r="8" fill="#ff5b04" className="dot-2" />
      <circle cx="75" cy="50" r="8" fill="#0a7a7f" className="dot-3" />
    </svg>
  );
}
