const links = [
  { id: "mala-1", url: "https://meli.la/25WLYqu" },
  { id: "mala-2", url: "https://meli.la/1vk6eiU" },
  { id: "mala-3", url: "https://meli.la/1MHywT9" },
  { id: "mala-4", url: "https://meli.la/2jDUdbc" },
  { id: "vac-1", url: "https://meli.la/1j7pz2A" },
  { id: "vac-2", url: "https://meli.la/1LNzbVY" },
  { id: "vac-3", url: "https://meli.la/1MNgH7A" },
  { id: "vac-4", url: "https://meli.la/2B3VhGx" }
];

async function extract() {
  for (const item of links) {
    try {
      const res = await fetch(item.url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        }
      });
      const html = await res.text();
      
      const ogImgMatch = html.match(/property="og:image"\s+content="([^"]+)"/i) || html.match(/name="twitter:image"\s+content="([^"]+)"/i);
      const ogTitleMatch = html.match(/property="og:title"\s+content="([^"]+)"/i) || html.match(/<title>([^<]+)<\/title>/i);
      
      console.log(JSON.stringify({
        id: item.id,
        title: ogTitleMatch ? ogTitleMatch[1] : "N/A",
        image: ogImgMatch ? ogImgMatch[1] : "N/A"
      }, null, 2));
    } catch (e) {
      console.log("Erro em", item.id, e.message);
    }
  }
}
extract();
