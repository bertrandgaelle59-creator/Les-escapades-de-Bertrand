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

            Découvrez quatre territoires racontés depuis l’intérieur

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
            alt="Lille"
          />

        </div>

        <div className="flex items-center px-5 md:px-8 py-4 md:py-6">

          <div>

            <p className="uppercase text-[#B45A52] tracking-[0.25em] text-xs">

              01 — Lille & Métropole

            </p>

            <h2 className="font-serif text-2xl md:text-[36px] mt-3 leading-tight">

              Lille

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

        <div className="flex items-center px-5 md:px-8 py-4 md:py-6">

          <div>

            <p className="uppercase text-[#B45A52] tracking-[0.25em] text-xs">

              02 — Patrimoine UNESCO

            </p>

            <h2 className="font-serif text-2xl md:text-[36px] mt-3 leading-tight">

              Bassin Minier

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

        <div>

          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200"
            className="h-[160px] md:h-[260px] w-full object-cover"
            alt="Bassin Minier"
          />

        </div>

      </section>



      {/* FLANDRES */}

      <section className="grid md:grid-cols-2 bg-white/40">

        <div>

          <img
            src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200"
            className="h-[160px] md:h-[260px] w-full object-cover"
            alt="Flandres"
          />

        </div>

        <div className="flex items-center px-5 md:px-8 py-4 md:py-6">

          <div>

            <p className="uppercase text-[#B45A52] tracking-[0.25em] text-xs">

              03 — Flandres françaises

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

  <div className="flex items-center px-5 md:px-8 py-4 md:py-6">

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

  <div>

    <img
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200"
      className="h-[160px] md:h-[260px] w-full object-cover"
      alt="Mémoire de la Grande Guerre"
    />

  </div>

</section>




  
{/* BELGIQUE */}

<section className="grid md:grid-cols-2 bg-white/40">

  <div>

    <img
      src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1200"
      className="h-[160px] md:h-[260px] w-full object-cover"
      alt="Belgique"
    />

  </div>

  <div className="flex items-center px-5 md:px-8 py-4 md:py-6">

    <div>

      <p className="uppercase text-[#B45A52] tracking-[0.25em] text-xs">

        05 — Joyaux belges

      </p>

      <h2 className="font-serif text-2xl md:text-[36px] mt-3 leading-tight">

        Belgique flamande

      </h2>

      <p className="mt-3 leading-5 text-[#645D58] text-[15px]">

        Passer la frontière,
        c’est poursuivre la même histoire
        dans une autre langue.

        Bruges, Gand, Ypres,
        patrimoine flamand et villes de caractère.

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