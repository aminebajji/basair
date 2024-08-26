import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Sample event data with images
const events = [
  {
    title: "Annual Science Fair",
    description:
      "Showcase your innovative projects and compete with fellow science enthusiasts.",
    image:
      "https://unsplash.com/photos/people-walking-near-white-concrete-building-during-daytime-4rBFrxSfzb0",
  },
  {
    title: "Debate Club Championship",
    description:
      "Sharpen your argumentation skills and represent our school in the regional debate tournament.",
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    title: "Art Club Exhibition",
    description:
      "Display your artistic creations and explore various mediums in our end-of-year art show.",
    image: "/placeholder.svg?height=600&width=1200",
  },
  {
    title: "Coding Workshop Series",
    description:
      "Learn the basics of programming and build your first web application in this hands-on workshop.",
    image: "/placeholder.svg?height=600&width=1200",
  },
];

export default function Component() {
  return (
    <section className="w-full py-12 md:py-10 lg:py-10 bg-gradient-to-r from-bs-secondary to-primary">
      <div className="container px-4 space-y-8 md:px-6">
        <div className="flex justify-center">
          <div className="p-4 rounded-xl border-2">
            <h1 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-3xl/none text-white text-center leading-normal md:leading-normal lg:leading-normal">
              قُلْ هَٰذِهِ سَبِيلِي أَدْعُو إِلَى اللَّهِ ۚ عَلَىٰ بَصِيرَةٍ
              أَنَا وَمَنِ اتَّبَعَنِي ۖ وَسُبْحَانَ اللَّهِ وَمَا أَنَا مِنَ
              الْمُشْرِكِينَ
            </h1>
            <h1 className="text-white text-lg">
              سورة : يوسف - الآية : (108) - الجزء : ( 13 ) - الصفحة: ( 248 )
            </h1>
          </div>
        </div>

        <Carousel className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
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
    </section>
  );
}
