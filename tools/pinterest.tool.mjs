export default async function pinterest({ query, limit = 5 }, ctx) {
  const apiKey = await ctx.read('SERPAPI_KEY');
  if (!apiKey) {
    return "Error: SERPAPI_KEY not found. Please add it to ~/.tune/.env";
  }

  const exactQuery = encodeURIComponent(`site:pinterest.com ${query}`);
  const url = `https://serpapi.com/search.json?engine=google_images&q=${exactQuery}&api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    const images = data.images_results?.slice(0, limit) || [];

    if (images.length === 0) return "No images found.";

    return images.map(img => `![${img.title.replace(/\]/g, '')}](${img.original})`).join('\n\n');
  } catch (err) {
    return `Error fetching images: ${err.message}`;
  }
}
