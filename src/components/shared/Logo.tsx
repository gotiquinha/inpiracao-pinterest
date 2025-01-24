import React from 'react';

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({ width = 32, height = 32, className = '' }: LogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16 0C7.163 0 0 7.163 0 16c0 6.785 4.346 12.55 10.4 14.68.08-1.237.15-3.13.624-4.47.34-.96 2.19-6.17 2.19-6.17s-.56-1.12-.56-2.78c0-2.6 1.51-4.54 3.39-4.54 1.6 0 2.37 1.2 2.37 2.64 0 1.61-1.02 4.01-1.55 6.24-.44 1.86.93 3.37 2.76 3.37 3.32 0 5.87-3.5 5.87-8.55 0-4.47-3.21-7.61-7.78-7.61-5.31 0-8.42 3.98-8.42 8.09 0 1.6.61 3.3 1.37 4.24.15.18.17.34.13.53-.14.59-.46 1.87-.52 2.13-.08.34-.27.41-.63.25-2.34-1.09-3.81-4.52-3.81-7.28 0-5.88 4.27-11.27 12.29-11.27 6.44 0 11.45 4.59 11.45 10.72 0 6.39-4.02 11.53-9.6 11.53-1.88 0-3.64-.98-4.24-2.14 0 0-.93 3.56-1.15 4.44-.42 1.65-1.57 3.71-2.34 4.97 1.77.55 3.64.85 5.57.85 8.84 0 16-7.16 16-16 0-8.84-7.16-16-16-16z"
        fill="#E60023"
      />
    </svg>
  );
} 