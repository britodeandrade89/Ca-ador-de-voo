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
    // Roteiros Colômbia
     {
        id: 4,
        title: 'Bogotá e Barranquilla',
        category: 'Colômbia & Caribe',
        places: ['São Paulo', 'Bogotá', 'Barranquilla', 'Bogotá', 'São Paulo'],
        description: 'Da vibrante capital andina ao colorido carnaval caribenho de Barranquilla.',
    },
    {
        id: 5,
        title: 'Bogotá e Cartagena',
        category: 'Colômbia & Caribe',
        places: ['São Paulo', 'Bogotá', 'Cartagena', 'Bogotá', 'São Paulo'],
        description: 'Explore a cultura de Bogotá e relaxe nas praias históricas da cidade amuralhada de Cartagena.',
    },
    // Roteiros Caribe
    {
        id: 6,
        title: 'Pura Vida na Costa Rica',
        category: 'Colômbia & Caribe',
        places: ['São Paulo', 'San José', 'São Paulo'],
        description: 'Aventura e natureza exuberante, dos vulcões às praias do Pacífico e Caribe.',
    },
    {
        id: 7,
        title: 'Ritmos de Cuba',
        category: 'Colômbia & Caribe',
        places: ['São Paulo', 'Havana', 'São Paulo'],
        description: 'Viaje no tempo pelas ruas de Havana, com sua música contagiante e história fascinante.',
    },
    // Roteiros Cone Sul
    {
        id: 8,
        title: 'Cataratas e Tango',
        category: 'Cone Sul',
        places: ['São Paulo', 'Foz do Iguaçu', 'Puerto Iguazu', 'Buenos Aires', 'Rio de Janeiro', 'São Paulo'],
        description: 'Visite as Cataratas em Foz, cruze para a Argentina e voe para Buenos Aires para uma imersão no tango. O retorno para São Paulo é via Rio.',
    },
    {
        id: 9,
        title: 'Patagônia Clássica: Rota Bariloche',
        category: 'Cone Sul',
        places: ['São Paulo', 'Foz do Iguaçu', 'Assunção', 'Buenos Aires', 'Bariloche', 'Buenos Aires', 'Rio de Janeiro', 'São Paulo'],
        description: 'Uma jornada completa pela Tríplice Fronteira até Bariloche, com retorno a São Paulo via Rio.',
    },
    {
        id: 10,
        title: 'Vinhos e Andes: Rota Mendoza',
        category: 'Cone Sul',
        places: ['São Paulo', 'Foz do Iguaçu', 'Assunção', 'Buenos Aires', 'Mendoza', 'Buenos Aires', 'Rio de Janeiro', 'São Paulo'],
        description: 'Explore a cultura do vinho aos pés dos Andes, retornando de Buenos Aires para São Paulo via Rio.',
    },
    {
        id: 11,
        title: 'Expedição ao Fim do Mundo: Rota Ushuaia',
        category: 'Cone Sul',
        places: ['São Paulo', 'Puerto Iguazu', 'Buenos Aires', 'Ushuaia', 'Buenos Aires', 'Rio de Janeiro', 'São Paulo'],
        description: 'Uma aventura que te leva das Cataratas à cidade mais austral do planeta, com retorno a São Paulo via Rio.',
    },
    {
        id: 12,
        title: 'Circuito do Prata: Rota Montevidéu',
        category: 'Cone Sul',
        places: ['São Paulo', 'Foz do Iguaçu', 'Assunção', 'Buenos Aires', 'Montevidéu', 'Buenos Aires', 'Rio de Janeiro', 'São Paulo'],
        description: 'Conecte Brasil, Paraguai, Argentina e Uruguai em um roteiro culturalmente rico, retornando a São Paulo via Rio.',
    },
     {
        id: 13,
        title: 'Super Rota do Sul: Com Volta de Montevidéu',
        category: 'Cone Sul',
        places: ['São Paulo', 'Foz do Iguaçu', 'Assunção', 'Buenos Aires', 'Montevidéu', 'Rio de Janeiro', 'São Paulo'],
        description: 'A jornada mais completa, passando por 4 países e retornando do Uruguai para São Paulo via Rio.',
    },
];