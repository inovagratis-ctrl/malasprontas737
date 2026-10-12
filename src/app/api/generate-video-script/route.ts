import { NextResponse } from "next/server";

export const maxDuration = 60;
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const { destination, videoType, format, postContext } = await req.json();

    if (!destination) {
      return NextResponse.json(
        { error: "O destino é obrigatório" },
        { status: 400 }
      );
    }

    const isLongVideo = format === "long";
    const apiKey = process.env.MIMO_API_KEY || "tp-svyhvtlwz8k1uwo35sa3y0j4o5ankpfbeettsy1qvc8xmx3i";
    const baseUrl = process.env.MIMO_BASE_URL || "https://token-plan-sgp.xiaomimimo.com/v1";

    let prompt = "";

    if (isLongVideo) {
      prompt = `Você é o roteirista sênior do canal "@canalmalasprontas" do blog "Malas Prontas".
Crie um ROTEIRO COMPLETO, DETALHADO E PROFISSIONAL PARA VÍDEO LONGO DO YOUTUBE sobre: ${destination}.
Estilo Visual do Canal: "Animação B-Roll 2D/2.5D, elementos vetoriais, motion graphics, ilustrações vibrantes, textos dinâmicos na tela e efeitos sonoros (SFX)".
${postContext ? `Contexto factual do artigo do blog:\n${postContext.slice(0, 800)}\n` : ""}

Estruture a resposta rigorosamente em formato JSON:
{
  "title": "Título magnético estilo YouTube para ${destination}",
  "duration": "8 a 12 minutos",
  "thumbnailPrompt": "A 2.5D vector illustration of ${destination} with prominent golden suitcase, vibrant tropical landmarks, expressive traveler character, bold yellow 3D text 'VALE A PENA?', high contrast, clean vector flat art, 4k --ar 16:9",
  "thumbnailIdea": "Ideia da thumb: viajante animado em 2.5D com mapa na mão e fundo icônico",
  "chapters": [
    {
      "time": "00:00 - 01:30",
      "title": "Introdução Magnética & Por Que Este Destino é Imperdível",
      "motionText": "GUIA DEFINITIVO • ${destination.toUpperCase()}",
      "sfx": "Whoosh suave de transição + batida lo-fi de viagem + som de carimbo de passaporte",
      "imagePrompt": "2.5D vector motion graphics animation of ${destination} landmark with tropical palm trees, floating travel icons, isometric depth, vibrant colors, clean minimal flat art style --ar 16:9",
      "visuals": "Animação 2.5D da mala 'Malas Prontas' se abrindo com mapa estilizado e pinos saltando na tela.",
      "narration": "Fala completa e rica do narrador prendendo a atenção nos primeiros 30 segundos, prometendo a planilha completa de gastos no final e pedindo a inscrição no canal @canalmalasprontas."
    },
    {
      "time": "01:30 - 03:30",
      "title": "Como Chegar, Aeroportos & Transporte Ideal",
      "motionText": "COMO CHEGAR • ROTAS & ECONOMIA",
      "sfx": "Efeito sonoro de avião decolando + clique de rota no GPS",
      "imagePrompt": "Vector illustration of an airplane flying over a stylized route map connecting Brazilian cities to ${destination}, 2.5D isometric view, clean travel infographic style, vibrant --ar 16:9",
      "visuals": "Infográfico animado de mapa com rotas de voos, estradas e comparativo entre carro alugado vs transfer.",
      "narration": "Explicação aprofundada das melhores rotas aéreas, estradas, cuidados com pedágios/4x4 e dicas para economizar no deslocamento."
    },
    {
      "time": "03:30 - 05:30",
      "title": "Onde Ficar: Bairros Estratégicos & Pousadas",
      "motionText": "ONDE SE HOSPEDAR • CUSTO-BENEFÍCIO",
      "sfx": "Pop de ícones de hotel + som de campainha de recepção",
      "imagePrompt": "Cozy tropical boutique hotel and charming beach pousada, 2.5D vector flat art illustration, swimming pool, palm trees, warm sunlight, isometric architectural style --ar 16:9",
      "visuals": "Cards animados na tela mostrando as melhores regiões de hospedagem com indicação do mapa interativo do Stay22.",
      "narration": "Detalhamento das melhores regiões para se hospedar sem cair em pegadinhas de deslocamento, explicando como comparar tarifas no Stay22 do Malas Prontas."
    },
    {
      "time": "05:30 - 08:30",
      "title": "Roteiro Dia a Dia Completo (O Passo a Passo)",
      "motionText": "PROGRAMAÇÃO DIA A DIA • HORÁRIOS SECRETOS",
      "sfx": "Som de água cristalina / mar + estalo de foto de câmera fotográfica",
      "imagePrompt": "Vibrant 2.5D vector scenery of top attractions in ${destination}, crystal clear water, sunny sky, travelers exploring, colorful flat art style, motion graphics composition --ar 16:9",
      "visuals": "Timeline cronológica animada com ícones de manhã, tarde e noite passando pelas principais atrações e praias.",
      "narration": "Passo a passo minucioso de cada dia da viagem, com horários ideais de maré/sol para evitar multidões e onde comer comida típica barata."
    },
    {
      "time": "08:30 - 10:30",
      "title": "Quanto Custa na Ponta do Lápis & O Que Evitar",
      "motionText": "QUANTO CUSTA? • TABELA DE GASTOS",
      "sfx": "Som de caixa registradora 'cha-ching' + sino de alerta para o que evitar",
      "imagePrompt": "Infographic 2.5D vector illustration of travel budget with floating coins, calculator, luggage, piggy bank, colorful modern flat style --ar 16:9",
      "visuals": "Tabela animada na tela somando os custos reais de hospedagem, alimentação, passeios e passagens.",
      "narration": "Valores reais atualizados por pessoa em cada categoria e os 3 maiores erros/pegadinhas de turista para não cair."
    },
    {
      "time": "10:30 - 11:30",
      "title": "Conclusão, Checklist da Mala e Inscrição",
      "motionText": "INSCREVA-SE NO CANAL • @CANALMALASPRONTAS",
      "sfx": "Sino de notificação do YouTube + trilha sonora subindo no clímax",
      "imagePrompt": "End screen vector illustration with subscribe button, bell icon, travel luggage and social media badges, clean 2.5D flat art --ar 16:9",
      "visuals": "Tela final com botões de inscrição animados e indicação para baixar o checklist no blog Malas Prontas.",
      "narration": "Encerramento acolhedor, reforço para pegar o checklist grátis no blog e chamada calorosa para se inscrever no canal @canalmalasprontas."
    }
  ],
  "fullNarrationText": "Texto contínuo e corrido de todas as falas juntas para leitura no teleprompter",
  "youtubeDescription": "Descrição pronta para o YouTube com capítulos cronometrados e links para o blog Malas Prontas"
}

Responda APENAS o JSON puro sem markdown.`;
    } else {
      prompt = `Crie um roteiro viral curto (45-60s) para TikTok/Shorts sobre: ${destination}.
Estilo Visual: "Animação B-Roll 2D/2.5D, elementos vetoriais, motion graphics, ilustrações, textos dinâmicos e SFX".

Retorne em formato JSON:
{
  "title": "Vídeo Curto: ${destination}",
  "hook": "Frase de 0 a 3 segundos com gatilho de curiosidade irresistível",
  "motionText": "NÃO VIAJE ANTES DE VER ISSO!",
  "sfx": "Whoosh rápido + alerta de notificação",
  "imagePrompt": "2.5D vector illustration of ${destination} with striking turquoise waters and golden sands, colorful flat art style, motion graphics composition --ar 9:16",
  "scenes": [
    {
      "time": "03s - 20s",
      "motionText": "O SEGREDO DE ${destination.toUpperCase()}",
      "sfx": "Pop de elementos vetoriais + som de ondas",
      "imagePrompt": "A 2.5D isometric vector scene of ${destination} beach oasis, vibrant flat design, colorful tropical palette --ar 9:16",
      "visual": "Animação 2.5D da paisagem com textos cinéticos saltando",
      "narration": "Fala rápida e envolvente revelando o segredo do lugar"
    },
    {
      "time": "20s - 45s",
      "motionText": "QUANTO CUSTA? R$ 150/DIA",
      "sfx": "Som de moedas caindo + sino",
      "imagePrompt": "Vector illustration of a traveler enjoying fresh seafood and budget cozy pousada, clean 2.5D style --ar 9:16",
      "visual": "Cards animados com valores reais de hospedagem e gastronomia",
      "narration": "Dica de valores e como economizar sem passar perrengue"
    }
  ],
  "cta": "Se você quer o roteiro dia a dia completo com custos e checklist de mala, o link tá na bio do Malas Prontas!",
  "caption": "Descubra os segredos de ${destination}! ✈️🎒 Salve esse vídeo e siga @canalmalasprontas para mais dicas! #viagem #turismo #${destination.replace(/\\s+/g, '')}",
  "fullNarrationText": "Texto corrido de todas as falas juntas"
}

Responda APENAS o JSON puro.`;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    let content = "";

    try {
      const res = await fetch(`${baseUrl}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "mimo-v2.5",
          messages: [
            {
              role: "system",
              content: "Você é um roteirista especializado em vídeos com animações 2D/2.5D e motion graphics para o canal Malas Prontas. Retorne estritamente JSON.",
            },
            {
              role: "user",
              content: prompt,
            },
          ],
          temperature: 0.5,
          max_tokens: 1500,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        content = data.choices?.[0]?.message?.content || "";
      }
    } catch (fetchErr) {
      console.warn("Fetch video script timeout, fallback activated:", fetchErr);
    }

    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      try {
        const parsed = JSON.parse(jsonMatch[0]);
        return NextResponse.json(parsed);
      } catch (e) {
        console.warn("JSON parse fallback:", e);
      }
    }

    // Fallback completo com prompts de imagem 2.5D
    if (isLongVideo) {
      return NextResponse.json({
        title: `GUIA COMPLETO: ${destination} | Roteiro, Custos e Dicas de Viagem`,
        duration: "8 a 11 minutos",
        thumbnailIdea: `Ilustração 2.5D vibrante de ${destination} com viajante segurando mala e texto em amarelo: VALE A PENA?`,
        thumbnailPrompt: `A 2.5D vector illustration of ${destination} with prominent orange suitcase, vibrant tropical beach landmarks, expressive traveler character, bold yellow 3D text 'VALE A PENA?', high contrast, clean vector flat art, 4k --ar 16:9`,
        chapters: [
          {
            time: "00:00 - 01:30",
            title: "Introdução Magnética & Por Que Este Destino é Imperdível",
            motionText: `GUIA DEFINITIVO • ${destination.toUpperCase()}`,
            sfx: "Whoosh suave de transição + batida lo-fi de viagem + som de carimbo de passaporte",
            imagePrompt: `2.5D vector motion graphics animation of ${destination} landmark with tropical palm trees, floating travel icons, isometric depth, vibrant colors, clean minimal flat art style --ar 16:9`,
            visuals: "Animação 2.5D da mala 'Malas Prontas' se abrindo com mapa estilizado e pinos saltando na tela.",
            narration: `Se você está sonhando em viajar para ${destination}, este vídeo é o guia definitivo que vai transformar o seu planejamento em economia real. Hoje nós vamos dissecar como chegar, onde ficar para não perder tempo, os passeios obrigatórios e a planilha completa de gastos na ponta do lápis. Se você é apaixonado por viagens inteligentes, já se inscreva agora no canal Malas Prontas e ative o sininho!`
          },
          {
            time: "01:30 - 03:30",
            title: "Como Chegar, Aeroportos & Transporte Ideal",
            motionText: "ROTAS & ECONOMIA NO TRANSPORTE",
            sfx: "Efeito sonoro de avião decolando + clique de rota no GPS",
            imagePrompt: `Vector illustration of an airplane flying over a stylized route map connecting Brazilian cities to ${destination}, 2.5D isometric view, clean travel infographic style, vibrant --ar 16:9`,
            visuals: "Infográfico animado de mapa com rotas de voos, estradas e comparativo entre carro alugado vs transfer.",
            narration: `Para desembarcar em ${destination}, a estratégia começa na compra das passagens aéreas. A grande sacada é monitorar os voos para os aeroportos das capitais próximas e fazer o trajeto final com transfer ou carro alugado. Dividir o aluguel de um carro econômico entre duas ou mais pessoas costuma sair muito mais barato do que pagar passeios privativos todos os dias.`
          },
          {
            time: "03:30 - 05:30",
            title: "Onde Ficar: Bairros Estratégicos & Pousadas",
            motionText: "ONDE SE HOSPEDAR • CUSTO-BENEFÍCIO",
            sfx: "Pop de ícones de hotel + som de campainha de recepção",
            imagePrompt: `Cozy tropical boutique hotel and charming beach pousada in ${destination}, 2.5D vector flat art illustration, swimming pool, palm trees, warm sunlight, isometric architectural style --ar 16:9`,
            visuals: "Cards animados na tela mostrando as melhores regiões de hospedagem com indicação do mapa interativo do Stay22.",
            narration: `A escolha do bairro é onde a maioria dos viajantes comete o primeiro grande erro: escolher uma pousada muito barata mas isolada de tudo, gastando fortunas em deslocamento. O segredo é buscar pousadas a poucas quadras do centrinho ou da praia principal. Você pode usar o mapa comparador do Stay22 dentro do blog Malas Prontas para garantir tarifas com cancelamento grátis.`
          },
          {
            time: "05:30 - 08:30",
            title: "Roteiro Dia a Dia Completo (O Passo a Passo)",
            motionText: "PROGRAMAÇÃO DIA A DIA • HORÁRIOS SECRETOS",
            sfx: "Som de água cristalina / mar + estalo de foto de câmera fotográfica",
            imagePrompt: `Vibrant 2.5D vector scenery of top attractions in ${destination}, crystal clear water, sunny sky, travelers exploring, colorful flat art style, motion graphics composition --ar 16:9`,
            visuals: "Timeline cronológica animada com ícones de manhã, tarde e noite passando pelas principais atrações e praias.",
            narration: `Vamos ao roteiro prático: pela manhã, aproveite para visitar os cartões-postais e piscinas naturais bem cedo, antes das dez horas, quando o fluxo de excursões ainda não chegou. Na hora do almoço, fuja dos quiosques inflados da orla e vá aos restaurantes tradicionais frequentados pelos moradores locais. O final de tarde deve ser reservado para contemplar o pôr do sol nos mirantes mais icônicos.`
          },
          {
            time: "08:30 - 10:30",
            title: "Quanto Custa na Ponta do Lápis & O Que Evitar",
            motionText: "QUANTO CUSTA? • TABELA DE GASTOS",
            sfx: "Som de caixa registradora 'cha-ching' + sino de alerta para o que evitar",
            imagePrompt: `Infographic 2.5D vector illustration of travel budget with floating coins, calculator, luggage, piggy bank, colorful modern flat style --ar 16:9`,
            visuals: "Tabela animada na tela somando os custos reais de hospedagem, alimentação, passeios e passagens.",
            narration: `Agora vamos colocar tudo na ponta do lápis: em média, um viajante no perfil econômico gasta entre cento e quarenta a cento e noventa reais por dia por pessoa. Já no perfil conforto moderado, a média fica entre duzentos e duzentos e oitenta reais. O que evitar a todo custo? Fechar passeios de última hora na praia sem pesquisar e viajar no pico de julho sem reserva antecipada.`
          },
          {
            time: "10:30 - 11:30",
            title: "Conclusão, Checklist da Mala e Inscrição",
            motionText: "INSCREVA-SE NO CANAL • @CANALMALASPRONTAS",
            sfx: "Sino de notificação do YouTube + trilha sonora subindo no clímax",
            imagePrompt: `End screen vector illustration with subscribe button, bell icon, travel luggage and social media badges, clean 2.5D flat art --ar 16:9`,
            visuals: "Tela final com botões de inscrição animados e indicação para baixar o checklist no blog Malas Prontas.",
            narration: `E para não esquecer nada antes de embarcar, acesse agora o blog Malas Prontas e baixe o nosso checklist interativo de bagagem gratuito. Se esse vídeo te ajudou a economizar, deixe o seu like, compartilhe com quem vai viajar com você e inscreva-se no canal Malas Prontas para mais roteiros sinceros pelo Brasil e pelo mundo!`
          }
        ],
        fullNarrationText: `Se você está sonhando em viajar para ${destination}, este vídeo é o guia definitivo que vai transformar o seu planejamento em economia real. Hoje nós vamos dissecar como chegar, onde ficar para não perder tempo, os passeios obrigatórios e a planilha completa de gastos na ponta do lápis. Se você é apaixonado por viagens inteligentes, já se inscreva agora no canal Malas Prontas e ative o sininho! Para desembarcar em ${destination}, a estratégia começa na compra das passagens aéreas. A grande sacada é monitorar os voos para os aeroportos das capitais próximas e fazer o trajeto final com transfer ou carro alugado. A escolha do bairro é onde a maioria dos viajantes comete o primeiro grande erro. O segredo é buscar pousadas a poucas quadras do centrinho ou da praia principal. Vamos ao roteiro prático: pela manhã, aproveite para visitar os cartões-postais e piscinas naturais bem cedo. Na hora do almoço, fuja dos quiosques inflados da orla. Agora vamos colocar tudo na ponta do lápis: em média, um viajante no perfil econômico gasta entre cento e quarenta a cento e noventa reais por dia. E para não esquecer nada antes de embarcar, acesse agora o blog Malas Prontas e baixe o nosso checklist interativo de bagagem gratuito. Inscreva-se no canal Malas Prontas e até a próxima viagem!`,
        youtubeDescription: `Confira o Guia Definitivo e Completo de ${destination}!\n\n📌 Capítulos do Vídeo:\n00:00 - Introdução & Destaques\n01:30 - Como Chegar e Transporte\n03:30 - Onde Ficar e Melhores Pousadas\n05:30 - Roteiro Dia a Dia Completo\n08:30 - Quanto Custa na Ponta do Lápis\n10:30 - Checklist e Encerramento\n\n🌐 Acesse nosso Blog com Checklist e Calculadora:\nhttps://malas-prontas-henna.vercel.app\n\n🔔 Inscreva-se no canal @canalmalasprontas para mais roteiros de viagem!`
      });
    }

    return NextResponse.json({
      title: `O Segredo de ${destination} que Ninguém Te Conta 😱`,
      hook: `Você sabia que ${destination} esconde um paraíso que parece de mentira?`,
      motionText: `NÃO VIAJE PARA ${destination.toUpperCase()} ANTES DE VER ISSO!`,
      sfx: "Whoosh rápido + alerta de notificação",
      imagePrompt: `2.5D vector illustration of ${destination} with striking turquoise waters and golden sands, colorful flat art style, motion graphics composition --ar 9:16`,
      scenes: [
        {
          time: "03s - 20s",
          motionText: `O SEGREDO DE ${destination.toUpperCase()}`,
          sfx: "Pop de elementos vetoriais + som de ondas",
          imagePrompt: `A 2.5D isometric vector scene of ${destination} beach oasis, vibrant flat design, colorful tropical palette --ar 9:16`,
          visual: "Animação 2.5D da paisagem com textos cinéticos saltando",
          narration: `Esse é um dos destinos mais surpreendentes do Brasil. A maioria das pessoas gasta fortunas em viagens caras quando poderia viver essa experiência pagando muito menos.`
        },
        {
          time: "20s - 45s",
          motionText: "QUANTO CUSTA? R$ 150/DIA",
          sfx: "Som de moedas caindo + sino",
          imagePrompt: `Vector illustration of a traveler enjoying fresh seafood and budget cozy pousada in ${destination}, clean 2.5D style --ar 9:16`,
          visual: "Cards animados com valores reais de hospedagem e gastronomia",
          narration: `Com diárias acessíveis a partir de cento e trinta reais e peixe fresco delicioso, esse é o lugar perfeito para sua próxima aventura.`
        }
      ],
      cta: `Quer o roteiro dia a dia completo com cálculo de gastos? Clica no link da bio do Malas Prontas!`,
      caption: `Descubra os segredos de ${destination}! ✈️🎒 Salve esse vídeo e siga @canalmalasprontas para mais dicas de viagem! #viagem #turismo #${destination.replace(/\\s+/g, '')}`,
      fullNarrationText: `Você sabia que ${destination} esconde um paraíso que parece de mentira? Esse é um dos destinos mais surpreendentes do Brasil. A maioria das pessoas gasta fortunas em viagens caras quando poderia viver essa experiência pagando muito menos. Com diárias acessíveis a partir de cento e trinta reais e peixe fresco delicioso, esse é o lugar perfeito para sua próxima aventura. Quer o roteiro dia a dia completo com cálculo de gastos? Clica no link da bio do Malas Prontas!`
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: "Erro interno", details: error?.message },
      { status: 500 }
    );
  }
}
