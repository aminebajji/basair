import Image from "next/image";

export default function Teams() {
  return (
    <section className="w-full py-12 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            ننقسم إلى
          </h2>
        </div>
        <div className="mt-8 space-y-8 space-x-reverse md:space-y-12">
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 md:space-x-reverse">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-400"></div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">لجنة إناث</h3>
              <p className="text-muted-foreground">
                تهتم لجنة إناث نادي الجيل بصائر بتأطير أَعْضاء النادي الإناث،
                وتقمن بتوظيف أَعْضاء مكتب جدد، وتحرصن على تنظيم المحاضرات
                والدورات الخاصة بهن.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4 md:space-x-reverse">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-400"></div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">لجنة ذكور</h3>
              <p className="text-muted-foreground">
                وفي الشق الآخر للنادي يحرص ذكور النادي على توظيف أَعْضاء جدد
                ذكور لتولي مختلف مهام المكتب المسير للنادي، وتنظيم محاضرات
                ودورات علمية...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
