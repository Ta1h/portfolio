import { ReactLenis } from "@/app/utils/lenis";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ralph T.",
  description: "A Portfolio Website built by Ralph T. using Next.js and Tailwind CSS.", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <ReactLenis root>
        <body className={inter.className}>{children}</body>
      </ReactLenis>
    </html>
  );
}
