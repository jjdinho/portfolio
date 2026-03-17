import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
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
      <head>
        <Script id="sessionvision-init" strategy="afterInteractive">{`
          !function(){"use strict";!function(s,n){const t=n.sessionvision;if(t&&t.__SV)return;const e={_i:[],_q:[],init:function(n,t){e._i.push([n,t]);const i=["capture","identify","reset","getDistinctId","register","registerOnce"];for(const s of i)e[s]=function(...n){e._q.push([s,...n])};const o=s.createElement("script");o.async=!0,o.src=(t?.apiHost||"https://cdn.sessionvision.com")+"/"+(t?.version||"latest")+"/sessionvision.min.js";const c=s.getElementsByTagName("script")[0];c&&c.parentNode?c.parentNode.insertBefore(o,c):s.head.appendChild(o)}};n.sessionvision=e}(document,window)}();
          sessionvision.init('sv_pub_8tQbUJS0E5eKvhd1HCT80idedQmw669f9V3xqGNfMg8');
        `}</Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="mx-auto max-w-2xl px-6 py-12">
          <header className="mb-16 flex items-center justify-between">
            <Link
              href="/"
              className="text-fg font-semibold tracking-tight hover:text-accent transition-colors"
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
