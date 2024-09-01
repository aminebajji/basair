import * as React from "react";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const events = [
  {
    title: "دورات في حفظ القرآن",
    description:
      "قال ابن مسعود رضي الله عنه: إن هذه القلوب أوعية فاشغلوها بالقرآن، ولا تشغلوها بغيره",
    image: "/quran.png",
  },
  {
    title: "دورات في تصحيح التلاوة وتعليم التجويد",
    description:
      "قال الله تعالى: {أَوْ زِدْ عَلَيْهِ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا} [المزمل:٤]",
    image: "/tartel.jpeg",
  },
  {
    title: "دورات في العلم الشرعي ومبادئ الدين",
    description:
      "إن فرض العين من العلم هو القدر الذي يتعين على المسلم تعلمه؛ مما يصحح به عقيدته، وعبادته، ومهنته التي يعمل بها؛ فقد قال رسول الله صلى الله عليه وسلم: طلب العلم فريضة على كل مسلم. رواه ابن ماجه، وصححه السيوطي",
    image: "/ailm.png",
  },
];

export default function Activities() {
  return (
    <div className="w-full py-12 md:py-10 lg:py-10 bg-gradient-to-r from-bs-secondary to-primary">
      <div className="container sm:flex sm:items-center sm:space-x-2 sm:space-x-reverse px-4 space-y-4 md:px-6">
        <Carousel className="w-full max-w-xl lg:max-w-4xl mx-auto" dir="ltr">
          <CarouselContent>
            {events.map((event, index) => (
              <CarouselItem key={index}>
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={event.image}
                    alt={`Image for ${event.title}`}
                    width={1200}
                    height={600}
                    className="w-full h-[400px] md:h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                      {event.title}
                    </h2>
                    <p className="text-white text-shadow-sm md:text-lg">
                      {event.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
          <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
        </Carousel>
      </div>
    </div>
  );
}
