// Configuração Centralizada de Governança Editorial, AdSense e SEO - Malas Prontas

export interface EditorialAuthor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  specialties: string[];
  credentials: string;
}

export interface PageGovernanceRule {
  path: string;
  label: string;
  category: "Institucional" | "Ferramenta" | "Hub Regional" | "Hub Utilidade" | "Conversão / Afiliado" | "Sistema";
  adsenseAllowed: boolean;
  noindex: boolean;
  reason: string;
}

export const SITE_CONFIG = {
  siteName: "Malas Prontas",
  domain: "https://malasprontas737.com.br",
  contactEmail: "malasprontas737@gmail.com",
  youtubeUrl: "https://www.youtube.com/@canalmalasprontas",
  lastPriceConsultationDate: "Outubro de 2026",
  lastEditorialReviewDate: "12 de Outubro de 2026",
  priceVariationNotice:
    "Valores, taxas governamentais, franquias de bagagem e tarifas cambiais consultados em Outubro de 2026. Os preços de passagens aéreas, diárias de hospedagem, seguros e passeios sofrem variação dinâmica conforme antecedência da compra, sazonalidade, ocupação e câmbio do dia.",
  affiliateTransparencyBanner:
    "Transparência Editorial: Este guia contém links de parceiros afiliados verificados (identificados com rel='sponsored'). Se você contratar um serviço ou comprar um equipamento através deles, o Malas Prontas pode receber uma pequena comissão sem nenhum custo extra para você. Nossas recomendações são 100% independentes e sempre apresentamos alternativas gratuitas ou econômicas sem vínculo comercial.",
  adsenseGlobalEnabledDefault: false, // Ativável via /admin quando conta AdSense estiver pronta para exibição
  adsenseClientId: "ca-pub-0000000000000000",
};

export const EDITORIAL_TEAM: EditorialAuthor[] = [
  {
    id: "equipe-malas-prontas",
    name: "Equipe Editorial Malas Prontas",
    role: "Redação & Pesquisa de Planejamento de Viagens",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    bio: "Núcleo de pesquisa de roteiros, auditoria de custos reais e verificação de normas da ANAC, Polícia Federal, Receita Federal e Itamaraty para viajantes brasileiros.",
    specialties: [
      "Orçamento de Viagem & Câmbio",
      "Regras de Bagagem ANAC & IATA",
      "Documentação Internacional & Mercosul",
      "Roteiros Otimizados Dia a Dia"
    ],
    credentials: "Mais de 37 guias técnicos auditados com tabelas de custos reais e fontes governamentais oficiais."
  },
  {
    id: "lucas-mendes-logistica",
    name: "Lucas Mendes",
    role: "Especialista em Aviação Comercial, Milhas & Bagagem",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    bio: "Analista de tarifas aéreas, resolução ANAC nº 400/2016, direitos do passageiro e otimização de bagagem de mão de 10kg sem despacho.",
    specialties: [
      "Direitos do Passageiro (Resolução 400 ANAC)",
      "Emissão Inteligente e Tarifas Aéreas",
      "Engenharia de Mala de Bordo 10kg",
      "Aluguel de Carros & Seguros de Franquia"
    ],
    credentials: "Consultor de logística aérea e autor dos manuais de prevenção de taxas inesperadas em aeroportos."
  },
  {
    id: "camila-rocha-familia",
    name: "Camila Rocha",
    role: "Editora de Hospedagem, Seguro Viagem & Viagens em Família",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    bio: "Especialista em comparativos técnicos de apólices médicas internacionais (Tratado de Schengen e EUA), curadoria de hospedagens por perfil e logística com crianças.",
    specialties: [
      "Seguro Viagem & Coberturas Médicas DMHO",
      "Comparativo Hotel vs. Hostel vs. Temporada",
      "Viagens em Família & Documentação de Menores",
      "América do Sul & Primeira Viagem Internacional"
    ],
    credentials: "Responsável pela metodologia de avaliação de custo-benefício em hospedagem e proteção ao viajante."
  }
];

export const DEFAULT_GOVERNANCE_RULES: PageGovernanceRule[] = [
  {
    path: "/",
    label: "Página Inicial (Home)",
    category: "Institucional",
    adsenseAllowed: false,
    noindex: false,
    reason: "Página principal de navegação e descoberta; foco em velocidade e clareza sem poluição visual."
  },
  {
    path: "/destinos",
    label: "Catálogo Geral de Destinos",
    category: "Hub Regional",
    adsenseAllowed: true,
    noindex: false,
    reason: "Catálogo informativo; permite apenas 1 bloco discreto fora da área de busca."
  },
  {
    path: "/brasil",
    label: "Hub Viagens pelo Brasil",
    category: "Hub Regional",
    adsenseAllowed: true,
    noindex: false,
    reason: "Hub informativo de roteiros nacionais."
  },
  {
    path: "/america-do-sul",
    label: "Hub América do Sul",
    category: "Hub Regional",
    adsenseAllowed: true,
    noindex: false,
    reason: "Hub informativo de roteiros sul-americanos."
  },
  {
    path: "/internacional",
    label: "Hub Viagens Internacionais",
    category: "Hub Regional",
    adsenseAllowed: true,
    noindex: false,
    reason: "Hub informativo de destinos globais."
  },
  {
    path: "/primeira-viagem-internacional",
    label: "Hub Primeira Viagem Internacional",
    category: "Hub Utilidade",
    adsenseAllowed: true,
    noindex: false,
    reason: "Guia passo a passo educativo; AdSense permitido longe dos blocos de seguro/eSIM."
  },
  {
    path: "/economizar",
    label: "Hub Como Economizar na Viagem",
    category: "Hub Utilidade",
    adsenseAllowed: true,
    noindex: false,
    reason: "Conteúdo informativo de educação financeira para viagens."
  },
  {
    path: "/bagagem",
    label: "Hub Bagagem de Mão e Despachada",
    category: "Hub Utilidade",
    adsenseAllowed: true,
    noindex: false,
    reason: "Tabelas técnicas da ANAC e medidas; AdSense nunca deve competir com a vitrine de malas."
  },
  {
    path: "/documentos",
    label: "Hub Documentos, Passaporte e Vistos",
    category: "Hub Utilidade",
    adsenseAllowed: true,
    noindex: false,
    reason: "Guia puramente informativo de alta utilidade pública."
  },
  {
    path: "/seguro-viagem",
    label: "Hub Seguro Viagem Comparativo",
    category: "Conversão / Afiliado",
    adsenseAllowed: false,
    noindex: false,
    reason: "Página de alta intenção de contratação de seguro; AdSense bloqueado para não competir com comparador afiliado."
  },
  {
    path: "/ferramentas",
    label: "Central de Ferramentas Interativas",
    category: "Ferramenta",
    adsenseAllowed: false,
    noindex: false,
    reason: "Foco 100% em usabilidade das calculadoras e comparadores interativos."
  },
  {
    path: "/calculadora-viagem",
    label: "Calculadora de Custo Total e Diário",
    category: "Ferramenta",
    adsenseAllowed: false,
    noindex: false,
    reason: "Ferramenta interativa principal com CTAs de passagens e hospedagem."
  },
  {
    path: "/checklist",
    label: "Checklist Interativo da Mala",
    category: "Ferramenta",
    adsenseAllowed: false,
    noindex: false,
    reason: "Ferramenta imprimível de utilidade direta."
  },
  {
    path: "/checklists",
    label: "Central de Checklists Imprimíveis",
    category: "Ferramenta",
    adsenseAllowed: false,
    noindex: false,
    reason: "Pacotes de checklists prontos por tipo de viagem."
  },
  {
    path: "/roteiro-personalizado",
    label: "Planejador de Roteiro por Dias (IA)",
    category: "Ferramenta",
    adsenseAllowed: false,
    noindex: false,
    reason: "Aplicação interativa de geração de roteiros."
  },
  {
    path: "/vitrine",
    label: "Vitrine de Equipamentos de Viagem",
    category: "Conversão / Afiliado",
    adsenseAllowed: false,
    noindex: false,
    reason: "Página comercial de produtos afiliados; proibido exibir AdSense."
  },
  {
    path: "/ofertas",
    label: "Central de Ofertas e Parceiros Verificados",
    category: "Conversão / Afiliado",
    adsenseAllowed: false,
    noindex: false,
    reason: "Página de conversão direta em parceiros afiliados; AdSense desativado."
  },
  {
    path: "/sobre",
    label: "Sobre Nós & Equipe Editorial",
    category: "Institucional",
    adsenseAllowed: false,
    noindex: false,
    reason: "Página institucional de credibilidade (E-E-A-T)."
  },
  {
    path: "/metodologia-editorial",
    label: "Metodologia Editorial e Critérios",
    category: "Institucional",
    adsenseAllowed: false,
    noindex: false,
    reason: "Página de governança e metodologia de testes/preços."
  },
  {
    path: "/transparencia-editorial",
    label: "Transparência Editorial e Afiliados",
    category: "Institucional",
    adsenseAllowed: false,
    noindex: false,
    reason: "Página legal/institucional de ética e transparência."
  },
  {
    path: "/politica-de-privacidade",
    label: "Política de Privacidade (LGPD)",
    category: "Institucional",
    adsenseAllowed: false,
    noindex: false,
    reason: "Documento legal obrigatório."
  },
  {
    path: "/politica-de-cookies",
    label: "Política de Cookies",
    category: "Institucional",
    adsenseAllowed: false,
    noindex: false,
    reason: "Documento legal obrigatório de consentimento."
  },
  {
    path: "/termos-de-uso",
    label: "Termos de Uso",
    category: "Institucional",
    adsenseAllowed: false,
    noindex: false,
    reason: "Documento legal obrigatório."
  },
  {
    path: "/contato",
    label: "Fale Conosco",
    category: "Institucional",
    adsenseAllowed: false,
    noindex: false,
    reason: "Página de atendimento ao leitor."
  },
  {
    path: "/pix",
    label: "Página de Pagamento PIX",
    category: "Sistema",
    adsenseAllowed: false,
    noindex: true,
    reason: "Página transacional interna; bloqueada para AdSense e motores de busca (noindex)."
  },
  {
    path: "/admin",
    label: "Painel Administrativo (Afiliados, AdSense e SEO)",
    category: "Sistema",
    adsenseAllowed: false,
    noindex: true,
    reason: "Área restrita de gestão; noindex obrigatório e zero anúncios."
  },
  {
    path: "/admin/videos",
    label: "Estúdio de Roteiros de Vídeo (Admin)",
    category: "Sistema",
    adsenseAllowed: false,
    noindex: true,
    reason: "Ferramenta interna de produção; noindex obrigatório."
  }
];

const GOVERNANCE_STORAGE_KEY = "mp_governance_rules_v1";
const ADSENSE_GLOBAL_STORAGE_KEY = "mp_adsense_global_enabled_v1";

export function getGovernanceRules(): PageGovernanceRule[] {
  if (typeof window === "undefined") return DEFAULT_GOVERNANCE_RULES;
  try {
    const raw = window.localStorage.getItem(GOVERNANCE_STORAGE_KEY);
    if (!raw) return DEFAULT_GOVERNANCE_RULES;
    const saved: PageGovernanceRule[] = JSON.parse(raw);
    return DEFAULT_GOVERNANCE_RULES.map((def) => {
      const found = saved.find((s) => s.path === def.path);
      return found ? { ...def, adsenseAllowed: found.adsenseAllowed, noindex: found.noindex } : def;
    });
  } catch {
    return DEFAULT_GOVERNANCE_RULES;
  }
}

export function saveGovernanceRules(rules: PageGovernanceRule[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(GOVERNANCE_STORAGE_KEY, JSON.stringify(rules));
  } catch {
    // ignore
  }
}

export function isAdSenseGloballyEnabled(): boolean {
  if (typeof window === "undefined") return SITE_CONFIG.adsenseGlobalEnabledDefault;
  try {
    const raw = window.localStorage.getItem(ADSENSE_GLOBAL_STORAGE_KEY);
    if (raw === null) return SITE_CONFIG.adsenseGlobalEnabledDefault;
    return raw === "true";
  } catch {
    return SITE_CONFIG.adsenseGlobalEnabledDefault;
  }
}

export function setAdSenseGloballyEnabled(enabled: boolean): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(ADSENSE_GLOBAL_STORAGE_KEY, String(enabled));
  } catch {
    // ignore
  }
}
