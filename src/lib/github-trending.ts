export type TrendingRepo = {
  rank: number;
  full_name: string;
  owner: string;
  name: string;
  description: string;
  stars: number;
  language: string;
  created_at: string;
  html_url: string;
  change: "up" | "down" | "same" | "new";
  prev_rank: number | null;
};

export type TrendingPayload = {
  generated_at: string;
  since_date: string;
  days_window: number;
  total_stars: number;
  top_language: string;
  repos: TrendingRepo[];
};

const DATA_URL =
  "https://raw.githubusercontent.com/junlong-cloud/github-zh-trending/main/data.json";

const fallback: TrendingPayload = {
  generated_at: new Date().toISOString(),
  since_date: "—",
  days_window: 7,
  total_stars: 0,
  top_language: "—",
  repos: [],
};

export async function getTrending(): Promise<TrendingPayload> {
  try {
    const res = await fetch(DATA_URL, {
      next: { revalidate: 60 * 60 * 6 },
    });
    if (!res.ok) throw new Error(`status ${res.status}`);
    return (await res.json()) as TrendingPayload;
  } catch (err) {
    console.warn("[github-trending] fetch failed, using fallback:", err);
    return fallback;
  }
}
