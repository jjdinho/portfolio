import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jake Johnson",
  description: "Posts and poems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="mx-auto max-w-2xl px-6 py-12">
          <header className="mb-16 flex items-center justify-between">
            <Link
              href="/"
              className="text-fg font-semibold tracking-tight hover:text-teal transition-colors"
            >
              Jake Johnson
            </Link>
            <nav className="flex gap-6 text-sm text-muted">
              <Link
                href="/about"
                className="hover:text-fg transition-colors"
              >
                About
              </Link>
              <Link
                href="/posts"
                className="hover:text-fg transition-colors"
              >
                Posts
              </Link>
              <Link
                href="/poems"
                className="hover:text-fg transition-colors"
              >
                Poems
              </Link>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
