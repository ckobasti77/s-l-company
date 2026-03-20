import { Phone, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-[url('/hero-bg.webp')] bg-cover bg-center bg-no-repeat"
        aria-hidden="true"
      />
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-slate-900/30"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 py-32 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
            ULTRA BRZI
            <br />
            VODOINSTALATERI
            <br />
            U BEOGRADU.
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-slate-200 font-medium max-w-xl">
            ZABORAVITE NA PROBLEME — GARANTUJEMO KVALITET I BRZINU.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:0111234567"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-700 to-amber-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg hover:shadow-xl hover:brightness-110 transition-all"
            >
              <Phone className="h-4 w-4" />
              POZOVI ODMAH (24/7)
            </a>
            <a
              href="#usluge"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 bg-white/10 backdrop-blur-sm px-7 py-3.5 text-sm font-bold text-white hover:bg-white/20 transition-all"
            >
              ISTRAŽI USLUGE
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
