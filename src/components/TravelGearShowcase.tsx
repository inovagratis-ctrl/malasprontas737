"use client";

import { useState } from "react";
import { Luggage, ShoppingBag, Star, ShieldCheck, Sparkles, Check, ExternalLink, Package, Backpack, Scale, Zap, Moon, Boxes, Radio } from "lucide-react";

interface Product {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  badge: string;
  badgeColor: string;
  rating: number;
  reviews: number;
  features: string[];
  affiliateUrl: string;
  store: "Mercado Livre";
}

const LUGGAGE_PRODUCTS: Product[] = [
  {
    id: "mala-1",
    title: "Mala de Viagem de Bordo 10kg ABS com Cadeado e Rodas 360°",
    subtitle: "Padrão Oficial ANAC (55x35x25cm) - Rígida e Ultrarresistente",
    image: "https://http2.mlstatic.com/D_NQ_NP_916146-MLB113462418987_062026-O.webp",
    badge: "Mais Vendida",
    badgeColor: "bg-amber-500",
    rating: 4.9,
    reviews: 1420,
    features: [
      "4 Rodas Duplas 360° com rolamento suave",
      "Estrutura rígida em ABS resistente a impactos",
      "Cadeado numérico de segurança embutido",
      "Aceita em todas as companhias aéreas (Gol, Latam, Azul)"
    ],
    affiliateUrl: "https://meli.la/25WLYqu",
    store: "Mercado Livre"
  },
  {
    id: "mala-2",
    title: "Mala de Viagem 10kg Rodas 360° Miami com Frasqueira Bege",
    subtitle: "Conjunto Completo: Mala de Bordo + Frasqueira de Mão",
    image: "https://http2.mlstatic.com/D_NQ_NP_875524-MLB94551087097_102025-O.webp",
    badge: "Kit com Frasqueira",
    badgeColor: "bg-blue-600",
    rating: 4.9,
    reviews: 890,
    features: [
      "Acompanha Frasqueira de mão combinando",
      "Design elegante com acabamento em listras",
      "Divisórias internas para maquiagem e cosméticos",
      "Material leve e super prático para embarque"
    ],
    affiliateUrl: "https://meli.la/1vk6eiU",
    store: "Mercado Livre"
  },
  {
    id: "mala-3",
    title: "Bolsa Mala de Mão 10kg Feminina de Bordo Grande Rosa",
    subtitle: "Mala de Mão Dobrável e Impermeável com Alça Tiracolo",
    image: "https://http2.mlstatic.com/D_NQ_NP_934875-MLA99588875934_122025-O.webp",
    badge: "Super Versátil",
    badgeColor: "bg-rose-500",
    rating: 4.8,
    reviews: 650,
    features: [
      "Compartimento separado para calçados ou roupas úmidas",
      "Encaixe traseiro para acoplar no puxador da mala de rodinha",
      "Tecido Oxford impermeável e resistente",
      "Cabe perfeitamente embaixo do assento do avião"
    ],
    affiliateUrl: "https://meli.la/1MHywT9",
    store: "Mercado Livre"
  },
  {
    id: "mala-4",
    title: "Bolsa Mala de Mão 10kg Feminina de Bordo Grande Vinho",
    subtitle: "Elegante, Espaçosa e Ideal como Item Pessoal",
    image: "https://http2.mlstatic.com/D_NQ_NP_741298-MLA99555232904_122025-O.webp",
    badge: "Top Avaliada",
    badgeColor: "bg-purple-600",
    rating: 5.0,
    reviews: 430,
    features: [
      "Excelente capacidade interna com múltiplos bolsos",
      "Alça de mão reforçada e alça de ombro removível",
      "Acabamento premium na cor vinho clássica",
      "Ótima para viagens curtas de fim de semana ou academia"
    ],
    affiliateUrl: "https://meli.la/2jDUdbc",
    store: "Mercado Livre"
  }
];

const VACUUM_BAG_PRODUCTS: Product[] = [
  {
    id: "vac-1",
    title: "Kit 10 Sacos a Vácuo + Bomba Reutilizável (P, M e G)",
    subtitle: "Comprime até 80% do Volume das Roupas para Viagem",
    image: "https://http2.mlstatic.com/D_NQ_NP_619796-MLA116585784105_082026-O.webp",
    badge: "O Mais Vendido",
    badgeColor: "bg-orange-600",
    rating: 4.9,
    reviews: 2150,
    features: [
      "Kit com 10 unidades em 3 tamanhos (70x110, 60x80 e 50x60 cm)",
      "Acompanha bomba manual compacta para levar na mala",
      "Válvula hermética tripla que não deixa o ar vazar",
      "Ideal para casacos, roupas de inverno e edredons"
    ],
    affiliateUrl: "https://meli.la/1j7pz2A",
    store: "Mercado Livre"
  },
  {
    id: "vac-2",
    title: "Kit com 10 Sacos a Vácuo 50x60 cm com Bomba para Viagem",
    subtitle: "Tamanho Perfeito para Roupas de Mala de Bordo 10kg",
    image: "https://http2.mlstatic.com/D_NQ_NP_790113-MLA114591999638_082026-O.webp",
    badge: "Tamanho Ideal",
    badgeColor: "bg-sky-600",
    rating: 4.9,
    reviews: 1340,
    features: [
      "10 sacos no tamanho padrão ideal para mala de mão (50x60 cm)",
      "Acompanha bomba de sucção manual de viagem",
      "Reduz até 3 vezes o volume das roupas",
      "Material resistente e reutilizável em várias viagens"
    ],
    affiliateUrl: "https://meli.la/1LNzbVY",
    store: "Mercado Livre"
  },
  {
    id: "vac-3",
    title: "Bomba de Ar Elétrica Portátil para Saco a Vácuo",
    subtitle: "Comprime seus Sacos a Vácuo em Segundos sem Esforço",
    image: "https://http2.mlstatic.com/D_NQ_NP_926001-MLB79771016062_102024-O.webp",
    badge: "Elétrica & Rápida",
    badgeColor: "bg-emerald-600",
    rating: 4.8,
    reviews: 820,
    features: [
      "Bomba elétrica compacta de alta sucção",
      "Esvazia e comprime os sacos em menos de 1 minuto",
      "Leve e portátil para levar no hotel ou pousada",
      "Compatível com a maioria dos sacos a vácuo com válvula"
    ],
    affiliateUrl: "https://meli.la/1MNgH7A",
    store: "Mercado Livre"
  },
  {
    id: "vac-4",
    title: "Kit 10 Sacos a Vácuo 50x60cm Otimização de Espaço + Bomba",
    subtitle: "Organização Completa para Viagens em Família ou Casal",
    image: "https://http2.mlstatic.com/D_NQ_NP_880669-MLB82630654414_032025-O.webp",
    badge: "Kit Econômico",
    badgeColor: "bg-purple-600",
    rating: 5.0,
    reviews: 960,
    features: [
      "10 unidades para separar roupas limpas e peças por dia",
      "Protege contra umidade, poeira, mofo e odores",
      "Zíper duplo com fecho deslizante de segurança",
      "O segredo para não pagar bagagem despachada"
    ],
    affiliateUrl: "https://meli.la/2B3VhGx",
    store: "Mercado Livre"
  }
];

const BACKPACK_PRODUCTS: Product[] = [
  {
    id: "mochila-1",
    title: "Mochila Notebook 17 Executiva Antifurto Impermeável Cadeado USB",
    subtitle: "Reforçada para Trabalho e Viagens - Modelo Masculino/Feminino",
    image: "https://http2.mlstatic.com/D_NQ_NP_872869-MLA115353303962_082026-O.webp",
    badge: "Mais Vendida",
    badgeColor: "bg-amber-500",
    rating: 4.9,
    reviews: 1890,
    features: [
      "Cadeado antifurto embutido com segredo",
      "Entrada USB externa para carregar celular",
      "Compartimento acolchoado para Notebook até 17 polegadas",
      "Tecido impermeável de alta resistência"
    ],
    affiliateUrl: "https://meli.la/1PYPZMU",
    store: "Mercado Livre"
  },
  {
    id: "mochila-2",
    title: "Mochila Notebook 17 Impermeável Anti Furto 45L Rincostar",
    subtitle: "Grande Capacidade 45 Litros - Cabe Roupas para 4 a 7 Dias",
    image: "https://http2.mlstatic.com/D_NQ_NP_659927-MLA113458290964_072026-O.webp",
    badge: "Super Capacidade 45L",
    badgeColor: "bg-blue-600",
    rating: 4.9,
    reviews: 1120,
    features: [
      "Capacidade gigante de 45 litros no padrão item pessoal",
      "Abertura estilo mala para fácil organização de roupas",
      "Alças ergonômicas acolchoadas anti-suor",
      "Costuras reforçadas para aguentar peso sem rasgar"
    ],
    affiliateUrl: "https://meli.la/1KacsLs",
    store: "Mercado Livre"
  },
  {
    id: "mochila-3",
    title: "Mochila Notebook 17 Impermeável Anti Furto 45L Executiva",
    subtitle: "Design Sofisticado para Viagens de Negócios e Turismo",
    image: "https://http2.mlstatic.com/D_NQ_NP_663618-MLA114373376480_082026-O.webp",
    badge: "Linha Executiva",
    badgeColor: "bg-emerald-600",
    rating: 4.8,
    reviews: 940,
    features: [
      "Bolsos secretos traseiros para passaporte e carteira",
      "Encaixe para acoplar no puxador da mala de rodinha",
      "Zíperes reforçados à prova de respingos",
      "Múltiplas divisórias para cabos, fones e documentos"
    ],
    affiliateUrl: "https://meli.la/1YUJTgz",
    store: "Mercado Livre"
  },
  {
    id: "mochila-4",
    title: "Mochila Feminina Antifurto Bolsa de Viagem + Alça Tiracolo",
    subtitle: "Abertura Traseira Antifurto de Segurança com Alça Multifuncional",
    image: "https://http2.mlstatic.com/D_NQ_NP_772014-MLB113994123573_072026-O.webp",
    badge: "Segurança Total",
    badgeColor: "bg-rose-500",
    rating: 5.0,
    reviews: 780,
    features: [
      "Abertura principal nas costas (impossível abrir por trás no transporte)",
      "Pode ser usada como mochila ou bolsa de ombro/tiracolo",
      "Leve, charmosa e muito espaçosa para passeios turísticos",
      "Tecido impermeável resistente a arranhões"
    ],
    affiliateUrl: "https://meli.la/1zuGWzD",
    store: "Mercado Livre"
  }
];

const SCALE_PRODUCTS: Product[] = [
  {
    id: "balanca-1",
    title: "Balança Digital Portátil para Malas até 50kg Hardline Prateada",
    subtitle: "Compacta, Elegante e com Alça Reforçada de Trava",
    image: "https://http2.mlstatic.com/D_NQ_NP_880048-MLA115787103079_082026-O.webp",
    badge: "Top Design",
    badgeColor: "bg-amber-500",
    rating: 4.9,
    reviews: 2450,
    features: [
      "Mede até 50kg com precisão de 10 gramas",
      "Alça de fita de nylon com trava metálica segura",
      "Display digital LCD iluminado para fácil leitura",
      "Função Tara (desconta o peso da própria mala/gancho)"
    ],
    affiliateUrl: "https://meli.la/1YPPHRA",
    store: "Mercado Livre"
  },
  {
    id: "balanca-2",
    title: "Balança Digital de Mão para Bagagem e Mala até 50kg c/ Gancho",
    subtitle: "A Mais Tradicional e Confiável - Compacta de Bolso",
    image: "https://http2.mlstatic.com/D_NQ_NP_838849-MLA105361815369_012026-O.webp",
    badge: "Mais Vendida",
    badgeColor: "bg-blue-600",
    rating: 4.9,
    reviews: 3120,
    features: [
      "Gancho em aço inox resistente para pesagem rápida",
      "Desligamento automático inteligente para economizar pilha",
      "Mede em Quilos (KG) e Libras (LB)",
      "Cabe em qualquer bolso ou compartimento da mala"
    ],
    affiliateUrl: "https://meli.la/1AqMkr2",
    store: "Mercado Livre"
  },
  {
    id: "balanca-3",
    title: "Balança Portátil Digital para Malas até 50kg Chrome Tech",
    subtitle: "Sensor de Alta Precisão para Nunca Pagar Excesso de Bagagem",
    image: "https://http2.mlstatic.com/D_NQ_NP_821504-MLA114030559984_072026-O.webp",
    badge: "Alta Precisão",
    badgeColor: "bg-emerald-600",
    rating: 4.8,
    reviews: 1480,
    features: [
      "Aviso de bateria fraca e indicador de sobrepeso",
      "Corpo ergonômico emborrachado confortável na mão",
      "Leve: pesa menos de 90 gramas",
      "Evita surpresas desagradáveis no check-in do aeroporto"
    ],
    affiliateUrl: "https://meli.la/1MFrozK",
    store: "Mercado Livre"
  },
  {
    id: "balanca-4",
    title: "Balança Portátil Digital de Mão Mala e Bagagem até 50kg LCD",
    subtitle: "Excelente Custo-Benefício para Levar em Toda Viagem",
    image: "https://http2.mlstatic.com/D_NQ_NP_787638-MLB83641878083_042025-O.webp",
    badge: "Custo-Benefício",
    badgeColor: "bg-purple-600",
    rating: 5.0,
    reviews: 890,
    features: [
      "Display iluminado com números grandes de fácil visualização",
      "Trava de peso automático ao estabilizar a medição",
      "Estrutura durável para aguentar malas pesadas",
      "Acessório obrigatório antes de sair de casa para o aeroporto"
    ],
    affiliateUrl: "https://meli.la/2E46i9G",
    store: "Mercado Livre"
  }
];

const ADAPTER_PRODUCTS: Product[] = [
  {
    id: "adaptador-1",
    title: "Kit 2 Adaptadores de Tomada Universal Viagem Bivolt SAMZHE",
    subtitle: "Compatível com +150 Países (EUA, Europa, Reino Unido, Ásia)",
    image: "https://http2.mlstatic.com/D_NQ_NP_606594-MLA114053452677_072026-O.webp",
    badge: "Kit Duplo",
    badgeColor: "bg-amber-500",
    rating: 4.9,
    reviews: 3840,
    features: [
      "Kit com 2 adaptadores completos para casal ou família",
      "Bivolt automático (110V a 250V) com trava de pinos",
      "Compatível com plugues dos EUA, Europa, UK, Austrália, Japão",
      "Proteção anti-choque e fusível de segurança integrado"
    ],
    affiliateUrl: "https://meli.la/27ngTTr",
    store: "Mercado Livre"
  },
  {
    id: "adaptador-2",
    title: "Adaptador de Tomada Universal Viagem Internacional SAMZHE",
    subtitle: "Conecte Celular, Notebook e Câmera em Qualquer País",
    image: "https://http2.mlstatic.com/D_NQ_NP_685058-MLA113679874577_062026-O.webp",
    badge: "Mais Vendido",
    badgeColor: "bg-blue-600",
    rating: 4.9,
    reviews: 2950,
    features: [
      "Pinos retráteis com sistema deslizante fácil de travar",
      "Tamanho super compacto para carregar na bolsa de mão",
      "Material antichamas e resistente a altas temperaturas",
      "Item obrigatório para viagens internacionais"
    ],
    affiliateUrl: "https://meli.la/2rituGA",
    store: "Mercado Livre"
  },
  {
    id: "adaptador-3",
    title: "Kit 3 Adaptadores de Tomada Universal Viagem – Kill Rex",
    subtitle: "Super Econômico para Quem Viaja com Vários Aparelhos",
    image: "https://http2.mlstatic.com/D_NQ_NP_623239-MLA113809804587_062026-O.webp",
    badge: "Super Kit 3x",
    badgeColor: "bg-emerald-600",
    rating: 4.8,
    reviews: 1670,
    features: [
      "3 adaptadores universais para carregar tudo simultaneamente",
      "Compatibilidade global com todos os padrões de tomada",
      "Luz LED indicadora de funcionamento e corrente elétrica",
      "Excelente custo-benefício para mochileiros e famílias"
    ],
    affiliateUrl: "https://meli.la/2bgKciY",
    store: "Mercado Livre"
  },
  {
    id: "adaptador-4",
    title: "Kit 2 Adaptador Universal Tomada Viagem Internacional Facilitech",
    subtitle: "Qualidade Premium com Pinos de Cobre de Alta Condutividade",
    image: "https://http2.mlstatic.com/D_NQ_NP_633185-MLA99984681445_112025-O.webp",
    badge: "Alta Condução",
    badgeColor: "bg-purple-600",
    rating: 5.0,
    reviews: 1120,
    features: [
      "Pinos reforçados que não entortam ao plugar na tomada",
      "Compatível com tomadas de 2 e 3 pinos",
      "Estrutura leve em ABS de alta densidade",
      "Garante que você nunca fique sem bateria no exterior"
    ],
    affiliateUrl: "https://meli.la/1FpkxaC",
    store: "Mercado Livre"
  }
];

const PILLOW_PRODUCTS: Product[] = [
  {
    id: "almofada-1",
    title: "Almofada de Viagem Ortopédica para Pescoço Dinossauro",
    subtitle: "Conforto Anatômico e Lúdico para Crianças e Adultos",
    image: "https://http2.mlstatic.com/D_NQ_NP_950969-MLB113861312553_062026-O.webp",
    badge: "Mais Fofa",
    badgeColor: "bg-emerald-600",
    rating: 4.9,
    reviews: 1540,
    features: [
      "Apoio cervical ergonômico que não deixa a cabeça cair",
      "Toque aveludado super macio e antialérgico",
      "Encaixe perfeito para cochilar em voos longos e carros",
      "Fecho de botão para prender na alça da mala"
    ],
    affiliateUrl: "https://meli.la/2BGHYiF",
    store: "Mercado Livre"
  },
  {
    id: "almofada-2",
    title: "Almofada de Viagem Capivara Apoio Cervical Bege",
    subtitle: "O Modelo Mais Querido da Internet com Máximo Conforto",
    image: "https://http2.mlstatic.com/D_NQ_NP_762517-MLB113478359177_062026-O.webp",
    badge: "Tendência Viral",
    badgeColor: "bg-amber-600",
    rating: 4.9,
    reviews: 2180,
    features: [
      "Espuma de alta densidade com suporte firme para o pescoço",
      "Design temático de Capivara super aconchegante",
      "Alivia a tensão muscular e dores na cervical em viagens",
      "Fácil de transportar preso na mochila"
    ],
    affiliateUrl: "https://meli.la/2P38sAp",
    store: "Mercado Livre"
  },
  {
    id: "almofada-3",
    title: "Travesseiro de Pescoço Almofada de Viagem Descanso Macio",
    subtitle: "Apoio 360° com Espuma Viscoelástica para Relaxamento",
    image: "https://http2.mlstatic.com/D_NQ_NP_692542-MLB114070783984_072026-O.webp",
    badge: "Mais Vendida",
    badgeColor: "bg-blue-600",
    rating: 4.8,
    reviews: 3420,
    features: [
      "Espuma com memória que se adapta perfeitamente ao pescoço",
      "Capa removível e lavável com zíper invisível",
      "Cordão com ajuste de pressão para firmeza personalizada",
      "Indispensável para voos noturnos e viagens de ônibus"
    ],
    affiliateUrl: "https://meli.la/1pxJeCJ",
    store: "Mercado Livre"
  },
  {
    id: "almofada-4",
    title: "Almofada Travesseiro de Pescoço Protetor Viagem Confortável",
    subtitle: "Design Ergonômico de Alta Densidade com Capa Respirável",
    image: "https://http2.mlstatic.com/D_NQ_NP_731773-MLB99681591982_122025-O.webp",
    badge: "Custo-Benefício",
    badgeColor: "bg-purple-600",
    rating: 5.0,
    reviews: 1290,
    features: [
      "Tecido respirável que não esquenta o pescoço",
      "Estrutura que mantém a coluna alinhada durante o sono",
      "Super leve e compacta para encaixar na bagagem de mão",
      "Ideal para relaxar sem acordar com torcicolo"
    ],
    affiliateUrl: "https://meli.la/2fT3Dor",
    store: "Mercado Livre"
  }
];

const NECESSAIRE_PRODUCTS: Product[] = [
  {
    id: "necessaire-1",
    title: "Organizador De Malas Bolsas De Viagem Kit Nécessaire 7 Peças",
    subtitle: "Conjunto Completo de Cubos Organizadores para Malas e Bolsas",
    image: "https://http2.mlstatic.com/D_NQ_NP_994646-MLB84767710151_052025-O.webp",
    badge: "Kit 7 Peças Completo",
    badgeColor: "bg-blue-600",
    rating: 4.9,
    reviews: 2890,
    features: [
      "Kit com 7 organizadores em diferentes tamanhos e formatos",
      "Separa roupas íntimas, calçados, cosméticos e cabos",
      "Tecido respirável em malha com fechamento em zíper duplo",
      "Mantém a mala impecavelmente arrumada durante toda a viagem"
    ],
    affiliateUrl: "https://meli.la/1PjuQiX",
    store: "Mercado Livre"
  },
  {
    id: "necessaire-2",
    title: "Kit 3 Nécessaires Feminina Maquiagem Cosméticos Viagem Rosa",
    subtitle: "Conjunto Impermeável e Lavável para Maquiagem e Higiene Pessoal",
    image: "https://http2.mlstatic.com/D_NQ_NP_617429-MLA100079700325_122025-O.webp",
    badge: "Mais Vendida",
    badgeColor: "bg-rose-500",
    rating: 4.9,
    reviews: 1750,
    features: [
      "Kit com 3 nécessaires em tamanhos P, M e G na cor rosa",
      "Material impermeável de alta durabilidade e fácil de limpar",
      "Visores transparentes para rápida localização dos cosméticos",
      "Protege as roupas da mala contra vazamentos acidentais"
    ],
    affiliateUrl: "https://meli.la/1cNg9sk",
    store: "Mercado Livre"
  },
  {
    id: "necessaire-3",
    title: "Nécessaire de Viagem Masculina e Feminina Impermeável Preto",
    subtitle: "Estojo Organizador Unissex com Múltiplos Compartimentos",
    image: "https://http2.mlstatic.com/D_NQ_NP_978095-MLA113612661155_062026-O.webp",
    badge: "Linha Unissex",
    badgeColor: "bg-stone-800",
    rating: 4.9,
    reviews: 1420,
    features: [
      "Múltiplas divisórias internas e bolsos com tela e zíper",
      "Tecido impermeável resistente a respingos e umidade de banheiros",
      "Alça de mão reforçada para fácil transporte no hotel",
      "Design sóbrio e elegante na cor preta clássica"
    ],
    affiliateUrl: "https://meli.la/1YN1MpR",
    store: "Mercado Livre"
  },
  {
    id: "necessaire-4",
    title: "Nécessaire de Viagem Masculina e Feminina Impermeável Cinza",
    subtitle: "Organizador Portátil para Cosméticos, Itens de Higiene e Remédios",
    image: "https://http2.mlstatic.com/D_NQ_NP_934989-MLA113908748341_062026-O.webp",
    badge: "Top Avaliada",
    badgeColor: "bg-amber-600",
    rating: 5.0,
    reviews: 980,
    features: [
      "Grande capacidade interna sem ocupar espaço excessivo na mala",
      "Material premium lavável e resistente ao uso diário",
      "Compartimentos inteligentes para frascos, escova e remédios",
      "Ideal para viagens a trabalho, férias e academia"
    ],
    affiliateUrl: "https://meli.la/19euzme",
    store: "Mercado Livre"
  }
];

const TAG_TRACKER_PRODUCTS: Product[] = [
  {
    id: "tag-1",
    title: "Mini Localizador Rastreador Smart Tag GPS com Cordão Chaveiro",
    subtitle: "Compatível com Android (Samsung, Motorola, Xiaomi) e Rede Google Encontre",
    image: "https://http2.mlstatic.com/D_NQ_NP_688002-MLA115581994404_092026-O.webp",
    badge: "Mais Vendida Android",
    badgeColor: "bg-blue-600",
    rating: 4.9,
    reviews: 2340,
    features: [
      "Compatível com a rede global Google 'Encontrar Meu Dispositivo'",
      "Acompanha cordão chaveiro para prender na mala ou mochila",
      "Localização em tempo real sem qualquer mensalidade",
      "Bateria de longa duração e aviso sonoro de proximidade"
    ],
    affiliateUrl: "https://meli.la/1AhU2zX",
    store: "Mercado Livre"
  },
  {
    id: "tag-2",
    title: "Mini Rastreador Portátil de Bagagem e Objetos GPS Android",
    subtitle: "Ultra Compacto para Esconder no Forro da Mala ou Mochila",
    image: "https://http2.mlstatic.com/D_NQ_NP_707905-MLB114487216201_072026-O.webp",
    badge: "Super Compacto",
    badgeColor: "bg-emerald-600",
    rating: 4.8,
    reviews: 1680,
    features: [
      "Tamanho moeda: cabe em qualquer bolso secreto ou forro da mala",
      "Rastreamento preciso contra extravios no aeroporto",
      "Conexão simplificada via Bluetooth e GPS integrado",
      "Alarme sonoro para encontrar a mala na esteira de bagagem"
    ],
    affiliateUrl: "https://meli.la/2Ex9KaS",
    store: "Mercado Livre"
  },
  {
    id: "tag-3",
    title: "Rastreador Xiaomi Smart Tag Localizador Google e Apple Find",
    subtitle: "Compatibilidade Dupla: Funciona em Android e iOS Apple 'Buscar'",
    image: "https://http2.mlstatic.com/D_NQ_NP_830770-MLB113419587993_062026-O.webp",
    badge: "Android & iPhone (iOS)",
    badgeColor: "bg-amber-500",
    rating: 5.0,
    reviews: 3150,
    features: [
      "Compatível com Apple Find My (Buscar) e Google Find Network",
      "Acabamento premium Xiaomi resistente a água e poeira",
      "Notificação automática se você esquecer a mala para trás",
      "Troca fácil de bateria tipo moeda com duração de até 1 ano"
    ],
    affiliateUrl: "https://meli.la/296uRhE",
    store: "Mercado Livre"
  },
  {
    id: "tag-4",
    title: "Mini Rastreador Localizador Smart Tag Compatível com iPhone (iOS)",
    subtitle: "Integração Nativa com o App 'Buscar' (Apple Find My) sem Instalar App",
    image: "https://http2.mlstatic.com/D_NQ_NP_654404-MLB109102836250_042026-O.webp",
    badge: "Certificado iOS / Apple",
    badgeColor: "bg-purple-600",
    rating: 4.9,
    reviews: 1920,
    features: [
      "Usa a rede de centenas de milhões de iPhones no mundo todo",
      "Não precisa de chip de celular nem assinatura mensal",
      "Rastreia sua bagagem em qualquer aeroporto do Brasil e do mundo",
      "Emite som alto para localizar a bagagem rapidamente"
    ],
    affiliateUrl: "https://meli.la/1tSmBsc",
    store: "Mercado Livre"
  }
];

export default function TravelGearShowcase() {
  const [activeTab, setActiveTab] = useState<"malas" | "vacuo" | "mochilas" | "balancas" | "adaptadores" | "almofadas" | "necessaires" | "tags">("malas");

  const getCurrentProducts = () => {
    switch (activeTab) {
      case "malas":
        return LUGGAGE_PRODUCTS;
      case "vacuo":
        return VACUUM_BAG_PRODUCTS;
      case "mochilas":
        return BACKPACK_PRODUCTS;
      case "balancas":
        return SCALE_PRODUCTS;
      case "adaptadores":
        return ADAPTER_PRODUCTS;
      case "almofadas":
        return PILLOW_PRODUCTS;
      case "necessaires":
        return NECESSAIRE_PRODUCTS;
      case "tags":
        return TAG_TRACKER_PRODUCTS;
    }
  };

  return (
    <section className="my-14">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
          <ShoppingBag className="w-3.5 h-3.5 text-amber-700" />
          Vitrine Recomendada Malas Prontas
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 tracking-tight">
          Equipamentos & Acessórios Recomendados para Viajar Leve
        </h2>
        <p className="text-stone-600 text-sm mt-2 leading-relaxed">
          Itens testados e aprovados que vão te ajudar a fazer as roupas de 7 dias caberem nos 10kg sem pagar taxas extras no aeroporto!
        </p>

        {/* Tabs de Seleção (Grid 4x2: 4 em cima, 4 em baixo) */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1.5 rounded-2xl bg-stone-100 border border-stone-200 max-w-4xl mx-auto">
          <button
            type="button"
            onClick={() => setActiveTab("malas")}
            className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "malas"
                ? "bg-white text-orange-700 shadow-sm border border-stone-200/80"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Luggage className="w-3.5 h-3.5 shrink-0" />
            <span>Malas 10kg ({LUGGAGE_PRODUCTS.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("vacuo")}
            className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "vacuo"
                ? "bg-white text-orange-700 shadow-sm border border-stone-200/80"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Package className="w-3.5 h-3.5 shrink-0" />
            <span>Sacos a Vácuo ({VACUUM_BAG_PRODUCTS.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("mochilas")}
            className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "mochilas"
                ? "bg-white text-orange-700 shadow-sm border border-stone-200/80"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Backpack className="w-3.5 h-3.5 shrink-0" />
            <span>Mochilas ({BACKPACK_PRODUCTS.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("balancas")}
            className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "balancas"
                ? "bg-white text-orange-700 shadow-sm border border-stone-200/80"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Scale className="w-3.5 h-3.5 shrink-0" />
            <span>Balanças ({SCALE_PRODUCTS.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("adaptadores")}
            className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "adaptadores"
                ? "bg-white text-orange-700 shadow-sm border border-stone-200/80"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Zap className="w-3.5 h-3.5 shrink-0" />
            <span>Adaptadores ({ADAPTER_PRODUCTS.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("almofadas")}
            className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "almofadas"
                ? "bg-white text-orange-700 shadow-sm border border-stone-200/80"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Moon className="w-3.5 h-3.5 shrink-0" />
            <span>Almofadas ({PILLOW_PRODUCTS.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("necessaires")}
            className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "necessaires"
                ? "bg-white text-orange-700 shadow-sm border border-stone-200/80"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Boxes className="w-3.5 h-3.5 shrink-0" />
            <span>Nécessaires ({NECESSAIRE_PRODUCTS.length})</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("tags")}
            className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === "tags"
                ? "bg-white text-orange-700 shadow-sm border border-stone-200/80"
                : "text-stone-600 hover:text-stone-900"
            }`}
          >
            <Radio className="w-3.5 h-3.5 shrink-0" />
            <span>Smart Tags ({TAG_TRACKER_PRODUCTS.length})</span>
          </button>
        </div>
      </div>

      {/* Grid de Produtos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {getCurrentProducts().map((prod) => (
          <div
            key={prod.id}
            className="bg-white rounded-3xl border border-stone-200/90 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
          >
            {/* Imagem Real do Mercado Livre + Badge */}
            <div className="relative h-56 sm:h-64 bg-stone-50 overflow-hidden flex items-center justify-center p-4">
              <img
                src={prod.image}
                alt={prod.title}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <span
                className={`absolute top-3 left-3 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md ${prod.badgeColor}`}
              >
                {prod.badge}
              </span>

              <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl shadow-md border border-stone-100 flex items-center gap-1 text-xs font-bold text-stone-800">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{prod.rating}</span>
                <span className="text-stone-600 font-normal">({prod.reviews})</span>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-base sm:text-lg font-extrabold text-stone-900 leading-snug group-hover:text-orange-600 transition-colors">
                  {prod.title}
                </h3>
                <p className="text-xs text-stone-700 mt-1 font-medium">
                  {prod.subtitle}
                </p>

                {/* Features */}
                <ul className="mt-4 space-y-2">
                  {prod.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-stone-600">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preço & CTA */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-stone-600 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Entrega Rápida</span>
                </div>

                <a
                  href={prod.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-stone-900 font-bold text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-md shadow-yellow-500/20 transition-all hover:scale-105 active:scale-95 shrink-0 cursor-pointer"
                >
                  <span>Ver Oferta no Mercado Livre</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Nota de Transparência */}
      <div className="mt-6 text-center text-xs text-stone-600 flex items-center justify-center gap-1.5">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>Preços e disponibilidade sujeitos a alteração no Mercado Livre. Comprando pelos links oficiais você apoia o canal sem pagar nada a mais por isso!</span>
      </div>
    </section>
  );
}
