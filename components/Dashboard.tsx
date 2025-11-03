import React, { useState, useEffect } from 'react';
import { Itinerary, PriceHistoryItem } from '../types';
import {
  AlertTriangleIcon, BackpackIcon, BusIcon, CarIcon, DollarSignIcon,
  ExternalLinkIcon, HourglassIcon, LatamLogoIcon, SkyLogoIcon,
  SuitcaseIcon, TrainIcon, MapPinIcon, BoaLogoIcon, ActivityIcon,
  BedIcon,
  BaggageIcon,
  UsersIcon,
} from './icons';
import ImageUploader from './ImageUploader';

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
       { type: 'flight', startTime: '04:00', endTime: '19:10', startDate: '14 de jan', endDate: '14 de jan', startLocation: 'GRU', endLocation: 'BOG', duration: '17h 10m', details: '1 parada', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Airlines Brasil | LATAM Airlines Colombia' },
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
       { type: 'flight', startTime: '01:50', endTime: '19:10', startDate: '13 de jan', endDate: '13 de jan', startLocation: 'GRU', endLocation: 'BOG', duration: '19h 20m', details: '2 paradas', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Group, Vamos Air | LATAM Airlines Colombia' },
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
       { type: 'flight', startTime: '23:55', endTime: '04:10', startDate: '12 de jan', endDate: '13 de jan', startLocation: 'GRU', endLocation: 'BOG', duration: '6h 15m', details: 'Direto', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Airlines Colombia' },
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
       { type: 'flight', startTime: '01:50', endTime: '16:15', startDate: '11 de jan', endDate: '11 de jan', startLocation: 'GRU', endLocation: 'BOG', duration: '16h 25m', details: '2 paradas', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Airlines Group | LATAM Airlines Perú' },
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
       { type: 'flight', startTime: '08:15', endTime: '12:15', startDate: '10 de jan', endDate: '10 de jan', startLocation: 'GRU', endLocation: 'BOG', duration: '6h 00m', details: 'Direto', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Airlines Colombia' },
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
       { type: 'flight', startTime: '08:15', endTime: '12:15', startDate: '09 de jan', endDate: '09 de jan', startLocation: 'GRU', endLocation: 'BOG', duration: '6h 00m', details: 'Direto', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Airlines Colombia' },
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
       { type: 'flight', startTime: '16:30', endTime: '03:15', startDate: '08 de jan', endDate: '09 de jan', startLocation: 'GRU', endLocation: 'BOG', duration: '12h 45m', details: '1 parada', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Airlines Perú | LATAM Airlines Colombia' },
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
       { type: 'flight', startTime: '08:15', endTime: '12:15', startDate: '07 de jan', endDate: '07 de jan', startLocation: 'GRU', endLocation: 'BOG', duration: '6h 00m', details: 'Direto', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Airlines Colombia' },
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
       { type: 'flight', startTime: '07:35', endTime: '16:10', startDate: '01 de jan', endDate: '01 de jan', startLocation: 'GRU', endLocation: 'BOG', duration: '10h 35m', details: '1 parada', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Airlines Brasil | LATAM Airlines Perú' },
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
       { type: 'flight', startTime: '08:15', endTime: '12:15', startDate: '31 de dez', endDate: '31 de dez', startLocation: 'GRU', endLocation: 'BOG', duration: '6h 00m', details: 'Direto', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Airlines Colombia' },
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
       { type: 'flight', startTime: '21:20', endTime: '12:05', startDate: '30 de dez', endDate: '31 de dez', startLocation: 'GRU', endLocation: 'BOG', duration: '16h 45m', details: '2 paradas', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Group' },
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
       { type: 'flight', startTime: '23:55', endTime: '04:10', startDate: '29 de dez', endDate: '30 de dez', startLocation: 'GRU', endLocation: 'BOG', duration: '6h 15m', details: 'Direto', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Airlines Colombia' },
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
       { type: 'flight', startTime: '07:55', endTime: '20:50', startDate: '24 de dez', endDate: '24 de dez', startLocation: 'GRU', endLocation: 'BOG', duration: '14h 55m', details: '2 paradas', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM / Vamos Air' },
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
       { type: 'flight', startTime: '19:45', endTime: '12:05', startDate: '23 de dez', endDate: '24 de dez', startLocation: 'GRU', endLocation: 'BOG', duration: '18h 20m', details: '1 parada', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'LATAM Group' },
    ],
    baggage: {
      personal: { status: 'Inclusa', details: '1 item (mochila ou bolsa). A confirmar.' },
      carryOn: { status: 'Inclusa', details: '1 bagagem de mão de até 10kg. A confirmar.' },
      checked: { status: 'Taxa Adicional', details: 'Não inclusa. Custo a confirmar com a cia.' },
    },
    monitoring: { enabled: true },
  },
  // OPÇÃO 1
  {
    id: 1,
    title: 'Opção 1: LATAM - Sky Airline (Conexão Longa)',
    savedDate: '2024-07-26',
    totalPrice: 1954,
    sourceUrl: 'https://www.google.com/travel/flights',
    events: [
       { type: 'flight', startTime: '04:00', endTime: '07:00', startDate: '20 de jan', endDate: '20 de jan', startLocation: 'GRU', endLocation: 'LIM', duration: '5h', details: 'Direto', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'Latam Airlines Brasil' },
       { type: 'flight', startTime: '04:50', endTime: '06:15', startDate: '26 de jan', endDate: '26 de jan', startLocation: 'LIM', endLocation: 'CUZ', duration: '1h 25m', details: 'Direto', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'Latam Airlines Peru' },
       { type: 'flight', startTime: '21:45', endTime: '04:55', startDate: '01 de fev', endDate: '02 de fev', startLocation: 'CUZ', endLocation: 'GRU', duration: '29h 10m', details: '1 parada em LIM', company: { name: 'Sky Airline', logo: <SkyLogoIcon className="h-6 w-6" /> }, operator: 'Sky Airline Peru Sac', warning: 'Longa Conexão (22h 15m em LIM)' },
    ],
    baggage: {
      personal: { status: 'Inclusa', details: '1 item (mochila ou bolsa) que vai abaixo do assento.' },
      carryOn: { status: 'Inclusa', details: '1 bagagem de mão de até 10kg que vai no compartimento superior.' },
      checked: { status: 'Taxa Adicional', details: 'Não inclusa. Custo a partir de R$210 por trecho/passageiro.' },
    },
  },
  // OPÇÃO 2
  {
    id: 2,
    title: 'Opção 2: BoA - LATAM - Sky',
    savedDate: '2024-07-26',
    totalPrice: 2354,
    sourceUrl: 'https://www.google.com/travel/flights',
    events: [
        { type: 'flight', startTime: '14:00', endTime: '18:25', startDate: '19 de jan', endDate: '19 de jan', startLocation: 'GRU', endLocation: 'LPB', duration: '5h 25m', details: '1 parada em VVI', company: { name: 'BoA', logo: <BoaLogoIcon className="h-6 w-6" /> }, warning: 'Conexão de 1h 30m em VVI' },
        { type: 'flight', startTime: '16:30', endTime: '18:00', startDate: '26 de jan', endDate: '26 de jan', startLocation: 'CUZ', endLocation: 'LIM', duration: '1h 30m', details: 'Sem escalas', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'Latam Airlines Peru' },
        { type: 'flight', startTime: '21:35', endTime: '04:55', startDate: '31 de jan', endDate: '01 de fev', startLocation: 'LIM', endLocation: 'GRU', duration: '5h 20m', details: 'Sem escalas', company: { name: 'Sky Airline', logo: <SkyLogoIcon className="h-6 w-6" /> }, operator: 'Sky Airline Peru Sac' },
    ],
     baggage: {
      personal: { status: 'Inclusa', details: '1 item pessoal por trecho.' },
      carryOn: { status: 'Inclusa', details: '1 bagagem de mão por trecho.' },
      checked: { status: 'Taxa Adicional', details: 'Bagagem despachada cobrada à parte no trecho 2. Verifique políticas para os outros trechos.' },
    },
  },
  // OPÇÃO 3
  {
    id: 3,
    title: 'Opção 3: BoA - Sky (com ônibus e estadia)',
    subtitle: 'Preço total estimado',
    savedDate: '2024-07-26',
    totalPrice: 2322 + 436.48 + 400 + 60 + 60 + 249.75,
    sourceUrl: 'https://www.google.com/travel/flights',
    events: [
        { type: 'flight', startTime: '14:00', endTime: '18:25', startDate: '19 de jan', endDate: '19 de jan', startLocation: 'GRU', endLocation: 'LPB', duration: '5h 25m', details: '1 parada em VVI', company: { name: 'BoA', logo: <BoaLogoIcon className="h-6 w-6" /> }, warning: 'Conexão de 1h 30m em VVI' },
        { type: 'accommodation', startTime: 'Check-in', endTime: 'Check-out', startDate: '19 de jan', endDate: '22 de jan', startLocation: 'La Paz', endLocation: 'Luxstone Executive & Suites', duration: '3 noites', details: 'Estadia para 2 adultos', company: { name: 'Booking.com', logo: <BedIcon className="h-6 w-6 text-indigo-600"/> } },
        { type: 'bus', startTime: '15:30', endTime: '06:00', startDate: '22 de jan', endDate: '23 de jan', startLocation: 'La Paz', endLocation: 'Cusco', duration: '15h 30m', details: 'Terminal De Buses La Paz', company: { name: 'Transzela', logo: <BusIcon className="h-6 w-6 text-green-600" /> } },
        { type: 'flight', startTime: '12:10', endTime: '13:45', startDate: '26 de jan', endDate: '26 de jan', startLocation: 'CUZ', endLocation: 'LIM', duration: '1h 35m', details: 'Sem escalas', company: { name: 'Sky Airline', logo: <SkyLogoIcon className="h-6 w-6" /> }, operator: 'Sky Airline Peru Sac' },
        { type: 'flight', startTime: '21:35', endTime: '04:55', startDate: '31 de jan', endDate: '01 de fev', startLocation: 'LIM', endLocation: 'GRU', duration: '5h 20m', details: 'Sem escalas', company: { name: 'Sky Airline', logo: <SkyLogoIcon className="h-6 w-6" /> }, operator: 'Sky Airline Peru Sac' },
    ],
    baggage: {
      personal: { status: 'Inclusa', details: '1 item pessoal por voo.' },
      carryOn: { status: 'Inclusa', details: '1 bagagem de mão por voo.' },
      checked: { status: 'Taxa Adicional', details: 'Sem bagagem despachada inclusa nos voos. Verifique a política de bagagem para o ônibus.' },
    },
    additionalCosts: [
        { description: 'Estadia em La Paz (3 noites)', amount: 249.75, icon: <BedIcon className="h-5 w-5" /> },
        { description: 'Ônibus La Paz -> Cusco (2 Adultos)', amount: 436.48, icon: <BusIcon className="h-5 w-5" /> },
        { description: 'Transporte Cusco -> Machu Picchu (estimativa 2 adultos)', amount: 400, icon: <TrainIcon className="h-5 w-5" /> },
        { description: 'Uber Aeroporto El Alto -> Centro (estimativa)', amount: 60, icon: <CarIcon className="h-5 w-5" /> },
        { description: 'Uber Aeroporto Lima -> Miraflores (estimativa)', amount: 60, icon: <CarIcon className="h-5 w-5" /> },
    ]
  },
  // OPÇÃO 4 - NOVA OPÇÃO COM MONITORAMENTO
  {
    id: 4,
    title: 'Opção 4: BoA - Sky - LATAM (Monitorado)',
    savedDate: '2024-07-27',
    totalPrice: 2545,
    sourceUrl: 'https://www.google.com/travel/flights/search?tfs=CBwQAhojEgoyMDI2LTAxLTE5agcIARIDR1JVcgwIAxIIL20vMGJycTQaKBIKMjAyNi0wMS0yNmoMCAMSCC9tLzBqbGQzcgwIAxIIL20vMGxwZmgaIxIKMjAyNi0wMS0zMWoMCAMSCC9tLzBscGZocgcIARIDR1JVQAFIAXABggELCP___________wGYAQM&tfu=EgIIACIA&hl=pt-BR&gl=br&curr=BRL',
    events: [
        { type: 'flight', startTime: '14:00', endTime: '18:25', startDate: '19 de jan', endDate: '19 de jan', startLocation: 'GRU', endLocation: 'LPB', duration: '5h 25m', details: '1 parada em VVI', company: { name: 'BoA', logo: <BoaLogoIcon className="h-6 w-6" /> }, warning: 'Conexão de 1h 30m em VVI' },
        { type: 'flight', startTime: '12:10', endTime: '13:45', startDate: '26 de jan', endDate: '26 de jan', startLocation: 'CUZ', endLocation: 'LIM', duration: '1h 35m', details: 'Sem escalas', company: { name: 'Sky Airline', logo: <SkyLogoIcon className="h-6 w-6" /> }, operator: 'Sky Airline Peru Sac' },
        { type: 'flight', startTime: '00:30', endTime: '11:05', startDate: '31 de jan', endDate: '31 de jan', startLocation: 'LIM', endLocation: 'GRU', duration: '11h 35m', details: '1 parada em BSB', company: { name: 'LATAM', logo: <LatamLogoIcon className="h-6 w-6" /> }, operator: 'Latam Airlines Peru', warning: 'Longa Conexão (5h 15m em BSB)' },
    ],
     baggage: {
      personal: { status: 'Inclusa', details: '1 item pessoal por trecho.' },
      carryOn: { status: 'Inclusa', details: '1 bagagem de mão por trecho.' },
      checked: { status: 'Taxa Adicional', details: 'Bagagem despachada cobrada à parte nos trechos da LATAM e Sky. Verifique política da BoA.' },
    },
    monitoring: { enabled: true },
  },
];

const getCompanyLogo = (companyName: string) => {
    const lowerCaseName = companyName.toLowerCase();
    if (lowerCaseName.includes('latam')) return <LatamLogoIcon className="h-6 w-6" />;
    if (lowerCaseName.includes('sky')) return <SkyLogoIcon className="h-6 w-6" />;
    if (lowerCaseName.includes('boa') || lowerCaseName.includes('boliviana')) return <BoaLogoIcon className="h-6 w-6" />;
    if (lowerCaseName.includes('booking')) return <BedIcon className="h-6 w-6 text-indigo-600"/>;
    // Default logo
    return <MapPinIcon className="h-6 w-6 text-slate-500" />;
};


const ItineraryCard: React.FC<{ itinerary: Itinerary }> = ({ itinerary }) => {
    const [currentPrice, setCurrentPrice] = useState(itinerary.totalPrice);
    const [priceHistory, setPriceHistory] = useState<PriceHistoryItem[]>([]);
    const [lastChecked, setLastChecked] = useState<Date | null>(null);

    useEffect(() => {
        if (!itinerary.monitoring?.enabled) return;

        const initialHistoryItem: PriceHistoryItem = {
            timestamp: new Date(),
            price: itinerary.totalPrice,
        };
        setPriceHistory([initialHistoryItem]);
        setLastChecked(initialHistoryItem.timestamp);

        const interval = setInterval(() => {
            setCurrentPrice(prevPrice => {
                const changePercentage = (Math.random() - 0.5) * 0.1; // Flutuação de +/- 5%
                const newPrice = Math.round(prevPrice * (1 + changePercentage));

                const newHistoryItem: PriceHistoryItem = {
                    timestamp: new Date(),
                    price: newPrice,
                };
                setPriceHistory(prev => [newHistoryItem, ...prev.slice(0, 4)]);
                setLastChecked(newHistoryItem.timestamp);

                return newPrice;
            });
        }, 15000); // A cada 15 segundos para demonstração

        return () => clearInterval(interval);
    }, [itinerary.monitoring, itinerary.totalPrice]);

    const totalAdditionalCost = itinerary.additionalCosts?.reduce((sum, cost) => sum + cost.amount, 0) ?? 0;
    const displayPrice = itinerary.monitoring?.enabled ? currentPrice : (itinerary.totalPrice);

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8 border border-slate-200">
            <div className="p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="text-xl font-bold text-slate-800">{itinerary.title}</h2>
                        {itinerary.subtitle && <p className="text-sm text-slate-500">{itinerary.subtitle}</p>}
                        <p className="text-sm text-slate-500">Salvo em: {itinerary.savedDate}</p>
                    </div>
                    <a href={itinerary.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1">
                        Ver Oferta Original <ExternalLinkIcon className="h-4 w-4" />
                    </a>
                </div>

                <div className="mt-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-md font-semibold text-slate-600">{itinerary.subtitle ? 'Preço Estimado' : 'Preço Total'}</span>
                        <span className="text-3xl font-bold text-green-600">R$ {displayPrice.toLocaleString('pt-BR')}</span>
                    </div>

                    {/* Timeline de Eventos */}
                    <div className="relative border-l-2 border-slate-200 ml-3 mt-6">
                        {itinerary.events.map((event, index) => {
                             let eventBg, eventBorder, iconBg;
                             switch(event.type) {
                                case 'bus':
                                    eventBg = 'bg-green-50';
                                    eventBorder = 'border-green-200';
                                    iconBg = 'bg-green-100';
                                    break;
                                case 'accommodation':
                                    eventBg = 'bg-indigo-50';
                                    eventBorder = 'border-indigo-200';
                                    iconBg = 'bg-indigo-100';
                                    break;
                                default: // flight
                                    eventBg = event.warning ? 'bg-amber-50' : 'bg-transparent';
                                    eventBorder = event.warning ? 'border-amber-300' : 'border-slate-200';
                                    iconBg = 'bg-blue-100';
                                    break;
                             }
                             
                             const eventLogo = typeof event.company.logo === 'string'
                                ? getCompanyLogo(event.company.logo)
                                : event.company.logo;
                            
                            return (
                            <div key={index} className={`mb-6 ml-8 p-4 rounded-lg border ${eventBg} ${eventBorder}`}>
                                <span className={`absolute flex items-center justify-center w-8 h-8 ${iconBg} rounded-full -left-4 ring-4 ring-white`}>
                                    {eventLogo}
                                </span>
                                
                                {event.type === 'accommodation' ? (
                                    <>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-700">Estadia em {event.startLocation}</h3>
                                                <p className="text-sm text-slate-500">{event.endLocation}</p>
                                            </div>
                                            <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-full">{event.startDate} a {event.endDate}</span>
                                        </div>
                                        <div className="mt-3 grid grid-cols-2 gap-4 text-sm text-slate-600">
                                            <div className="flex items-center gap-2"><HourglassIcon className="h-4 w-4 text-slate-400" /> <span>{event.duration}</span></div>
                                            <div className="flex items-center gap-2"><UsersIcon className="h-4 w-4 text-slate-400" /> <span>{event.details}</span></div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h3 className="text-lg font-bold text-slate-700">{event.startLocation} &rarr; {event.endLocation}</h3>
                                                <p className="text-sm text-slate-500">{event.company.name} {event.operator && `(Operado por ${event.operator})`}</p>
                                            </div>
                                            <span className="bg-slate-100 text-slate-600 text-xs font-semibold px-2.5 py-1 rounded-full">{event.startDate}</span>
                                        </div>
                                        <div className="mt-3 grid grid-cols-3 gap-4 text-sm text-slate-600">
                                            <div className="flex items-center gap-2"><MapPinIcon className="h-4 w-4 text-slate-400" /> <span>{event.startTime} - {event.endTime}</span></div>
                                            <div className="flex items-center gap-2"><HourglassIcon className="h-4 w-4 text-slate-400" /> <span>{event.duration}</span></div>
                                            <div className="flex items-center gap-2"><MapPinIcon className="h-4 w-4 text-slate-400" /> <span>{event.details}</span></div>
                                        </div>
                                        {event.warning && (
                                            <div className="mt-3 p-2 bg-amber-100 border border-amber-200 rounded-md text-amber-800 text-xs flex items-center gap-2">
                                                <AlertTriangleIcon className="h-4 w-4" />
                                                {event.warning}
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        )})}
                    </div>
                </div>

                {itinerary.additionalCosts && itinerary.additionalCosts.length > 0 && (
                     <div className="mt-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                         <h3 className="font-bold text-slate-700 mb-3">Estimativa de Custos Adicionais</h3>
                         <ul className="space-y-2">
                             {itinerary.additionalCosts.map((cost, i) => (
                                 <li key={i} className="flex justify-between items-center text-sm">
                                     <span className="flex items-center gap-2 text-slate-600">{cost.icon} {cost.description}</span>
                                     <span className="font-semibold text-slate-800">R$ {cost.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                                 </li>
                             ))}
                             <li className="flex justify-between items-center text-sm font-bold border-t pt-2 mt-2 border-slate-200">
                                 <span className="flex items-center gap-2 text-slate-700"><DollarSignIcon className="h-5 w-5" /> Subtotal</span>
                                 <span className="text-slate-900">R$ {totalAdditionalCost.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                             </li>
                         </ul>
                     </div>
                 )}
                
                {itinerary.monitoring?.enabled && (
                    <div className="mt-4 p-4 rounded-lg bg-blue-50 border border-blue-200">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-blue-800 flex items-center gap-2">
                                <ActivityIcon className="h-5 w-5 animate-pulse"/>
                                Monitoramento de Preço Ativo
                            </h3>
                            <span className="text-xs text-blue-600">
                                {lastChecked ? `Última verificação: ${lastChecked.toLocaleTimeString('pt-BR')}` : 'Aguardando primeira verificação...'}
                            </span>
                        </div>
                        <div className="max-h-32 overflow-y-auto pr-2">
                            <ul className="space-y-1">
                                {priceHistory.map(item => (
                                    <li key={item.timestamp.toISOString()} className="flex justify-between items-center text-sm bg-white p-2 rounded">
                                        <span className="text-slate-500">{item.timestamp.toLocaleString('pt-BR')}</span>
                                        <span className={`font-semibold ${item.price > (priceHistory[priceHistory.length-1]?.price ?? 0) ? 'text-red-500' : 'text-green-600'}`}>R$ {item.price.toLocaleString('pt-BR')}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}


                {itinerary.baggage && <div className="mt-4 p-4 rounded-lg bg-slate-50 border border-slate-200">
                    <h3 className="font-bold text-slate-700 mb-3">Detalhes da Bagagem</h3>
                    <ul className="space-y-3">
                        {[
                            { icon: <BackpackIcon className="h-5 w-5 text-slate-500"/>, label: 'Item Pessoal (Mochila/Bolsa)', data: itinerary.baggage.personal },
                            { icon: <SuitcaseIcon className="h-5 w-5 text-slate-500"/>, label: 'Bagagem de Mão (Até 10kg)', data: itinerary.baggage.carryOn },
                            { icon: <BaggageIcon className="h-5 w-5 text-slate-500"/>, label: 'Bagagem Despachada (23kg)', data: itinerary.baggage.checked },
                        ].map(item => (
                             <li key={item.label} className="flex items-start gap-4">
                                {item.icon}
                                <div className="flex-grow">
                                    <div className="flex justify-between items-center">
                                        <p className="font-semibold text-slate-800">{item.label}</p>
                                        <span className={`px-2 py-0.5 text-xs font-semibold rounded-full ${item.data.status === 'Inclusa' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>{item.data.status}</span>
                                    </div>
                                    <p className="text-sm text-slate-600">{item.data.details}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>}

                <p className="text-xs text-slate-400 mt-6 text-center">
                    As políticas de bagagem e os custos são estimativas. Sempre confirme as regras e valores no site da companhia aérea antes de comprar e voar.
                </p>
            </div>
        </div>
    );
};


const Dashboard: React.FC = () => {
    const [itineraries, setItineraries] = useState<Itinerary[]>(initialItineraries);
    // FIX: Added state to manage the API key selection flow.
    const [keyCheckStatus, setKeyCheckStatus] = useState<'checking' | 'ready' | 'needed'>('checking');

    useEffect(() => {
        const checkKey = async () => {
            // The `window.aistudio` object is used to interact with the host environment for API key management.
            if (window.aistudio && await window.aistudio.hasSelectedApiKey()) {
                setKeyCheckStatus('ready');
            } else {
                setKeyCheckStatus('needed');
            }
        };
        checkKey();
    }, []);

    const handleSelectKey = async () => {
        if (window.aistudio) {
            await window.aistudio.openSelectKey();
            // Assume success to provide immediate feedback and avoid race conditions.
            // If the key is invalid, the subsequent API call will fail and reset the state.
            setKeyCheckStatus('ready');
        }
    };

    const handleApiKeyError = () => {
        // This function is called by child components if an API call fails due to a key issue.
        setKeyCheckStatus('needed');
    };

    const handleNewItinerary = (newItineraryData: Omit<Itinerary, 'id' | 'savedDate'>) => {
        const newItinerary: Itinerary = {
            ...newItineraryData,
            id: Date.now(),
            savedDate: new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: '2-digit', day: '2-digit' }),
            monitoring: { enabled: true },
        };
        setItineraries(prev => [newItinerary, ...prev]);
    };

    if (keyCheckStatus === 'checking') {
        return (
            <div className="min-h-screen bg-slate-100 flex items-center justify-center">
                <p className="text-slate-500 animate-pulse">Verificando configuração da API...</p>
            </div>
        );
    }

    if (keyCheckStatus === 'needed') {
        return (
            <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
                <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-lg text-center">
                    <h1 className="text-2xl font-bold text-slate-800">Selecione uma Chave de API</h1>
                    <p className="mt-4 text-slate-600">
                        Para usar este aplicativo, você precisa selecionar uma chave de API do Google AI Studio para habilitar as chamadas para o modelo Gemini.
                    </p>
                    <button
                        onClick={handleSelectKey}
                        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
                    >
                        Selecionar Chave de API
                    </button>
                    <p className="text-xs text-slate-500 mt-4">
                        Isso abrirá uma caixa de diálogo para selecionar uma chave de API do seu projeto. Para informações sobre cobrança, consulte a <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">documentação de cobrança</a>.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-100">
            <div className="max-w-4xl mx-auto px-4 py-8">
                <header className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-slate-800">Diário de Bordo de Voos</h1>
                    <p className="text-slate-500 mt-2">Seu catálogo pessoal de voos encontrados.</p>
                </header>

                <main>
                    <ImageUploader onItineraryCreated={handleNewItinerary} onApiKeyError={handleApiKeyError} />
                    {itineraries.map(itinerary => (
                        <ItineraryCard key={itinerary.id} itinerary={itinerary} />
                    ))}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;