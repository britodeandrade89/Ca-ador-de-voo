import type { ReactNode } from 'react';

export interface Airport {
    code: string;
    city: string;
}

export interface FlightSegment {
  origin: Airport;
  destination: Airport;
  departure_datetime: string;
  arrival_datetime: string;
  duration: string;
  stops: string;
  airline: string;
  airline_logo: ReactNode;
}

export interface BaggageInfo {
    personal_item: string;
    carry_on_overhead: string;
    checked_baggage: string;
}

export interface Itinerary {
  id: string;
  title: string;
  saved_date: string;
  total_price: number;
  booking_url: string;
  segments: FlightSegment[];
  baggage: BaggageInfo;
}

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