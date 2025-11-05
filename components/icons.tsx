import React from 'react';

export const LatamLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 0H48V48H0V0Z" fill="white" fillOpacity="0.01"/>
    <path d="M12 11L4 24H12L20 11H12Z" fill="#0033A0"/>
    <path d="M21 11L13 24H21L29 11H21Z" fill="#0033A0"/>
    <path d="M29 11L21 24H29L37 11H29Z" fill="#D81E05"/>
    <path d="M38 11L30 24H38L46 11H38Z" fill="#D81E05"/>
  </svg>
);

export const SkyLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M18.913 6.96313H21.4285V4.76172H14.1428V6.96313H16.6067C15.2287 11.6441 12.0125 15.111 8.57139 17.0709L10.2857 18.9998L10.3242 19.0383C14.3999 16.7141 18.0035 12.6369 19.4632 6.96313H18.913ZM7.14282 14.8569L9.17854 13.0355L4.49996 4.76172H2.57139L7.14282 14.8569Z" fill="#6c2bd9"/>
  </svg>
);

export const BoaLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#0033A0"/>
        <path d="m13.21 15.4-3.95-3.95a.996.996 0 1 1 1.41-1.41l2.22 2.22 4.68-4.68a.996.996 0 1 1 1.41 1.41L14.62 15.4a.996.996 0 0 1-1.41 0z" fill="#D81E05"/>
        <path d="M12.5,9.5 C12.5,9.22 12.72,9 13,9 L16,9 C16.28,9 16.5,9.22 16.5,9.5 C16.5,9.78 16.28,10 16,10 L13,10 C12.72,10 12.5,9.78 12.5,9.5 z" fill="#FFC72C"/>
    </svg>
);

export const JetSmartLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="45" fill="#0033A0" />
        <path d="M30 60 C 40 70, 60 70, 70 60" stroke="#FFFFFF" strokeWidth="8" fill="transparent" />
        <path d="M35 40 Q 50 25, 65 40" stroke="#D81E05" strokeWidth="8" fill="transparent" />
    </svg>
);

export const FlybondiLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="50" cy="50" r="45" fill="#FFD700" />
        <path d="M30,50 a20,20 0 1,1 40,0" fill="#000" />
        <circle cx="50" cy="50" r="10" fill="#FFD700" />
    </svg>
);

export const BrasilSulLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="200" height="50" rx="10" fill="#0033A0"/>
    <text x="100" y="35" fontFamily="Arial, sans-serif" fontSize="30" fill="white" textAnchor="middle">BRASILSUL</text>
  </svg>
);

export const NordesteLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="200" height="50" rx="10" fill="#228B22"/>
    <text x="100" y="35" fontFamily="Verdana, sans-serif" fontSize="28" fill="yellow" textAnchor="middle" fontWeight="bold">NORDESTE</text>
  </svg>
);

export const AguiaBrancaLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect width="200" height="50" rx="10" fill="#0073e6"/>
    <text x="100" y="35" fontFamily="Impact, sans-serif" fontSize="30" fill="white" textAnchor="middle">ÁGUIA BRANCA</text>
  </svg>
);


export const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

export const HourglassIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

export const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
  </svg>
);

export const AlertTriangleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
  </svg>
);

export const BackpackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 0a1.5 1.5 0 0 1-1.5-1.5V5.25a1.5 1.5 0 0 1 1.5-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5v.75m-1.5 0a1.5 1.5 0 0 0-1.5-1.5M4.5 9.75a4.5 4.5 0 0 1 4.5-4.5h6a4.5 4.5 0 0 1 4.5 4.5v9.75a1.5 1.5 0 0 1-1.5-1.5h-12a1.5 1.5 0 0 1-1.5-1.5V9.75Z" />
    </svg>
);

export const SuitcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0h15m-15 0a7.5 7.5 0 0 1 15 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 0 0 7.5 7.5h0a7.5 7.5 0 0 0 7.5-7.5M12 19.5v-7.5" />
    </svg>
);

export const BaggageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 1 3.375-3.375h9.75a3.375 3.375 0 0 1 3.375 3.375v1.875" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75V3.375A2.25 2.25 0 0 0 9.75 1.125h-3.75A2.25 2.25 0 0 0 3.75 3.375v6.375" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75h4.5v-.375c0-.621-.504-1.125-1.125-1.125H12.75" />
    </svg>
);

export const BusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V5.25a2.25 2.25 0 0 1 2.25-2.25h1.5a2.25 2.25 0 0 1 2.25 2.25v1.5m0 0a2.25 2.25 0 0 0 2.25 2.25H21a2.25 2.25 0 0 1 2.25 2.25v3.75a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 15.75V11.25a2.25 2.25 0 0 1 2.25-2.25H7.5a2.25 2.25 0 0 0 2.25-2.25M12 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-3.75 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </svg>
);

export const CarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 1 3.375-3.375h9.75a3.375 3.375 0 0 1 3.375 3.375v1.875m-1.5-9-3.75-3.75m0 0a3.75 3.75 0 1 0-5.303 0m5.303 0-3.75 3.75" />
    </svg>
);

export const TrainIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 1 3.375-3.375h9.75a3.375 3.375 0 0 1 3.375 3.375v1.875" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75V6.375a1.5 1.5 0 0 0-1.5-1.5H3.75a1.5 1.5 0 0 0-1.5 1.5v3.375M12 9.75h4.5m-4.5 0a1.5 1.5 0 0 1 1.5-1.5h1.5a1.5 1.5 0 0 1 1.5 1.5m-3 0v3.375m0 0a1.5 1.5 0 0 1-1.5 1.5h-1.5a1.5 1.5 0 0 1-1.5-1.5m3 0a1.5 1.5 0 0 0-1.5 1.5h-1.5a1.5 1.5 0 0 0-1.5-1.5m3 0h-3" />
    </svg>
);

export const DollarSignIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182.553-.44 1.282-.659 2.003-.659.725 0 1.45.22 2.003.659m-4.5 6.341a1.125 1.125 0 0 1-1.591 0l-1.591-1.591a1.125 1.125 0 0 1 0-1.591l1.591-1.591a1.125 1.125 0 0 1 1.591 0l1.591 1.591a1.125 1.125 0 0 1 0 1.591l-1.591 1.591Zm12-1.591a1.125 1.125 0 0 1-1.591 0l-1.591-1.591a1.125 1.125 0 0 1 0-1.591l1.591-1.591a1.125 1.125 0 0 1 1.591 0l1.591 1.591a1.125 1.125 0 0 1 0 1.591l-1.591 1.591Z" />
    </svg>
);

export const ActivityIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h.007v.007H3.75V12Zm4.125 0h.007v.007H7.875V12Zm4.125 0h.007v.007H12V12Zm4.125 0h.007v.007H16.125V12Zm4.125 0h.007v.007H20.25V12Z" />
    </svg>
);

export const BedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.75a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1 0-1.5h16.5a.75.75 0 0 1 .75.75Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25H3v-.875A2.625 2.625 0 0 1 5.625 4.5h12.75A2.625 2.625 0 0 1 21 7.375v.875Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75v6.75m0 0H7.5m4.5 0H16.5m-4.5 0v-6.75" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 19.5H3.75a.75.75 0 0 1-.75-.75V15.75m18 3.75h-3.75a.75.75 0 0 1-.75-.75V15.75" />
    </svg>
);

export const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0-12 0m12 0a9.094 9.094 0 0 1-12 0m12 0v-4.5m-12 4.5v-4.5m12 0a4.5 4.5 0 0 0-4.5-4.5M12 9.75a4.5 4.5 0 0 1-4.5 4.5M12 9.75V3.75m0 6A4.5 4.5 0 0 1 7.5 9.75M3 14.25a4.5 4.5 0 0 1 4.5-4.5" />
    </svg>
);

export const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0h18" />
    </svg>
);
  
export const RefreshIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.664 0l3.181-3.183m-11.664 0-3.181 3.183m0 0-3.181-3.183m3.181 3.183 3.181-3.183" />
    </svg>
);

export const PlaneTakeoffIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L6 12Zm0 0h7.5" />
    </svg>
);

export const CogIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-1.007 1.11-.962a8.25 8.25 0 0 1 5.56 5.56c.046.55-.422 1.02-.962 1.11l-1.542.31a1.125 1.125 0 0 1-1.341-1.341l.31-1.542c.09-.542-.26-1.007-.81-1.062a3.75 3.75 0 0 0-4.11-4.11c-.055-.55-.52-1.02-.962-.962l-.465.093a1.125 1.125 0 0 1-1.341-1.341l.093-.465Zm-1.85 1.85.465-.093a1.125 1.125 0 0 1 1.341 1.341l-.093.465c-.055.55-.52 1.02-.962.962a3.75 3.75 0 0 0-4.11 4.11c.055.55.52 1.02.962.962l.465-.093a1.125 1.125 0 0 1 1.341 1.341l-.093.465c-.09.542-.56 1.007-1.11.962a8.25 8.25 0 0 1-5.56-5.56c-.046-.55.422-1.02.962-1.11l1.542-.31a1.125 1.125 0 0 1 1.341 1.341l-.31 1.542c-.09.542.26 1.007.81 1.062a3.75 3.75 0 0 0 4.11-4.11c.055-.55.52-1.02.962-.962l-.465.093a1.125 1.125 0 0 1-1.341-1.341l.093-.465Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
);

export const CompassIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.362 8.638-3.388 6.776-6.776-3.388 3.388-6.776 6.776 3.388Z" />
    </svg>
);

export const BookOpenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
);

export const ShipIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 18.75v-3.75a3.375 3.375 0 0 1 3.375-3.375h9.75a3.375 3.375 0 0 1 3.375 3.375v3.75m-16.5 0h16.5m-16.5 0v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75v-2.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15V9.75m0 5.25v2.25m0-2.25a3 3 0 0 0-3-3h-1.5a3 3 0 0 0-3 3m6 0a3 3 0 0 1-3-3h1.5a3 3 0 0 1 3 3m0 0a3 3 0 0 1 3 3h1.5a3 3 0 0 1 3-3m-6 0a3 3 0 0 0 3 3h-1.5a3 3 0 0 0 3-3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12.75h18" />
    </svg>
);