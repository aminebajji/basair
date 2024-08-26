import Link from "next/link";
import Image from "next/image";
export function MainNav() {
  return (
    <div className="hidden md:flex items-center space-x-8 space-x-reverse">
      <Link href="/" className="flex items-center mr-6 space-x-2">
        <Image
          src="/logo-basair.png"
          alt="logo-basair"
          width={85}
          height={85}
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
