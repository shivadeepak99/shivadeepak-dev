// Lightweight GitHub profile metadata. Streak and contribution details are
// rendered from the live github-readme-streak-stats image in the UI.

export type GitHubStats = {
  publicRepos: number | null;
  source: "live" | "unavailable";
};

export async function fetchGitHubStats(
  username: string = "shivadeepak99"
): Promise<GitHubStats> {
  try {
    const userRes = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github.v3+json" },
    });

    if (!userRes.ok) {
      return { publicRepos: null, source: "unavailable" };
    }

    const user = await userRes.json();

    return {
      publicRepos: typeof user.public_repos === "number" ? user.public_repos : null,
      source: "live",
    };
  } catch {
    return { publicRepos: null, source: "unavailable" };
  }
}
