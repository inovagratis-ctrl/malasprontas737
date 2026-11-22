export interface AirlineBaggageRule {
  id: string;
  name: string;
  country: string;
  category: "nacional" | "internacional" | "lowcost";
  logoText: string;
  badgeColor: string;
  cabinBag: {
    height: number; // cm
    width: number; // cm
    depth: number; // cm
    maxWeight: number; // kg
    includedInStandardFare: boolean;
    description: string;
  };
  personalItem: {
    height: number;
    width: number;
    depth: number;
    included: boolean;
    description: string;
  };
  gateFeeEstimate: string;
  officialRuleSummary: string;
  proTip: string;
}

export const AIRLINES_DATA: AirlineBaggageRule[] = [
  {
    id: "gol",
    name: "GOL Linhas Aéreas",
    country: "Brasil",
    category: "nacional",
    logoText: "GOL",
    badgeColor: "bg-orange-500",
    cabinBag: {
      height: 55,
      width: 35,
      depth: 25,
      maxWeight: 10,
      includedInStandardFare: true,
      description: "Mala de bordo oficial padrão ANAC com rodinhas e alça inclusas nas medidas."
    },
    personalItem: {
      height: 45,
      width: 35,
      depth: 20,
      included: true,
      description: "Bolsa ou mochila pequena que deve caber 100% embaixo do assento à sua frente."
    },
    gateFeeEstimate: "R$ 160 a R$ 220 (se despachada no portão)",
    officialRuleSummary: "Garante 1 mala de mão de até 10kg + 1 item pessoal em todas as tarifas comerciais (Light, Plus e Max).",
    proTip: "A GOL utiliza gabaritos de metal no portão. Se a sua mala for rígida e as rodinhas não entrarem na caixa, o despacho é obrigatório e cobrado na hora."
  },
  {
    id: "latam",
    name: "LATAM Airlines",
    country: "Brasil / América Latina",
    category: "nacional",
    logoText: "LATAM",
    badgeColor: "bg-indigo-700",
    cabinBag: {
      height: 55,
      width: 35,
      depth: 25,
      maxWeight: 10,
      includedInStandardFare: true,
      description: "Mala de até 10kg na classe Economy (até 16kg em Premium Economy/Business)."
    },
    personalItem: {
      height: 45,
      width: 35,
      depth: 20,
      included: true,
      description: "Mochila ou bolsa com pertences pessoais guardada sob o assento dianteiro."
    },
    gateFeeEstimate: "R$ 160 a R$ 220 (doméstico) / até R$ 380 (internacional)",
    officialRuleSummary: "1 peça de mão até 10kg + 1 item pessoal inclusos na maioria das tarifas nacionais.",
    proTip: "Em voos lotados (A320/A321 cheios), a LATAM frequentemente convida passageiros dos últimos grupos a despachar a mala de mão gratuitamente no portão."
  },
  {
    id: "azul",
    name: "Azul Linhas Aéreas",
    country: "Brasil",
    category: "nacional",
    logoText: "AZUL",
    badgeColor: "bg-blue-600",
    cabinBag: {
      height: 55,
      width: 35,
      depth: 25,
      maxWeight: 10,
      includedInStandardFare: true,
      description: "Mala de cabine de até 10kg medindo no máximo 55x35x25cm."
    },
    personalItem: {
      height: 45,
      width: 35,
      depth: 25,
      included: true,
      description: "Mochila, bolsa ou sacola colocada sob a poltrona à frente."
    },
    gateFeeEstimate: "R$ 160 a R$ 200 (despacho compulsório no portão)",
    officialRuleSummary: "Atende rigorosamente à Resolução 400 da ANAC com mala de até 10kg gratuita em todas as tarifas.",
    proTip: "Nos jatos Embraer E1 e ATR da Azul, os bagageiros superiores são mais estreitos. Malas no limite de 25cm de profundidade podem ter que ser despachadas na porta da aeronave."
  },
  {
    id: "tap",
    name: "TAP Air Portugal",
    country: "Portugal / Europa",
    category: "internacional",
    logoText: "TAP",
    badgeColor: "bg-emerald-600",
    cabinBag: {
      height: 55,
      width: 40,
      depth: 20,
      maxWeight: 10,
      includedInStandardFare: true,
      description: "Medida máxima de 55x40x20cm (soma 115cm) até 10kg na Economy."
    },
    personalItem: {
      height: 40,
      width: 30,
      depth: 15,
      included: true,
      description: "Item pessoal de até 2kg (bolsa, pasta de laptop)."
    },
    gateFeeEstimate: "€ 70 a € 125 (~R$ 440 a R$ 780)",
    officialRuleSummary: "Atenção: profundidade máxima é de apenas 20cm (5cm mais fina que as malas nacionais padrão de 25cm!).",
    proTip: "Cuidado clássico do brasileiro: malas de 55x35x25cm compram na ida no Brasil e na volta em Lisboa a TAP barra pela profundidade de 25cm!"
  },
  {
    id: "airfrance-klm",
    name: "Air France / KLM",
    country: "França / Holanda",
    category: "internacional",
    logoText: "AF-KLM",
    badgeColor: "bg-blue-900",
    cabinBag: {
      height: 55,
      width: 35,
      depth: 25,
      maxWeight: 12,
      includedInStandardFare: true,
      description: "Mala de 55x35x25cm. Peso SOMADO com o item pessoal não pode passar de 12kg."
    },
    personalItem: {
      height: 40,
      width: 30,
      depth: 15,
      included: true,
      description: "Item pessoal incluído dentro do peso total combinado de 12kg."
    },
    gateFeeEstimate: "€ 75 a € 140 (~R$ 470 a R$ 880)",
    officialRuleSummary: "O limite de 12kg é a SOMA da mala de rodinhas + mochila de ombro na classe econômica.",
    proTip: "A pesagem conjunta é comum nas áreas de conexão em Paris (CDG) e Amsterdã (AMS). Não encha a mochila com livros pesados se a mala já estiver com 10kg."
  },
  {
    id: "american",
    name: "American Airlines",
    country: "Estados Unidos",
    category: "internacional",
    logoText: "AA",
    badgeColor: "bg-red-600",
    cabinBag: {
      height: 56,
      width: 36,
      depth: 23,
      maxWeight: 18,
      includedInStandardFare: true,
      description: "56x36x23cm (22x14x9 polegadas). Sem limite rígido de peso se conseguir levantar sozinho."
    },
    personalItem: {
      height: 45,
      width: 35,
      depth: 20,
      included: true,
      description: "Deve caber perfeitamente sob o assento dianteiro (18x14x8 polegadas)."
    },
    gateFeeEstimate: "$ 60 a $ 100 (~R$ 340 a R$ 570)",
    officialRuleSummary: "1 mala de mão de tamanho padrão + 1 item pessoal em todas as classes, inclusive na maioria das tarifas de voos internacionais.",
    proTip: "Companhias americanas raramente pesam a mala de mão, mas conferem as dimensões rígidas caso os bagageiros do Boeing 777/787 estejam lotados."
  },
  {
    id: "united",
    name: "United Airlines",
    country: "Estados Unidos",
    category: "internacional",
    logoText: "UNITED",
    badgeColor: "bg-sky-700",
    cabinBag: {
      height: 56,
      width: 35,
      depth: 22,
      maxWeight: 18,
      includedInStandardFare: true,
      description: "56x35x22cm (22x14x9 pol). Permitido em voos internacionais padrão."
    },
    personalItem: {
      height: 43,
      width: 25,
      depth: 22,
      included: true,
      description: "Item pessoal até 43x25x22cm."
    },
    gateFeeEstimate: "$ 65 a $ 110 (~R$ 370 a R$ 620)",
    officialRuleSummary: "Atenção máxima: se emitir voo doméstico interno nos EUA na tarifa 'Basic Economy', a mala de mão é PROIBIDA (apenas item pessoal).",
    proTip: "Em trechos internos nos EUA compre Economy Regular, pois a taxa no portão da Basic Economy custa a tarifa cheia de mala despachada + multa de $25."
  },
  {
    id: "flybondi",
    name: "Flybondi",
    country: "Argentina",
    category: "lowcost",
    logoText: "FLYBONDI",
    badgeColor: "bg-amber-500",
    cabinBag: {
      height: 55,
      width: 45,
      depth: 25,
      maxWeight: 10,
      includedInStandardFare: false,
      description: "NÃO INCLUSA NA TARIFA BÁSICA! Deve ser contratada à parte antes do check-in."
    },
    personalItem: {
      height: 40,
      width: 30,
      depth: 20,
      included: true,
      description: "Apenas 1 mochila/bolsa pequena de até 6kg sob o assento incluída grátis."
    },
    gateFeeEstimate: "$ 40 a $ 75 USD (~R$ 230 a R$ 430 cobrado no aeroporto)",
    officialRuleSummary: "Modelo Ultra Low-Cost: a tarifa básica dá direito SOMENTE à mochila de 6kg sob o assento.",
    proTip: "Se tentar embarcar com mala de rodinhas sem ter pago previamente pelo site, a taxa cobrada no balcão em Buenos Aires é o dobro do valor online!"
  },
  {
    id: "jetsmart",
    name: "JetSMART",
    country: "Chile / Argentina / Peru",
    category: "lowcost",
    logoText: "JETSMART",
    badgeColor: "bg-red-700",
    cabinBag: {
      height: 55,
      width: 35,
      depth: 25,
      maxWeight: 10,
      includedInStandardFare: false,
      description: "PAGA À PARTE na tarifa básica. Medida máxima 55x35x25cm até 10kg."
    },
    personalItem: {
      height: 45,
      width: 35,
      depth: 25,
      included: true,
      description: "1 item pessoal de até 10kg sob o assento dianteiro."
    },
    gateFeeEstimate: "$ 35 a $ 70 USD",
    officialRuleSummary: "Tarifa 'Vuela Ligero' inclui apenas a mochila de costas. Mala de cabine no bagageiro precisa ser adicionada no carrinho.",
    proTip: "Contrate a mala de mão no momento da compra da passagem. Adicionar no portão de embarque é a opção mais cara da companhia."
  },
  {
    id: "sky-airline",
    name: "Sky Airline",
    country: "Chile / Peru",
    category: "lowcost",
    logoText: "SKY",
    badgeColor: "bg-purple-700",
    cabinBag: {
      height: 55,
      width: 35,
      depth: 25,
      maxWeight: 10,
      includedInStandardFare: false,
      description: "Incluída apenas nas tarifas Plus/Full ou adicionada como bagagem de mão extra."
    },
    personalItem: {
      height: 45,
      width: 35,
      depth: 25,
      included: true,
      description: "Mochila ou bolsa até 45x35x25cm guardada debaixo do assento."
    },
    gateFeeEstimate: "$ 35 a $ 65 USD",
    officialRuleSummary: "Tarifa Zero da Sky só permite 1 item de mão pessoal sob o assento.",
    proTip: "O tamanho da mochila permitida é generoso (45x35x25cm). Uma boa mochila de viagem expansível substitui a mala de rodinhas com folga."
  },
  {
    id: "copa",
    name: "Copa Airlines",
    country: "Panamá / Américas",
    category: "internacional",
    logoText: "COPA",
    badgeColor: "bg-blue-800",
    cabinBag: {
      height: 56,
      width: 36,
      depth: 26,
      maxWeight: 10,
      includedInStandardFare: true,
      description: "Dimensões máximas 56x36x26cm (118cm no total) até 10kg."
    },
    personalItem: {
      height: 43,
      width: 25,
      depth: 22,
      included: true,
      description: "Item pessoal incluído em todas as tarifas."
    },
    gateFeeEstimate: "$ 50 a $ 90 USD",
    officialRuleSummary: "1 bagagem de mão 10kg + 1 item pessoal em todas as tarifas internacionais que conectam via Cidade do Panamá.",
    proTip: "As conexões no Panamá (Aeroporto de Tocumen) exigem novo raio-X antes do portão para voos com destino aos EUA. Atenção aos líquidos!"
  },
  {
    id: "iberia",
    name: "Iberia",
    country: "Espanha / Europa",
    category: "internacional",
    logoText: "IBERIA",
    badgeColor: "bg-yellow-600",
    cabinBag: {
      height: 56,
      width: 40,
      depth: 25,
      maxWeight: 10,
      includedInStandardFare: true,
      description: "56x40x25cm incluindo alças e bolsos, até 10kg na tarifa Turista."
    },
    personalItem: {
      height: 40,
      width: 30,
      depth: 15,
      included: true,
      description: "Acessório pessoal sob o assento dianteiro."
    },
    gateFeeEstimate: "€ 60 a € 120",
    officialRuleSummary: "Mala de mão de 56x40x25cm até 10kg + acessório pessoal incluídos.",
    proTip: "A largura de 40cm da Iberia é mais tolerante que os 35cm das empresas brasileiras, facilitando o transporte de malas um pouco mais largas."
  }
];
