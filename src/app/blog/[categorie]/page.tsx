import Navbar from "../../../components/Navbar";
import { getPepites } from "../actions";

export default async function Categorie({
  params,
}: {
  params: Promise<{ categorie: string }>;
}) {

  const { categorie } = await params;

  const pepites = await getPepites();

  const results = pepites.filter(
    (p:any)=>
      p.category?.trim().toLowerCase() ===
      decodeURIComponent(categorie)
      .trim()
      .toLowerCase()
  );

  return (

    <main className="bg-[#F6F1EA] min-h-screen">

      <Navbar />

      <section className="pt-36 px-6 pb-14">

        <div className="max-w-6xl mx-auto">

          <p className="uppercase text-[#B45A52] tracking-[0.3em] text-xs">

            Explorer

          </p>

          <h1 className="font-serif text-6xl mt-6">

            {decodeURIComponent(categorie)}

          </h1>

        </div>

      </section>

      <section className="px-6 pb-24">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {results.map((p:any)=>(

            <div
              key={p.id}
              className="
              bg-white
              rounded-3xl
              overflow-hidden
              shadow-md
              "
            >

              <div className="h-[250px] bg-[#DDD]"/>

              <div className="p-8">

                <p>{p.category}</p>

                <h2 className="font-serif text-3xl mt-4">

                  {p.title}

                </h2>

                <p className="mt-4">

                  {p.excerpt}

                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>

  );

}