import React from 'react';

// Common props for icons
type IconProps = React.SVGProps<SVGSVGElement>;

export const BaggageIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0"></path>
    <path d="M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"></path>
    <path d="M10 6h4"></path>
  </svg>
);

export const ClockIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export const AlertTriangleIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
);

export const LatamLogoIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg" fill="#003876" {...props}>
        <text x="10" y="45" fontFamily="Helvetica, Arial, sans-serif" fontSize="40" fontWeight="bold">LATAM</text>
    </svg>
);

export const SkyLogoIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 100 25" xmlns="http://www.w3.org/2000/svg" {...props}>
        <text x="5" y="20" fontFamily="Verdana, sans-serif" fontSize="20" fontWeight="bold" fill="#00AEEF">
            <tspan fill="#F58220">S</tspan>ky
        </text>
    </svg>
);

export const BoaLogoIcon: React.FC<IconProps> = (props) => (
    <svg viewBox="0 0 100 25" xmlns="http://www.w3.org/2000/svg" fill="#00529B" {...props}>
        <text x="5" y="20" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold">
            BoA
        </text>
    </svg>
);

export const HourglassIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 22h14"/>
    <path d="M5 2h14"/>
    <path d="M17 2v5l-3.3 3.3a1.5 1.5 0 0 1-2.4 0L8 7V2"/>
    <path d="M17 22v-5l-3.3-3.3a1.5 1.5 0 0 0-2.4 0L8 17v5"/>
  </svg>
);

export const MapPinIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export const SuitcaseIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
  
export const BackpackIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M5 20V10a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z" />
        <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M9 14h6" />
    </svg>
);

// FIX: Add CalendarIcon component.
export const CalendarIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

// FIX: Add RefreshIcon component.
export const RefreshIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M23 4v6h-6"></path>
    <path d="M1 20v-6h6"></path>
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10"></path>
    <path d="M20.49 15a9 9 0 0 1-14.85 3.36L1 14"></path>
  </svg>
);

// FIX: Add PlaneTakeoffIcon component.
export const PlaneTakeoffIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M2 22h20"/>
    <path d="M6.36 17.43 3.41 14.48a2.3 2.3 0 0 1 0-3.25l2.49-2.49a2.3 2.3 0 0 1 3.25 0l2.83 2.83"/>
    <path d="m21.29 12.7-5.3-5.3a2.3 2.3 0 0 0-3.25 0l-1.18 1.18"/>
    <path d="m11.5 16.5 4.5-4.5"/>
  </svg>
);

// FIX: Add ExternalLinkIcon component.
export const ExternalLinkIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

// FIX: Add CogIcon component.
export const CogIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94s-.02-.64-.07-.94l2.03-1.58a.5.5 0 0 0 .12-.61l-1.92-3.32a.5.5 0 0 0-.61-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.5.5 0 0 0-.5-.44h-3.84a.5.5 0 0 0-.5.44l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.5.5 0 0 0-.61.22l-1.92 3.32a.5.5 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.5.5 0 0 0-.12.61l1.92 3.32a.5.5 0 0 0 .61.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54a.5.5 0 0 0 .5.44h3.84a.5.5 0 0 0 .5-.44l.36 2.54c.59-.24 1.13-.56 1.62-.94l2.39.96a.5.5 0 0 0 .61-.22l1.92-3.32a.5.5 0 0 0-.12-.61l-2.03-1.58z"></path>
        <circle cx="12" cy="12" r="3"></circle>
    </svg>
);
