import Link from "next/link";
import Image from "next/image";
export function MainNav() {
  return (
    <div className="hidden md:flex items-center" dir="rtl">
      <Link href="/" className="flex items-center mr-6 space-x-2">
        <Image
          src="/basair-logo.png"
          alt="FT Hub Logo"
          width={120}
          height={120}
        />
      </Link>
      <nav className=" flex items-center gap-6 text-sm">
        <Link
          href=""
          className="text-foreground/60 transition-colors hover:text-foreground"
        >
          من نحن
        </Link>
        <Link
          href=""
          className="text-foreground/60 transition-colors hover:text-foreground"
        >
          الأحداث
        </Link>
        <Link
          href=""
          className="text-foreground/60 transition-colors hover:text-foreground"
        >
          الأنشطة والبرامج
        </Link>
      </nav>
    </div>
  );
}
