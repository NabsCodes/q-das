import { Skeleton } from "@/components/ui/skeleton";

export default function TeamMemberLoading() {
  return (
    <main className="min-h-screen bg-white pt-28 pb-16">
      {/* Back Link */}
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="mb-8 md:mb-12">
          <Skeleton className="h-5 w-28" />
        </div>
      </div>

      {/* Hero Profile Section */}
      <section className="bg-white pb-16 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Left Column - Photo */}
            <div className="lg:col-span-5">
              <Skeleton className="aspect-4/5 w-full rounded-[28px]" />
            </div>

            {/* Right Column - Content */}
            <div className="flex flex-col justify-center lg:col-span-7">
              {/* Name */}
              <div className="mb-8">
                <Skeleton className="mb-3 h-12 w-3/4 md:h-14" />
                <Skeleton className="h-12 w-1/2 md:h-14" />
              </div>

              {/* Role & Short Bio */}
              <div className="mb-8 border-l-[3px] border-blue-200 py-1 pl-6 md:pl-8">
                <Skeleton className="mb-3 h-4 w-32" />
                <Skeleton className="mb-2 h-6 w-full" />
                <Skeleton className="h-6 w-4/5" />
              </div>

              {/* Bio Content */}
              <div className="space-y-4">
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-3/4" />
                <Skeleton className="mt-6 h-5 w-full" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-5/6" />
              </div>

              {/* Social Links */}
              <div className="mt-10">
                <Skeleton className="mb-4 h-4 w-36" />
                <div className="flex gap-3">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="h-12 w-12 rounded-full" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Team Members Section */}
      <section className="border-t border-gray-200 bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-10 flex items-center justify-between">
            <Skeleton className="h-8 w-40" />
            <Skeleton className="h-5 w-20" />
          </div>

          {/* Team Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <CompactCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function CompactCardSkeleton() {
  return (
    <div className="h-full rounded-2xl bg-white ring-1 ring-gray-200">
      <div className="flex items-center gap-4 p-4">
        {/* Avatar Image */}
        <Skeleton className="h-16 w-16 shrink-0 rounded-full" />

        {/* Header Info */}
        <div className="min-w-0 flex-1 space-y-2">
          <Skeleton className="h-5 w-3/4 rounded-full" />
          <Skeleton className="h-3 w-1/2 rounded-full" />
        </div>
      </div>

      {/* Short Bio Snippet */}
      <div className="px-4 pb-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="mt-1 h-4 w-2/3" />
      </div>
    </div>
  );
}
