import Image from "next/image";
import CurvedUnderline from "./curved-underline";
import TitleLayout from "./layouts/title-layout";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
export default function Teams() {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-300 to-white overflow-hidden">
      {/* Inversed SVG divider at the top */}
      <div className="absolute inset-x-0 top-0 w-full h-32 md:h-40 lg:h-48 overflow-hidden transform rotate-180">
        <svg
          className="w-full h-full text-white fill-current"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,181.3C672,181,768,139,864,128C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
        </svg>
      </div>

      <div className="mx-auto py-32 md:py-40">
        <div className="container px-4 md:px-6">
          <TitleLayout title="ننقسم إلى" />
          <div className="flex flex-col items-center space-y-4  mt-8 md:flex-row md:justify-center md:space-x-8 md:space-x-reverse md:space-y-0">
            <Card className="p-10 bg-[#ff66c4] w-full max-w-[400px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 ">
              <CardTitle className="text-white">لجنة إناث</CardTitle>
              <CardDescription className="text-md mt-2 text-white">
                تهتم لجنة إناث نادي الجيل بصائر بتأطير أَعْضاء النادي الإناث،
                وتقمن بتوظيف أَعْضاء مكتب جدد، وتحرصن على تنظيم المحاضرات
                والدورات الخاصة بهن.
              </CardDescription>

              <CardFooter className="mx-auto justify-center">
                <Avatar className="w-44 h-44">
                  <AvatarImage src="/women.png" alt="women image" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </CardFooter>
            </Card>
            <Card className="p-10 bg-[#38b6ff] w-full max-w-[400px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 ">
              <CardTitle className="text-white">لجنة ذكور</CardTitle>
              <CardDescription className="text-md mt-2 text-white">
                وفي الشق الآخر للنادي يحرص ذكور النادي على توظيف أَعْضاء جدد
                ذكور لتولي مختلف مهام المكتب المسير للنادي، وتنظيم محاضرات
                ودورات علمية...
              </CardDescription>

              <CardFooter className="mx-auto justify-center">
                <Avatar className="w-44 h-44">
                  <AvatarImage src="/man.png" alt="man image" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </CardFooter>
            </Card>
          </div>
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
}
