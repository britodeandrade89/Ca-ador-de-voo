import React from 'react';
import type { Itinerary, TripEvent } from '../types';
import { BusIcon, CalendarIcon, HourglassIcon, PlaneTakeoffIcon } from './icons';

const EventRow: React.FC<{ event: TripEvent }> = ({ event }) => {
    return (
        <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100">
                {event.company.logo}
            </div>
            <div className="flex-1">
                <p className="font-semibold text-slate-700">{event.startLocation} → {event.endLocation}</p>
                <div className="text-sm text-slate-500 flex items-center flex-wrap gap-x-4 gap-y-1 mt-1">
                    <span className="flex items-center"><CalendarIcon className="h-4 w-4 mr-1.5" /> {event.startDate}, {event.startTime} - {event.endTime}</span>
                    <span className="flex items-center"><HourglassIcon className="h-4 w-4 mr-1.5" /> {event.duration}</span>
                </div>
                {event.operator && <p className="text-xs text-slate-400 mt-1">Operado por {event.operator}</p>}
            </div>
        </div>
    );
};


const ItineraryCard: React.FC<{ itinerary: Itinerary }> = ({ itinerary }) => {
    return (
        <div className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden transform transition-all hover:shadow-lg hover:scale-[1.02] flex flex-col">
            <div className="p-5 flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-lg font-bold text-slate-800">{itinerary.title}</h3>
                        {itinerary.subtitle && <p className="text-sm text-slate-500">{itinerary.subtitle}</p>}
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                        <p className="text-xs text-slate-500">Total</p>
                        <p className="text-xl font-bold text-cyan-600">
                           R$ {itinerary.totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </p>
                    </div>
                </div>

                <div className="space-y-4">
                    {itinerary.events.map((event, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && <hr className="border-slate-200" />}
                            <EventRow event={event} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ItineraryCard;
