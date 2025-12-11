import { Skeleton } from "@/components/ui/skeleton";

export default function NewsLoading() {
  return (
    <main className="flex-1 bg-white">
      {/* Page Header Skeleton */}
      <section className="relative isolate overflow-hidden bg-white pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Badge & Title */}
            <div className="flex flex-col items-start lg:col-span-7">
              {/* Badge */}
              <Skeleton className="mb-6 h-8 w-32 rounded-full" />
              {/* Title */}
              <div className="w-full space-y-4">
                <Skeleton className="h-12 w-full max-w-xl md:h-16 lg:h-20" />
                <Skeleton className="h-12 w-3/4 max-w-lg md:h-16 lg:h-20" />
              </div>
            </div>

            {/* Right Column: Description */}
            <div className="flex flex-col justify-end pb-1 lg:col-span-5">
              <div className="relative pl-6 md:pl-8">
                {/* Vertical Line */}
                <div className="bg-primary/20 absolute top-0 left-0 h-full w-[2px]" />
                <div className="space-y-3">
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-full" />
                  <Skeleton className="h-5 w-2/3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Content Skeleton */}
      <section className="bg-white py-8 lg:pt-8">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {/* Filter Bar */}
          <div className="mb-10 flex flex-col gap-6 border-b border-gray-100 pb-6 md:flex-row md:items-center md:justify-between">
            {/* Category Pills */}
            <div className="flex items-center gap-2">
              {[60, 80, 72, 64, 88, 70].map((width, i) => (
                <Skeleton
                  key={i}
                  className="h-9 rounded-full"
                  style={{ width: `${width}px` }}
                />
              ))}
            </div>
            {/* Search */}
            <Skeleton className="h-10 w-full md:w-72" />
          </div>

          {/* Hero Grid Skeleton */}
          <div className="mb-16 grid gap-6 lg:grid-cols-3 lg:grid-rows-2">
            {/* Main Hero */}
            <div className="lg:col-span-2 lg:row-span-2">
              <Skeleton className="h-[400px] w-full rounded-2xl lg:h-[500px]" />
            </div>
            {/* Sub Heroes */}
            <div className="flex flex-col gap-6 lg:col-span-1 lg:row-span-2">
              <Skeleton className="min-h-[240px] flex-1 rounded-2xl" />
              <Skeleton className="min-h-[240px] flex-1 rounded-2xl" />
            </div>
          </div>

          {/* Latest News Header */}
          <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
            <Skeleton className="h-8 w-40" />
          </div>

          {/* Article Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <ArticleCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ArticleCardSkeleton() {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-100 bg-white">
      {/* Image */}
      <Skeleton className="aspect-video w-full" />
      {/* Content */}
      <div className="p-5">
        {/* Category & Date */}
        <div className="mb-3 flex items-center gap-3">
          <Skeleton className="h-5 w-16 rounded-full" />
          <Skeleton className="h-4 w-24" />
        </div>
        {/* Title */}
        <Skeleton className="mb-2 h-6 w-full" />
        <Skeleton className="mb-3 h-6 w-3/4" />
        {/* Excerpt */}
        <Skeleton className="mb-1 h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>
    </div>
  );
}
