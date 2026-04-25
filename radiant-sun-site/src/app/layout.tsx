import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Radiant Sun",
  description: "This is the official landing page for the video game Radiant Sun. Radiant Sun is an Role Playing Game with super heroes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>

        <link rel="icon" href="/icons/bytesized-orange.png" />

      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        { children }

      </body>

    </html>
  );
}
