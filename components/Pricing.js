export default function Pricing() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Plan Básico */}
      <div className="bg-white text-purple-800 rounded-2xl shadow-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Plan Básico</h3>
        <p className="mb-6">Gratis para siempre</p>
        <ul className="mb-6 space-y-2">
          <li>✔️ Perfil personalizado</li>
          <li>✔️ Votaciones básicas</li>
          <li>✔️ Publicar fotos</li>
        </ul>
        <button className="px-6 py-3 bg-purple-800 text-white rounded-full hover:bg-purple-900">
          Empezar Gratis
        </button>
      </div>

      {/* Plan Premium */}
      <div className="bg-gradient-to-b from-pink-500 to-purple-700 text-white rounded-2xl shadow-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Plan Premium</h3>
        <p className="mb-6">9,99€/mes</p>
        <ul className="mb-6 space-y-2">
          <li>⭐ Acceso a eventos exclusivos</li>
          <li>⭐ Chats VIP</li>
          <li>⭐ Insignias y recompensas</li>
          <li>⭐ Votaciones avanzadas</li>
        </ul>
        <button className="px-6 py-3 bg-white text-purple-800 rounded-full hover:scale-105 transition">
          Hazte Premium
        </button>
      </div>
    </div>
  )
}
