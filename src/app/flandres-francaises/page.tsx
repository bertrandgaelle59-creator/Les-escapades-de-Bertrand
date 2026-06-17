import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function FlandresFrancaises() {
  return (
    <main className="bg-[#F3ECE3] min-h-screen text-[#2F2A25]">

      <Navbar />

      <div className="h-[80px] md:h-[100px]"></div>

      {/* HERO */}

      <section className="relative h-[35vh] md:h-[40vh]">

        <img
          src="/Flandres française2.png"
          className="w-full h-full object-cover"
          alt="Flandres françaises"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute bottom-6 left-6 md:bottom-4 md:left-14 text-white">

          <p className="uppercase tracking-[0.35em] text-sm md:text-base">
            Circuit Signature 03
          </p>

          <h1 className="font-serif text-5xl md:text-7xl mt-3 leading-none max-w-[450px]">
            Flandres françaises
          </h1>

          <div className="flex flex-wrap gap-6 mt-5 text-xs uppercase">
            <span>1 journée</span>
            <span>Jusqu'à 8 personnes</span>
            <span>Départ Lille</span>
          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="max-w-6xl mx-auto px-6 py-4 md:py-8">

        <p
          className="text-center text-4xl md:text-6xl text-[#A5483C] mb-6"
          style={{ fontFamily: "var(--font-allura)" }}
        >
          Les Flandres ne se visitent pas, elles se racontent
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-4">

          <p className="leading-8 text-[#645D58]">
            Entre collines douces,
            villages de briques,
            moulins,
            chapelles de campagne
            et vastes horizons,
            les Flandres françaises conservent une identité profondément singulière.
          </p>

          <p className="leading-8 text-[#645D58]">
            À travers paysages,
            traditions populaires,
            patrimoine vivant
            et rencontres locales,
            cette journée invite à comprendre ce qui fait encore battre le cœur de la Flandre.
          </p>

        </div>

      </section>

      {/* POURQUOI J'AIME LES FLANDRES */}

      <section className="py-4 md:py-8">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <div className="mt-8 bg-[#EAD8C0] border border-[#C8A98A] p-4 md:p-6 shadow-md">

            <h2
              className="text-[#A5483C] text-4xl mb-2 text-center"
              style={{ fontFamily: "'Allura', cursive" }}
            >
              Pourquoi j'aime faire découvrir les Flandres ?
            </h2>

            <p className="uppercase tracking-[0.25em] text-xs text-[#8C5A3C] mb-4">
              Regards d'un local passionné
            </p>

            <p className="text-lg leading-8 text-[#645D58]">

              "Ce qui me touche dans les Flandres,
              ce n'est pas seulement la beauté des paysages.

              C'est cette identité discrète mais profondément enracinée
              que l'on retrouve dans les villages,
              les traditions,
              l'architecture
              et la manière dont les habitants racontent leur territoire.

              Ici, chaque détail semble rappeler
              qu'une culture vivante continue d'exister.

              J'aime transmettre cette histoire,
              souvent méconnue,
              et montrer comment elle façonne encore le paysage d'aujourd'hui."

            </p>

            <p className="mt-8 font-serif text-xl">
              — Bertrand
            </p>

          </div>

        </div>

      </section>

{/* MUR DE SOUVENIRS */}

<section className="pb-10 md:pb-16">

  <div className="max-w-7xl mx-auto px-6">

    <div className="bg-[#EADCCB] border border-[#D2B89B] p-4 md:p-6 shadow-sm">

      {/* VERSION MOBILE - ON CONSERVE EXACTEMENT L'EXISTANT */}

      <div className="relative h-[400px] md:hidden">

        {/* PHOTO 1 */}
        <div className="absolute top-0 left-[22%] rotate-[7deg]">
          <img
            src="/FF_beffroi.PNG"
            alt=""
            className="w-[250px] border-[8px] border-white shadow-xl"
          />
        </div>

        {/* PHOTO 2 */}
        <div className="absolute top-[180px] left-[-15%] rotate-[12deg]">
          <img
            src="/FF_Estaminet.PNG"
            alt=""
            className="w-[150px] border-[8px] border-white shadow-xl"
          />
        </div>

        {/* PHOTO 3 */}
        <div className="absolute top-[90px] left-[-20%] rotate-[-7deg]">
          <img
            src="/FF_esquelbecq.PNG"
            alt=""
            className="w-[170px] border-[8px] border-white shadow-xl"
          />
        </div>

        {/* PHOTO 4 */}
        <div className="absolute top-[120px] right-[8%] rotate-[9deg]">
          <img
            src="/FF_Vuecassel.PNG"
            alt=""
            className="w-[120px] border-[8px] border-white shadow-xl"
          />
        </div>

        {/* PHOTO 5 */}
        <div className="absolute top-[230px] right-[25%] rotate-[-11deg]">
          <img
            src="/FF_rempartsbergues.PNG.png"
            alt=""
            className="w-[120px] border-[8px] border-white shadow-xl"
          />
        </div>

      </div>

      {/* VERSION ORDINATEUR */}

      <div className="hidden md:block">

        <div className="relative h-[550px]">

          {/* PHOTO CENTRALE */}

          <div className="absolute top-[20px] left-[32%] rotate-[5deg]">
            <img
              src="/FF_beffroi.PNG"
              alt=""
              className="w-[340px] border-[10px] border-white shadow-2xl"
            />
          </div>

          {/* PHOTO GAUCHE HAUTE */}

          <div className="absolute top-[250px] left-[8%] rotate-[-8deg]">
            <img
              src="/FF_Estaminet.PNG"
              alt=""
              className="w-[280px] border-[10px] border-white shadow-2xl"
            />
          </div>

          {/* PHOTO GAUCHE BASSE */}

          <div className="absolute top-[70px] left-[15%] rotate-[20deg]">
            <img
              src="/FF_esquelbecq.PNG"
              alt=""
              className="w-[240px] border-[10px] border-white shadow-2xl"
            />
          </div>

          {/* PHOTO DROITE HAUTE */}

          <div className="absolute top-[100px] right-[5%] rotate-[8deg]">
            <img
              src="/FF_Vuecassel.PNG"
              alt=""
              className="w-[250px] border-[10px] border-white shadow-2xl"
            />
          </div>

          {/* PHOTO DROITE BASSE */}

          <div className="absolute top-[350px] right-[3%] rotate-[-10deg]">
            <img
              src="/FF_rempartsbergues.PNG"
              alt=""
              className="w-[300px] border-[10px] border-white shadow-2xl"
            />
          </div>

        </div>

      </div>

    </div>

  </div>

</section>


      {/* CE QUE NOUS ALLONS DÉCOUVRIR ENSEMBLE */}

      <section className="pb-14">

        <p className="uppercase text-[#B45A52] text-lg md:text-xl tracking-[0.35em] text-center mb-3">
          Ce que nous allons découvrir ensemble
        </p>

        <h2 className="font-serif text-3xl md:text-4xl text-center mb-8">
          Une journée pour comprendre les Flandres autrement
        </h2>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-1 max-w-6xl mx-auto">

          <div className="relative pl-8 md:-rotate-1">

            <span className="absolute -left-8 -top-4 text-[#B78A68] text-7xl font-serif opacity-40">
              01
            </span>

            <h3 className="font-serif text-2xl">
              Une terre entre France et Flandre
            </h3>

            <p className="mt-2 text-[#645D58] leading-7">
              Comprendre comment l'histoire a façonné une identité unique au carrefour de plusieurs influences.
            </p>

          </div>

          <div className="relative pl-8 md:mt-10 md:rotate-1">

            <span className="absolute -left-8 -top-4 text-[#B78A68] text-7xl font-serif opacity-40">
              02
            </span>

            <h3 className="font-serif text-2xl">
              Lire le paysage flamand
            </h3>

            <p className="mt-2 text-[#645D58] leading-7">
              Les Monts de Flandre racontent une histoire géologique, agricole et humaine.
            </p>

          </div>

          <div className="relative pl-8 md:-ml-6">

            <span className="absolute -left-8 -top-4 text-[#B78A68] text-7xl font-serif opacity-40">
              03
            </span>

            <h3 className="font-serif text-2xl">
              Villages et patrimoine vivant
            </h3>

            <p className="mt-2 text-[#645D58] leading-7">
              Architecture flamande, traditions populaires et mémoire locale accompagnent la découverte.
            </p>

          </div>

          <div className="relative pl-8 md:mt-8 md:ml-6">

            <span className="absolute -left-8 -top-4 text-[#B78A68] text-7xl font-serif opacity-40">
              04
            </span>

            <h3 className="font-serif text-2xl">
              Cassel et les Monts de Flandre
            </h3>

            <p className="mt-2 text-[#645D58] leading-7">
              Découvrir les lieux emblématiques qui dominent la plaine flamande.
            </p>

          </div>

          <div className="relative pl-8 md:col-span-2 md:max-w-2xl md:mx-auto md:mt-4">

            <span className="absolute -left-8 -top-4 text-[#B78A68] text-7xl font-serif opacity-40">
              05
            </span>

            <h3 className="font-serif text-2xl">
              L'art de vivre flamand
            </h3>

            <p className="mt-2 text-[#645D58] leading-7">
              Les estaminets, entre gastronomie et convivialité.
            </p>

          </div>

        </div>

      </section>

{/* LES TEMPS FORTS DE L'EXPÉRIENCE */}

<section className="py-12 md:py-16 bg-[#E6D0BA]">

  <div className="max-w-7xl mx-auto px-6">

    <p className="uppercase text-[#B45A52] text-lg md:text-xl tracking-[0.35em] text-center mb-8">
      Les temps forts de l'expérience
    </p>

    <h2 className="font-serif text-3xl md:text-4xl text-center mb-10">
      Quelques souvenirs de la journée
    </h2>

    {/* VERSION MOBILE - ON NE CHANGE RIEN */}

    <div className="md:hidden flex flex-col gap-6 items-center">

      <div className="rotate-[-7deg]">
        <img
          src="/FF_ticket1.png"
          alt="Ascension du Beffroi"
          className="w-[280px]"
        />
      </div>

      <div className="rotate-[5deg]">
        <img
          src="/FF_ticket2.png"
          alt="Plans reliefs"
          className="w-[280px]"
        />
      </div>

      <div className="rotate-[-4deg]">
        <img
          src="/FF_ticket3.png"
          alt="Estaminet"
          className="w-[280px]"
        />
      </div>

      <div className="rotate-[8deg]">
        <img
          src="/FF_ticket4.png"
          alt="Pause gourmande"
          className="w-[280px]"
        />
      </div>

    </div>

    {/* VERSION ORDINATEUR */}

    <div className="hidden md:grid grid-cols-4 gap-4 max-w-[2000px] mx-auto items-start">

      <div className="rotate-[-7deg] mt-8">
        <img
          src="/FF_ticket1.png"
          alt="Ascension du Beffroi"
          className="w-full"
        />
      </div>

      <div className="rotate-[4deg] -mt-2">
        <img
          src="/FF_ticket2.png"
          alt="Plans reliefs"
          className="w-full"
        />
      </div>

      <div className="rotate-[-4deg] mt-10">
        <img
          src="/FF_ticket3.png"
          alt="Estaminet"
          className="w-full"
        />
      </div>

      <div className="rotate-[7deg] mt-2">
        <img
          src="/FF_ticket4.png"
          alt="Pause gourmande"
          className="w-full"
        />
      </div>

    </div>

  </div>

</section>

      {/* CONTACT */}

      <section className="py-6 md:py-10 bg-[#F3ECE3]">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase text-[#B45A52] text-lg md:text-xl tracking-[0.35em] font-light mb-4">
            Construisons votre expérience
          </p>

          <h2 className="font-serif text-3xl mt-4">
            Parlons de votre escapade en Flandres
          </h2>

          <p className="mt-6 text-[#645D58]">
            Chaque expérience s'adapte à votre rythme,
            vos envies et votre curiosité.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-[#A5483C] text-white px-8 py-4 hover:bg-[#8E3F34] transition-colors"
          >
            Contacter Bertrand
          </Link>

        </div>

      </section>

    </main>
  );
}