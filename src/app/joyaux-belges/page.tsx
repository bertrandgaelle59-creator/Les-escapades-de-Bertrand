import Navbar from "../../components/Navbar";
import Link from "next/link";
export default function Lille() {
  return (
    <main className="bg-[#F3ECE3] min-h-screen text-[#2F2A25]">

      <Navbar />
<div className="h-[80px] md:h-[100px]"></div>

{/* HERO */}

<section className="relative h-[35vh] md:h-[40vh]">

  <img
    src="/Bruges.png"
    className="w-full h-full object-cover"
    alt="Bruges"
  />

  <div className="absolute inset-0 bg-black/30" />

  <div className="absolute bottom-6 left-6 md:bottom-4 md:left-14 text-white">

    <p className="uppercase tracking-[0.35em] text-sm md:text-base">
      Circuit Signature 05
    </p>

    <h1 className="font-serif text-5xl md:text-7xl mt-3 leading-none max-w-[280px] md:max-w-none">
      Bruges, Venise du Nord
    </h1>

    <div className="flex flex-wrap gap-6 mt-5 text-xs uppercase">
      <span>1 journée</span>
      <span>Jusque 8 personnes</span>
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
Certaines villes se visitent. Bruges se savoure.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-2">

          <p className="leading-8 text-[#645D58]">

            Derrière les canaux, les façades de briques et les ruelles pavées se cache l'histoire d'une cité qui fut l'un des grands centres commerciaux de l'Europe médiévale.

          </p>

          <p className="leading-8 text-[#645D58]">

            Cette journée invite à découvrir Bruges au-delà de ses cartes postales, à travers son histoire, son patrimoine et l'art de vivre flamand qui continue d'animer la ville.

          </p>

        </div>

      </section>


 {/* POURQUOI J'AIME BRUGES */}

<section className="py-2 md:py-0">

  <div className="max-w-4xl mx-auto px-6 text-center">

    <div className="mt-8 bg-[#EAD8C0] border border-[#C8A98A] p-4 md:p-6 shadow-md">
<h2
  className="text-[#A5483C] text-4xl mb-2 text-center"
  style={{ fontFamily: "'Allura', cursive" }}
>
  Pourquoi j'aime faire découvrir Bruges ?
</h2><p className="uppercase tracking-[0.25em] text-xs text-[#8C5A3C] mb-4">

  Regards d'un voisin français passionné

</p>
      <p className="text-lg leading-8 text-[#645D58]">

        "Beaucoup de visiteurs tombent immédiatement sous le charme de Bruges, ses canaux, ses façades et ses monuments grandioses.

Mais ce qui me plaît surtout, c'est l'atmosphère particulière que l'on ressent en prenant le temps de s'y promener.

Au fil des visites, j'ai découvert des points de vue, des détails, des lieux et des ambiances que je souhaite vous faire partager.

Cette escapade est une invitation à découvrir Bruges telle que je la parcours et telle que je la ressens, avec amour et émerveillement."

      </p>

      <p className="mt-8 font-serif text-xl">

        — Bertrand

      </p>

    </div>

  </div>

</section>


{/* MUR DE SOUVENIRS */}

<section className="pb-10 md:pb-8">

  <div className="max-w-7xl mx-auto px-6">

    <div className="bg-[#EADCCB] border border-[#D2B89B] p-4 md:p-6 shadow-sm">

      {/* VERSION MOBILE */}

      <div className="relative h-[400px] md:hidden">

        {/* PHOTO 1 */}
        <div className="absolute top-0 left-[22%] rotate-[7deg]">
          <img
            src="/Bruges_place.png"
            alt=""
            className="w-[250px] border-[8px] border-white shadow-xl"
          />
        </div>

        {/* PHOTO 2 */}
        <div className="absolute top-[180px] left-[-15%] rotate-[12deg]">
          <img
            src="/Bruges_Vue 2.png"
            alt=""
            className="w-[12px] border-[8px] border-white shadow-xl"
          />
        </div>

        {/* PHOTO 3 */}
        <div className="absolute top-[90px] left-[-20%] rotate-[-7deg]">
          <img
            src="/Bruges_pont.png"
            alt=""
            className="w-[170px] border-[8px] border-white shadow-xl"
          />
        </div>

        {/* PHOTO 4 */}
        <div className="absolute top-[120px] right-[8%] rotate-[9deg]">
          <img
            src="/Bruges_beguinage.png"
            alt=""
            className="w-[120px] border-[8px] border-white shadow-xl"
          />
        </div>

        {/* PHOTO 5 */}
        <div className="absolute top-[230px] right-[25%] rotate-[-11deg]">
          <img
            src="/Bruges_bateau.png"
            alt=""
            className="w-[120px] border-[8px] border-white shadow-xl"
          />
        </div>

      </div>

      {/* VERSION ORDINATEUR */}

      <div className="hidden md:block">

        <div className="relative h-[540px]">

          {/* PHOTO CENTRALE */}

          <div className="absolute top-[20px] left-[32%] rotate-[5deg]">
            <img
              src="/Bruges_place.png"
              alt=""
              className="w-[420px] border-[10px] border-white shadow-2xl"
            />
          </div>

          {/* PHOTO GAUCHE HAUTE */}

          <div className="absolute top-[130px] left-[8%] rotate-[-8deg]">
            <img
              src="/Bruges_Vue 2.png"
              alt=""
              className="w-[320px] border-[10px] border-white shadow-2xl"
            />
          </div>

          {/* PHOTO GAUCHE BASSE */}

          <div className="absolute top-[300px] left-[25%] rotate-[10deg]">
            <img
              src="/Bruges_pont.png"
              alt=""
              className="w-[300px] border-[10px] border-white shadow-2xl"
            />
          </div>

          {/* PHOTO DROITE HAUTE */}

          <div className="absolute top-[160px] right-[20%] rotate-[8deg]">
            <img
              src="/Bruges_beguinage.png"
              alt=""
              className="w-[280px] border-[10px] border-white shadow-2xl"
            />
          </div>

          {/* PHOTO DROITE BASSE */}

          <div className="absolute top-[340px] right-[30%] rotate-[-10deg]">
            <img
              src="/Bruges_bateau.png"
              alt=""
              className="w-[280px] border-[10px] border-white shadow-2xl"
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
  Une journée pour découvrir la Venise du Nord
</h2>

<div className="grid md:grid-cols-2 gap-x-18 gap-y-2 max-w-6xl mx-auto">
<div className="relative pl-8 md:-rotate-1">
    <span className="absolute -left-8 -top-4 text-[#B78A68] text-7xl font-serif opacity-40">

      01
    </span>

    <h3 className="font-serif text-2xl">
      Une ville hors du temps
    </h3>

    <p className="mt-2 text-[#645D58] leading-7">
      Découvrir comment Bruges a conservé une atmosphère unique que l'on retrouve rarement ailleurs en Europe.
    </p>

  </div>

<div className="relative pl-8 md:mt-10 md:rotate-1">
    <span className="absolute -left-8 -top-4 text-[#B78A68] text-7xl font-serif opacity-40">
      02
    </span>

    <h3 className="font-serif text-2xl">
      Les plus beaux points de vue sur la ville
    </h3>

    <p className="mt-2 text-[#645D58] leading-7">
Prendre le temps d'observer Bruges depuis ses canaux, ses places et les hauteurs du Beffroi.    </p>

  </div>

  <div className="relative pl-8 md:-ml-6">

    <span className="absolute -left-8 -top-4 text-[#B78A68] text-7xl font-serif opacity-40">

      03
    </span>

    <h3 className="font-serif text-2xl">
      L'eau, fil conducteur de la découverte
    </h3>

    <p className="mt-2 text-[#645D58] leading-7">
Suivre les canaux qui dessinent le paysage brugeois et racontent la relation particulière de la ville avec son histoire.    </p>

  </div>

  <div className="relative pl-8 md:mt-8 md:ml-6">

    <span className="absolute -left-8 -top-4 text-[#B78A68] text-7xl font-serif opacity-40">
      04
    </span>

    <h3 className="font-serif text-2xl">
      Découvrir la ville dans toutes ses facettes
    </h3>

    <p className="mt-2 text-[#645D58] leading-7">
      Des ruelles discrètes aux endroits les plus emblématiques, partager un regard personnel sur la ville.
    </p>

  </div>

<div className="relative pl-8 md:col-span-2 md:max-w-2xl md:mx-auto md:mt-4">
    <span className="absolute -left-8 -top-4 text-[#B78A68] text-7xl font-serif opacity-40">
      05
    </span>

    <h3 className="font-serif text-2xl">
      L'art de vivre brugeois
    </h3>

    <p className="mt-2 text-[#645D58] leading-7">
      Découvrir la gastronomie flamande et de cette douceur de vivre qui fait le charme de Bruges.
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
          src="/Bruges_Ticket1.png"
          alt="scension du Beffroi"
          className="w-[280px]"
        />
      </div>

      <div className="rotate-[5deg]">
        <img
          src="/Bruges_Ticket2.png"
          alt=""
          className="w-[280px]"
        />
      </div>

      <div className="rotate-[-4deg]">
        <img
          src="/Bruges_Ticket3.png"
          alt=""
          className="w-[280px]"
        />
      </div>

      <div className="rotate-[8deg]">
        <img
          src="/Bruges_Ticket4.png"
          alt="Pause gourmande"
          className="w-[280px]"
        />
      </div>

    </div>

    {/* VERSION ORDINATEUR */}

    <div className="hidden md:grid grid-cols-4 gap-4 max-w-[2000px] mx-auto items-start">

      <div className="rotate-[-7deg] mt-8">
        <img
          src="/Bruges_Ticket1.png"
          alt="Beffroi"
          className="w-full"
        />
      </div>

      <div className="rotate-[4deg] -mt-2">
        <img
          src="/Bruges_Ticket2.png"
          alt=""
          className="w-full"
        />
      </div>

      <div className="rotate-[-4deg] mt-10">
        <img
          src="/Bruges_Ticket3.png"
          alt=""
          className="w-full"
        />
      </div>

      <div className="rotate-[7deg] mt-2">
        <img
          src="/Bruges_Ticket4.png"
          alt=""
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
      Parlons de votre escapade
    </h2>

    <p className="mt-6 text-[#645D58]">
      Chaque expérience s’adapte à votre rythme,
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
  )
}