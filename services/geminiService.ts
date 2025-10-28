import { GoogleGenAI, Type } from "@google/genai";
// FIX: Correctly import UserConfig and Flight types.
import type { UserConfig, Flight } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

const flightSchema = {
    type: Type.OBJECT,
    properties: {
        origin: { type: Type.STRING },
        destination: { type: Type.STRING },
        price: { type: Type.NUMBER },
        airline: { type: Type.STRING },
        departure_date: { type: Type.STRING, description: "Formato: AAAA-MM-DD" },
        return_date: { type: Type.STRING, description: "Formato: AAAA-MM-DD" },
        baggage: { type: Type.STRING, description: "ex: '10kg' ou '23kg'" },
        route_type: { type: Type.STRING, enum: ['round_trip', 'circular'] },
        return_city: { type: Type.STRING, description: "Apenas para o tipo de rota 'circular'" }
    },
    required: ['origin', 'destination', 'price', 'airline', 'departure_date', 'return_date', 'baggage', 'route_type']
};

export const searchFlights = async (config: UserConfig): Promise<Flight[]> => {
    const prompt = `
        Simule uma API de busca de voos. Gere uma lista de 15 resultados de voos fictícios com base na seguinte configuração de usuário.
        - Os preços devem ser em Reais (BRL).
        - Crie uma mistura de tipos de rota 'round_trip' (ida e volta) e 'circular'.
        - Para rotas circulares, a 'return_city' (cidade de retorno) deve ser um dos outros destinos.
        - Garanta que alguns preços de voos sejam bem baixos (menos de 1000 BRL) para simular boas ofertas.
        - Siga estritamente o esquema JSON fornecido para a saída.

        Configuração do Usuário: ${JSON.stringify(config, null, 2)}
    `;

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: flightSchema
                },
            },
        });
        
        const jsonText = response.text;
        const flights = JSON.parse(jsonText) as Flight[];
        
        // Sort by price before returning
        return flights.sort((a, b) => a.price - b.price);

    } catch (error) {
        console.error("Erro ao buscar dados de voos da API Gemini:", error);
        throw new Error("Falha ao buscar dados de voos. Verifique sua chave de API e conexão de rede.");
    }
};
