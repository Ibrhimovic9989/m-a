import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muneer & Associates — Chartered Accountants in Hyderabad",
  description:
    "A Hyderabad-based chartered accountancy firm simplifying financial complexities since 2012. Audit, taxation, GST, ROC and advisory for businesses and individuals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="bg-bone text-ink antialiased">{children}</body>
    </html>
  );
}
