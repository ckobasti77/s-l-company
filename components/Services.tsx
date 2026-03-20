import { Zap, Wrench, Flame, PipetteIcon, Droplets } from "lucide-react";
import type { ReactNode } from "react";

interface ServiceCard {
  icon: ReactNode;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    icon: <Zap className="h-10 w-10 text-amber-700" />,
    title: "Hitne intervencije 24/7",
    description:
      "Dostupni smo non-stop za sve hitne vodoinstalaterske probleme u vašem domu.",
  },
  {
    icon: <Wrench className="h-10 w-10 text-amber-700" />,
    title: "Popravka cevi",
    description:
      "Stručna popravka i zamena vodovodnih i kanalizacionih cevi svih dimenzija.",
  },
  {
    icon: <Flame className="h-10 w-10 text-amber-700" />,
    title: "Ugradnja bojlera i sanitarija",
    description:
      "Profesionalna ugradnja i servis bojlera, tuš kabina, umivaonika i WC šolja.",
  },
  {
    icon: <PipetteIcon className="h-10 w-10 text-amber-700" />,
    title: "Odgušenje kanalizacije",
    description:
      "Brzo i efikasno odgušenje kanalizacionih cevi modernom opremom.",
  },
  {
    icon: <Droplets className="h-10 w-10 text-amber-700" />,
    title: "Detekcija curenja vode",
    description:
      "Precizna detekcija skrivenih curenja vode bez nepotrebnog rušenja.",
  },
];

export default function Services() {
  return (
    <section id="usluge" className="relative z-10 -mt-20 px-4 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-lg hover:shadow-xl border border-slate-100 dark:border-slate-700 transition-all hover:-translate-y-1"
            >
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-base font-bold text-slate-800 dark:text-white mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
