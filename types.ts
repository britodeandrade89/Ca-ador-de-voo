import { ReactNode } from 'react';

// FIX: Added UserConfig interface to define the shape of user configuration data.
export interface UserConfig {
  origins: string[];
  destinations: string[];
  whatsapp_numbers: string[];
  travel_period: {
    start: string;
    end: string;
    min_days: number;
    max_days: number;
  };
}

// FIX: Added Flight interface to define the shape of flight data from the Gemini API.
export interface Flight {
  origin: string;
  destination: string;
  price: number;
  airline: string;
  departure_date: string;
  return_date: string;
  baggage: string;
  route_type: 'round_trip' | 'circular';
  return_city?: string;
}

export interface Airport {
  code: string;
  name: string;
}

export type TripEventType = 'flight' | 'bus' | 'car' | 'train' | 'accommodation';

export interface TripEvent {
  type: TripEventType;
  startTime: string;
  endTime: string;
  startDate: string;
  endDate: string;
  startLocation: string;
  endLocation: string;
  duration: string;
  details: string;
  company: {
    name: string;
    logo: ReactNode;
  };
  warning?: string;
  operator?: string;
}

export interface BaggageDetail {
  status: 'Inclusa' | 'Taxa Adicional' | 'Não disponível';
  details: string;
}

export interface BaggageInfo {
  personal: BaggageDetail;
  carryOn: BaggageDetail;
  checked: BaggageDetail;
}

export interface AdditionalCost {
  description: string;
  amount: number;
  icon: ReactNode;
  details?: string;
}

export interface PriceHistoryItem {
  timestamp: Date;
  price: number;
}

export interface Itinerary {
  id: number;
  title: string;
  subtitle?: string;
  savedDate: string;
  totalPrice: number;
  events: TripEvent[];
  baggage?: BaggageInfo;
  additionalCosts?: AdditionalCost[];
  sourceUrl: string;
  monitoring?: {
    enabled: boolean;
  };
}