import { MapPin, Facebook, Instagram } from "lucide-react";

const footerLinks = {
  usluge: ["Cenovnik", "Hitne intervencije", "Blog"],
  oNama: ["O nama", "Cenovnik", "Kontakt"],
};

const workHours = [
  { label: "Pon - Pet", time: "08:00 - 20:00" },
  { label: "Sub", time: "09:00 - 16:00" },
  { label: "Ned", time: "Hitne intervencije" },
];

export default function Footer() {
  return (
    <footer className="bg-stone-100 dark:bg-slate-950 border-t border-stone-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Usluge */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-4">Usluge</h4>
            <ul className="space-y-2">
              {footerLinks.usluge.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* O nama */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-4">O nama</h4>
            <ul className="space-y-2">
              {footerLinks.oNama.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Adresa */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-4">Adresa</h4>
            <div className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-amber-700" />
              <span>
                Hidrotek,
                <br />
                Beograd, Srbija
              </span>
            </div>
          </div>

          {/* Radno vreme */}
          <div>
            <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-4">
              Radno vreme
            </h4>
            <ul className="space-y-2">
              {workHours.map((h) => (
                <li
                  key={h.label}
                  className="flex justify-between text-sm text-slate-500 dark:text-slate-400"
                >
                  <span>{h.label}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-stone-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            &copy; 2026 Hidrotek &middot; Sva prava zadržana
          </p>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full bg-slate-200 dark:bg-slate-800 p-2 text-slate-500 dark:text-slate-400 hover:bg-amber-600 hover:text-white dark:hover:bg-amber-600 dark:hover:text-white transition-all"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="rounded-full bg-slate-200 dark:bg-slate-800 p-2 text-slate-500 dark:text-slate-400 hover:bg-amber-600 hover:text-white dark:hover:bg-amber-600 dark:hover:text-white transition-all"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
