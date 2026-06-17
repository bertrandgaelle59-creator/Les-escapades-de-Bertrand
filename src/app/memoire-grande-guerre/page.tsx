import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function MemoireGrandeGuerre() {
  return (
    <main className="bg-[#F6F1EA] min-h-screen text-[#2F2A25]">

      <Navbar />

      {/* HERO */}

      <section className="relative h-[35vh] md:h-[40vh]">

        <img
          src="/Vimy.png"
          className="w-full h-full object-cover"
          alt="Mémoire de la Grande Guerre"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute bottom-10 left-6 md:left-14 text-white">

          <p className="uppercase tracking-[0.25em] text-xs">

            Circuit Signature 04

          </p>

          <h1 className="font-serif text-4xl md:text-6xl mt-3">

            Mémoire de la Grande Guerre

          </h1>

          <div className="flex flex-wrap gap-4 mt-4 text-xs uppercase">

            <span>1 journée</span>
            <span>Petits groupes</span>
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
  Un voyage au cœur de la mémoire européenne.
</p>
          

        
        <div className="grid md:grid-cols-2 gap-8 mt-2">

          <p className="leading-8 text-[#645D58]">

            Entre Arras et les collines de l’Artois,
            les paysages conservent encore les traces
            de l’un des conflits les plus marquants
            de l’histoire contemporaine.

          </p>

          <p className="leading-8 text-[#645D58]">

            À travers mémoriaux,
            cimetières militaires,
            musées et lieux de mémoire,
            ce circuit propose une approche sensible
            et profondément humaine de la Première Guerre mondiale.

          </p>

        </div>

      </section>

      {/* POURQUOI J'AIME LES LIEUX DE MEMOIRE */}
      
      <section className="py-2 md:py-4">
      
        <div className="max-w-4xl mx-auto px-6 text-center">
      
          <div className="mt-8 bg-[#EAD8C0] border border-[#C8A98A] p-4 md:p-6 shadow-md">
      <h2
        className="text-[#A5483C] text-4xl mb-2 text-center"
        style={{ fontFamily: "'Allura', cursive" }}
      >
        Pourquoi j'aime faire découvrir les lieux de mémoire ?
      </h2><p className="uppercase tracking-[0.25em] text-xs text-[#8C5A3C] mb-4">
      
        Regards d'un local passionné
      
      </p>
            <p className="text-lg leading-8 text-[#645D58]">
      
              "Lorsque l'on évoque la Première Guerre mondiale,
on pense souvent aux batailles,
aux dates et aux chiffres.

Pourtant, ce qui me touche ici,
ce sont avant tout les histoires humaines.

Derrière chaque nom gravé sur une pierre,
derrière chaque paysage redevenu paisible,
se cachent des vies bouleversées,
des familles séparées
et des destins venus de toute l'Europe
et du monde.

J'aime accompagner ces visites
parce qu'elles permettent de comprendre
notre présent à travers la mémoire
de ceux qui nous ont précédés.

Ces lieux ne racontent pas seulement la guerre.

Ils racontent aussi le courage,
la solidarité
et la volonté de construire la paix."
      
            </p>
      
            <p className="mt-8 font-serif text-xl">
      
              — Bertrand
      
            </p>
      
          </div>
      
        </div>
      
      </section>
      
      
      {/* MUR DE SOUVENIRS */}
      
      <section className="pb-6 md:pb-8">
      
        <div className="max-w-7xl mx-auto px-6">
      
          <div className="bg-[#EADCCB] border border-[#D2B89B] p-4 md:p-6 shadow-sm">
      
            {/* VERSION MOBILE - ON CONSERVE EXACTEMENT L'EXISTANT */}
      
            <div className="relative h-[400px] md:hidden">
      
              {/* PHOTO 1 */}
              <div className="absolute top-0 left-[22%] rotate-[7deg]">
                <img
                  src="/Memoire_Arras.png"
                  alt=""
                  className="w-[250px] border-[8px] border-white shadow-xl"
                />
              </div>
      
              {/* PHOTO 2 */}
              <div className="absolute top-[180px] left-[-15%] rotate-[12deg]">
                <img
                  src="/Memoire_Boves.png"
                  alt=""
                  className="w-[12px] border-[8px] border-white shadow-xl"
                />
              </div>
      
              {/* PHOTO 3 */}
              <div className="absolute top-[90px] left-[-20%] rotate-[-7deg]">
                <img
                  src="/Memoire_Lorette.png"
                  alt=""
                  className="w-[170px] border-[8px] border-white shadow-xl"
                />
              </div>
      
              {/* PHOTO 4 */}
              <div className="absolute top-[120px] right-[8%] rotate-[9deg]">
                <img
                  src="/Memoire_Neuville.png"
                  alt=""
                  className="w-[120px] border-[8px] border-white shadow-xl"
                />
              </div>
      
              {/* PHOTO 5 */}
              <div className="absolute top-[230px] right-[25%] rotate-[-11deg]">
                <img
                  src="/Memoire_Vimy.png"
                  alt=""
                  className="w-[120px] border-[8px] border-white shadow-xl"
                />
              </div>
      
            </div>
      
            {/* VERSION ORDINATEUR */}
      
            <div className="hidden md:block">
      
              <div className="relative h-[620px]">
      
                {/* PHOTO CENTRALE */}
      
                <div className="absolute top-[20px] left-[32%] rotate-[5deg]">
                  <img
                    src="/Memoire_Arras.png"
                    alt=""
                    className="w-[420px] border-[10px] border-white shadow-2xl"
                  />
                </div>
      
                {/* PHOTO GAUCHE HAUTE */}
      
                <div className="absolute top-[130px] left-[8%] rotate-[-8deg]">
                  <img
                    src="/Memoire_Boves.png"
                    alt=""
                    className="w-[320px] border-[10px] border-white shadow-2xl"
                  />
                </div>
      
                {/* PHOTO GAUCHE BASSE */}
      
                <div className="absolute top-[340px] left-[20%] rotate-[10deg]">
                  <img
                    src="/Memoire_Lorette.png"
                    alt=""
                    className="w-[350px] border-[10px] border-white shadow-2xl"
                  />
                </div>
      
                {/* PHOTO DROITE HAUTE */}
      
                <div className="absolute top-[120px] right-[10%] rotate-[8deg]">
                  <img
                    src="/Memoire_Vimy.png"
                    alt=""
                    className="w-[380px] border-[10px] border-white shadow-2xl"
                  />
                </div>
      
                {/* PHOTO DROITE BASSE */}
      
                <div className="absolute top-[250px] right-[24%] rotate-[-10deg]">
                  <img
                    src="/Memoire_Neuville.png"
                    alt=""
                    className="w-[350px] border-[10px] border-white shadow-2xl"
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
        Une journée à la rencontre de l'Histoire
              </h2>
      
      <div className="grid md:grid-cols-2 gap-x-18 gap-y-2 max-w-6xl mx-auto">
      <div className="relative pl-8 md:-rotate-1">
          <span className="absolute -left-8 -top-4 text-[#B78A68] text-7xl font-serif opacity-40">
      
            01
          </span>
      
          <h3 className="font-serif text-2xl">
            Le Nord pas de Calais " carrefour de l'Europe" et "boulevard des invasions"
          </h3>
      
          <p className="mt-2 text-[#645D58] leading-7">
            Des batailles médiévales aux deux guerres mondiales, le rôle majeur du territoire dans l'histoire de la France et de l'Europe    </p>
      
        </div>
      
      <div className="relative pl-8 md:mt-10 md:rotate-1">
          <span className="absolute -left-8 -top-4 text-[#B78A68] text-7xl font-serif opacity-40">
            02
          </span>
      
          <h3 className="font-serif text-2xl">
            Les paysages marqués par l'Histoire
          </h3>
      
          <p className="mt-2 text-[#645D58] leading-7">
Lire les traces encore visibles de la guerre dans les collines, les villages et les champs de l'Artois.          </p>
      
        </div>
      
        <div className="relative pl-8 md:-ml-6">
      
          <span className="absolute -left-8 -top-4 text-[#B78A68] text-7xl font-serif opacity-40">
      
            03
          </span>
      
          <h3 className="font-serif text-2xl">
            La vie des soldats au front
          </h3>
      
          <p className="mt-2 text-[#645D58] leading-7">
            Comprendre le quotidien des hommes qui ont vécu des années dans les tranchées et les galeries souterraines.
          </p>
      
        </div>
      
        <div className="relative pl-8 md:mt-8 md:ml-6">
      
          <span className="absolute -left-8 -top-4 text-[#B78A68] text-7xl font-serif opacity-40">
            04
          </span>
      
          <h3 className="font-serif text-2xl">
            Des mémoires venues du monde entier
          </h3>
      
          <p className="mt-2 text-[#645D58] leading-7">
            Canadiens, Britanniques, Français, Australiens, Allemands... : les lieux racontent une histoire profondément internationale.
          </p>
      
        </div>
      
      <div className="relative pl-8 md:col-span-2 md:max-w-2xl md:mx-auto md:mt-4">
          <span className="absolute -left-8 -top-4 text-[#B78A68] text-7xl font-serif opacity-40">
            05
          </span>
      
          <h3 className="font-serif text-2xl">
            De la mémoire à la paix
          </h3>
      
          <p className="mt-2 text-[#645D58] leading-7">
Découvrir comment les lieux de mémoire transmettent aujourd'hui un message universel de réconciliation et de paix.          </p>
      
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
                src="/Lille_ticket1_beffroi.png"
                alt="Ascension du Beffroi"
                className="w-[280px]"
              />
            </div>
      
            <div className="rotate-[5deg]">
              <img
                src="/Lille_ticket2_plans reliefs.png"
                alt="Plans reliefs"
                className="w-[280px]"
              />
            </div>
      
            <div className="rotate-[-4deg]">
              <img
                src="/Lille_ticket3_estaminet.png"
                alt="Estaminet"
                className="w-[280px]"
              />
            </div>
      
            <div className="rotate-[8deg]">
              <img
                src="/Lille_ticket4_pause.png"
                alt="Pause gourmande"
                className="w-[280px]"
              />
            </div>
      
          </div>
      
          {/* VERSION ORDINATEUR */}
      
          <div className="hidden md:grid grid-cols-4 gap-4 max-w-[2000px] mx-auto items-start">
      
            <div className="rotate-[-7deg] mt-8">
              <img
                src="/Memoire_ticket1.png"
                alt=""
                className="w-full"
              />
            </div>
      
            <div className="rotate-[4deg] -mt-2">
              <img
                src="/Memoire_ticket2.png"
                alt="Plans reliefs"
                className="w-full"
              />
            </div>
      
            <div className="rotate-[-4deg] mt-10">
              <img
                src="/Memoire_ticket3.png"
                alt="Estaminet"
                className="w-full"
              />
            </div>
      
            <div className="rotate-[7deg] mt-2">
              <img
                src="/Memoire_ticket4.png"
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
            Parlons de votre escapade Mémoire de la Grande Guerre
          </h2>
      
          <p className="mt-6 text-[#645D58]">
            Chaque expérience s’adapte à votre rythme,
            vos envies et votre curiosité.
            Passionnés d'histoire, familles, groupes ou associations :

construisons ensemble une découverte respectueuse, enrichissante et profondément humaine.
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
        )
      }