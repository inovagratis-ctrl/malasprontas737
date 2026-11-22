export interface AirlineFareOption {
  id: string;
  name: string;
  includesCabinBag: boolean;
  cabinMaxWeight: number; // kg
  cabinMaxDimensions: { height: number; width: number; depth: number };
  includesPersonalItem: boolean;
  personalItemMaxDimensions: { height: number; width: number; depth: number };
  notes: string;
}

export interface AirlineBaggageRule {
  id: string;
  name: string;
  country: string;
  category: "nacional" | "internacional" | "lowcost";
  logoText: string;
  badgeColor: string;
  fares: AirlineFareOption[];
  gateFeeEstimate: string;
  contractRuleSummary: string;
  proTip: string;
  officialSourceUrl: string;
  lastConsultationDate: string;
}

export const AIRLINES_DATA: AirlineBaggageRule[] = [
  {
    id: "gol",
    name: "GOL Linhas Aéreas",
    country: "Brasil",
    category: "nacional",
    logoText: "GOL",
    badgeColor: "bg-orange-500",
    lastConsultationDate: "Novembro/2026",
    officialSourceUrl: "https://www.voegol.com.br/informacoes/tarifas",
    fares: [
      {
        id: "gol-light-plus-max",
        name: "Tarifas Light, Plus e Max (Padrão)",
        includesCabinBag: true,
        cabinMaxWeight: 12,
        cabinMaxDimensions: { height: 55, width: 35, depth: 25 },
        includesPersonalItem: true,
        personalItemMaxDimensions: { height: 45, width: 35, depth: 20 },
        notes: "Dá direito a 1 mala de mão de até 12kg no bagageiro + 1 bolsa/mochila sob o assento."
      },
      {
        id: "gol-basic",
        name: "Tarifa Sem Bagagem / Basic (Promocional)",
        includesCabinBag: false,
        cabinMaxWeight: 0,
        cabinMaxDimensions: { height: 0, width: 0, depth: 0 },
        includesPersonalItem: true,
        personalItemMaxDimensions: { height: 45, width: 35, depth: 20 },
        notes: "ATENÇÃO: Inclui APENAS 1 item pessoal (mochila ou bolsa) de até 10kg sob o assento. Mala de rodinhas deve ser comprada à parte!"
      }
    ],
    gateFeeEstimate: "R$ 160 a R$ 220 (despacho compulsório no portão para voos nacionais)",
    contractRuleSummary: "A Resolução ANAC nº 400/2016 garante franquia mínima de 10kg, mas a distribuição entre mala de rodinhas ou item pessoal varia conforme o contrato da tarifa adquirida.",
    proTip: "Na tarifa básica da GOL, não leve mala de rodinhas ao portão sem ter contratado bagagem com antecedência pelo site ou app, pois a cobrança de balcão é substancialmente mais cara."
  },
  {
    id: "latam",
    name: "LATAM Airlines",
    country: "Brasil / América do Sul",
    category: "nacional",
    logoText: "LATAM",
    badgeColor: "bg-indigo-700",
    lastConsultationDate: "Novembro/2026",
    officialSourceUrl: "https://www.latamairlines.com/br/pt/experiencia/prepare-sua-viagem/bagagem/bagagem-de-mao",
    fares: [
      {
        id: "latam-standard-economy",
        name: "Tarifa Light / Standard (Classe Economy)",
        includesCabinBag: true,
        cabinMaxWeight: 12,
        cabinMaxDimensions: { height: 55, width: 35, depth: 25 },
        includesPersonalItem: true,
        personalItemMaxDimensions: { height: 45, width: 35, depth: 20 },
        notes: "1 mala de cabine de até 12kg + 1 bolsa/mochila pequena sob o assento."
      },
      {
        id: "latam-basic",
        name: "Tarifa Basic (Sem Mala de Cabine)",
        includesCabinBag: false,
        cabinMaxWeight: 0,
        cabinMaxDimensions: { height: 0, width: 0, depth: 0 },
        includesPersonalItem: true,
        personalItemMaxDimensions: { height: 45, width: 35, depth: 20 },
        notes: "Tarifa mais barata da LATAM: inclui SOMENTE o item pessoal debaixo do assento. Mala de cabine é cobrada como extra!"
      },
      {
        id: "latam-premium",
        name: "Premium Economy / Premium Business",
        includesCabinBag: true,
        cabinMaxWeight: 16,
        cabinMaxDimensions: { height: 55, width: 35, depth: 25 },
        includesPersonalItem: true,
        personalItemMaxDimensions: { height: 45, width: 35, depth: 20 },
        notes: "Franquia estendida de cabine até 16kg + item pessoal."
      }
    ],
    gateFeeEstimate: "R$ 160 a R$ 220 (doméstico) / até R$ 380+ (voos internacionais)",
    contractRuleSummary: "A LATAM diferencia a franquia de mala pequena de acordo com a família tarifária (Basic vs. Light/Standard/Premium).",
    proTip: "Ao comprar passagem LATAM em sites parceiros ou agências, confira se a emissão é 'Basic'. Se for Basic, comprar a bagagem pelo app com pelo menos 6h de antecedência custa quase metade da taxa de aeroporto."
  },
  {
    id: "azul",
    name: "Azul Linhas Aéreas",
    country: "Brasil",
    category: "nacional",
    logoText: "AZUL",
    badgeColor: "bg-blue-600",
    lastConsultationDate: "Novembro/2026",
    officialSourceUrl: "https://www.voeazul.com.br/br/pt/sua-viagem/planeje/bagagens/de-mao",
    fares: [
      {
        id: "azul-standard",
        name: "Tarifas Azul (Azul / MaisAzul)",
        includesCabinBag: true,
        cabinMaxWeight: 10,
        cabinMaxDimensions: { height: 55, width: 35, depth: 25 },
        includesPersonalItem: true,
        personalItemMaxDimensions: { height: 45, width: 35, depth: 20 },
        notes: "1 mala de mão de até 10kg no bagageiro + 1 artigo pessoal de 45x35x20cm sob o assento."
      }
    ],
    gateFeeEstimate: "R$ 160 a R$ 200 (despacho forçado no portão)",
    contractRuleSummary: "Franquia padrão de 10kg para mala de bordo (55x35x25cm) mais artigo pessoal sob o assento (45x35x20cm).",
    proTip: "Em aeronaves turboélice ATR ou jatos Embraer menores da Azul, o compartimento superior é reduzido. Malas rígidas de 25cm de profundidade podem ser recolhidas na escada do avião para acomodação no porão sem custo se estiverem dentro do peso."
  },
  {
    id: "tap",
    name: "TAP Air Portugal",
    country: "Portugal / Europa",
    category: "internacional",
    logoText: "TAP",
    badgeColor: "bg-emerald-600",
    lastConsultationDate: "Novembro/2026",
    officialSourceUrl: "https://www.flytap.com/pt-br/bagagem/bagagem-de-mao",
    fares: [
      {
        id: "tap-economy",
        name: "Classe Econômica (Discount, Basic, Classic, Plus)",
        includesCabinBag: true,
        cabinMaxWeight: 10,
        cabinMaxDimensions: { height: 55, width: 40, depth: 20 },
        includesPersonalItem: true,
        personalItemMaxDimensions: { height: 40, width: 30, depth: 15 },
        notes: "Atenção crucial: profundidade máxima de 20cm (5cm mais fina que as malas padrão do Brasil de 25cm!)."
      },
      {
        id: "tap-executive",
        name: "Classe Executiva (Executive, Top Executive)",
        includesCabinBag: true,
        cabinMaxWeight: 16,
        cabinMaxDimensions: { height: 55, width: 40, depth: 20 },
        includesPersonalItem: true,
        personalItemMaxDimensions: { height: 40, width: 30, depth: 15 },
        notes: "Permite 2 peças de até 8kg cada (total 16kg) + item pessoal."
      }
    ],
    gateFeeEstimate: "€ 70 a € 125 (~R$ 440 a R$ 780)",
    contractRuleSummary: "A TAP limita a profundidade a estritos 20cm (soma 115cm). Malas brasileiras convencionais de 25cm de espessura são barradas com frequência no hub de Lisboa.",
    proTip: "Se a sua mala de viagem for rígida e medir 25cm de profundidade, não force o embarque na TAP sem testar no gabarito em Lisboa, pois a taxa em euros é uma das mais caras da Europa."
  },
  {
    id: "airfrance-klm",
    name: "Air France / KLM",
    country: "França / Holanda",
    category: "internacional",
    logoText: "AF-KLM",
    badgeColor: "bg-blue-900",
    lastConsultationDate: "Novembro/2026",
    officialSourceUrl: "https://www.airfrance.com.br/information/bagages/bagage-cabine-soute",
    fares: [
      {
        id: "af-economy",
        name: "Economy (Tarifa Padrão)",
        includesCabinBag: true,
        cabinMaxWeight: 12,
        cabinMaxDimensions: { height: 55, width: 35, depth: 25 },
        includesPersonalItem: true,
        personalItemMaxDimensions: { height: 40, width: 30, depth: 15 },
        notes: "IMPORTANTE: O limite de 12kg é a SOMA CONJUNTA da mala de rodinhas + mochila pessoal!"
      },
      {
        id: "af-business",
        name: "Business Class",
        includesCabinBag: true,
        cabinMaxWeight: 18,
        cabinMaxDimensions: { height: 55, width: 35, depth: 25 },
        includesPersonalItem: true,
        personalItemMaxDimensions: { height: 40, width: 30, depth: 15 },
        notes: "2 malas de cabine + 1 acessório pessoal, peso total combinado de até 18kg."
      }
    ],
    gateFeeEstimate: "€ 75 a € 140 (~R$ 470 a R$ 880)",
    contractRuleSummary: "Diferente das brasileiras, a Air France e a KLM somam o peso da mala de mão com a mochila do ombro para o cômputo dos 12kg.",
    proTip: "Não coloque laptop pesado, livros e casacos na mochila se a mala de bordo já estiver com 10kg, pois na pesagem conjunta em Paris (CDG) ou Amsterdã (AMS) o total passará de 12kg."
  },
  {
    id: "american",
    name: "American Airlines",
    country: "Estados Unidos",
    category: "internacional",
    logoText: "AA",
    badgeColor: "bg-red-600",
    lastConsultationDate: "Novembro/2026",
    officialSourceUrl: "https://www.aa.com/i18n/travel-info/baggage/carry-on-baggage.jsp",
    fares: [
      {
        id: "aa-standard",
        name: "Todas as Tarifas (Inclusive Basic em voos internacionais)",
        includesCabinBag: true,
        cabinMaxWeight: 18,
        cabinMaxDimensions: { height: 56, width: 36, depth: 23 },
        includesPersonalItem: true,
        personalItemMaxDimensions: { height: 45, width: 35, depth: 20 },
        notes: "56x36x23cm (22x14x9 polegadas). Sem limite rígido de peso se o passageiro erguer ao bagageiro sem auxílio."
      }
    ],
    gateFeeEstimate: "$ 60 a $ 100 USD",
    contractRuleSummary: "Companhias norte-americanas costumam fiscalizar dimensões geométricas mais do que o peso em balança.",
    proTip: "Em voos domésticos dentro dos EUA operados pela American, a mala de mão continua permitida, mas o espaço no bagageiro acaba rápido nos grupos de embarque finais."
  },
  {
    id: "flybondi",
    name: "Flybondi",
    country: "Argentina",
    category: "lowcost",
    logoText: "FLYBONDI",
    badgeColor: "bg-amber-500",
    lastConsultationDate: "Novembro/2026",
    officialSourceUrl: "https://flybondi.com/br/informacion-util/equipaje",
    fares: [
      {
        id: "flybondi-basic",
        name: "Tarifa Básica (Apenas Mochila)",
        includesCabinBag: false,
        cabinMaxWeight: 0,
        cabinMaxDimensions: { height: 0, width: 0, depth: 0 },
        includesPersonalItem: true,
        personalItemMaxDimensions: { height: 40, width: 30, depth: 20 },
        notes: "NÃO INCLUI MALA DE CABINE! Apenas 1 mochila/bolsa de até 6kg sob o assento."
      },
      {
        id: "flybondi-with-carryon",
        name: "Tarifa com Bagagem de Cabine Contratada",
        includesCabinBag: true,
        cabinMaxWeight: 10,
        cabinMaxDimensions: { height: 55, width: 45, depth: 25 },
        includesPersonalItem: true,
        personalItemMaxDimensions: { height: 40, width: 30, depth: 20 },
        notes: "Mala de até 10kg comprada antecipadamente no bilhete."
      }
    ],
    gateFeeEstimate: "$ 40 a $ 75 USD",
    contractRuleSummary: "Modelo Ultra Low-Cost: mala de bordo é produto pago à parte na tarifa básica.",
    proTip: "Comprar a bagagem de mão com antecedência pelo site custa menos da metade do preço exigido no balcão de check-in em Buenos Aires."
  },
  {
    id: "jetsmart",
    name: "JetSMART",
    country: "Chile / Argentina / Peru",
    category: "lowcost",
    logoText: "JETSMART",
    badgeColor: "bg-red-700",
    lastConsultationDate: "Novembro/2026",
    officialSourceUrl: "https://jetsmart.com/br/pt/opcoes-de-bagagem",
    fares: [
      {
        id: "jetsmart-basic",
        name: "Tarifa Vuela Ligero (Apenas Mochila)",
        includesCabinBag: false,
        cabinMaxWeight: 0,
        cabinMaxDimensions: { height: 0, width: 0, depth: 0 },
        includesPersonalItem: true,
        personalItemMaxDimensions: { height: 45, width: 35, depth: 25 },
        notes: "Apenas 1 bolsa ou mochila de até 10kg sob o assento."
      },
      {
        id: "jetsmart-with-carryon",
        name: "Com Adicional de Bagagem de Mão (Cabin Bag)",
        includesCabinBag: true,
        cabinMaxWeight: 10,
        cabinMaxDimensions: { height: 55, width: 35, depth: 25 },
        includesPersonalItem: true,
        personalItemMaxDimensions: { height: 45, width: 35, depth: 25 },
        notes: "Mala de rodinhas contratada à parte até 10kg."
      }
    ],
    gateFeeEstimate: "$ 35 a $ 70 USD",
    contractRuleSummary: "Companhia ultra low-cost: a mala de cabine só está autorizada se constar expressamente no bilhete.",
    proTip: "A mochila permitida na JetSMART (45x35x25cm) tem bom volume. Uma mochila de viagem flexível bem organizada evita o pagamento de franquia extra."
  }
];
