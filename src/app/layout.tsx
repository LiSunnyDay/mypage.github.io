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
      <body className="min-h-full bg-transparent text-black font-sans font-bold">
        {/* Fixed full-page video background */}
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          style={{ position: "fixed", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: -1 }}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4"
        />
        {children}
        <Live2DWidget />
      </body>
    </html>
  );
}
