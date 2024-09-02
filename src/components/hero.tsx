import Link from "next/link";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import HeroCards from "./hero-cards";
import CurvedUnderline from "./curved-underline";
import SvgDivider from "./svg-divider";

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
      <SvgDivider position="bottom" />
    </section>
  );
};
