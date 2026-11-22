export type PermissionStatus = "allowed" | "restricted" | "forbidden";

export interface TravelItemRule {
  id: string;
  name: string;
  category: "eletronicos" | "cosmeticos" | "alimentos" | "saude" | "ferramentas" | "artigos";
  categoryLabel: string;
  keywords: string[];
  carryOn: {
    status: PermissionStatus;
    badgeText: string;
    description: string;
  };
  checked: {
    status: PermissionStatus;
    badgeText: string;
    description: string;
  };
  regulatoryAgency: "ANAC / RBAC 175" | "IATA / DGR" | "ANAC / TSA" | "MAPA / Vigiagro" | "Polícia Federal" | "ANAC / IATA" | "TSA / ANAC" | "IATA / ANAC";
  officialRuleText: string;
  practicalAdvice: string;
}

export const ITEMS_ALLOWED_DATA: TravelItemRule[] = [
  {
    id: "powerbank",
    name: "Powerbank (Bateria Portátil / Carregador de Lítio)",
    category: "eletronicos",
    categoryLabel: "Eletrônicos & Baterias",
    keywords: ["bateria", "power bank", "carregador portátil", "litio", "celular", "anker", "xiaomi"],
    carryOn: {
      status: "allowed",
      badgeText: "OBRIGATÓRIO NA CABINE",
      description: "Permitido até 100 Wh (cerca de 27.000 mAh). Entre 100 Wh e 160 Wh necessita de autorização prévia da companhia."
    },
    checked: {
      status: "forbidden",
      badgeText: "PROIBIDO NO PORÃO",
      description: "PROIBIÇÃO SEVERA em todo o mundo. O risco de curto-circuito e incêndio por superaquecimento (thermal runaway) é incontrolável no porão de carga."
    },
    regulatoryAgency: "IATA / DGR",
    officialRuleText: "Baterias de íon-lítio sobressalentes e powerbanks só podem ser transportados na bagagem de mão, protegidos contra acionamento involuntário.",
    practicalAdvice: "NUNCA coloque sua bateria portátil na mala despachada. Se o raio-X do aeroporto detectar, sua mala será aberta e o item apreendido sem devolução."
  },
  {
    id: "chapinha",
    name: "Chapinha de Cabelo / Modelador / Babyliss",
    category: "eletronicos",
    categoryLabel: "Eletrônicos & Baterias",
    keywords: ["chapinha", "babyliss", "prancha", "alisador", "cabelo", "modelador", "taiff"],
    carryOn: {
      status: "allowed",
      badgeText: "PERMITIDO",
      description: "Pode levar livremente na mala de mão ou mochila se for elétrica convencional com fio."
    },
    checked: {
      status: "allowed",
      badgeText: "PERMITIDO",
      description: "Permitido na mala despachada. Certifique-se de que esteja 100% fria antes de guardar."
    },
    regulatoryAgency: "ANAC / RBAC 175",
    officialRuleText: "Aparelhos elétricos de cuidados pessoais sem cartuchos de gás são livres para transporte na cabine ou despachados.",
    practicalAdvice: "Atenção à voltagem! A maioria das chapinhas brasileiras é 110V ou 220V. Para Europa/EUA, verifique se a sua é bivolt automático (100-240V)."
  },
  {
    id: "secador-cabelo",
    name: "Secador de Cabelo",
    category: "eletronicos",
    categoryLabel: "Eletrônicos & Baterias",
    keywords: ["secador", "cabelo", "difusor", "taiff", "escova secadora"],
    carryOn: {
      status: "allowed",
      badgeText: "PERMITIDO",
      description: "Permitido na bagagem de mão, desde que caiba no limite de tamanho e peso."
    },
    checked: {
      status: "allowed",
      badgeText: "PERMITIDO",
      description: "Pode despachar normalmente entre as roupas para amortecer impactos."
    },
    regulatoryAgency: "ANAC / RBAC 175",
    officialRuleText: "Eletrodomésticos portáteis de uso pessoal são autorizados tanto na cabine quanto no porão.",
    practicalAdvice: "O mesmo vale para a escova secadora. Se o peso da sua mala de mão estiver apertado (perto de 10kg), prefira despachar bem enrolado em toalhas."
  },
  {
    id: "cigarro-eletronico",
    name: "Cigarro Eletrônico / Vape / Pod / E-Cig",
    category: "eletronicos",
    categoryLabel: "Eletrônicos & Baterias",
    keywords: ["vape", "pod", "cigarro eletronico", "juul", "vaporizador", "nicotina", "essencia"],
    carryOn: {
      status: "restricted",
      badgeText: "RESTRITO NA CABINE",
      description: "Permitido transportar apenas desligado junto ao passageiro. É expressamente proibido carregar e PROIBIDO usar a bordo."
    },
    checked: {
      status: "forbidden",
      badgeText: "TOTALMENTE PROIBIDO",
      description: "Proibido no porão em todas as companhias do mundo por risco de explosão de bateria."
    },
    regulatoryAgency: "ANAC / RBAC 175",
    officialRuleText: "Dispositivos eletrônicos para fumar (DEF) devem ser transportados exclusivamente na bagagem de mão ou no bolso do passageiro.",
    practicalAdvice: "No Brasil, a comercialização é proibida pela Anvisa. Não traga grandes quantidades de viagens ao exterior para não ser enquadrado em contrabando pela Receita Federal."
  },
  {
    id: "notebook",
    name: "Notebook / Laptop / iPad / Tablet",
    category: "eletronicos",
    categoryLabel: "Eletrônicos & Baterias",
    keywords: ["notebook", "laptop", "computador", "macbook", "dell", "tablet", "ipad"],
    carryOn: {
      status: "allowed",
      badgeText: "RECOMENDADO NA CABINE",
      description: "Leve sempre com você na mochila ou pasta de mão. No raio-X de aeroportos que não têm tomógrafos modernos, deve ser retirado da mochila e colocado na bandeja separada."
    },
    checked: {
      status: "restricted",
      badgeText: "NÃO RECOMENDADO",
      description: "As companhias aéreas não cobrem danos por quebra nem furto de eletrônicos de alto valor na mala despachada."
    },
    regulatoryAgency: "ANAC / RBAC 175",
    officialRuleText: "Equipamentos eletrônicos com baterias integradas podem ser levados na cabine. Recomenda-se não despachar itens frágeis e de alto valor.",
    practicalAdvice: "Tenha facilidade de tirar o notebook rapidamente no raio-X do aeroporto para não atrasar a fila de segurança."
  },
  {
    id: "desodorante-aerosol",
    name: "Desodorante Aerossol / Spray",
    category: "cosmeticos",
    categoryLabel: "Cosméticos & Higiene",
    keywords: ["desodorante", "aerosol", "spray", "rexona", "dove", "antitranspirante"],
    carryOn: {
      status: "restricted",
      badgeText: "RESTRITO POR TIPO DE VOO",
      description: "Voos Nacionais: até 300ml ou 300g por frasco (máximo de 4 frascos / 1,2kg no total). Voos Internacionais: MÁXIMO 100ml por frasco dentro do saquinho de 1L!"
    },
    checked: {
      status: "allowed",
      badgeText: "PERMITIDO ATÉ 2L",
      description: "Até 0,5kg ou 0,5L por recipiente, não excedendo 2kg ou 2L no total por passageiro. As válvulas devem ter tampa protetora."
    },
    regulatoryAgency: "ANAC / TSA",
    officialRuleText: "Artigos medicinais ou de higiene pessoal em aerossol são aceitos com restrições quantitativas rigorosas.",
    practicalAdvice: "Para voos internacionais, NÃO leve o desodorante aerossol padrão de 150ml na mala de mão. Ele será jogado no lixo no raio-X. Compre roll-on ou versão travel de até 100ml."
  },
  {
    id: "perfume",
    name: "Perfume / Colônia",
    category: "cosmeticos",
    categoryLabel: "Cosméticos & Higiene",
    keywords: ["perfume", "colonia", "fragrancia", "eau de toilette", "parfum", "vidro"],
    carryOn: {
      status: "restricted",
      badgeText: "RESTRITO EM INTERNACIONAIS",
      description: "Nacional: frasco de até 300ml. Internacional: frasco de capacidade máxima de 100ml no saquinho transparente lacrado."
    },
    checked: {
      status: "allowed",
      badgeText: "PERMITIDO (BEM PROTEGIDO)",
      description: "Pode despachar frascos maiores, somando até 2 litros de artigos de higiene e cosméticos por pessoa."
    },
    regulatoryAgency: "ANAC / TSA",
    officialRuleText: "Líquidos em frascos acima de 100ml são proibidos na cabine em voos internacionais, mesmo que o volume interno seja pequeno.",
    practicalAdvice: "Se comprou perfume na loja Duty Free (Free Shop) após passar pelo raio-X, a loja entrega em um saco plástico inviolável lacrado (STEB). Mantenha fechado até o destino final, especialmente se tiver conexões!"
  },
  {
    id: "protetor-solar",
    name: "Protetor Solar / Hidratante Facial e Corporal",
    category: "cosmeticos",
    categoryLabel: "Cosméticos & Higiene",
    keywords: ["protetor solar", "filtro solar", "creme", "hidratante", "locao", "sundown", "laroche"],
    carryOn: {
      status: "restricted",
      badgeText: "INTERNACIONAL: ATÉ 100ML",
      description: "Cremes, pastas e loções são tratados como líquidos pela segurança aeronáutica. Em voos internacionais, frascos individuais de até 100ml."
    },
    checked: {
      status: "allowed",
      badgeText: "PERMITIDO",
      description: "Permitido sem o limite de 100ml. Vede bem a tampa com fita crepe ou saco vedado para a pressão da cabine não estourar a embalagem."
    },
    regulatoryAgency: "ANAC / TSA",
    officialRuleText: "Substâncias de consistência semelhante a líquidos, como géis, pastas e loções, estão sujeitas à regra dos líquidos internacionais.",
    practicalAdvice: "Compre kits de frascos de silicone para viagem de 60ml a 80ml e transfira uma porção do seu protetor solar para a mala de mão."
  },
  {
    id: "pasta-dente",
    name: "Pasta de Dente / Creme Dental",
    category: "cosmeticos",
    categoryLabel: "Cosméticos & Higiene",
    keywords: ["pasta de dente", "creme dental", "colgate", "oral-b", "sensodyne", "gel dental"],
    carryOn: {
      status: "restricted",
      badgeText: "CONTA COMO LÍQUIDO",
      description: "Nacional: permitido normal. Internacional: o tubo deve ser de no máximo 100g/100ml e entrar no saquinho transparente de 1L."
    },
    checked: {
      status: "allowed",
      badgeText: "PERMITIDO",
      description: "Pode despachar qualquer tamanho."
    },
    regulatoryAgency: "ANAC / TSA",
    officialRuleText: "Cremes dentais entram na categoria de substâncias pastosas com restrição internacional de 100ml.",
    practicalAdvice: "Tubo grande de 180g quase vazio NÃO passa no raio-X internacional. O que a segurança olha é o tamanho impresso no tubo, não o quanto sobrou dentro!"
  },
  {
    id: "shampoo",
    name: "Shampoo e Condicionador",
    category: "cosmeticos",
    categoryLabel: "Cosméticos & Higiene",
    keywords: ["shampoo", "condicionador", "mascara capilar", "oleo de cabelo", "creme de pentear"],
    carryOn: {
      status: "restricted",
      badgeText: "MÁXIMO 100ML NO EXTERIOR",
      description: "Nacional: frascos normais permitidos. Internacional: apenas frascos individuais de até 100ml que caibam no saco plástico transparente."
    },
    checked: {
      status: "allowed",
      badgeText: "PERMITIDO",
      description: "Permitido na mala despachada. Dica: coloque dentro de um saquinho ziploc para evitar vazamentos na roupa devido à despressurização."
    },
    regulatoryAgency: "ANAC / TSA",
    officialRuleText: "Líquidos, géis e aerossóis em voos internacionais devem ser acondicionados em frascos de até 100ml.",
    practicalAdvice: "Shampoos em barra sólidos (soap bar) são excelentes para quem viaja só com mala de mão: não contam como líquido e não vazam nunca."
  },
  {
    id: "aparelho-barbear",
    name: "Aparelho de Barbear Descartável (Gilete / Mach3)",
    category: "cosmeticos",
    categoryLabel: "Cosméticos & Higiene",
    keywords: ["gilete", "barbeador", "prestobarba", "lamina", "mach3", "bic", "depilador"],
    carryOn: {
      status: "allowed",
      badgeText: "PERMITIDO NA MÃO",
      description: "Permitido na cabine se a lâmina for fundida/embutida em suporte plástico protetor (descartável ou refil tipo Mach3/Venus)."
    },
    checked: {
      status: "allowed",
      badgeText: "PERMITIDO",
      description: "Permitido sem restrições na mala despachada."
    },
    regulatoryAgency: "ANAC / TSA",
    officialRuleText: "Lâminas descartáveis de segurança com cabeça embutida em plástico são permitidas na bagagem de mão.",
    practicalAdvice: "O que é terminantemente proibido na cabine são navalhas clássicas de barbeiro ou lâminas soltas avulsas de barbear."
  },
  {
    id: "lamina-solta",
    name: "Lâminas de Barbear Soltas / Navalhas / Estilete",
    category: "ferramentas",
    categoryLabel: "Ferramentas & Lâminas",
    keywords: ["lamina solta", "navalha", "estilete", "bisturi", "gilete antiga"],
    carryOn: {
      status: "forbidden",
      badgeText: "PROIBIDO NA CABINE",
      description: "Considerado objeto cortante com potencial perfurante perigoso."
    },
    checked: {
      status: "allowed",
      badgeText: "PERMITIDO NO PORÃO",
      description: "Deve estar embalado de forma segura para não ferir funcionários que manuseiam a bagagem."
    },
    regulatoryAgency: "ANAC / RBAC 175",
    officialRuleText: "Artigos com lâminas soltas, estiletes e navalhas não podem ser transportados na bagagem de mão.",
    practicalAdvice: "Se você faz barba com navalhete clássico, despache as lâminas ou compre uma caixinha no supermercado da cidade de destino."
  },
  {
    id: "cortador-unha",
    name: "Cortador de Unha e Lixa de Papel/Metal",
    category: "cosmeticos",
    categoryLabel: "Cosméticos & Higiene",
    keywords: ["cortador de unha", "lixa", "lixa de unha", "aparador"],
    carryOn: {
      status: "allowed",
      badgeText: "PERMITIDO",
      description: "Cortador de unha tradicional sem faca retrátil e lixas comuns de unha são permitidos no raio-X."
    },
    checked: {
      status: "allowed",
      badgeText: "PERMITIDO",
      description: "Totalmente permitido despachado."
    },
    regulatoryAgency: "ANAC / TSA",
    officialRuleText: "Utensílios de higiene sem corte perigoso ou lâminas expostas são liberados para a cabine.",
    practicalAdvice: "Cuidado apenas com cortadores antigos que tenham aquela faquinha pontuda dobrável embutida: o agente do raio-X pode solicitar remoção da faca."
  },
  {
    id: "alicate-cuticula",
    name: "Alicate de Cutícula / Pinça",
    category: "cosmeticos",
    categoryLabel: "Cosméticos & Higiene",
    keywords: ["alicate", "cuticula", "pinca", "sobrancelha", "mundial"],
    carryOn: {
      status: "restricted",
      badgeText: "PINÇA SIM / ALICATE DEPENDE",
      description: "Pinça de sobrancelha: 100% permitida na cabine. Alicate de cutícula: a ANAC permite se a ponta cortante tiver menos de 6cm, porém muitos aeroportos internacionais barram pela ponta metálica afiada."
    },
    checked: {
      status: "allowed",
      badgeText: "RECOMENDADO DESPACHAR",
      description: "Despache o alicate de cutícula para evitar qualquer discussão com o operador de raio-X."
    },
    regulatoryAgency: "ANAC / TSA",
    officialRuleText: "Instrumentos perfurocortantes com extremidades afiadas podem ser retidos a critério do agente de segurança do aeroporto.",
    practicalAdvice: "Para não arriscar perder seu alicate Mundial caro no raio-X, coloque-o na nécessaire da mala despachada sempre que despachar mala."
  },
  {
    id: "tesourinha-unha",
    name: "Tesourinha de Unha (Ponta Arredondada vs. Reta)",
    category: "cosmeticos",
    categoryLabel: "Cosméticos & Higiene",
    keywords: ["tesoura", "tesourinha", "corte", "unha"],
    carryOn: {
      status: "restricted",
      badgeText: "ATÉ 6CM DE LÂMINA",
      description: "Pela norma ANAC e TSA, tesouras com lâminas de até 6cm medidas a partir do eixo/articulação são permitidas, de preferência com pontas arredondadas."
    },
    checked: {
      status: "allowed",
      badgeText: "PERMITIDO",
      description: "Qualquer tesoura doméstica ou profissional pode ser despachada no porão."
    },
    regulatoryAgency: "ANAC / TSA",
    officialRuleText: "Tesouras com lâminas menores que 6cm a contar do pivô são admitidas na inspeção de raio-X.",
    practicalAdvice: "Tesouras escolares infantis de ponta redonda passam sem problemas. Tesouras com ponta fina e afiada podem ser retidas dependendo do humor do operador."
  },
  {
    id: "garrafa-agua",
    name: "Garrafa de Água / Squeeze / Refrigerante",
    category: "alimentos",
    categoryLabel: "Alimentos & Bebidas",
    keywords: ["agua", "garrafa", "garrafa termica", "stanley", "refrigerante", "squeeze", "suco"],
    carryOn: {
      status: "restricted",
      badgeText: "PROIBIDO CHEIA NO RAIO-X",
      description: "Garrafas cheias de líquidos acima de 100ml não passam pelo raio-X de voos internacionais e nem com bebidas abertas no controle de segurança."
    },
    checked: {
      status: "allowed",
      badgeText: "PERMITIDO",
      description: "Garrafas fechadas podem ir na mala despachada."
    },
    regulatoryAgency: "ANAC / TSA",
    officialRuleText: "Líquidos não inspecionados são barrados na entrada da sala de embarque.",
    practicalAdvice: "TRUQUE DE OURO DO VIAJANTE: Leve sua garrafa térmica ou squeeze 100% VAZIA pela inspeção de raio-X. Depois de passar o controle, encha gratuitamente nos bebedouros da sala de embarque!"
  },
  {
    id: "vinho-bebidas",
    name: "Vinho, Cerveja e Bebidas Alcoólicas",
    category: "alimentos",
    categoryLabel: "Alimentos & Bebidas",
    keywords: ["vinho", "cerveja", "bebida alcoolica", "whisky", "cachaca", "vodka", "garrafa de vinho"],
    carryOn: {
      status: "restricted",
      badgeText: "NACIONAL ATÉ 5L / EXTERIOR NO FREE SHOP",
      description: "Voos Nacionais: até 5 litros de bebidas alcoólicas por passageiro com teor de 24% a 70%, em embalagens de fábrica lacradas de até 1L cada. Voos Internacionais: apenas se compradas no Free Shop após o raio-X e lacradas no saco oficial STEB."
    },
    checked: {
      status: "allowed",
      badgeText: "ATÉ 5 LITROS DESPACHADOS",
      description: "Permitido despachar até 5L por passageiro (teor 24% a 70%) com lacre original. Bebidas com teor alcoólico acima de 70% são PROIBIDAS por serem inflamáveis perigosos."
    },
    regulatoryAgency: "ANAC / RBAC 175",
    officialRuleText: "Transporte de bebidas alcoólicas regulamentado pela ANAC com limite de 5L entre 24% e 70% de teor por passageiro.",
    practicalAdvice: "Use protetores infláveis de garrafa ou plástico-bolha reforçado ao despachar vinho. Uma garrafa quebrada manchará e inutilizará todas as roupas da sua mala."
  },
  {
    id: "queijo-salame",
    name: "Queijos, Embutidos (Salame), Carnes e Doces",
    category: "alimentos",
    categoryLabel: "Alimentos & Bebidas",
    keywords: ["queijo", "salame", "carne", "presunto", "embutido", "doce de leite", "goiabada", "comida"],
    carryOn: {
      status: "restricted",
      badgeText: "NACIONAL OK / EXTERIOR MUITO RESTRITO",
      description: "Voos Nacionais: permitido normalmente (se queijo fresco tiver soro/líquido, embale bem). Voos Internacionais: PROIBIDO entrar nos EUA, Europa e outros países com carnes frescas, embutidos ou queijos artesanais sem fiscalização federal pelo controle fitossanitário!"
    },
    checked: {
      status: "restricted",
      badgeText: "CUIDADO COM ALFÂNDEGAS",
      description: "Na chegada internacional, cães farejadores detectam alimentos orgânicos no porão. Não declarar pode render multa de até $ 1.000 USD nos EUA!"
    },
    regulatoryAgency: "MAPA / Vigiagro",
    officialRuleText: "Produtos de origem animal e vegetal sem selo de inspeção oficial são retidos pelos órgãos agropecuários nas fronteiras.",
    practicalAdvice: "Alimentos industrializados hermeticamente fechados (ex: doce de leite em lata, biscoitos, chocolates lacrados) costumam ser liberados, mas sempre declare na alfândega ao chegar."
  },
  {
    id: "remedios-comprimidos",
    name: "Medicamentos em Comprimidos / Cápsulas / Cartelas",
    category: "saude",
    categoryLabel: "Medicamentos & Saúde",
    keywords: ["remedio", "comprimido", "dorflex", "dipirona", "paracetamol", "capsula", "farmacia", "antialergico"],
    carryOn: {
      status: "allowed",
      badgeText: "LEVE SEMPRE NA CABINE",
      description: "Totalmente permitido e fortemente recomendado para não ficar sem medicação em caso de atraso ou extravio da mala despachada."
    },
    checked: {
      status: "allowed",
      badgeText: "PERMITIDO (MAS EVITE)",
      description: "Permitido no porão, porém se a mala for perdida ou atrasar dias, você ficará sem seu tratamento de saúde."
    },
    regulatoryAgency: "ANAC / TSA",
    officialRuleText: "Medicamentos para uso pessoal são liberados na cabine em quantidades condizentes com a duração da viagem.",
    practicalAdvice: "Mantenha os medicamentos nas caixas originais com a bula. Se tomar remédio de uso contínuo, leve na mala de mão quantidade para a viagem toda + 3 dias de reserva."
  },
  {
    id: "remedios-controlados",
    name: "Medicamentos Líquidos / Injetáveis / Receita Controlada",
    category: "saude",
    categoryLabel: "Medicamentos & Saúde",
    keywords: ["insulina", "seringa", "agulha", "xarope", "colirio", "antibiotico", "tarja preta", "receita"],
    carryOn: {
      status: "restricted",
      badgeText: "ISENTO DO LIMITE DE 100ML",
      description: "Medicamentos líquidos essenciais PODEM exceder 100ml na cabine, desde que apresentada a receita médica com nome do passageiro na inspeção do raio-X."
    },
    checked: {
      status: "allowed",
      badgeText: "PERMITIDO",
      description: "Permitido, mas insulinas e certos biológicos NÃO podem congelar no porão de carga da aeronave!"
    },
    regulatoryAgency: "ANAC / TSA",
    officialRuleText: "Medicamentos essenciais acompanhados de prescrição médica têm isenção das limitações métricas de líquidos.",
    practicalAdvice: "Insulina NUNCA deve ser despachada (temperatura no porão pode estragar a proteína). Leve na cabine em bolsa térmica com gelo em gel reutilizável (gel pack sólido)."
  },
  {
    id: "termometro",
    name: "Termômetro Clínico (Digital vs. Mercúrio)",
    category: "saude",
    categoryLabel: "Medicamentos & Saúde",
    keywords: ["termometro", "febre", "mercurio", "digital"],
    carryOn: {
      status: "restricted",
      badgeText: "DIGITAL SIM / MERCÚRIO NÃO",
      description: "Termômetro digital: livre na cabine e porão. Termômetro com mercúrio líquido: PROIBIDO na cabine pela IATA (risco de corrosão química do alumínio da aeronave)."
    },
    checked: {
      status: "allowed",
      badgeText: "MERCÚRIO SÓ 1 NO PORÃO",
      description: "Termômetro de mercúrio permitido apenas 1 por passageiro na mala despachada, dentro de tubo protetor rígido."
    },
    regulatoryAgency: "IATA / DGR",
    officialRuleText: "O mercúrio é substância perigosa corrosiva para ligas de aviação e tem restrição severa a bordo.",
    practicalAdvice: "Viaje apenas com termômetro digital comum com bateria de botão. Evita 100% de qualquer dor de cabeça aeroportuária."
  },
  {
    id: "guarda-chuva",
    name: "Guarda-Chuva / Sombrinha",
    category: "artigos",
    categoryLabel: "Artigos & Conforto",
    keywords: ["guarda-chuva", "sombrinha", "chuva"],
    carryOn: {
      status: "restricted",
      badgeText: "DOBRÁVEL SIM / PONTA DE METAL NÃO",
      description: "Sombrinhas e guarda-chuvas dobráveis comuns são liberados. Guarda-chuvas longos do tipo bengala com ponteira pontiaguda de ferro/lança são proibidos na cabine."
    },
    checked: {
      status: "allowed",
      badgeText: "PERMITIDO",
      description: "Qualquer tipo pode ser despachado no porão."
    },
    regulatoryAgency: "ANAC / TSA",
    officialRuleText: "Objetos pontiagudos capazes de ser usados como arma são restritos na cabine de passageiros.",
    practicalAdvice: "Prefira modelos dobráveis pequenos que caibam inteiros dentro da mochila ou na mala de mão sem deixar partes metálicas sobressalentes."
  },
  {
    id: "isqueiro-fosforos",
    name: "Isqueiro Comum e Fósforos",
    category: "artigos",
    categoryLabel: "Artigos & Conforto",
    keywords: ["isqueiro", "bic", "fosforo", "fogo", "fumo"],
    carryOn: {
      status: "restricted",
      badgeText: "1 UNIDADE JUNTO AO CORPO",
      description: "Apenas 1 isqueiro pequeno comum (tipo Bic) ou 1 caixa de fósforos de segurança, transportado NO BOLSO da roupa do passageiro (não dentro da mala solta!)."
    },
    checked: {
      status: "forbidden",
      badgeText: "PROIBIDO NA MALA DESPACHADA",
      description: "Terminantemente proibido despachar isqueiros no porão. Isqueiros maçarico (torch lighters) e fluído de recarga são proibidos em qualquer lugar da aeronave."
    },
    regulatoryAgency: "IATA / DGR",
    officialRuleText: "Isqueiros de gás liquefeito para uso individual devem ser portados na pessoa do passageiro.",
    practicalAdvice: "Não deixe o isqueiro dentro da mochila de mão ao passar pelo scanner corporal. Coloque na bandeja com moedas e carteira."
  },
  {
    id: "drone",
    name: "Drone e Baterias Sobressalentes",
    category: "eletronicos",
    categoryLabel: "Eletrônicos & Baterias",
    keywords: ["drone", "dji", "mini", "mavic", "aereo", "camera aerea"],
    carryOn: {
      status: "allowed",
      badgeText: "LEVE AS BATERIAS NA CABINE",
      description: "Todas as baterias de lítio do drone DEVEM ir na mala de mão com os terminais elétricos protegidos (ou dentro de bolsa antichamas LiPo Safe Bag)."
    },
    checked: {
      status: "restricted",
      badgeText: "SÓ O CORPO SEM BATERIA",
      description: "O corpo do drone (sem bateria conectada e sem baterias soltas) pode ser despachado, mas arrisca quebra por impacto."
    },
    regulatoryAgency: "IATA / ANAC",
    officialRuleText: "Baterias de drones e aeromodelos enquadram-se na regulamentação de baterias de lítio sobressalentes na cabine.",
    practicalAdvice: "Consulte a legislação de voo de drones do país de destino. Países como Egito, Cuba e Nicarágua proíbem a entrada de drones de turistas e apreendem no aeroporto!"
  },
  {
    id: "suplementos-po",
    name: "Suplementos em Pó (Whey Protein, Creatina)",
    category: "alimentos",
    categoryLabel: "Alimentos & Bebidas",
    keywords: ["whey", "creatina", "suplemento", "po", "proteina", "termogenico"],
    carryOn: {
      status: "restricted",
      badgeText: "ATENÇÃO EM VOOS PARA OS EUA",
      description: "Voos Nacionais: livre. Voos com destino aos EUA: qualquer substância em pó com mais de 350ml (12 oz) na bagagem de mão passa por inspeção secundária de explosivos no portão."
    },
    checked: {
      status: "allowed",
      badgeText: "PERMITIDO DESPACHAR",
      description: "Permitido no porão. Mantenha no pote original lacrado com o rótulo legível para evitar suspeitas de drogas ilícitas."
    },
    regulatoryAgency: "TSA / ANAC",
    officialRuleText: "Substâncias pulverulentas acima de 350g em voos para os EUA estão sujeitas a triagem avançada de segurança.",
    practicalAdvice: "Para não ter seu Whey ou Creatina abertos e testados quimicamente na sala de embarque internacional, despache o pote grande na mala despachada."
  },
  {
    id: "canivete-suico",
    name: "Canivete Suíço / Canivete Multiuso",
    category: "ferramentas",
    categoryLabel: "Ferramentas & Lâminas",
    keywords: ["canivete", "victorinox", "multiuso", "faca de bolso", "ferramenta"],
    carryOn: {
      status: "forbidden",
      badgeText: "PROIBIDO NA CABINE",
      description: "Mesmo canivetes pequenos são apreendidos na hora no raio-X por conterem lâminas metálicas afiadas."
    },
    checked: {
      status: "allowed",
      badgeText: "PERMITIDO DESPACHADO",
      description: "Pode despachar na mala registrada sem nenhum problema."
    },
    regulatoryAgency: "ANAC / RBAC 175",
    officialRuleText: "Canivetes com lâminas de qualquer comprimento são categorizados como artigos perigosos na cabine.",
    practicalAdvice: "Milhares de canivetes caros da Victorinox são apreendidos todo mês nos aeroportos porque os viajantes esquecem no chaveiro da mochila. Deixe na mala despachada antes do check-in!"
  },
  {
    id: "bastonete-selfie",
    name: "Bastão de Selfie / Tripé de Câmera Portátil",
    category: "eletronicos",
    categoryLabel: "Eletrônicos & Baterias",
    keywords: ["pau de selfie", "bastao de selfie", "tripe", "gorillapod", "gopro"],
    carryOn: {
      status: "restricted",
      badgeText: "COMPACTO SIM / TRIPÉ PESADO NÃO",
      description: "Bastões de selfie comuns retráteis e mini tripés flexíveis (Gorillapod) são aceitos. Tripés profissionais grandes e pesados de metal podem ser barrados como objeto contundente."
    },
    checked: {
      status: "allowed",
      badgeText: "PERMITIDO",
      description: "Tripés grandes devem ir despachados na mala ou em bolsa de transporte própria."
    },
    regulatoryAgency: "ANAC / TSA",
    officialRuleText: "Tripés pesados de alumínio ou carbono podem ser interpretados como armas contundentes em alguns postos de triagem internacional.",
    practicalAdvice: "Se viajar apenas com mala de mão, use mini tripés plásticos retráteis com menos de 30cm fechados."
  }
];
