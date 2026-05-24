import Link from "next/link";
import Navbar from "../../components/Navbar";
import { getPepites } from "./actions";

export default async function Blog() {

  const pepites = await getPepites();

  const featured = pepites.filter(
    (p:any)=>p.featured
  );

  const univers = [

    {
      nom:"Patrimoine",
      categories:[
        "Architecture",
        "Mémoire",
        "Patrimoine industriel"
      ]
    },

    {
      nom:"Art de vivre",
      categories:[
        "Estaminets",
        "Gastronomie",
        "Bonnes adresses"
      ]
    },

    {
      nom:"Traditions",
      categories:[
        "Folklore"
      ]
    },

    {
      nom:"Lieux cachés",
      categories:[
        "Lieux cachés"
      ]
    },

    {
      nom:"Belgique",
      categories:[
        "Belgique"
      ]
    }

  ];

  return (

    <main className="bg-[#F6F1EA] min-h-screen text-[#2F2A25]">

      <Navbar />

      {/* HERO */}

      <section className="pt-36 pb-14 px-6">

        <div className="max-w-6xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-[#B45A52] text-xs">

            Blog des Pépites

          </p>

          <h1 className="font-serif text-5xl md:text-7xl mt-6 leading-tight max-w-5xl">

            Les 3 pépites de la semaine

          </h1>

          <p className="mt-8 max-w-3xl text-[#645D58] leading-8">

            Chaque semaine, trois nouvelles anecdotes,
            histoires, traditions, bonnes adresses
            ou lieux méconnus du Nord et de Belgique
            rejoignent la sélection.

        

          </p>

        </div>

      </section>



      {/* PÉPITES À LA UNE */}

      <section className="px-6 pb-24">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {featured.map((p:any)=>(

            <div
              key={p.id}
              className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-md
              hover:-translate-y-2
              hover:shadow-xl
              duration-300
              "
            >

              <img
                src={p.image}
                alt={p.title}
                className="h-[250px] w-full object-cover"
              />

              <div className="p-8">

                <p className="uppercase text-xs text-[#B45A52]">

                  {p.category}

                </p>

                <h2 className="font-serif text-3xl mt-4">

                  {p.title}

                </h2>

                <p className="mt-4 text-[#645D58] leading-7">

                  {p.excerpt}

                </p>

                <p className="mt-6 text-sm text-[#999]">

                  {p.date}

                </p>

              </div>

            </div>

          ))}

        </div>

      </section>



      {/* UNIVERS */}

      <section className="bg-white py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-[#B45A52] text-xs">

            Explorer les pépites

          </p>

          <h2 className="font-serif text-5xl mt-6">

            Explorer par univers

          </h2>


          <div className="flex flex-wrap gap-4 mt-14">

            {univers.map((u)=>(

              <Link
                href={`/blog/${encodeURIComponent(
                u.categories[0].toLowerCase()
                )}`}
                key={u.nom}
                className="
                bg-[#F6F1EA]
                rounded-full
                px-6
                py-4
                hover:bg-white
                hover:shadow-md
                hover:-translate-y-1
                duration-300
                inline-flex
                items-center
                gap-3
                "
              >

                <p className="font-serif text-lg">

                  {u.nom}

                </p>

                <p className="text-xs text-[#8B8179]">

                  {
                  pepites.filter(
                  (p:any)=>
                  u.categories.includes(
                  p.category?.trim()
                  )
                  ).length
                  }

                  {" "}pépites

                </p>

              </Link>

            ))}

          </div>

        </div>

      </section>

    </main>

  );

}