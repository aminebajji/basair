import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import { Reem_Kufi_Ink } from "next/font/google";

import "./globals.css";
import { SiteHeader } from "@/components/layouts/site-header";
import Footer from "@/components/footer";

// Create a font instance with the desired settings
const reemKufi = Reem_Kufi_Ink({
  subsets: ["arabic"],
  weight: "400",
  style: "normal",
});

const tajawal = Tajawal({
  weight: ["400", "700"],
  subsets: ["arabic", "latin"],
});

export const metadata: Metadata = {
  title: "نادي بصائر",
  description: "مرحبًا بكم في الموقع الرسمي لنادي بصائر.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={tajawal.className}>
        <SiteHeader />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
