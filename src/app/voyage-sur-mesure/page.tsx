import Navbar from "../../components/Navbar";

export default function VoyageSurMesure() {
  return (
    <main className="bg-[#F6F1EA] min-h-screen text-[#2F2A25]">

      <Navbar />

      {/* HERO */}

      <section className="relative h-[60vh]">

        <img
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1600"
          className="w-full h-full object-cover"
          alt="Voyage sur mesure"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute bottom-10 left-6 md:left-14 text-white">

          <p className="uppercase tracking-[0.25em] text-xs">

            Expérience personnalisée

          </p>

          <h1 className="font-serif text-4xl md:text-6xl mt-3">

            Créez votre escapade

          </h1>

          <div className="flex flex-wrap gap-4 mt-4 text-xs uppercase">

            <span>1 jour</span>
            <span>Week-end</span>
            <span>Plusieurs jours</span>

          </div>

        </div>

      </section>


      {/* INTRO */}

      <section className="max-w-6xl mx-auto px-6 py-14">

        <h2 className="font-serif text-3xl md:text-5xl">

          Votre voyage, votre rythme.

        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-8">

          <p className="leading-8 text-[#645D58]">

            Au-delà des circuits signature,
            chaque expérience peut être imaginée
            entièrement selon vos envies.

          </p>

          <p className="leading-8 text-[#645D58]">

            Patrimoine, mémoire,
            gastronomie,
            lieux insolites,
            Belgique,
            Flandres ou expériences confidentielles.

          </p>

        </div>

      </section>



      {/* COMMENT ÇA FONCTIONNE */}

      <section className="bg-white py-14">

        <div className="max-w-6xl mx-auto px-6">

          <p className="uppercase text-[#B45A52] text-xs tracking-[0.25em]">

            Comment ça fonctionne

          </p>

          <h2 className="font-serif text-3xl mt-3">

            Une expérience construite ensemble

          </h2>

          <div className="mt-10 space-y-6">

            <div className="flex gap-5 border-b pb-4">

              <strong>01</strong>

              <p>Vous partagez vos envies et centres d’intérêt</p>

            </div>

            <div className="flex gap-5 border-b pb-4">

              <strong>02</strong>

              <p>Je recherche lieux, hébergements et bonnes adresses</p>

            </div>

            <div className="flex gap-5 border-b pb-4">

              <strong>03</strong>

              <p>Nous construisons votre programme</p>

            </div>

            <div className="flex gap-5">

              <strong>04</strong>

              <p>Je vous accompagne sur le terrain</p>

            </div>

          </div>

        </div>

      </section>



      {/* FORMULAIRE */}

      <section className="py-14">

        <div className="max-w-4xl mx-auto px-6">

          <p className="uppercase text-[#B45A52] text-xs tracking-[0.25em] text-center">

            Construisons votre projet

          </p>

          <h2 className="font-serif text-3xl mt-4 text-center">

            Parlons de votre prochaine escapade

          </h2>


          <div className="grid md:grid-cols-2 gap-4 mt-10">

            <input
              placeholder="Nom"
              className="p-4 border"
            />

            <input
              placeholder="Email"
              className="p-4 border"
            />

            <input
              placeholder="Nombre de jours"
              className="p-4 border"
            />

            <input
              placeholder="Nombre de voyageurs"
              className="p-4 border"
            />

          </div>


          <textarea
            placeholder="Qu’aimeriez-vous découvrir ?"
            className="w-full border p-4 mt-4 h-40"
          />


          <div className="text-center">

            <button className="mt-8 bg-[#A5483C] text-white px-8 py-4">

              Envoyer ma demande

            </button>

          </div>

        </div>

      </section>

    </main>
  );
}