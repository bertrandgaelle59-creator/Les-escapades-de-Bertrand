import Navbar from "../../components/Navbar";

export default function APropos() {
  return (
    <main className="bg-[#F6F1EA] min-h-screen text-[#2F2A25]">

      <Navbar />

      {/* HERO */}

      <section className="pt-28 pb-8 px-6">

        <div className="max-w-6xl mx-auto">

          <p className="uppercase tracking-[0.25em] text-[#B45A52] text-lg">

            Rencontrer Bertrand

          </p>

          <h1 className="font-serif text-3xl md:text-4xl mt-4 leading-tight">

            Voyager avec quelqu’un,
            
            pas seulement avec un guide.

          </h1>

        </div>

      </section>



      {/* PHOTO + TEXTE */}

      <section className="max-w-6xl mx-auto px-6 pb-6">

        <div className="grid md:grid-cols-2 gap-01 items-start">

          {/* PHOTO */}

          <div className="flex justify-center md:justify-start">

            <div className="relative">

              <div className="absolute -top-6 -left-6 w-full h-full bg-[#E6D8C8] rounded-3xl"></div>

              <img
                src="/bertrand.jpeg"
                alt="Bertrand"
                className="
                relative
                z-10
                w-[220px]
                md:w-[390px]
                rounded-3xl
                shadow-2xl
                object-cover
                "
              />

            </div>

          </div>


          {/* TEXTE */}

          <div className="space-y-6 text-[#645D58] leading-8 text-lg">

            <p>

              "Depuis maintenant plus de 45 ans, j'ai grandi entre les corons,
              les beffrois et les paysages du Nord.
              Très tôt, j'ai senti que ma région
              cachait bien plus qu’elle ne montrait.

              Derrière les façades flamandes,
              les terrils ou les estaminets
              se racontent des histoires humaines,
              des mémoires et des paysages
              que l’on traverse parfois
              sans vraiment les regarder.

            </p>

            <p>

              Derrière chaque lieu existe une histoire.

              Derrière une bière locale,
              un paysage industriel
              ou une ruelle pavée,
              il y a toujours des hommes,
              des traditions et des récits.

            </p>

            <p>

              Les Escapades de Bertrand sont nées
              d’une conviction simple :

            </p>

            <blockquote className="border-l-4 border-[#A5483C] pl-6 italic text-[#A5483C] text-xl">

              "Vivre, comprendre, transmettre."

            </blockquote>

            <p>

              Ici on ne visite pas simplement des lieux.

              On prend le temps de rencontrer,
              d’écouter,
              de comprendre
              et parfois même de ralentir.""

            </p>

          </div>

        </div>

      </section>

{/* MA PHILOSOPHIE */}

<section className="bg-white py-8">

  <div className="max-w-6xl mx-auto px-6">

    <p className="uppercase tracking-[0.25em] text-[#B45A52] text-lg">

      Ma philosophie

    </p>

<h2 className="font-serif text-3xl md:text-4xl mt-4 leading-tight">
        Vivre un territoire.
      Le comprendre.
      Le transmettre.

    </h2>

    <p className="mt-4 w-full text-[#645D58] leading-8">

      Chaque escapade repose sur une idée simple :
      ralentir, regarder autrement et créer une expérience qui laisse une trace.

    </p>


    <div className="grid md:grid-cols-3 gap-2 mt-4">


      <div className="bg-[#F6F1EA] p-6 rounded-3xl">

        <p className="uppercase text-[#B45A52] tracking-[0.2em] text-sm">

          Vivre

        </p>

        <p className="mt-6 text-[#645D58] leading-8">

          S’immerger dans les paysages,
          les cafés, les villages,
          les estaminets et les lieux de mémoire.

        </p>

      </div>



      <div className="bg-[#F6F1EA] p-6 rounded-3xl">

        <p className="uppercase text-[#B45A52] tracking-[0.2em] text-sm">

          Comprendre

        </p>

        <p className="mt-6 text-[#645D58] leading-8">

          Décoder les traditions,
          les récits humains
          et l’histoire des territoires.

        </p>

      </div>



      <div className="bg-[#F6F1EA] p-6 rounded-3xl">

        <p className="uppercase text-[#B45A52] tracking-[0.2em] text-sm">

          Transmettre

        </p>

        <p className="mt-6 text-[#645D58] leading-8">

          Partager une culture vivante
          avec authenticité
          et émotion.

        </p>

      </div>

    </div>

  </div>

</section>



{/* LE VEHICULE */}

<section className="py-8">

<div className="max-w-6xl mx-auto px-6">

<p className="uppercase tracking-[0.25em] text-[#B45A52] text-lg">

L'expérience sur la route

</p>

<h2 className="font-serif text-3xl md:text-4xl mt-4 leading-tight">

Voyager ensemble, dès le départ.

</h2>

<div className="grid md:grid-cols-2 gap-6 mt-12 items-center">

<div>

<img
src="/trafic.png"
alt="Renault Trafic"
className="rounded-3xl shadow-2xl"
/>

</div>


<div className="space-y-6 text-[#645D58] leading-8">

<p>

Les Escapades se vivent aussi
entre deux étapes,
sur la route,
dans les échanges spontanés
et les histoires partagées.

</p>

<p>

Pour préserver cette proximité,
les expériences sont organisées
en petits groupes
à bord d'un Renault Trafic 9 places.

</p>

<p>

Confort, souplesse
et liberté de mouvement
permettent d'explorer
le territoire autrement.

</p>

</div>

</div>

</div>

</section>

    </main>
  );
}