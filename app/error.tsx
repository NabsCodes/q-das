"use client";

import { useEffect } from "react";
import Link from "next/link";
import { HiRefresh, HiHome } from "react-icons/hi";
import { motion } from "motion/react";
import { HiExclamationTriangle } from "react-icons/hi2";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Application error:", error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Error Icon */}
          <div className="bg-primary/10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full">
            <HiExclamationTriangle className="text-primary h-10 w-10" />
          </div>

          {/* Title */}
          <h1 className="font-display mb-4 text-2xl font-bold text-gray-900 md:text-4xl">
            Something went wrong
          </h1>

          {/* Description */}
          <p className="mx-auto mb-8 max-w-md text-gray-500 md:text-lg">
            We apologize for the inconvenience. An unexpected error has
            occurred. Please try again or return to the homepage.
          </p>

          {/* Error digest for debugging (only in development) */}
          {error.digest && process.env.NODE_ENV === "development" && (
            <p className="mb-6 font-mono text-sm text-gray-400">
              Error ID: {error.digest}
            </p>
          )}

          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={reset}
              className="bg-primary hover:bg-primary/90 flex w-full items-center justify-center gap-2 rounded-full px-8 py-3 text-base font-bold text-white transition-all hover:shadow-sm sm:w-auto"
            >
              <HiRefresh className="h-5 w-5" />
              Try Again
            </button>
            <Link
              href="/"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-3 text-base font-bold text-gray-700 transition-all hover:bg-gray-50 hover:shadow-sm sm:w-auto"
            >
              <HiHome className="h-5 w-5" />
              Go Home
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
