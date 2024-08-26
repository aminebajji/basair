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
        <SheetContent side="left">
          <Link href="/">
            <Image src="/FTlogo.png" alt="FT Hub Logo" width={40} height={40} />
          </Link>
          <nav className="flex flex-col gap-3 lg:gap-4 mt-6">
            <Link
              href=""
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              Docs
            </Link>
            <Link
              href=""
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              Teams
            </Link>
            <Link
              href="/contact"
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
