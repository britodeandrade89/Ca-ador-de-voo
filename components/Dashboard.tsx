import React, { useState, useEffect } from 'react';
import { Itinerary, PriceHistoryItem, TripEvent } from '../types';
import {
  AlertTriangleIcon, BackpackIcon, BusIcon, CarIcon, DollarSignIcon,
  ExternalLinkIcon, HourglassIcon, LatamLogoIcon, SkyLogoIcon,
  SuitcaseIcon, TrainIcon, MapPinIcon, BoaLogoIcon, ActivityIcon,
  BedIcon,
  BaggageIcon,
  UsersIcon,
} from './icons';
import ImageUploader from './ImageUploader';

// Helper to format YYYY-MM-DD into "DD de Mês"
const formatDateForDisplay = (dateStr: string): string => {
  if (!dateStr.includes('-')) return dateStr; // Return original if not in expected format
  const [year, month, day] = dateStr.split('-');
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  // Using toLocaleDateString for robust internationalization
  return date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short' }).replace('.', '');
};


// FIX: Corrected the issue where clicking "Ver Oferta Original" resulted in an error page. The fix generates a dynamic search URL for LATAM flights, including origin, destination, and an accurate, well-formatted date.
const generateLatamSearchUrl = (event: TripEvent): string => {
    const baseUrl = 'https://www.latamairlines.com/br/pt/oferta-voos';
    const origin = event.startLocation;
    const destination = event.endLocation;
    // The startDate is now in YYYY-MM-DD format, which is exactly what we need.
    const formattedDate = event.startDate;

    const params = new URLSearchParams({
        origin: origin,
        destination: destination,
        outbound: `${formattedDate}T12:00:00.000Z`,
        inbound: 'null',
        adt: '1',
        chd: '0',
        inf: '0',
        trip: 'OW' // One Way
    });

    return `${baseUrl}?${params.toString()}`;
};


const initialItineraries: Itinerary[] = [
  // VOOS DE IDA GRU -> BOG (JAN 2026) - Adicionados a partir dos prints com cotação de R$26/milheiro
  {
    id: 18,
    title: 'Ida GRU -> BOG (14/Jan)',
    subtitle: '52.160 milhas + R$ 140,30 (Milheiro a R$26)',
    savedDate: '2024-07-28',
    totalPrice: 1496,
    sourceUrl: 'https://www.latamairlines.com/br/pt/oferta-voos',
    events: [
       { type: 'flight', startTime: '04:00', endTime: '19:10', startDate: '2026-01-14', endDate: '2026-01-14', startLocation: 'GRU', endLocation: 'BOG', duration: '17h 10m', details: '1 parada', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Airlines Brasil | LATAM Airlines Colombia' },
    ],
    baggage: { personal: { status: 'Inclusa', details: '1 item (mochila ou bolsa). A confirmar.' }, carryOn: { status: 'Inclusa', details: '1 bagagem de mão de até 10kg. A confirmar.' }, checked: { status: 'Taxa Adicional', details: 'Não inclusa. Custo a confirmar com a cia.' } },
    monitoring: { enabled: true },
  },
  {
    id: 17,
    title: 'Ida GRU -> BOG (13/Jan)',
    subtitle: '52.160 milhas + R$ 140,30 (Milheiro a R$26)',
    savedDate: '2024-07-28',
    totalPrice: 1496,
    sourceUrl: 'https://www.latamairlines.com/br/pt/oferta-voos',
    events: [
       { type: 'flight', startTime: '01:50', endTime: '19:10', startDate: '2026-01-13', endDate: '2026-01-13', startLocation: 'GRU', endLocation: 'BOG', duration: '19h 20m', details: '2 paradas', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Group, Vamos Air | LATAM Airlines Colombia' },
    ],
    baggage: { personal: { status: 'Inclusa', details: '1 item (mochila ou bolsa). A confirmar.' }, carryOn: { status: 'Inclusa', details: '1 bagagem de mão de até 10kg. A confirmar.' }, checked: { status: 'Taxa Adicional', details: 'Não inclusa. Custo a confirmar com a cia.' } },
    monitoring: { enabled: true },
  },
  {
    id: 16,
    title: 'Ida GRU -> BOG (12/Jan - Direto)',
    subtitle: '54.591 milhas + R$ 140,30 (Milheiro a R$26)',
    savedDate: '2024-07-28',
    totalPrice: 1560,
    sourceUrl: 'https://www.latamairlines.com/br/pt/oferta-voos',
    events: [
       { type: 'flight', startTime: '23:55', endTime: '04:10', startDate: '2026-01-12', endDate: '2026-01-13', startLocation: 'GRU', endLocation: 'BOG', duration: '6h 15m', details: 'Direto', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Airlines Colombia' },
    ],
    baggage: { personal: { status: 'Inclusa', details: '1 item (mochila ou bolsa). A confirmar.' }, carryOn: { status: 'Inclusa', details: '1 bagagem de mão de até 10kg. A confirmar.' }, checked: { status: 'Taxa Adicional', details: 'Não inclusa. Custo a confirmar com a cia.' } },
    monitoring: { enabled: true },
  },
  {
    id: 15,
    title: 'Ida GRU -> BOG (11/Jan)',
    subtitle: '57.395 milhas + R$ 140,30 (Milheiro a R$26)',
    savedDate: '2024-07-28',
    totalPrice: 1633,
    sourceUrl: 'https://www.latamairlines.com/br/pt/oferta-voos',
    events: [
       { type: 'flight', startTime: '01:50', endTime: '16:15', startDate: '2026-01-11', endDate: '2026-01-11', startLocation: 'GRU', endLocation: 'BOG', duration: '16h 25m', details: '2 paradas', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Airlines Group | LATAM Airlines Perú' },
    ],
    baggage: { personal: { status: 'Inclusa', details: '1 item (mochila ou bolsa). A confirmar.' }, carryOn: { status: 'Inclusa', details: '1 bagagem de mão de até 10kg. A confirmar.' }, checked: { status: 'Taxa Adicional', details: 'Não inclusa. Custo a confirmar com a cia.' } },
    monitoring: { enabled: true },
  },
  {
    id: 14,
    title: 'Ida GRU -> BOG (10/Jan - Direto)',
    subtitle: '55.099 milhas + R$ 140,30 (Milheiro a R$26)',
    savedDate: '2024-07-28',
    totalPrice: 1573,
    sourceUrl: 'https://www.latamairlines.com/br/pt/oferta-voos',
    events: [
       { type: 'flight', startTime: '08:15', endTime: '12:15', startDate: '2026-01-10', endDate: '2026-01-10', startLocation: 'GRU', endLocation: 'BOG', duration: '6h 00m', details: 'Direto', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Airlines Colombia' },
    ],
    baggage: { personal: { status: 'Inclusa', details: '1 item (mochila ou bolsa). A confirmar.' }, carryOn: { status: 'Inclusa', details: '1 bagagem de mão de até 10kg. A confirmar.' }, checked: { status: 'Taxa Adicional', details: 'Não inclusa. Custo a confirmar com a cia.' } },
    monitoring: { enabled: true },
  },
  {
    id: 13,
    title: 'Ida GRU -> BOG (09/Jan - Direto)',
    subtitle: '55.099 milhas + R$ 140,30 (Milheiro a R$26)',
    savedDate: '2024-07-28',
    totalPrice: 1573,
    sourceUrl: 'https://www.latamairlines.com/br/pt/oferta-voos',
    events: [
       { type: 'flight', startTime: '08:15', endTime: '12:15', startDate: '2026-01-09', endDate: '2026-01-09', startLocation: 'GRU', endLocation: 'BOG', duration: '6h 00m', details: 'Direto', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Airlines Colombia' },
    ],
    baggage: { personal: { status: 'Inclusa', details: '1 item (mochila ou bolsa). A confirmar.' }, carryOn: { status: 'Inclusa', details: '1 bagagem de mão de até 10kg. A confirmar.' }, checked: { status: 'Taxa Adicional', details: 'Não inclusa. Custo a confirmar com a cia.' } },
    monitoring: { enabled: true },
  },
  {
    id: 12,
    title: 'Ida GRU -> BOG (08/Jan)',
    subtitle: '57.395 milhas + R$ 140,30 (Milheiro a R$26)',
    savedDate: '2024-07-28',
    totalPrice: 1633,
    sourceUrl: 'https://www.latamairlines.com/br/pt/oferta-voos',
    events: [
       { type: 'flight', startTime: '16:30', endTime: '03:15', startDate: '2026-01-08', endDate: '2026-01-09', startLocation: 'GRU', endLocation: 'BOG', duration: '12h 45m', details: '1 parada', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Airlines Perú | LATAM Airlines Colombia' },
    ],
    baggage: { personal: { status: 'Inclusa', details: '1 item (mochila ou bolsa). A confirmar.' }, carryOn: { status: 'Inclusa', details: '1 bagagem de mão de até 10kg. A confirmar.' }, checked: { status: 'Taxa Adicional', details: 'Não inclusa. Custo a confirmar com a cia.' } },
    monitoring: { enabled: true },
  },
  {
    id: 11,
    title: 'Ida GRU -> BOG (07/Jan - Direto)',
    subtitle: '57.395 milhas + R$ 140,30 (Milheiro a R$26)',
    savedDate: '2024-07-28',
    totalPrice: 1633,
    sourceUrl: 'https://www.latamairlines.com/br/pt/oferta-voos',
    events: [
       { type: 'flight', startTime: '08:15', endTime: '12:15', startDate: '2026-01-07', endDate: '2026-01-07', startLocation: 'GRU', endLocation: 'BOG', duration: '6h 00m', details: 'Direto', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Airlines Colombia' },
    ],
    baggage: { personal: { status: 'Inclusa', details: '1 item (mochila ou bolsa). A confirmar.' }, carryOn: { status: 'Inclusa', details: '1 bagagem de mão de até 10kg. A confirmar.' }, checked: { status: 'Taxa Adicional', details: 'Não inclusa. Custo a confirmar com a cia.' } },
    monitoring: { enabled: true },
  },
  {
    id: 10,
    title: 'Ida GRU -> BOG (01/Jan)',
    subtitle: '52.160 milhas + R$ 140,30 (Milheiro a R$26)',
    savedDate: '2024-07-28',
    totalPrice: 1496,
    sourceUrl: 'https://www.latamairlines.com/br/pt/oferta-voos',
    events: [
       { type: 'flight', startTime: '07:35', endTime: '16:10', startDate: '2026-01-01', endDate: '2026-01-01', startLocation: 'GRU', endLocation: 'BOG', duration: '10h 35m', details: '1 parada', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Airlines Brasil | LATAM Airlines Perú' },
    ],
    baggage: { personal: { status: 'Inclusa', details: '1 item (mochila ou bolsa). A confirmar.' }, carryOn: { status: 'Inclusa', details: '1 bagagem de mão de até 10kg. A confirmar.' }, checked: { status: 'Taxa Adicional', details: 'Não inclusa. Custo a confirmar com a cia.' } },
    monitoring: { enabled: true },
  },
  // VOOS DE IDA GRU -> BOG (DEZ 2025) - Adicionados a partir dos prints
  {
    id: 9,
    title: 'Ida GRU -> BOG (31/Dez - Direto)',
    subtitle: 'Preço: 57.395 milhas + R$ 140,30 (Milheiro a R$26)',
    savedDate: '2024-07-28',
    totalPrice: 1633,
    sourceUrl: 'https://www.latamairlines.com/br/pt/oferta-voos',
    events: [
       { type: 'flight', startTime: '08:15', endTime: '12:15', startDate: '2025-12-31', endDate: '2025-12-31', startLocation: 'GRU', endLocation: 'BOG', duration: '6h 00m', details: 'Direto', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Airlines Colombia' },
    ],
    baggage: {
      personal: { status: 'Inclusa', details: '1 item (mochila ou bolsa). A confirmar.' },
      carryOn: { status: 'Inclusa', details: '1 bagagem de mão de até 10kg. A confirmar.' },
      checked: { status: 'Taxa Adicional', details: 'Não inclusa. Custo a confirmar com a cia.' },
    },
    monitoring: { enabled: true },
  },
  {
    id: 8,
    title: 'Ida GRU -> BOG (30/Dez)',
    subtitle: 'Preço: 57.395 milhas + R$ 140,30 (Milheiro a R$26)',
    savedDate: '2024-07-28',
    totalPrice: 1633,
    sourceUrl: 'https://www.latamairlines.com/br/pt/oferta-voos',
    events: [
       { type: 'flight', startTime: '21:20', endTime: '12:05', startDate: '2025-12-30', endDate: '2025-12-31', startLocation: 'GRU', endLocation: 'BOG', duration: '16h 45m', details: '2 paradas', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Group' },
    ],
    baggage: {
      personal: { status: 'Inclusa', details: '1 item (mochila ou bolsa). A confirmar.' },
      carryOn: { status: 'Inclusa', details: '1 bagagem de mão de até 10kg. A confirmar.' },
      checked: { status: 'Taxa Adicional', details: 'Não inclusa. Custo a confirmar com a cia.' },
    },
    monitoring: { enabled: true },
  },
  {
    id: 7,
    title: 'Ida GRU -> BOG (29/Dez - Direto)',
    subtitle: 'Preço: 60.013 milhas + R$ 140,30 (Milheiro a R$26)',
    savedDate: '2024-07-28',
    totalPrice: 1701,
    sourceUrl: 'https://www.latamairlines.com/br/pt/oferta-voos',
    events: [
       { type: 'flight', startTime: '23:55', endTime: '04:10', startDate: '2025-12-29', endDate: '2025-12-30', startLocation: 'GRU', endLocation: 'BOG', duration: '6h 15m', details: 'Direto', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Airlines Colombia' },
    ],
    baggage: {
      personal: { status: 'Inclusa', details: '1 item (mochila ou bolsa). A confirmar.' },
      carryOn: { status: 'Inclusa', details: '1 bagagem de mão de até 10kg. A confirmar.' },
      checked: { status: 'Taxa Adicional', details: 'Não inclusa. Custo a confirmar com a cia.' },
    },
    monitoring: { enabled: true },
  },
  {
    id: 6,
    title: 'Ida GRU -> BOG (24/Dez)',
    subtitle: 'Preço: 60.378 milhas + R$ 191,82 (Milheiro a R$26)',
    savedDate: '2024-07-28',
    totalPrice: 1762,
    sourceUrl: 'https://www.latamairlines.com/br/pt/oferta-voos',
    events: [
       { type: 'flight', startTime: '07:55', endTime: '20:50', startDate: '2025-12-24', endDate: '2025-12-24', startLocation: 'GRU', endLocation: 'BOG', duration: '14h 55m', details: '2 paradas', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM, Vamos Air' },
    ],
    baggage: {
      personal: { status: 'Inclusa', details: '1 item (mochila ou bolsa). A confirmar.' },
      carryOn: { status: 'Inclusa', details: '1 bagagem de mão de até 10kg. A confirmar.' },
      checked: { status: 'Taxa Adicional', details: 'Não inclusa. Custo a confirmar com a cia.' },
    },
    monitoring: { enabled: true },
  },
  {
    id: 5,
    title: 'Ida GRU -> BOG (23/Dez)',
    subtitle: 'Preço: 60.378 milhas + R$ 140,30 (Milheiro a R$26)',
    savedDate: '2024-07-28',
    totalPrice: 1710,
    sourceUrl: 'https://www.latamairlines.com/br/pt/oferta-voos',
    events: [
       { type: 'flight', startTime: '19:45', endTime: '12:05', startDate: '2025-12-23', endDate: '2025-12-24', startLocation: 'GRU', endLocation: 'BOG', duration: '18h 20m', details: '1 parada', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Airlines Brasil, LATAM Airlines Colombia' },
    ],
    baggage: {
      personal: { status: 'Inclusa', details: '1 item (mochila ou bolsa). A confirmar.' },
      carryOn: { status: 'Inclusa', details: '1 bagagem de mão de até 10kg. A confirmar.' },
      checked: { status: 'Taxa Adicional', details: 'Não inclusa. Custo a confirmar com a cia.' },
    },
    monitoring: { enabled: true },
  },
  {
    id: 4,
    title: 'Estadia em Cusco, Peru',
    savedDate: '2024-07-27',
    totalPrice: 1850,
    sourceUrl: 'https://www.booking.com/hotel/pe/cusco-hostal-rojas.pt-br.html',
    events: [
      { type: 'accommodation', startTime: '14:00', endTime: '11:00', startDate: '2026-01-05', endDate: '2026-01-12', startLocation: 'Cusco', endLocation: 'Cusco Hostal Rojas', duration: '7 noites', details: '2 adultos, 1 quarto', company: { name: 'Booking.com', logo: '🏨' } },
    ],
    additionalCosts: [
      { description: 'Taxa de limpeza', amount: 50, icon: <UsersIcon className="h-4 w-4" /> },
      { description: 'Impostos municipais', amount: 120, icon: <DollarSignIcon className="h-4 w-4" /> },
    ],
    monitoring: { enabled: false },
  },
  {
    id: 3,
    title: 'Voo Circular para Bolívia',
    savedDate: '2024-07-26',
    totalPrice: 2150,
    sourceUrl: 'https://www.google.com/travel/flights/search?tfs=CBwQAhpFEgoyMDI1LTEyLTIyagwIAhIIL20vMDNmMjByDQgDEgkvbS8wMWd3c2MaQxIKMjAyNi0wMS0wNGIMCAISCS9tLzA4NjRseioMCAISCC9tLzAzZjIwcg0IAxIIL20vMDZnNG5qBwgBEgNHUlVAAUgBcAGCAQsI____________AZgBAg&tfu=KgIIAw',
    events: [
      { type: 'flight', startTime: '06:30', endTime: '10:00', startDate: '2025-12-22', endDate: '2025-12-22', startLocation: 'GRU', endLocation: 'VVI', duration: '3h 30m', details: 'Direto', company: { name: 'BoA', logo: <BoaLogoIcon className="h-6 w-6" /> } },
      { type: 'flight', startTime: '15:00', endTime: '16:00', startDate: '2026-01-04', endDate: '2026-01-04', startLocation: 'LPB', endLocation: 'GRU', duration: '3h 00m', details: 'Direto', company: { name: 'BoA', logo: <BoaLogoIcon className="h-6 w-6" /> } },
    ],
    baggage: {
      personal: { status: 'Inclusa', details: '1 item (mochila ou bolsa)' },
      carryOn: { status: 'Inclusa', details: '1 bagagem de mão de até 10kg' },
      checked: { status: 'Inclusa', details: '1 bagagem despachada de 23kg' },
    },
    monitoring: { enabled: true },
  },
  {
    id: 2,
    title: 'Ônibus de São Paulo para Rio',
    savedDate: '2024-07-25',
    totalPrice: 250,
    sourceUrl: 'https://www.clickbus.com.br/onibus/sao-paulo-sp/rio-de-janeiro-rj',
    events: [
      { type: 'bus', startTime: '23:00', endTime: '05:30', startDate: '2025-11-15', endDate: '2025-11-16', startLocation: 'Terminal Tietê, SP', endLocation: 'Rodoviária Novo Rio, RJ', duration: '6h 30m', details: 'Leito', company: { name: 'Viação 1001', logo: <BusIcon className="h-6 w-6" /> } },
    ],
    monitoring: { enabled: false },
  },
  {
    id: 1,
    title: 'Voo GOL para Lima',
    savedDate: '2024-07-24',
    totalPrice: 1570,
    sourceUrl: 'https://www.google.com/travel/flights/search?tfs=CBwQAhpFEgoyMDI1LTEyLTIwagwIAhIIL20vMDNmMjByDQgDEgkvbS8wZGw0cho_EgoyMDI2LTAxLTA1ag0IAxIIL20vMGRsNGxyDAgCEggvbS8wM2YyMHIMCAISCC9tLzAzZjIwcg0IAxIIL20vMDZnNG5qBwgBEgNHUlVAAUgBcAGCAQsI____________AZgBAg&tfu=KgIIAw',
    events: [
      { type: 'flight', startTime: '21:00', endTime: '01:00', startDate: '2025-12-20', endDate: '2025-12-21', startLocation: 'GIG', endLocation: 'LIM', duration: '5h 00m', details: 'Direto', company: { name: 'SKY', logo: <SkyLogoIcon className="h-6 w-6" /> }, operator: 'Operado por GOL' },
      { type: 'flight', startTime: '02:00', endTime: '10:00', startDate: '2026-01-05', endDate: '2026-01-05', startLocation: 'LIM', endLocation: 'GIG', duration: '5h 00m', details: 'Direto', company: { name: 'SKY', logo: <SkyLogoIcon className="h-6 w-6" /> }, warning: 'Voo de madrugada' },
    ],
    baggage: {
      personal: { status: 'Inclusa', details: '1 item (mochila ou bolsa)' },
      carryOn: { status: 'Taxa Adicional', details: 'A partir de R$ 120' },
      checked: { status: 'Taxa Adicional', details: 'A partir de R$ 180' },
    },
    monitoring: { enabled: true },
  },
];


const Dashboard: React.FC = () => {
  const [itineraries, setItineraries] = useState<Itinerary[]>(initialItineraries);
  const [hasApiKey, setHasApiKey] = useState(false);
  const [isKeyChecked, setIsKeyChecked] = useState(false);

  useEffect(() => {
    const checkApiKey = async () => {
      if (window.aistudio) {
        const keyStatus = await window.aistudio.hasSelectedApiKey();
        setHasApiKey(keyStatus);
      }
      setIsKeyChecked(true);
    };
    checkApiKey();
  }, []);

  const handleSelectKey = async () => {
    if (window.aistudio) {
      await window.aistudio.openSelectKey();
      setHasApiKey(true); // Assume success after opening dialog to avoid race condition
    }
  };

  const handleNewItinerary = (newItineraryData: Omit<Itinerary, 'id' | 'savedDate'>) => {
    const newItinerary: Itinerary = {
      ...newItineraryData,
      id: Date.now(),
      savedDate: new Date().toISOString().split('T')[0],
      monitoring: { enabled: newItineraryData.events[0]?.type === 'flight' }
    };

    // Ajusta os logos com base no nome da companhia
    newItinerary.events.forEach(event => {
      if (event.company.name.toLowerCase().includes('latam')) {
        event.company.logo = <LatamLogoIcon className="h-6 w-6" />;
      } else if (event.company.name.toLowerCase().includes('sky')) {
        event.company.logo = <SkyLogoIcon className="h-6 w-6" />;
      } else if (event.company.name.toLowerCase().includes('boa') || event.company.name.toLowerCase().includes('boliviana')) {
        event.company.logo = <BoaLogoIcon className="h-6 w-6" />;
      } else if (event.type === 'accommodation') {
        event.company.logo = <BedIcon className="h-6 w-6" />;
      } else if (event.type === 'bus') {
        event.company.logo = <BusIcon className="h-6 w-6" />;
      }
    });

    setItineraries(prev => [newItinerary, ...prev]);
  };

  const handleApiKeyError = () => {
    setHasApiKey(false);
    alert("Sua chave de API parece inválida ou não foi encontrada. Por favor, selecione uma chave válida para continuar.");
  };

  if (!isKeyChecked) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-900">
        <ActivityIcon className="h-12 w-12 text-cyan-400 animate-spin" />
      </div>
    );
  }

  if (!hasApiKey) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Bem-vindo ao Diário de Bordo</h1>
        <p className="mb-6 max-w-md text-slate-300">Para começar a analisar capturas de tela de viagens com a API do Gemini, por favor, selecione uma chave de API do Google AI Studio.</p>
        <button
          onClick={handleSelectKey}
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
        >
          Selecionar Chave de API
        </button>
        <p className="text-xs text-slate-500 mt-4">
            Isso é necessário para usar os recursos de IA da aplicação.
            <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="underline hover:text-cyan-400 ml-1">
                Saiba mais sobre cobrança.
            </a>
        </p>
      </div>
    );
  }

  const sortedItineraries = [...itineraries].sort((a, b) => b.id - a.id);

  const getEventTypeIcon = (type: string) => {
    switch (type) {
      case 'flight': return <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.428A1 1 0 0010 16.5v-13z" /><path d="M10 16.5a1 1 0 01-1.447-.894l-7-14a1 1 0 011.169-1.409l5 1.428A1 1 0 0110 3.5v13z" /></svg>;
      case 'accommodation': return <BedIcon className="h-5 w-5" />;
      case 'bus': return <BusIcon className="h-5 w-5" />;
      case 'car': return <CarIcon className="h-5 w-5" />;
      case 'train': return <TrainIcon className="h-5 w-5" />;
      default: return <ActivityIcon className="h-5 w-5" />;
    }
  };

  const ItineraryCard: React.FC<{ itinerary: Itinerary }> = ({ itinerary }) => {
    const mainEvent = itinerary.events[0];
    if (!mainEvent) return null;
  
    const eventTypeIcon = getEventTypeIcon(mainEvent.type);

    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl group">
            <div className="p-5">
                <div className="flex justify-between items-start">
                    <div>
                        <div className="flex items-center text-slate-500 mb-1">
                            {eventTypeIcon}
                            <span className="ml-2 text-sm font-medium capitalize">{mainEvent.type}</span>
                            <span className="mx-2">&middot;</span>
                            <span className="text-sm">Salvo em {new Date(itinerary.savedDate).toLocaleDateString('pt-BR')}</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{itinerary.title}</h3>
                         {itinerary.subtitle && <p className="text-sm text-slate-500">{itinerary.subtitle}</p>}
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                        <p className="text-sm text-slate-500">Total</p>
                        <p className="text-2xl font-extrabold text-slate-800">R$ {itinerary.totalPrice.toLocaleString('pt-BR')}</p>
                    </div>
                </div>

                <div className="mt-4 border-t border-slate-200 pt-4">
                    {itinerary.events.map((event, index) => (
                        <div key={index} className={`flex items-center space-x-4 ${index > 0 ? 'mt-3' : ''}`}>
                            <div className="flex-shrink-0 text-slate-500">{event.company.logo}</div>
                            <div className="flex-grow">
                                <div className="flex items-center font-semibold text-slate-700">
                                    <span>{event.startTime}</span>
                                    <span className="mx-2 text-slate-300">&rarr;</span>
                                    <span>{event.endTime}</span>
                                    <span className="ml-auto text-sm font-normal text-slate-500 flex items-center">
                                        <HourglassIcon className="h-4 w-4 mr-1.5" />
                                        {event.duration}
                                    </span>
                                </div>
                                <div className="flex items-center text-sm text-slate-500">
                                    <span>{event.startLocation} ({formatDateForDisplay(event.startDate)})</span>
                                    <span className="mx-2 text-slate-300">&rarr;</span>
                                    <span>{event.endLocation} ({formatDateForDisplay(event.endDate)})</span>
                                </div>
                                 {event.operator && <div className="text-xs text-slate-400 mt-1">Operado por: {event.operator}</div>}
                            </div>
                        </div>
                    ))}
                </div>

                {itinerary.baggage && (
                    <div className="mt-4 border-t border-slate-200 pt-4">
                        <h4 className="text-sm font-bold text-slate-600 mb-2">Franquia de Bagagem</h4>
                        <div className="grid grid-cols-3 gap-4 text-center text-xs">
                            <div className="bg-slate-50 p-2 rounded-lg">
                                <BackpackIcon className="h-5 w-5 mx-auto text-slate-500 mb-1" />
                                <p className="font-semibold text-slate-700">Item Pessoal</p>
                                <p className="text-slate-500">{itinerary.baggage.personal.status}</p>
                            </div>
                            <div className="bg-slate-50 p-2 rounded-lg">
                                <BaggageIcon className="h-5 w-5 mx-auto text-slate-500 mb-1" />
                                <p className="font-semibold text-slate-700">Mala de Mão</p>
                                <p className="text-slate-500">{itinerary.baggage.carryOn.status}</p>
                            </div>
                            <div className="bg-slate-50 p-2 rounded-lg">
                                <SuitcaseIcon className="h-5 w-5 mx-auto text-slate-500 mb-1" />
                                <p className="font-semibold text-slate-700">Mala Despachada</p>
                                <p className="text-slate-500">{itinerary.baggage.checked.status}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="bg-slate-50 px-5 py-3 flex justify-between items-center text-sm">
                <a
                    href={itinerary.events[0]?.company.name === 'LATAM' ? generateLatamSearchUrl(itinerary.events[0]) : itinerary.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-semibold inline-flex items-center"
                >
                    <ExternalLinkIcon className="h-4 w-4 mr-1.5" />
                    Ver Oferta Original
                </a>
                <div className={`px-2 py-1 rounded-full text-xs font-semibold ${itinerary.monitoring?.enabled ? 'bg-green-100 text-green-800' : 'bg-slate-200 text-slate-600'}`}>
                    {itinerary.monitoring?.enabled ? 'Monitorando' : 'Não monitorado'}
                </div>
            </div>
        </div>
    );
  };


  return (
    <main className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-slate-800">Diário de Bordo</h1>
        <p className="text-slate-500 mt-2 text-lg">Seu catálogo pessoal e inteligente para organizar e monitorar voos.</p>
      </header>

      <ImageUploader onItineraryCreated={handleNewItinerary} onApiKeyError={handleApiKeyError} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {sortedItineraries.map(itinerary => (
          <ItineraryCard key={itinerary.id} itinerary={itinerary} />
        ))}
      </div>
    </main>
  );
};

export default Dashboard;