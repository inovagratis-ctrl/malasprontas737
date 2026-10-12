// Script para Gerar Roteiros de Vídeos Curtos (TikTok / YouTube Shorts / Reels)
// Utiliza o modelo Xiaomi MiMo v2.5

const destination = process.argv[2] || "Praia do Francês";
const apiKey = process.env.MIMO_API_KEY || "tp-svyhvtlwz8k1uwo35sa3y0j4o5ankpfbeettsy1qvc8xmx3i";
const baseUrl = process.env.MIMO_BASE_URL || "https://token-plan-sgp.xiaomimimo.com/v1";

console.log(`\n🎬 Gerando Roteiro Viral para TikTok / Reels sobre: "${destination}" com IA Xiaomi MiMo...\n`);

async function generateShortsScript() {
  const prompt = `Você é um roteirista profissional de vídeos virais para TikTok, Instagram Reels e YouTube Shorts, focado no nicho de viagens para o canal "Malas Prontas".
Crie um roteiro dinâmico, envolvente e de alta retenção (duração de 45 a 60 segundos) sobre o destino: ${destination}.

Estruture o roteiro exatamente assim:
1. 🎯 HOOK (0 a 3 segundos): Frase chocante ou curiosa para prender o espectador imediatamente.
2. 📸 CENAS & NARRAÇÃO (3 a 45 segundos): Dividido em 3 ou 4 cortes rápidos com sugestão de imagem/vídeo para o CapCut/Canva e a fala exata do narrador.
3. 💰 CUSTOS ESTIMADOS: Dica rápida de quanto custa ou melhor época.
4. 🚀 CTA / CHAMADA PARA AÇÃO (final): "Se você quer o roteiro dia a dia completo com custos e checklist de mala, o link tá na bio do Malas Prontas!"

Escreva em português brasileiro descontraído, natural e que prenda a atenção.`;

  try {
    const res = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "mimo-v2.5",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.8,
      }),
    });

    const data = await res.json();
    console.log("=================================================");
    console.log(`✨ ROTEIRO PRONTO: ${destination.toUpperCase()} ✨`);
    console.log("=================================================\n");
    console.log(data.choices?.[0]?.message?.content || "Erro ao gerar");
    console.log("\n=================================================");
    console.log("💡 Dica: Cole esse texto no CapCut com legendas automáticas e publique com as hashtags #viagem #dicasdeviagem #malasprontas");
  } catch (err) {
    console.error("Erro:", err);
  }
}

generateShortsScript();
