import Navbar from "../../components/Navbar";

export default function Contact() {
  return (
    <main className="bg-[#F6F1EA] min-h-screen text-[#2F2A25]">

      <Navbar />


      {/* HERO */}

      <section className="pt-36 pb-14 px-6">

        <div className="max-w-6xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-[#B45A52] text-xs">

            Contact

          </p>

          <h1 className="font-serif text-5xl md:text-7xl mt-6 max-w-4xl leading-tight">

            Parlons de votre prochaine escapade.

          </h1>

          <p className="mt-8 max-w-2xl text-[#645D58] leading-8">

            Une idée précise ou simplement une envie ?
            Racontez-moi votre projet,
            vos centres d’intérêt
            ou votre curiosité du moment.

          </p>

        </div>

      </section>



      {/* CONTACT */}

      <section className="pb-24 px-6">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

          {/* TEXTE */}

          <div>

            <h2 className="font-serif text-4xl">

              Échangeons ensemble

            </h2>

            <div className="space-y-8 mt-10 text-[#645D58]">

              <div>

                <p className="uppercase text-xs tracking-[0.2em] text-[#B45A52]">

                  Localisation

                </p>

                <p className="mt-2">

                  Lille • Hauts-de-France

                </p>

              </div>



              <div>

                <p className="uppercase text-xs tracking-[0.2em] text-[#B45A52]">

                  Téléphone

                </p>

                <p className="mt-2">

                  06 XX XX XX XX

                </p>

              </div>



              <div>

                <p className="uppercase text-xs tracking-[0.2em] text-[#B45A52]">

                  Email

                </p>

                <p className="mt-2">

                  contact@lesescapadesdebertrand.fr

                </p>

              </div>


              <div className="pt-6">

                <p className="italic text-[#A5483C]">

                  "Vivre, comprendre, transmettre"

                </p>

              </div>

            </div>

          </div>



          {/* FORMULAIRE */}

          <div className="bg-white p-10 rounded-3xl shadow-lg">

            <div className="grid gap-5">

              <input
                placeholder="Nom"
                className="border p-4 rounded-xl"
              />

              <input
                placeholder="Email"
                className="border p-4 rounded-xl"
              />

              <input
                placeholder="Téléphone"
                className="border p-4 rounded-xl"
              />

              <select className="border p-4 rounded-xl">

                <option>Je souhaite...</option>

                <option>Un circuit signature</option>

                <option>Un voyage sur mesure</option>

                <option>Une information</option>

              </select>


              <textarea
                placeholder="Parlez-moi de votre projet..."
                className="border p-4 rounded-xl h-40"
              />


              <button className="bg-[#A5483C] text-white py-4 rounded-xl mt-2">

                Envoyer mon message

              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}