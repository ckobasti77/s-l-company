import { Zap, Flame, PipetteIcon, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

interface DetailService {
  icon: ReactNode;
  title: string;
  description: string;
  image: string;
}

const detailedServices: DetailService[] = [
  {
    icon: <Zap className="h-6 w-6 text-amber-700" />,
    title: "Hitne intervencije 24/7",
    description:
      "Naš tim iskusnih vodoinstalatera dostupan je 24 sata dnevno, 7 dana u nedelji. Garantujemo dolazak u roku od 30 minuta na teritoriji Beograda.",
    image: "/hitne-intervencije.avif",
  },
  {
    icon: <Flame className="h-6 w-6 text-amber-700" />,
    title: "Ugradnja bojlera i sanitarija",
    description:
      "Profesionalna ugradnja i servis svih tipova bojlera i sanitarne opreme. Radimo sa vodećim brendovima i dajemo garanciju na sve ugrađene delove.",
    image: "/popravljanje-bojlera.avif",
  },
  {
    icon: <PipetteIcon className="h-6 w-6 text-amber-700" />,
    title: "Odgušenje kanalizacije",
    description:
      "Koristimo najsavremeniju opremu za odgušenje i čišćenje kanalizacionih cevi. Brza dijagnostika i trajno rešenje problema.",
    image: "/odgusenje-kanalizacije.avif",
  },
];

export default function DetailedServices() {
  return (
    <section className="py-20 px-4 lg:px-8 bg-stone-50 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {detailedServices.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl overflow-hidden bg-white dark:bg-slate-900 shadow-md hover:shadow-xl transition-all"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 rounded-full bg-white/90 dark:bg-slate-800/90 p-2 shadow">
                  {s.icon}
                </div>
              </div>
              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                  {s.description}
                </p>
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-amber-700 hover:text-amber-800 dark:text-amber-500 dark:hover:text-amber-400 transition-colors"
                >
                  Saznaj više
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
