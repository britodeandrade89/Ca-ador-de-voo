import type { DetailedRoute } from './types';

export const detailedRoutes: Record<number, DetailedRoute> = {
    8: {
        id: 8,
        title: 'Cataratas e Tango',
        itinerary: [
            {
                city: 'Foz do Iguaçu',
                duration: "5 Dias",
                days: [
                    { day: 1, date: "14/01", title: "Chegada e Lado Brasileiro", activities: ["Chegada e check-in no hotel.", "Visita ao Parque Nacional do Iguaçu (lado brasileiro) para ter a vista panorâmica das cataratas.", "Passeio opcional de barco Macuco Safari."]},
                    { day: 2, date: "15/01", title: "Lado Argentino", activities: ["Cruzar a fronteira para Puerto Iguazú.", "Explorar o Parque Nacional Iguazú (lado argentino), caminhando pelas passarelas superior, inferior e Garganta do Diabo."]},
                    { day: 3, date: "16/01", title: "Aves e Hidrelétrica", activities: ["Manhã no Parque das Aves, um santuário de aves tropicais.", "Tarde na Usina Hidrelétrica de Itaipu, com tour panorâmico."]},
                    { day: 4, date: "17/01", title: "Cultura e Compras", activities: ["Visita ao Marco das Três Fronteiras.", "Tarde livre para compras no Paraguai (Ciudad del Este)."]},
                    { day: 5, date: "18/01", title: "Despedida de Foz", activities: ["Manhã livre para relaxar ou visitar o Templo Budista Chen Tien.", "Preparação para o voo no dia seguinte."]}
                ]
            },
            {
                city: 'Buenos Aires',
                duration: "9 Dias",
                days: [
                    { day: 6, date: "19/01", title: "Chegada e Primeiro Tango", activities: ["Voo de Puerto Iguazú para Buenos Aires e check-in.", "Noite em San Telmo, com jantar em uma parrilla tradicional e um show de tango intimista."]},
                    { day: 7, date: "20/01", title: "Centro Histórico", activities: ["Caminhada pela Plaza de Mayo, visitando a Casa Rosada, o Cabildo e a Catedral Metropolitana.", "Café no histórico Café Tortoni."]},
                    { day: 8, date: "21/01", title: "Arte e Cor", activities: ["Explorar o bairro de La Boca, especialmente o Caminito.", "Visita ao MALBA (Museu de Arte Latino-Americana de Buenos Aires) em Palermo."]},
                    { day: 9, date: "22/01", title: "Palermo e Recoleta", activities: ["Passeio pelos Bosques de Palermo e Rosedal.", "Visita ao Cemitério da Recoleta e à livraria El Ateneo Grand Splendid."]},
                    { day: 10, date: "23/01", title: "Cultura e Livros", activities: ["Dia dedicado a explorar as livrarias de rua da Avenida Corrientes.", "Assistir a uma peça de teatro ou show na 'Broadway' argentina."]},
                    { day: 11, date: "24/01", title: "Passeio a Tigre", activities: ["Passeio de barco pelo Delta do Tigre, explorando as ilhas e rios.", "Visita ao Mercado de Frutos em Tigre."]},
                    { day: 12, date: "25/01", title: "Gastronomia", activities: ["Aula de culinária para aprender a fazer empanadas e beber mate.", "Noite explorando os bares e restaurantes de Palermo Soho."]},
                    { day: 13, date: "26/01", title: "Feira de San Telmo", activities: ["(Se for domingo) Visitar a famosa Feira de San Telmo.", "Explorar as lojas de antiguidades da região."]},
                    { day: 14, date: "27/01", title: "Despedida", activities: ["Últimas compras na Calle Florida.", "Jantar de despedida em Puerto Madero."]}
                ]
            }
        ]
    },
    // Gerar dados para os outros roteiros com base nas datas de itineraries.ts
    9: {
        id: 9,
        title: 'Patagônia Clássica: Rota Bariloche',
        itinerary: [
             {
                city: 'Foz e Assunção',
                duration: "5 Dias",
                days: [
                    { day: 1, date: "14/01", title: "Chegada em Foz", activities: ["Check-in e descanso.", "Visita ao lado brasileiro das Cataratas do Iguaçu."]},
                    { day: 2, date: "15/01", title: "Lado Argentino", activities: ["Cruzar a fronteira e explorar o lado argentino das cataratas."]},
                    { day: 3, date: "16/01", title: "Bate-volta Assunção", activities: ["Viagem de ônibus para Assunção, Paraguai.", "Explorar o centro histórico e a Costanera."]},
                    { day: 4, date: "17/01", title: "Compras e Cultura", activities: ["Manhã para compras em Ciudad del Este.", "Retorno para Foz do Iguaçu no final do dia."]},
                    { day: 5, date: "18/01", title: "Descanso", activities: ["Dia livre em Foz do Iguaçu antes de seguir para a Argentina."]}
                ]
            },
            {
                city: 'Buenos Aires',
                duration: "2 Dias",
                days: [
                    { day: 6, date: "19/01", title: "Chegada em BA", activities: ["Voo de Puerto Iguazú para Buenos Aires.", "Noite em Palermo Soho."]},
                    { day: 7, date: "20/01", title: "Centro e Tango", activities: ["Explorar a Plaza de Mayo e o Caminito.", "Show de tango à noite."]}
                ]
            },
            {
                city: 'Bariloche',
                duration: "4 Dias",
                days: [
                    { day: 8, date: "21/01", title: "Chegada aos Andes", activities: ["Voo para Bariloche.", "Passeio pelo Centro Cívico e prova de chocolates."]},
                    { day: 9, date: "22/01", title: "Circuito Chico", activities: ["Passeio pelo famoso Circuito Chico, com paradas no Cerro Campanario e Hotel Llao Llao."]},
                    { day: 10, date: "23/01", title: "Navegação e Natureza", activities: ["Navegação pelo Lago Nahuel Huapi até a Isla Victoria e Bosque de Arrayanes."]},
                    { day: 11, date: "24/01", title: "Aventura", activities: ["Trekking no Cerro Otto ou dia de esqui no Cerro Catedral (dependendo da estação)."]}
                ]
            }
        ]
    },
    // Adicionar os demais roteiros...
    10: {
      id: 10,
      title: "Vinhos e Andes: Rota Mendoza",
      itinerary: [
        // ... (conteúdo gerado similarmente)
      ]
    },
    11: {
      id: 11,
      title: "Expedição ao Fim do Mundo: Rota Ushuaia",
      itinerary: [
        // ...
      ]
    },
    12: {
      id: 12,
      title: "Circuito do Prata: Rota Montevidéu",
      itinerary: [
        // ...
      ]
    },
    13: {
      id: 13,
      title: "Super Rota do Sul: Com Volta de Montevidéu",
      itinerary: [
        // ...
      ]
    },
    14: {
      id: 14,
      title: "Cataratas e Tango com Montevidéu",
      itinerary: [
        // ...
      ]
    },
    15: {
      id: 15,
      title: "Patagônia com Montevidéu",
      itinerary: [
        // ...
      ]
    },
    16: {
      id: 16,
      title: "Vinhos e Andes com Montevidéu",
      itinerary: [
        // ...
      ]
    },
    17: {
      id: 17,
      title: "Fim do Mundo com Montevidéu",
      itinerary: [
        // ...
      ]
    }
  };

  // Preenchendo os outros para o exemplo
  for (let i = 10; i <= 17; i++) {
    if (!detailedRoutes[i]) {
        detailedRoutes[i] = {
            id: i,
            title: `Roteiro Detalhado ${i}`,
            itinerary: [
                {
                    city: 'Destino Exemplo',
                    duration: "3 Dias",
                    days: [
                        { day: 1, date: "DD/MM", title: "Chegada", activities: ["Atividade de exemplo 1.", "Atividade de exemplo 2."]},
                        { day: 2, date: "DD/MM", title: "Exploração", activities: ["Atividade de exemplo 3.", "Atividade de exemplo 4."]},
                        { day: 3, date: "DD/MM", title: "Despedida", activities: ["Atividade de exemplo 5."]}
                    ]
                }
            ]
        }
    }
  }
