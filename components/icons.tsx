import React from 'react';

export const RocketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a12.022 12.022 0 01-11.68 0 12.022 12.022 0 0111.68 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.75v16.5M12.75 3.75a2.25 2.25 0 00-4.5 0v16.5a2.25 2.25 0 004.5 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 12h.008v.008H9.75V12zm3 0h.008v.008H12.75V12zm3 0h.008v.008H15.75V12zm-3-3h.008v.008H12.75V9zm3 0h.008v.008H15.75V9z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9v-.008h.008V9H9.75z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 0a2.25 2.25 0 01-2.25-2.25V7.5a2.25 2.25 0 012.25-2.25h16.5a2.25 2.25 0 012.25 2.25v2.25a2.25 2.25 0 01-2.25 2.25M3.75 12v6.75a2.25 2.25 0 002.25 2.25h12a2.25 2.25 0 002.25-2.25V12" />
  </svg>
);

export const CalendarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" />
  </svg>
);

export const BaggageIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122" />
  </svg>
);


export const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5 0V6M13.5 6H18m0 0v4.5m0-4.5L7.5 15" />
    </svg>
);

export const LatamLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M4.21,14.24l1.32,1.32,5.29-5.29V19h1.88V10.27L18,15.56l1.32-1.32L12,6.88Z"/>
    </svg>
);

export const SkyLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
       <path d="M12.42 12.35c.22-.22.4-.48.54-.75l.1-.2c.2-.4.32-.82.32-1.25a2.53 2.53 0 00-.8-1.8 2.53 2.53 0 00-1.8-.8 2.53 2.53 0 00-1.8.8 2.53 2.53 0 00-.8 1.8c0 .43.12.85.32 1.25l.1.2c.14.27.32.53.53.75l2.08 2.1c.22.22.5.33.78.33s.56-.1.78-.32zm5.72-2.1c-.22.2-.48.34-.75.45l-.2.08c-.4.15-.82.22-1.25.22a2.53 2.53 0 00-1.8.8 2.53 2.53 0 00-.8 1.8 2.53 2.53 0 00.8 1.8 2.53 2.53 0 001.8.8c.43 0 .85-.07 1.25-.22l.2-.08c.27-.1.53-.24.75-.45l2.1-1.57c.22-.16.33-.38.33-.6 0-.23-.1-.45-.32-.6zm-9.6-5.72c.1.27.15.55.15.83a2.4 2.4 0 01-.7 1.73 2.4 2.4 0 01-1.73.7 2.4 2.4 0 01-1.73-.7 2.4 2.4 0 01-.7-1.73c0-.28.05-.56.15-.83l.1-.26c.14-.37.35-.7.62-1L8.6 1.8c.22-.22.5-.33.78-.33s.56.1.78.32zM4.54 10.25c.43 0 .85-.07 1.25-.22l.2-.08c.27-.1.53-.24.75-.45L8.8 7.93c.22-.16.33-.38.33-.6s-.1-.45-.32-.6L6.74 5.16c-.22-.20-.48-.34-.75-.45l-.2-.08c-.4-.15-.82-.22-1.25-.22A2.53 2.53 0 002.74 6.2a2.53 2.53 0 00.8 1.8 2.53 2.53 0 001.8.8z" />
    </svg>
);


export const ClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const HourglassIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.092 1.21-.138 2.43-.138 3.662s.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.092-1.21.138-2.43.138-3.662z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75V15m0-4.5v-1.5m0 0l-1.46-1.46a.75.75 0 010-1.06l1.46-1.46m0 4.02l1.46 1.46a.75.75 0 000 1.06l-1.46 1.46" />
    </svg>
);

export const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
);

export const BackpackIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.658-.463 1.243-1.119 1.243H5.502c-.656 0-1.19-.585-1.12-1.243l1.263-12A3.75 3.75 0 018.25 6h7.5a3.75 3.75 0 013.356 2.507z" />
    </svg>
);

export const SuitcaseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5v10.5h-7.5V6.75z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25v2.25m-4.5-2.25v2.25m9-2.25v2.25M3.75 12.75h16.5M3.75 6.75h16.5v1.5H3.75v-1.5zM6 8.25v1.5m12-1.5v1.5" />
    </svg>
);

export const RefreshIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0l3.181-3.183m-4.991-2.693L19.015 7.747a8.25 8.25 0 00-11.664 0L2.985 14.652" />
    </svg>
);

export const PlaneTakeoffIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
);

export const CogIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-1.007 1.11-.962a8.25 8.25 0 015.7 5.7c.045.55-.422 1.02-.962 1.11l-1.591.318a2.25 2.25 0 00-1.423 1.423l-.318 1.59c-.09.542-.56 1.007-1.11.962a8.25 8.25 0 01-5.7-5.7c-.045-.55.422-1.02.962-1.11l1.591-.318a2.25 2.25 0 001.423-1.423l.318-1.591z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);