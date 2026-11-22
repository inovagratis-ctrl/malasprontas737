// src/worker.js
var worker_default = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.protocol === "http:") {
      return Response.redirect(`https://${url.hostname}${url.pathname}${url.search}`, 301);
    }
    if (url.pathname === "/api/generate-itinerary" && request.method === "POST") {
      try {
        const body = await request.json().catch(() => ({}));
        const destination = body.destination || "Destino Incr\xEDvel";
        const days = Math.min(10, Math.max(1, parseInt(body.days) || 3));
        const style = body.style || "Praia e Descanso";
        const travelWith = body.travelWith || "Casal";
        const budget = body.budget || "Moderado";
        const fallbackDays = [];
        for (let i = 1; i <= days; i++) {
          fallbackDays.push({
            dayNumber: i,
            theme: i === 1 ? "Chegada, Reconhecimento & P\xF4r do Sol" : i === days ? "Despedida & Compras T\xEDpicas" : `Explorando as Melhores Atra\xE7\xF5es de ${destination}`,
            morning: `Manh\xE3 no principal ponto tur\xEDstico de ${destination} aproveitando hor\xE1rios com menos fluxo de turistas.`,
            afternoon: `Almo\xE7o regional em restaurante t\xEDpico da culin\xE1ria local e tarde relaxante nos arredores.`,
            evening: `Jantar acolhedor e passeio noturno pelo centrinho gastron\xF4mico de ${destination}.`
          });
        }
        const result = {
          title: `Roteiro Exclusivo: ${destination} em ${days} Dias`,
          summary: `Roteiro sob medida preparado para sua viagem de ${days} dias em ${destination} no estilo ${style} (${travelWith}).`,
          estimatedBudget: "R$ 160 a R$ 290 por pessoa/dia",
          bestTime: "Primavera e Ver\xE3o (clima ensolarado e mar calmo)",
          packingEssentials: [
            "Protetor solar e \xF3culos escuros com prote\xE7\xE3o UV",
            "Roupas leves e cal\xE7ado confort\xE1vel para caminhadas",
            "Garrafa t\xE9rmica de \xE1gua e bateria port\xE1til (Powerbank)"
          ],
          days: fallbackDays,
          localTips: [
            `Acorde cedo para visitar as praias e passeios mais famosos de ${destination} antes das 10h da manh\xE3.`,
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
    let response = await env.ASSETS.fetch(request);
    if (response.status === 404 && !url.pathname.includes(".")) {
      const cleanPath = url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`;
      const htmlReq = new Request(new URL(`${cleanPath}index.html`, request.url), request);
      response = await env.ASSETS.fetch(htmlReq);
      if (response.status === 404) {
        const dotHtmlReq = new Request(new URL(`${url.pathname}.html`, request.url), request);
        response = await env.ASSETS.fetch(dotHtmlReq);
      }
    }
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
      headers: newHeaders
    });
  }
};
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map
