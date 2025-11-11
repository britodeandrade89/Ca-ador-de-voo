import React from 'react';
import type { Itinerary } from './types';
import { 
    LatamLogoIcon, 
    FlybondiLogoIcon,
    JetSmartLogoIcon,
    BrasilSulLogoIcon,
    AguiaBrancaLogoIcon,
    NordesteLogoIcon,
    ShipIcon,
    MaxMilhasLogoIcon,
    AzulLogoIcon,
    DecolarLogoIcon,
    BookingLogoIcon
} from './components/icons';

export const initialItineraries: Itinerary[] = [
  {
    id: 1,
    title: 'LATAM: São Paulo ↔ Buenos Aires',
    savedDate: '2024-07-25',
    totalPrice: 1279.00,
    sourceUrl: '#',
    events: [
      {
        type: 'flight',
        startTime: '00:05', endTime: '03:05', startDate: '04/01', endDate: '04/01',
        startLocation: 'GRU', endLocation: 'EZE', duration: '3h', details: 'Direto',
        company: { name: 'LATAM', logo: React.createElement(LatamLogoIcon, { className: "h-8 w-8" }) },
        operator: 'Latam Airlines Group',
      },
      {
        type: 'flight',
        startTime: '07:10', endTime: '09:55', startDate: '13/01', endDate: '13/01',
        startLocation: 'EZE', endLocation: 'GRU', duration: '2h 45m', details: 'Direto',
        company: { name: 'LATAM', logo: React.createElement(LatamLogoIcon, { className: "h-8 w-8" }) },
        operator: 'Latam Airlines Group',
      }
    ],
  },
  {
    id: 2,
    title: 'Flybondi: Rio de Janeiro ↔ Buenos Aires',
    savedDate: '2024-07-25',
    totalPrice: 1530.00,
    sourceUrl: '#',
    events: [
      {
        type: 'flight',
        startTime: '20:45', endTime: '00:10', startDate: '10/01', endDate: '11/01',
        startLocation: 'GIG', endLocation: 'EZE', duration: '3h 25m', details: 'Direto',
        company: { name: 'Flybondi', logo: React.createElement(FlybondiLogoIcon, { className: "h-8 w-8" }) },
      },
      {
        type: 'flight',
        startTime: '17:00', endTime: '19:55', startDate: '19/01', endDate: '19/01',
        startLocation: 'EZE', endLocation: 'GIG', duration: '2h 55m', details: 'Direto',
        company: { name: 'Flybondi', logo: React.createElement(FlybondiLogoIcon, { className: "h-8 w-8" }) },
      }
    ],
  },
  {
    id: 3,
    title: 'Ônibus Brasil Sul: São Paulo → Foz do Iguaçu',
    savedDate: '2024-07-25',
    totalPrice: 199.99,
    sourceUrl: '#',
    events: [
      {
        type: 'bus',
        startTime: '13:00', endTime: '05:15', startDate: '13/01', endDate: '14/01',
        startLocation: 'São Paulo (Barra Funda)', endLocation: 'Foz do Iguaçu', duration: '16h 15m', details: 'Leito',
        company: { name: 'Brasil Sul', logo: React.createElement(BrasilSulLogoIcon, { className: "h-8 w-auto" }) },
      }
    ],
  },
  {
    id: 4,
    title: 'Ônibus Águia Branca: Rio de Janeiro → São Paulo',
    savedDate: '2024-07-25',
    totalPrice: 149.90,
    sourceUrl: '#',
    events: [
      {
        type: 'bus',
        startTime: '00:20', endTime: '07:20', startDate: '13/01', endDate: '13/01',
        startLocation: 'Rio de Janeiro (Novo Rio)', endLocation: 'São Paulo (Barra Funda)', duration: '7h', details: 'Leito',
        company: { name: 'Águia Branca', logo: React.createElement(AguiaBrancaLogoIcon, { className: "h-8 w-auto" }) },
      }
    ],
  },
   {
    id: 5,
    title: 'JetSMART: Buenos Aires ↔ Bariloche',
    savedDate: '2024-07-25',
    totalPrice: 250.00,
    sourceUrl: '#',
    events: [
      {
        type: 'flight',
        startTime: '18:20', endTime: '20:39', startDate: '21/01', endDate: '21/01',
        startLocation: 'AEP', endLocation: 'BRC', duration: '2h 19m', details: 'Direto',
        company: { name: 'JetSMART', logo: React.createElement(JetSmartLogoIcon, { className: "h-8 w-8" }) },
      },
      {
        type: 'flight',
        startTime: '08:59', endTime: '11:06', startDate: '25/01', endDate: '25/01',
        startLocation: 'BRC', endLocation: 'AEP', duration: '2h 7m', details: 'Direto',
        company: { name: 'JetSMART', logo: React.createElement(JetSmartLogoIcon, { className: "h-8 w-8" }) },
      }
    ],
  },
  {
    id: 6,
    title: 'JetSMART: Buenos Aires → Rio de Janeiro',
    subtitle: 'Apenas tarifa, sem taxas',
    savedDate: '2024-07-25',
    totalPrice: 296.15,
    sourceUrl: '#',
    events: [
      {
        type: 'flight',
        startTime: '19:15', endTime: '22:10', startDate: '28/01', endDate: '28/01',
        startLocation: 'EZE', endLocation: 'GIG', duration: '2h 55m', details: 'Direto',
        company: { name: 'JetSMART', logo: React.createElement(JetSmartLogoIcon, { className: "h-8 w-8" }) },
      }
    ],
  },
   {
    id: 7,
    title: 'Ônibus Nordeste: Foz do Iguaçu → Assunção',
    savedDate: '2024-07-25',
    totalPrice: 110.00,
    sourceUrl: '#',
    events: [
      {
        type: 'bus',
        startTime: '08:00', endTime: '15:00', startDate: '16/01', endDate: '16/01',
        startLocation: 'Foz do Iguaçu', endLocation: 'Assunção', duration: '7h', details: 'Semileito',
        company: { name: 'Nordeste', logo: React.createElement(NordesteLogoIcon, { className: "h-8 w-auto" }) },
      }
    ],
  },
  {
    id: 8,
    title: 'Ônibus Nordeste: Assunção → Foz do Iguaçu',
    savedDate: '2024-07-25',
    totalPrice: 110.00,
    sourceUrl: '#',
    events: [
      {
        type: 'bus',
        startTime: '09:20', endTime: '18:45', startDate: '19/01', endDate: '19/01',
        startLocation: 'Assunção', endLocation: 'Foz do Iguaçu', duration: '9h 25m', details: 'Semileito',
        company: { name: 'Nordeste', logo: React.createElement(NordesteLogoIcon, { className: "h-8 w-auto" }) },
      }
    ],
  },
  {
    id: 9,
    title: 'JetSMART: Puerto Iguazú → Buenos Aires',
    savedDate: '2024-07-25',
    totalPrice: 122.00,
    sourceUrl: '#',
    events: [
      {
        type: 'flight',
        startTime: '21:32', endTime: '23:28', startDate: '19/01', endDate: '19/01',
        startLocation: 'IGR', endLocation: 'AEP', duration: '1h 56m', details: 'Direto',
        company: { name: 'JetSMART', logo: React.createElement(JetSmartLogoIcon, { className: "h-8 w-8" }) },
      }
    ],
  },
  {
    id: 10,
    title: 'JetSMART: Buenos Aires ↔ Mendoza',
    savedDate: '2024-07-25',
    totalPrice: 227.00,
    sourceUrl: '#',
    events: [
      {
        type: 'flight',
        startTime: '14:04', endTime: '15:59', startDate: '22/01', endDate: '22/01',
        startLocation: 'AEP', endLocation: 'MDZ', duration: '1h 55m', details: 'Direto',
        company: { name: 'JetSMART', logo: React.createElement(JetSmartLogoIcon, { className: "h-8 w-8" }) },
      },
      {
        type: 'flight',
        startTime: '08:48', endTime: '10:26', startDate: '24/01', endDate: '24/01',
        startLocation: 'MDZ', endLocation: 'AEP', duration: '1h 38m', details: 'Direto',
        company: { name: 'JetSMART', logo: React.createElement(JetSmartLogoIcon, { className: "h-8 w-8" }) },
      }
    ],
  },
  {
    id: 11,
    title: 'JetSMART: Buenos Aires ↔ Ushuaia',
    savedDate: '2024-07-25',
    totalPrice: 744.00,
    sourceUrl: '#',
    events: [
      {
        type: 'flight',
        startTime: '14:45', endTime: '18:23', startDate: '22/01', endDate: '22/01',
        startLocation: 'EZE', endLocation: 'USH', duration: '3h 38m', details: 'Direto',
        company: { name: 'JetSMART', logo: React.createElement(JetSmartLogoIcon, { className: "h-8 w-8" }) },
      },
      {
        type: 'flight',
        startTime: '21:23', endTime: '00:53', startDate: '25/01', endDate: '26/01',
        startLocation: 'USH', endLocation: 'EZE', duration: '3h 30m', details: 'Direto',
        company: { name: 'JetSMART', logo: React.createElement(JetSmartLogoIcon, { className: "h-8 w-8" }) },
      }
    ],
  },
  {
    id: 12,
    title: 'Buquebus: Buenos Aires → Montevidéu',
    subtitle: 'Apenas Ida (Ferry + Ônibus)',
    savedDate: '2024-07-25',
    totalPrice: 275.02, // 50.93 USD * 5.40 BRL
    sourceUrl: '#',
    events: [
      {
        type: 'bus', // A Buquebus classifica como ônibus + ferry, usando um ícone genérico
        startTime: '18:45', endTime: '22:45', startDate: '21/01', endDate: '21/01',
        startLocation: 'Buenos Aires', endLocation: 'Montevidéu', duration: '4h 0m', details: 'Ferry + Ônibus',
        company: { name: 'Buquebus', logo: React.createElement(ShipIcon, { className: "h-8 w-8 text-cyan-700" }) },
      }
    ],
  },
    {
    id: 13,
    title: 'JetSMART: Montevidéu → Rio de Janeiro',
    subtitle: 'Apenas tarifa, sem taxas',
    savedDate: '2024-07-25',
    totalPrice: 269.23,
    sourceUrl: '#',
    events: [
      {
        type: 'flight',
        startTime: '14:12', endTime: '16:55', startDate: '27/01', endDate: '27/01',
        startLocation: 'MVD', endLocation: 'GIG', duration: '2h 43m', details: 'Direto',
        company: { name: 'JetSMART', logo: React.createElement(JetSmartLogoIcon, { className: "h-8 w-8" }) },
      }
    ],
  },
  {
    id: 14,
    title: 'LATAM: Rio de Janeiro → Porto Seguro (18/12)',
    subtitle: 'Só Ida · Econômica · 1 passageiro',
    savedDate: '2024-07-26',
    totalPrice: 492.00,
    sourceUrl: 'https://www.google.com/flights',
    events: [
      {
        type: 'flight',
        startTime: '23:40',
        endTime: '01:15',
        startDate: '18/12',
        endDate: '19/12',
        startLocation: 'GIG',
        endLocation: 'BPS',
        duration: '1h 35m',
        details: 'Sem escalas',
        company: { name: 'LATAM', logo: React.createElement(LatamLogoIcon, { className: "h-10 w-10" }) },
        operator: 'Operado por Latam Airlines Brasil',
      }
    ],
    baggage: {
      personal: { status: 'Não disponível', details: 'Item pessoal (bolsa ou mochila)' },
      carryOn: { status: 'Inclusa', details: '1 bagagem de mão incluída' },
      checked: { status: 'Taxa Adicional', details: 'Uma bagagem despachada cobrada à parte' },
    },
    bookingOptions: [
        {
            provider: 'Reserve com a LATAM',
            price: 532.00,
            url: '#',
            logo: React.createElement(LatamLogoIcon, { className: "h-10 w-10" }),
            tag: 'Companhia aérea'
        },
        {
            provider: 'Reserve com a maxmilhas',
            price: 492.00,
            url: '#',
            logo: React.createElement(MaxMilhasLogoIcon, { className: "h-10 w-10 p-1", style: { borderRadius: '8px' } })
        }
    ],
  },
  {
    id: 15,
    title: 'Azul: Porto Seguro → Rio de Janeiro',
    subtitle: 'Só Ida · Econômica · 1 passageiro',
    savedDate: '2024-07-26',
    totalPrice: 316.00,
    sourceUrl: 'https://www.google.com/flights',
    events: [
      {
        type: 'flight',
        startTime: '16:30',
        endTime: '20:25',
        startDate: '24/12',
        endDate: '24/12',
        startLocation: 'BPS',
        endLocation: 'SDU',
        duration: '3h 55m',
        details: '1 parada em CNF (1h 30m)',
        company: { name: 'Azul', logo: React.createElement(AzulLogoIcon, { className: "h-10 w-10" }) },
      }
    ],
    baggage: {
      personal: { status: 'Não disponível', details: 'Item pessoal (bolsa ou mochila)' },
      carryOn: { status: 'Inclusa', details: '1 bagagem de mão incluída' },
      checked: { status: 'Taxa Adicional', details: 'Uma bagagem despachada cobrada à parte' },
    },
    bookingOptions: [
        {
            provider: 'Reserve com a Decolar',
            price: 316.00,
            url: '#',
            logo: React.createElement(DecolarLogoIcon, { className: "h-10 w-10" }),
        },
        {
            provider: 'Reserve com a Booking.com',
            price: 325.00,
            url: '#',
            logo: React.createElement(BookingLogoIcon, { className: "h-10 w-10" })
        }
    ],
  },
  {
    id: 16,
    title: 'LATAM: Rio de Janeiro → Porto Seguro (20/12)',
    subtitle: 'Só Ida · Econômica · 1 passageiro',
    savedDate: '2024-07-26',
    totalPrice: 492.00,
    sourceUrl: 'https://www.google.com/flights',
    events: [
      {
        type: 'flight',
        startTime: '23:40',
        endTime: '01:15',
        startDate: '20/12',
        endDate: '21/12',
        startLocation: 'GIG',
        endLocation: 'BPS',
        duration: '1h 35m',
        details: 'Sem escalas',
        company: { name: 'LATAM', logo: React.createElement(LatamLogoIcon, { className: "h-10 w-10" }) },
        operator: 'Operado por Latam Airlines Brasil',
      }
    ],
    baggage: {
      personal: { status: 'Não disponível', details: 'Item pessoal (bolsa ou mochila)' },
      carryOn: { status: 'Inclusa', details: '1 bagagem de mão incluída' },
      checked: { status: 'Taxa Adicional', details: 'Uma bagagem despachada cobrada à parte' },
    },
    bookingOptions: [
        {
            provider: 'Reserve com a LATAM',
            price: 532.00,
            url: '#',
            logo: React.createElement(LatamLogoIcon, { className: "h-10 w-10" }),
            tag: 'Companhia aérea'
        },
        {
            provider: 'Reserve com a maxmilhas',
            price: 492.00,
            url: '#',
            logo: React.createElement(MaxMilhasLogoIcon, { className: "h-10 w-10 p-1", style: { borderRadius: '8px' } })
        }
    ],
  },
];