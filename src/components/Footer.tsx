export default function Footer() {
  return (

 <footer className="bg-[#252525] text-white mt-2">

  <div className="max-w-6xl mx-auto px-5 py-4 md:py-5">

    <div className="grid md:grid-cols-3 gap-4 md:gap-5">

      {/* LOGO / INTRO */}

      <div>

        <h2 className="font-serif text-xl md:text-2xl leading-tight">

          Les Escapades
          de Bertrand

        </h2>

        <p className="mt-2 text-white/70 leading-5 text-[14px]">

          Expériences patrimoniales,
          escapades sur mesure
          entre Nord,
          Pas-de-Calais
          et Belgique.

        </p>

        <div className="mt-2 flex flex-col gap-1 text-[#C46B58]">

          <div className="flex items-center gap-2">

            <span className="tracking-[0.22em] uppercase text-[10px]">

              VIVRE

            </span>

            <div className="h-px flex-1 bg-[#C46B58]/30"></div>

          </div>


          <div className="flex items-center gap-2">

            <span className="tracking-[0.22em] uppercase text-[10px]">

              COMPRENDRE

            </span>

            <div className="h-px flex-1 bg-[#C46B58]/30"></div>

          </div>


          <div className="flex items-center gap-2">

            <span className="tracking-[0.22em] uppercase text-[10px]">

              TRANSMETTRE

            </span>

            <div className="h-px flex-1 bg-[#C46B58]/30"></div>

          </div>

        </div>

      </div>


      {/* LIENS */}

      <div>

        <h3 className="uppercase text-[10px] tracking-[0.18em]">

          Navigation

        </h3>

        <div className="flex flex-col gap-1 mt-2 text-white/70 text-[14px]">

          <a href="/">
            Accueil
          </a>

          <a href="/circuits-signature">
            Circuits Signature
          </a>

          <a href="/voyage-sur-mesure">
            Voyage sur mesure
          </a>

          <a href="/blog">
            Journal des pépites
          </a>

          <a href="/a-propos">
            À propos
          </a>

          <a href="/contact">
            Contact
          </a>

        </div>

      </div>



      {/* CONTACT */}

      <div>

        <h3 className="uppercase text-[10px] tracking-[0.18em]">

          Contact

        </h3>

        <div className="mt-2 text-white/70 space-y-1 text-[14px]">

          <p>

            Lille · Hauts-de-France

          </p>

          <p>

            contact@lesescapadesdebertrand.fr

          </p>

          <p>

            06 81 22 55 77

          </p>

        </div>

      </div>

    </div>


    <div className="border-t border-white/10 mt-3 pt-2 text-[11px] text-white/50">

      © 2026 Les Escapades de Bertrand

    </div>

  </div>

</footer>

  )
}