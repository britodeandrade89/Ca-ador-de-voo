import React from 'react';
import type { Destination } from '../types';
import { detailedRoutes } from '../detailedRotes';
import { CloseIcon, ChevronLeftIcon, ChevronRightIcon, CalendarIcon, MapPinIcon } from './icons';

interface DetailedItineraryViewProps {
  destinationId: number | null;
  onClose: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
}

const DetailedItineraryView: React.FC<DetailedItineraryViewProps> = ({ destinationId, onClose, onNavigate }) => {
  if (destinationId === null) {
    return null;
  }

  const routeData = detailedRoutes[destinationId];

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${destinationId !== null ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Sliding Panel */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-2xl bg-slate-50 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${destinationId !== null ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <header className="flex items-center justify-between p-4 bg-white border-b border-slate-200 flex-shrink-0">
            <h2 className="text-xl font-bold text-slate-800">{routeData?.title || 'Carregando...'}</h2>
            <div className="flex items-center space-x-2">
               <button onClick={() => onNavigate('prev')} className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
                 <ChevronLeftIcon className="h-6 w-6" />
               </button>
               <button onClick={() => onNavigate('next')} className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
                 <ChevronRightIcon className="h-6 w-6" />
               </button>
               <button onClick={onClose} className="p-2 rounded-full hover:bg-slate-100 text-slate-600 transition-colors">
                 <CloseIcon className="h-6 w-6" />
               </button>
            </div>
          </header>

          {/* Content */}
          <div className="flex-grow overflow-y-auto p-6 space-y-8">
            {routeData ? (
              routeData.itinerary.map((cityPlan, cityIndex) => (
                <section key={cityIndex}>
                  <div className="flex items-baseline space-x-3 mb-4">
                     <h3 className="text-2xl font-extrabold text-cyan-700">{cityPlan.city}</h3>
                     <span className="text-sm font-semibold text-slate-500 bg-slate-200 px-2 py-0.5 rounded">{cityPlan.duration}</span>
                  </div>
                  <div className="space-y-6 border-l-2 border-slate-200 ml-3 pl-8">
                    {cityPlan.days.map((dayPlan, dayIndex) => (
                      <div key={dayIndex} className="relative">
                        <div className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-cyan-500 ring-4 ring-slate-50"></div>
                        <p className="font-bold text-slate-700">{dayPlan.title} <span className="font-normal text-slate-500 text-sm">- {dayPlan.date}</span></p>
                        <ul className="mt-2 space-y-1.5 list-disc list-inside text-slate-600">
                          {dayPlan.activities.map((activity, actIndex) => (
                            <li key={actIndex}>{activity}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              ))
            ) : (
              <p>Roteiro não encontrado.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedItineraryView;
