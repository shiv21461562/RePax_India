
import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import type { ReactNode } from "react";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsappButton from "@/components/layout/WhatsappButton";
import BackToTop from "@/components/layout/BackToTop";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "REPAX India",
    template: "%s | PowerPax India",
  },
  description:
    "PowerPax India - Renewable Energy & Solar Industry Platform",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
    <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
        <WhatsappButton />
        <BackToTop />
      </body>
    </html>
  );
}