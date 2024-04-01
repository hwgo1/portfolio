import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import clsx from "clsx";
import { Providers } from "./providers";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfólio de Hugo Henrique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
    >
      <body
        className={clsx(
          urbanist.className,
          "bg-slate-900 text-slate-100 relative min-h-screen"
        )}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <div className="background-gradient absolute inset-0 -z-50 max-h-screen" />
        <div className="pointer-events-none absolute mt-0 inset-0 -z-40 h-full bg-[url('/noise.jpg')] opacity-5 mix-blend-soft-light"></div>
      </body>
    </html>
  );
}
