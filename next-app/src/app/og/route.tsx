import { ImageResponse } from "next/og";
import { siteConfig } from "@/static/config/site";
import { ARTICLES_ENABLED } from "@/lib/config/features";

const FONT_FAMILY = "Inter, Arial, sans-serif";
const BRAND_COLOR = "#0EA5E9";

function getInitials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((chunk) => chunk[0]?.toUpperCase() ?? "")
    .join("")
    .slice(0, 3);
}

export function GET(request: Request) {
  const url = new URL(request.url);
  const requestedTitle = url.searchParams.get("title")?.trim();

  const baseTitle = requestedTitle && requestedTitle.length > 0
    ? requestedTitle
    : ARTICLES_ENABLED
      ? `${siteConfig.name} | ${siteConfig.description}`
      : `${siteConfig.name} | New stories coming soon`;

  const footerText = ARTICLES_ENABLED
    ? "Explore case studies, data stories, and analytics insights."
    : "Content is on the way. Stay tuned for upcoming write-ups.";

  try {
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            background: "linear-gradient(135deg, #020617 0%, #0F172A 50%, #1E293B 100%)",
            color: "white",
            padding: "60px",
            justifyContent: "space-between",
            fontFamily: FONT_FAMILY,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: BRAND_COLOR,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  color: "#0B1120",
                }}
              >
                {getInitials(siteConfig.name || "DK")}
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: 24, fontWeight: 600 }}>
                  {siteConfig.name || "Dheeraj K"}
                </span>
                <span style={{ fontSize: 18, opacity: 0.7 }}>
                  {siteConfig.description || "Portfolio & analytics playground"}
                </span>
              </div>
            </div>
            <div
              style={{
                fontSize: 50,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: "1.1",
                maxWidth: 900,
              }}
            >
              {baseTitle}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              opacity: 0.8,
              fontSize: 22,
            }}
          >
            <span>{footerText}</span>
            <span>{siteConfig.url?.replace(/^https?:\/\//, "") ?? "dheeraj.dev"}</span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    return new Response("Failed to create OG Image", { status: 500 });
  }
}
