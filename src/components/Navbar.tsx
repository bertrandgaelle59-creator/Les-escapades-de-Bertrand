"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [circuitsOpen, setCircuitsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-[9999] w-full bg-black/20 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 md:px-8 py-4 md:py-6">

        {/* Logo */}
        <div className="text-white">
          <h2 className="text-xl md:text-2xl tracking-[0.15em] uppercase">
            Les Escapades
          </h2>

          <p className="text-xs tracking-[0.3em] text-white/70">
            de Bertrand
          </p>
        </div>

        {/* ===================== */}
        {/* MENU DESKTOP */}
        {/* ===================== */}

        <nav className="hidden md:flex gap-8 text-white uppercase text-sm items-center">

          <Link href="/">Accueil</Link>

          {/* CIRCUITS SIGNATURE */}

          <div className="relative group">

            <button className="uppercase flex items-center gap-2 hover:text-white/80 transition">
              Circuits Signature
              <span className="text-xs">▼</span>
            </button>

            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

              <div className="w-[380px] bg-[#F6F1EA] text-[#2F2A25] rounded-2xl shadow-2xl overflow-hidden border border-[#E7DDD1]">

                {/* En-tête */}

                <div className="px-6 py-5">

                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#B45A52]">
                    Circuits Signature
                  </p>

                  <h3 className="font-serif text-2xl mt-2">
                    Découvrez nos territoires
                  </h3>

                </div>

                <div className="border-t border-[#E7DDD1]" />

                <Link
                  href="/circuits-signature"
                  className="block px-6 py-4 hover:bg-white transition font-medium"
                >
                  Tous les circuits
                </Link>

                <div className="border-t border-[#E7DDD1]" />

                <Link
                  href="/lille"
                  className="flex items-center gap-3 px-6 py-4 hover:bg-white transition"
                >
                  <span className="text-[#B45A52]">01</span>
                  <span>Lille</span>
                </Link>

                <Link
                  href="/bassin-minier"
                  className="flex items-center gap-3 px-6 py-4 hover:bg-white transition"
                >
                  <span className="text-[#B45A52]">02</span>
                  <span>Le Bassin Minier</span>
                </Link>

                <Link
                  href="/flandres-francaises"
                  className="flex items-center gap-3 px-6 py-4 hover:bg-white transition"
                >
                  <span className="text-[#B45A52]">03</span>
                  <span>Les Flandres Françaises</span>
                </Link>

                <Link
                  href="/memoire-grande-guerre"
                  className="flex items-center gap-3 px-6 py-4 hover:bg-white transition"
                >
                  <span className="text-[#B45A52]">04</span>
                  <span>Mémoire de la Grande Guerre</span>
                </Link>

                <Link
                  href="/joyaux-belges"
                  className="flex items-center gap-3 px-6 py-4 hover:bg-white transition"
                >
                  <span className="text-[#B45A52]">05</span>
                  <span>Bruges, la Venise du Nord</span>
                </Link>

              </div>
            </div>
          </div>

          <Link href="/voyage-sur-mesure">
            Voyage sur mesure
          </Link>

          <Link href="/blog">
            Blog des Pépites
          </Link>

          <Link href="/a-propos">
            Rencontrer Bertrand
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </nav>

        {/* ===================== */}
        {/* BOUTON MOBILE */}
        {/* ===================== */}

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

      {/* ===================== */}
      {/* MENU MOBILE */}
      {/* ===================== */}

      {menuOpen && (
        <nav className="md:hidden bg-[#252525] text-white">

          <div className="flex flex-col px-6 py-4 gap-4 uppercase text-sm">

            <Link href="/">Accueil</Link>

            {/* Accordéon Circuits */}

            <div className="flex flex-col">

              <button
                onClick={() => setCircuitsOpen(!circuitsOpen)}
                className="flex justify-between items-center text-left uppercase"
              >
                <span>Circuits Signature</span>
                <span>{circuitsOpen ? "−" : "+"}</span>
              </button>

              {circuitsOpen && (
                <div className="flex flex-col gap-3 mt-3 ml-4 text-xs text-white/80">

                  <Link href="/circuits-signature">
                    Tous les circuits
                  </Link>

                  <Link href="/lille">
                    Lille
                  </Link>

                  <Link href="/bassin-minier">
                    Le Bassin Minier
                  </Link>

                  <Link href="/flandres-francaises">
                    Les Flandres Françaises
                  </Link>

                  <Link href="/memoire-grande-guerre">
                    Mémoire Grande Guerre
                  </Link>

                  <Link href="/joyaux-belges">
                    Bruges, la Venise du Nord
                  </Link>

                </div>
              )}

            </div>

            <Link href="/voyage-sur-mesure">
              Voyage sur mesure
            </Link>

            <Link href="/blog">
              Blog des Pépites
            </Link>

            <Link href="/a-propos">
              Rencontrer Bertrand
            </Link>

            <Link href="/contact">
              Contact
            </Link>

          </div>

        </nav>
      )}
    </header>
  );
}

