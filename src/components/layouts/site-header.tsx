import Link from "next/link";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import { MainNav } from "@/components/layouts/main-nav";
import { Search } from "lucide-react";
import MobileNav from "@/components/layouts/mobile-nav";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 h-20 flex items-center w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-14 flex items-center justify-between space-x-reverse">
        <MainNav />
        <div className="order-2 flex items-center space-x-4 space-x-reverse md:hidden">
          <MobileNav />
        </div>
        <Link href="/" className="md:hidden">
          <Image
            src="/logo-basair.png"
            alt="logo-basair"
            width={85}
            height={85}
          />
        </Link>
      </div>
    </header>
  );
}
