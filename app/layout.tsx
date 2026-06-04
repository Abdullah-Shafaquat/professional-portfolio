import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Abdullah - AI & Full Stack Web Developer Portfolio",
  description:
    "AI & Full Stack Web Developer specializing in Next.js, React, TypeScript, Python, and AI technologies. Building intelligent, scalable web applications.",
  keywords: [
    "AI Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Muhammad Abdullah" }],
  creator: "Muhammad Abdullah",
  publisher: "Muhammad Abdullah",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://abdullah-portfolio.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Header />
        <main className="flex-1 pt-[4.5rem] sm:pt-[5rem]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
