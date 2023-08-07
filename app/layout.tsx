import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import "@smastrom/react-rating/style.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
const inter = Inter({ subsets: ["latin"] });
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: "Cineverse",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Analytics />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="lg:flex max-w-full">
            <Navbar />
            <div className="flex flex-1 w-full overflow-hidden p-4">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
