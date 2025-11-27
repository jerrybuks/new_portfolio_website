import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jerry Chibuokem - Software & Blockchain Architect",
  description: "Software Engineer & Architect with 7 years of experience building and scaling web and blockchain applications. CTO at Panenka FC, specializing in Web3, smart contracts, and full-stack development.",
  keywords: ["Software Engineer", "Blockchain Developer", "CTO", "Web3", "Smart Contracts", "Full Stack Developer", "React", "Next.js", "StarkNet", "Solidity"],
  authors: [{ name: "Jerry Chibuokem" }],
  creator: "Jerry Chibuokem",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jerrychibuokem.com",
    title: "Jerry Chibuokem - Software & Blockchain Architect",
    description: "Software Engineer & Architect with 7 years of experience building and scaling web and blockchain applications.",
    siteName: "Jerry Chibuokem Portfolio",
    images: [
      {
        url: "/profile-v2.jpg",
        width: 1200,
        height: 630,
        alt: "Jerry Chibuokem - Software & Blockchain Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jerry Chibuokem - Software & Blockchain Architect",
    description: "Software Engineer & Architect specializing in Web3 and full-stack development.",
    images: ["/profile-v2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider>
          <CustomCursor />
          <ScrollProgress />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
