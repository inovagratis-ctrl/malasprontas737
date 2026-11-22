export interface PackingItem {
  id: string;
  name: string;
  quantity?: number;
  unit?: string;
  estimatedWeightGrams?: number; // Peso estimado unitário em gramas
  category: "documentos" | "vestuario" | "calcados" | "higiene" | "eletronicos" | "farmacia" | "bordo";
  categoryLabel: string;
  checked?: boolean;
  essential: boolean;
  tip?: string;
}

export interface PackingPlanParams {
  destinationType: "praia" | "cidade" | "frio" | "aventura" | "negocios";
  days: number;
  hasLaundry: boolean;
  profile: "feminino" | "masculino" | "neutro";
}

export function generateSmartPackingList(params: PackingPlanParams): PackingItem[] {
  const { destinationType, days, hasLaundry, profile } = params;

  // Se tem lavanderia, calculamos roupas para rotação de 5 a 6 dias para caber com folga na mala de 10-12kg
  const effectiveDays = hasLaundry ? Math.min(days, 5) : Math.min(days, 12);

  const items: PackingItem[] = [];

  // 1. DOCUMENTOS & FINANÇAS (~250g no total)
  items.push({
    id: "doc-passaporte",
    name: "Passaporte válido ou RG recente (emissão nos últimos 10 anos)",
    quantity: 1,
    unit: "unidade",
    estimatedWeightGrams: 50,
    category: "documentos",
    categoryLabel: "Documentos & Dinheiro",
    essential: true,
    tip: "Para América do Sul (Mercosul), RG em bom estado; para o Espaço Schengen, passaporte válido por pelo menos 3 meses além da data prevista de saída."
  });
  items.push({
    id: "doc-seguro",
    name: "Comprovante de Seguro Viagem com canais de atendimento 24h",
    quantity: 1,
    unit: "cópia",
    estimatedWeightGrams: 20,
    category: "documentos",
    categoryLabel: "Documentos & Dinheiro",
    essential: true,
    tip: "Altamente recomendado para o exterior: atendimentos hospitalares de urgência nos EUA e Europa podem custar milhares de dólares/euros para estrangeiros."
  });
  items.push({
    id: "doc-cartoes",
    name: "Cartão de Débito Internacional (Wise / Nomad) + Cartão de Crédito físico",
    quantity: 2,
    unit: "cartões",
    estimatedWeightGrams: 30,
    category: "documentos",
    categoryLabel: "Documentos & Dinheiro",
    essential: true,
    tip: "Habilite o aviso de viagem no app e leve pelo menos 2 opções de bandeiras diferentes."
  });
  items.push({
    id: "doc-hospedagem",
    name: "Comprovantes de hospedagem e bilhete aéreo de retorno salvos offline",
    category: "documentos",
    categoryLabel: "Documentos & Dinheiro",
    essential: true,
    tip: "Tenha em PDF no celular e uma folha impressa para apresentar no controle de imigração se solicitado."
  });

  // 2. VESTUÁRIO (CÁLCULO DINÂMICO COM PESOS REAIS)
  // Roupas íntimas: ~50g por peça
  const underwearCount = effectiveDays + 2;
  items.push({
    id: "vest-intimas",
    name: profile === "feminino" ? "Calcinhas e sutiãs confortáveis" : "Cuecas / boxers confortáveis",
    quantity: underwearCount,
    unit: "peças",
    estimatedWeightGrams: 50 * underwearCount,
    category: "vestuario",
    categoryLabel: "Vestuário & Roupas",
    essential: true,
    tip: "Embale em organizadores de tecido ou saco compressivo para poupar volume."
  });

  // Meias: ~40g por par
  const socksCount = destinationType === "praia" ? Math.max(2, Math.ceil(effectiveDays / 2)) : effectiveDays + 1;
  items.push({
    id: "vest-meias",
    name: "Pares de meias (algodão ou térmicas)",
    quantity: socksCount,
    unit: "pares",
    estimatedWeightGrams: 40 * socksCount,
    category: "vestuario",
    categoryLabel: "Vestuário & Roupas",
    essential: true
  });

  // Camisetas / Blusas: ~170g por peça
  const shirtsCount = Math.max(3, effectiveDays + 1);
  items.push({
    id: "vest-camisetas",
    name: profile === "feminino" ? "Blusas e camisetas versáteis" : "Camisetas básicas neutras",
    quantity: shirtsCount,
    unit: "peças",
    estimatedWeightGrams: 170 * shirtsCount,
    category: "vestuario",
    categoryLabel: "Vestuário & Roupas",
    essential: true,
    tip: "Cores neutras facilitam a combinação de diferentes conjuntos com menos peças na mala."
  });

  // Calças / Bermudas: calça ~500g, shorts ~250g
  if (destinationType === "praia") {
    const shortsCount = Math.max(2, Math.ceil(effectiveDays / 2));
    items.push({
      id: "vest-shorts",
      name: "Bermudas leves, shorts ou saias/vestidos de verão",
      quantity: shortsCount,
      unit: "peças",
      estimatedWeightGrams: 220 * shortsCount,
      category: "vestuario",
      categoryLabel: "Vestuário & Roupas",
      essential: true
    });
    items.push({
      id: "vest-praia",
      name: profile === "feminino" ? "Biquínis / maiôs e saída de praia" : "Sungas ou bermudas de banho",
      quantity: 2,
      unit: "conjuntos",
      estimatedWeightGrams: 200,
      category: "vestuario",
      categoryLabel: "Vestuário & Roupas",
      essential: true
    });
    items.push({
      id: "vest-calca-leve",
      name: "Calça leve ou jeans (dica: use uma no corpo durante o voo)",
      quantity: 1,
      unit: "peça",
      estimatedWeightGrams: 450,
      category: "vestuario",
      categoryLabel: "Vestuário & Roupas",
      essential: true
    });
  } else if (destinationType === "frio") {
    items.push({
      id: "vest-termica",
      name: "Conjunto de segunda pele térmica (blusa + calça)",
      quantity: 2,
      unit: "conjuntos",
      estimatedWeightGrams: 400,
      category: "vestuario",
      categoryLabel: "Vestuário & Roupas",
      essential: true,
      tip: "Vista-se em 3 camadas: segunda pele térmica + camada intermediária de fleece/lã + casaco corta-vento."
    });
    items.push({
      id: "vest-calcas-frio",
      name: "Calças resistentes de inverno (jeans grosso ou veludo)",
      quantity: Math.min(3, Math.max(2, Math.ceil(effectiveDays / 3))),
      unit: "peças",
      estimatedWeightGrams: 550 * 2,
      category: "vestuario",
      categoryLabel: "Vestuário & Roupas",
      essential: true
    });
    items.push({
      id: "vest-sueter",
      name: "Blusões de lã, fleece ou moletom quente",
      quantity: Math.min(3, Math.max(2, Math.ceil(effectiveDays / 3))),
      unit: "peças",
      estimatedWeightGrams: 450 * 2,
      category: "vestuario",
      categoryLabel: "Vestuário & Roupas",
      essential: true
    });
    items.push({
      id: "vest-casaco-pesado",
      name: "Casaco pesado de inverno / jaqueta puffer",
      quantity: 1,
      unit: "peça",
      estimatedWeightGrams: 850,
      category: "vestuario",
      categoryLabel: "Vestuário & Roupas",
      essential: true,
      tip: "Viaje vestindo o casaco no aeroporto para economizar volume e cerca de 1kg na balança da mala."
    });
  } else {
    // Cidade / Urbano / Negócios
    const pantsCount = Math.min(3, Math.max(2, Math.ceil(effectiveDays / 3)));
    items.push({
      id: "vest-calcas",
      name: "Calças confortáveis para caminhar",
      quantity: pantsCount,
      unit: "peças",
      estimatedWeightGrams: 480 * pantsCount,
      category: "vestuario",
      categoryLabel: "Vestuário & Roupas",
      essential: true
    });
    items.push({
      id: "vest-jaqueta-leve",
      name: "Jaqueta leve ou corta-vento",
      quantity: 1,
      unit: "peça",
      estimatedWeightGrams: 400,
      category: "vestuario",
      categoryLabel: "Vestuário & Roupas",
      essential: true
    });
  }

  // Pijama: ~250g
  items.push({
    id: "vest-pijama",
    name: "Roupas confortáveis para dormir",
    quantity: Math.min(2, Math.max(1, Math.ceil(effectiveDays / 4))),
    unit: "conjuntos",
    estimatedWeightGrams: 300,
    category: "vestuario",
    categoryLabel: "Vestuário & Roupas",
    essential: true
  });

  // 3. CALÇADOS
  items.push({
    id: "calc-tenis",
    name: "Tênis mais confortável e amaciado (viaje calçando ele)",
    quantity: 1,
    unit: "par",
    estimatedWeightGrams: 0, // no corpo do passageiro
    category: "calcados",
    categoryLabel: "Calçados & Acessórios",
    essential: true,
    tip: "Viaje calçando o sapato mais pesado para não pesar na mala de cabine."
  });
  if (destinationType === "praia") {
    items.push({
      id: "calc-chinelo",
      name: "Sandália ou chinelo leve",
      quantity: 1,
      unit: "par",
      estimatedWeightGrams: 280,
      category: "calcados",
      categoryLabel: "Calçados & Acessórios",
      essential: true
    });
  } else {
    items.push({
      id: "calc-reserva",
      name: "Segundo calçado casual leve para revezamento",
      quantity: 1,
      unit: "par",
      estimatedWeightGrams: 550,
      category: "calcados",
      categoryLabel: "Calçados & Acessórios",
      essential: true
    });
  }

  // 4. HIGIENE & NÉCESSAIRE (~600g a 900g)
  items.push({
    id: "hig-kit-frascos",
    name: "Frascos de viagem (até 100ml) com shampoo, sabonete e condicionador",
    category: "higiene",
    estimatedWeightGrams: 350,
    categoryLabel: "Higiene & Cuidados Pessoais",
    essential: true,
    tip: "Em voos internacionais, mantenha em embalagem transparente de até 1 Litro para o raio-X."
  });
  items.push({
    id: "hig-dental",
    name: "Escova com protetor, creme dental compacto e fio dental",
    category: "higiene",
    estimatedWeightGrams: 150,
    categoryLabel: "Higiene & Cuidados Pessoais",
    essential: true
  });
  items.push({
    id: "hig-desodorante",
    name: "Desodorante roll-on ou compacto de viagem",
    category: "higiene",
    estimatedWeightGrams: 120,
    categoryLabel: "Higiene & Cuidados Pessoais",
    essential: true
  });

  // 5. ELETRÔNICOS & CABOS (~650g)
  items.push({
    id: "elet-powerbank",
    name: "Powerbank (Bateria portátil até 100 Wh) obrigatoriamente na mala de mão",
    category: "eletronicos",
    estimatedWeightGrams: 250,
    categoryLabel: "Eletrônicos & Cabos",
    essential: true,
    tip: "Proibido despachar no porão por determinação do RBAC 175 e normas IATA."
  });
  items.push({
    id: "elet-adaptador",
    name: "Adaptador universal de tomadas (para viagens internacionais)",
    category: "eletronicos",
    estimatedWeightGrams: 150,
    categoryLabel: "Eletrônicos & Cabos",
    essential: true
  });
  items.push({
    id: "elet-carregadores",
    name: "Carregador de celular e cabos essenciais",
    category: "eletronicos",
    estimatedWeightGrams: 180,
    categoryLabel: "Eletrônicos & Cabos",
    essential: true
  });

  // 6. FARMACINHA PREVENTIVA DE PRIMEIROS SOCORROS (~250g)
  items.push({
    id: "farm-basica",
    name: "Kit de primeiros socorros preventivos (analgésico, antitérmico, curativos)",
    category: "farmacia",
    estimatedWeightGrams: 200,
    categoryLabel: "Farmácia de Viagem & Saúde",
    essential: true,
    tip: "Aviso de Saúde: Consulte seu médico ou farmacêutico para orientações personalizadas sobre medicamentos."
  });
  items.push({
    id: "farm-continuo",
    name: "Medicamentos de uso contínuo para todos os dias + reserva com receita médica",
    category: "farmacia",
    estimatedWeightGrams: 150,
    categoryLabel: "Farmácia de Viagem & Saúde",
    essential: true,
    tip: "Transporte sempre na mala de mão junto a você, nunca na mala despachada."
  });

  // 7. MALA DE MÃO & CONFORTO A BORDO
  items.push({
    id: "bordo-casaco-voo",
    name: "Agasalho leve ou pashmina para o ar-condicionado da cabine",
    category: "bordo",
    estimatedWeightGrams: 300,
    categoryLabel: "Mala de Mão & Bordo",
    essential: true
  });
  items.push({
    id: "bordo-muda-reserva",
    name: "1 troca completa de roupa de emergência (camiseta e peça íntima)",
    category: "bordo",
    estimatedWeightGrams: 250,
    categoryLabel: "Mala de Mão & Bordo",
    essential: true,
    tip: "Proteção caso sua bagagem despachada sofra extravio temporário."
  });

  return items;
}
