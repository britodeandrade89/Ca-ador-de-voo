import React from 'react';
// FIX: Added BaggageIcon to imports and fixed missing icon definitions in icons.tsx.
import { LatamLogoIcon, SkyLogoIcon, ClockIcon, HourglassIcon, MapPinIcon, SuitcaseIcon, BackpackIcon, AlertTriangleIcon, BoaLogoIcon, BaggageIcon } from './icons';
import type { Itinerary } from '../types';

const itineraries: Itinerary[] = [
    {
        id: 'itinerary-1',
        title: 'Opção 1: LATAM + Sky Airline (Conexão Longa)',
        saved_date: '2024-07-27',
        total_price: 1954,
        booking_url: 'https://www.google.com/travel/flights',
        segments: [
            {
                origin: { code: 'GRU', city: 'São Paulo' },
                destination: { code: 'LIM', city: 'Lima' },
                departure_datetime: 'ter., 20 de jan. • 04:00',
                arrival_datetime: '07:00',
                duration: '5h',
                stops: 'Sem escalas',
                airline: 'LATAM',
                airline_logo: <LatamLogoIcon className="h-6 w-6" />,
            },
            {
                origin: { code: 'LIM', city: 'Lima' },
                destination: { code: 'CUZ', city: 'Cusco' },
                departure_datetime: 'seg., 26 de jan. • 04:50',
                arrival_datetime: '06:15',
                duration: '1h 25min',
                stops: 'Sem escalas',
                airline: 'LATAM',
                airline_logo: <LatamLogoIcon className="h-6 w-6" />,
            },
            {
                origin: { code: 'CUZ', city: 'Cusco' },
                destination: { code: 'GRU', city: 'São Paulo' },
                departure_datetime: 'dom., 1 de fev. • 21:45',
                arrival_datetime: '04:55 (+2)',
                duration: '29h 10min',
                stops: '1 parada (22h 15min em LIM)',
                airline: 'Sky Airline',
                airline_logo: <SkyLogoIcon className="h-8 w-8" />,
                is_problematic: true,
            },
        ],
        baggage: {
            personal_item: {
                status: 'Inclusa',
                details: '1 mochila ou bolsa que caiba abaixo do assento.'
            },
            carry_on_overhead: {
                status: 'Inclusa',
                details: '1 mala de até 10kg no compartimento superior.'
            },
            checked_baggage: {
                status: 'Taxa Adicional',
                details: 'A partir de R$ 150 por trecho ao comprar online.'
            }
        }
    },
    {
        id: 'itinerary-2',
        title: 'Opção 2: BoA + LATAM + Sky Airline',
        saved_date: '2024-07-28',
        total_price: 2354,
        booking_url: 'https://www.google.com/travel/flights',
        segments: [
            {
                origin: { code: 'GRU', city: 'São Paulo' },
                destination: { code: 'LPB', city: 'La Paz' },
                departure_datetime: 'seg., 19 de jan. • 14:00',
                arrival_datetime: '18:25',
                duration: '5h 25min',
                stops: '1 parada (1h 30min em VVI)',
                airline: 'BoA',
                airline_logo: <BoaLogoIcon className="h-8 w-8" />,
            },
            {
                origin: { code: 'CUZ', city: 'Cusco' },
                destination: { code: 'LIM', city: 'Lima' },
                departure_datetime: 'seg., 26 de jan. • 16:30',
                arrival_datetime: '18:00',
                duration: '1h 30min',
                stops: 'Sem escalas',
                airline: 'LATAM',
                airline_logo: <LatamLogoIcon className="h-6 w-6" />,
            },
            {
                origin: { code: 'LIM', city: 'Lima' },
                destination: { code: 'GRU', city: 'São Paulo' },
                departure_datetime: 'sáb., 31 de jan. • 21:35',
                arrival_datetime: '04:55 (+1)',
                duration: '5h 20min',
                stops: 'Sem escalas',
                airline: 'Sky Airline',
                airline_logo: <SkyLogoIcon className="h-8 w-8" />,
            },
        ],
        baggage: {
            personal_item: {
                status: 'Inclusa',
                details: '1 mochila ou bolsa que caiba abaixo do assento.'
            },
            carry_on_overhead: {
                status: 'Inclusa',
                details: '1 mala de até 10kg no compartimento superior.'
            },
            checked_baggage: {
                status: 'Taxa Adicional',
                details: 'Não inclusa na tarifa. Custos variam por companhia.'
            }
        }
    },
    {
        id: 'itinerary-3',
        title: 'Opção 3: BoA + Sky Airline',
        saved_date: '2024-07-29',
        total_price: 2322,
        booking_url: 'https://www.google.com/travel/flights',
        segments: [
            {
                origin: { code: 'GRU', city: 'São Paulo' },
                destination: { code: 'LPB', city: 'La Paz' },
                departure_datetime: 'seg., 19 de jan. • 14:00',
                arrival_datetime: '18:25',
                duration: '5h 25min',
                stops: '1 parada (1h 30min em VVI)',
                airline: 'BoA',
                airline_logo: <BoaLogoIcon className="h-8 w-8" />,
            },
            {
                origin: { code: 'CUZ', city: 'Cusco' },
                destination: { code: 'LIM', city: 'Lima' },
                departure_datetime: 'seg., 26 de jan. • 12:10',
                arrival_datetime: '13:45',
                duration: '1h 35min',
                stops: 'Sem escalas',
                airline: 'Sky Airline',
                airline_logo: <SkyLogoIcon className="h-8 w-8" />,
            },
            {
                origin: { code: 'LIM', city: 'Lima' },
                destination: { code: 'GRU', city: 'São Paulo' },
                departure_datetime: 'sáb., 31 de jan. • 21:35',
                arrival_datetime: '04:55 (+1)',
                duration: '5h 20min',
                stops: 'Sem escalas',
                airline: 'Sky Airline',
                airline_logo: <SkyLogoIcon className="h-8 w-8" />,
            },
        ],
        baggage: {
            personal_item: {
                status: 'Inclusa',
                details: '1 mochila ou bolsa que caiba abaixo do assento.'
            },
            carry_on_overhead: {
                status: 'Inclusa',
                details: '1 mala de até 10kg no compartimento superior.'
            },
            checked_baggage: {
                status: 'Taxa Adicional',
                details: 'Não inclusa. Alerta: Falta de info para reservas com martiGO.'
            }
        }
    },
];

const ItineraryCard: React.FC<{ itinerary: Itinerary }> = ({ itinerary }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200/80 mb-8">
            {/* Card Header */}
            <div className="p-5 bg-slate-50 border-b border-slate-200/80 flex justify-between items-center">
                <div>
                    <h2 className="text-xl font-bold text-slate-800">{itinerary.title}</h2>
                    <p className="text-sm text-slate-500">Salvo em: {itinerary.saved_date}</p>
                </div>
                <div className="text-right">
                    <p className="text-2xl font-extrabold text-sky-600">R$ {itinerary.total_price}</p>
                    <a href={itinerary.booking_url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-sky-500 hover:text-sky-700 transition-colors">
                        Ver no Google Flights
                    </a>
                </div>
            </div>

            {/* Flight Segments */}
            <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-700 mb-4">Itinerário de Voos</h3>
                <div className="relative">
                    {/* Timeline bar */}
                    <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-slate-200"></div>

                    {itinerary.segments.map((segment, index) => (
                        <div key={index} className={`relative pl-10 mb-6 ${segment.is_problematic ? 'bg-yellow-50 border border-yellow-300 rounded-lg p-3' : ''}`}>
                            {/* Dot on timeline */}
                            <div className="absolute left-4 top-1.5 w-3 h-3 bg-sky-500 rounded-full border-2 border-white -translate-x-1/2"></div>
                            
                            {segment.is_problematic && (
                                <div className="absolute -left-1 top-0 text-yellow-500">
                                     <AlertTriangleIcon className="h-5 w-5"/>
                                </div>
                            )}

                            <div className="flex items-start justify-between">
                                <div>
                                    <p className="font-bold text-slate-800 text-lg">
                                        {segment.origin.code} <span className="font-normal text-slate-500">para</span> {segment.destination.code}
                                    </p>
                                    <p className="text-sm text-slate-500">{segment.origin.city} → {segment.destination.city}</p>
                                </div>
                                <div className="flex items-center space-x-2 text-slate-600">
                                    {segment.airline_logo}
                                    <span className="font-semibold">{segment.airline}</span>
                                </div>
                            </div>
                            {segment.is_problematic && (
                                <p className="mt-2 text-sm font-semibold text-yellow-700">Atenção: Longa Conexão</p>
                            )}
                            <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-sm">
                                <div className="flex items-center text-slate-600">
                                    <ClockIcon className="h-4 w-4 mr-1.5 text-sky-500" />
                                    <span>{segment.departure_datetime} – {segment.arrival_datetime}</span>
                                </div>
                                <div className="flex items-center text-slate-600">
                                    <HourglassIcon className="h-4 w-4 mr-1.5 text-sky-500" />
                                    <span>{segment.duration}</span>
                                </div>
                                <div className="flex items-center text-slate-600">
                                    <MapPinIcon className="h-4 w-4 mr-1.5 text-sky-500" />
                                    <span>{segment.stops}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            {/* Baggage Details */}
            <div className="p-5 bg-slate-50 border-t border-slate-200/80">
                <h3 className="text-lg font-semibold text-slate-700 mb-4">Informações de Bagagem</h3>
                <div className="space-y-4">
                    <div className="flex items-start">
                         <div className="flex-shrink-0 mr-3 text-sky-600 bg-sky-100 p-2 rounded-full">
                            <BackpackIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-slate-800">Item Pessoal</p>
                            <p><span className={`font-semibold ${itinerary.baggage.personal_item.status === 'Inclusa' ? 'text-green-600' : 'text-orange-600'}`}>{itinerary.baggage.personal_item.status}</span> - <span className="text-slate-600 text-sm">{itinerary.baggage.personal_item.details}</span></p>
                        </div>
                    </div>
                     <div className="flex items-start">
                         <div className="flex-shrink-0 mr-3 text-sky-600 bg-sky-100 p-2 rounded-full">
                            <SuitcaseIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-slate-800">Bagagem de Mão (Até 10kg)</p>
                             <p><span className={`font-semibold ${itinerary.baggage.carry_on_overhead.status === 'Inclusa' ? 'text-green-600' : 'text-orange-600'}`}>{itinerary.baggage.carry_on_overhead.status}</span> - <span className="text-slate-600 text-sm">{itinerary.baggage.carry_on_overhead.details}</span></p>
                        </div>
                    </div>
                    <div className="flex items-start">
                         <div className="flex-shrink-0 mr-3 text-sky-600 bg-sky-100 p-2 rounded-full">
                            <BaggageIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-slate-800">Bagagem Despachada</p>
                           <p><span className={`font-semibold ${itinerary.baggage.checked_baggage.status === 'Inclusa' ? 'text-green-600' : 'text-orange-600'}`}>{itinerary.baggage.checked_baggage.status}</span> - <span className="text-slate-600 text-sm">{itinerary.baggage.checked_baggage.details}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-sky-50/50">
            <header className="bg-white shadow-sm sticky top-0 z-10">
                <div className="container mx-auto px-4 py-4">
                    <h1 className="text-3xl font-extrabold text-slate-800">Diário de Bordo de Voos</h1>
                    <p className="text-slate-500 mt-1">Seu catálogo pessoal de voos encontrados.</p>
                </div>
            </header>
            <main className="container mx-auto px-4 py-8">
                {itineraries.map(itinerary => (
                    <ItineraryCard key={itinerary.id} itinerary={itinerary} />
                ))}
            </main>
        </div>
    );
};

export default Dashboard;