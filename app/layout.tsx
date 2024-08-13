import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aksamedia Test Code",
  description: "By Raihan Adi Nugroho",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className + " dark:bg-slate-900 dark:text-white"}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
