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
import SvgDivider from "./svg-divider";
export default function Teams() {
  return (
    <section className="relative w-full bg-gradient-to-br from-primary to-black overflow-hidden">
      <SvgDivider position="top" />
      <div className="mx-auto py-32 md:py-40">
        <div className="container px-4 md:px-6">
          <TitleLayout title="ننقسم إلى" textColor="text-white" />
          <div className="flex flex-col items-center space-y-4  mt-8 md:flex-row md:justify-center md:space-x-8 md:space-x-reverse md:space-y-0">
            <Card className="p-14 rounded-full  bg-white w-full max-w-[280px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 bg-gradient-to-br from-primary to-black">
              <CardTitle className="flex items-center max-w-[200px] space-x-2">
                <span className="order-2 text-white">لجنة إناث</span>
                <Avatar className="w-12 h-12 order-1">
                  <AvatarImage src="/woman.png" alt="woman image" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </CardTitle>
              <CardDescription className="text-sm mt-2  max-w-[200px] text-white">
                تهتم لجنة إناث نادي الجيل بصائر بتأطير أَعْضاء النادي الإناث،
                وتقمن بتوظيف أَعْضاء مكتب جدد، وتحرصن على تنظيم المحاضرات
                والدورات الخاصة بهن.
              </CardDescription>
            </Card>
            <Card className="p-14 rounded-full  bg-white w-full max-w-[280px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 bg-gradient-to-br from-primary to-black">
              <CardTitle className="flex items-center max-w-[200px] space-x-2">
                <span className="order-2 text-white">لجنة ذكور</span>
                <Avatar className="w-12 h-12 order-1">
                  <AvatarImage src="/man.png" alt="man image" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </CardTitle>
              <CardDescription className="text-sm mt-2  max-w-[200px] text-white">
                وفي الشق الآخر للنادي يحرص ذكور النادي على توظيف أَعْضاء جدد
                ذكور لتولي مختلف مهام المكتب المسير للنادي، وتنظيم محاضرات
                ودورات علمية...
              </CardDescription>
            </Card>
          </div>
        </div>
      </div>
      <SvgDivider position="bottom" />
    </section>
  );
}
