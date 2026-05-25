import Navbar from "../../components/Navbar";
import { getPepites } from "../blog/actions";

export default async function Admin() {
  const allPepites = await getPepites();

  const pepites = allPepites.sort(
    (a: any, b: any) =>
      new Date(b.date).getTime() -
      new Date(a.date).getTime()
  );

  return (
    <main className="bg-[#F6F1EA] min-h-screen text-[#2F2A25]">

      <Navbar />

      <section className="pt-36 pb-14 px-6">

        <div className="max-w-6xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-[#B45A52] text-xs">
            Administration
          </p>

          <h1 className="font-serif text-5xl md:text-7xl mt-6">
            Centre éditorial IA
          </h1>

          <p className="mt-6 text-sm text-[#8B8179]">
            Brouillons IA : {
              pepites.filter(
                (p:any)=>p.status==="draft"
              ).length
            }
          </p>

        </div>

      </section>

      <section className="px-6 pb-24">

        <div className="max-w-6xl mx-auto space-y-8">

          {pepites.map((item:any)=>(

            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 shadow-md"
            >

              <div className="flex items-center gap-3 flex-wrap">

                <p className="uppercase text-xs text-[#B45A52]">
                  {item.category}
                </p>

                <span className="bg-[#EFE8DE] px-3 py-1 rounded-full text-xs">
                  {item.status}
                </span>

                {item.ai_generated && (

                  <span className="bg-[#A5483C] text-white px-3 py-1 rounded-full text-xs">
                    IA
                  </span>

                )}

              </div>

              <input
                defaultValue={item.title}
                className="
                w-full
                mt-5
                border
                rounded-xl
                p-4
                bg-[#FAF7F2]
                font-serif
                text-2xl
                outline-none
                "
              />

              <textarea
                defaultValue={
                  item.content ||
                  item.excerpt
                }
                className="
                w-full
                mt-5
                min-h-[220px]
                border
                rounded-2xl
                p-5
                bg-[#FAF7F2]
                text-[#645D58]
                leading-8
                outline-none
                "
              />

              <div className="mt-8 flex flex-wrap gap-4">

                <button
                  type="button"
                  className="
                  px-6
                  py-4
                  rounded-xl
                  font-bold
                  text-black
                  border-2
                  border-[#0E5F3A]
                  shadow-lg
                  "
                  style={{
                    background:"#34D399"
                  }}
                >
                  💾 Sauvegarder
                </button>

                <button
                  type="button"
                  className="
                  px-6
                  py-4
                  bg-[#A5483C]
                  text-white
                  font-semibold
                  rounded-xl
                  shadow
                  "
                >
                  🚀 Publier
                </button>

                <button
                  type="button"
                  className="
                  px-6
                  py-4
                  bg-gray-200
                  rounded-xl
                  shadow
                  "
                >
                  Ignorer
                </button>

                <button
                  type="button"
                  className="
                  px-6
                  py-4
                  bg-gray-200
                  rounded-xl
                  shadow
                  "
                >
                  Régénérer image
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}