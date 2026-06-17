import Navbar from "../components/Navbar";

export default function Home() {
return ( <main className="bg-[#F6F1EA] text-[#2F2A25]"> <Navbar />

```
  {/* Bandeau territoire */}

  <section className="bg-[#F6F1EA] pt-20 pb-2 border-b border-[#E8E0D6]">

    <div className="max-w-7xl mx-auto px-6">

      <p className="uppercase tracking-[0.3em] text-[#645D58] text-[11px] md:text-sm">

        Nord • Pas-de-Calais • Belgique

      </p>

    </div>

  </section>

  {/* HERO */}

  <section className="relative min-h-[65vh] md:min-h-[72vh] flex items-center">

    <div className="absolute inset-0">

      <img
        src="/lille-hero.png"
        alt="Les Escapades de Bertrand"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/25" />

    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">

      <h1 className="text-4xl md:text-6xl text-white font-serif leading-tight max-w-4xl">

        Les Escapades
        <br />
        de Bertrand

      </h1>

      <p
        className="text-white/95 text-3xl md:text-5xl mt-1 ml-4 md:ml-12"
        style={{ fontFamily: "var(--font-allura)" }}
      >

        L'art de voyager autrement

      </p>

      <p className="text-white text-lg md:text-2xl max-w-2xl mt-8 leading-8">

        "Entre Patrimoine, Mémoire, Gastronomie et rencontres humaines, je vous invite à découvrir avec moi un Nord plus intime, et plus authentique."


      </p>

      <div className="mt-10 max-w-xl">

        <p className="text-white/90 text-sm md:text-base leading-6">

          Découvrez nos circuits thématiques
          ou imaginez avec nous une escapade
          entièrement conçue selon vos envies.

        </p>

      </div>

      <div className="flex flex-col md:flex-row gap-4 mt-6 mb-12 md:mb-0">

        <a
  href="/circuits-signature"
  className="
  block
  md:inline-flex
  bg-[#A5483C]
  md:bg-black/20
  text-white
  px-5
  py-4
  rounded-sm
  shadow-md
  border
  border-[#A5483C]
  md:border-white/40
  "
>

  <div>

    <div className="uppercase text-sm tracking-[0.08em]">

      Circuits Signature

    </div>

    <div className="text-white/80 text-xs mt-1 md:hidden">

      → Découvrir nos itinéraires

    </div>
    
  </div>
    
        </a>

      <a
  href="/voyage-sur-mesure"
  className="
  block
  md:inline-flex
  bg-[#A5483C]
  md:bg-black/20
  text-white
  px-5
  py-4
  rounded-sm
  shadow-md
  border
  border-[#A5483C]
  md:border-white/40
  "
>

  <div>

    <div className="uppercase text-sm tracking-[0.08em]">

      Voyage sur mesure

    </div>

    <div className="text-white/80 text-xs mt-1 md:hidden">

      → Imaginer notre escapade

    </div>

  </div>

</a>    


      </div>

    </div>

  </section>

  {/* JOURNAL DES PÉPITES */}

<section className="bg-[#F6F1EA] py-10 md:py-16">

  <div className="max-w-6xl mx-auto px-6">


<div className="relative">

  <img
    src="/lille-hero.png"
    alt="Journal des pépites"
    className="w-full h-[50px] md:h-[520px] object-cover"
  />

  <div
    className="
    bg-[#F6F1EA]
    border
    border-[#E5DDD2]
    shadow-lg
    p-3

    mt-[-20px]
    mx-4

    md:absolute
    md:max-w-md
    md:left-10
    md:bottom-10
    md:mt-0
    md:mx-0
    "
  >

    <div className="border border-[#EFE8DE] p-6 md:p-8">

      <p className="uppercase text-[#B45A52] text-xs tracking-[0.3em]">

        Journal des pépites

      </p>

      <h2 className="font-serif text-3xl md:text-5xl mt-4 leading-tight">

        Le Nord regorge
        <br />
        de trésors cachés

      </h2>

      <p className="mt-5 text-[#645D58] leading-7">

        Dans l'attente de se rencontrer,
        découvrez anecdotes étonnantes,
        histoires insolites et lieux méconnus
        du Nord et de nos voisins belges.

      </p>

      <>
  {/* Mobile */}

  <a
    href="/blog"
    className="
    md:hidden
    inline-block
    mt-6
    bg-[#A5483C]
    text-white
    px-5
    py-3
    text-sm
    uppercase
    tracking-[0.08em]
    "
  >
    Explorer nos Pépites
  </a>

  {/* Desktop */}

  <a
    href="/blog"
    className="
    hidden
    md:inline-flex
    items-center
    mt-6
    text-[#A5483C]
    font-medium
    hover:opacity-80
    transition
    "
  >
    Explorer les pépites →
  </a>
</>

    </div>

  </div>

</div>


  </div>

</section>

  

</main>

);
}