import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Live2DWidget from "@/components/Live2DWidget";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "block",
});

export const metadata: Metadata = {
  title: "于昊天 · AI 训练师",
  description: "于昊天个人主页 — AI 评测工程师，专注大模型横评与自动化工作流搭建",
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
        <Live2DWidget />
      </body>
    </html>
  );
}
