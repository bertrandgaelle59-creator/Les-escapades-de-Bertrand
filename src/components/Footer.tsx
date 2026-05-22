export default function Footer() {
  return (
    <footer className="bg-[#222] text-white mt-32">
      <div className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-3 gap-16">

          <div>
            <h3 className="text-3xl mb-3 font-serif">
              Les Escapades de Bertrand
            </h3>

            <p className="text-sm tracking-[0.25em] uppercase text-[#C45B55] mb-8">
              Nord • Pas-de-Calais • Belgique
            </p>

            <p className="text-white/70 leading-8">
              Des expériences patrimoniales,
              culturelles et humaines entre Nord,
              Pas-de-Calais et Belgique.
            </p>

            <p className="italic mt-8 text-white/90">
              "Vivre, comprendre, transmettre"
            </p>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.25em] mb-6 text-white/60">
              Navigation
            </h4>

            <ul className="space-y-4 text-white/80">
              <li>Accueil</li>
              <li>Circuits Signature</li>
              <li>Voyage sur mesure</li>
              <li>Blog des Pépites</li>
              <li>À propos</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase tracking-[0.25em] mb-6 text-white/60">
              Contact
            </h4>

            <div className="space-y-4 text-white/80">
              <p>📍 Lille — Hauts-de-France</p>

              <p>📞 votre téléphone</p>

              <p>✉ contact@lesescapadesdebertrand.fr</p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex justify-between text-sm text-white/40">

          <p>
            © Les Escapades de Bertrand
          </p>

          <p>
            Un trait d’union entre le Nord et la Belgique
          </p>

        </div>
      </div>
    </footer>
  );
}