import type { Metadata } from "next";
import "./globals.css";
import { Container } from "@/components/container";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "The Blogg - Um blog criado com Next.js",
  description: "Um blog criado com Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Container>
          <Header />

          {children}

          <footer>
            <p className="text-center py-4">
              © 2025 My Blog. All rights reserved.
            </p>
          </footer>
        </Container>
      </body>
    </html>
  );
}
