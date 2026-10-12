# Diretrizes Permanentes do Blog Malas Prontas

## 1. Regra Sagrada das Imagens (Fidelidade Visual e Geográfica 100%)
- **OBRIGATÓRIO:** Toda e qualquer imagem (foto de capa ou galeria interna dos posts) DEVE retratar com exatidão o **local geográfico específico** ou o **assunto exato** abordado no artigo.
- **PROIBIDO:** Nunca utilizar fotos genéricas de praias, bancos de imagens aleatórios ou fotos que não pertençam ao destino específico do post (ex: nunca colocar praia com mar comum em post dos Lençóis Maranhenses; nunca colocar pessoas genéricas sem malas em posts de arrumação de bagagem).
- **Imagens Geradas por IA:** Quando uma imagem for criada por IA, os prompts e o resultado final devem incluir rigorosamente os marcos e elementos reais e inconfundíveis do local (ex: dunas brancas e lagoas doces nos Lençóis Maranhenses; fervedouros no Jalapão; Teatro Amazonas em Manaus; Ver-o-Peso em Belém; dunas e Morro do Careca em Natal; malas de mão e lanches de avião em posts infantis).
- **Sem Repetições:** Cada post deve ter fotos exclusivas; nunca reutilizar fotos de um post em outro destino.

## 2. Sistema de Zoom & Lightbox (Visualizador de Fotos)
- O visualizador de fotos em tela cheia possui botão de fechar flutuante fixo no topo direito com visual escuro elegante (`bg-stone-900/95`, borda neutra e ícone X).
- Nunca utilizar botão com fundo vermelho chamativo.
- Manter suporte a clique fora (backdrop click) e atalho da tecla ESC.

## 3. Robustez das Ferramentas Interativas
- A Calculadora de Custos (`/calculadora-viagem`), Gerador de Roteiros com IA (`/roteiro-personalizado`) e Checklist (`/checklist`) devem sempre tratar campos em branco ou apagados com fallbacks seguros sem gerar erros ou telas de travamento (anti-NaN e anti-undefined).
