import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "产品雷达 · AI 产品经理学习者的每周收藏",
  description:
    "一个学 AI 产品经理的人每周整理的三件事：要懂的知识、在用的工具、值得参考的项目。一半自己写，一半全网精挑。周五 12:00 更新。",
  openGraph: {
    title: "产品雷达 · AI 产品经理学习者的每周收藏",
    description:
      "知识 · 工具 · 参考项目。一个还在学 AI 产品经理的人每周整理的工作板。",
    type: "website",
    locale: "zh_CN",
    siteName: "产品雷达",
  },
  twitter: {
    card: "summary_large_image",
    title: "产品雷达",
    description: "AI 产品经理学习者的每周收藏板",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink">
        {children}
      </body>
    </html>
  );
}
