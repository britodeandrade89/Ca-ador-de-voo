
export interface TravelPeriod {
  start: string;
  end: string;
  min_days: number;
  max_days: number;
}

export interface UserConfig {
  origins: string[];
  destinations: string[];
  whatsapp_numbers: string[];
  travel_period: TravelPeriod;
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
