import { Skeleton } from "@/components/ui/skeleton";

export default function ArticleLoading() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-16">
      <article className="pb-14 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {/* Back Link */}
          <div className="mb-4 md:mb-8">
            <Skeleton className="h-5 w-32" />
          </div>

          {/* Article Title Area */}
          <div className="mb-4 lg:mb-8">
            {/* Category Badge */}
            <div className="mb-6">
              <Skeleton className="h-7 w-20 rounded-full" />
            </div>
            {/* Title */}
            <Skeleton className="mb-3 h-10 w-full max-w-4xl md:h-12" />
            <Skeleton className="h-10 w-3/4 max-w-3xl md:h-12" />
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-3">
              <div className="flex flex-col gap-6 border-y border-gray-100 py-6 lg:sticky lg:top-32 lg:space-y-8 lg:border-y-0 lg:border-l-2 lg:border-gray-100 lg:py-0 lg:pl-6">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 lg:block lg:space-y-8">
                  {/* Published On */}
                  <div>
                    <Skeleton className="mb-2 h-4 w-24" />
                    <Skeleton className="h-5 w-32" />
                  </div>
                  {/* Author */}
                  <div>
                    <Skeleton className="mb-2 h-4 w-16" />
                    <div className="flex items-center gap-3">
                      <Skeleton className="hidden h-8 w-8 rounded-full lg:block" />
                      <Skeleton className="h-5 w-28" />
                    </div>
                  </div>
                  {/* Read Time */}
                  <div>
                    <Skeleton className="mb-2 h-4 w-20" />
                    <Skeleton className="h-5 w-24" />
                  </div>
                </div>

                {/* Share Section */}
                <div className="mt-2 lg:mt-0">
                  <Skeleton className="mb-3 hidden h-5 w-12 lg:block" />
                  <div className="flex items-center gap-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <Skeleton key={i} className="h-9 w-9 rounded-full" />
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="min-w-0 lg:col-span-9">
              {/* Hero Image */}
              <Skeleton className="mb-10 aspect-video w-full rounded-2xl md:rounded-3xl lg:mb-12" />

              {/* Article Content Skeleton */}
              <div className="space-y-6">
                {/* Paragraph */}
                <div className="space-y-3">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-4/5" />
                </div>

                {/* Heading */}
                <Skeleton className="mt-8 h-8 w-2/3" />

                {/* Paragraph */}
                <div className="space-y-3">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-3/4" />
                </div>

                {/* Code Block Skeleton */}
                <div className="my-8 overflow-hidden rounded-lg border border-gray-200">
                  <Skeleton className="h-10 w-full rounded-none" />
                  <Skeleton className="h-40 w-full rounded-none" />
                </div>

                {/* More paragraphs */}
                <div className="space-y-3">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-5/6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="border-t border-gray-200 bg-gray-50 py-8 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-12 flex items-center justify-between">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="hidden h-5 w-20 md:block" />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <RelatedCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function RelatedCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      <Skeleton className="aspect-video w-full" />
      <div className="p-5">
        <div className="mb-3 flex items-center gap-3">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </div>
        <Skeleton className="mb-2 h-6 w-full" />
        <Skeleton className="h-6 w-2/3" />
      </div>
    </div>
  );
}
