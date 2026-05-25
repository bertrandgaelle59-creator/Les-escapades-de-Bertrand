export default function Navbar() {
  return (
    <header className="sticky top-0 left-0 z-50 w-full">

      <div className="flex items-center justify-between px-8 py-6 backdrop-blur-md bg-black/20">

        <div className="text-white">

          <h2 className="text-2xl tracking-[0.15em] uppercase">

            Les Escapades

          </h2>

          <p className="text-xs tracking-[0.3em] text-white/70">

            de Bertrand

          </p>

        </div>

        <nav className="hidden md:flex gap-8 text-white uppercase text-sm">

          <a href="/">
            Accueil
          </a>

          <a href="/circuits-signature">
            Circuits Signature
          </a>

          <a href="/voyage-sur-mesure">
            Voyage sur mesure
          </a>

          <a href="/blog">
            Blog des Pépites
          </a>

          <a href="/a-propos">
            À propos
          </a>

          <a href="/contact">
            Contact
          </a>

        </nav>

      </div>

    </header>
  );
}