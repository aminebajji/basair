"use client";
import React from "react";
import { QuranIcon } from "./icons";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Book } from "lucide-react";

const HeroCards: React.FC = () => {
  const cards = [
    {
      title: "قال تعالى",
      description:
        "قَدْ جَاءَكُم بَصَائِرُ مِن رَّبِّكُمْ ۖ فَمَنْ أَبْصَرَ فَلِنَفْسِهِ ۖ وَمَنْ عَمِيَ فَعَلَيْهَا ۚ وَمَا أَنَا عَلَيْكُم بِحَفِيظٍ ﴿١٠٤ الأنعام﴾",
      source: "[ الأنعام: 104]",
      icon: <QuranIcon className="w-10 h-10" />,
      bgColor: "bg-blue-100",
    },
    {
      title: "قال تعالى",
      description:
        "وَلْتَكُن مِّنكُمْ أُمَّةٌ يَدْعُونَ إِلَى الْخَيْرِ وَيَأْمُرُونَ بِالْمَعْرُوفِ وَيَنْهَوْنَ عَنِ الْمُنكَرِ ۚ وَأُولَٰئِكَ هُمُ الْمُفْلِحُونَ",
      source: "[ آل عمران: 104]",
      icon: <QuranIcon className="w-10 h-10" />,
      bgColor: "bg-green-100",
    },
    {
      title: "قال رَسُول اللَّهِ ﷺ",
      description:
        "عَنْ أَبي الدَّرْداءِ، قَال: سمِعْتُ رَسُول اللَّهِ ﷺ، يقولُ: منْ سَلَكَ طَريقًا يَبْتَغِي فِيهِ علْمًا سهَّل اللَّه لَه طَريقًا إِلَى الجنةِ، وَإنَّ الملائِكَةَ لَتَضَعُ أجْنِحَتَهَا لِطالب الْعِلْمِ رِضًا بِما يَصْنَعُ، وَإنَّ الْعالِم لَيَسْتَغْفِرُ لَهُ منْ فِي السَّمَواتِ ومنْ فِي الأرْضِ حتَّى الحِيتانُ في الماءِ، وفَضْلُ الْعَالِم عَلَى الْعابِدِ كَفَضْلِ الْقَمر عَلى سَائِرِ الْكَوَاكِبِ، وَإنَّ الْعُلَماءَ وَرَثَةُ الأنْبِياءِ وإنَّ الأنْبِياءَ لَمْ يُورِّثُوا دِينَارًا وَلا دِرْهَمًا وإنَّما ورَّثُوا الْعِلْمَ، فَمنْ أَخَذَهُ أَخَذَ بِحَظٍّ وَافِرٍ.",
      source: "رواهُ أَبُو داود والترمذيُّ.",
      icon: <Book className="w-5 h-5" />,
      bgColor: "bg-yellow-100",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-6">
      {cards.map((card, index) => (
        <Card
          key={index}
          className={`w-full max-w-[400px] drop-shadow-xl shadow-black/10 dark:shadow-white/10 ${
            index === 2 ? "col-span-2" : ""
          } ${card.bgColor}`}
        >
          <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
            <div className="mt-1 bg-primary/20 p-1 rounded-full">
              {card.icon}
            </div>
            <div>
              <CardTitle className="text-sm">{card.title}</CardTitle>
              <CardDescription className="text-md mt-2">
                {card.description}
              </CardDescription>
              <CardFooter className="p-0 text-sm italic text-gray-500">
                {card.source}
              </CardFooter>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default HeroCards;
