"use client";

import { useState, useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaFacebook, FaXTwitter } from "react-icons/fa6";
import { HiLink, HiCheck } from "react-icons/hi";
import { cn } from "@/lib/utils";

interface ShareButtonsProps {
  /** The canonical URL to share (required for SSR safety) */
  url: string;
  /** The title/text to share */
  title: string;
  /** Optional description for platforms that support it */
  description?: string;
  /** Additional class names */
  className?: string;
}

const SHARE_PLATFORMS = [
  {
    name: "Twitter",
    icon: FaXTwitter,
    hoverColor: "hover:text-[#1DA1F2]",
    getUrl: (url: string, title: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    hoverColor: "hover:text-[#0A66C2]",
    getUrl: (url: string) =>
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    hoverColor: "hover:text-[#1877F2]",
    getUrl: (url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  },
] as const;

// useSyncExternalStore helpers for detecting native share capability
// This is the React 18+ recommended pattern for browser-only feature detection
const emptySubscribe = () => () => {};
const getClientSnapshot = () => typeof navigator?.share === "function";
const getServerSnapshot = () => false;

export function ShareButtons({
  url,
  title,
  description,
  className,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  // Detect native share capability using useSyncExternalStore
  // Server always returns false, client checks the actual capability after hydration
  const canNativeShare = useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const handleShare = (shareUrl: string) => {
    window.open(shareUrl, "share", "width=600,height=400,menubar=0");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = url;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleNativeShare = async () => {
    if (!navigator.share) return;
    try {
      await navigator.share({ title, text: description, url });
    } catch {
      // User cancelled - that's fine
    }
  };

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {/* Platform-specific share buttons */}
      {SHARE_PLATFORMS.map((platform) => (
        <Button
          key={platform.name}
          variant="ghost"
          size="icon"
          onClick={() => handleShare(platform.getUrl(url, title))}
          title={`Share on ${platform.name}`}
          className={cn(
            "h-9 w-9 rounded-full text-gray-500 hover:bg-gray-100",
            platform.hoverColor,
          )}
        >
          <platform.icon className="h-4 w-4" />
          <span className="sr-only">Share on {platform.name}</span>
        </Button>
      ))}

      {/* Copy link button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={handleCopy}
        title={copied ? "Copied!" : "Copy link"}
        className={cn(
          "h-9 w-9 rounded-full text-gray-500 hover:bg-gray-100",
          copied ? "text-green-500" : "hover:text-gray-900",
        )}
      >
        {copied ? (
          <HiCheck className="h-4 w-4" />
        ) : (
          <HiLink className="h-4 w-4" />
        )}
        <span className="sr-only">{copied ? "Copied" : "Copy link"}</span>
      </Button>

      {/* Native share (mobile enhancement) - renders after mount if supported */}
      {canNativeShare && (
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNativeShare}
          title="More sharing options"
          className="hover:text-primary h-9 w-9 rounded-full text-gray-500 hover:bg-gray-100"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
          <span className="sr-only">More sharing options</span>
        </Button>
      )}
    </div>
  );
}
