"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-[9999] w-full bg-black/20 backdrop-blur-md">

      <div className="flex items-center justify-between px-6 md:px-8 py-4 md:py-6">

        <div className="text-white">

          <h2 className="text-xl md:text-2xl tracking-[0.15em] uppercase">
            Les Escapades
          </h2>

          <p className="text-xs tracking-[0.3em] text-white/70">
            de Bertrand
          </p>

        </div>

        {/* Desktop */}

        <nav className="hidden md:flex gap-8 text-white uppercase text-sm">

          <a href="/">Accueil</a>

          <a href="/circuits-signature">
            Circuits Signature
          </a>

          <a href="/voyage-sur-mesure">
            Voyage sur mesure
          </a>

          <a href="/blog">
            Blog des Pépites
          </a>

          <a href="/a-propos">
            À propos
          </a>

          <a href="/contact">
            Contact
          </a>

        </nav>

       {/* Mobile */}

<button
  type="button"
  onClick={() => setMenuOpen(!menuOpen)}
  className="md:hidden flex flex-col items-center text-white"
>

  <div className="flex flex-col gap-1">

    <span className="w-8 h-[2px] bg-white block"></span>
    <span className="w-8 h-[2px] bg-white block"></span>
    <span className="w-8 h-[2px] bg-white block"></span>

  </div>

  <span className="mt-2 text-[10px] tracking-[0.3em] uppercase">

    Menu

  </span>

</button>

      </div>

      {/* Menu mobile déroulant */}

      {menuOpen && (

        <nav className="md:hidden bg-[#252525] text-white">

          <div className="flex flex-col px-6 py-4 gap-4 uppercase text-sm">

            <a href="/">Accueil</a>

            <a href="/circuits-signature">
              Circuits Signature
            </a>

            <a href="/voyage-sur-mesure">
              Voyage sur mesure
            </a>

            <a href="/blog">
              Blog des Pépites
            </a>

            <a href="/a-propos">
              À propos
            </a>

            <a href="/contact">
              Contact
            </a>

          </div>

        </nav>

      )}

    </header>
  );
}