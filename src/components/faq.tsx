import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import CurvedUnderline from "./curved-underline";
import TitleLayout from "./layouts/title-layout";

export default function FrequentlyAskedQuestions() {
  const faqData = [
    {
      question: "كيف يمكنني الانضمام إلى المكتب المسير للنادي؟",
      answer: `يتم فتح أبواب الترشيح كل سنة أمام الراغبين في تولي مهام تسيير النادي.`,
    },
    {
      question: "هل توجد شروط معينة للانضمام للمكتب المسير؟",
      answer: `نعم، باعتباره ناديا دعويا، يدعوا إلى الخير ويأمر بالمعروف، وينهى عن الفحشاء والمنكر، فلا بد لمن يقوم بهذا الدور أن يبدأ بنفسه أولا وأن يصلحها، وأن يتجنب الجهر بالمعاصي، وعليه أن يتحلى بحسن الخلق والرفق واللين...`,
    },
    {
      question: "هل في النادي مضيعة وقت؟",
      answer: `لا يطلب النادي من أعضائه القيام بأي شيء، ولا يكلفهم أي مهام، فكل شيء يقوم به أعضاء المكتب المسير ولجانه.`,
    },
    {
      question: "كيف نتواصل مع لجنة الإناث؟",
      answer: `يتم التواصل مع  لجنة الإناث لنادي بصائر عبر البريد الإلكتروني الخاص بهن، أو إحدى صفحاتهن الرسمية.`,
    },
    {
      question: "هل النادي مكلف بالاعتناء بمصلى المؤسسة؟",
      answer: `نعم، يخصص النادي لجنة مسجد مكلفة بتنظيفه، والحرص على تزويده بكل ما يحتاجه من المصاحف والكتب.. وإلصاق الملصقات والإعلانات...`,
    },
  ];

  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-3xl space-y-6 text-center">
        <TitleLayout title="الأسئلة الشائعة" />
        <p className="text-muted-foreground">
          نجيبكم على مجموعة من الأسئلة التي يطرحا كثير من الطلبة المهندسين
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-3xl space-y-4">
        <Accordion type="single" collapsible>
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
