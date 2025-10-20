export default function Footer() {
  return (
    <footer id="contacto" className="bg-purple-900/60 text-center py-6 mt-12 text-sm">
      <p>© {new Date().getFullYear()} K-Wave Club. Todos los derechos reservados.</p>
      <div className="mt-2 space-x-4">
        <a href="#" className="hover:text-pink-300">Aviso Legal</a>
        <a href="#" className="hover:text-pink-300">Términos</a>
        <a href="#" className="hover:text-pink-300">Política de Privacidad</a>
      </div>
    </footer>
  )
}
