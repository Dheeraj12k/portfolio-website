import { ARTICLES_ENABLED } from "@/lib/config/features";

export async function GET() {
  if (!ARTICLES_ENABLED) {
    return Response.json([], { status: 200 });
  }

  return Response.json([], { status: 200 });
}

export async function POST() {
  if (!ARTICLES_ENABLED) {
    return new Response("Blog tracking is disabled.", { status: 200 });
  }

  return new Response("Blog tracking is disabled.", { status: 200 });
}
