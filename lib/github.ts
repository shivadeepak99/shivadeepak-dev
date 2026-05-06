// Live GitHub stats — fetched at build time with hourly revalidation.
// Uses public APIs only (no auth needed):
//   - api.github.com for profile (public repos, etc.)
//   - github-contributions-api.jogruber.de for contribution graph data
// If both fail, falls back to known-good static values so the site never breaks.

type ContributionDay = { date: string; count: number; level: number };
type ContributionsResponse = {
  total: Record<string, number>;
  contributions: ContributionDay[];
};

export type GitHubStats = {
  publicRepos: number;
  totalContributions: number;
  longestStreak: number;
  currentStreak: number;
  source: "live" | "fallback";
};

const FALLBACK: GitHubStats = {
  publicRepos: 38,
  totalContributions: 1818,
  longestStreak: 102,
  currentStreak: 0,
  source: "fallback",
};

export async function fetchGitHubStats(
  username: string = "shivadeepak99"
): Promise<GitHubStats> {
  try {
    const [userRes, contribRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        next: { revalidate: 3600 },
        headers: { Accept: "application/vnd.github.v3+json" },
      }),
      fetch(`https://github-contributions-api.jogruber.de/v4/${username}`, {
        next: { revalidate: 3600 },
      }),
    ]);

    const user = userRes.ok ? await userRes.json() : null;
    const contrib: ContributionsResponse | null = contribRes.ok
      ? await contribRes.json()
      : null;

    if (!user || !contrib) return FALLBACK;

    const days = contrib.contributions ?? [];
    const last365 = days.slice(-365);
    const totalContributions = last365.reduce((sum, d) => sum + d.count, 0);

    // Longest streak (over all time we have data for)
    let longestStreak = 0;
    let running = 0;
    for (const d of days) {
      if (d.count > 0) {
        running += 1;
        if (running > longestStreak) longestStreak = running;
      } else {
        running = 0;
      }
    }

    // Current streak (working backwards from today; tolerate today=0 as "day not done yet")
    let currentStreak = 0;
    for (let i = days.length - 1; i >= 0; i--) {
      if (days[i].count > 0) {
        currentStreak += 1;
      } else if (i === days.length - 1) {
        continue; // today might not have a commit yet
      } else {
        break;
      }
    }

    return {
      publicRepos: user.public_repos ?? 0,
      totalContributions,
      longestStreak,
      currentStreak,
      source: "live",
    };
  } catch {
    return FALLBACK;
  }
}
