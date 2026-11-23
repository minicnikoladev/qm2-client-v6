import type { Route } from "./+types/home";
import React from "react";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import logo from "../assets/logo_svg.svg";
import { IoLogoInstagram } from "react-icons/io";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "qm2 Studio" },
    { name: "Opis", content: "Dobrodošli u qm2 Studio!" },
  ];
}

export const Home: React.FC = () => {
  return (
    <div className="relative w-full min-h-[100dvh] flex flex-col justify-between bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-zinc-200 antialiased overflow-x-hidden">
      {/* Absolute Background Container with strict clipping */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-10 right-0 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] bg-amber-100/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-10 left-0 w-[280px] sm:w-[600px] h-[280px] sm:h-[600px] bg-slate-100/60 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative w-full max-w-7xl mx-auto px-6 py-6 sm:py-8 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <img src={logo} className="w-[70px] h-[70px]" />
        </div>

        <a
          href="https://www.instagram.com/qm2_designstudio/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-medium rounded-full bg-zinc-900 text-zinc-50 hover:bg-zinc-800 transition-colors shadow-sm"
        >
          <span>Kontaktirajte nas</span>
          <ArrowUpRight className="w-4 h-4 opacity-70" />
        </a>
      </header>

      {/* Hero / Main Section */}
      <main className="relative w-full max-w-4xl mx-auto px-6 py-12 flex-1 flex flex-col justify-center items-center text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-zinc-100 border border-zinc-200/80 text-xs font-medium text-zinc-600">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Novi sajt u pripremi
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-zinc-900 max-w-3xl leading-[1.1]">
          Nešto izvanredno{" "}
          <span className="font-serif italic font-normal text-zinc-800">
            stiže uskoro
          </span>
          .
        </h1>

        <p className="mt-6 text-base sm:text-lg text-zinc-500 max-w-xl font-normal leading-relaxed">
          {/* We are currently building our new digital space. In the meantime,
          explore our recent work and portfolio updates on Instagram. */}
          Trenutno radimo na izradi našeg novog digitalnog prostora. U
          međuvremenu možete pogledati neke od radova na instagram stranici.
        </p>

        <div className="mt-10">
          <a
            href="https://instagram.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white border border-zinc-200 text-zinc-900 font-medium text-sm shadow-xs hover:border-zinc-300 hover:shadow-md transition-all duration-200"
          >
            <IoLogoInstagram className="w-5 h-5" />

            {/* <Instagram className="w-5 h-5 text-zinc-700 group-hover:scale-110 transition-transform duration-200" /> */}
            <span>Istražite projekte na Instagramu</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative w-full max-w-7xl mx-auto px-6 py-6 sm:py-8 border-t border-zinc-200/60 z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} qm2 Studio. Sva prava zadržana.</p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="tel:+1234567890"
              className="inline-flex items-center gap-2 hover:text-zinc-900 transition-colors"
            >
              <Phone className="w-4 h-4 text-zinc-400" />
              <span>+381 65 9338131</span>
            </a>

            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center gap-2 hover:text-zinc-900 transition-colors"
            >
              <Mail className="w-4 h-4 text-zinc-400" />
              <span>office@qm2studio.com</span>
            </a>

            <a
              href="https://www.instagram.com/qm2_designstudio/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-zinc-900 transition-colors"
            >
              {/* <Instagram className="w-4 h-4 text-zinc-400" /> */}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
