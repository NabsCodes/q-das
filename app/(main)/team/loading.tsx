import { Skeleton } from "@/components/ui/skeleton";

export default function TeamLoading() {
  return (
    <main className="flex-1">
      {/* Page Header Skeleton */}
      <section className="relative isolate overflow-hidden bg-white pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-end gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Left Column: Badge & Title */}
            <div className="flex flex-col items-start lg:col-span-7">
              {/* Badge */}
              <Skeleton className="mb-6 h-8 w-36 rounded-full" />
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

      {/* Team Content Skeleton */}
      <section className="bg-gray-50 py-16 lg:pt-20 lg:pb-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {Array.from({ length: 5 }).map((_, i) => (
              <TeamMemberCardSkeleton key={i} />
            ))}
            {/* Join Card Skeleton */}
            <div className="h-full rounded-[32px] border-2 border-dashed border-gray-200 bg-gray-50 p-6 md:p-8">
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center">
                <Skeleton className="mb-6 h-16 w-16 rounded-full" />
                <Skeleton className="mb-3 h-6 w-32" />
                <Skeleton className="mb-2 h-4 w-48" />
                <Skeleton className="mb-8 h-4 w-40" />
                <Skeleton className="h-10 w-32 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Values Skeleton */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <Skeleton className="mx-auto mb-4 h-10 w-64" />
            <Skeleton className="mx-auto h-6 w-96" />
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 p-6">
                <Skeleton className="mb-4 h-12 w-12 rounded-xl" />
                <Skeleton className="mb-2 h-6 w-32" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="mt-1 h-4 w-3/4" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function TeamMemberCardSkeleton() {
  return (
    <div className="group h-full">
      {/* Gradient Border Wrapper */}
      <div className="h-full rounded-[32px] bg-linear-to-b from-blue-200 to-purple-200 p-[3px]">
        <div className="flex h-full flex-col overflow-hidden rounded-[29px] bg-white">
          {/* Image Container */}
          <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
            <Skeleton className="h-full w-full rounded-none" />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col items-center justify-center p-6 text-center md:p-8">
            <Skeleton className="mb-2 h-7 w-3/4 rounded-full" />
            <Skeleton className="h-5 w-1/2 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
