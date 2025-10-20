export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-purple-900/60 backdrop-blur-md sticky top-0 z-10">
      <div className="text-2xl font-bold">K-Wave Club</div>
      <nav className="space-x-6 hidden md:block">
        <a href="#features" className="hover:text-pink-300">Comunidad</a>
        <a href="#planes" className="hover:text-pink-300">Planes</a>
        <a href="#contacto" className="hover:text-pink-300">Contacto</a>
      </nav>
      <a
        href="#planes"
        className="px-4 py-2 bg-pink-500 rounded-full font-semibold hover:bg-pink-600"
      >
        Únete
      </a>
    </header>
  )
}
