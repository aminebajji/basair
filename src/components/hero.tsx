import Link from "next/link";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import HeroCards from "./hero-cards";
import CurvedUnderline from "./curved-underline";

export const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-primary to-black overflow-hidden">
      <div className="container grid lg:grid-cols-2 place-items-center pb-28 pt-20 md:pb-44 md:pt-20 gap-10">
        <div className="text-center lg:text-start space-y-6">
          <main className="text-5xl md:text-6xl font-bold">
            <h1 className="inline">
              <span className="inline text-white">نادي بصائر الدعوي</span>
            </h1>
          </main>

          <p className="text-xl text-white md:w-10/12 mx-auto lg:mx-0">
            إلى متى الغفلة ؟ فرُبّ إشراق لم يدرك زمن غروبه.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Link href="join-us">
              <Button className="w-full md:w-1/3 bg-bs-secondary hover:bg-bs-secondary/90">
                انضم إلينا الآن
              </Button>
            </Link>
          </div>
        </div>

        <div className="z-10">
          <HeroCards />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 w-full h-32 md:h-40 lg:h-48 overflow-hidden">
        <svg
          className="w-full h-full text-white fill-current"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,181.3C672,181,768,139,864,128C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>
    </section>
  );
};
