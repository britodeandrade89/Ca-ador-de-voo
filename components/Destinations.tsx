import React, { useState } from 'react';
import { destinations } from '../destinations';
import DestinationCard from './DestinationCard';
import DetailedItineraryView from './DetailedItineraryView';
import type { Destination, Itinerary } from '../types';
import { initialItineraries } from '../itineraries';

const normalizeStr = (str: string) => str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '');

const calculateRouteCosts = (places: string[]) => {
    let total = 0;
    const breakdown: { leg: string; price: number | null; note?: string }[] = [];
    const usedItineraryIds = new Set<number>();

    for (let i = 0; i < places.length - 1; i++) {
        const origin = normalizeStr(places[i]);
        const destination = normalizeStr(places[i + 1]);
        const legName = `${places[i]} → ${places[i + 1]}`;

        let foundItinerary: Itinerary | undefined;

        // Special handling for the Assunção -> Buenos Aires leg, which uses the Puerto Iguazú airport.
        if (origin === 'assuncao' && destination === 'buenosaires') {
            foundItinerary = initialItineraries.find(it => {
                const title = normalizeStr(it.title);
                return title.includes(normalizeStr('puertoiguazu')) && title.includes(normalizeStr('buenosaires'));
            });
        } else {
            // Default logic to find matching itineraries
            const matchingItineraries = initialItineraries.filter(it => {
                const title = normalizeStr(it.title);
                const parts = title.split(':')[1] || title; 
                return (parts.includes(origin) && parts.includes(destination));
            });

            if (matchingItineraries.length > 0) {
                // Sort by price and pick the cheapest one
                foundItinerary = matchingItineraries.sort((a, b) => a.totalPrice - b.totalPrice)[0];
            }
        }
        
        if (foundItinerary) {
            // Se o itinerário encontrado já foi usado pelo seu valor total (ou seja, é uma ida e volta)
            if (usedItineraryIds.has(foundItinerary.id)) {
                breakdown.push({ leg: legName, price: 0, note: 'Volta Inclusa' });
            } else {
                total += foundItinerary.totalPrice;
                breakdown.push({ leg: legName, price: foundItinerary.totalPrice });
                
                // Se o itinerário cobre mais de um trecho (é uma ida e volta), marque-o como usado.
                if (foundItinerary.events.length > 1 || foundItinerary.title.includes('↔')) {
                    usedItineraryIds.add(foundItinerary.id);
                }
            }
        } else {
            breakdown.push({ leg: legName, price: null });
        }
    }
    return { total, breakdown };
};


const Destinations: React.FC = () => {
  const [selectedDestinationId, setSelectedDestinationId] = useState<number | null>(null);

  const groupedDestinations = destinations.reduce((acc, dest) => {
    (acc[dest.category] = acc[dest.category] || []).push(dest);
    return acc;
  }, {} as Record<string, Destination[]>);

  const handleSelectDestination = (id: number) => {
    setSelectedDestinationId(id);
  };

  const handleClose = () => {
    setSelectedDestinationId(null);
  }

  const handleNavigation = (direction: 'next' | 'prev') => {
    const currentCategory = destinations.find(d => d.id === selectedDestinationId)?.category;
    if (!currentCategory) return;
    
    const categoryDestinations = destinations.filter(d => d.category === currentCategory);
    const currentIndex = categoryDestinations.findIndex(d => d.id === selectedDestinationId);

    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % categoryDestinations.length;
      setSelectedDestinationId(categoryDestinations[nextIndex].id);
    } else {
      const prevIndex = (currentIndex - 1 + categoryDestinations.length) % categoryDestinations.length;
      setSelectedDestinationId(categoryDestinations[prevIndex].id);
    }
  }

  return (
    <>
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-slate-800">Explorar Roteiros</h2>
          <p className="text-slate-500 mt-2 text-lg">Inspire-se com nossos roteiros e veja uma estimativa de custos com base nas suas passagens salvas.</p>
        </div>

        {Object.entries(groupedDestinations).map(([category, dests]) => (
          <section key={category}>
            <h3 className="text-2xl font-bold text-slate-700 mb-6 border-b-2 border-cyan-500 pb-2">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {dests.map(destination => {
                const { total, breakdown } = calculateRouteCosts(destination.places);
                return (
                  <DestinationCard 
                    key={destination.id} 
                    destination={destination}
                    totalCost={total}
                    costBreakdown={breakdown}
                    onClick={() => handleSelectDestination(destination.id)}
                  />
                )
              })}
            </div>
          </section>
        ))}
      </div>
      
      <DetailedItineraryView 
        destinationId={selectedDestinationId}
        onClose={handleClose}
        onNavigate={handleNavigation}
      />
    </>
  );
};

export default Destinations;
