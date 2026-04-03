import { NextResponse } from "next/server";

const GITHUB_USERNAME = "Jayden72Huang";

interface GithubEvent {
  type: string;
  created_at: string;
}

export async function GET() {
  try {
    // Fetch recent events (up to 300 events across 3 pages)
    const allEvents: GithubEvent[] = [];
    for (let page = 1; page <= 3; page++) {
      const res = await fetch(
        `https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=100&page=${page}`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            "User-Agent": "jayden-portfolio",
          },
          next: { revalidate: 3600 }, // Cache for 1 hour
        }
      );
      if (!res.ok) break;
      const events = await res.json();
      if (events.length === 0) break;
      allEvents.push(...events);
    }

    // Fetch user profile for repo count
    const profileRes = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "jayden-portfolio",
        },
        next: { revalidate: 3600 },
      }
    );
    const profile = await profileRes.json();

    // Build daily activity map for the last 140 days (20 weeks)
    const now = new Date();
    const daysBack = 140;
    const startDate = new Date(now);
    startDate.setDate(startDate.getDate() - daysBack);

    // Count events per day
    const dailyCounts: Record<string, number> = {};
    for (const event of allEvents) {
      const date = event.created_at.split("T")[0];
      dailyCounts[date] = (dailyCounts[date] || 0) + 1;
    }

    // Build 20 weeks × 7 days grid
    const weeks: number[][] = [];
    const cursor = new Date(startDate);
    // Align to start of week (Sunday)
    cursor.setDate(cursor.getDate() - cursor.getDay());

    for (let w = 0; w < 20; w++) {
      const week: number[] = [];
      for (let d = 0; d < 7; d++) {
        const dateStr = cursor.toISOString().split("T")[0];
        const count = dailyCounts[dateStr] || 0;
        // Convert to intensity level 0-4
        let level = 0;
        if (count >= 1) level = 1;
        if (count >= 3) level = 2;
        if (count >= 6) level = 3;
        if (count >= 10) level = 4;
        week.push(level);
        cursor.setDate(cursor.getDate() + 1);
      }
      weeks.push(week);
    }

    // Count total contributions this year
    const yearStart = `${now.getFullYear()}-01-01`;
    let yearTotal = 0;
    for (const [date, count] of Object.entries(dailyCounts)) {
      if (date >= yearStart) yearTotal += count;
    }

    return NextResponse.json({
      username: GITHUB_USERNAME,
      publicRepos: profile.public_repos || 12,
      yearContributions: yearTotal,
      heatmap: weeks,
      lastUpdated: new Date().toISOString(),
    });
  } catch (error) {
    // Fallback with empty data on error
    return NextResponse.json(
      {
        username: GITHUB_USERNAME,
        publicRepos: 12,
        yearContributions: 0,
        heatmap: Array.from({ length: 20 }, () => Array(7).fill(0)),
        lastUpdated: new Date().toISOString(),
        error: "Failed to fetch GitHub data",
      },
      { status: 200 }
    );
  }
}
