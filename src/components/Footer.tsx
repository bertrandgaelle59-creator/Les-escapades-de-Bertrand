export default function Footer() {
  return (

    <footer className="bg-[#252525] text-white mt-20">

      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* LOGO / INTRO */}

          <div>

            <h2 className="font-serif text-3xl">

              Les Escapades
              de Bertrand

            </h2>

            <p className="mt-6 text-white/70 leading-8">

              Expériences patrimoniales,
              escapades sur mesure
              entre Nord, Pas-de-Calais
              et Belgique.

            </p>

<div className="mt-8 flex flex-col gap-3 text-[#C46B58]">

  <div className="flex items-center gap-3">

    <span className="tracking-[0.3em] uppercase text-sm">

      VIVRE

    </span>

    <div className="h-px flex-1 bg-[#C46B58]/30"></div>

  </div>


  <div className="flex items-center gap-3">

    <span className="tracking-[0.3em] uppercase text-sm">

      COMPRENDRE

    </span>

    <div className="h-px flex-1 bg-[#C46B58]/30"></div>

  </div>


  <div className="flex items-center gap-3">

    <span className="tracking-[0.3em] uppercase text-sm">

      TRANSMETTRE

    </span>

    <div className="h-px flex-1 bg-[#C46B58]/30"></div>

  </div>

</div>

          </div>


          {/* LIENS */}

          <div>

            <h3 className="uppercase text-sm tracking-[0.2em]">

              Navigation

            </h3>

            <div className="flex flex-col gap-4 mt-6 text-white/70">

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

            <h3 className="uppercase text-sm tracking-[0.2em]">

              Contact

            </h3>

            <div className="mt-6 text-white/70 space-y-4">

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


        <div className="border-t border-white/10 mt-14 pt-8 text-sm text-white/50">

          © 2026 Les Escapades de Bertrand

        </div>

      </div>

    </footer>

  )
}