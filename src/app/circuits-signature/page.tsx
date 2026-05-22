import Link from "next/link";

import Navbar from "../../components/Navbar";

export default function CircuitsSignature() {
  return (
    <main className="bg-[#F6F1EA] text-[#2F2A25] min-h-screen">

      <Navbar />

      {/* HERO */}

      <section className="pt-40 pb-24 px-8">

        <div className="max-w-7xl mx-auto">

          <p className="uppercase tracking-[0.35em] text-[#B45A52] text-sm">

            Circuits Signature

          </p>

          <h1 className="font-serif text-5xl md:text-7xl mt-8 max-w-4xl leading-tight">

            Quatre territoires racontés depuis l’intérieur.

          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-9 text-[#645D58]">

            Chaque circuit est un récit composé sur mesure.
            Petits groupes, rencontres réelles,
            rythme respectueux et territoires vécus.

          </p>

        </div>

      </section>



      {/* LILLE */}

      <section className="grid md:grid-cols-2">

        <div>

          <img
            src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200"
            className="h-full w-full object-cover"
            alt="Lille"
          />

        </div>

        <div className="flex items-center px-14 py-24">

          <div>

            <p className="uppercase text-[#B45A52] tracking-[0.3em] text-sm">

              01 — Lille & Métropole

            </p>

            <h2 className="font-serif text-5xl mt-6">

              Lille

            </h2>

            <p className="mt-8 leading-9 text-[#645D58]">

              Entre ruelles pavées,
              maisons flamandes,
              cafés chaleureux et patrimoine vivant,
              Lille révèle un art de vivre profondément humain.

            </p>

            <Link
href="/lille"
className="mt-10 inline-block border-b border-black pb-2"
>

Découvrir →

</Link>

          </div>

        </div>

      </section>



      {/* BASSIN MINIER */}

      <section className="grid md:grid-cols-2">

        <div className="flex items-center px-14 py-24">

          <div>

            <p className="uppercase text-[#B45A52] tracking-[0.3em] text-sm">

              02 — Patrimoine UNESCO

            </p>

            <h2 className="font-serif text-5xl mt-6">

              Bassin Minier

            </h2>

            <p className="mt-8 leading-9 text-[#645D58]">

              Là où les terrils sont devenus paysages,
              et où la mémoire ouvrière continue
              de raconter l’histoire des hommes.

            </p>

            <Link
href="/bassin-minier"
className="mt-10 inline-block border-b border-black pb-2"
>

Découvrir →

</Link>

          </div>

        </div>

        <div>

          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200"
            className="h-full w-full object-cover"
            alt="Bassin Minier"
          />

        </div>

      </section>



      {/* FLANDRES */}

      <section className="grid md:grid-cols-2">

        <div>

          <img
            src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200"
            className="h-full w-full object-cover"
            alt="Flandres"
          />

        </div>

        <div className="flex items-center px-14 py-24">

          <div>

            <p className="uppercase text-[#B45A52] tracking-[0.3em] text-sm">

              03 — Flandres françaises

            </p>

            <h2 className="font-serif text-5xl mt-6">

              Monts, traditions & estaminets

            </h2>

            <p className="mt-8 leading-9 text-[#645D58]">

              Une immersion dans l’âme flamande :
              villages aux façades de briques,
              Monts de Flandre,
              traditions et convivialité.

            </p>

            <Link
href="/flandres-francaises"
className="mt-10 inline-block border-b border-black pb-2"
>

Découvrir →

</Link>

          </div>

        </div>

      </section>



      {/* BELGIQUE */}

      <section className="grid md:grid-cols-2">

        <div className="flex items-center px-14 py-24">

          <div>

            <p className="uppercase text-[#B45A52] tracking-[0.3em] text-sm">

              04 — Joyaux belges

            </p>

            <h2 className="font-serif text-5xl mt-6">

              Belgique flamande

            </h2>

            <p className="mt-8 leading-9 text-[#645D58]">

              Passer la frontière,
              c’est poursuivre la même histoire
              dans une autre langue.

              Bruges, Gand, Ypres,
              patrimoine flamand et villes de caractère.

            </p>

            <Link
href="/joyaux-belges"
className="mt-10 inline-block border-b border-black pb-2"
>

Découvrir →

</Link>

          </div>

        </div>

        <div>

          <img
            src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=1200"
            className="h-full w-full object-cover"
            alt="Belgique"
          />

        </div>

      </section>

    </main>
  );
}