import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MobileNav() {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent side="right">
          <Link href="/">
            <Image
              src="/logo-basair.png"
              alt="logo-basair"
              width={85}
              height={85}
            />
          </Link>
          <nav className="flex flex-col gap-3 lg:gap-4 mt-6">
            <Link
              href="/"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              الرئيسية
            </Link>
            <Link
              href="/about"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              من نحن
            </Link>
            <Link
              href="/events"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              الفعاليات
            </Link>
            <Link
              href="/activities"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              الأنشطة
            </Link>
            <Link
              href="/join"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              انضم إلينا
            </Link>
            <Link
              href="/contact"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              تواصل معنا
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
