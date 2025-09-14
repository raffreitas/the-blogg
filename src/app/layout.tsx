import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Blogg - Um blog criado com Next.js",
  description: "Um blog criado com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
