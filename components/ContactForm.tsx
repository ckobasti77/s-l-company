"use client";

import { Send, MessageCircle } from "lucide-react";

const quickTestimonials = [
  {
    name: "Milan Đorđević",
    text: "\"Reagovali su istog dana. Veoma sam zadovoljan uslugom i cenama!\"",
    avatar: "M",
  },
  {
    name: "Jelena Marković",
    text: "\"Profesionalni i fer cene. Preporučujem svima bez razmišljanja!\"",
    avatar: "J",
  },
];

export default function ContactForm() {
  return (
    <section id="kontakt" className="py-20 px-4 lg:px-8 bg-stone-50 dark:bg-slate-800">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: social proof */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-white mb-8">
              Kontaktirajte nas
            </h2>
            <div className="space-y-6">
              {quickTestimonials.map((t) => (
                <div key={t.name} className="flex items-start gap-4">
                  <div className="flex-shrink-0 h-14 w-14 rounded-full bg-gradient-to-br from-slate-300 to-slate-400 dark:from-slate-600 dark:to-slate-500 flex items-center justify-center overflow-hidden">
                    <span className="text-white font-bold text-lg">
                      {t.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="rounded-xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-700 p-4 shadow-sm">
                      <MessageCircle className="h-4 w-4 text-amber-600 mb-1" />
                      <p className="text-sm text-slate-600 dark:text-slate-300">{t.text}</p>
                    </div>
                    <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-2 ml-1">
                      {t.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-2xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-700 p-8 shadow-md">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                placeholder="Ime"
                className="w-full rounded-lg border border-stone-300 dark:border-slate-600 bg-stone-50 dark:bg-slate-800 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all"
              />
              <input
                type="tel"
                placeholder="Telefon"
                className="w-full rounded-lg border border-stone-300 dark:border-slate-600 bg-stone-50 dark:bg-slate-800 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all"
              />
              <textarea
                rows={4}
                placeholder="Opis problema"
                className="w-full rounded-lg border border-stone-300 dark:border-slate-600 bg-stone-50 dark:bg-slate-800 px-4 py-3 text-sm text-slate-700 dark:text-slate-200 placeholder:text-slate-400 dark:placeholder:text-slate-500 outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20 transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-700 to-amber-600 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:shadow-lg hover:brightness-110 transition-all"
              >
                <Send className="h-4 w-4" />
                POŠALJI
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
