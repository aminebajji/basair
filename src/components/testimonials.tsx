"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import TitleLayout from "./layouts/title-layout";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "الحمد لله الذي وفقني للانضمام لمثل هذه النوادي عظيمة النفع، لقد تغيرت بفضل الله ثم بفضلها أهدافي، وحبب العلم الشرعي وأن أجمع بينه وبين مساري الأكاديمي، باعتبار تعلم الضروري منه فريضة. إن اختيار الصحبة الصالحة مهمة جدا، فهي معينة على تقوى الله، ومن يتق الله لا بد له أن يصل، وأن يتفوق أيضا في دراسته، وأما من اتبع سبيلا آخر فلا بد أن تضعف همته، وينسلخ عن دينه شيئا فشيئا، فنصيحتي لكم يا إخواني بالانضمام لهذا النادي، والحرص على نفع زملائكم، وأن لا تبخلوا، فهذه السنوات عابرة وكلنا سنعمل بإذن الله. واعلموا أن من مصائد الشيطان لترك النادي دعوى مضيعة الوقت، أو إساءة الظن بنا، فالله يبارك في وقت من يسارع للخير، فأحسنوا الظن بارك الله فيكم.\n\nقال الشيخ صالح بن عبدالعزيز آل الشيخ: الشاب، الكبير، الصغير، الرجل، المرأة، إذا كان بنفسه أتاه الشيطان، وأما إذا كان مع أصحاب له يُعينونه على الهدى، فهم جلاء القلب الذي يبعدون عنه الصدأ، ويجعلون الخير مُحبَّبًا إليه، ويجعلون الشرَّ مُبغَّضًا إليه.",
      name: "",
      position: "عضو مؤسس، وطالب في السنة الأخيرة هندسة المعلوميات",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      quote:
        "الحمد لله الذي وفقني للانضمام لمثل هذه النوادي عظيمة النفع، لقد تغيرت بفضل الله ثم بفضلها أهدافي، وحبب العلم الشرعي وأن أجمع بينه وبين مساري الأكاديمي، باعتبار تعلم الضروري منه فريضة. إن اختيار الصحبة الصالحة مهمة جدا، فهي معينة على تقوى الله، ومن يتق الله لا بد له أن يصل، وأن يتفوق أيضا في دراسته، وأما من اتبع سبيلا آخر فلا بد أن تضعف همته، وينسلخ عن دينه شيئا فشيئا، فنصيحتي لكم يا إخواني بالانضمام لهذا النادي، والحرص على نفع زملائكم، وأن لا تبخلوا، فهذه السنوات عابرة وكلنا سنعمل بإذن الله. واعلموا أن من مصائد الشيطان لترك النادي دعوى مضيعة الوقت، أو إساءة الظن بنا، فالله يبارك في وقت من يسارع للخير، فأحسنوا الظن بارك الله فيكم.\n\nقال الشيخ صالح بن عبدالعزيز آل الشيخ: الشاب، الكبير، الصغير، الرجل، المرأة، إذا كان بنفسه أتاه الشيطان، وأما إذا كان مع أصحاب له يُعينونه على الهدى، فهم جلاء القلب الذي يبعدون عنه الصدأ، ويجعلون الخير مُحبَّبًا إليه، ويجعلون الشرَّ مُبغَّضًا إليه.",
      name: "",
      position: "عضو مؤسس، وطالب في السنة الأخيرة هندسة المعلوميات",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  return (
    <div className="w-full py-12">
      <TitleLayout title="كلمات وشهادات" />
      <div className="container sm:flex sm:items-center sm:space-x-2 sm:space-x-reverse px-4 space-y-4 md:px-6">
        <Carousel className="w-full max-w-xl lg:max-w-4xl mx-auto" dir="ltr">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div>
                  <Card
                    className="bg-white dark:bg-gray-900 h-full max-w-[500px]"
                    dir="rtl"
                  >
                    <CardContent className="p-6 flex flex-col justify-between h-full">
                      <blockquote className="text-lg mb-4">
                        &ldquo;{testimonial.quote}&rdquo;
                      </blockquote>
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Avatar className="w-10 h-10">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                          />
                          <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm font-semibold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {testimonial.position}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
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
