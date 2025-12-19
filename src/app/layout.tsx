import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV TAKASIMA - Solusi Terbaik untuk Bisnis Anda",
  description: "CV TAKASIMA adalah perusahaan profesional yang berkomitmen menyediakan layanan berkualitas tinggi dengan integritas dan keunggulan dalam setiap pelayanan. Terletak di Sekadau, Kalimantan Barat.",
  keywords: ["CV TAKASIMA", "konsultasi bisnis", "manajemen proyek", "pengembangan usaha", "Sekadau", "Kalimantan Barat", "profesional", "berkualitas"],
  authors: [{ name: "CV TAKASIMA Team" }],
  icons: {
    icon: "/takasima-logo.png",
  },
  openGraph: {
    title: "CV TAKASIMA - Solusi Bisnis Profesional",
    description: "Perusahaan profesional yang berkomitmen pada kualitas dan integritas dalam setiap layanan",
    url: "https://takasima.com",
    siteName: "CV TAKASIMA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV TAKASIMA - Solusi Terbaik untuk Bisnis Anda",
    description: "Perusahaan profesional yang berkomitmen menyediakan layanan berkualitas tinggi dengan integritas dan keunggulan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
