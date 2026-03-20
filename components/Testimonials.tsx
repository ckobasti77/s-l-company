import { Star, Quote } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Vladimir Petrović",
    role: "Klijent",
    text: "\"Pozvali smo ih u ponoć zbog pucanja cevi i stigli su za 20 minuta. Profesionalni, brzi i veoma ljubazni. Svaka preporuka!\"",
    avatar: "/recenzije/Gemini_Generated_Image_14myag14myag14my-Photoroom-Photoroom-removebg-preview-Photoroom.png",
  },
  {
    name: "Aleksandar Lukić",
    role: "Klijent",
    text: "\"Odlična usluga! Ugradili su nam novi bojler brzo i kvalitetno. Cena je bila tačno onolika koliko su rekli, bez skrivenih troškova.\"",
    avatar: "/recenzije/Gemini_Generated_Image_fddhy4fddhy4fddh-Photoroom.png",
  },
  {
    name: "Jelena Nikolić",
    role: "Klijent",
    text: "\"Imali smo problem sa začepljenom kanalizacijom mesecima. Rešili su sve za sat vremena. Definitivno najbolji vodoinstalateri u gradu!\"",
    avatar: "/recenzije/Gemini_Generated_Image_sk9wv9sk9wv9sk9w-Photoroom (1).png",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-4 lg:px-8 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 dark:text-white mb-12">
          Šta kažu naši klijenti
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl bg-stone-50 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-all"
            >
              <Quote className="h-6 w-6 text-amber-600/40 mb-3" />
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                {t.text}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-stone-200 dark:border-slate-700">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="flex-shrink-0 h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-white">
                    {t.name}
                  </p>
                  <div className="flex gap-0.5 mt-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3 w-3 fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
