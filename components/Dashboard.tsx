import React, { useState, useEffect, useCallback } from 'react';
import type { Flight } from '../types';
import { USER_CONFIG } from '../constants';
import { searchFlights } from '../services/geminiService';
import StatCard from './StatCard';
import FlightCard from './FlightCard';
import ConfigPanel from './ConfigPanel';
import Button from './Button';
import { PlaneIcon, AlertIcon, RouteIcon, SearchIcon, MonitorIcon, ChartIcon, RocketIcon } from './icons';

const Dashboard: React.FC = () => {
    const [flights, setFlights] = useState<Flight[]>([]);
    const [bestPrice, setBestPrice] = useState<number | null>(null);
    const [alertsCount, setAlertsCount] = useState<number>(0);
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [isMonitoring, setIsMonitoring] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSearch = useCallback(async () => {
        setIsSearching(true);
        setError(null);
        setFlights([]);
        try {
            const results = await searchFlights(USER_CONFIG);
            setFlights(results);
            if (results.length > 0) {
                setBestPrice(results[0].price);
            }
        } catch (e) {
            if (e instanceof Error) {
                setError(e.message);
            } else {
                setError('Ocorreu um erro desconhecido.');
            }
        } finally {
            setIsSearching(false);
        }
    }, []);

    const handleStartMonitoring = () => {
        setIsMonitoring(true);
        // Simple alert simulation
    };

    useEffect(() => {
        // Fix: Use ReturnType<typeof setInterval> for browser compatibility instead of NodeJS.Timeout.
        let intervalId: ReturnType<typeof setInterval>;
        if (isMonitoring) {
            // Simulate sending an alert every 30 seconds
            intervalId = setInterval(() => {
                setAlertsCount(prev => prev + 1);
            }, 30000);
        }
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isMonitoring]);

    const monitoredRoutesCount = USER_CONFIG.origins.length * USER_CONFIG.destinations.length * 2;

    return (
        <div className="container mx-auto p-4 sm:p-6 lg:p-8 max-w-7xl">
            <header className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                    <RocketIcon className="h-8 w-8 text-cyan-400" />
                    <h1 className="text-3xl font-bold text-white">Caçador de Voos</h1>
                </div>
                <p className="text-gray-400 hidden sm:block">Monitoramento inteligente de passagens aéreas</p>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <StatCard title="Melhor Preço Hoje" value={bestPrice ? `R$ ${bestPrice}` : 'N/D'} icon={<PlaneIcon />} />
                <StatCard title="Rotas Monitoradas" value={monitoredRoutesCount.toString()} icon={<RouteIcon />} />
                <StatCard title="Alertas Enviados" value={alertsCount.toString()} icon={<AlertIcon />} />
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 mb-8 flex flex-col sm:flex-row items-center gap-4 border border-gray-700">
                <Button onClick={handleSearch} disabled={isSearching} variant="primary">
                    <SearchIcon className="h-5 w-5 mr-2" />
                    {isSearching ? 'Buscando...' : 'Buscar Agora'}
                </Button>
                <Button onClick={handleStartMonitoring} disabled={isMonitoring} variant="success">
                    <MonitorIcon className="h-5 w-5 mr-2" />
                    {isMonitoring ? 'Monitoramento Ativo' : 'Iniciar Monitoramento 24/7'}
                </Button>
                 <Button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} variant="secondary">
                    <ChartIcon className="h-5 w-5 mr-2" />
                    Ver Resultados
                </Button>
            </div>

            <div id="results" className="results-container space-y-6">
                {isSearching && (
                    <div className="flex flex-col items-center justify-center text-center p-10 bg-gray-800 rounded-lg">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
                        <p className="mt-4 text-lg text-gray-300">Buscando as melhores passagens...</p>
                        <p className="text-sm text-gray-500">Isso pode levar um momento.</p>
                    </div>
                )}
                {error && (
                    <div className="p-4 bg-red-900/50 border border-red-700 text-red-300 rounded-lg">
                        <p className="font-bold">Erro:</p>
                        <p>{error}</p>
                    </div>
                )}
                {flights.length > 0 && !isSearching && (
                    <>
                        <h3 className="text-2xl font-semibold text-white">🎯 Melhores Ofertas Encontradas</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                            {flights.map((flight, index) => (
                                <FlightCard key={index} flight={flight} />
                            ))}
                        </div>
                    </>
                )}
                {flights.length === 0 && !isSearching && !error && (
                     <div className="text-center py-10 bg-gray-800/50 rounded-lg border border-gray-700">
                        <p className="text-gray-400">Clique em "Buscar Agora" para encontrar ofertas de voos.</p>
                    </div>
                )}
            </div>

            <ConfigPanel config={USER_CONFIG} />
        </div>
    );
};

export default Dashboard;