"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setShouldReduceMotion(mediaQuery.matches);

    const handleChange = () => setShouldReduceMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const testimonials = [
    {
      quote:
        "الحمد لله الذي وفقني للانضمام لمثل هذه النوادي عظيمة النفع، لقد تغيرت بفضل الله ثم بفضلها أهدافي، وحبب العلم الشرعي وأن أجمع بينه وبين مساري الأكاديمي، باعتبار تعلم الضروري منه فريضة. إن اختيار الصحبة الصالحة مهمة جدا، فهي معينة على تقوى الله، ومن يتق الله لا بد له أن يصل، وأن يتفوق أيضا في دراسته، وأما من اتبع سبيلا آخر فلا بد أن تضعف همته، وينسلخ عن دينه شيئا فشيئا، فنصيحتي لكم يا إخواني بالانضمام لهذا النادي، والحرص على نفع زملائكم، وأن لا تبخلوا، فهذه السنوات عابرة وكلنا سنعمل بإذن الله. واعلموا أن من مصائد الشيطان لترك النادي دعوى مضيعة الوقت، أو إساءة الظن بنا، فالله يبارك في وقت من يسارع للخير، فأحسنوا الظن بارك الله فيكم.\n\nقال الشيخ صالح بن عبدالعزيز آل الشيخ: الشاب، الكبير، الصغير، الرجل، المرأة، إذا كان بنفسه أتاه الشيطان، وأما إذا كان مع أصحاب له يُعينونه على الهدى، فهم جلاء القلب الذي يبعدون عنه الصدأ، ويجعلون الخير مُحبَّبًا إليه، ويجعلون الشرَّ مُبغَّضًا إليه.",
      name: "",
      position: "عضو مؤسس، وطالب في السنة الأخيرة هندسة المعلوميات",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-12 sm:text-4xl">
          كلمات وشهادات
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Card className="bg-white dark:bg-gray-900 h-full">
                <CardContent className="p-6 flex flex-col justify-between h-full">
                  <blockquote className="text-lg mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
