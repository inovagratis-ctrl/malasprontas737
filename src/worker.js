export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // 1. Redirecionamento canônico HTTPS se vier em HTTP
    if (url.protocol === "http:") {
      return Response.redirect(`https://${url.hostname}${url.pathname}${url.search}`, 301);
    }

    // 2. Endpoint da API de geração de roteiro personalizado
    if (url.pathname === "/api/generate-itinerary" && request.method === "POST") {
      try {
        const body = await request.json().catch(() => ({}));
        const destination = body.destination || "Destino Incrível";
        const days = Math.min(10, Math.max(1, parseInt(body.days) || 3));
        const style = body.style || "Praia e Descanso";
        const travelWith = body.travelWith || "Casal";
        const budget = body.budget || "Moderado";

        const fallbackDays = [];
        for (let i = 1; i <= days; i++) {
          fallbackDays.push({
            dayNumber: i,
            theme: i === 1 ? "Chegada, Reconhecimento & Pôr do Sol" : i === days ? "Despedida & Compras Típicas" : `Explorando as Melhores Atrações de ${destination}`,
            morning: `Manhã no principal ponto turístico de ${destination} aproveitando horários com menos fluxo de turistas.`,
            afternoon: `Almoço regional em restaurante típico da culinária local e tarde relaxante nos arredores.`,
            evening: `Jantar acolhedor e passeio noturno pelo centrinho gastronômico de ${destination}.`
          });
        }

        const result = {
          title: `Roteiro Exclusivo: ${destination} em ${days} Dias`,
          summary: `Roteiro sob medida preparado para sua viagem de ${days} dias em ${destination} no estilo ${style} (${travelWith}).`,
          estimatedBudget: "R$ 160 a R$ 290 por pessoa/dia",
          bestTime: "Primavera e Verão (clima ensolarado e mar calmo)",
          packingEssentials: [
            "Protetor solar e óculos escuros com proteção UV",
            "Roupas leves e calçado confortável para caminhadas",
            "Garrafa térmica de água e bateria portátil (Powerbank)"
          ],
          days: fallbackDays,
          localTips: [
            `Acorde cedo para visitar as praias e passeios mais famosos de ${destination} antes das 10h da manhã.`,
            "Pergunte aos moradores locais onde fica o restaurante caseiro do bairro para comer bem pagando menos."
          ]
        };

        return new Response(JSON.stringify(result), {
          status: 200,
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
            "Access-Control-Allow-Origin": "*"
          }
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: "Erro ao gerar roteiro" }), {
          status: 500,
          headers: { "Content-Type": "application/json; charset=UTF-8" }
        });
      }
    }

    // 3. Busca arquivos estáticos via env.ASSETS
    let response = await env.ASSETS.fetch(request);

    // Se 404 e for rota sem extensão, tenta com /index.html ou .html
    if (response.status === 404 && !url.pathname.includes(".")) {
      const cleanPath = url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`;
      const htmlReq = new Request(new URL(`${cleanPath}index.html`, request.url), request);
      response = await env.ASSETS.fetch(htmlReq);

      if (response.status === 404) {
        const dotHtmlReq = new Request(new URL(`${url.pathname}.html`, request.url), request);
        response = await env.ASSETS.fetch(dotHtmlReq);
      }
    }

    // 4. Cabeçalhos de segurança
    const newHeaders = new Headers(response.headers);
    const contentType = newHeaders.get("content-type") || "";
    if (contentType.includes("text/html") && !contentType.includes("charset")) {
      newHeaders.set("content-type", "text/html; charset=UTF-8");
    }

    newHeaders.set("X-Content-Type-Options", "nosniff");
    newHeaders.set("Referrer-Policy", "strict-origin-when-cross-origin");
    newHeaders.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  },
};
