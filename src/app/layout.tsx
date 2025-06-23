import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import GlobalStyles from "./styles/GlobalStyles";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo List",
  description: "My Todo List",
  icons: {
    icon: "/favicon.png",
}
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <GlobalStyles/>
        {children}
      </body>
    </html>
  );
}
