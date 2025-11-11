import React from 'react';
import type { Destination } from './types';
import { 
    TangoDancersIcon, 
    MountainPeakIcon, 
    WineGlassIcon, 
    CompassSouthIcon,
    RiverIcon,
    SouthAmericaIcon,
    MontevideoGateIcon,
    SunIcon,
} from './components/icons';

export const destinations: Destination[] = [
    // Roteiros Cone Sul
    {
        id: 8,
        title: 'Cataratas e Tango',
        category: 'Cone Sul',
        places: ['Rio de Janeiro', 'São Paulo', 'Foz do Iguaçu', 'Puerto Iguazu', 'Buenos Aires', 'Rio de Janeiro'],
        description: 'Visite as Cataratas em Foz, cruze para a Argentina e voe para Buenos Aires para uma imersão no tango.',
        themeColor: '#c026d3', // fuchsia-700
        icon: React.createElement(TangoDancersIcon),
    },
    {
        id: 9,
        title: 'Patagônia Clássica: Rota Bariloche',
        category: 'Cone Sul',
        places: ['Rio de Janeiro', 'São Paulo', 'Foz do Iguaçu', 'Assunção', 'Foz do Iguaçu', 'Puerto Iguazu', 'Buenos Aires', 'Bariloche', 'Buenos Aires', 'Rio de Janeiro'],
        description: 'A jornada clássica para a Patagônia. Saia do Rio, explore Bariloche e retorne ao Rio.',
        themeColor: '#0e7490', // cyan-700
        icon: React.createElement(MountainPeakIcon),
    },
    {
        id: 10,
        title: 'Vinhos e Andes: Rota Mendoza',
        category: 'Cone Sul',
        places: ['Rio de Janeiro', 'São Paulo', 'Foz do Iguaçu', 'Assunção', 'Foz do Iguaçu', 'Puerto Iguazu', 'Buenos Aires', 'Mendoza', 'Buenos Aires', 'Rio de Janeiro'],
        description: 'Explore a cultura do vinho aos pés dos Andes, com um bate-volta no Paraguai e retorno de Buenos Aires.',
        themeColor: '#831843', // pink-900
        icon: React.createElement(WineGlassIcon),
    },
    {
        id: 11,
        title: 'Expedição ao Fim do Mundo',
        category: 'Cone Sul',
        places: ['Rio de Janeiro', 'São Paulo', 'Foz do Iguaçu', 'Puerto Iguazu', 'Buenos Aires', 'Ushuaia', 'Buenos Aires', 'Rio de Janeiro'],
        description: 'Vá até a cidade mais austral do planeta, com retorno de Buenos Aires para o Rio de Janeiro.',
        themeColor: '#1d4ed8', // blue-700
        icon: React.createElement(CompassSouthIcon),
    },
    {
        id: 12,
        title: 'Circuito do Prata',
        category: 'Cone Sul',
        places: ['Rio de Janeiro', 'São Paulo', 'Foz do Iguaçu', 'Assunção', 'Foz do Iguaçu', 'Puerto Iguazu', 'Buenos Aires', 'Montevidéu', 'Rio de Janeiro'],
        description: 'Conecte Brasil, Paraguai, Argentina e Uruguai em um roteiro culturalmente rico, retornando de Montevidéu.',
        themeColor: '#c2410c', // orange-700
        icon: React.createElement(RiverIcon),
    },
     {
        id: 13,
        title: 'Super Rota do Sul',
        category: 'Cone Sul',
        places: ['Rio de Janeiro', 'São Paulo', 'Foz do Iguaçu', 'Assunção', 'Foz do Iguaçu', 'Puerto Iguazu', 'Buenos Aires', 'Montevidéu', 'Rio de Janeiro'],
        description: 'A jornada mais completa, passando por 4 países e retornando do Uruguai para o Rio.',
        themeColor: '#166534', // green-800
        icon: React.createElement(SouthAmericaIcon),
    },
    {
        id: 14,
        title: 'Cataratas e Tango com Montevidéu',
        category: 'Cone Sul',
        places: ['Rio de Janeiro', 'São Paulo', 'Foz do Iguaçu', 'Puerto Iguazu', 'Buenos Aires', 'Montevidéu', 'Rio de Janeiro'],
        description: 'Combine as Cataratas e o Tango com a charmosa capital uruguaia antes de retornar ao Rio.',
        themeColor: '#be185d', // pink-700
        icon: React.createElement(TangoDancersIcon),
    },
    {
        id: 15,
        title: 'Patagônia com Montevidéu',
        category: 'Cone Sul',
        places: ['Rio de Janeiro', 'São Paulo', 'Foz do Iguaçu', 'Assunção', 'Foz do Iguaçu', 'Puerto Iguazu', 'Buenos Aires', 'Bariloche', 'Buenos Aires', 'Montevidéu', 'Rio de Janeiro'],
        description: 'A jornada pela Patagônia, com uma travessia para Montevidéu antes de retornar ao Brasil.',
        themeColor: '#0891b2', // cyan-600
        icon: React.createElement(MountainPeakIcon),
    },
    {
        id: 16,
        title: 'Vinhos e Andes com Montevidéu',
        category: 'Cone Sul',
        places: ['Rio de Janeiro', 'São Paulo', 'Foz do Iguaçu', 'Assunção', 'Foz do Iguaçu', 'Puerto Iguazu', 'Buenos Aires', 'Mendoza', 'Buenos Aires', 'Montevidéu', 'Rio de Janeiro'],
        description: 'Combine a rota dos vinhos em Mendoza com a cultura de Montevidéu em uma viagem única.',
        themeColor: '#701a75', // fuchsia-900
        icon: React.createElement(WineGlassIcon),
    },
    {
        id: 17,
        title: 'Fim do Mundo com Montevidéu',
        category: 'Cone Sul',
        places: ['Rio de Janeiro', 'São Paulo', 'Foz do Iguaçu', 'Puerto Iguazu', 'Buenos Aires', 'Ushuaia', 'Buenos Aires', 'Montevidéu', 'Rio de Janeiro'],
        description: 'Vá até Ushuaia e retorne via Montevidéu, combinando aventura e charme.',
        themeColor: '#4f46e5', // indigo-600
        icon: React.createElement(MontevideoGateIcon),
    },
    {
        id: 18,
        title: "Natal em Porto Seguro (18/12)",
        category: "Férias no Brasil",
        places: ['Rio de Janeiro', 'Porto Seguro', 'Rio de Janeiro'],
        description: 'Curta o início das festas de fim de ano nas praias paradisíacas de Porto Seguro.',
        themeColor: '#f97316', // orange-500
        icon: React.createElement(SunIcon),
    },
    {
        id: 19,
        title: "Natal em Porto Seguro (20/12)",
        category: "Férias no Brasil",
        places: ['Rio de Janeiro', 'Porto Seguro', 'Rio de Janeiro'],
        description: 'Comece a viagem um pouco mais tarde e aproveite o melhor do pré-Natal na Bahia.',
        themeColor: '#ea580c', // orange-600
        icon: React.createElement(SunIcon),
    },
];