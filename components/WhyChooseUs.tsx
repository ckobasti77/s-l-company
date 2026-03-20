import { Timer, ShieldCheck, BadgeDollarSign } from "lucide-react";

const reasons = [
  {
    icon: <Timer className="h-8 w-8 text-white" />,
    title: "BRZA REAKCIJA",
    bg: "bg-gradient-to-br from-amber-700 to-amber-600",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-white" />,
    title: "GARANCIJA KVALITETA",
    bg: "bg-gradient-to-br from-amber-800 to-amber-700",
  },
  {
    icon: <BadgeDollarSign className="h-8 w-8 text-white" />,
    title: "FIKSNE CENE",
    bg: "bg-gradient-to-br from-amber-700 to-amber-600",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="o-nama" className="py-20 px-4 lg:px-8 bg-white dark:bg-slate-900">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-800 dark:text-white mb-12">
          Zašto nas izabrati
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className={`${r.bg} rounded-2xl p-8 flex flex-col items-center justify-center text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-default`}
            >
              <div className="mb-4 rounded-full bg-white/20 p-4">{r.icon}</div>
              <h3 className="text-lg font-bold text-white tracking-wide">
                {r.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
