import Link from "next/link";
import Navbar from "../../components/Navbar";
import { getPublishedPepites } from "./actions";

export default async function Blog() {

  const pepites = await getPublishedPepites();

  const featured = pepites
.filter(
(p:any)=>p.published===true
)
.sort(
(a:any,b:any)=>
new Date(b.date).getTime()-
new Date(a.date).getTime()
)
.slice(0,3);

  const univers=[

{
nom:"Patrimoine",
categories:[
"Architecture",
"Histoire",
"Patrimoine"
]
},

{
nom:"Art de vivre",
categories:[
"Estaminets"
]
},

{
nom:"Traditions",
categories:[
"Légendes"
]
},

{
nom:"Lieux cachés",
categories:[
"Insolite"
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

      <Navbar/>

      <section className="pt-56 px-6 pb-16">

        <div className="max-w-6xl mx-auto">

          <p className="uppercase text-xs tracking-[0.3em] text-[#B45A52]">

            Blog des Pépites

          </p>

          <h1 className="font-serif text-6xl mt-6">

            Les 3 pépites de la semaine

          </h1>

          <p className="mt-8 max-w-3xl text-[#645D58]">

            Chaque semaine, de nouvelles histoires,
            anecdotes et lieux méconnus rejoignent
            la sélection.

          </p>

        </div>

      </section>

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
              duration-300
              "
            >

              <img
                src={p.image}
                alt={p.title}
                className="
                h-[250px]
                w-full
                object-cover
                "
              />

              <div className="p-8">

                <p className="uppercase text-xs text-[#B45A52]">

                  {p.category}

                </p>

                <h2 className="font-serif text-3xl mt-4">

                  {p.title}

                </h2>

                <p className="mt-4 text-[#645D58]">

                  {p.excerpt}

                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      <section className="bg-white py-20 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="font-serif text-5xl">

            Explorer par univers

          </h2>

          <div className="flex flex-wrap gap-4 mt-10">

            {univers.map((u:any)=>(

<Link
key={u.nom}
href={`/blog/${encodeURIComponent(
u.categories[0].toLowerCase()
)}`}
                className="
                bg-[#F6F1EA]
                rounded-full
                px-6
                py-4
                "
              >

                {u.nom}

              </Link>

            ))}

          </div>

        </div>

      </section>

    </main>

  );

}