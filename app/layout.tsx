import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muneer & Associates — Chartered Accountants in Hyderabad",
  description:
    "A Hyderabad-based chartered accountancy firm simplifying financial complexities since 2012. Audit, taxation, GST, ROC and advisory for businesses and individuals.",
};

// Inline pre-hydration script — sets theme before first paint to avoid FOUC.
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(!t){t='sepia';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','sepia');}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable} data-theme="sepia">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-bone text-ink antialiased">{children}</body>
    </html>
  );
}
