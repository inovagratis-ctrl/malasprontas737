// Central de Links e Metadados de Afiliados Oficiais - Malas Prontas
// Governança Editorial: Todos os links afiliados utilizam rel="sponsored nofollow" e incluem data de consulta e alternativa gratuita/econômica.

import { ConversionEventName } from "@/lib/analytics";

export const AFFILIATES = {
  // Passagens Aéreas & Voos com Milhas
  FLIP_MILHAS: "https://afiliados.flipmilhas.com/r/bjreyuf",
  VAI_DE_PROMO_VOOS: "https://apretailer.com.br/click/6a9a1f372bfa8131323fd1a2/183142/360329/subaccount",
  GOL_LINHAS_AEREAS: "https://apretailer.com.br/click/6a9b273a2bfa813d9858c87d/188583/360329/subaccount",

  // Direitos do Passageiro & Indenizações por Voo Atrasado / Cancelado
  AIRHELP: "https://adpgtrack.com/click/6a9b27392bfa813daa75f78c/184276/360329/subaccount",

  // Ingressos, Tours & Experiências
  GET_YOUR_GUIDE: "https://apretailer.com.br/click/6a9a1ee02bfa8131446932d2/185623/360329/subaccount",
  FEVER_BR: "https://apretailer.com.br/click/6a9a1fd22bfa81311e6ee3c2/189005/360329/subaccount",
  BEACH_PARK_INGRESSOS: "https://apretailer.com.br/click/6a9b27392bfa813d92431f9e/189025/360329/subaccount",
  BEACH_PARK_TURISMO: "https://apretailer.com.br/click/6a9b27392bfa813d8c2df071/188582/360329/subaccount",

  // Ônibus, Trens & Transporte Terrestre
  OMIO_TRANSPORTE: "https://apretailer.com.br/click/6a9b27392bfa813da41685b8/183270/360329/subaccount",

  // Agência de Viagens & Pacotes
  PARTIU_VIAJAR: "https://apretailer.com.br/click/6a9b27382bfa813d9e5db948/185129/360329/subaccount",

  // Seguro Viagem & Saúde
  EKTA_SEGURO: "https://ektatraveling.tpo.lu/QynkhjN8",

  // Internet & eSIM Internacional
  AIRALO_ESIM: "https://airalo.tpo.lu/5hX1qKLi",

  // Aluguel de Carros
  ECONOMY_BOOKINGS: "https://economybookings.tpo.lu/rXOQqeTJ",

  // Hospedagem & Hotéis (Stay22 Aid / Booking / Expedia)
  STAY22_AID: "6a99930410f03364e343f876",
  BOOKING_STAY22: "https://www.stay22.com/allez/roam?aid=6a99930410f03364e343f876&campaign=malasprontas-booking",
  EXPEDIA_STAY22: "https://www.stay22.com/allez/roam?aid=6a99930410f03364e343f876&campaign=malasprontas-expedia",

  // Equipamentos e Bagagem (Amazon Brasil - Tag Oficial: achadospro09-20)
  AMAZON_TAG: "achadospro09-20",
  AMAZON_BALANCA_DIGITAL: "https://www.amazon.com.br/s?k=balanca+digital+portatil+mala+viagem&tag=achadospro09-20",
  AMAZON_MALA_BORDO_ANAC: "https://www.amazon.com.br/s?k=mala+de+bordo+55x35x25+anac+10kg&tag=achadospro09-20",
  AMAZON_KIT_FRASCOS_100ML: "https://www.amazon.com.br/s?k=kit+frascos+silicone+viagem+100ml+necessaire&tag=achadospro09-20",
  AMAZON_ADAPTADOR_UNIVERSAL: "https://www.amazon.com.br/s?k=adaptador+universal+tomada+internacional&tag=achadospro09-20",
  AMAZON_ORGANIZADORES_MALA: "https://www.amazon.com.br/s?k=organizadores+de+mala+viagem+packing+cubes&tag=achadospro09-20",

  // Equipamentos e Bagagem (Mercado Livre Busca Direta)
  ML_MALA_BORDO_ANAC: "https://lista.mercadolivre.com.br/mala-de-bordo-55x35x25-anac",
  ML_SACOS_VACUO: "https://lista.mercadolivre.com.br/sacos-a-vacuo-viagem",
  ML_BALANCA_DIGITAL: "https://lista.mercadolivre.com.br/balanca-digital-portatil-viagem",
  ML_ADAPTADOR_UNIVERSAL: "https://lista.mercadolivre.com.br/adaptador-universal-tomada",
  ML_MOCHILA_ANTIFURTO: "https://lista.mercadolivre.com.br/mochila-antifurto-viagem",
  ML_SMART_TAG: "https://lista.mercadolivre.com.br/smart-tag-rastreador-mala"
};

export type AffiliateCategory =
  | "Hospedagem"
  | "Seguro Viagem"
  | "Conectividade & eSIM"
  | "Aluguel de Carro"
  | "Passagens Aéreas"
  | "Direitos do Passageiro"
  | "Passeios & Ingressos"
  | "Transporte Terrestre"
  | "Bagagem & Acessórios";

export interface AffiliatePartner {
  id: string;
  key: keyof typeof AFFILIATES;
  name: string;
  category: AffiliateCategory;
  url: string;
  lastVerifiedDate: string;
  rel: "sponsored nofollow";
  conversionEvent: ConversionEventName;
  badge: string;
  priceRange: string;
  directAnswer: string;
  idealFor: string;
  selectionCriteria: string[];
  pros: string[];
  limitations: string[];
  freeAlternative: string;
  ctaLabel: string;
}

export const AFFILIATE_PARTNERS: AffiliatePartner[] = [
  {
    id: "booking-stay22",
    key: "BOOKING_STAY22",
    name: "Booking.com & Mapa Comparador Stay22",
    category: "Hospedagem",
    url: AFFILIATES.BOOKING_STAY22,
    lastVerifiedDate: "Outubro/2026",
    rel: "sponsored nofollow",
    conversionEvent: "click_accommodation",
    badge: "Cancelamento Grátis na Maioria das Tarifas",
    priceRange: "Diárias a partir de R$ 110 (Hostels) a R$ 490+ (Hotéis 3-4 estrelas) — Consultado em Outubro/2026",
    directAnswer:
      "A forma mais segura de reservar hospedagem sem imprevistos é filtrar acomodações com nota mínima 8.0, mais de 150 avaliações recentes e política de cancelamento gratuito até 48h antes do check-in.",
    idealFor:
      "Viajantes independentes, casais e famílias que buscam comparar hotéis, pousadas e apartamentos no mesmo mapa perto do metrô ou das atrações principais.",
    selectionCriteria: [
      "Nota de avaliação real acima de 8.0 por hóspedes verificados",
      "Política clara de cancelamento gratuito e pagamento na acomodação",
      "Transparência de taxas municipais (ISS/taxa de turismo) e café da manhã incluso",
      "Localização a menos de 600 metros de transporte público ou centro turístico"
    ],
    pros: [
      "Maior inventário de hotéis, pousadas e apartamentos no Brasil e exterior",
      "Mapa interativo permite ver distância exata das atrações e estações",
      "Suporte ao cliente 24h em português e confirmação imediata em PDF"
    ],
    limitations: [
      "Algumas tarifas internacionais não incluem impostos municipais (city tax) pagos no balcão",
      "Tarifas 'Não Reembolsáveis' cobram multa integral em caso de mudança de voo"
    ],
    freeAlternative:
      "Alternativa sem afiliado: Pesquisar o nome do hotel/pousada no Google Maps e entrar em contato diretamente via telefone ou WhatsApp oficial do estabelecimento para negociar desconto no PIX à vista.",
    ctaLabel: "Comparar Hotéis com Cancelamento Grátis"
  },
  {
    id: "expedia-group",
    key: "EXPEDIA_STAY22",
    name: "Expedia Group (Hotéis & Redes Internacionais)",
    category: "Hospedagem",
    url: AFFILIATES.EXPEDIA_STAY22,
    lastVerifiedDate: "Outubro/2026",
    rel: "sponsored nofollow",
    conversionEvent: "click_accommodation",
    badge: "Forte nos EUA, Europa e América Latina",
    priceRange: "Diárias internacionais de US$ 55 a US$ 220 — Consultado em Outubro/2026",
    directAnswer:
      "Excelente segunda opção para comparar tarifas de grandes redes hoteleiras internacionais e resorts, especialmente em viagens para América do Norte, Caribe e Europa.",
    idealFor:
      "Viajantes que buscam redes hoteleiras tradicionais, resorts all-inclusive ou comparação cruzada de tarifas em dólar/euro.",
    selectionCriteria: [
      "Comparação do valor final com impostos e taxas de resort (resort fee)",
      "Política de reembolso e flexibilidade de datas",
      "Avaliação de limpeza e localização"
    ],
    pros: [
      "Tarifas competitivas em grandes redes de hotéis internacionais",
      "Filtros claros para quartos familiares com duas camas queen",
      "Boa integração com pacotes de viagem"
    ],
    limitations: [
      "Menor oferta de pousadas familiares pequenas no interior do Brasil",
      "Atenção às 'Resort Fees' obrigatórias em destinos como Orlando, Miami e Las Vegas"
    ],
    freeAlternative:
      "Alternativa sem afiliado: Consultar diretamente os programas de fidelidade gratuitos das próprias redes (ex: Accor ALL, Marriott Bonvoy ou Hilton Honors) para tarifas de membro.",
    ctaLabel: "Consultar Tarifas na Expedia"
  },
  {
    id: "ekta-seguro",
    key: "EKTA_SEGURO",
    name: "Ekta Seguro Viagem Internacional",
    category: "Seguro Viagem",
    url: AFFILIATES.EKTA_SEGURO,
    lastVerifiedDate: "Outubro/2026",
    rel: "sponsored nofollow",
    conversionEvent: "click_insurance",
    badge: "Atende Exigência Schengen (€ 30.000) e EUA",
    priceRange: "A partir de R$ 9 a R$ 28 por dia de viagem (conforme idade e cobertura DMHO) — Consultado em Outubro/2026",
    directAnswer:
      "Para qualquer viagem internacional, contrate uma apólice com no mínimo US$ 60.000 de Despesas Médicas e Hospitalares (DMHO) — ou € 30.000 obrigatórios para a Europa (Tratado de Schengen) — incluindo cobertura para condições preexistentes e traslado médico.",
    idealFor:
      "Brasileiros em viagens para América do Sul, Europa, Estados Unidos e Ásia que precisam de emissão rápida de apólice no e-mail e suporte 24h.",
    selectionCriteria: [
      "Valor de Despesas Médicas, Hospitalares e Odontológicas (DMHO) por evento",
      "Cobertura para urgências de doenças preexistentes e gestantes",
      "Indenização suplementar por extravio ou atraso de bagagem",
      "Atendimento por telemedicina 24h sem burocracia de reembolso"
    ],
    pros: [
      "Apólice emitida em 2 minutos no e-mail pronta para apresentar na imigração",
      "Custo diário acessível mesmo para roteiros longos de 15 a 30 dias",
      "Cobertura compatível com todos os consulados europeus (Espaço Schengen)"
    ],
    limitations: [
      "Viajantes acima de 70 anos ou praticantes de esportes radicais (esqui/mergulho) precisam selecionar o adicional específico na cotação",
      "Franquia ou limite específico para bagagem deve ser conferido nas condições gerais"
    ],
    freeAlternative:
      "Alternativa sem afiliado: Se você comprou a passagem aérea integralmente com um cartão de crédito Visa Infinite, Mastercard Black ou Elo Nanquim, verifique gratuitamente no portal de benefícios do seu banco se você tem direito à emissão do Certificado de Seguro Viagem do cartão (atenção: exige emissão da apólice antes do embarque).",
    ctaLabel: "Cotar Seguro Viagem na Ekta"
  },
  {
    id: "airalo-esim",
    key: "AIRALO_ESIM",
    name: "Airalo — Chip Virtual eSIM Internacional (+200 Países)",
    category: "Conectividade & eSIM",
    url: AFFILIATES.AIRALO_ESIM,
    lastVerifiedDate: "Outubro/2026",
    rel: "sponsored nofollow",
    conversionEvent: "click_esim",
    badge: "Ativação Digital por QR Code antes de Embarcar",
    priceRange: "Planos de US$ 4,50 (1GB / 7 dias) a US$ 26,00 (10GB / 30 dias) — Consultado em Outubro/2026",
    directAnswer:
      "O chip virtual (eSIM) é a maneira mais prática de já pousar no exterior com internet 4G/5G funcionando para chamar Uber, abrir o Google Maps e mostrar comprovantes na imigração sem pagar roaming abusivo da operadora brasileira.",
    idealFor:
      "Viajantes com smartphones compatíveis com tecnologia eSIM (iPhone XR/11 ou superior, Samsung S20 ou superior, Motorola e Xiaomi recentes) que não querem perder tempo procurando loja de chip físico no aeroporto.",
    selectionCriteria: [
      "Verificar se o aparelho celular suporta eSIM e está desbloqueado",
      "Escolher entre plano por país único (mais barato) ou regional (América Latina, Europa, Global)",
      "Estimar consumo: 3GB a 5GB são suficientes para 7 a 10 dias usando mapas, WhatsApp e redes sociais moderadas"
    ],
    pros: [
      "Instalação em 3 minutos pelo aplicativo ou QR Code ainda no Brasil",
      "Mantém seu número de WhatsApp brasileiro intacto e funcionando",
      "Sem filas em quiosques de aeroporto que cobram 3x mais caro do turista"
    ],
    limitations: [
      "Não funciona em aparelhos antigos que não possuem suporte de hardware a eSIM",
      "A maioria dos pacotes básicos é exclusiva para dados móveis (internet), sem número local para ligações telefônicas tradicionais"
    ],
    freeAlternative:
      "Alternativa gratuita sem afiliado: Baixar previamente os mapas offline do Google Maps e o pacote de idiomas do Google Tradutor no Wi-Fi de casa, utilizando apenas o Wi-Fi gratuito do aeroporto, hotel e cafés durante a viagem.",
    ctaLabel: "Ver Planos de eSIM na Airalo"
  },
  {
    id: "economy-bookings",
    key: "ECONOMY_BOOKINGS",
    name: "EconomyBookings — Comparador Global de Aluguel de Carros",
    category: "Aluguel de Carro",
    url: AFFILIATES.ECONOMY_BOOKINGS,
    lastVerifiedDate: "Outubro/2026",
    rel: "sponsored nofollow",
    conversionEvent: "click_affiliate",
    badge: "Compara Localiza, Movida, Unidas, Hertz, Avis e Europcar",
    priceRange: "Diárias nacionais a partir de R$ 89/dia e internacionais a partir de US$ 28/dia — Consultado em Outubro/2026",
    directAnswer:
      "Reserve o carro com pelo menos 21 dias de antecedência pela internet (até 40% mais barato que no balcão do aeroporto) e sempre confira o valor do caução (bloqueio no cartão de crédito) e a proteção básica contra danos (CDW/LDW) e terceiros (ALI/ TPL).",
    idealFor:
      "Roteiros com praias distantes, serras ou parques nacionais (como Natal, Maragogi, Gramado, Chapada dos Veadeiros, rota dos vinhos no Chile ou Flórida).",
    selectionCriteria: [
      "Política de combustível 'Cheio para Cheio' (Full to Full) — sempre a mais justa",
      "Quilometragem livre inclusa no contrato",
      "Clareza sobre o valor da franquia do seguro e limite disponível no cartão de crédito físico nominal ao condutor",
      "Conferência de taxas de devolução em outra cidade (one-way fee) e pedágios eletrônicos"
    ],
    pros: [
      "Compara dezenas de locadoras confiáveis simultaneamente em aeroportos e centros urbanos",
      "Cancelamento gratuito até 48 horas antes da retirada na maioria das tarifas",
      "Permite filtrar por câmbio automático, ar-condicionado e tamanho do porta-malas"
    ],
    limitations: [
      "Exige cartão de crédito físico internacional em nome do motorista principal para o bloqueio caução na retirada",
      "Motoristas menores de 25 anos costumam pagar taxa adicional de 'Condutor Jovem' na locadora"
    ],
    freeAlternative:
      "Alternativa econômica sem afiliado: Utilizar ônibus intermunicipais regulares, trens regionais ou dividir transfers oficiais credenciados com outros viajantes na chegada.",
    ctaLabel: "Comparar Aluguel de Carros"
  },
  {
    id: "vai-de-promo",
    key: "VAI_DE_PROMO_VOOS",
    name: "Vai de Promo — Comparador de Passagens Aéreas e Seguros",
    category: "Passagens Aéreas",
    url: AFFILIATES.VAI_DE_PROMO_VOOS,
    lastVerifiedDate: "Outubro/2026",
    rel: "sponsored nofollow",
    conversionEvent: "click_affiliate",
    badge: "Pagamento em Reais Sem IOF e Parcelamento",
    priceRange: "Voos nacionais a partir de R$ 390 (ida/volta) e América do Sul a partir de R$ 1.190 — Consultado em Outubro/2026",
    directAnswer:
      "O segredo para pagar barato em passagens aéreas é monitorar com 45 a 90 dias de antecedência (nacional) ou 90 a 150 dias (internacional), comparando voos às terças, quartas ou sábados e verificando se a tarifa básica já inclui mala de bordo de 10kg.",
    idealFor:
      "Viajantes que buscam comparar Gol, Latam, Azul e companhias internacionais em uma única tela com pagamento em reais.",
    selectionCriteria: [
      "Verificar o tempo total de conexão e se há troca de aeroporto (ex: Congonhas para Guarulhos)",
      "Conferir a franquia de bagagem inclusa na tarifa escolhida (Light vs. Standard)",
      "Comparar o preço final já com taxas de embarque incluídas"
    ],
    pros: [
      "Interface clara em português com preços finais em reais (R$)",
      "Compara múltiplas companhias aéreas domésticas e internacionais simultaneamente",
      "Atendimento brasileiro por telefone e WhatsApp"
    ],
    limitations: [
      "Alterações ou cancelamentos voluntários seguem as regras de multa da tarifa da companhia aérea mais eventual taxa administrativa",
      "Em tarifas promocionais 'Light/Promo', o despacho de bagagem de 23kg é cobrado à parte"
    ],
    freeAlternative:
      "Alternativa gratuita sem afiliado: Configurar alertas gratuitos de queda de preço no Google Flights (Google Voos) e comprar diretamente no site da companhia aérea.",
    ctaLabel: "Pesquisar Passagens no Vai de Promo"
  },
  {
    id: "flipmilhas",
    key: "FLIP_MILHAS",
    name: "FlipMilhas — Emissão de Passagens com Milhas",
    category: "Passagens Aéreas",
    url: AFFILIATES.FLIP_MILHAS,
    lastVerifiedDate: "Outubro/2026",
    rel: "sponsored nofollow",
    conversionEvent: "click_affiliate",
    badge: "Economia em Emissões Próximas à Data",
    priceRange: "Descontos variáveis de 15% a 45% sobre a tarifa comercial em rotas selecionadas — Consultado em Outubro/2026",
    directAnswer:
      "A emissão por intermédio de milhas pode gerar economia importante quando a passagem em dinheiro subiu muito perto da data do voo ou em cabines executivas internacionais.",
    idealFor:
      "Viajantes que não acumulam milhas próprias, mas desejam comparar o custo da emissão via milhas versus a tarifa pagante tradicional.",
    selectionCriteria: [
      "Sempre comparar o valor final na FlipMilhas com o preço pagante direto na companhia aérea",
      "Emitir apenas quando a data da viagem já estiver 100% definida (bilhetes emitidos com milhas têm regras rígidas de remarcação)"
    ],
    pros: [
      "Permite aproveitar tarifas em milhas sem precisar ter pontos acumulados no banco",
      "Cotações rápidas online para voos nacionais e internacionais"
    ],
    limitations: [
      "Menor flexibilidade caso você precise remarcar ou cancelar o voo depois de emitido",
      "Não acumula milhas no seu programa de fidelidade pessoal ao voar"
    ],
    freeAlternative:
      "Alternativa gratuita sem afiliado: Cadastrar-se gratuitamente nos programas Smiles (Gol), Latam Pass e TudoAzul para acumular pontos orgânicos nas suas compras do dia a dia.",
    ctaLabel: "Cotar Voos na FlipMilhas"
  },
  {
    id: "airhelp",
    key: "AIRHELP",
    name: "AirHelp — Indenização por Voo Atrasado, Cancelado ou Overbooking",
    category: "Direitos do Passageiro",
    url: AFFILIATES.AIRHELP,
    lastVerifiedDate: "Outubro/2026",
    rel: "sponsored nofollow",
    conversionEvent: "click_affiliate",
    badge: "Taxa Zero Adiantada (No Win, No Fee)",
    priceRange: "Verificação 100% gratuita; comissão cobrada apenas se você ganhar a indenização (até R$ 5.000 no Brasil / € 600 na Europa) — Consultado em Outubro/2026",
    directAnswer:
      "Se o seu voo atrasou mais de 4 horas na chegada ao destino final, foi cancelado em cima da hora ou sofreu preterição de embarque (overbooking), a legislação (Resolução ANAC 400 no Brasil e Regulamento CE 261 na Europa) garante assistência material e possível compensação financeira.",
    idealFor:
      "Passageiros que sofreram atrasos longos, perda de conexão ou cancelamento de voo nos últimos 3 anos e não querem contratar advogado particular nem enfrentar burocracia jurídica.",
    selectionCriteria: [
      "Guardar o cartão de embarque (físico ou print do app) e o código localizador (PNR)",
      "Fotografar o painel do aeroporto mostrando o atraso/cancelamento e guardar notas fiscais de alimentação/transporte",
      "Avaliar se prefere reclamar sozinho gratuitamente ou delegar para uma plataforma especializada mediante taxa de sucesso"
    ],
    pros: [
      "Consulta de elegibilidade do voo em 2 minutos sem custo inicial",
      "Só cobra comissão se efetivamente recuperar o dinheiro da companhia aérea",
      "Atuação global em voos nacionais, europeus e internacionais"
    ],
    limitations: [
      "Retém percentual de sucesso sobre o valor recuperado (comissão de serviço jurídico/administrativo)",
      "Atrasos causados exclusivamente por condições meteorológicas severas extremas podem não gerar indenização por dano moral, apenas assistência material"
    ],
    freeAlternative:
      "Alternativa 100% gratuita sem afiliado: Registrar reclamação diretamente na plataforma oficial do governo brasileiro Consumidor.gov.br (monitorada pela ANAC e Senacon) ou no Juizado Especial Cível (Pequenas Causas) sem custos.",
    ctaLabel: "Verificar Direito a Indenização Grátis"
  },
  {
    id: "getyourguide",
    key: "GET_YOUR_GUIDE",
    name: "GetYourGuide — Ingressos Oficiais e Passeios Guiados",
    category: "Passeios & Ingressos",
    url: AFFILIATES.GET_YOUR_GUIDE,
    lastVerifiedDate: "Outubro/2026",
    rel: "sponsored nofollow",
    conversionEvent: "click_affiliate",
    badge: "Cancelamento Grátis até 24h Antes",
    priceRange: "Ingressos e passeios a partir de R$ 65 a R$ 450 — Consultado em Outubro/2026",
    directAnswer:
      "Para atrações disputadas (como museus na Europa, passeios de barco em Arraial do Cabo/Maragogi ou tours no Vale Sagrado), comprar com antecedência evita filas de bilheteria e golpes de cambistas na porta.",
    idealFor:
      "Viajantes que valorizam segurança, avaliações reais de outros brasileiros e possibilidade de cancelar gratuitamente até 24h antes caso chova.",
    selectionCriteria: [
      "Conferir se o ingresso inclui entrada sem fila (Skip-the-line) e guia no idioma desejado",
      "Ler as avaliações mais recentes sobre pontualidade do transfer",
      "Verificar o ponto de encontro exato no mapa"
    ],
    pros: [
      "Reembolso integral automático se cancelar com até 24 horas de antecedência",
      "Voucher digital no celular sem necessidade de imprimir papel",
      "Milhares de avaliações verificadas com fotos reais dos turistas"
    ],
    limitations: [
      "Em atrações governamentais muito restritas (ex: santuário de Machu Picchu ou Cristo Redentor), compare sempre com a bilheteria oficial do governo",
      "Preços em moedas estrangeiras podem variar alguns centavos conforme o câmbio do dia"
    ],
    freeAlternative:
      "Alternativa gratuita/econômica sem afiliado: Fazer Free Walking Tours (passeios a pé guiados baseados em gorjeta voluntária) nos centros históricos e aproveitar os dias de entrada gratuita em museus públicos.",
    ctaLabel: "Explorar Passeios e Ingressos"
  },
  {
    id: "ml-bagagem-anac",
    key: "ML_MALA_BORDO_ANAC",
    name: "Mercado Livre — Malas de Bordo 10kg Padrão ANAC, Balanças e Organizadores",
    category: "Bagagem & Acessórios",
    url: AFFILIATES.ML_MALA_BORDO_ANAC,
    lastVerifiedDate: "Outubro/2026",
    rel: "sponsored nofollow",
    conversionEvent: "click_affiliate",
    badge: "Padrão 55x35x25 cm + Compra Garantida",
    priceRange: "Balanças de R$ 25 a R$ 49 | Kits Organizadores/Vácuo de R$ 39 a R$ 89 | Malas 10kg ABS de R$ 189 a R$ 349 — Consultado em Outubro/2026",
    directAnswer:
      "Investir em uma mala rígida dentro das medidas exatas da ANAC (55 x 35 x 25 cm), combinada com cubos organizadores e uma balança digital portátil de R$ 30, se paga já no primeiro voo ao economizar R$ 280 a R$ 440 de bagagem despachada.",
    idealFor:
      "Quem quer viajar apenas com mala de mão de 10kg + mochila pessoal sem medo de ter a mala barrada no gabarito do portão de embarque.",
    selectionCriteria: [
      "Medida total externa incluindo rodinhas e alça: máximo 55 cm (altura) x 35 cm (largura) x 25 cm (profundidade)",
      "Peso vazio da mala: prefira modelos que pesem entre 2,2 kg e 2,8 kg vazia para sobrar mais de 7 kg para suas roupas",
      "Rodas duplas com giro 360° e cadeado embutido (TSA para viagens aos EUA)"
    ],
    pros: [
      "Entrega rápida Full no Brasil inteiro com devolução grátis em 30 dias se não gostar",
      "Economia imediata de taxas de despacho de bagagem em todas as viagens futuras",
      "Avaliações reais com fotos de compradores que testaram nas caixas medidoras da Gol, Latam e Azul"
    ],
    limitations: [
      "Malas rígidas de entrada em ABS não devem ser submetidas a excesso de peso extremo (sente-se sobre a mala)",
      "Sacos a vácuo reduzem o volume em até 70%, mas não diminuem o peso em quilos — exige pesagem com balança portátil"
    ],
    freeAlternative:
      "Alternativa gratuita sem afiliado: Viajar usando uma mochila escolar/esportiva flexível que você já tem em casa (até 40x30x20 cm) aplicando a técnica de enrolar as roupas ('rolinho militar') e pesando na balança de banheiro antes de sair.",
    ctaLabel: "Ver Malas e Acessórios no Mercado Livre"
  }
];

const AFFILIATE_OVERRIDES_STORAGE_KEY = "mp_affiliate_overrides_v1";

export function getAffiliateOverrides(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(AFFILIATE_OVERRIDES_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveAffiliateOverrides(overrides: Record<string, string>): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(AFFILIATE_OVERRIDES_STORAGE_KEY, JSON.stringify(overrides));
  } catch {
    // ignore
  }
}

export function getPartnerById(id: string): AffiliatePartner | undefined {
  const partner = AFFILIATE_PARTNERS.find((p) => p.id === id);
  if (!partner) return undefined;
  const overrides = getAffiliateOverrides();
  if (overrides[id]) {
    return { ...partner, url: overrides[id] };
  }
  return partner;
}

export function buildAffiliateUrl(
  partnerIdOrRawUrl: string,
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    content?: string;
  }
): string {
  const overrides = getAffiliateOverrides();
  const partner = AFFILIATE_PARTNERS.find((p) => p.id === partnerIdOrRawUrl);
  let targetUrl = overrides[partnerIdOrRawUrl] || (partner ? partner.url : partnerIdOrRawUrl);

  if (!utm) return targetUrl;

  try {
    const urlObj = new URL(targetUrl);
    if (utm.source) urlObj.searchParams.set("utm_source", utm.source);
    if (utm.medium) urlObj.searchParams.set("utm_medium", utm.medium);
    if (utm.campaign) urlObj.searchParams.set("utm_campaign", utm.campaign);
    if (utm.content) urlObj.searchParams.set("utm_content", utm.content);
    return urlObj.toString();
  } catch {
    return targetUrl;
  }
}
