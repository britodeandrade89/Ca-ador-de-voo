import React from 'react';
import type { Itinerary } from '../types';
import { RocketIcon, CalendarIcon, LatamLogoIcon, SkyLogoIcon, ExternalLinkIcon, ClockIcon, HourglassIcon, MapPinIcon, BackpackIcon, SuitcaseIcon, BaggageIcon } from './icons';

// Dados extraídos do screenshot do usuário
const SAVED_ITINERARY: Itinerary = {
  id: 'multi-city-peru-2025',
  title: 'Viagem para Várias Cidades',
  saved_date: new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' }),
  total_price: 1954,
  booking_url: 'https://www.google.com/travel/flights/search;flt=GRU.LIM.2025-01-20;LIM.CUZ.2025-01-26;CUZ.GRU.2025-02-01',
  segments: [
    {
      origin: { code: 'GRU', city: 'São Paulo' },
      destination: { code: 'LIM', city: 'Lima' },
      departure_datetime: '2025-01-20T04:00',
      arrival_datetime: '2025-01-20T07:00',
      duration: '5h',
      stops: 'Direto',
      airline: 'LATAM',
      airline_logo: <LatamLogoIcon className="h-6 w-6" />
    },
    {
      origin: { code: 'LIM', city: 'Lima' },
      destination: { code: 'CUZ', city: 'Cusco' },
      departure_datetime: '2025-01-26T04:50',
      arrival_datetime: '2025-01-26T06:15',
      duration: '1h 25m',
      stops: 'Direto',
      airline: 'LATAM',
      airline_logo: <LatamLogoIcon className="h-6 w-6" />
    },
    {
      origin: { code: 'CUZ', city: 'Cusco' },
      destination: { code: 'GRU', city: 'São Paulo' },
      departure_datetime: '2025-02-01T21:45',
      arrival_datetime: '2025-02-02T04:55',
      duration: '29h 10m',
      stops: '1 parada em LIM',
      airline: 'Sky Airline',
      airline_logo: <SkyLogoIcon className="h-8 w-8" />
    }
  ],
  baggage: {
    personal_item: '1 item pessoal (mochila ou bolsa) que vai abaixo do assento.',
    carry_on_overhead: '1 bagagem de mão de até 10kg que vai no compartimento superior.',
    checked_baggage: 'Não inclusa. Pode ser adquirida separadamente.'
  }
};

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
        date: date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }).replace('.', ''),
        time: date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };
};


const Dashboard: React.FC = () => {
    const itinerary = SAVED_ITINERARY;

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
            <header className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                    <RocketIcon className="h-8 w-8 text-cyan-400" />
                    <h1 className="text-3xl font-bold text-white">Diário de Bordo</h1>
                </div>
                <div className="text-right">
                    <p className="text-gray-400 text-sm">Itinerário Salvo em:</p>
                    <p className="font-semibold text-gray-300">{itinerary.saved_date}</p>
                </div>
            </header>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-2xl shadow-slate-950/50 overflow-hidden">
                <div className="p-6 border-b border-slate-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-white">{itinerary.title}</h2>
                        <p className="text-gray-400 flex items-center gap-2 mt-1">
                           <MapPinIcon className="h-4 w-4" /> 
                           {itinerary.segments[0].origin.city} → {itinerary.segments[itinerary.segments.length -1].origin.city}
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="text-sm text-gray-400">Preço total</p>
                        <p className="text-3xl font-bold text-green-400">R$ {itinerary.total_price}</p>
                    </div>
                </div>

                <div className="p-6">
                    <div className="flow-root">
                        <ul className="-mb-8">
                            {itinerary.segments.map((segment, segmentIdx) => (
                                <li key={segmentIdx}>
                                    <div className="relative pb-8">
                                        {segmentIdx !== itinerary.segments.length - 1 ? (
                                            <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-slate-700" aria-hidden="true" />
                                        ) : null}
                                        <div className="relative flex items-start space-x-4">
                                            <div>
                                                <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center ring-8 ring-slate-800/50 text-cyan-400">
                                                    {segment.airline_logo}
                                                </div>
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <div className="flex justify-between items-center mb-1">
                                                     <h3 className="text-lg font-bold text-white">
                                                        {segment.origin.code} → {segment.destination.code}
                                                    </h3>
                                                    <p className="text-sm font-medium text-gray-300 bg-slate-700/50 px-2 py-1 rounded">
                                                        {formatDate(segment.departure_datetime).date}
                                                    </p>
                                                </div>
                                                <p className="text-sm text-gray-400 mb-2">{segment.origin.city} para {segment.destination.city}</p>
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                                                    <div className="flex items-center gap-2 text-gray-300">
                                                        <ClockIcon className="h-4 w-4 text-cyan-500" />
                                                        <span>{formatDate(segment.departure_datetime).time} - {formatDate(segment.arrival_datetime).time}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-gray-300">
                                                        <HourglassIcon className="h-4 w-4 text-cyan-500" />
                                                        <span>{segment.duration}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-gray-300">
                                                         <span className="font-bold text-cyan-500">→</span>
                                                        <span>{segment.stops}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-slate-800/30 border-t border-slate-700 p-6 space-y-6">
                    <div className="space-y-4 text-sm">
                        <div className="flex items-start gap-3 text-gray-300">
                           <BackpackIcon className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                           <div>
                               <p className="font-semibold">Item Pessoal (Mochila/Bolsa)</p>
                               <p className="text-gray-400 text-xs sm:text-sm">{itinerary.baggage.personal_item}</p>
                           </div>
                        </div>
                        <div className="flex items-start gap-3 text-gray-300">
                           <SuitcaseIcon className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                           <div>
                               <p className="font-semibold">Bagagem de Mão (Mala de Bordo)</p>
                               <p className="text-gray-400 text-xs sm:text-sm">{itinerary.baggage.carry_on_overhead}</p>
                           </div>
                        </div>
                         <div className="flex items-start gap-3 text-gray-300">
                           <BaggageIcon className="h-6 w-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                           <div>
                               <p className="font-semibold">Bagagem Despachada (23kg)</p>
                               <p className="text-gray-400 text-xs sm:text-sm">{itinerary.baggage.checked_baggage}</p>
                           </div>
                        </div>
                    </div>
                     <a
                      href={itinerary.booking_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2.5 px-6 rounded-lg inline-flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-800"
                    >
                      <span>Ver no Google Flights</span>
                      <ExternalLinkIcon className="h-5 w-5 ml-2" />
                    </a>
                </div>
            </div>
             <p className="text-center text-xs text-gray-500 mt-4">
                As políticas de bagagem podem variar. Sempre confirme as regras no site da companhia aérea antes do voo.
            </p>
        </div>
    );
};

export default Dashboard;