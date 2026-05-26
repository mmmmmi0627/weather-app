import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const apiKey = process.env.OPENWEATHER_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "API key not configured" }, { status: 500 });
  }

  const q = request.nextUrl.searchParams.get("q");
  if (!q || q.trim().length < 1) {
    return Response.json([]);
  }

  const res = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(q)}&limit=6&appid=${apiKey}`,
    { cache: "no-store" }
  );

  if (!res.ok) return Response.json([]);

  const data = await res.json();

  const results = (data as Array<{
    name: string;
    local_names?: Record<string, string>;
    lat: number;
    lon: number;
    country: string;
    state?: string;
  }>).map((item) => ({
    name: item.local_names?.ja ?? item.name,
    nameEn: item.name,
    lat: item.lat,
    lon: item.lon,
    country: item.country,
    state: item.state,
  }));

  return Response.json(results);
}
