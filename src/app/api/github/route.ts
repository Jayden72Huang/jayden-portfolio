import { NextResponse } from "next/server";

const GITHUB_USERNAME = "Jayden72Huang";

export async function GET() {
  try {
    // Fetch the contribution graph HTML from GitHub profile
    const contribRes = await fetch(
      `https://github.com/users/${GITHUB_USERNAME}/contributions`,
      {
        headers: {
          "User-Agent": "jayden-portfolio",
          Accept: "text/html",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );
    const contribHtml = await contribRes.text();

    // Parse contribution data from the HTML
    // GitHub returns <td> elements with data-date and data-level attributes
    const dailyData: { date: string; level: number }[] = [];
    const tdRegex =
      /data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d)"/g;
    let match;
    while ((match = tdRegex.exec(contribHtml)) !== null) {
      dailyData.push({ date: match[1], level: parseInt(match[2]) });
    }

    // Also try the alternate format where level comes before date
    const tdRegex2 =
      /data-level="(\d)"[^>]*data-date="(\d{4}-\d{2}-\d{2})"/g;
    while ((match = tdRegex2.exec(contribHtml)) !== null) {
      const exists = dailyData.some((d) => d.date === match![2]);
      if (!exists) {
        dailyData.push({ date: match[2], level: parseInt(match[1]) });
      }
    }

    // Sort by date
    dailyData.sort((a, b) => a.date.localeCompare(b.date));

    // Extract total contributions from the heading
    // Format: "117 contributions in 2026" or "132 contributions in the last year"
    const totalMatch = contribHtml.match(
      /(\d[\d,]*)\s+contributions?\s+in\s+the\s+last\s+year/i
    );
    const yearTotalMatch = contribHtml.match(
      /(\d[\d,]*)\s+contributions?\s+in\s+\d{4}/i
    );

    const lastYearTotal = totalMatch
      ? parseInt(totalMatch[1].replace(/,/g, ""))
      : 0;
    const yearTotal = yearTotalMatch
      ? parseInt(yearTotalMatch[1].replace(/,/g, ""))
      : lastYearTotal;

    // Build 20 weeks × 7 days grid from the last 140 days
    const now = new Date();
    const startDate = new Date(now);
    startDate.setDate(startDate.getDate() - 139);
    // Align to start of week (Sunday)
    startDate.setDate(startDate.getDate() - startDate.getDay());

    const dateMap = new Map(dailyData.map((d) => [d.date, d.level]));

    const weeks: number[][] = [];
    const cursor = new Date(startDate);
    for (let w = 0; w < 20; w++) {
      const week: number[] = [];
      for (let d = 0; d < 7; d++) {
        const dateStr = cursor.toISOString().split("T")[0];
        week.push(dateMap.get(dateStr) ?? 0);
        cursor.setDate(cursor.getDate() + 1);
      }
      weeks.push(week);
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
    const profile = profileRes.ok ? await profileRes.json() : null;

    return NextResponse.json({
      username: GITHUB_USERNAME,
      publicRepos: profile?.public_repos ?? 13,
      totalRepos: (profile?.public_repos ?? 13) + (profile?.total_private_repos ?? 16),
      yearContributions: yearTotal || lastYearTotal,
      lastYearContributions: lastYearTotal,
      heatmap: weeks,
      lastUpdated: new Date().toISOString(),
    });
  } catch (error) {
    // Fallback on error
    return NextResponse.json(
      {
        username: GITHUB_USERNAME,
        publicRepos: 13,
        totalRepos: 29,
        yearContributions: 117,
        lastYearContributions: 132,
        heatmap: Array.from({ length: 20 }, () => Array(7).fill(0)),
        lastUpdated: new Date().toISOString(),
        error: "Failed to fetch, using cached data",
      },
      { status: 200 }
    );
  }
}
