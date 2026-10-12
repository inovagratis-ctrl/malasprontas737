const links = [
  { id: "almofada-1", url: "https://meli.la/2BGHYiF" },
  { id: "almofada-2", url: "https://meli.la/2P38sAp" },
  { id: "almofada-3", url: "https://meli.la/1pxJeCJ" },
  { id: "almofada-4", url: "https://meli.la/2fT3Dor" }
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
