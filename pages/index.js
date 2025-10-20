import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Pricing from '../components/Pricing'

export default function Home() {
  return (
    <>
      <Head>
        <title>K-Wave Club</title>
        <meta name="description" content="Tu espacio K-POP: eventos, votaciones, comunidad y más." />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero */}
        <main className="flex flex-col items-center justify-center flex-1 text-center px-6 py-16">
          <h1 className="text-5xl font-extrabold mb-4">Bienvenido a K-Wave Club</h1>
          <p className="text-lg mb-6 max-w-2xl">
            La primera comunidad web hecha por y para fans del K-POP. Únete a
            nuestras votaciones, comparte experiencias y vive el fandom como
            nunca antes.
          </p>
          <a
            href="#planes"
            className="px-6 py-3 bg-white text-purple-800 font-bold rounded-full shadow-lg hover:scale-105 transition"
          >
            Únete Gratis
          </a>
        </main>

        {/* Features */}
        <section className="py-12 px-6 bg-purple-900/20">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 text-center md:text-left items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">¿Qué encontrarás?</h2>
              <ul className="space-y-3 text-lg">
                <li>🌟 Perfiles personalizados de fans</li>
                <li>💬 Chats y grupos de conversación</li>
                <li>🗳️ Votaciones semanales exclusivas</li>
                <li>📸 Comparte tus fotos y experiencias</li>
                <li>🎉 Eventos y quedadas en tu ciudad</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=60"
                alt="KPOP fans"
                className="rounded-2xl shadow-lg max-w-full"
              />
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="planes" className="py-20 px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Planes de Membresía
          </h2>
          <Pricing />
        </section>

        <Footer />
      </div>
    </>
  )
}
