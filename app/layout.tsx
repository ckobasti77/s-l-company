import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vodočep",
  description:
    "Profesionalni vodoinstalateri u Beogradu. Hitne intervencije 24/7, popravka cevi, ugradnja bojlera i sanitarija.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&window.matchMedia("(prefers-color-scheme:dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 antialiased transition-colors"
      >
        {children}
      </body>
    </html>
  );
}
