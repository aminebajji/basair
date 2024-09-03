import Link from "next/link";
import Image from "next/image";
export function MainNav() {
  return (
    <div className="hidden md:flex items-center space-x-8 space-x-reverse">
      <Link href="/" className="flex items-center space-x-2">
        <Image
          src="/logo-basair.png"
          alt="logo-basair"
          width={85}
          height={85}
        />
      </Link>
      <nav className="flex items-center gap-6 tex-lg">
        <Link
          href="#about-section"
          className="text-foreground/60 transition-colors hover:text-foreground"
        >
          من نحن
        </Link>
        <Link
          href="#activities-section"
          className="text-foreground/60 transition-colors hover:text-foreground"
        >
          الأنشطة
        </Link>
        <Link
          href="https://drive.google.com/file/d/1TbSY44MyO6CBHdi32rDUyCEbJSBULFHP/view"
          className="text-foreground/60 transition-colors hover:text-foreground"
          target="_blank"
          rel="noopener noreferrer"
        >
          ملف النادي
        </Link>
        <Link
          href="#contact-section"
          className="text-foreground/60 transition-colors hover:text-foreground"
        >
          تواصل معنا
        </Link>
        <Link
          href="/internal-regulation"
          className="text-foreground/60 transition-colors hover:text-foreground"
        >
          قوانين داخلية
        </Link>
      </nav>
    </div>
  );
}
