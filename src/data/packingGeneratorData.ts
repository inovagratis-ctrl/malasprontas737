export interface PackingItem {
  id: string;
  name: string;
  quantity?: number;
  unit?: string;
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

  // Se tem lavanderia, calculamos roupas para no máximo 6 a 7 dias de rotação
  const effectiveDays = hasLaundry ? Math.min(days, 6) : Math.min(days, 18);

  const items: PackingItem[] = [];

  // 1. DOCUMENTOS & FINANÇAS
  items.push({
    id: "doc-passaporte",
    name: "Passaporte válido ou RG recente (máximo 10 anos de emissão)",
    quantity: 1,
    unit: "unidade",
    category: "documentos",
    categoryLabel: "Documentos & Dinheiro",
    essential: true,
    tip: "Para América do Sul (Mercosul), RG em ótimo estado; para demais países, passaporte com pelo menos 6 meses de validade."
  });
  items.push({
    id: "doc-seguro",
    name: "Apólice de Seguro Viagem impressa com telefones de emergência",
    quantity: 1,
    unit: "cópia",
    category: "documentos",
    categoryLabel: "Documentos & Dinheiro",
    essential: true,
    tip: "Obrigatório para Europa (Tratado de Schengen - mínimo € 30.000) e essencial para os EUA (custos médicos altíssimos)."
  });
  items.push({
    id: "doc-cartoes",
    name: "Cartão de Débito Global (Wise / Nomad) + Cartão de Crédito físico",
    quantity: 2,
    unit: "cartões",
    category: "documentos",
    categoryLabel: "Documentos & Dinheiro",
    essential: true,
    tip: "Desbloqueie o aviso de viagem no app do banco e leve pelo menos 2 bandeiras diferentes (Visa e Mastercard)."
  });
  items.push({
    id: "doc-hospedagem",
    name: "Comprovantes de reserva de hotel/Airbnb e passagens de retorno salvas offline",
    category: "documentos",
    categoryLabel: "Documentos & Dinheiro",
    essential: true,
    tip: "Tenha em PDF no celular e 1 folha impressa para a fila da imigração."
  });

  // 2. VESTUÁRIO (CÁLCULO DINÂMICO)
  // Roupas íntimas: dias + 2 de segurança (ou dias da rotação da lavanderia)
  const underwearCount = effectiveDays + 2;
  items.push({
    id: "vest-intimas",
    name: profile === "feminino" ? "Calcinhas e sutiãs confortáveis" : "Cuecas / boxers confortáveis",
    quantity: underwearCount,
    unit: "peças",
    category: "vestuario",
    categoryLabel: "Vestuário & Roupas",
    essential: true,
    tip: "Dica de ouro: embale em saco à vácuo manual ou organizadores de mala (packing cubes)."
  });

  // Meias
  const socksCount = destinationType === "praia" ? Math.max(3, Math.ceil(effectiveDays / 2)) : effectiveDays + 1;
  items.push({
    id: "vest-meias",
    name: "Pares de meias (algodão ou térmicas para frio)",
    quantity: socksCount,
    unit: "pares",
    category: "vestuario",
    categoryLabel: "Vestuário & Roupas",
    essential: true
  });

  // Camisetas / Blusas
  const shirtsCount = Math.max(3, effectiveDays + 1);
  items.push({
    id: "vest-camisetas",
    name: profile === "feminino" ? "Blusas, regatas e camisetas versáteis" : "Camisetas básicas / gola polo",
    quantity: shirtsCount,
    unit: "peças",
    category: "vestuario",
    categoryLabel: "Vestuário & Roupas",
    essential: true,
    tip: "Opte por cores neutras que combinem entre si, multiplicando os looks com menos peças."
  });

  // Calças / Bermudas / Saias
  const bottomsCount = Math.max(2, Math.ceil(effectiveDays / 2) + 1);
  if (destinationType === "praia") {
    items.push({
      id: "vest-shorts",
      name: "Shorts, bermudas leves e saias/vestidos de verão",
      quantity: Math.max(3, Math.ceil(effectiveDays / 2)),
      unit: "peças",
      category: "vestuario",
      categoryLabel: "Vestuário & Roupas",
      essential: true
    });
    items.push({
      id: "vest-praia",
      name: profile === "feminino" ? "Biquínis / maiôs e saídas de praia" : "Sungas ou bermudas de banho",
      quantity: 3,
      unit: "conjuntos",
      category: "vestuario",
      categoryLabel: "Vestuário & Roupas",
      essential: true
    });
    items.push({
      id: "vest-calca-leve",
      name: "Calça leve ou jeans confortável (já use uma no voo)",
      quantity: 2,
      unit: "peças",
      category: "vestuario",
      categoryLabel: "Vestuário & Roupas",
      essential: true
    });
  } else if (destinationType === "frio") {
    items.push({
      id: "vest-termica",
      name: "Segunda pele térmica (blusa + calça)",
      quantity: Math.min(3, Math.max(2, Math.ceil(effectiveDays / 3))),
      unit: "conjuntos",
      category: "vestuario",
      categoryLabel: "Vestuário & Roupas",
      essential: true,
      tip: "A chave do conforto no inverno é vestir em camadas: segunda pele + fleece/lã + casaco corta-vento."
    });
    items.push({
      id: "vest-calcas",
      name: "Calças resistentes (jeans, veludo ou impermeável)",
      quantity: Math.min(4, Math.max(2, Math.ceil(effectiveDays / 2))),
      unit: "peças",
      category: "vestuario",
      categoryLabel: "Vestuário & Roupas",
      essential: true
    });
    items.push({
      id: "vest-sueter",
      name: "Suéteres de lã, blusões fleece ou moletom pesado",
      quantity: Math.min(4, Math.max(2, Math.ceil(effectiveDays / 2))),
      unit: "peças",
      category: "vestuario",
      categoryLabel: "Vestuário & Roupas",
      essential: true
    });
    items.push({
      id: "vest-casaco-pesado",
      name: "Casaco pesado de frio / sobretudo ou jaqueta puffer acolchoada",
      quantity: 1,
      unit: "peça",
      category: "vestuario",
      categoryLabel: "Vestuário & Roupas",
      essential: true,
      tip: "Leve no corpo durante o embarque para economizar peso e volume na mala de mão!"
    });
    items.push({
      id: "vest-gorro-luvas",
      name: "Gorro térmico, cachecol e luvas corta-vento",
      quantity: 2,
      unit: "conjuntos",
      category: "vestuario",
      categoryLabel: "Vestuário & Roupas",
      essential: true
    });
  } else if (destinationType === "negocios") {
    items.push({
      id: "vest-social",
      name: profile === "feminino" ? "Camisas sociais, blazer e calças de alfaiataria" : "Camisas sociais passadas, calças chino/alfaiataria e blazer",
      quantity: Math.min(5, effectiveDays),
      unit: "peças",
      category: "vestuario",
      categoryLabel: "Vestuário & Roupas",
      essential: true
    });
  } else {
    // Cidade / Urbano / Aventura
    items.push({
      id: "vest-calcas-cidade",
      name: "Calças confortáveis para caminhar o dia todo",
      quantity: bottomsCount,
      unit: "peças",
      category: "vestuario",
      categoryLabel: "Vestuário & Roupas",
      essential: true
    });
    items.push({
      id: "vest-casaco-leve",
      name: "Jaqueta leve corta-vento ou cardigan para ar-condicionado",
      quantity: 1,
      unit: "peça",
      category: "vestuario",
      categoryLabel: "Vestuário & Roupas",
      essential: true
    });
  }

  // Pijamas
  items.push({
    id: "vest-pijama",
    name: "Pijamas / roupas confortáveis para dormir",
    quantity: Math.min(3, Math.max(1, Math.ceil(effectiveDays / 3))),
    unit: "conjuntos",
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
    category: "calcados",
    categoryLabel: "Calçados & Acessórios",
    essential: true,
    tip: "Nunca viaje com tênis novinho direto da caixa para não sofrer com bolhas dolorosas."
  });
  if (destinationType === "praia") {
    items.push({
      id: "calc-chinelo",
      name: "Sandália rasteira ou chinelo tipo Havaianas",
      quantity: 1,
      unit: "par",
      category: "calcados",
      categoryLabel: "Calçados & Acessórios",
      essential: true
    });
  } else if (destinationType === "frio") {
    items.push({
      id: "calc-bota",
      name: "Bota quente e impermeável com solado de boa aderência",
      quantity: 1,
      unit: "par",
      category: "calcados",
      categoryLabel: "Calçados & Acessórios",
      essential: true
    });
  } else {
    items.push({
      id: "calc-extra",
      name: "Segundo calçado reserva (sapatilha, mocassim ou tênis casual)",
      quantity: 1,
      unit: "par",
      category: "calcados",
      categoryLabel: "Calçados & Acessórios",
      essential: true
    });
  }

  // 4. HIGIENE & NÉCESSAIRE
  items.push({
    id: "hig-kit-frascos",
    name: "Kit de frascos de viagem de silicone (até 100ml) com shampoo e sabonete",
    category: "higiene",
    categoryLabel: "Higiene & Cuidados Pessoais",
    essential: true,
    tip: "Para voos internacionais, guarde todos dentro do saquinho transparente lacrado de até 1 Litro."
  });
  items.push({
    id: "hig-dental",
    name: "Escova de dentes com protetor, pasta de dente pequena e fio dental",
    category: "higiene",
    categoryLabel: "Higiene & Cuidados Pessoais",
    essential: true
  });
  items.push({
    id: "hig-desodorante",
    name: "Desodorante roll-on ou aerossol viagem (até 100ml se internacional)",
    category: "higiene",
    categoryLabel: "Higiene & Cuidados Pessoais",
    essential: true
  });
  items.push({
    id: "hig-solar",
    name: destinationType === "praia" ? "Protetor solar corporal e facial + repelente" : "Protetor solar facial e hidratante labial",
    category: "higiene",
    categoryLabel: "Higiene & Cuidados Pessoais",
    essential: true
  });

  // 5. ELETRÔNICOS & CABOS
  items.push({
    id: "elet-powerbank",
    name: "Powerbank (Bateria portátil de até 100Wh) na mala de mão",
    category: "eletronicos",
    categoryLabel: "Eletrônicos & Cabos",
    essential: true,
    tip: "Lembre-se: proibido despachar no porão do avião!"
  });
  items.push({
    id: "elet-adaptador",
    name: "Adaptador universal de tomadas (padrão internacional)",
    category: "eletronicos",
    categoryLabel: "Eletrônicos & Cabos",
    essential: true,
    tip: "Indispensável na Europa, Reino Unido, EUA e Argentina (o padrão de 3 pinos do Brasil não entra)."
  });
  items.push({
    id: "elet-cabos",
    name: "Carregador rápido de celular e cabos extras longos",
    category: "eletronicos",
    categoryLabel: "Eletrônicos & Cabos",
    essential: true
  });

  // 6. FARMACINHA PREVENTIVA
  items.push({
    id: "farm-dor",
    name: "Analgésico e antitérmico de confiança (Dipirona, Paracetamol ou Ibuprofeno)",
    category: "farmacia",
    categoryLabel: "Farmácia de Viagem",
    essential: true,
    tip: "Dipirona não é vendida em farmácias dos EUA e Europa sem receita. Leve do Brasil na quantidade necessária."
  });
  items.push({
    id: "farm-enjoo",
    name: "Antienjoo (Dramin ou Vonau) para turbulência e passeios de barco",
    category: "farmacia",
    categoryLabel: "Farmácia de Viagem",
    essential: true
  });
  items.push({
    id: "farm-digestivo",
    name: "Antiácido e remédio digestivo / cólica (reeducação alimentar no destino)",
    category: "farmacia",
    categoryLabel: "Farmácia de Viagem",
    essential: true
  });
  items.push({
    id: "farm-curativos",
    name: "Band-aids e protetor para bolhas nos pés (tipo Compeed)",
    category: "farmacia",
    categoryLabel: "Farmácia de Viagem",
    essential: true
  });
  items.push({
    id: "farm-continuo",
    name: "Medicamentos de uso contínuo para todos os dias + 3 dias de reserva com receita",
    category: "farmacia",
    categoryLabel: "Farmácia de Viagem",
    essential: true,
    tip: "Sempre na mala de mão junto a você!"
  });

  // 7. MALA DE MÃO & CONFORTO A BORDO
  items.push({
    id: "bordo-almofada",
    name: "Almofada ergonômica de pescoço e tapa-olhos para dormir no avião",
    category: "bordo",
    categoryLabel: "Mala de Mão & Conforto a Bordo",
    essential: false
  });
  items.push({
    id: "bordo-fone",
    name: "Fones de ouvido com cancelamento de ruído e adaptador P2 para telas do avião",
    category: "bordo",
    categoryLabel: "Mala de Mão & Conforto a Bordo",
    essential: false
  });
  items.push({
    id: "bordo-casaco",
    name: "Agasalho leve / pashmina para o frio do ar-condicionado da cabine",
    category: "bordo",
    categoryLabel: "Mala de Mão & Conforto a Bordo",
    essential: true
  });
  items.push({
    id: "bordo-troca-reserva",
    name: "1 muda completa de roupa limpa de emergência (camiseta e roupa íntima)",
    category: "bordo",
    categoryLabel: "Mala de Mão & Conforto a Bordo",
    essential: true,
    tip: "Salva seu primeiro dia se a sua mala despachada atrasar na esteira."
  });

  return items;
}
