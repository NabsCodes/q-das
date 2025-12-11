import Link from "next/link";
import { ImageWithFallback } from "@/components/shared/image-with-fallback";
import { formatDate } from "@/lib/utils";
import { urlFor } from "@/lib/sanity/image";
import { cn } from "@/lib/utils";
import type { NewsArticle } from "@/lib/data/news";

interface NewsCardProps {
  article: NewsArticle;
  /** Card variant - 'default' for flat cards, 'elevated' for cards with shadow */
  variant?: "default" | "elevated";
  /** Show excerpt text */
  showExcerpt?: boolean;
  /** Additional class names */
  className?: string;
}

export function NewsCard({
  article,
  variant = "default",
  showExcerpt = true,
  className,
}: NewsCardProps) {
  const imageUrl = article.mainImage?.asset
    ? urlFor(article.mainImage).width(600).height(400).url()
    : article.image;

  return (
    <Link
      href={`/news/${article.slug}`}
      className={cn(
        "group flex flex-col",
        variant === "elevated" &&
          "overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200/50 transition-shadow hover:shadow-md",
        variant === "default" && "gap-4",
        className,
      )}
    >
      {/* Image */}
      <div
        className={cn(
          "relative aspect-3/2 w-full overflow-hidden",
          variant === "default" && "rounded-xl bg-gray-100",
          variant === "elevated" && "bg-gray-200",
        )}
      >
        <ImageWithFallback
          src={imageUrl}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div
        className={cn("flex flex-1 flex-col", variant === "elevated" && "p-5")}
      >
        {/* Meta */}
        <div className="mb-2 flex items-center gap-2 text-xs font-medium text-gray-500">
          <span className="text-primary font-semibold">{article.category}</span>
          <span>•</span>
          <span>{formatDate(article.date)}</span>
        </div>

        {/* Title */}
        <h3 className="font-display group-hover:text-primary mb-2 text-lg leading-snug font-bold text-gray-900 transition-colors">
          {article.title}
        </h3>

        {/* Excerpt */}
        {showExcerpt && article.excerpt && (
          <p className="line-clamp-2 text-sm leading-relaxed text-gray-600">
            {article.excerpt}
          </p>
        )}
      </div>
    </Link>
  );
}
