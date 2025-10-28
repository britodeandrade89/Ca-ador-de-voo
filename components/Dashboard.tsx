import React from 'react';
import type { Itinerary } from '../types';
import { RocketIcon, LatamLogoIcon, SkyLogoIcon, ExternalLinkIcon, ClockIcon, HourglassIcon, MapPinIcon, BackpackIcon, SuitcaseIcon, BaggageIcon, AlertTriangleIcon } from './icons';

// Dados extraídos do screenshot do usuário com mais detalhes
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
      airline_logo: <SkyLogoIcon className="h-8 w-8" />,
      is_problematic: true,
    }
  ],
  baggage: {
    personal_item: { status: 'Inclusa', details: '1 item (mochila ou bolsa) que vai abaixo do assento.' },
    carry_on_overhead: { status: 'Inclusa', details: '1 bagagem de mão de até 10kg que vai no compartimento superior.' },
    checked_baggage: { status: 'Taxa Adicional', details: 'Não inclusa. Custo a partir de R$ 210 por trecho/passageiro.' }
  }
};

const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return {
        date: date.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' }).replace('.', ''),
        time: date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };
};

const BaggageStatusBadge: React.FC<{ status: 'Inclusa' | 'Não Inclusa' | 'Taxa Adicional' }> = ({ status }) => {
    const statusStyles = {
        'Inclusa': 'bg-green-100 text-green-800',
        'Não Inclusa': 'bg-red-100 text-red-800',
        'Taxa Adicional': 'bg-amber-100 text-amber-800'
    };
    return (
        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${statusStyles[status]}`}>
            {status}
        </span>
    );
};

const Dashboard: React.FC = () => {
    const itinerary = SAVED_ITINERARY;

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-4xl">
            <header className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                    <RocketIcon className="h-8 w-8 text-sky-500" />
                    <h1 className="text-3xl font-bold text-slate-900">Diário de Bordo</h1>
                </div>
                <div className="text-right">
                    <p className="text-slate-500 text-sm">Itinerário Salvo em:</p>
                    <p className="font-semibold text-slate-600">{itinerary.saved_date}</p>
                </div>
            </header>

            <div className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl shadow-lg shadow-sky-100 overflow-hidden">
                <div className="p-6 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">{itinerary.title}</h2>
                        <p className="text-slate-500 flex items-center gap-2 mt-1">
                           <MapPinIcon className="h-4 w-4" /> 
                           {itinerary.segments[0].origin.city} → {itinerary.segments[itinerary.segments.length -1].origin.city}
                        </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                        <p className="text-sm text-slate-500">Preço total</p>
                        <p className="text-3xl font-bold text-green-600">R$ {itinerary.total_price}</p>
                    </div>
                </div>

                <div className="p-6">
                    <div className="flow-root">
                        <ul className="-mb-8">
                            {itinerary.segments.map((segment, segmentIdx) => (
                                <li key={segmentIdx}>
                                    <div className={`relative pb-8 ${segment.is_problematic ? 'p-4 bg-amber-50 rounded-lg border border-amber-200' : ''}`}>
                                        {segmentIdx !== itinerary.segments.length - 1 ? (
                                            <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-slate-300" aria-hidden="true" />
                                        ) : null}
                                        <div className="relative flex items-start space-x-4">
                                            <div>
                                                <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center ring-8 ring-white/70 text-sky-600">
                                                    {segment.airline_logo}
                                                </div>
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <div className="flex justify-between items-center mb-1">
                                                     <h3 className="text-lg font-bold text-slate-900">
                                                        {segment.origin.code} → {segment.destination.code}
                                                    </h3>
                                                    <p className="text-sm font-medium text-slate-700 bg-slate-200/70 px-2 py-1 rounded">
                                                        {formatDate(segment.departure_datetime).date}
                                                    </p>
                                                </div>
                                                <p className="text-sm text-slate-500 mb-2">{segment.origin.city} para {segment.destination.city}</p>
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
                                                    <div className="flex items-center gap-2 text-slate-700">
                                                        <ClockIcon className="h-4 w-4 text-sky-600" />
                                                        <span>{formatDate(segment.departure_datetime).time} - {formatDate(segment.arrival_datetime).time}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-slate-700">
                                                        <HourglassIcon className="h-4 w-4 text-sky-600" />
                                                        <span>{segment.duration}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-slate-700">
                                                        {segment.is_problematic ? <AlertTriangleIcon className="h-4 w-4 text-amber-500" /> : <span className="font-bold text-sky-600">→</span>}
                                                        <span className={segment.is_problematic ? 'font-semibold text-amber-700' : ''}>{segment.stops}{segment.is_problematic && ' - Longa Conexão'}</span>
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

                <div className="bg-slate-50/70 border-t border-slate-200 p-6 space-y-4">
                    <h3 className="text-lg font-bold text-slate-800 mb-2">Detalhes da Bagagem</h3>
                    <div className="space-y-4 text-sm">
                        <div className="flex items-start gap-4">
                           <BackpackIcon className="h-6 w-6 text-sky-500 flex-shrink-0 mt-0.5" />
                           <div className="flex-grow">
                               <div className="flex justify-between items-center mb-1">
                                    <p className="font-semibold text-slate-700">Item Pessoal (Mochila/Bolsa)</p>
                                    <BaggageStatusBadge status={itinerary.baggage.personal_item.status} />
                               </div>
                               <p className="text-slate-500 text-xs sm:text-sm">{itinerary.baggage.personal_item.details}</p>
                           </div>
                        </div>
                        <div className="flex items-start gap-4">
                           <SuitcaseIcon className="h-6 w-6 text-sky-500 flex-shrink-0 mt-0.5" />
                           <div className="flex-grow">
                              <div className="flex justify-between items-center mb-1">
                                <p className="font-semibold text-slate-700">Bagagem de Mão (Mala de Bordo)</p>
                                <BaggageStatusBadge status={itinerary.baggage.carry_on_overhead.status} />
                              </div>
                               <p className="text-slate-500 text-xs sm:text-sm">{itinerary.baggage.carry_on_overhead.details}</p>
                           </div>
                        </div>
                         <div className="flex items-start gap-4">
                           <BaggageIcon className="h-6 w-6 text-sky-500 flex-shrink-0 mt-0.5" />
                           <div className="flex-grow">
                                <div className="flex justify-between items-center mb-1">
                                    <p className="font-semibold text-slate-700">Bagagem Despachada (23kg)</p>
                                    <BaggageStatusBadge status={itinerary.baggage.checked_baggage.status} />
                                </div>
                               <p className="text-slate-500 text-xs sm:text-sm">{itinerary.baggage.checked_baggage.details}</p>
                           </div>
                        </div>
                    </div>
                </div>

                 <div className="p-6 pt-2">
                     <a
                      href={itinerary.booking_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-sky-600 hover:bg-sky-700 text-white font-bold py-2.5 px-6 rounded-lg inline-flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-sky-300"
                    >
                      <span>Ver no Google Flights</span>
                      <ExternalLinkIcon className="h-5 w-5 ml-2" />
                    </a>
                 </div>
            </div>
             <p className="text-center text-xs text-slate-500 mt-4 max-w-2xl mx-auto">
                As políticas de bagagem e os custos são estimativas. Sempre confirme as regras e valores no site da companhia aérea antes de comprar e voar.
            </p>
        </div>
    );
};

export default Dashboard;