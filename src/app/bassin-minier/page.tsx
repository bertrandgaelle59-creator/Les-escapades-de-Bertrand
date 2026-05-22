import Navbar from "../../components/Navbar";

export default function BassinMinier() {
  return (
    <main className="bg-[#F6F1EA] min-h-screen text-[#2F2A25]">

      <Navbar />

      {/* HERO */}

      <section className="relative h-[60vh]">

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600"
          className="w-full h-full object-cover"
          alt="Bassin Minier"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute bottom-10 left-6 md:left-14 text-white">

          <p className="uppercase tracking-[0.25em] text-xs">

            Circuit Signature 02

          </p>

          <h1 className="font-serif text-4xl md:text-6xl mt-3">

            Bassin Minier UNESCO

          </h1>

          <div className="flex flex-wrap gap-4 mt-4 text-xs uppercase">

            <span>1 journée</span>
            <span>Petits groupes</span>
            <span>Départ Lille</span>

          </div>

        </div>

      </section>



      {/* INTRO */}

      <section className="max-w-6xl mx-auto px-6 py-14">

        <h2 className="font-serif text-3xl md:text-5xl">

          Là où les terrils sont devenus paysages.

        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-8">

          <p className="leading-8 text-[#645D58]">

            Inscrit au patrimoine mondial de l’UNESCO,
            le Bassin Minier raconte trois siècles
            d’histoire industrielle et humaine.

          </p>

          <p className="leading-8 text-[#645D58]">

            Entre cités minières,
            terrils,
            mémoire ouvrière
            et paysages réinventés,
            une autre histoire du Nord apparaît.

          </p>

        </div>

      </section>



      {/* PROGRAMME */}

      <section className="bg-white py-14">

        <div className="max-w-6xl mx-auto px-6">

          <p className="uppercase text-[#B45A52] text-xs tracking-[0.25em]">

            Exemple de journée

          </p>

          <h2 className="font-serif text-3xl mt-3">

            Programme

          </h2>

          <div className="mt-8 space-y-5">

            <div className="flex gap-5 border-b pb-4">

              <strong>09h00</strong>

              <p>Départ & découverte du paysage minier</p>

            </div>

            <div className="flex gap-5 border-b pb-4">

              <strong>10h30</strong>

              <p>Lecture des cités minières UNESCO</p>

            </div>

            <div className="flex gap-5 border-b pb-4">

              <strong>12h30</strong>

              <p>Pause déjeuner & gastronomie locale</p>

            </div>

            <div className="flex gap-5 border-b pb-4">

              <strong>14h30</strong>

              <p>Terrils & mémoire ouvrière</p>

            </div>

            <div className="flex gap-5">

              <strong>17h00</strong>

              <p>Temps d'échange & fin de parcours</p>

            </div>

          </div>

        </div>

      </section>



      {/* CONTACT */}

      <section className="py-14">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase text-[#B45A52] text-xs tracking-[0.25em]">

            Construisons votre expérience

          </p>

          <h2 className="font-serif text-3xl mt-4">

            Parlons de votre journée dans le Bassin Minier

          </h2>

          <p className="mt-6 text-[#645D58]">

            Chaque expérience s’adapte à votre rythme,
            vos envies et votre curiosité.

          </p>

          <button className="mt-8 bg-[#A5483C] text-white px-8 py-4">

            Contacter Bertrand

          </button>

        </div>

      </section>

    </main>
  );
}