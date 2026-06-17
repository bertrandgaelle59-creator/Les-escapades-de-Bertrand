import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function CircuitsSignature() {
  return (
    <main className="bg-[#F6F1EA] text-[#2F2A25] min-h-screen">

      <Navbar />


      {/* HERO */}

      <section className="relative overflow-hidden">

        <img
src="/détails architecture.png"
  className="w-full h-[150px] md:h-[240px] object-cover"
          alt="Architecture baroque flamande"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute bottom-4 md:bottom-6 left-5 md:left-10 text-white">

          <p className="uppercase tracking-[0.25em] text-xs">

            Circuits Signature

          </p>

          <h1 className="font-serif text-3xl md:text-5xl mt-2 leading-tight">

            Découvrez cinq territoires racontés depuis l’intérieur

          </h1>

        </div>

      </section>



      {/* INTRO */}

      <section className="max-w-5xl mx-auto px-5 md:px-6 py-8 md:py-10">

        <h2 className="font-serif text-2xl md:text-4xl leading-tight">

          Chaque circuit est un récit composé sur mesure.

        </h2>

        <div className="grid md:grid-cols-2 gap-6 mt-6">

          <p className="leading-7 text-[#645D58] text-[15px]">

            Petits groupes,
            rencontres réelles,
            rythme respectueux
            et territoires vécus.

          </p>

          <p className="leading-7 text-[#645D58] text-[15px]">

            Chaque itinéraire privilégie
            une découverte sensible du territoire,
            entre patrimoine,
            traditions flamandes,
            mémoire et lieux confidentiels.

          </p>

        </div>

      </section>



      {/* LILLE */}

      <section className="grid md:grid-cols-2 bg-white/40">

        <div>

          <img
            src="/lille.png"
            className="h-[160px] md:h-[260px] w-full object-cover"
            alt="Lille, Capitale des Flandres"
          />

        </div>

        <div className="flex items-center px-5 md:px-8 py-4 md:py-6">

          <div>

            <p className="uppercase text-[#B45A52] tracking-[0.25em] text-xs">

              01 — Balade urbaine entre Patrimoine et Gastronomie

            </p>

            <h2 className="font-serif text-2xl md:text-[36px] mt-3 leading-tight">

              Lille, la Capitale des Flandres

            </h2>

            <p className="mt-3 leading-5 text-[#645D58] text-[15px]">

              Entre ruelles pavées,
              maisons flamandes,
              cafés chaleureux et patrimoine vivant,
              Lille révèle un art de vivre profondément humain.

            </p>

            <Link
              href="/lille"
              className="mt-2 inline-flex items-center gap-2 text-[13px] border-b border-black pb-[2px] hover:opacity-70 transition"
            >

              Découvrir →

            </Link>

          </div>

        </div>

      </section>



      {/* BASSIN MINIER */}

      <section className="grid md:grid-cols-2 bg-white">

  <div className="md:order-2">

    <img
      src="/Patrimoine minier.PNG"
      className="h-[160px] md:h-[260px] w-full object-cover"
      alt="Bassin Minier"
    />

  </div>

  <div className="flex items-center px-5 md:px-8 py-4 md:py-6 md:order-1">

    <div>

      <p className="uppercase text-[#B45A52] tracking-[0.25em] text-xs">

        02 — Patrimoine UNESCO

      </p>

      <h2 className="font-serif text-2xl md:text-[36px] mt-3 leading-tight">

        Le Bassin Minier, entre histoire et renaissance

      </h2>


      <p className="mt-3 leading-5 text-[#645D58] text-[15px]">

        Là où les terrils sont devenus paysages,
        et où la mémoire ouvrière continue
        de raconter l’histoire des hommes.

      </p>

      <Link
        href="/bassin-minier"
        className="mt-2 inline-flex items-center gap-2 text-[13px] border-b border-black pb-[2px] hover:opacity-70 transition"
      >

        Découvrir →

      </Link>

    </div>

  </div>
      </section>



      {/* FLANDRES */}

      <section className="grid md:grid-cols-2 bg-white/40">

        <div>

          <img
  src="/Flandres française2.png"
  className="h-[160px] md:h-[260px] w-full object-cover"
  alt="Flandres"
/>

        </div>

        <div className="flex items-center px-5 md:px-8 py-4 md:py-6">

          <div>

            <p className="uppercase text-[#B45A52] tracking-[0.25em] text-xs">

              03 — Flandres française

            </p>

            <h2 className="font-serif text-2xl md:text-[36px] mt-3 leading-tight">

              Monts, traditions & estaminets

            </h2>

            <p className="mt-3 leading-5 text-[#645D58] text-[15px]">

              Une immersion dans l’âme flamande :
              villages aux façades de briques,
              Monts de Flandre,
              traditions et convivialité.

            </p>

            <Link
              href="/flandres-francaises"
              className="mt-2 inline-flex items-center gap-2 text-[13px] border-b border-black pb-[2px] hover:opacity-70 transition"
            >

              Découvrir →

            </Link>

          </div>

        </div>

      </section>


{/* GRANDE GUERRE */}

<section className="grid md:grid-cols-2 bg-white">

  <div className="md:order-2">

    <img
      src="/Vimy.png"
      className="h-[160px] md:h-[260px] w-full object-cover"
      alt="Mémoire de la Grande Guerre"
    />

  </div>

  <div className="flex items-center px-5 md:px-8 py-4 md:py-6 md:order-1">

    <div>

      <p className="uppercase text-[#B45A52] tracking-[0.25em] text-xs">

        04 — Mémoire & transmission

      </p>

      <h2 className="font-serif text-2xl md:text-[36px] mt-3 leading-tight">

        Mémoire de la Grande Guerre

      </h2>

      <p className="mt-3 leading-5 text-[#645D58] text-[15px]">

        Entre cimetières militaires grandioses,
        mémoriaux impressionnants,
        tranchées et découverte de la Grand-Place d’Arras,
        ce circuit raconte l’histoire intime
        de la Première Guerre mondiale
        dans les Hauts-de-France.

      </p>

      <Link
        href="/memoire-grande-guerre"
        className="mt-2 inline-flex items-center gap-2 text-[13px] border-b border-black pb-[2px] hover:opacity-70 transition"
      >

        Découvrir →

      </Link>

    </div>

  </div>

</section>




  
{/* BELGIQUE */}

<section className="grid md:grid-cols-2 bg-white/40">

  <div>

    <img
  src="/Bruges.png"
  className="h-[160px] md:h-[260px] w-full object-cover"
  alt="Belgique"
/>

  </div>

  <div className="flex items-center px-5 md:px-8 py-4 md:py-6">

    <div>

      <p className="uppercase text-[#B45A52] tracking-[0.25em] text-xs">

        05 — La Venise du Nord

      </p>

      <h2 className="font-serif text-2xl md:text-[36px] mt-3 leading-tight">

        Bruges, la Venise du Nord

      </h2>

      <p className="mt-3 leading-5 text-[#645D58] text-[15px]">

        Passer la frontière,
        c’est poursuivre la même histoire
        dans une autre langue.

        Venez découvrir Bruges, la sublime Venise du Nord.

      </p>

      <Link
        href="/joyaux-belges"
        className="mt-2 inline-flex items-center gap-2 text-[13px] border-b border-black pb-[2px] hover:opacity-70 transition"
      >

        Découvrir →

      </Link>

    </div>

  </div>

</section>



    </main>
  );
}