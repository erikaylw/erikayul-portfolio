import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://erikayul.my.id"),
  title: {
    default: "Erika Yuliani Lukmawati | Tax & Accounting Professional",
    template: "%s | Erika Yuliani Lukmawati"
  },
  description:
    "Tax & Accounting Professional with 5+ years experience in tax compliance, financial reporting, bank reconciliation, Coretax, e-SPT, PPN, and PPh.",
  keywords: [
    "Tax Staff",
    "Accounting Staff",
    "Tax Compliance",
    "Tax Administration",
    "Financial Reporting",
    "Bank Reconciliation",
    "Coretax",
    "e-SPT",
    "PPN",
    "PPh",
    "Erika Yuliani Lukmawati"
  ],
  openGraph: {
    title: "Erika Yuliani Lukmawati | Tax & Accounting Professional",
    description:
      "Portfolio profesional untuk Tax Staff, Tax & Accounting Staff, Finance Administration, dan Accounting Staff.",
    url: "https://erikayul.my.id",
    siteName: "Erika Yuliani Lukmawati Portfolio",
    locale: "id_ID",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
