import type { Destination } from './types';

export const destinations: Destination[] = [
    // Roteiros Peru & Bolívia
    {
        id: 1,
        title: 'Lima e Cusco',
        category: 'Peru & Bolívia',
        places: ['São Paulo', 'Lima', 'Cusco', 'Lima', 'São Paulo'],
        description: 'Explore a capital gastronômica Lima e a cidade imperial de Cusco, porta de entrada para Machu Picchu.',
    },
    {
        id: 2,
        title: 'La Paz e Salar de Uyuni',
        category: 'Peru & Bolívia',
        places: ['São Paulo', 'La Paz', 'Uyuni', 'La Paz', 'São Paulo'],
        description: 'Da cidade mais alta do mundo ao maior deserto de sal do planeta. Uma jornada de contrastes.',
    },
    {
        id: 3,
        title: 'Travessia Andina: Peru e Bolívia',
        category: 'Peru & Bolívia',
        places: ['São Paulo', 'Lima', 'Cusco', 'La Paz', 'São Paulo'],
        description: 'Combine o misticismo do Peru com a beleza selvagem da Bolívia em uma viagem inesquecível.',
    },
    // Roteiros Cone Sul
    {
        id: 8,
        title: 'Cataratas e Tango',
        category: 'Cone Sul',
        places: ['Rio de Janeiro', 'São Paulo', 'Foz do Iguaçu', 'Puerto Iguazu', 'Buenos Aires', 'Rio de Janeiro'],
        description: 'Comece sua viagem do Rio para São Paulo, visite as Cataratas em Foz, cruze para a Argentina e voe para Buenos Aires para uma imersão no tango. O retorno é direto para o Rio.',
    },
    {
        id: 9,
        title: 'Patagônia Clássica: Rota Bariloche',
        category: 'Cone Sul',
        places: ['Rio de Janeiro', 'São Paulo', 'Foz do Iguaçu', 'Assunção', 'Buenos Aires', 'Bariloche', 'Buenos Aires', 'Rio de Janeiro'],
        description: 'Uma jornada completa do Rio, passando pela Tríplice Fronteira até Bariloche, com retorno ao Rio de Janeiro.',
    },
    {
        id: 10,
        title: 'Vinhos e Andes: Rota Mendoza',
        category: 'Cone Sul',
        places: ['Rio de Janeiro', 'São Paulo', 'Foz do Iguaçu', 'Assunção', 'Buenos Aires', 'Mendoza', 'Buenos Aires', 'Rio de Janeiro'],
        description: 'Partindo do Rio, explore a cultura do vinho aos pés dos Andes, retornando de Buenos Aires para o Rio de Janeiro.',
    },
    {
        id: 11,
        title: 'Expedição ao Fim do Mundo: Rota Ushuaia',
        category: 'Cone Sul',
        places: ['Rio de Janeiro', 'São Paulo', 'Foz do Iguaçu', 'Puerto Iguazu', 'Buenos Aires', 'Ushuaia', 'Buenos Aires', 'Rio de Janeiro'],
        description: 'Partindo do Rio, uma aventura que te leva de SP às Cataratas e à cidade mais austral do planeta, com retorno ao Rio.',
    },
    {
        id: 12,
        title: 'Circuito do Prata: Rota Montevidéu',
        category: 'Cone Sul',
        places: ['Rio de Janeiro', 'São Paulo', 'Foz do Iguaçu', 'Assunção', 'Buenos Aires', 'Montevidéu', 'Buenos Aires', 'Rio de Janeiro'],
        description: 'Do Rio, conecte Brasil, Paraguai, Argentina e Uruguai em um roteiro culturalmente rico, retornando ao Rio de Janeiro.',
    },
     {
        id: 13,
        title: 'Super Rota do Sul: Com Volta de Montevidéu',
        category: 'Cone Sul',
        places: ['Rio de Janeiro', 'São Paulo', 'Foz do Iguaçu', 'Assunção', 'Buenos Aires', 'Montevidéu', 'Rio de Janeiro'],
        description: 'A jornada mais completa partindo do Rio, passando por 4 países e retornando do Uruguai direto para o Rio.',
    },
    {
        id: 14,
        title: 'Cataratas e Tango com Montevidéu',
        category: 'Cone Sul',
        places: ['Rio de Janeiro', 'São Paulo', 'Foz do Iguaçu', 'Puerto Iguazu', 'Buenos Aires', 'Montevidéu', 'Rio de Janeiro'],
        description: 'A rota das Cataratas e Tango, esticando a viagem para Montevidéu antes de voltar ao Rio.',
    },
    {
        id: 15,
        title: 'Patagônia com Montevidéu',
        category: 'Cone Sul',
        places: ['Rio de Janeiro', 'São Paulo', 'Foz do Iguaçu', 'Assunção', 'Buenos Aires', 'Bariloche', 'Buenos Aires', 'Montevidéu', 'Rio de Janeiro'],
        description: 'A clássica jornada pela Patagônia, com uma travessia para Montevidéu antes de retornar ao Rio de Janeiro.',
    },
    {
        id: 16,
        title: 'Vinhos e Andes com Montevidéu',
        category: 'Cone Sul',
        places: ['Rio de Janeiro', 'São Paulo', 'Foz do Iguaçu', 'Assunção', 'Buenos Aires', 'Mendoza', 'Buenos Aires', 'Montevidéu', 'Rio de Janeiro'],
        description: 'Combine a rota dos vinhos em Mendoza com a cultura de Montevidéu, finalizando a viagem no Rio de Janeiro.',
    },
    {
        id: 17,
        title: 'Fim do Mundo com Montevidéu',
        category: 'Cone Sul',
        places: ['Rio de Janeiro', 'São Paulo', 'Foz do Iguaçu', 'Puerto Iguazu', 'Buenos Aires', 'Ushuaia', 'Buenos Aires', 'Montevidéu', 'Rio de Janeiro'],
        description: 'Vá até a cidade mais austral do planeta e retorne via Montevidéu direto para o Rio, combinando aventura e charme.',
    },
];