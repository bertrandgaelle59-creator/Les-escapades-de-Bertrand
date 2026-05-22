import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="bg-[#F6F1EA] text-[#2F2A25]">
      <Navbar />

      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="/lille-hero.png"
            alt="Les Escapades de Bertrand"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8">

          <p className="uppercase tracking-[0.4em] text-white/70 text-sm mb-6">
            Nord • Pas-de-Calais • Belgique
          </p>

          <h1 className="text-6xl md:text-8xl text-white font-serif leading-none max-w-5xl">
            L’art de voyager
            <br />
            autrement
          </h1>

          <p className="uppercase tracking-[0.35em] text-white/80 mt-8 text-sm">
            Les Escapades de Bertrand
          </p>

          <p className="text-xl text-white/90 max-w-2xl mt-10 leading-9">
            Des expériences patrimoniales sur mesure
            entre mémoire, culture flamande,
            rencontres humaines et lieux confidentiels.
          </p>

          <div className="flex gap-6 mt-12 flex-wrap">

            <button className="bg-[#A5483C] px-8 py-5 text-white uppercase">
              Découvrir les circuits
            </button>

            <button className="border border-white px-8 py-5 text-white">
              Rencontrer Bertrand
            </button>

          </div>

        </div>
      </section>


      <section className="bg-[#252525] text-white py-20">

        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-10">

          <div>
            <p className="text-[#C46B58] text-sm tracking-[0.3em] mb-4">
              VIVRE
            </p>

            <p className="leading-8 text-white/80">
              S’immerger dans les paysages,
              les cafés,
              les villages,
              les estaminets
              et les lieux de mémoire.
            </p>
          </div>

          <div>
            <p className="text-[#C46B58] text-sm tracking-[0.3em] mb-4">
              COMPRENDRE
            </p>

            <p className="leading-8 text-white/80">
              Décoder les traditions,
              les récits humains
              et l’histoire des territoires.
            </p>
          </div>

          <div>
            <p className="text-[#C46B58] text-sm tracking-[0.3em] mb-4">
              TRANSMETTRE
            </p>

            <p className="leading-8 text-white/80">
              Partager une culture vivante
              avec authenticité et émotion.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}