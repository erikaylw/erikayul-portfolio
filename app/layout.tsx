import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://erikayul.my.id"),
  title: {
    default: "Erika Yuliana | Portfolio",
    template: "%s | Erika Yuliana"
  },
  description:
    "Portfolio Erika Yuliana, menampilkan profil, skill, pengalaman, project, dan kontak profesional.",
  openGraph: {
    title: "Erika Yuliana | Portfolio",
    description:
      "Profil profesional Erika Yuliana dengan ringkasan skill, project, pengalaman, dan kontak.",
    url: "https://erikayul.my.id",
    siteName: "Erika Yuliana Portfolio",
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
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
