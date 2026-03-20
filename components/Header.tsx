"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Usluge", href: "#usluge" },
  { label: "O nama", href: "#o-nama" },
  { label: "Cenovnik", href: "#cenovnik" },
  { label: "Hitne 24/7", href: "#hitne" },
  { label: "Blog", href: "#blog" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm shadow-sm dark:shadow-slate-800/30">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/logo2.png"
            alt="Hidrotek Logo"
            width={140}
            height={48}
            className="h-10 w-auto"
            priority
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-amber-700 dark:hover:text-amber-500 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:0111234567"
            className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300"
          >
            <Phone className="h-4 w-4" />
            011 123 4567
          </a>
          <ThemeToggle />
          <a
            href="#kontakt"
            className="rounded-full bg-gradient-to-r from-amber-700 to-amber-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:brightness-110 transition-all"
          >
            ZAKAŽI TERMIN
          </a>
        </div>

        {/* Mobile: theme toggle + burger */}
        <div className="flex lg:hidden items-center gap-1">
          <ThemeToggle />
          <button
            className="p-2 text-slate-700 dark:text-slate-300"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-amber-700 dark:hover:text-amber-500"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href="tel:0111234567"
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 dark:text-slate-300 pt-2 border-t border-slate-200 dark:border-slate-700"
            >
              <Phone className="h-4 w-4" />
              011 123 4567
            </a>
            <a
              href="#kontakt"
              className="mt-1 text-center rounded-full bg-gradient-to-r from-amber-700 to-amber-600 px-5 py-2.5 text-sm font-semibold text-white"
            >
              ZAKAŽI TERMIN
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
