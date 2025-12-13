import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

// Configurable mapping - easy to extend for new content types
const REVALIDATE_PATHS: Record<string, string[]> = {
  // Content type → paths to revalidate
  post: ["/news"],
  teamMember: ["/team"],
  testimonial: ["/"],
  author: ["/news"],
  faq: ["/"],
  partner: ["/"],

  // Future content types - just add a line:
  // service: ["/services", "/"],
  // project: ["/projects", "/"],
};

// Map content types to their dynamic route base paths
const DYNAMIC_ROUTES: Record<string, string> = {
  post: "/news",
  teamMember: "/team",
};

export async function POST(req: NextRequest) {
  try {
    // Verify the secret
    const secret = req.nextUrl.searchParams.get("secret");

    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    // Parse the webhook payload
    const body = await req.json();
    const _type = body._type;
    // Handle both formats: projection gives `slug`, full doc gives `slug.current`
    const slug = body.slug?.current || body.slug;

    if (!_type) {
      return NextResponse.json(
        { message: "Missing _type in payload" },
        { status: 400 },
      );
    }

    const revalidatedPaths: string[] = [];

    // Get paths to revalidate for this content type
    const paths = REVALIDATE_PATHS[_type];

    if (paths) {
      // Revalidate the list pages
      for (const path of paths) {
        revalidatePath(path);
        revalidatedPaths.push(path);
      }

      // If there's a slug and this type has dynamic routes, revalidate the specific page
      if (slug && DYNAMIC_ROUTES[_type]) {
        const dynamicPath = `${DYNAMIC_ROUTES[_type]}/${slug}`;
        revalidatePath(dynamicPath);
        revalidatedPaths.push(dynamicPath);
      }
    } else {
      // Unknown content type - revalidate homepage as fallback
      revalidatePath("/");
      revalidatedPaths.push("/");
    }

    return NextResponse.json({
      revalidated: true,
      paths: revalidatedPaths,
      type: _type,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { message: "Error revalidating", error: String(error) },
      { status: 500 },
    );
  }
}
