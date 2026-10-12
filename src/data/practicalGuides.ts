import { Post } from "./posts";

export const PRACTICAL_GUIDES: Post[] = [
  {
    id: "28",
    slug: "como-calcular-custo-total-viagem-internacional",
    title: "Como Calcular o Custo Total de uma Viagem Internacional (Planilha e Fórmula Passo a Passo)",
    subtitle: "Aprenda a somar passagens, hospedagem, alimentação, câmbio, IOF, seguro e reserva de emergência sem cair na armadilha dos gastos invisíveis.",
    destination: "Planejamento Financeiro Internacional",
    stateCountry: "Guia Prático Global",
    region: "Internacional",
    category: "Mochilão",
    isPracticalGuide: true,
    hubSlug: "economizar",
    affiliatePartnerId: "vai-de-promo",
    coverImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    author: {
      name: "Equipe Editorial Malas Prontas",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      bio: "Núcleo de pesquisa de roteiros, auditoria de custos reais e educação financeira para viajantes brasileiros."
    },
    date: "12 de Outubro de 2026",
    readTime: "11 min de leitura",
    budgetLevel: "$$",
    budgetDescription: "Método dos 6 Pilares Orçamentários + Margem de Segurança de 15% (Consultado em Outubro/2026)",
    bestSeason: "Planejamento ideal de 90 a 150 dias antes do embarque internacional",
    recommendedDays: "Aplicável para viagens de 5 a 30 dias",
    featured: true,
    executiveSummary:
      "Para calcular o custo real de uma viagem internacional sem estourar o orçamento, divida seus gastos em 6 blocos fixos e variáveis: (1) Transporte Aéreo + Deslocamento Aeroporto-Centro, (2) Hospedagem com taxas municipais inclusas, (3) Alimentação diária por perfil, (4) Ingressos e Transporte Urbano, (5) Documentação, Seguro Viagem e Chip eSIM, e (6) Custos Financeiros (spread cambial + IOF de 1,1% a 3,38% + reserva de imprevistos de 15%).",
    toc: [
      { id: "formula-6-pilares", title: "1. A Fórmula dos 6 Pilares do Orçamento Internacional" },
      { id: "tabela-custos-regiao", title: "2. Tabela Comparativa de Custos Diários por Região (Outubro/2026)" },
      { id: "gastos-invisiveis", title: "3. Os 7 Gastos Invisíveis que Estouram o Orçamento" },
      { id: "cambio-iof", title: "4. Como Calcular Câmbio, Spread e IOF Corretamente" },
      { id: "checklist-orcamento", title: "5. Checklist Prático de Fechamento de Custos" }
    ],
    highlights: [
      "Regra 40/30/20/10: Como distribuir passagens, hotel, gastos diários e margem de segurança",
      "Tabela comparativa de custo diário real na América do Sul, Europa, EUA e Sudeste Asiático (Outubro/2026)",
      "Cálculo exato de IOF e spread bancário em contas globais vs. cartão de crédito tradicional",
      "Planilha mental de custos invisíveis: city tax, gorjetas obrigatórias, bagagem em low-cost e transfers",
      "Integração direta com a Calculadora de Orçamento Diário e Total do Malas Prontas"
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
        caption: "Planejamento financeiro detalhado com planilha de câmbio, reservas e recibos de viagem"
      },
      {
        url: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80",
        caption: "Cédulas de dólar e euro: comprar moeda aos poucos reduz o risco de oscilação cambial"
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Etapa 1 (120 a 90 dias antes): Levantamento dos Custos Estruturais",
        activities: [
          "Cotação de passagens aéreas ida e volta incluindo taxas de embarque e franquia real de bagagem.",
          "Verificação da validade do passaporte (taxa de emissão R$ 257,25 na Polícia Federal) e eventual visto consular ou autorização eletrônica (ESTA/ETIAS).",
          "Definição do teto máximo da viagem e abertura de conta internacional para compra fracionada de moeda."
        ]
      },
      {
        day: 2,
        title: "Etapa 2 (90 a 60 dias antes): Hospedagem e Proteção Obrigatória",
        activities: [
          "Reserva de hospedagem com cancelamento gratuito conferindo se há cobrança de taxa municipal (City Tax de €2 a €7 por noite na Europa ou Resort Fee nos EUA).",
          "Contratação do Seguro Viagem internacional (mínimo € 30.000 para Europa ou US$ 60.000 para EUA/mundo).",
          "Inclusão do chip virtual eSIM (US$ 5 a US$ 20) na planilha de custos pré-embarque."
        ]
      },
      {
        day: 3,
        title: "Etapa 3 (60 a 15 dias antes): Orçamento Diário e Reserva de Emergência",
        activities: [
          "Cálculo da média diária de alimentação (café da manhã, almoço executivo/menu del día, jantar e água/snacks).",
          "Compra antecipada das 3 a 5 atrações pagas principais para diluir o custo antes de viajar.",
          "Adição obrigatória de 15% sobre o orçamento diário como margem para imprevistos e flutuação cambial."
        ]
      }
    ],
    essentialTips: [
      {
        title: "Use o Menu Executivo no Almoço",
        description: "Na Europa ('Menu del Día') e na América do Sul ('Menú Ejecutivo'), almoçar em restaurantes locais entre 12h e 15h inclui entrada, prato principal e bebida por até metade do preço do cardápio noturno."
      },
      {
        title: "Nunca Converta Apenas pelo Dólar Comercial do Google",
        description: "O valor exibido no Google é o câmbio comercial puro. Ao comprar moeda em conta global ou casa de câmbio, adicione sempre entre 2,5% e 4% referentes ao spread financeiro mais o IOF vigente."
      },
      {
        title: "Some o Deslocamento Aeroporto-Hotel",
        description: "Um táxi de aeroportos distantes (como Narita em Tóquio, Ezeiza em Buenos Aires ou Stansted em Londres) pode custar de US$ 40 a US$ 120. Pesquise sempre o trem expresso ou ônibus oficial antes de pousar."
      },
      {
        title: "Teste Seu Orçamento na Nossa Calculadora",
        description: "Use gratuitamente a Calculadora de Viagem do Malas Prontas (/calculadora-viagem) para simular tanto o custo total quanto o orçamento diário por pessoa."
      }
    ],
    content: [
      `<h3 id="formula-6-pilares" class="text-xl font-bold text-stone-900 mt-4 mb-2">1. A Fórmula dos 6 Pilares do Orçamento Internacional</h3>
      <p>O maior erro de quem planeja uma viagem para o exterior é somar apenas <strong>passagem aérea + hotel</strong> e achar que a viagem está praticamente paga. Na prática de campo, passagens e hospedagem representam cerca de <strong>55% a 65% do custo total</strong>; os outros 35% a 45% estão distribuídos em alimentação, transporte local, ingressos, conectividade, seguro e impostos.</p>
      <p>Para nunca passar aperto, aplique a fórmula completa: <strong>Custo Total = Voos + Hospedagem (com taxas) + (Orçamento Diário × Nº de Dias) + Seguro/Documentação + 15% de Margem de Segurança</strong>.</p>`,

      `<h3 id="tabela-custos-regiao" class="text-xl font-bold text-stone-900 mt-6 mb-3">2. Tabela Comparativa de Custos Diários por Região (Referência: Outubro/2026)</h3>
      <p>Abaixo apresentamos a média real de gastos terrestres por pessoa/dia (incluindo hospedagem em quarto duplo dividido, 3 refeições, transporte público e 1 passeio pago por dia), consultada em <strong>Outubro de 2026</strong>:</p>
      <div class="overflow-x-auto my-4">
        <table class="w-full text-left border-collapse border border-stone-200 rounded-xl overflow-hidden text-xs sm:text-sm">
          <thead>
            <tr class="bg-stone-900 text-white">
              <th class="p-3">Região / Destino</th>
              <th class="p-3">Perfil Econômico (Hostel/Street Food)</th>
              <th class="p-3">Perfil Moderado (Hotel 3★ / Bistrôs)</th>
              <th class="p-3">Perfil Conforto (Hotel 4★ / Tours)</th>
              <th class="p-3">Passagem Média Ida/Volta (Saindo de GRU)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-stone-200 bg-white">
            <tr>
              <td class="p-3 font-bold">América do Sul (Peru, Chile, Argentina)</td>
              <td class="p-3">US$ 42 a US$ 58 / dia (R$ 230 - R$ 320)</td>
              <td class="p-3">US$ 75 a US$ 110 / dia (R$ 410 - R$ 605)</td>
              <td class="p-3">US$ 150 a US$ 220 / dia (R$ 825 - R$ 1.210)</td>
              <td class="p-3">R$ 1.350 a R$ 2.600</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Europa Ocidental (Portugal, Espanha, Itália)</td>
              <td class="p-3">€ 65 a € 85 / dia (R$ 390 - R$ 510)</td>
              <td class="p-3">€ 115 a € 160 / dia (R$ 690 - R$ 960)</td>
              <td class="p-3">€ 220 a € 340 / dia (R$ 1.320 - R$ 2.040)</td>
              <td class="p-3">R$ 3.600 a R$ 5.400</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Estados Unidos (Orlando, Miami, Nova York)</td>
              <td class="p-3">US$ 85 a US$ 115 / dia (R$ 465 - R$ 630)</td>
              <td class="p-3">US$ 145 a US$ 210 / dia (R$ 795 - R$ 1.155)</td>
              <td class="p-3">US$ 280 a US$ 450 / dia (R$ 1.540 - R$ 2.475)</td>
              <td class="p-3">R$ 3.200 a R$ 5.100</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Sudeste Asiático (Tailândia, Vietnã)</td>
              <td class="p-3">US$ 30 a US$ 45 / dia (R$ 165 - R$ 245)</td>
              <td class="p-3">US$ 55 a US$ 85 / dia (R$ 300 - R$ 465)</td>
              <td class="p-3">US$ 120 a US$ 190 / dia (R$ 660 - R$ 1.045)</td>
              <td class="p-3">R$ 5.800 a R$ 8.200</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-xs text-stone-500 italic">*Nota de transparência: Valores de referência verificados em Outubro/2026 considerando câmbio médio de US$ 1 = R$ 5,50 e € 1 = R$ 6,00. Tarifas variam conforme época do ano e antecedência.</p>`,

      `<h3 id="gastos-invisiveis" class="text-xl font-bold text-stone-900 mt-6 mb-2">3. Os 7 Gastos Invisíveis que Estouram o Orçamento</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Taxas Municipais de Turismo (City Tax):</strong> Cidades como Roma, Paris, Barcelona e Lisboa cobram de € 2 a € 7,50 por pessoa/noite diretamente no check-out do hotel.</li>
        <li><strong>Gorjetas (Tips) e Serviço:</strong> Nos Estados Unidos e Canadá, a gorjeta de 15% a 20% em restaurantes com atendimento de mesa é culturalmente obrigatória, além do imposto estadual (Sales Tax de 6% a 9%) somado apenas no caixa.</li>
        <li><strong>Bagagem em Companhias Low-Cost Internas:</strong> Voos internos na Europa (Ryanair, EasyJet) ou América do Sul (Sky, JetSmart) muitas vezes incluem apenas uma mochila pequena debaixo do assento; a mala de cabine de 10kg custa de € 18 a € 45 por trecho.</li>
        <li><strong>Água, Cafés e Pequenos Lanches:</strong> Comprar 3 garrafas de água e 2 cafés em pontos turísticos europeus custa facilmente € 15 por dia (€ 150 em 10 dias). Leve sempre uma garrafa térmica reutilizável!</li>
      </ul>`,

      `<h3 id="cambio-iof" class="text-xl font-bold text-stone-900 mt-6 mb-2">4. Como Calcular Câmbio, Spread e IOF Corretamente</h3>
      <p>Segundo as normas vigentes do Banco Central do Brasil e da Receita Federal, cartões de débito internacionais multimoedas operam com <strong>câmbio comercial, spread reduzido (1% a 2%) e IOF menor</strong> do que os cartões de crédito tradicionais de bancos de varejo (que cobram spread de 4% a 6% sobre o dólar PTAX mais IOF de cartão de crédito). Nunca viaje com apenas um meio de pagamento: leve 2 cartões internacionais de bandeiras diferentes (Visa e Mastercard) mais uma reserva de US$ 150 a US$ 300 em espécie.</p>`,

      `<h3 id="checklist-orcamento" class="text-xl font-bold text-stone-900 mt-6 mb-2">5. Checklist Prático de Fechamento de Custos</h3>
      <ul class="list-disc pl-5 space-y-1.5">
        <li>[ ] Passagens aéreas principais e trechos internos cotados já com bagagem de 10kg ou 23kg.</li>
        <li>[ ] Todas as noites de hospedagem somadas incluindo impostos locais e taxa de limpeza (se apartamento).</li>
        <li>[ ] Seguro viagem emitido cobrindo do dia do embarque no Brasil até o dia do pouso de retorno.</li>
        <li>[ ] Orçamento diário de alimentação multiplicado pelo número total de dias (incluindo dias de voo).</li>
        <li>[ ] Reserva de emergência de 15% separada em conta remunerada ou cartão adicional.</li>
      </ul>`
    ],
    faq: [
      {
        question: "Quanto devo levar de reserva de emergência em uma viagem internacional?",
        answer: "Recomendamos reservar entre 15% e 20% do valor total dos seus gastos terrestres em um segundo cartão internacional ou limite de crédito desbloqueado para cobrir imprevistos de saúde, remarcação de transporte ou variações cambiais."
      },
      {
        question: "Vale mais a pena levar dinheiro vivo ou cartão de débito internacional?",
        answer: "O equilíbrio ideal hoje é concentrar 80% a 85% dos gastos em cartões de débito globais (que têm câmbio comercial e segurança contra perda) e levar de 15% a 20% em espécie (dólar ou euro) para pequenos comércios, feiras e emergências."
      },
      {
        question: "Com quantos meses de antecedência devo fechar o orçamento internacional?",
        answer: "Comece o planejamento entre 4 e 6 meses antes do embarque. Isso permite comprar passagens na janela ideal de preço e fazer câmbio fracionado mês a mês, garantindo um preço médio favorável."
      }
    ],
    officialSources: [
      {
        name: "Banco Central do Brasil — Cotações e Câmbio PTAX",
        url: "https://www.bcb.gov.br/estabilidadefinanceira/fechamentodolar",
        description: "Consulta oficial da taxa de câmbio de referência e normas de meios de pagamento internacionais."
      },
      {
        name: "Receita Federal — Guia do Viajante (Limites de Dinheiro em Espécie e Bens)",
        url: "https://www.gov.br/receitafederal/pt-br/assuntos/aduana-e-comercio-exterior/viagens-internacionais",
        description: "Regras oficiais sobre porte de valores (e-DBV acima de US$ 10.000) e cotas de isenção alfandegária."
      }
    ]
  },
  {
    id: "29",
    slug: "o-que-levar-na-bagagem-de-mao-guia-anac",
    title: "O Que Levar na Bagagem de Mão (10kg): Medidas ANAC, Líquidos e Itens Proibidos",
    subtitle: "O manual definitivo para arrumar sua mala de bordo de 55x35x25 cm para 7 dias sem pagar despacho e sem ter itens confiscados no raio-X.",
    destination: "Regras de Bagagem de Mão (ANAC & IATA)",
    stateCountry: "Aviação Nacional e Internacional",
    region: "Sudeste",
    category: "Mochilão",
    isPracticalGuide: true,
    hubSlug: "bagagem",
    affiliatePartnerId: "ml-bagagem-anac",
    coverImage: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=1600&q=80",
    author: {
      name: "Lucas Mendes",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      bio: "Analista de tarifas aéreas, resolução ANAC nº 400/2016 e otimização de bagagem de mão de 10kg sem despacho."
    },
    date: "12 de Outubro de 2026",
    readTime: "10 min de leitura",
    budgetLevel: "$",
    budgetDescription: "Economia de R$ 240 a R$ 580 por viagem evitando despacho de mala de 23kg (Consultado em Outubro/2026)",
    bestSeason: "Válido o ano inteiro em todas as companhias aéreas",
    recommendedDays: "Ideal para viagens de 3 a 10 dias",
    featured: true,
    executiveSummary:
      "Pela Resolução nº 400 da ANAC, todo passageiro tem direito gratuito na maioria das tarifas regulares a 1 mala de mão de até 10 kg (medida máxima 55 x 35 x 25 cm incluindo rodinhas) mais 1 item pessoal (mochila ou bolsa de até 40 x 30 x 10 cm que caiba sob o assento). Em voos internacionais, líquidos devem ir em frascos de no máximo 100 ml dentro de um saquinho transparente de 1 litro.",
    toc: [
      { id: "medidas-oficiais-anac", title: "1. Medidas e Peso Oficiais da Bagagem de Mão + Item Pessoal" },
      { id: "tabela-companhias-bagagem", title: "2. Tabela de Franquias e Taxas por Companhia Aérea (Outubro/2026)" },
      { id: "regra-liquidos-raiox", title: "3. Regra de Líquidos (100 ml vs. 300 ml) e Eletrônicos no Raio-X" },
      { id: "capsula-7-dias", title: "4. Guarda-Roupa Cápsula: Como Caber 7 Dias em 10 kg" },
      { id: "checklist-bagagem-mao", title: "5. Checklist do Que Sempre Deve Ir na Mochila Pessoal" }
    ],
    highlights: [
      "Dimensões exatas aceitas por Gol, Latam e Azul: 55 cm x 35 cm x 25 cm (mala) + item pessoal",
      "Diferença crucial entre líquidos em voos nacionais (até 300 ml/frasco) e internacionais (máximo 100 ml/frasco)",
      "Por que powerbanks (baterias portáteis) e notebooks NUNCA podem ser despachados no porão",
      "Método Cápsula 5-4-3-2-1 para viajar 7 dias sem repetir visual e sem estourar os 10 kg",
      "Como evitar o despacho compulsório no portão de embarque"
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
        caption: "Mochila executiva compacta que funciona como item pessoal gratuito embaixo do assento dianteiro"
      },
      {
        url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1200&q=80",
        caption: "Organização modular por cubos organizadores e frascos transparentes de até 100ml para inspeção rápida"
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Passo 1: Escolha e Pesagem da Mala Vazia",
        activities: [
          "Meça sua mala com uma fita métrica do chão até o topo da alça recolhida: não pode ultrapassar 55 cm de altura, 35 cm de largura e 25 cm de profundidade.",
          "Pese a mala vazia: modelos ideais pesam entre 2,2 kg e 2,7 kg. Evite malas antigas de tecido pesado que já consomem 4 kg vazias."
        ]
      },
      {
        day: 2,
        title: "Passo 2: Seleção de Roupas por Cubos Organizadores",
        activities: [
          "Separe 5 blusas/camisetas, 3 partes de baixo (calças/bermudas), 1 casaco versátil, roupas íntimas em um cubo de malha e 1 calçado extra.",
          "Vista no corpo o calçado mais pesado (tênis de caminhada ou bota) e a jaqueta mais volumosa no dia do embarque."
        ]
      },
      {
        day: 3,
        title: "Passo 3: Separação de Líquidos, Remédios e Eletrônicos",
        activities: [
          "Transfira shampoo, condicionador, perfume e protetor solar para frascos de viagem de até 100 ml dentro de uma nécessaire transparente vedável.",
          "Coloque passaporte/RG, remédios contínuos com receita, óculos, carregador, powerbank e notebook na mochila pessoal (que vai sob o seu assento, nunca no bagageiro superior)."
        ]
      }
    ],
    essentialTips: [
      {
        title: "Jamais Deixe Eletrônicos na Mala de Rodinhas se o Voo Lotar",
        description: "Quando o voo está cheio, os agentes no portão pedem para despachar gratuitamente as malas de rodinhas de 10kg no porão. Se isso acontecer, retire imediatamente powerbank, notebook, chaves, joias e remédios e passe para a mochila pessoal."
      },
      {
        title: "Atenção às Novas Tarifas 'Básicas' Internacionais",
        description: "Em algumas rotas sul-americanas e internacionais, a tarifa mais barata ('Basic' ou 'Zero') inclui apenas 1 mochila abaixo do assento (sem mala de 10kg no bagageiro superior). Sempre leia o quadro de bagagem antes de pagar."
      },
      {
        title: "O Que É Proibido Levar na Cabine",
        description: "Canivetes, tesouras com lâmina maior que 6 cm, saca-rolhas com lâmina, aerossóis inflamáveis (desodorante spray grande acima de 100ml em voo internacional) e ferramentas são retidos no canal de inspeção."
      }
    ],
    content: [
      `<h3 id="medidas-oficiais-anac" class="text-xl font-bold text-stone-900 mt-4 mb-2">1. Medidas e Peso Oficiais da Bagagem de Mão + Item Pessoal</h3>
      <p>Viajar apenas com bagagem de mão transforma sua experiência: você sai do avião direto para a rua sem esperar 40 minutos na esteira, elimina o risco de extravio em conexões curtas e economiza centenas de reais por trecho. No Brasil, o padrão adotado pelas companhias associadas à ABEAR e fiscalizado pela <strong>ANAC</strong> divide a bagagem de cabine em duas peças:</p>
      <ul class="list-disc pl-5 space-y-1.5">
        <li><strong>Mala de Bordo (Bagageiro Superior):</strong> Até <strong>10 kg</strong>, com dimensões máximas de <strong>55 cm (altura) x 35 cm (largura) x 25 cm (profundidade)</strong>, incluindo rodinhas, bolsos e alças.</li>
        <li><strong>Artigo Pessoal (Debaixo do Assento à Sua Frente):</strong> 1 mochila pequena ou bolsa de até <strong>40 cm x 30 cm x 10-15 cm</strong>.</li>
      </ul>`,

      `<h3 id="tabela-companhias-bagagem" class="text-xl font-bold text-stone-900 mt-6 mb-3">2. Tabela de Franquias e Taxas de Despacho por Companhia (Outubro/2026)</h3>
      <div class="overflow-x-auto my-4">
        <table class="w-full text-left border-collapse border border-stone-200 rounded-xl overflow-hidden text-xs sm:text-sm">
          <thead>
            <tr class="bg-stone-900 text-white">
              <th class="p-3">Companhia Aérea</th>
              <th class="p-3">Mala de Mão (10kg)</th>
              <th class="p-3">Item Pessoal</th>
              <th class="p-3">1ª Mala Despachada 23kg (Antecipado Online)</th>
              <th class="p-3">1ª Mala Despachada 23kg (No Balcão Aeroporto)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-stone-200 bg-white">
            <tr>
              <td class="p-3 font-bold">GOL Linhas Aéreas</td>
              <td class="p-3">55 x 35 x 25 cm (10 kg)</td>
              <td class="p-3">40 x 30 x 20 cm</td>
              <td class="p-3">R$ 110 a R$ 145 / trecho</td>
              <td class="p-3">R$ 180 a R$ 220 / trecho</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">LATAM Brasil</td>
              <td class="p-3">55 x 35 x 25 cm (10 kg)</td>
              <td class="p-3">45 x 35 x 20 cm</td>
              <td class="p-3">R$ 115 a R$ 165 / trecho</td>
              <td class="p-3">R$ 185 a R$ 240 / trecho</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Azul Linhas Aéreas</td>
              <td class="p-3">55 x 35 x 25 cm (10 kg)</td>
              <td class="p-3">45 x 35 x 20 cm</td>
              <td class="p-3">R$ 120 a R$ 160 / trecho</td>
              <td class="p-3">R$ 190 a R$ 230 / trecho</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Low-Costs (Sky / JetSmart / Ryanair)</td>
              <td class="p-3">Cobrada à parte na tarifa Zero/Basic</td>
              <td class="p-3">Incluso (até 40 x 25 x 20 cm)</td>
              <td class="p-3">US$ 30 a US$ 55 / trecho</td>
              <td class="p-3">US$ 65 a US$ 95 / trecho</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-xs text-stone-500 italic">*Valores médios consultados em Outubro/2026 para rotas domésticas e regionais. As taxas variam conforme antecedência da compra, canal e rota.</p>`,

      `<h3 id="regra-liquidos-raiox" class="text-xl font-bold text-stone-900 mt-6 mb-2">3. Regra de Líquidos (100 ml vs. 300 ml) e Eletrônicos no Raio-X</h3>
      <p>Em <strong>voos internacionais</strong> (mesmo embarcando em aeroportos brasileiros), a norma da ANAC/OACI é estrita: qualquer líquido, gel, pasta (inclusive pasta de dente, rímel, base líquida e doce de leite/geleias) deve estar em frascos individuais de até <strong>100 ml</strong>. Um frasco de 200 ml que esteja pela metade será retido porque vale a capacidade impressa na embalagem. Todos os frascos devem caber em um único saco plástico transparente com fecho tipo ziplock de até 1 litro.</p>
      <p>Já em <strong>voos 100% domésticos dentro do Brasil</strong>, você pode levar frascos de até 300 ml cada (somando até 1,2 litro no total).</p>`,

      `<h3 id="capsula-7-dias" class="text-xl font-bold text-stone-900 mt-6 mb-2">4. Guarda-Roupa Cápsula: Como Caber 7 Dias em 10 kg</h3>
      <p>Use a regra das cores neutras que combinam todas entre si (preto, branco, bege, azul-marinho ou verde-oliva). Com 5 partes de cima e 3 partes de baixo você monta <strong>15 combinações diferentes</strong>. Utilize cubos organizadores de compressão ou sacos a vácuo para casacos e pese sempre a mala com uma balança digital portátil em casa para garantir que está abaixo de 9,8 kg.</p>`,

      `<h3 id="checklist-bagagem-mao" class="text-xl font-bold text-stone-900 mt-6 mb-2">5. Checklist do Que Sempre Deve Ir na Mochila Pessoal</h3>
      <ul class="list-disc pl-5 space-y-1.5">
        <li>[ ] Passaporte ou RG original + carteira física e cartões internacionais.</li>
        <li>[ ] Medicamentos de uso contínuo (com receita médica em viagens internacionais).</li>
        <li>[ ] Powerbank (bateria externa até 100Wh / ~27.000 mAh) e cabos carregadores.</li>
        <li>[ ] Notebook, tablet ou câmera fotográfica.</li>
        <li>[ ] Uma muda extra de roupa íntima e camiseta básica (salva sua viagem se a mala de 10kg for despachada no portão).</li>
      </ul>`
    ],
    faq: [
      {
        question: "Posso levar secador de cabelo ou chapinha na mala de mão?",
        answer: "Sim! Secador de cabelo, chapinha e modelador de cachos com fio são permitidos na bagagem de mão tanto em voos nacionais quanto internacionais (atenção apenas a modelos sem fio alimentados por gás butano ou bateria de lítio não removível, que possuem restrições)."
      },
      {
        question: "Remédios entram no limite de 100 ml de líquidos em voos internacionais?",
        answer: "Medicamentos líquidos essenciais para o período do voo (como insulina, colírios ou xaropes pediátricos) são permitidos acima de 100 ml desde que acompanhados da prescrição médica nominal ao passageiro e apresentados separadamente na bandeja do raio-X."
      },
      {
        question: "O peso da mochila pessoal entra na conta dos 10 kg da mala de bordo?",
        answer: "Não. Os 10 kg referem-se à mala de bordo que vai no compartimento superior. O item pessoal (mochila ou bolsa de mão sob o assento) tem tolerância própria (geralmente até 2 kg a 5 kg conforme a companhia)."
      }
    ],
    officialSources: [
      {
        name: "ANAC — Guia do Passageiro: Bagagem de Mão e Despachada",
        url: "https://www.gov.br/anac/pt-br/assuntos/passageiros/bagagem",
        description: "Diretrizes oficiais da Agência Nacional de Aviação Civil sobre franquias, itens proibidos e extravio."
      }
    ]
  },
  {
    id: "30",
    slug: "como-escolher-seguro-viagem-comparativo",
    title: "Como Escolher Seguro Viagem em 2026: Coberturas Médicas, Schengen e Comparativo Real",
    subtitle: "Entenda quanto de cobertura contratar para os EUA, Europa ou América do Sul, o que significa DMHO, quando o seguro do cartão de crédito vale a pena e como evitar pegadinhas.",
    destination: "Seguro Viagem Nacional e Internacional",
    stateCountry: "Proteção & Saúde do Viajante",
    region: "Internacional",
    category: "Urbano & Cultural",
    isPracticalGuide: true,
    hubSlug: "seguro-viagem",
    affiliatePartnerId: "ekta-seguro",
    coverImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80",
    author: {
      name: "Camila Rocha",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      bio: "Especialista em comparativos técnicos de apólices médicas internacionais (Tratado de Schengen e EUA) e proteção ao viajante."
    },
    date: "12 de Outubro de 2026",
    readTime: "11 min de leitura",
    budgetLevel: "$",
    budgetDescription: "Investimento médio de R$ 11 a R$ 29 por dia de viagem (Consultado em Outubro/2026)",
    bestSeason: "Emitir antes de embarcar no Brasil (com carência zero antes da saída)",
    recommendedDays: "Deve cobrir da data de saída do Brasil até a data de pouso na volta",
    featured: true,
    executiveSummary:
      "O melhor seguro viagem não é o mais caro, mas o que tem Despesas Médicas e Hospitalares (DMHO) compatíveis com o custo hospitalar do seu destino: mínimo de US$ 30.000 para América do Sul, € 30.000 obrigatórios para a Europa (Espaço Schengen) e US$ 60.000 a US$ 100.000 para Estados Unidos, Canadá e Japão. Certifique-se sempre de que a apólice funcione no modelo 'Seguro' (atendimento direto na rede credenciada sem você desembolsar) e cubra condições preexistentes.",
    toc: [
      { id: "cobertura-minima-destino", title: "1. Tabela de Cobertura Médica Recomendada por Destino (Outubro/2026)" },
      { id: "paises-obrigatorios", title: "2. Onde o Seguro Viagem É Obrigatório por Lei na Imigração" },
      { id: "seguro-avulso-vs-cartao", title: "3. Comparativo: Seguro Viagem Dedicado vs. Seguro do Cartão Black/Infinite" },
      { id: "clausulas-essenciais", title: "4. As 5 Cláusulas que Você Precisa Conferir na Apólice" },
      { id: "como-acionar", title: "5. Passo a Passo de Como Acionar o Seguro em Caso de Emergência" }
    ],
    highlights: [
      "Tabela completa de cobertura DMHO recomendada por continente e custo médio de consulta médica no exterior",
      "Por que € 30.000 é exigência legal inegociável nos 29 países do Tratado de Schengen na Europa",
      "Comparativo sincero: quando o seguro gratuito do cartão de crédito funciona e quando ele deixa na mão",
      "Atenção especial para gestantes, viajantes 65+, doenças preexistentes e prática de esportes na neve",
      "Como acionar atendimento médico 24h via WhatsApp ou aplicativo sem pagar do próprio bolso"
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80",
        caption: "Atendimento médico e telemedicina internacional: uma simples consulta de urgência nos EUA passa de US$ 800"
      },
      {
        url: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80",
        caption: "Apólice impressa e salva em PDF no celular pronta para conferência na imigração europeia"
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Passo 1: Defina o Valor de DMHO pelo Destino Mais Caro do Roteiro",
        activities: [
          "Se você vai para a Argentina ou Peru, filtre planos a partir de US$ 30.000.",
          "Se vai para a Europa, filtre planos a partir de € 30.000 ou US$ 40.000.",
          "Se vai para os Estados Unidos ou fará conexão longa em solo americano, filtre planos de US$ 60.000 a US$ 100.000."
        ]
      },
      {
        day: 2,
        title: "Passo 2: Verifique Perfil Etário, Esportes e Preexistências",
        activities: [
          "Vai esquiar em Bariloche ou fazer trilha em altitude no Peru? Confirme se a cobertura inclui 'Esportes Amadores/Neve' dentro do limite principal.",
          "Tem hipertensão, diabetes ou asma? Verifique a cláusula de 'Crise de Doença Preexistente ou Crônica' para atendimento de estabilização."
        ]
      },
      {
        day: 3,
        title: "Passo 3: Emissão e Salvamento Offline da Apólice",
        activities: [
          "Configure a vigência começando no dia em que seu avião decola do Brasil e terminando no dia em que você pousa de volta.",
          "Salve o PDF da apólice no celular, envie uma cópia para seu acompanhante de viagem e anote o número de WhatsApp de emergência da seguradora."
        ]
      }
    ],
    essentialTips: [
      {
        title: "Nunca Acione o Hospital Antes de Falar com a Central (Salvo Risco de Vida)",
        description: "Exceto em emergências gravíssimas de ambulância (911/112), sempre chame primeiro a central 24h da seguradora pelo WhatsApp ou telefone gratuito. Eles indicam a clínica conveniada mais próxima ou enviam médico ao hotel sem que você precise pagar nada."
      },
      {
        title: "Guarde a Etiqueta da Bagagem (PIR) em Caso de Extravio",
        description: "Para receber a indenização de bagagem extraviada do seguro, é obrigatório registrar o Property Irregularity Report (PIR) no balcão da companhia aérea ainda dentro da sala de desembarque antes de sair do aeroporto."
      }
    ],
    content: [
      `<h3 id="cobertura-minima-destino" class="text-xl font-bold text-stone-900 mt-4 mb-3">1. Tabela de Cobertura Médica Recomendada por Destino (Outubro/2026)</h3>
      <p>Nos Estados Unidos ou na Suíça, um atendimento de apendicite ou fratura no tornozelo com 2 dias de internação pode ultrapassar <strong>US$ 35.000 (quase R$ 200 mil)</strong>. Confira a tabela técnica de coberturas e preços médios consultados em <strong>Outubro de 2026</strong>:</p>
      <div class="overflow-x-auto my-4">
        <table class="w-full text-left border-collapse border border-stone-200 rounded-xl overflow-hidden text-xs sm:text-sm">
          <thead>
            <tr class="bg-stone-900 text-white">
              <th class="p-3">Destino da Viagem</th>
              <th class="p-3">Obrigatoriedade Legal</th>
              <th class="p-3">Cobertura DMHO Mínima Recomendada</th>
              <th class="p-3">Faixa de Preço por Dia (Out/2026)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-stone-200 bg-white">
            <tr>
              <td class="p-3 font-bold">Brasil (Nacional Fora do Domicílio)</td>
              <td class="p-3">Opcional (Recomendado se sem plano nacional)</td>
              <td class="p-3">R$ 15.000 a R$ 30.000</td>
              <td class="p-3">R$ 5,90 a R$ 11,50 / dia</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">América do Sul (Argentina, Chile, Peru, Uruguai)</td>
              <td class="p-3">Exigido/Fortemente recomendado na imigração</td>
              <td class="p-3">US$ 30.000 a US$ 40.000</td>
              <td class="p-3">R$ 9,90 a R$ 18,90 / dia</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Europa (29 Países do Tratado de Schengen)</td>
              <td class="p-3">Obrigatório por Lei (€ 30.000 mínimos)</td>
              <td class="p-3">€ 30.000 a US$ 60.000</td>
              <td class="p-3">R$ 13,50 a R$ 24,90 / dia</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">EUA, Canadá, Japão e Austrália</td>
              <td class="p-3">Indispensável (Saúde privada altíssima)</td>
              <td class="p-3">US$ 60.000 a US$ 150.000</td>
              <td class="p-3">R$ 17,90 a R$ 36,00 / dia</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-xs text-stone-500 italic">*Preços médios consultados em Outubro/2026 para viajantes de até 60 anos. Tarifas variam conforme idade, duração e coberturas adicionais.</p>`,

      `<h3 id="paises-obrigatorios" class="text-xl font-bold text-stone-900 mt-6 mb-2">2. Onde o Seguro Viagem É Obrigatório por Lei na Imigração</h3>
      <p>Os 29 países europeus signatários do <strong>Acordo de Schengen</strong> (incluindo Portugal, Espanha, França, Itália, Alemanha, Suíça, Países Baixos e Grécia) exigem comprovação de seguro médico internacional com cobertura mínima de <strong>€ 30.000 (trinta mil euros)</strong> e repatriação sanitária. O agente de imigração pode solicitar a apólice impressa ou no celular antes de carimbar seu passaporte.</p>`,

      `<h3 id="seguro-avulso-vs-cartao" class="text-xl font-bold text-stone-900 mt-6 mb-2">3. Comparativo: Seguro Viagem Dedicado vs. Seguro do Cartão Black/Infinite</h3>
      <p>Se você possui cartão Visa Infinite, Mastercard Black ou Elo Nanquim e pagou 100% da passagem aérea (ou a taxa de embarque em emissões com milhas) com ele, você pode emitir o bilhete de seguro gratuito do cartão. <strong>Quando ele é suficiente?</strong> Em viagens curtas de adultos jovens sem doenças preexistentes. <strong>Quando contratar um seguro avulso dedicado?</strong> Quando você comprou a passagem com PIX/outro cartão, quando viaja com pessoas que não são seus dependentes diretos conforme regra da bandeira, ou quando quer atendimento ágil por telemedicina em português sem franquias complexas.</p>`,

      `<h3 id="clausulas-essenciais" class="text-xl font-bold text-stone-900 mt-6 mb-2">4. As 5 Cláusulas que Você Precisa Conferir na Apólice</h3>
      <ul class="list-disc pl-5 space-y-1.5">
        <li><strong>DMHO por Evento:</strong> Prefira apólices onde o limite médico se renova por evento distinto.</li>
        <li><strong>Regresso Sanitário e Traslado Médico:</strong> Garante transporte em UTI aérea ou assento especial caso você não possa voltar em voo comercial comum.</li>
        <li><strong>Atraso e Extravio de Bagagem:</strong> Verifique se a indenização é <em>suplementar</em> (paga o valor cheio além do que a companhia aérea indenizar).</li>
        <li><strong>Cobertura Farmacêutica:</strong> Reembolso dos medicamentos receitados pelo médico durante o atendimento de urgência no exterior.</li>
      </ul>`,

      `<h3 id="como-acionar" class="text-xl font-bold text-stone-900 mt-6 mb-2">5. Passo a Passo de Como Acionar o Seguro em Caso de Emergência</h3>
      <p>1. Tenha o número da apólice e seu passaporte em mãos. 2. Envie mensagem no WhatsApp 24h da seguradora informando seus sintomas e o endereço exato do seu hotel. 3. Aguarde o direcionamento para o hospital credenciado (com pagamento direto pela seguradora) ou consulta imediata por vídeo com médico plantonista.</p>`
    ],
    faq: [
      {
        question: "Posso contratar o seguro viagem depois que já saí do Brasil?",
        answer: "A maioria das seguradoras exige que a contratação seja feita antes do início da viagem, ainda no Brasil. Algumas poucas permitem emissão já no exterior, mas aplicam uma carência de 48h a 72h após o pagamento na qual nenhuma emergência é coberta."
      },
      {
        question: "O seguro viagem cobre atendimento odontológico de urgência?",
        answer: "Sim! Quase todos os planos completos incluem uma verba de Despesa Odontológica de Urgência (para dor aguda, infecção ou trauma dentário durante a viagem)."
      }
    ],
    officialSources: [
      {
        name: "SUSEP — Superintendência de Seguros Privados (Normas de Seguro Viagem)",
        url: "https://www.gov.br/susep/pt-br/planos-e-produtos/seguros/seguro-viagem",
        description: "Regulamentação oficial brasileira sobre coberturas obrigatórias e direitos do segurado em viagens."
      },
      {
        name: "Ministério das Relações Exteriores (Itamaraty) — Portal Consular",
        url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular",
        description: "Alertas oficiais sobre exigência de seguro saúde em países estrangeiros e assistência consular."
      }
    ]
  },
  {
    id: "31",
    slug: "como-planejar-primeira-viagem-internacional",
    title: "Como Planejar sua Primeira Viagem Internacional: Cronograma Completo do Zero ao Embarque",
    subtitle: "Passaporte, escolha do destino sem visto, câmbio, imigração, conexão em aeroporto internacional e checklist mês a mês para viajar sem medo.",
    destination: "Primeira Viagem ao Exterior",
    stateCountry: "América do Sul & Europa",
    region: "Internacional",
    category: "Urbano & Cultural",
    isPracticalGuide: true,
    hubSlug: "primeira-viagem-internacional",
    affiliatePartnerId: "airalo-esim",
    coverImage: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=1600&q=80",
    author: {
      name: "Camila Rocha",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      bio: "Editora de Hospedagem, Seguro Viagem & Primeira Viagem Internacional no Malas Prontas."
    },
    date: "12 de Outubro de 2026",
    readTime: "13 min de leitura",
    budgetLevel: "$$",
    budgetDescription: "De R$ 3.400 (Mercosul 5 dias) a R$ 9.800 (Europa 8 dias) — Consultado em Outubro/2026",
    bestSeason: "Meia-estação (Abril/Maio ou Setembro/Outubro) para clima ameno e preços 30% menores",
    recommendedDays: "5 a 10 dias para estreantes",
    featured: true,
    executiveSummary:
      "Para estrear no exterior com tranquilidade, escolha destinos amigáveis onde brasileiros não precisam de visto (como Argentina, Chile, Uruguai e Peru — que aceitam inclusive apenas o RG recente — ou Portugal e Espanha com passaporte), siga o cronograma regressivo de 6 meses, leve uma pastinha física com reservas impressas para a imigração e já pouse conectado com eSIM.",
    toc: [
      { id: "melhores-destinos-estreia", title: "1. Melhores Destinos para a 1ª Viagem Internacional (Com Comparativo de Custos)" },
      { id: "cronograma-6-meses", title: "2. Cronograma Mês a Mês: O Que Fazer Antes de Embarcar" },
      { id: "como-funciona-imigracao", title: "3. Como Funciona a Entrevista de Imigração na Prática" },
      { id: "conexoes-aeroporto", title: "4. Passo a Passo no Aeroporto Internacional e Conexões" },
      { id: "checklist-estreante", title: "5. Checklist da Pastinha da Imigração" }
    ],
    highlights: [
      "Comparativo entre estrear no Mercosul (apenas RG) vs. Europa (passaporte sem visto por até 90 dias)",
      "As 5 perguntas clássicas que o agente de imigração faz e quais documentos ter em mãos",
      "Como identificar seu portão de embarque, fazer conexão internacional e passar pela alfândega",
      "Por que nunca deixar para comprar toda a moeda estrangeira na véspera do voo",
      "Guia de sobrevivência para quem não fala inglês fluente"
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1544016768-982d1554f0b9?auto=format&fit=crop&w=1200&q=80",
        caption: "Passaporte brasileiro e cartão de embarque: confira a validade mínima de 6 meses após a data de retorno"
      },
      {
        url: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&w=1200&q=80",
        caption: "Painel de partidas internacionais: chegue ao aeroporto com 3 horas de antecedência para voos ao exterior"
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "6 a 4 Meses Antes: Documentação e Passagens",
        activities: [
          "Confirme se seu RG tem menos de 10 anos de emissão (para viagens ao Mercosul) ou emita/renove seu Passaporte no site da Polícia Federal.",
          "Confira se o destino exige Certificado Internacional de Vacinação contra Febre Amarela (CIVP emitido gratuitamente no Meu SUS Digital / Anvisa).",
          "Compre a passagem aérea ida e volta (nunca compre apenas ida para turismo, pois a imigração exige comprovação de retorno)."
        ]
      },
      {
        day: 2,
        title: "3 a 2 Meses Antes: Hospedagem, Câmbio e Roteiro Base",
        activities: [
          "Reserve hotéis ou apartamentos bem localizados com cancelamento grátis.",
          "Compre 25% da moeda estrangeira a cada mês na sua conta internacional para fazer preço médio.",
          "Monte um roteiro leve com no máximo 2 atrações principais por período."
        ]
      },
      {
        day: 3,
        title: "30 a 2 Dias Antes: Seguro, eSIM e Pastinha Impressa",
        activities: [
          "Contrate o seguro viagem obrigatório e instale o chip eSIM no celular.",
          "Imprima em papel: passagem de volta, reserva do hotel, apólice do seguro e comprovante financeiro.",
          "Faça o check-in online 24h a 48h antes do voo e pese a mala em casa."
        ]
      }
    ],
    essentialTips: [
      {
        title: "CNH Não Vale Como Documento no Exterior!",
        description: "A Carteira Nacional de Habilitação (CNH) serve para dirigir, mas NÃO é aceita para embarque nem imigração nos países do Mercosul. Você precisa obrigatoriamente do RG físico original (com menos de 10 anos) ou Passaporte válido."
      },
      {
        title: "Não Precisa Falar Inglês Fluente para Viajar",
        description: "Com o aplicativo Google Tradutor (com idioma baixado offline e leitura por câmera para cardápios e placas) e simpatia, você resolve 100% das situações em restaurantes, trens e hotéis."
      }
    ],
    content: [
      `<h3 id="melhores-destinos-estreia" class="text-xl font-bold text-stone-900 mt-4 mb-3">1. Melhores Destinos para a 1ª Viagem Internacional (Outubro/2026)</h3>
      <p>Se você quer perder o frio na barriga da primeira viagem internacional, escolha destinos com logística simples, transporte público intuitivo e idioma acessível. Veja o comparativo atualizado em <strong>Outubro de 2026</strong>:</p>
      <div class="overflow-x-auto my-4">
        <table class="w-full text-left border-collapse border border-stone-200 rounded-xl overflow-hidden text-xs sm:text-sm">
          <thead>
            <tr class="bg-stone-900 text-white">
              <th class="p-3">Destino Sugerido</th>
              <th class="p-3">Documento Exigido</th>
              <th class="p-3">Dificuldade de Idioma</th>
              <th class="p-3">Custo Médio Total 6 Dias (Voo + Hotel + Gastos)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-stone-200 bg-white">
            <tr>
              <td class="p-3 font-bold">Buenos Aires (Argentina)</td>
              <td class="p-3">RG (&lt;10 anos) ou Passaporte</td>
              <td class="p-3">Muito Baixa (Portunhol amigável)</td>
              <td class="p-3">R$ 3.400 a R$ 5.200 por pessoa</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Santiago (Chile)</td>
              <td class="p-3">RG (&lt;10 anos) ou Passaporte</td>
              <td class="p-3">Baixa (Espanhol claro)</td>
              <td class="p-3">R$ 3.800 a R$ 5.800 por pessoa</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Cusco & Machu Picchu (Peru)</td>
              <td class="p-3">RG (&lt;10 anos) ou Passaporte</td>
              <td class="p-3">Baixa (Forte estrutura turística)</td>
              <td class="p-3">R$ 4.200 a R$ 6.400 por pessoa</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Lisboa & Porto (Portugal)</td>
              <td class="p-3">Passaporte + Seguro €30k</td>
              <td class="p-3">Zero (Idioma Português)</td>
              <td class="p-3">R$ 7.900 a R$ 11.500 por pessoa (8 dias)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-xs text-stone-500 italic">*Estimativas consultadas em Outubro/2026 saindo de São Paulo/Rio em classe econômica e hospedagem 3 estrelas. Tarifas variam conforme temporada.</p>`,

      `<h3 id="cronograma-6-meses" class="text-xl font-bold text-stone-900 mt-6 mb-2">2. Cronograma Mês a Mês: O Que Fazer Antes de Embarcar</h3>
      <p>Organizar uma viagem internacional não dá dor de cabeça quando você resolve uma etapa por mês: <strong>Mês 1:</strong> Passaporte e escolha do destino. <strong>Mês 2:</strong> Compra das passagens aéreas. <strong>Mês 3:</strong> Reserva de hotel com cancelamento grátis. <strong>Mês 4:</strong> Compra de ingressos concorridos (como Machu Picchu, Torre Eiffel ou Vaticano). <strong>Mês 5:</strong> Contratação do seguro viagem e câmbio. <strong>Mês 6:</strong> Check-in, mala e embarque!</p>`,

      `<h3 id="como-funciona-imigracao" class="text-xl font-bold text-stone-900 mt-6 mb-2">3. Como Funciona a Entrevista de Imigração na Prática</h3>
      <p>Ao descer do avião no país de destino, você seguirá as placas <em>Arrivals / Immigration / Passport Control</em>. O oficial de fronteira só quer confirmar três coisas: que você é um turista legítimo, que tem onde ficar e como se sustentar, e que vai voltar para o Brasil na data marcada. Responda com calma e verdade às perguntas clássicas: <em>Qual o motivo da viagem? Quantos dias vai ficar? Onde vai se hospedar?</em></p>`,

      `<h3 id="conexoes-aeroporto" class="text-xl font-bold text-stone-900 mt-6 mb-2">4. Passo a Passo no Aeroporto Internacional e Conexões</h3>
      <p>Chegue ao aeroporto <strong>3 horas antes do voo internacional</strong>. Caso seu voo tenha conexão (comprada no mesmo bilhete/localizador), pergunte no balcão de check-in no Brasil se a mala vai direto até o destino final. Em conexões com menos de 1h30, nunca compre voos separados de companhias diferentes.</p>`,

      `<h3 id="checklist-estreante" class="text-xl font-bold text-stone-900 mt-6 mb-2">5. Checklist da Pastinha da Imigração</h3>
      <ul class="list-disc pl-5 space-y-1.5">
        <li>[ ] Passaporte com validade superior a 6 meses (ou RG original emitido há menos de 10 anos no Mercosul).</li>
        <li>[ ] Passagem aérea de volta impressa com código localizador visível.</li>
        <li>[ ] Comprovante de reserva de hospedagem cobrindo todas as noites da viagem.</li>
        <li>[ ] Apólice de Seguro Viagem impressa.</li>
        <li>[ ] Extrato do cartão internacional / saldo em conta global e dinheiro em espécie.</li>
      </ul>`
    ],
    faq: [
      {
        question: "Qual a validade mínima do passaporte para viajar para o exterior?",
        answer: "A maioria dos países exige que o passaporte tenha validade mínima de 6 meses além da data planejada de saída do país visitado (no Espaço Schengen, mínimo de 3 meses após a data de saída)."
      },
      {
        question: "Posso ser barrado na imigração se eu estiver nervoso?",
        answer: "Ficar um pouco nervoso na primeira viagem é super comum e os agentes sabem disso. O que evita qualquer problema é ter toda a documentação impressa organizada numa pastinha: passagem de volta, reserva de hotel paga ou confirmada, seguro viagem e meios financeiros."
      }
    ],
    officialSources: [
      {
        name: "Polícia Federal — Divisão de Passaportes e Controle Migratório",
        url: "https://www.gov.br/pf/pt-br/assuntos/passaporte",
        description: "Emissão de passaporte brasileiro, taxas GRU e regras de saída de menores do país."
      },
      {
        name: "Itamaraty — Requisitos de Entrada por País para Brasileiros",
        url: "https://www.gov.br/mre/pt-br/assuntos/portal-consular/vamos-viajar",
        description: "Guia oficial do Ministério das Relações Exteriores para brasileiros em viagem ao exterior."
      }
    ]
  },
  {
    id: "32",
    slug: "hotel-hostel-ou-apartamento-qual-escolher",
    title: "Hotel, Hostel ou Apartamento de Temporada: Qual Escolher por Perfil e Custos Ocultos",
    subtitle: "Comparativo completo entre diárias, taxas de limpeza, café da manhã, segurança e localização para descobrir qual hospedagem realmente compensa na sua viagem.",
    destination: "Guia de Escolha de Hospedagem",
    stateCountry: "Brasil & Exterior",
    region: "Sudeste",
    category: "Urbano & Cultural",
    isPracticalGuide: true,
    hubSlug: "economizar",
    affiliatePartnerId: "booking-stay22",
    coverImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
    author: {
      name: "Camila Rocha",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      bio: "Editora de Hospedagem, Seguro Viagem & Viagens em Família no Malas Prontas."
    },
    date: "12 de Outubro de 2026",
    readTime: "10 min de leitura",
    budgetLevel: "$$",
    budgetDescription: "Economia de até 35% escolhendo a modalidade certa para o tamanho do seu grupo (Consultado em Outubro/2026)",
    bestSeason: "Reservar com 45 a 90 dias de antecedência com cancelamento gratuito",
    recommendedDays: "Análise para estadias de 2 a 15+ noites",
    featured: false,
    executiveSummary:
      "A escolha entre Hotel, Hostel e Apartamento de Temporada depende da duração da viagem e do número de pessoas: para estadias curtas (1 a 4 noites) ou casais que querem praticidade e guarda-volumes, o Hotel com café da manhã vence por não cobrar taxa de limpeza; para viajantes solo econômicos, o Hostel reduz o custo em 60%; já para famílias de 3 a 6 pessoas ou estadias acima de 5 noites, o Apartamento com cozinha gera grande economia com alimentação.",
    toc: [
      { id: "comparativo-direto-hospedagem", title: "1. Tabela Comparativa: Hotel vs. Hostel vs. Apartamento (Outubro/2026)" },
      { id: "armadilha-taxa-limpeza", title: "2. A Matemática das Taxas de Limpeza e Guarda-Malas" },
      { id: "qual-escolher-perfil", title: "3. Qual Escolher para Viajante Solo, Casal, Família e Grupo" },
      { id: "regras-ouro-reserva", title: "4. Os 6 Filtros Obrigatórios Antes de Clicar em Reservar" },
      { id: "checklist-hospedagem", title: "5. Checklist de Conferência de Reserva" }
    ],
    highlights: [
      "Por que um apartamento de R$ 200/noite pode sair mais caro que um hotel de R$ 290 em viagens de fim de semana",
      "Quanto vale o café da manhã incluso no hotel no orçamento diário de um casal ou família",
      "Quartos privativos em Hostels Boutique: o segredo pouco conhecido na Europa e América do Sul",
      "A importância vital da recepção 24h e guarda-malas gratuito quando seu voo chega cedo ou sai à noite",
      "Teste na prática com o Comparador Interativo de Hospedagem em /ferramentas"
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80",
        caption: "Quarto de hotel com recepção 24h, limpeza diária e guarda-bagagem gratuito antes do check-in"
      },
      {
        url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80",
        caption: "Hostel moderno com cortinas de privacidade, armários individuais (lockers) e cozinha compartilhada"
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Regra para 1 a 3 Noites: Priorize Hotel ou Pousada com Recepção 24h",
        activities: [
          "Em viagens curtas, a taxa fixa de limpeza e serviço de apartamentos diluída em apenas 2 diárias encarece o valor final em até 40%.",
          "Além disso, no hotel você deixa as malas gratuitamente na recepção se chegar às 9h da manhã e já sai para passear."
        ]
      },
      {
        day: 2,
        title: "Regra para 5+ Noites ou Famílias (3 a 6 Pessoas): Apartamento com Cozinha",
        activities: [
          "Diluindo a taxa de limpeza por 6 ou 7 noites e preparando café da manhã e jantares rápidos no apartamento, uma família de 4 pessoas economiza entre R$ 1.200 e R$ 2.800 na semana."
        ]
      },
      {
        day: 3,
        title: "Regra para Viajante Solo: Hostel (Dormitório ou Quarto Privativo)",
        activities: [
          "Como hotéis cobram por quarto (e não por pessoa), quem viaja sozinho paga o dobro proporcionalmente. Escolher um hostel com nota acima de 8.5 reduz o custo drasticamente e facilita conhecer outros viajantes."
        ]
      }
    ],
    essentialTips: [
      {
        title: "Ordene as Avaliações pelas 'Mais Recentes'",
        description: "Um hotel que era excelente em 2023 pode estar em reforma ou com ar-condicionado quebrado hoje. Sempre leia os últimos 10 comentários escritos por brasileiros nos últimos 60 dias."
      },
      {
        title: "Calcule o Custo de Transporte até o Centro",
        description: "Hospedar-se a 12 km do centro para economizar R$ 50 na diária e gastar R$ 90 por dia de Uber ida e volta dá prejuízo financeiro e rouba 2 horas de passeio por dia."
      }
    ],
    content: [
      `<h3 id="comparativo-direto-hospedagem" class="text-xl font-bold text-stone-900 mt-4 mb-3">1. Tabela Comparativa: Hotel vs. Hostel vs. Apartamento (Outubro/2026)</h3>
      <p>Compare lado a lado os custos reais e os benefícios embutidos em cada tipo de hospedagem (dados médios verificados em <strong>Outubro de 2026</strong>):</p>
      <div class="overflow-x-auto my-4">
        <table class="w-full text-left border-collapse border border-stone-200 rounded-xl overflow-hidden text-xs sm:text-sm">
          <thead>
            <tr class="bg-stone-900 text-white">
              <th class="p-3">Critério</th>
              <th class="p-3">Hotel / Pousada (3★)</th>
              <th class="p-3">Hostel / Albergue</th>
              <th class="p-3">Apartamento de Temporada</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-stone-200 bg-white">
            <tr>
              <td class="p-3 font-bold">Diária Média Brasil (Out/2026)</td>
              <td class="p-3">R$ 240 a R$ 420 (Casal)</td>
              <td class="p-3">R$ 75 a R$ 130 (Cama) / R$ 210 (Privativo)</td>
              <td class="p-3">R$ 220 a R$ 480 (Até 4 pessoas)</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Taxa de Limpeza Extra</td>
              <td class="p-3">R$ 0 (Limpeza diária inclusa)</td>
              <td class="p-3">R$ 0 (Limpeza inclusa)</td>
              <td class="p-3">R$ 140 a R$ 280 por estadia</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Café da Manhã</td>
              <td class="p-3">Geralmente incluso no Brasil (Economia de R$ 70/casal)</td>
              <td class="p-3">Opcional ou cozinha coletiva</td>
              <td class="p-3">Não incluso (Você compra no mercado)</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Guarda-Malas (Antes/Depois Check-in)</td>
              <td class="p-3">Gratuito na recepção 24h</td>
              <td class="p-3">Gratuito ou locker barato</td>
              <td class="p-3">Raramente disponível (Exige locker externo pago)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-xs text-stone-500 italic">*Valores médios consultados em Outubro/2026. Tarifas variam por destino, bairro e sazonalidade.</p>`,

      `<h3 id="armadilha-taxa-limpeza" class="text-xl font-bold text-stone-900 mt-6 mb-2">2. A Matemática das Taxas de Limpeza e Guarda-Malas</h3>
      <p>Sempre olhe o <strong>preço final com impostos e taxas</strong> antes de decidir. Em um apartamento anunciado por R$ 210 a diária para 2 noites (R$ 420), ao somar R$ 180 de taxa de limpeza e R$ 75 de taxa de serviço da plataforma, o total salta para <strong>R$ 675 (R$ 337/noite)</strong> — sem café da manhã, sem arrumação de quarto e tendo que pagar R$ 50 em guarda-volumes se seu voo de volta for às 20h.</p>`,

      `<h3 id="qual-escolher-perfil" class="text-xl font-bold text-stone-900 mt-6 mb-2">3. Qual Escolher para Viajante Solo, Casal, Família e Grupo</h3>
      <p>Use nosso <strong>Comparador Interativo de Hospedagem</strong> na página <a href="/ferramentas">/ferramentas</a> para simular exatamente o seu caso! Em resumo: <strong>Viajante Solo:</strong> Hostel com nota 8.5+. <strong>Casal em viagem de até 5 dias:</strong> Hotel ou Pousada com café da manhã. <strong>Família com crianças ou grupo de 4 amigos:</strong> Apartamento de 2 quartos com cozinha equipada e máquina de lavar.</p>`,

      `<h3 id="regras-ouro-reserva" class="text-xl font-bold text-stone-900 mt-6 mb-2">4. Os 6 Filtros Obrigatórios Antes de Clicar em Reservar</h3>
      <ul class="list-disc pl-5 space-y-1.5">
        <li>Nota mínima <strong>8.0</strong> (Muito Bom) com mais de 100 avaliações verificadas.</li>
        <li>Filtro <strong>Cancelamento Gratuito</strong> ativado para proteger contra mudanças de voo.</li>
        <li>Ar-condicionado (no verão/Nordeste) ou calefação central (no inverno/Sul/Andes).</li>
        <li>Confirmação se há elevador (muitos prédios históricos na Europa têm 4 lances de escada sem elevador!).</li>
      </ul>`,

      `<h3 id="checklist-hospedagem" class="text-xl font-bold text-stone-900 mt-6 mb-2">5. Checklist de Conferência de Reserva</h3>
      <ul class="list-disc pl-5 space-y-1.5">
        <li>[ ] Conferi o horário exato de check-in e se há portaria 24h para chegadas noturnas.</li>
        <li>[ ] Somei a taxa de limpeza, ISS/taxa municipal e custo de café da manhã antes de comparar.</li>
        <li>[ ] Verifiquei no Google Street View a rua da hospedagem e a distância a pé até o metrô/praia.</li>
      </ul>`
    ],
    faq: [
      {
        question: "É seguro ficar em hostel viajando sozinho(a) ou em casal?",
        answer: "Sim, desde que você escolha hostels com nota acima de 8.5 no Booking.com, recepção 24 horas e armários individuais (lockers) para cadeado. Muitos hostels também oferecem quartos privativos com banheiro exclusivo e o mesmo conforto de um hotel 3 estrelas."
      },
      {
        question: "Como evitar golpes de anúncios falsos de hospedagem?",
        answer: "Nunca faça transferências PIX diretas para pessoas físicas encontradas em redes sociais sem CNPJ verificado, e jamais aceite pagar 'fora da plataforma' quando reservar por sites oficiais como Booking.com ou Airbnb."
      }
    ],
    officialSources: [
      {
        name: "Ministério do Turismo — Cadastur (Cadastro Oficial de Meios de Hospedagem)",
        url: "https://cadastur.turismo.gov.br/",
        description: "Consulta pública de hotéis, pousadas e agências legalmente registrados no Brasil."
      }
    ]
  },
  {
    id: "33",
    slug: "como-montar-roteiro-de-cinco-dias-passo-a-passo",
    title: "Como Montar um Roteiro de 5 Dias Perfeito (Método de Agrupamento Geográfico Sem Correria)",
    subtitle: "Aprenda a dividir seus dias por bairros e regiões, calcular o tempo real de deslocamento, encaixar dias de chuva e aproveitar cada destino sem voltar exausto.",
    destination: "Metodologia de Roteiros de 5 Dias",
    stateCountry: "Planejamento de Itinerário",
    region: "Sudeste",
    category: "Urbano & Cultural",
    isPracticalGuide: true,
    hubSlug: "ferramentas",
    affiliatePartnerId: "getyourguide",
    coverImage: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=1600&q=80",
    author: {
      name: "Equipe Editorial Malas Prontas",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      bio: "Especialistas em engenharia de roteiros dia a dia e otimização de deslocamentos."
    },
    date: "12 de Outubro de 2026",
    readTime: "9 min de leitura",
    budgetLevel: "$",
    budgetDescription: "Economia de até 40% em Uber/transporte agrupando atrações vizinhas no mesmo dia (Outubro/2026)",
    bestSeason: "Ideal para feriados prolongados e férias de 5 a 7 dias",
    recommendedDays: "5 dias (10 turnos de passeio)",
    featured: false,
    executiveSummary:
      "Uma viagem de 5 dias úteis tem na prática 8 a 9 turnos reais de passeio (descontando chegada e partida). O segredo para um roteiro perfeito é aplicar a Regra 1-1-1 por dia: apenas 1 atração âncora pela manhã, 1 almoço estratégico no mesmo bairro e 1 atração ou experiência de pôr do sol à tarde, agrupando tudo no Google My Maps por proximidade geográfica.",
    toc: [
      { id: "anatomia-5-dias", title: "1. A Anatomia Real de uma Viagem de 5 Dias (Regra dos Turnos)" },
      { id: "modelo-universal-5-dias", title: "2. Tabela: Estrutura Universal de Roteiro de 5 Dias" },
      { id: "agrupamento-geografico", title: "3. Como Agrupar Atrações por Bairro no Mapa" },
      { id: "erros-que-destroem-roteiro", title: "4. Os 5 Erros Clássicos que Transformam Férias em Maratona" },
      { id: "checklist-roteiro", title: "5. Checklist de Validação do Seu Roteiro" }
    ],
    highlights: [
      "Por que o Dia 1 e o Dia 5 nunca devem ter passeios de dia inteiro longe do aeroporto",
      "Técnica dos Pinos Coloridos no Google Maps para eliminar zigue-zague na cidade",
      "Como verificar os dias de fechamento de museus (segundas ou terças) e tábua de marés antes de fechar a ordem dos dias",
      "O 'Bloco Coringa' no Dia 4 para compensar chuva ou cansaço",
      "Integração com o Planejador de Roteiros do Malas Prontas (/roteiro-personalizado)"
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80",
        caption: "Marcar os pontos no mapa antes de definir os dias evita cruzar a cidade no trânsito duas vezes no mesmo dia"
      },
      {
        url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
        caption: "Roteiro equilibrado: deixe pelo menos 2 horas livres por tarde para caminhar sem pressa e descobrir cafés locais"
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Dia 1: Chegada, Check-in, Reconhecimento a Pé e Pôr do Sol",
        activities: [
          "Deslocamento do aeroporto para a hospedagem e entrega das malas.",
          "Caminhada leve de reconhecimento pelo centro histórico ou orla principal (Free Walking Tour é excelente no 1º dia).",
          "Jantar tranquilo próximo ao hotel para descansar do voo."
        ]
      },
      {
        day: 2,
        title: "Dia 2: A Grande Atração Principal (Energia em 100%)",
        activities: [
          "Aproveite que você está descansado para fazer o passeio mais importante do destino logo cedo (ex: Cristo Redentor, Baía do Sancho, Machu Picchu ou Piscinas Naturais na maré baixa).",
          "Tarde dedicada às atrações vizinhas da mesma zona geográfica."
        ]
      },
      {
        day: 3,
        title: "Dia 3: Bate-Volta ou Região Norte/Sul Completa",
        activities: [
          "Dia ideal para o passeio de dia inteiro mais distante (ex: Vale Sagrado, Isla del Campeche, Cânions ou vinícolas).",
          "Noite gastronômica ou espetáculo cultural."
        ]
      },
      {
        day: 4,
        title: "Dia 4: Cultura, Bairros Charmosos e Turno Coringa",
        activities: [
          "Manhã em museu, mercado municipal ou praia secundária.",
          "Tarde Coringa: espaço flexível para encaixar algum passeio caso tenha chovido nos dias anteriores."
        ]
      },
      {
        day: 5,
        title: "Dia 5: Despedida Leve, Compras Locais e Ida ao Aeroporto",
        activities: [
          "Café da manhã sem pressa, compra de lembrancinhas gastronômicas no mercado local e check-out até as 11h/12h.",
          "Saída para o aeroporto com folga de segurança."
        ]
      }
    ],
    essentialTips: [
      {
        title: "Sempre Confira Segundas-Feiras e Tábua de Marés",
        description: "No Brasil e na Europa, 80% dos museus e centros culturais fecham às segundas-feiras (e alguns às terças). Já no Nordeste, o passeio às piscinas naturais depende exclusivamente do horário da maré baixa (0.0 a 0.5)."
      },
      {
        title: "Use Nosso Gerador de Roteiro por Número de Dias",
        description: "Quer montar seu roteiro de 3, 5, 7 ou 10 dias em segundos? Acesse gratuitamente nossa ferramenta em /roteiro-personalizado."
      }
    ],
    content: [
      `<h3 id="anatomia-5-dias" class="text-xl font-bold text-stone-900 mt-4 mb-2">1. A Anatomia Real de uma Viagem de 5 Dias (Regra dos Turnos)</h3>
      <p>Quem coloca 6 atrações no mesmo dia acaba conhecendo apenas a janela do táxi e a fila da bilheteria. O segredo profissional dos nossos roteiros no <strong>Malas Prontas</strong> é enxergar a viagem em <strong>turnos (manhã, tarde e noite)</strong>, nunca marcando atividades distantes no dia de chegada ou no dia do voo de volta.</p>`,

      `<h3 id="modelo-universal-5-dias" class="text-xl font-bold text-stone-900 mt-6 mb-3">2. Tabela: Estrutura Universal de Roteiro de 5 Dias (Referência: Outubro/2026)</h3>
      <div class="overflow-x-auto my-4">
        <table class="w-full text-left border-collapse border border-stone-200 rounded-xl overflow-hidden text-xs sm:text-sm">
          <thead>
            <tr class="bg-stone-900 text-white">
              <th class="p-3">Dia</th>
              <th class="p-3">Manhã (08h30 - 12h30)</th>
              <th class="p-3">Tarde (14h00 - 18h00)</th>
              <th class="p-3">Noite (19h30 - 22h00)</th>
              <th class="p-3">Custo Médio de Transporte/Ingressos</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-stone-200 bg-white">
            <tr>
              <td class="p-3 font-bold">Dia 1</td>
              <td class="p-3">Voo + Deslocamento + Check-in</td>
              <td class="p-3">Walking Tour no Centro / Orla</td>
              <td class="p-3">Jantar de boas-vindas perto do hotel</td>
              <td class="p-3">R$ 60 a R$ 120 (Transfer + Gorjeta Tour)</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Dia 2</td>
              <td class="p-3">Atração nº 1 Mais Disputada (1º horário)</td>
              <td class="p-3">Bairro adjacente + Mirante Pôr do Sol</td>
              <td class="p-3">Gastronomia típica regional</td>
              <td class="p-3">R$ 120 a R$ 260 (Ingresso principal)</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Dia 3</td>
              <td class="p-3">Passeio de Dia Inteiro (Barco / Serra / Vinícola)</td>
              <td class="p-3">Continuação do tour externo</td>
              <td class="p-3">Noite livre de descanso</td>
              <td class="p-3">R$ 150 a R$ 350 (Tour completo)</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Dia 4</td>
              <td class="p-3">Museu / Mercado Municipal / Parque</td>
              <td class="p-3">Turno Coringa (Flexível p/ clima)</td>
              <td class="p-3">Show cultural ou bar panorâmico</td>
              <td class="p-3">R$ 50 a R$ 140</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Dia 5</td>
              <td class="p-3">Praia próxima / Compras locais + Check-out</td>
              <td class="p-3">Ida ao Aeroporto (3h antes)</td>
              <td class="p-3">Retorno para casa</td>
              <td class="p-3">R$ 60 a R$ 110 (Transfer volta)</td>
            </tr>
          </tbody>
        </table>
      </div>`,

      `<h3 id="agrupamento-geografico" class="text-xl font-bold text-stone-900 mt-6 mb-2">3. Como Agrupar Atrações por Bairro no Mapa</h3>
      <p>Abra o Google Maps e salve todos os lugares que você deseja conhecer com o ícone de estrela. Ao olhar o mapa de cima, você verá claramente 3 ou 4 grupos (clusters) de estrelas próximas. Cada grupo de estrelas vizinhas será exatamente um dia do seu roteiro!</p>`,

      `<h3 id="erros-que-destroem-roteiro" class="text-xl font-bold text-stone-900 mt-6 mb-2">4. Os 5 Erros Clássicos que Transformam Férias em Maratona</h3>
      <ul class="list-disc pl-5 space-y-1.5">
        <li>Trocar de hotel ou cidade a cada 1 ou 2 noites (você perde metade da viagem fazendo check-in e desfazendo mala).</li>
        <li>Não reservar com antecedência a atração principal que tem limite diário de visitantes.</li>
        <li>Ignorar o tempo real de fila, almoço e deslocamento entre um ponto e outro.</li>
      </ul>`,

      `<h3 id="checklist-roteiro" class="text-xl font-bold text-stone-900 mt-6 mb-2">5. Checklist de Validação do Seu Roteiro</h3>
      <ul class="list-disc pl-5 space-y-1.5">
        <li>[ ] Agrupei atrações do mesmo dia a menos de 20 minutos de distância entre si.</li>
        <li>[ ] Conferi os dias de funcionamento de museus, parques e feiras.</li>
        <li>[ ] Deixei 1 tarde livre como plano B para caso de chuva.</li>
      </ul>`
    ],
    faq: [
      {
        question: "Quantas cidades dá para conhecer em um roteiro de 5 dias?",
        answer: "Em 5 dias, o ideal é manter 1 única cidade-base (onde você dorme todas as noites) e fazer no máximo 1 bate-volta de dia inteiro para uma cidade ou praia vizinha a até 1h30 de distância."
      },
      {
        question: "Quantas atrações pagas devo colocar por dia?",
        answer: "Para aproveitar de verdade sem exaustão e sem estourar o orçamento, limite a 1 grande atração paga pela manhã e combine a tarde com parques, praias, centros históricos ou mirantes gratuitos."
      }
    ],
    officialSources: [
      {
        name: "Marinha do Brasil — Tábuas de Marés Oficiais (DHN)",
        url: "https://www.marinha.mil.br/chm/tabuas-de-mare",
        description: "Consulta oficial dos horários de maré baixa para planejar passeios de piscinas naturais no litoral brasileiro."
      }
    ]
  },
  {
    id: "34",
    slug: "como-economizar-na-viagem-sem-cortar-passeios",
    title: "Como Economizar na Viagem Sem Cortar os Passeios Mais Importantes (12 Estratégias Reais)",
    subtitle: "Onde cortar gordura (taxas invisíveis, câmbio caro, alimentação pega-turista e bagagem) para sobrar dinheiro para as experiências inesquecíveis.",
    destination: "Estratégias de Economia Inteligente",
    stateCountry: "Brasil & Exterior",
    region: "Nordeste",
    category: "Mochilão",
    isPracticalGuide: true,
    hubSlug: "economizar",
    affiliatePartnerId: "vai-de-promo",
    coverImage: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1600&q=80",
    author: {
      name: "Equipe Editorial Malas Prontas",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      bio: "Especialistas em planejamento financeiro de viagens e curadoria de custo-benefício."
    },
    date: "12 de Outubro de 2026",
    readTime: "10 min de leitura",
    budgetLevel: "$",
    budgetDescription: "Economia comprovada de R$ 1.100 a R$ 3.200 para um casal em 7 dias (Consultado em Outubro/2026)",
    bestSeason: "Meses de ombro (Maio, Junho, Agosto, Setembro, Outubro e Novembro)",
    recommendedDays: "Qualquer duração de viagem",
    featured: true,
    executiveSummary:
      "Economizar de forma inteligente não é passar fome nem deixar de entrar em Machu Picchu ou na Baía do Sancho: é eliminar os gastos que não agregam nenhuma memória à sua viagem (como pagar R$ 400 de bagagem despachada desnecessária, comer na primeira quadra em frente ao ponto turístico pagando o dobro, trocar dinheiro no aeroporto ou viajar na semana do Réveillon).",
    toc: [
      { id: "cortar-vs-manter", title: "1. A Regra de Ouro: Onde Cortar sem Dó vs. Onde Nunca Economizar" },
      { id: "tabela-economia-real", title: "2. Tabela de Economia Real em uma Viagem de 7 Dias para Casal (Outubro/2026)" },
      { id: "regra-3-quadras", title: "3. Alimentação: A Regra das 3 Quadras e o Turismo de Mercadinho" },
      { id: "meia-estacao", title: "4. O Poder da Meia-Estação (Shoulder Season)" },
      { id: "checklist-economia", title: "5. Checklist das 10 Ações para Reduzir 35% do Custo da Viagem" }
    ],
    highlights: [
      "Tabela comparativa mostrando como economizar mais de R$ 2.100 mantendo todos os passeios principais",
      "A Regra das 3 Quadras: como comer muito melhor pagando 45% menos longe dos 'caça-turistas'",
      "Dias de museus gratuitos e passes turísticos municipais: quando compensam e quando são cilada",
      "Por que viajar em Maio, Setembro ou Outubro entrega clima melhor e hotéis 35% mais baratos",
      "O que NUNCA cortar: seguro viagem, localização segura e a atração dos seus sonhos"
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
        caption: "Bistrôs e mercados frequentados por moradores a 3 quadras das praças turísticas cobram metade do preço"
      },
      {
        url: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80",
        caption: "Mercados municipais: frutas frescas, queijos locais, pães artesanais e lanches para levar nos passeios"
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Antes da Viagem: Economia Estrutural (Passagem, Data e Mala)",
        activities: [
          "Desloque sua viagem em 15 dias para fora das férias escolares de janeiro/julho: economia imediata de 30% a 45% em voos e hotéis.",
          "Viaje com mala de bordo de 10kg + mochila pessoal: economia de R$ 480 a R$ 880 por casal (ida e volta)."
        ]
      },
      {
        day: 2,
        title: "Durante o Dia: Transporte e Ingressos Diretos",
        activities: [
          "Compre ingressos diretamente nos sites oficiais dos parques/museus ou plataformas sem intermediários de hotel que cobram comissão extra.",
          "Use transporte público (metrô/VLT) com cartão recarregável local em vez de táxis individuais."
        ]
      },
      {
        day: 3,
        title: "Nas Refeições: Equilíbrio entre Gastronomia e Praticidade",
        activities: [
          "Reforce o café da manhã do hotel, faça a refeição principal quente no almoço executivo (12h-15h) e faça um lanche charmoso ou piquenique à noite com produtos de mercado local."
        ]
      }
    ],
    essentialTips: [
      {
        title: "Leve Garrafa Térmica e Snacks na Mochila",
        description: "Barracas dentro de parques temáticos, praias isoladas e aeroportos cobram até R$ 15 numa garrafinha de água e R$ 28 num pacote de castanhas. Passar num supermercado no 1º dia economiza mais de R$ 300 na semana."
      },
      {
        title: "Onde NUNCA Economizar",
        description: "Jamais corte o seguro viagem internacional, não escolha hospedagem em bairro perigoso apenas por ser R$ 30 mais barata e não deixe de fazer o passeio principal que motivou sua viagem."
      }
    ],
    content: [
      `<h3 id="cortar-vs-manter" class="text-xl font-bold text-stone-900 mt-4 mb-2">1. A Regra de Ouro: Onde Cortar sem Dó vs. Onde Nunca Economizar</h3>
      <p>Viajantes experientes aplicam o princípio do <strong>Valor Percebido</strong>: você corta impiedosamente tudo aquilo que é burocrático ou padronizado (taxas bancárias, excesso de bagagem, água cara em aeroporto, câmbio ruim) e direciona esse dinheiro para as experiências únicas que você vai lembrar pelo resto da vida.</p>`,

      `<h3 id="tabela-economia-real" class="text-xl font-bold text-stone-900 mt-6 mb-3">2. Tabela de Economia Real em uma Viagem de 7 Dias para Casal (Outubro/2026)</h3>
      <div class="overflow-x-auto my-4">
        <table class="w-full text-left border-collapse border border-stone-200 rounded-xl overflow-hidden text-xs sm:text-sm">
          <thead>
            <tr class="bg-stone-900 text-white">
              <th class="p-3">Item do Orçamento</th>
              <th class="p-3">Turista Desavisado</th>
              <th class="p-3">Viajante Malas Prontas</th>
              <th class="p-3">Economia Líquida (Casal)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-stone-200 bg-white">
            <tr>
              <td class="p-3 font-bold">Bagagem (Ida e Volta)</td>
              <td class="p-3">2 malas de 23kg compradas no balcão (R$ 800)</td>
              <td class="p-3">2 malas de mão 10kg + 2 mochilas (R$ 0)</td>
              <td class="p-3 font-bold text-emerald-700">+ R$ 800</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Deslocamento Aeroporto-Centro</td>
              <td class="p-3">Táxi de balcão sem tabela (R$ 360 ida/volta)</td>
              <td class="p-3">Metrô/Ônibus executivo ou App (R$ 110)</td>
              <td class="p-3 font-bold text-emerald-700">+ R$ 250</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">7 Almoços em Viagem</td>
              <td class="p-3">Restaurantes na praça turística (R$ 1.680)</td>
              <td class="p-3">Menu executivo a 3 quadras do ponto (R$ 910)</td>
              <td class="p-3 font-bold text-emerald-700">+ R$ 770</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Água, Cafés e Lanches de Trilha</td>
              <td class="p-3">Comprados em quiosques turísticos (R$ 490)</td>
              <td class="p-3">Garrafa térmica + Supermercado local (R$ 120)</td>
              <td class="p-3 font-bold text-emerald-700">+ R$ 370</td>
            </tr>
            <tr class="bg-emerald-50">
              <td class="p-3 font-extrabold">TOTAL ECONOMIZADO</td>
              <td class="p-3">R$ 3.330</td>
              <td class="p-3">R$ 1.140</td>
              <td class="p-3 font-extrabold text-emerald-800">R$ 2.190 Livres p/ Passeios!</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-xs text-stone-500 italic">*Simulação baseada em preços médios consultados em Outubro/2026. Os valores exatos variam conforme destino.</p>`,

      `<h3 id="regra-3-quadras" class="text-xl font-bold text-stone-900 mt-6 mb-2">3. Alimentação: A Regra das 3 Quadras e o Turismo de Mercadinho</h3>
      <p>Qualquer restaurante com garçom na porta segurando cardápio plastificado em 5 idiomas em frente a um monumento famoso cobra 50% mais caro por comida congelada. Caminhe apenas <strong>3 quadras para dentro do bairro residencial</strong> e procure onde os trabalhadores locais almoçam.</p>`,

      `<h3 id="meia-estacao" class="text-xl font-bold text-stone-900 mt-6 mb-2">4. O Poder da Meia-Estação (Shoulder Season)</h3>
      <p>Viajar em <strong>abril, maio, setembro, outubro ou novembro</strong> é o maior segredo do turismo inteligente: os pontos turísticos estão sem filas, o clima é agradável e as diárias de hotéis caem de 25% a 45% em relação a janeiro e julho.</p>`,

      `<h3 id="checklist-economia" class="text-xl font-bold text-stone-900 mt-6 mb-2">5. Checklist das 10 Ações para Reduzir 35% do Custo da Viagem</h3>
      <ul class="list-disc pl-5 space-y-1.5">
        <li>[ ] Configurei alerta de passagens para terças, quartas ou sábados.</li>
        <li>[ ] Passei no supermercado local no Dia 1 para comprar água, frutas e snacks.</li>
        <li>[ ] Pesquisei os dias de entrada gratuita nos museus da cidade.</li>
        <li>[ ] Usei conta global em vez de trocar dinheiro em casa de câmbio de aeroporto.</li>
      </ul>`
    ],
    faq: [
      {
        question: "Os passes turísticos de cidades (City Pass) realmente valem a pena?",
        answer: "Só valem a pena se você realmente pretende visitar pelo menos 4 ou 5 atrações pagas caras incluídas no passe dentro de 2 ou 3 dias. Some sempre o preço avulso apenas das atrações que você quer muito ir antes de comprar o pacote fechado."
      },
      {
        question: "Qual o dia da semana mais barato para voar?",
        answer: "Estatisticamente, embarcar às terças-feiras, quartas-feiras ou sábados à tarde costuma ter tarifas de 15% a 30% menores do que voar na sexta-feira à noite ou domingo no fim do dia."
      }
    ],
    officialSources: [
      {
        name: "Consumidor.gov.br — Secretaria Nacional do Consumidor (Senacon)",
        url: "https://www.consumidor.gov.br/",
        description: "Canal oficial para resolução de cobranças indevidas em serviços de turismo, aviação e hospedagem."
      }
    ]
  },
  {
    id: "35",
    slug: "como-evitar-taxas-inesperadas-no-aeroporto",
    title: "Como Evitar Taxas Inesperadas no Aeroporto: Bagagem no Portão, Check-in, Assentos e Direitos ANAC",
    subtitle: "Saiba como fugir das multas de excesso de bagagem no portão de embarque, cobranças de marcação de assento, câmbio abusivo e conheça seus direitos em atrasos.",
    destination: "Prevenção de Taxas de Aeroporto",
    stateCountry: "Aviação Comercial & ANAC",
    region: "Sudeste",
    category: "Mochilão",
    isPracticalGuide: true,
    hubSlug: "bagagem",
    affiliatePartnerId: "airhelp",
    coverImage: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=1600&q=80",
    author: {
      name: "Lucas Mendes",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      bio: "Analista de tarifas aéreas, resolução ANAC nº 400/2016 e direitos do passageiro."
    },
    date: "12 de Outubro de 2026",
    readTime: "10 min de leitura",
    budgetLevel: "$",
    budgetDescription: "Evite multas de R$ 180 a R$ 650 no balcão/portão de embarque (Consultado em Outubro/2026)",
    bestSeason: "Essencial para voos nacionais, internacionais e companhias low-cost",
    recommendedDays: "Leitura obrigatória 48h antes do voo",
    featured: false,
    executiveSummary:
      "As 5 taxas inesperadas mais caras nos aeroportos são: (1) Despacho de mala fora do gabarito direto no portão de embarque (até R$ 240 nacional / € 70 na Europa), (2) Taxa de emissão de cartão de embarque presencial em companhias low-cost quando você esquece o check-in online, (3) Compra desnecessária de marcação de assento básico antes da abertura do check-in gratuito, (4) Plastificação de mala no saguão e (5) Câmbio de última hora no terminal.",
    toc: [
      { id: "5-armadilhas-aeroporto", title: "1. As 5 Taxas Surpresa Mais Comuns nos Aeroportos" },
      { id: "tabela-multas-direitos", title: "2. Tabela de Cobranças Evitáveis e Direitos de Assistência ANAC (Outubro/2026)" },
      { id: "truque-assento-checkin", title: "3. Marcação de Assento e Check-in Online: Como Não Pagar" },
      { id: "direitos-atraso-cancelamento", title: "4. Seus Direitos por Tempo de Atraso (1h, 2h e 4h+)" },
      { id: "checklist-pre-aeroporto", title: "5. Checklist de 48 Horas Antes de Ir para o Aeroporto" }
    ],
    highlights: [
      "Como funciona a fiscalização da caixinha medidora no portão de embarque e como passar sem taxa",
      "Atenção máxima em companhias low-cost (Ryanair, WizzAir, Sky, JetSmart): check-in no balcão pode custar € 55!",
      "Tabela oficial da ANAC de assistência material gratuita a partir de 1h, 2h e 4h de atraso",
      "Como trocar plástico-filme caro do aeroporto por capa de mala reutilizável + cadeado TSA + Smart Tag",
      "Como exigir reacomodação ou indenização em caso de voo cancelado ou overbooking"
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=1200&q=80",
        caption: "Faça sempre o check-in pelo aplicativo da companhia aérea 24h a 48h antes do voo e salve o QR Code na carteira digital"
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "48 Horas Antes do Voo: Check-in Online e Franquia",
        activities: [
          "Abra o aplicativo da companhia aérea exatamente quando abrir a janela de check-in gratuito (geralmente 48h ou 24h antes) para garantir seu assento sem pagar taxa de seleção antecipada.",
          "Caso perceba que sua mala vai passar de 10kg, compre a bagagem despachada pelo app com pelo menos 24h de antecedência (custa até metade do valor cobrado no aeroporto)."
        ]
      },
      {
        day: 2,
        title: "Em Casa (3 Horas Antes): Pesagem e Medição Final",
        activities: [
          "Pese a mala de mão e a mochila na balança digital portátil.",
          "Encha sua garrafa térmica vazia (para passar vazia pelo raio-X e encher gratuitamente nos bebedouros da sala de embarque)."
        ]
      },
      {
        day: 3,
        title: "No Portão de Embarque: Postura e Direitos",
        activities: [
          "Respeite o limite de 1 mala de bordo + 1 item pessoal (sacolas grandes de compras entram na contagem de volumes em low-costs).",
          "Em caso de atraso superior a 2 horas, solicite imediatamente no balcão o voucher de alimentação garantido pela Resolução 400 da ANAC."
        ]
      }
    ],
    essentialTips: [
      {
        title: "Leve Sua Garrafa Vazia pelo Raio-X",
        description: "Você não pode passar com água no raio-X internacional, mas pode passar com sua garrafa térmica totalmente vazia e enchê-la de graça nos bebedouros após a inspeção de segurança, economizando R$ 18 a R$ 35 por voo."
      },
      {
        title: "Erro de Grafia no Nome da Passagem É Corrigido de Graça",
        description: "Pela Resolução nº 400 da ANAC, a correção de erro material de grafia no nome ou sobrenome do passageiro (desde que não mude a titularidade da pessoa) deve ser feita sem custo pela companhia aérea até o momento do check-in."
      }
    ],
    content: [
      `<h3 id="5-armadilhas-aeroporto" class="text-xl font-bold text-stone-900 mt-4 mb-2">1. As 5 Taxas Surpresa Mais Comuns nos Aeroportos</h3>
      <p>As companhias aéreas modernas obtêm até 30% de sua receita das chamadas <em>ancillary revenues</em> (receitas auxiliares cobradas de passageiros desatentos). Quando você deixa para resolver bagagem ou check-in no aeroporto, paga a tarifa máxima de balcão.</p>`,

      `<h3 id="tabela-multas-direitos" class="text-xl font-bold text-stone-900 mt-6 mb-3">2. Tabela de Cobranças Evitáveis e Direitos ANAC (Outubro/2026)</h3>
      <div class="overflow-x-auto my-4">
        <table class="w-full text-left border-collapse border border-stone-200 rounded-xl overflow-hidden text-xs sm:text-sm">
          <thead>
            <tr class="bg-stone-900 text-white">
              <th class="p-3">Situação no Aeroporto</th>
              <th class="p-3">Custo se Deixar p/ Última Hora</th>
              <th class="p-3">Solução Gratuita / Econômica</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-stone-200 bg-white">
            <tr>
              <td class="p-3 font-bold">Mala de mão acima de 10kg no portão</td>
              <td class="p-3">R$ 180 a R$ 240 (Nacional) / € 65 (Europa)</td>
              <td class="p-3">Pesar em casa com balança portátil (R$ 30)</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Check-in presencial em Low-Cost (Ryanair/Sky)</td>
              <td class="p-3">US$ 25 a € 55 por passageiro</td>
              <td class="p-3">Fazer check-in no app 24h antes (R$ 0)</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Plastificação descartável de mala (Ida/Volta)</td>
              <td class="p-3">R$ 160 a R$ 220 (Descartável)</td>
              <td class="p-3">Capa de mala em elastano lavável + Cadeado TSA</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Alimentação em atraso de voo &gt; 2 horas</td>
              <td class="p-3">Gastar R$ 90 do próprio bolso</td>
              <td class="p-3">Exigir Voucher Gratuito da Cia Aérea (Lei ANAC)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-xs text-stone-500 italic">*Dados consultados em Outubro/2026 com base nas tabelas tarifárias das companhias e Resolução ANAC nº 400/2016.</p>`,

      `<h3 id="truque-assento-checkin" class="text-xl font-bold text-stone-900 mt-6 mb-2">3. Marcação de Assento e Check-in Online: Como Não Pagar</h3>
      <p>Ao comprar a passagem, as companhias exibem um mapa de assentos cobrando de R$ 45 a R$ 150 por poltrona comum. Você <strong>não é obrigado a comprar assento para emitir o bilhete</strong>: basta avançar sem selecionar poltrona e fazer o check-in pontualmente na abertura (48h antes), quando o sistema atribui assentos gratuitamente.</p>`,

      `<h3 id="direitos-atraso-cancelamento" class="text-xl font-bold text-stone-900 mt-6 mb-2">4. Seus Direitos por Tempo de Atraso (1h, 2h e 4h+)</h3>
      <p>No Brasil, pela <strong>Resolução nº 400 da ANAC</strong>, a companhia aérea tem obrigação legal de fornecer assistência material gratuita conforme o tempo de espera: <strong>A partir de 1 hora:</strong> facilidade de comunicação (internet/telefone). <strong>A partir de 2 horas:</strong> alimentação (voucher para lanche/refeição). <strong>A partir de 4 horas:</strong> reacomodação em outro voo (inclusive de outra companhia se necessário), reembolso integral ou hospedagem + transporte de ida e volta (caso precise pernoitar e não esteja na sua cidade de domicílio).</p>`,

      `<h3 id="checklist-pre-aeroporto" class="text-xl font-bold text-stone-900 mt-6 mb-2">5. Checklist de 48 Horas Antes de Ir para o Aeroporto</h3>
      <ul class="list-disc pl-5 space-y-1.5">
        <li>[ ] Check-in online concluído e cartão de embarque salvo offline no celular.</li>
        <li>[ ] Mala pesada em casa respeitando o limite de 10 kg (bordo) ou 23 kg (despachada).</li>
        <li>[ ] Garrafa de água vazia e lanches secos (castanhas, barrinhas, biscoitos) na mochila.</li>
      </ul>`
    ],
    faq: [
      {
        question: "Posso me recusar a despachar minha mala de 10 kg no portão quando o voo está lotado?",
        answer: "Se os compartimentos superiores da cabine atingirem a capacidade máxima, a companhia pode solicitar o despacho gratuito no portão por segurança operacional. Porém, você tem o direito e o dever de retirar antes todos os itens frágeis, medicamentos, documentos, dinheiro, notebook e baterias de lítio (powerbank)."
      },
      {
        question: "Posso desistir de uma passagem aérea em até 24 horas após a compra sem multa?",
        answer: "Sim! Pela regra da ANAC (voos que partem ou chegam ao Brasil), se você comprou a passagem com pelo menos 7 dias de antecedência da data do voo, tem direito de desistir em até 24 horas após o recebimento do comprovante com reembolso de 100% sem multa."
      }
    ],
    officialSources: [
      {
        name: "ANAC — Resolução nº 400/2016 (Direitos e Deveres dos Passageiros)",
        url: "https://www.gov.br/anac/pt-br/assuntos/passageiros",
        description: "Texto oficial sobre atrasos, cancelamentos, desistência em 24h, correção de nome e bagagem."
      }
    ]
  },
  {
    id: "36",
    slug: "o-que-conferir-antes-de-alugar-um-carro-viagem",
    title: "O Que Conferir Antes de Alugar um Carro na Viagem: Caução, Seguros CDW/LDW, Vistoria e CNH",
    subtitle: "Evite cobranças abusivas no balcão da locadora: entenda a diferença entre franquia e proteção a terceiros, como filmar a vistoria na retirada e quando a PID é exigida.",
    destination: "Guia de Aluguel de Carros",
    stateCountry: "Brasil & Exterior",
    region: "Sul",
    category: "Ecoturismo",
    isPracticalGuide: true,
    hubSlug: "economizar",
    affiliatePartnerId: "economy-bookings",
    coverImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1600&q=80",
    author: {
      name: "Lucas Mendes",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      bio: "Especialista em logística de transporte, aluguel de carros e direitos do consumidor viajante."
    },
    date: "12 de Outubro de 2026",
    readTime: "11 min de leitura",
    budgetLevel: "$$",
    budgetDescription: "Diárias a partir de R$ 89/dia no Brasil e US$ 28/dia no exterior (Consultado em Outubro/2026)",
    bestSeason: "Reservar online com 20 a 45 dias de antecedência",
    recommendedDays: "Roteiros de estrada (Road Trips) de 3 a 15 dias",
    featured: false,
    executiveSummary:
      "Para alugar um carro sem surpresas financeiras na devolução: (1) Exija cartão de crédito físico em nome do condutor principal com limite livre para o bloqueio caução, (2) Contrate sempre proteção para o veículo (CDW/LDW) + proteção contra terceiros (ALI/SLI/TPL), (3) Escolha a política de combustível 'Cheio para Cheio' (Full to Full), e (4) Grave um vídeo em alta resolução de 2 minutos mostrando toda a lataria, rodas, para-brisa e nível do painel antes de sair do estacionamento da locadora.",
    toc: [
      { id: "sopa-letrinhas-seguro", title: "1. Decifrando os Seguros: CDW, LDW, ALI/TPL e Franquia Reduzida" },
      { id: "tabela-custos-locacao", title: "2. Tabela de Custos, Caução e Exigências por Região (Outubro/2026)" },
      { id: "vistoria-video-retirada", title: "3. O Ritual dos 2 Minutos na Retirada (Blindagem Contra Cobranças)" },
      { id: "pedagios-combustivel-pid", title: "4. Combustível, Pedágio Free Flow e Permissão Internacional (PID)" },
      { id: "checklist-locadora", title: "5. Checklist no Balcão da Locadora" }
    ],
    highlights: [
      "Entenda a diferença entre Seguro do Carro (CDW/LDW) e Seguro contra Terceiros (ALI/TPL) — e por que o de terceiros é o mais importante",
      "Quanto limite disponível no cartão de crédito você precisa ter para o bloqueio de caução (pré-autorização)",
      "Por que nunca aceitar a opção de 'Tanque Pré-Pago' oferecida pelo atendente no balcão",
      "Como funciona o seguro de carro alugado dos cartões Visa Infinite e Mastercard Black (e o risco da recusa do CDW)",
      "O que filmar na retirada e na devolução do veículo"
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
        caption: "Antes de dar a partida, faça um vídeo completo ao redor do veículo incluindo para-choques, calotas, teto e painel aceso"
      },
      {
        url: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80",
        caption: "Estradas cênicas: alugar um carro para 2 a 4 pessoas costuma sair mais barato do que pagar transfers individuais por pessoa"
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "Na Reserva Online (30 Dias Antes): Escolha da Tarifa Transparente",
        activities: [
          "Compare em agregadores como a EconomyBookings filtrando por 'Quilometragem Ilimitada', 'Combustível Cheio para Cheio' e 'Cancelamento Grátis'.",
          "Coloque o nome da reserva exatamente igual ao titular do cartão de crédito físico que apresentará a CNH no balcão."
        ]
      },
      {
        day: 2,
        title: "Na Retirada do Veículo: Contrato e Vídeo de Vistoria",
        activities: [
          "Recuse upgrades pagos de categoria ou GPS alugado no balcão (use seu celular com CarPlay/Android Auto e suporte veicular).",
          "No pátio, grave um vídeo mostrando qualquer pequeno risco existente, o estepe/macaco no porta-malas e a foto do marcador de combustível 8/8 (cheio)."
        ]
      },
      {
        day: 3,
        title: "Na Devolução: Posto Próximo e Recibo de Quitação",
        activities: [
          "Abasteça em um posto a menos de 5 km do aeroporto e guarde o cupom fiscal do abastecimento.",
          "Exija o comprovante de vistoria de devolução assinado ('Sem avarias / Tanque cheio') antes de ir para o embarque."
        ]
      }
    ],
    essentialTips: [
      {
        title: "Cartão Virtual do Celular Não É Aceito para o Caução",
        description: "95% das locadoras no Brasil e no mundo exigem o cartão de crédito FÍSICO com chip, emitido em nome do motorista principal, para realizar o bloqueio temporário (pré-autorização) da caução."
      },
      {
        title: "Atenção aos Pedágios Sem Cancela (Free Flow / SunPass / Via Verde)",
        description: "Em rodovias de São Paulo/Rio (Free Flow), na Flórida (SunPass) e em Portugal (Via Verde), não há cabine física de dinheiro. Pergunte sempre na retirada como a tag eletrônica do carro está configurada para não levar multa administrativa."
      }
    ],
    content: [
      `<h3 id="sopa-letrinhas-seguro" class="text-xl font-bold text-stone-900 mt-4 mb-2">1. Decifrando os Seguros: CDW, LDW, ALI/TPL e Franquia Reduzida</h3>
      <p>No balcão da locadora, os atendentes ganham comissão sobre seguros extras e usam siglas técnicas que confundem o viajante. Aprenda de uma vez por todas o que cada sigla significa:</p>
      <ul class="list-disc pl-5 space-y-1.5">
        <li><strong>CDW / LDW (Collision / Loss Damage Waiver):</strong> Proteção para o próprio carro alugado em caso de colisão, roubo ou furto, com limite de coparticipação (franquia).</li>
        <li><strong>ALI / SLI / TPL (Third Party Liability):</strong> Proteção contra danos materiais e corporais causados a <strong>terceiros</strong> (outros carros ou pedestres). Jamais dirija sem cobertura para terceiros!</li>
        <li><strong>Taxa Administrativa de Sinistro:</strong> No Brasil, locadoras costumam cobrar de 12% a 15% de taxa operacional sobre o orçamento. Leia o contrato antes de assinar.</li>
      </ul>`,

      `<h3 id="tabela-custos-locacao" class="text-xl font-bold text-stone-900 mt-6 mb-3">2. Tabela de Custos, Caução e Exigências por Região (Outubro/2026)</h3>
      <div class="overflow-x-auto my-4">
        <table class="w-full text-left border-collapse border border-stone-200 rounded-xl overflow-hidden text-xs sm:text-sm">
          <thead>
            <tr class="bg-stone-900 text-white">
              <th class="p-3">Região</th>
              <th class="p-3">Diária Média (Compacto c/ Proteção Básica)</th>
              <th class="p-3">Bloqueio Caução Médio no Cartão</th>
              <th class="p-3">Habilitação Exigida</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-stone-200 bg-white">
            <tr>
              <td class="p-3 font-bold">Brasil (Nordeste, Sul, Sudeste)</td>
              <td class="p-3">R$ 89 a R$ 165 / dia</td>
              <td class="p-3">R$ 700 a R$ 2.500</td>
              <td class="p-3">CNH Definitiva válida (2+ anos na maioria)</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">América do Sul (Chile, Argentina, Uruguai)</td>
              <td class="p-3">US$ 32 a US$ 58 / dia</td>
              <td class="p-3">US$ 400 a US$ 1.200</td>
              <td class="p-3">CNH Física + RG ou Passaporte</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Estados Unidos (Flórida, Califórnia)</td>
              <td class="p-3">US$ 35 a US$ 68 / dia</td>
              <td class="p-3">US$ 200 a US$ 500</td>
              <td class="p-3">CNH Física + Passaporte válido</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Europa (Portugal, Espanha, Itália)</td>
              <td class="p-3">€ 28 a € 65 / dia</td>
              <td class="p-3">€ 600 a € 1.500 (ou € 150 c/ seguro total)</td>
              <td class="p-3">CNH Física + Passaporte (PID recomendada na Itália/Grécia)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-xs text-stone-500 italic">*Valores consultados em Outubro/2026 para reservas antecipadas online. Tarifas e cauções variam por locadora e categoria do veículo.</p>`,

      `<h3 id="vistoria-video-retirada" class="text-xl font-bold text-stone-900 mt-6 mb-2">3. O Ritual dos 2 Minutos na Retirada (Blindagem Contra Cobranças)</h3>
      <p>Ao chegar no carro, ligue a câmera do celular em vídeo (4K) e dê uma volta completa filmando devagar os para-choques, rodas/calotas, retrovisores, teto, para-brisa (olhe se há trincas de pedrinha) e o painel interno ligado mostrando a quilometragem e o tanque cheio. Se já houver qualquer arranhão não anotado na folha de vistoria, chame o funcionário do pátio antes de sair da cancela.</p>`,

      `<h3 id="pedagios-combustivel-pid" class="text-xl font-bold text-stone-900 mt-6 mb-2">4. Combustível, Pedágio Free Flow e Permissão Internacional (PID)</h3>
      <p>Recuse a compra de combustível antecipado da locadora (eles cobram pelo tanque inteiro mesmo que você devolva meio tanque cheio). Abasteça você mesmo no último posto antes de entregar o carro. Em viagens para a Itália, Grécia, Áustria ou Emirados Árabes, emita a <strong>PID (Permissão Internacional para Dirigir)</strong> no Detran do seu estado antes de viajar.</p>`,

      `<h3 id="checklist-locadora" class="text-xl font-bold text-stone-900 mt-6 mb-2">5. Checklist no Balcão da Locadora</h3>
      <ul class="list-disc pl-5 space-y-1.5">
        <li>[ ] Levei CNH física original (dentro da validade) e cartão de crédito físico nominal com limite livre para o caução.</li>
        <li>[ ] Conferi se a proteção básica do carro (CDW) e de terceiros (ALI/TPL) estão ativas no contrato.</li>
        <li>[ ] Gravei o vídeo de vistoria na retirada e guardei a nota do último abastecimento na devolução.</li>
      </ul>`
    ],
    faq: [
      {
        question: "Posso usar a CNH Digital no celular para alugar carro no exterior?",
        answer: "Não! No exterior, as locadoras e autoridades policiais exigem obrigatoriamente a CNH física impressa original acompanhada do passaporte (e PID quando aplicável). Mesmo no Brasil, leve sempre o documento físico por segurança."
      },
      {
        question: "Em quanto tempo o valor do caução (pré-autorização) é estornado no cartão de crédito?",
        answer: "Após a devolução do veículo sem avarias e com tanque cheio, a locadora solicita o desbloqueio imediato da pré-autorização, e o banco emissor do seu cartão restabelece o limite entre 2 e 10 dias úteis."
      }
    ],
    officialSources: [
      {
        name: "SENATRAN — Secretaria Nacional de Trânsito (Validade da CNH no Exterior e PID)",
        url: "https://www.gov.br/transportes/pt-br/assuntos/transito/conteudo-senatran/habilitacao-no-exterior",
        description: "Lista oficial de países que aceitam a CNH brasileira por reciprocidade e regras da Permissão Internacional para Dirigir."
      }
    ]
  },
  {
    id: "37",
    slug: "como-organizar-viagem-com-criancas-guia-pratico",
    title: "Como Organizar uma Viagem com Crianças e Bebês: Documentação Polícia Federal, Voo e Rotina",
    subtitle: "Autorização eletrônica de viagem (AEV), regras de carrinho de bebê e líquidos no avião, farmacinha pediátrica, escolha de hotel e ritmo de passeios para férias leves em família.",
    destination: "Planejamento de Viagem em Família",
    stateCountry: "Brasil & Exterior",
    region: "Nordeste",
    category: "Praia",
    isPracticalGuide: true,
    hubSlug: "documentos",
    affiliatePartnerId: "booking-stay22",
    coverImage: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=80",
    author: {
      name: "Camila Rocha",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      bio: "Editora de Hospedagem, Seguro Viagem & Viagens em Família no Malas Prontas."
    },
    date: "12 de Outubro de 2026",
    readTime: "12 min de leitura",
    budgetLevel: "$$",
    budgetDescription: "Descontos de 90% a 100% em voos para bebês de colo (<2 anos) e gratuidade hoteleira infantil (Outubro/2026)",
    bestSeason: "Meses de clima ameno ou resorts com estrutura de recreação monitorada",
    recommendedDays: "Roteiros com base fixa de 5 a 8 dias",
    featured: true,
    executiveSummary:
      "O segredo para viajar com crianças sem estresse começa na documentação obrigatória (Certidão/RG em voos nacionais para menores de 16 anos e Passaporte + Autorização de Viagem da Polícia Federal/e-Notariado quando viajar com apenas um dos pais para o exterior), no direito gratuito de despachar o carrinho de bebê na porta do avião e em planejar apenas 1 grande passeio por dia intercalado com piscina ou descanso após o almoço.",
    toc: [
      { id: "documentos-menores-lei", title: "1. Documentação e Autorização de Viagem para Menores (CNJ e Polícia Federal)" },
      { id: "tabela-regras-infantis-voo", title: "2. Tabela de Tarifas, Carrinho de Bebê e Franquia por Idade (Outubro/2026)" },
      { id: "decolagem-ouvido-alimentacao", title: "3. Como Proteger o Ouvido na Decolagem/Pouso e Levar Papinhas no Raio-X" },
      { id: "ritmo-roteiro-familia", title: "4. Como Adaptar o Roteiro e Escolher a Hospedagem Ideal com Crianças" },
      { id: "checklist-familia-completo", title: "5. Checklist Prático de Viagem com Crianças" }
    ],
    highlights: [
      "Regras atualizadas do CNJ e Polícia Federal: quando é necessária Autorização de Viagem em voos nacionais (<16 anos) e internacionais (<18 anos)",
      "Como emitir a Autorização Eletrônica de Viagem (AEV) 100% digital pelo sistema e-Notariado",
      "Direito de embarcar com o carrinho de bebê dobrável até a porta da aeronave sem custo adicional",
      "Exceção oficial para leite materno, fórmula infantil, sucos e papinhas no raio-X internacional",
      "Por que apartamentos com cozinha/copa do bebê ou hotéis com recreação salvam as férias dos pais"
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1200&q=80",
        caption: "Ritmo desacelerado: intercalar manhãs de passeio com tardes livres de brincadeira evita a exaustão infantil"
      },
      {
        url: "https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=1200&q=80",
        caption: "Kit de atividades analógicas (adesivos, livros de colorir e massinha) mantém as crianças entretidas durante o voo"
      }
    ],
    itinerary: [
      {
        day: 1,
        title: "30 Dias Antes: Documentos, Assentos Juntos e Farmacinha",
        activities: [
          "Confira a validade do RG/Passaporte da criança (passaportes infantis têm validade reduzida de 1 a 4 anos conforme a idade!).",
          "Se a criança for viajar para o exterior acompanhada de apenas um dos genitores, emita a Autorização de Viagem com firma reconhecida ou via e-Notariado (a menos que essa autorização já esteja impressa no passaporte novo).",
          "Peça ao pediatra a receita atualizada da farmacinha de bordo (antitérmico, antialérgico, soro fisiológico, termômetro e curativos)."
        ]
      },
      {
        day: 2,
        title: "No Dia do Voo: Prioridade Legal, Carrinho e Pressão no Ouvido",
        activities: [
          "Use as filas de atendimento prioritário garantidas por lei brasileira para famílias com crianças de colo e gestantes.",
          "Etiquete o carrinho de bebê no check-in como 'Delivery at Aircraft' para usá-lo até a porta do avião.",
          "Durante a subida na decolagem e nos 20 minutos finais de descida para o pouso, ofereça peito, mamadeira, água em copo com canudo ou chupeta para aliviar a pressão nos ouvidos."
        ]
      },
      {
        day: 3,
        title: "No Destino: A Regra de Ouro da Manhã Ativa + Tarde Livre",
        activities: [
          "Concentre o passeio cultural ou trilha/praia principal entre 8h30 e 12h30, quando a criança está bem-humorada e descansada.",
          "Após o almoço, respeite a janela da soneca ou tarde na piscina do hotel/apartamento."
        ]
      }
    ],
    essentialTips: [
      {
        title: "Passaporte não Substitui Certidão/RG se não Contiver a Filiação",
        description: "O modelo atual de passaporte brasileiro traz o nome dos pais na página de dados, mas modelos antigos sem filiação exigem que você leve também o RG ou Certidão de Nascimento original para comprovar o parentesco na Polícia Federal."
      },
      {
        title: "Leve o Dobro de Mudas de Roupa na Mochila de Bordo",
        description: "Em voos com bebês e crianças pequenas, leve sempre 3 mudas completas da criança + 1 camiseta limpa para o adulto na mochila de mão para o caso de refluxo, suco derramado ou vazamento de fralda."
      }
    ],
    content: [
      `<h3 id="documentos-menores-lei" class="text-xl font-bold text-stone-900 mt-4 mb-2">1. Documentação e Autorização de Viagem para Menores (CNJ e Polícia Federal)</h3>
      <p>A falta de documentação ou autorização de um dos pais é o motivo número 1 de famílias barradas no embarque no Brasil. Confira as regras oficiais do <strong>Conselho Nacional de Justiça (CNJ)</strong> e da <strong>Polícia Federal</strong>:</p>
      <ul class="list-disc pl-5 space-y-1.5">
        <li><strong>Voos Nacionais (Dentro do Brasil):</strong> Menores de <strong>16 anos</strong> podem viajar acompanhados de qualquer um dos pais, avós, bisavós ou tios/irmãos maiores de 18 anos (comprovando o parentesco com Certidão de Nascimento ou RG original). Para viajar desacompanhado ou com terceiros sem parentesco, exige autorização dos pais.</li>
        <li><strong>Voos Internacionais (Exterior):</strong> Menores de <strong>18 anos</strong> viajando com <strong>ambos os pais</strong> precisam apenas de Passaporte válido (ou RG em ótimo estado no Mercosul). Se viajar com <strong>apenas um dos pais</strong>, é obrigatória a <strong>Autorização de Viagem Internacional</strong> assinada pelo outro genitor em 2 vias com reconhecimento de firma por autenticidade em cartório (ou Autorização Eletrônica AEV pelo e-Notariado), salvo se a autorização ampla já constar impressa no próprio passaporte da criança.</li>
      </ul>`,

      `<h3 id="tabela-regras-infantis-voo" class="text-xl font-bold text-stone-900 mt-6 mb-3">2. Tabela de Tarifas, Carrinho de Bebê e Franquia por Idade (Outubro/2026)</h3>
      <div class="overflow-x-auto my-4">
        <table class="w-full text-left border-collapse border border-stone-200 rounded-xl overflow-hidden text-xs sm:text-sm">
          <thead>
            <tr class="bg-stone-900 text-white">
              <th class="p-3">Faixa Etária</th>
              <th class="p-3">Tarifa da Passagem Aérea</th>
              <th class="p-3">Direito a Carrinho / Bebê Conforto</th>
              <th class="p-3">Franquia de Bagagem de Mão</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-stone-200 bg-white">
            <tr>
              <td class="p-3 font-bold">Bebê de Colo (0 a 23 meses incompletos)</td>
              <td class="p-3">Grátis (Voos Nacionais) ou 10% da tarifa adulto + taxas (Internacional)</td>
              <td class="p-3">1 carrinho dobrável OU 1 bebê conforto grátis até a porta do avião</td>
              <td class="p-3">Bolsa de maternidade/item pessoal (algumas cias dão +1 volume de 10kg)</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Criança (2 a 11 anos)</td>
              <td class="p-3">Assento próprio obrigatório (75% a 100% da tarifa)</td>
              <td class="p-3">1 carrinho ou cadeirinha despachado gratuitamente na maioria das cias</td>
              <td class="p-3">Mesma franquia de adulto: 1 mala de 10kg + 1 mochila pessoal</td>
            </tr>
            <tr>
              <td class="p-3 font-bold">Adolescente (12 a 17 anos)</td>
              <td class="p-3">Tarifa normal de adulto</td>
              <td class="p-3">Não aplicável</td>
              <td class="p-3">1 mala de 10kg + 1 mochila pessoal</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-xs text-stone-500 italic">*Regras consultadas em Outubro/2026 nas principais companhias aéreas que operam no Brasil (Gol, Latam e Azul).</p>`,

      `<h3 id="decolagem-ouvido-alimentacao" class="text-xl font-bold text-stone-900 mt-6 mb-2">3. Como Proteger o Ouvido na Decolagem/Pouso e Levar Papinhas no Raio-X</h3>
      <p>A alimentação infantil (leite materno, fórmula em pó, água esterilizada para mamadeira e potinhos de papinha) tem <strong>isenção oficial da regra de 100 ml</strong> em voos internacionais na quantidade necessária para o período da viagem: basta declarar ao agente de segurança no raio-X. Para evitar dor de ouvido na pressurização, estimule a sucção ou mastigação durante a subida e principalmente no início da descida da aeronave.</p>`,

      `<h3 id="ritmo-roteiro-familia" class="text-xl font-bold text-stone-900 mt-6 mb-2">4. Como Adaptar o Roteiro e Escolher a Hospedagem Ideal com Crianças</h3>
      <p>Com crianças pequenas, evite roteiros "pinga-pinga" que mudam de hotel a cada dois dias. Escolha 1 base estratégica com <strong>frigobar, micro-ondas ou cozinha completa</strong> (apartamento de temporada ou hotel familiar com copa do bebê 24h) perto de uma farmácia, supermercado e praça arborizada.</p>`,

      `<h3 id="checklist-familia-completo" class="text-xl font-bold text-stone-900 mt-6 mb-2">5. Checklist Prático de Viagem com Crianças</h3>
      <ul class="list-disc pl-5 space-y-1.5">
        <li>[ ] RG/Certidão original ou Passaporte válido + Autorização de Viagem (se aplicável).</li>
        <li>[ ] Farmacinha pediátrica na mochila de mão com receita médica impressa.</li>
        <li>[ ] Pulseirinha de identificação no pulso da criança com nome dos pais e telefone com DDI (+55).</li>
        <li>[ ] Lanches favoritos da criança, garrafinha antivazamento e brinquedo/livro surpresa para o avião.</li>
      </ul>`
    ],
    faq: [
      {
        question: "Se a criança completar 2 anos durante a viagem, ela pode voltar no colo?",
        answer: "Não. Por norma internacional de segurança de aviação (ANAC/IATA), a partir do dia em que completa 2 anos de idade a criança precisa obrigatoriamente viajar no seu próprio assento no trecho de volta."
      },
      {
        question: "As companhias aéreas podem cobrar para marcar o assento da criança ao lado dos pais?",
        answer: "Não! As diretrizes da ANAC determinam que crianças menores de 12 anos devem ser alocadas gratuitamente em assentos adjacentes a pelo menos um dos adultos responsáveis da mesma reserva."
      }
    ],
    officialSources: [
      {
        name: "CNJ — Conselho Nacional de Justiça (Cartilha de Viagem de Crianças e Adolescentes)",
        url: "https://www.cnj.jus.br/programas-e-acoes/infancia-e-juventude/viagem-de-criancas-e-adolescentes/",
        description: "Regras oficiais da Resolução CNJ nº 295/2019 e nº 493/2023 sobre autorização nacional, internacional e AEV digital."
      },
      {
        name: "Polícia Federal — Autorização de Viagem Internacional para Menores",
        url: "https://www.gov.br/pf/pt-br/assuntos/passaporte/menores",
        description: "Formulário padrão gratuito da Polícia Federal para autorização de viagem de menores ao exterior."
      }
    ]
  }
];
