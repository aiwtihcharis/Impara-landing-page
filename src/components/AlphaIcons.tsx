import React from 'react';

const GradientDefs = () => (
  <defs>
    <linearGradient id="alphaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#818cf8" />
      <stop offset="50%" stopColor="#3b82f6" />
      <stop offset="100%" stopColor="#1e40af" />
    </linearGradient>
  </defs>
);

export const LayersIcon = ({ className, ...props }: any) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <GradientDefs />
    <path d="M50 20 L80 35 L50 50 L20 35 Z" fill="url(#alphaGrad)" fillOpacity="0.8" />
    <path d="M50 40 L80 55 L50 70 L20 55 Z" fill="url(#alphaGrad)" fillOpacity="0.6" />
    <path d="M50 60 L80 75 L50 90 L20 75 Z" fill="url(#alphaGrad)" fillOpacity="0.4" />
  </svg>
);

export const FlowIcon = ({ className, ...props }: any) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <GradientDefs />
    <circle cx="50" cy="50" r="40" stroke="url(#alphaGrad)" strokeWidth="1" opacity="0.4"/>
    <circle cx="50" cy="50" r="30" stroke="url(#alphaGrad)" strokeWidth="1.5" opacity="0.6"/>
    <circle cx="50" cy="50" r="20" stroke="url(#alphaGrad)" strokeWidth="2" opacity="0.8"/>
    <circle cx="50" cy="50" r="10" fill="url(#alphaGrad)"/>
  </svg>
);

export const MatrixIcon = ({ className, ...props }: any) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <GradientDefs />
    <rect x="20" y="20" width="25" height="25" fill="url(#alphaGrad)" fillOpacity="0.8" rx="4"/>
    <rect x="55" y="20" width="25" height="25" fill="url(#alphaGrad)" fillOpacity="0.6" rx="4"/>
    <rect x="20" y="55" width="25" height="25" fill="url(#alphaGrad)" fillOpacity="0.6" rx="4"/>
    <rect x="55" y="55" width="25" height="25" fill="url(#alphaGrad)" fillOpacity="0.4" rx="4"/>
  </svg>
);

export const DeployIcon = ({ className, ...props }: any) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <GradientDefs />
    <path d="M20 50 L40 30 L40 45 L80 45 L80 55 L40 55 L40 70 Z" fill="url(#alphaGrad)" fillOpacity="0.7"/>
    <circle cx="20" cy="50" r="15" fill="none" stroke="url(#alphaGrad)" strokeWidth="3" opacity="0.5"/>
  </svg>
);

export const EvolveIcon = ({ className, ...props }: any) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <GradientDefs />
    <circle cx="50" cy="50" r="25" fill="url(#alphaGrad)" fillOpacity="0.8"/>
    <ellipse cx="50" cy="50" rx="45" ry="15" stroke="url(#alphaGrad)" strokeWidth="2" transform="rotate(45 50 50)" opacity="0.6"/>
    <ellipse cx="50" cy="50" rx="45" ry="15" stroke="url(#alphaGrad)" strokeWidth="2" transform="rotate(-45 50 50)" opacity="0.6"/>
  </svg>
);

export const DimensionIcon = ({ className, ...props }: any) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <GradientDefs />
    <path d="M50 20 L80 35 L80 65 L50 80 L20 65 L20 35 Z" stroke="url(#alphaGrad)" strokeWidth="2" fill="url(#alphaGrad)" fillOpacity="0.2"/>
    <path d="M50 20 L50 50 L80 35 M50 50 L20 35 M50 50 L50 80" stroke="url(#alphaGrad)" strokeWidth="2"/>
    <polygon points="50,20 80,35 50,50 20,35" fill="url(#alphaGrad)" fillOpacity="0.5"/>
  </svg>
);

export const VolumeIcon = ({ className, ...props }: any) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <GradientDefs />
    <path d="M10 80 Q 30 80 50 20 Q 70 80 90 80" stroke="url(#alphaGrad)" strokeWidth="3"/>
    <path d="M10 80 Q 30 80 50 20 Q 70 80 90 80 L 90 90 L 10 90 Z" fill="url(#alphaGrad)" fillOpacity="0.3"/>
  </svg>
);
