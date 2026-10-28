import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Md. Jikrul Islam Jeto | Web Developer & Competitive Programmer",
    template: "%s | Md. Jikrul Islam Jeto",
  },
  description:
    "Portfolio of Md. Jikrul Islam Jeto, a web developer and competitive programmer focused on building practical applications and solving problems.",
  keywords: [
    "Md. Jikrul Islam Jeto",
    "Jikrul Islam Jeto",
    "Web Developer",
    "Competitive Programmer",
    "React Developer",
    "MERN Stack Developer",
    "Bangladesh",
  ],
  authors: [{ name: "Md. Jikrul Islam Jeto" }],
  creator: "Md. Jikrul Islam Jeto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
