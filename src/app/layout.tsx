import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "block",
});

export const metadata: Metadata = {
  title: "我的个人主页",
  description: "个人网站 — 专精、项目、生活与作品集",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#FFFDF5] text-black font-sans font-bold">
        {children}
      </body>
    </html>
  );
}
