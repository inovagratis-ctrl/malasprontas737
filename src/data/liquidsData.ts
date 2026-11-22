export interface PresetLiquidItem {
  id: string;
  name: string;
  defaultVolumeMl: number;
  category: "higiene" | "beleza" | "saude";
  iconName: string;
}

export const PRESET_LIQUID_ITEMS: PresetLiquidItem[] = [
  { id: "shampoo", name: "Shampoo (Frasco Viagem)", defaultVolumeMl: 100, category: "higiene", iconName: "Sparkles" },
  { id: "condicionador", name: "Condicionador", defaultVolumeMl: 100, category: "higiene", iconName: "Sparkles" },
  { id: "perfume", name: "Perfume / Colônia", defaultVolumeMl: 50, category: "beleza", iconName: "Heart" },
  { id: "protetor-solar", name: "Protetor Solar Facial", defaultVolumeMl: 80, category: "beleza", iconName: "Sun" },
  { id: "pasta-dente", name: "Pasta de Dente (Tubo Viagem)", defaultVolumeMl: 70, category: "higiene", iconName: "Smile" },
  { id: "hidratante", name: "Hidratante Corporal / Facial", defaultVolumeMl: 100, category: "beleza", iconName: "Droplet" },
  { id: "alcool-gel", name: "Álcool em Gel Higienizador", defaultVolumeMl: 60, category: "saude", iconName: "Shield" },
  { id: "desodorante-rollon", name: "Desodorante Roll-On", defaultVolumeMl: 50, category: "higiene", iconName: "CheckCircle" },
  { id: "base-maquiagem", name: "Base Líquida de Maquiagem", defaultVolumeMl: 30, category: "beleza", iconName: "Sparkles" },
  { id: "enxaguante", name: "Enxaguante Bucal Mini", defaultVolumeMl: 100, category: "higiene", iconName: "Smile" },
  { id: "colirio", name: "Colírio / Solução para Lentes", defaultVolumeMl: 30, category: "saude", iconName: "Eye" },
  { id: "oleo-cabelo", name: "Óleo Capilar Reparador", defaultVolumeMl: 50, category: "beleza", iconName: "Droplet" }
];

export const LIQUIDS_REGULATION_GUIDELINES = {
  maxSingleContainerMl: 100,
  maxTotalPouchVolumeMl: 1000, // 1 Litro
  maxRecommendedItemCount: 10,
  pouchDimensions: "Aproximadamente 20cm × 20cm (fecho estilo zip-lock)",
  rules: [
    {
      title: "Regra Rígida do Frasco Nominal de 100ml",
      description: "A segurança do aeroporto confere a capacidade impressa na embalagem, NÃO o volume que sobrou dentro. Um frasco de 200ml com apenas um restinho no fundo será SUMARIAMENTE DESCARTADO no lixo do raio-X."
    },
    {
      title: "Um Único Saco Plástico Transparente por Passageiro",
      description: "Todos os seus frascos de até 100ml devem caber dentro de 1 único saco transparente vedável de até 1 Litro (20x20cm). O saquinho deve fechar completamente sem rasgar ou estourar o zíper."
    },
    {
      title: "Remédios e Leite Infantil São Exceções Legais",
      description: "Medicamentos líquidos essenciais com receita médica e alimentação de bebês para o período do voo podem ultrapassar 100ml e ir fora do saquinho plástico, devendo ser apresentados separadamente ao inspetor de segurança."
    },
    {
      title: "Produtos Pastosos São Líquidos pela ANAC/TSA",
      description: "Pasta de dente, pomada capilar, rímel, manteiga de cacau, protetor labial cremoso e desodorante em creme contam oficialmente como líquidos na contagem!"
    }
  ]
};
