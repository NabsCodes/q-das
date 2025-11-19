import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Q-DAS Global | Government ICT Solutions",
  description:
    "Q-DAS Global provides innovative ICT solutions for government agencies in Nigeria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col font-sans antialiased`}
      >
        {/* Header */}
        <header className="border-charcoal-200 border-b bg-white">
          <nav className="container mx-auto flex items-center justify-between px-4 py-4">
            <div className="text-navy-900 text-xl font-bold">Q-DAS Global</div>
            <ul className="flex gap-6">
              <li>
                <a
                  href="#"
                  className="text-charcoal-600 hover:text-accent-orange transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-charcoal-600 hover:text-accent-orange transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-charcoal-600 hover:text-accent-orange transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-charcoal-600 hover:text-accent-orange transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main content */}
        {children}

        {/* Footer */}
        <footer className="bg-navy-900 mt-auto text-white">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="text-lg font-semibold">Q-DAS Global</div>
              <p className="text-charcoal-300">
                &copy; {new Date().getFullYear()} Q-DAS Global. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
