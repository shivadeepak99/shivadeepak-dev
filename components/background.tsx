// Async server component — fetches live GitHub stats with hourly revalidation,
// then hands off to the client view for animations.

import { fetchGitHubStats } from "@/lib/github";
import { BackgroundView } from "./background-view";

export async function Background() {
  const stats = await fetchGitHubStats();
  return <BackgroundView stats={stats} />;
}
