'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, Menu, X, Shield, TrendingUp, BarChart3, ArrowRight, Phone, Mail, MapPin } from 'lucide-react'

// Types
interface NewsItem {
  id: string
  title: string
  source: string
  date: string
  image: string
  url: string
}

interface MapData {
  name: string
  value: number
  url?: string
}

const SRCHomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Sample news data
  const newsItems: NewsItem[] = [
    {
      id: '1',
      title: 'Pablo Gutiérrez lidera la contienda por la gubernatura de Campeche rumbo a 2027',
      source: 'El Congresista',
      date: '24/6/25 11:40 am',
      image: '/api/placeholder/400/300',
      url: '#'
    },
    {
      id: '2',
      title: '50 por ciento de la población desaprueba gobierno de Antonio Marún',
      source: 'El Informador del Rincón',
      date: '23/6/25 10:22 pm',
      image: '/api/placeholder/400/300',
      url: '#'
    },
    {
      id: '3',
      title: 'Elección Intermedia del Gobierno de Claudia Sheinbaum',
      source: 'Diario Noti7',
      date: '23/6/25 1:47 pm',
      image: '/api/placeholder/400/300',
      url: '#'
    },
    {
      id: '4',
      title: 'Ana Lilia Rivera se perfila como puntera rumbo a la gubernatura de Tlaxcala en 2027',
      source: 'El Congresista',
      date: '23/6/25 10:35 am',
      image: '/api/placeholder/400/300',
      url: '#'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const NavigationBar = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-white font-bold text-xl lg:text-2xl">SRC</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-blue-400 transition-colors">
              Inicio
            </Link>
            <Link href="/nosotros" className="text-white hover:text-blue-400 transition-colors">
              Nosotros
            </Link>
            <Link href="/blogs" className="text-white hover:text-blue-400 transition-colors">
              Blog
            </Link>
            <Link href="/enfoque" className="text-white hover:text-blue-400 transition-colors">
              Enfoque
            </Link>
            <Link href="/cursos" className="text-white hover:text-blue-400 transition-colors">
              Cursos
            </Link>
            <Link href="/encuestas" className="text-white hover:text-blue-400 transition-colors">
              Encuestas
            </Link>
            <Link href="/servicios" className="text-white hover:text-blue-400 transition-colors">
              Servicios
            </Link>
          </div>

          {/* Contact Button & Social Links */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="/contacto" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <span>Contacto</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            {/* Social Links */}
            <div className="flex space-x-2">
              <a href="https://www.linkedin.com/company/statisticalresearch/" target="_blank" 
                 className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded flex items-center justify-center transition-colors">
                <span className="text-white text-sm font-bold">in</span>
              </a>
              <a href="https://www.facebook.com/sresearchcorp" target="_blank"
                 className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded flex items-center justify-center transition-colors">
                <span className="text-white text-sm font-bold">f</span>
              </a>
              <a href="https://www.instagram.com/sresearchcorp/" target="_blank"
                 className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded flex items-center justify-center transition-colors">
                <span className="text-white text-sm font-bold">ig</span>
              </a>
              <a href="https://x.com/sresearchcorp" target="_blank"
                 className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded flex items-center justify-center transition-colors">
                <span className="text-white text-sm font-bold">X</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-sm border-t border-white/10">
            <div className="px-4 py-6 space-y-4">
              <Link href="/" className="block text-white hover:text-blue-400 transition-colors">
                Inicio
              </Link>
              <Link href="/nosotros" className="block text-white hover:text-blue-400 transition-colors">
                Nosotros
              </Link>
              <Link href="/blogs" className="block text-white hover:text-blue-400 transition-colors">
                Blog
              </Link>
              <Link href="/enfoque" className="block text-white hover:text-blue-400 transition-colors">
                Enfoque
              </Link>
              <Link href="/cursos" className="block text-white hover:text-blue-400 transition-colors">
                Cursos
              </Link>
              <Link href="/encuestas" className="block text-white hover:text-blue-400 transition-colors">
                Encuestas
              </Link>
              <Link href="/servicios" className="block text-white hover:text-blue-400 transition-colors">
                Servicios
              </Link>
              <Link 
                href="/contacto" 
                className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-center transition-colors"
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )

  const HeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Casa Encuestadora en México<br />
          <span className="text-blue-400">Encuestas Electorales y de Mercado</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Casa encuestadora con los resultados más certeros de México. Especialistas en investigación de mercados, 
          encuestas electorales y estudios de opinión pública. Metodología precisa y confiable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contacto" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg flex items-center justify-center space-x-2 transition-colors text-lg font-semibold"
          >
            <span>Solicitar Cotización</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            href="/encuestas" 
            className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg flex items-center justify-center space-x-2 transition-colors text-lg font-semibold"
          >
            <span>Ver Encuestas</span>
            <BarChart3 className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )

  const NewsSection = () => (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-12 text-center">
          SRC en los Medios
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {newsItems.map((item) => (
            <a 
              key={item.id}
              href={item.url}
              target="_blank"
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-700">
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors overflow-hidden" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical'
                }}>
                  {item.title}
                </h3>
                <div className="text-sm text-gray-600">
                  <p className="font-medium">Fuente: {item.source}</p>
                  <p>{item.date}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/medios" 
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
          >
            <span>Ver todas las noticias</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )

  const InfoSection = () => (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-2xl"></div>
              <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-xl mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Casa Encuestadora Confiable
            </h2>
            
            <div className="text-lg text-gray-700 space-y-4 mb-8">
              <p>
                Statistical Research Corporation (SRC) es una casa encuestadora especializada en investigación 
                de mercados y opinión pública en México. Nos distinguimos por ofrecer los resultados más 
                precisos y confiables del mercado.
              </p>
              <p>
                Realizamos encuestas electorales con margen de error menor al 3.8%, investigación de mercados 
                cuantitativa y cualitativa, estudios de opinión pública para medios y gobierno, y encuestas 
                telefónicas, digitales y presenciales con cobertura nacional.
              </p>
              <p>
                Trabajamos con partidos políticos, empresas líderes, medios de comunicación y organizaciones gubernamentales.
              </p>
            </div>
            
            <Link 
              href="/contacto" 
              className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <span>Conoce más</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )

  const MapSection = () => (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            Encuestas Electorales en México
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Casa encuestadora certificada con la mayor precisión en preferencias electorales y estudios 
            de opinión pública en los 32 estados de la República Mexicana.
          </p>
        </div>
        
        {/* Map Placeholder - In a real implementation, you'd integrate Highcharts or another mapping library */}
        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <p className="text-xl font-semibold text-blue-800">Mapa Interactivo de México</p>
              <p className="text-blue-600">32 Estados con Cobertura Electoral</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/encuestas" 
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
          >
            <span>Ver encuestas</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )

  const ServicesSection = () => (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              Por qué Somos la Casa Encuestadora Más Certera
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              Nuestras encuestas y estudios de mercado han demostrado la mayor precisión del sector. 
              Somos la casa encuestadora preferida por líderes que buscan datos confiables para 
              decisiones estratégicas fundamentadas.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Investigación de Mercados Profesional
                </h3>
                <p className="text-gray-700">
                  Estudios de mercado completos: investigación cuantitativa y cualitativa, encuestas de 
                  satisfacción del cliente, análisis del consumidor, mystery shopping, focus groups y 
                  pruebas de producto. Casa encuestadora con metodología certificada.
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Encuestas de Opinión Pública
                </h3>
                <p className="text-gray-700">
                  Especialistas en encuestas electorales, tracking político, exit polls y conteos rápidos. 
                  Medimos preferencias electorales, aprobación gubernamental y tendencias sociales con la 
                  metodología más confiable de México.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

  const CTASection = () => (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          ¿Busca una Casa Encuestadora Confiable en México?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Obtenga encuestas precisas y resultados confiables. Cotice su estudio de mercado, encuesta electoral 
          o investigación de opinión pública con la casa encuestadora más certera de México.
        </p>
        
        <Link 
          href="/contacto" 
          className="inline-flex items-center space-x-2 bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 rounded-lg transition-colors text-lg font-semibold"
        >
          <span>Solicitar Cotización</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )

  const Footer = () => (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="text-2xl font-bold text-white">SRC</div>
            </Link>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <Link href="/nosotros" className="text-gray-300 hover:text-white transition-colors">
                Nosotros
              </Link>
              <Link href="/enfoque" className="text-gray-300 hover:text-white transition-colors">
                Enfoque
              </Link>
              <Link href="/blogs" className="text-gray-300 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/encuestas" className="text-gray-300 hover:text-white transition-colors">
                Encuestas
              </Link>
              <Link href="/servicios" className="text-gray-300 hover:text-white transition-colors">
                Servicios
              </Link>
              <Link href="/cursos" className="text-gray-300 hover:text-white transition-colors">
                Cursos
              </Link>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-3">Dirección:</h4>
              <address className="text-gray-300 not-italic">
                Ave. Eugenio Garza Sada 3001, INT. 18B,<br />
                Col. Altavista, Monterrey, Nuevo León, C.P 64840.
              </address>
            </div>
          </div>
          
          {/* Right Column */}
          <div>
            <div className="flex space-x-4 mb-8">
              <a href="https://www.linkedin.com/company/StatisticalRC/" target="_blank" 
                 className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-white text-sm font-bold">in</span>
              </a>
              <a href="https://www.facebook.com/StatisticalRC" target="_blank"
                 className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-white text-sm font-bold">f</span>
              </a>
              <a href="https://www.instagram.com/StatisticalRC/" target="_blank"
                 className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-white text-sm font-bold">ig</span>
              </a>
              <a href="https://x.com/StatisticalRC" target="_blank"
                 className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-white text-sm font-bold">X</span>
              </a>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-3">Contacto:</h4>
              <div className="space-y-2 text-gray-300">
                <a href="https://wa.me/5218131548025" className="flex items-center space-x-2 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>Tel: 55 8789 4703 / WhatsApp: 81 3154 8025</span>
                </a>
                <a href="mailto:info@src.org.mx" className="flex items-center space-x-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>info@src.org.mx</span>
                </a>
                <a href="mailto:cmercado@src.org.mx" className="flex items-center space-x-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>cmercado@src.org.mx</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2023-{new Date().getFullYear()} Statistical Research Corporation. Todos los derechos reservados.
          </div>
          <Link href="/aviso-de-privacidad" className="text-gray-400 hover:text-white transition-colors">
            Aviso de Privacidad
          </Link>
        </div>
      </div>
    </footer>
  )

  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      <main>
        <HeroSection />
        <NewsSection />
        <InfoSection />
        <MapSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default SRCHomePage