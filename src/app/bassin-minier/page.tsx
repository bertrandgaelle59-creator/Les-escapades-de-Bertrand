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
    src="/Patrimoine minier.PNG"
    className="w-full h-full object-cover"
    alt="Lille"
  />

  <div className="absolute inset-0 bg-black/30" />

  <div className="absolute bottom-6 left-6 md:bottom-4 md:left-14 text-white">

    <p className="uppercase tracking-[0.35em] text-sm md:text-base">
      Circuit Signature 02
    </p>

    <h1 className="font-serif text-5xl md:text-7xl mt-3 leading-none max-w-[280px] md:max-w-none">
      Le Bassin Minier, entre histoire et renaissance
    </h1>

    <div className="flex flex-wrap gap-6 mt-5 text-xs uppercase">
      <span>1 journée</span>
      <span>Petit groupe</span>
      <span>Départ Lille</span>
    </div>

  </div>

</section>
      
      {/* INTRO */}

      <section className="max-w-6xl mx-auto px-6 pt-4 pb-2 md:pt-2 md:pb-2">

        <p
  className="text-center text-4xl md:text-6xl text-[#A5483C] mb-6"
  style={{ fontFamily: "var(--font-allura)" }}
>
  Derrière chaque terril, se cache une histoire humaine
</p>

        <div className="grid md:grid-cols-2 gap-8 mt-4">

          <p className="leading-8 text-[#645D58]">

            Classé au patrimoine mondial de l'UNESCO,
le Bassin Minier est bien plus qu'un ancien territoire industriel.

Il raconte l'histoire de générations d'hommes et de femmes
venus construire ici une terre de travail,
de solidarité et de transmission.

          </p>

          <p className="leading-8 text-[#645D58]">

            Des corons aux terrils,
des cités minières aux chevalements,
chaque paysage porte encore l'empreinte
de cette aventure humaine exceptionnelle.

          </p>

        </div>

      </section>


 {/* POURQUOI J'AIME LE BASSIN MINIER */}

<section className="py-2 md:py-4">

  <div className="max-w-4xl mx-auto px-6 text-center">

    <div className="mt-8 bg-[#EAD8C0] border border-[#C8A98A] p-4 md:p-6 shadow-md">
<h2
  className="text-[#A5483C] text-4xl mb-2 text-center"
  style={{ fontFamily: "'Allura', cursive" }}
>
  Pourquoi j'aime faire découvrir le Bassin Minier ?
</h2><p className="uppercase tracking-[0.25em] text-xs text-[#8C5A3C] mb-4">

  Un territoire qui raconte les femmes et les hommes avant les pierres

</p>
      <p className="text-lg leading-8 text-[#645D58]">

        "Lorsque l'on parle du Bassin Minier,
beaucoup imaginent d'abord les mines.

Pourtant, ce sont surtout les histoires humaines
qui rendent ce territoire fascinant.

Chaque terril,
chaque cité minière,
chaque monument
raconte une aventure collective
faite de courage,
de travail et de solidarité.."

      </p>

      <p className="mt-2 font-serif text-xl">

        — Bertrand

      </p>

    </div>

  </div>

</section>


{/* MUR DE SOUVENIRS */}

<section className="pb-2 md:pb-6">

  <div className="max-w-7xl mx-auto px-6">

    <div className="bg-[#EADCCB] border border-[#D2B89B] p-6 md:p-6 shadow-sm">

      {/* VERSION MOBILE - ON CONSERVE EXACTEMENT L'EXISTANT */}

      <div className="relative h-[380px] md:hidden">

        {/* PHOTO 1 */}
        <div className="absolute top-0 left-[22%] rotate-[7deg]">
          <img
            src="/BM_9_9bis.png"
            alt=""
            className="w-[250px] border-[8px] border-white shadow-xl"
          />
        </div>

        {/* PHOTO 2 */}
        <div className="absolute top-[230px] left-[-15%] rotate-[12deg]">
          <img
            src="/BM_cités.png"
            alt=""
            className="w-[150px] border-[8px] border-white shadow-xl"
          />
        </div>

        {/* PHOTO 3 */}
        <div className="absolute top-[80px] left-[-20%] rotate-[-7deg]">
          <img
            src="/BM_lewarde.png"
            alt=""
            className="w-[170px] border-[8px] border-white shadow-xl"
          />
        </div>

        {/* PHOTO 4 */}
        <div className="absolute top-[120px] right-[8%] rotate-[9deg]">
          <img
            src="/BM_Terrilsjumeaux.png"
            alt=""
            className="w-[180px] border-[8px] border-white shadow-xl"
          />
        </div>

        {/* PHOTO 5 */}
        <div className="absolute top-[230px] right-[25%] rotate-[-11deg]">
          <img
            src="/BM_arenberg2.png"
            alt=""
            className="w-[120px] border-[8px] border-white shadow-xl"
          />
        </div>

      </div>

      {/* VERSION ORDINATEUR */}

      <div className="hidden md:block">

        <div className="relative h-[560px]">

          {/* PHOTO CENTRALE */}

          <div className="absolute top-[20px] left-[32%] rotate-[5deg]">
            <img
              src="/BM_9_9bis.png"
              alt=""
              className="w-[420px] border-[10px] border-white shadow-2xl"
            />
          </div>

          {/* PHOTO GAUCHE HAUTE */}

          <div className="absolute top-[130px] left-[8%] rotate-[-8deg]">
            <img
              src="/BM_cités.png"
              alt=""
              className="w-[320px] border-[10px] border-white shadow-2xl"
            />
          </div>

          {/* PHOTO GAUCHE BASSE */}

          <div className="absolute top-[350px] left-[10%] rotate-[10deg]">
            <img
              src="/BM_lewarde.png"
              alt=""
              className="w-[300px] border-[10px] border-white shadow-2xl"
            />
          </div>

          {/* PHOTO DROITE HAUTE */}

          <div className="absolute top-[220px] right-[0%] rotate-[8deg]">
            <img
              src="/BM_Terrilsjumeaux.png"
              alt=""
              className="w-[320px] border-[10px] border-white shadow-2xl"
            />
          </div>

          {/* PHOTO DROITE BASSE */}

          <div className="absolute top-[280px] right-[24%] rotate-[-10deg]">
            <img
              src="/BM_arenberg2.png"
              alt=""
              className="w-[220px] border-[10px] border-white shadow-2xl"
            />
          </div>

        </div>

      </div>

    </div>

  </div>

</section>


{/* LES TEMPS FORTS DE L'EXPÉRIENCE */}

<section className="py-6 md:py-16 bg-[#E6D0BA]">

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
          src="/BM_ticket1Lewarde.png"
          alt="Ascension du Beffroi"
          className="w-[280px]"
        />
      </div>

      <div className="rotate-[5deg]">
        <img
          src="/BM_ticket2terrils.png"
          alt="Plans reliefs"
          className="w-[280px]"
        />
      </div>

      <div className="rotate-[-4deg]">
        <img
          src="/BM_ticket3estaminet.png"
          alt="Estaminet"
          className="w-[280px]"
        />
      </div>

      <div className="rotate-[8deg]">
        <img
          src="/BM_ticket4Louvres.png"
          alt="Pause gourmande"
          className="w-[280px]"
        />
      </div>

    </div>

    {/* VERSION ORDINATEUR */}

    <div className="hidden md:grid grid-cols-4 gap-4 max-w-[2000px] mx-auto items-start">

      <div className="rotate-[-7deg] mt-8">
        <img
          src="/BM_ticket1Lewarde.png"
          alt="Ascension du Beffroi"
          className="w-full"
        />
      </div>

      <div className="rotate-[4deg] -mt-2">
        <img
          src="/BM_ticket2terrils.png"
          alt="Plans reliefs"
          className="w-full"
        />
      </div>

      <div className="rotate-[-4deg] mt-10">
        <img
          src="/BM_ticket3estaminet.png"
          alt="Estaminet"
          className="w-full"
        />
      </div>

      <div className="rotate-[7deg] mt-2">
        <img
          src="/BM_ticket4Louvres.png"
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