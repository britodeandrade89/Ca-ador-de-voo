import React from 'react';
import type { Destination } from '../types';
import { MapPinIcon } from './icons';

interface DestinationCardProps {
  destination: Destination;
  totalCost: number;
  costBreakdown: { leg: string; price: number | null; note?: string }[];
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, totalCost, costBreakdown }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 flex flex-col h-full hover:shadow-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300">
      <div className="p-5 flex-grow">
        <h3 className="text-lg font-bold text-slate-800 mb-2">{destination.title}</h3>
        <p className="text-sm text-slate-500 mb-4 h-10">{destination.description}</p>
        <div className="space-y-2.5 mt-4">
          {costBreakdown.map((item, index) => (
            <div key={index} className="flex justify-between items-center text-sm text-slate-600">
              <div className="flex items-center truncate pr-2">
                <MapPinIcon className={`h-4 w-4 mr-2 flex-shrink-0 ${item.price !== null ? 'text-cyan-500' : 'text-slate-300'}`} />
                <span className="truncate">{item.leg}</span>
              </div>
              {item.note ? (
                 <span className="font-semibold text-xs text-green-800 bg-green-100 px-2 py-0.5 rounded-full">
                  {item.note}
                </span>
              ) : item.price !== null ? (
                <span className="font-semibold text-slate-700 bg-cyan-100/60 px-2 py-0.5 rounded">
                  R$ {item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              ) : (
                <span className="text-xs text-slate-400 font-medium">A buscar</span>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-slate-50 p-4 rounded-b-xl mt-auto">
         <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-slate-600">Custo Estimado (Trechos)</span>
            <span className="text-lg font-bold text-cyan-600">
              R$ {totalCost.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </span>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;