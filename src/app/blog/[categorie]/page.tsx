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
    (p: any) =>
      p.category?.trim().toLowerCase() ===
      decodeURIComponent(categorie)
        .trim()
        .toLowerCase()
  );

  return (

    <main className="bg-[#F6F1EA] min-h-screen">

      <Navbar />

      {/* HERO */}

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


      {/* ARTICLES */}

      <section className="px-6 pb-24">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">

          {results.map((p: any) => (

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

    </main>

  );

}