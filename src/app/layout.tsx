import type { Metadata } from "next";
import { Tajawal } from "next/font/google";

import "./globals.css";
import { SiteHeader } from "@/components/layouts/site-header";

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
      </body>
    </html>
  );
}
