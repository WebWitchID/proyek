"use client"

import { useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Building2 } from 'lucide-react'

export default function BrandsPage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0')
          entry.target.classList.remove('opacity-0', 'translate-y-8')
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.fade-in-section')
    elements.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const brandCategories = [
    {
      category: 'Peralatan Keselamatan',
      brands: [
        { name: '3M', description: 'Alat pelindung diri dan proteksi respirasi' },
        { name: 'Honeywell', description: 'Solusi keselamatan dan peralatan industri' },
        { name: 'MSA Safety', description: 'Peralatan proteksi kepala, mata, wajah, dan jatuh' },
        { name: 'Ansell', description: 'Solusi proteksi tangan dan tubuh' }
      ]
    },
    {
      category: 'Perkakas Listrik',
      brands: [
        { name: 'Bosch', description: 'Perkakas listrik dan aksesori profesional' },
        { name: 'Makita', description: 'Perkakas listrik dan nirkabel' },
        { name: 'DeWalt', description: 'Perkakas listrik tingkat industri' },
        { name: 'Hilti', description: 'Perkakas konstruksi profesional' }
      ]
    },
    {
      category: 'Listrik & Otomasi',
      brands: [
        { name: 'Schneider Electric', description: 'Solusi manajemen energi dan otomasi' },
        { name: 'ABB', description: 'Otomasi industri dan teknologi daya' },
        { name: 'Siemens', description: 'Sistem otomasi dan kontrol' },
        { name: 'Omron', description: 'Komponen otomasi industri' }
      ]
    },
    {
      category: 'Komponen Industri',
      brands: [
        { name: 'SKF', description: 'Bearing dan sistem pelumasan' },
        { name: 'FAG', description: 'Rolling bearing dan unit terpasang' },
        { name: 'NSK', description: 'Teknologi gerak dan kontrol' },
        { name: 'Timken', description: 'Bearing dan produk transmisi daya' }
      ]
    },
    {
      category: 'Proteksi Kebakaran',
      brands: [
        { name: 'Kidde', description: 'Alat pemadam kebakaran dan sistem deteksi' },
        { name: 'Tyco', description: 'Solusi proteksi kebakaran dan keamanan' },
        { name: 'Amerex', description: 'Sistem alat pemadam kebakaran' },
        { name: 'Minimax', description: 'Sistem pemadam kebakaran' }
      ]
    },
    {
      category: 'Pengencang & Hardware',
      brands: [
        { name: 'Hilti', description: 'Sistem pengencang dan penahan' },
        { name: 'Fischer', description: 'Sistem pengencang dan angkur' },
        { name: 'Stanley', description: 'Perkakas manual dan solusi pengencang' },
        { name: 'Brady', description: 'Solusi identifikasi dan keselamatan' }
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mt-16 md:mt-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-background to-secondary/20" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
            Mitra Merek Kami
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Berkolaborasi dengan produsen kelas dunia untuk membawakan solusi industri terbaik
          </p>
        </div>
      </section>

      {/* Brands by Category */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {brandCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold mb-2 tracking-tight">
                  {category.category}
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.brands.map((brand, brandIndex) => (
                  <Card
                    key={brandIndex}
                    className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 p-8 border-0 hover:shadow-xl transition-shadow"
                    style={{ transitionDelay: `${brandIndex * 100}ms` }}
                  >
                    <div className="flex flex-col h-full">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-3">{brand.name}</h3>
                      <p className="text-muted-foreground text-sm">{brand.description}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-20 md:py-32 bg-secondary/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
              Menjadi Mitra
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Apakah Anda produsen yang ingin memperluas jangkauan di Indonesia? 
              Kami selalu terbuka untuk kemitraan dengan merek berkualitas.
            </p>
            <a
              href="mailto:partnership@gerindojaya.co.id"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors"
            >
              Hubungi Tim Kemitraan
            </a>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
              Komitmen Kami terhadap Kualitas
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground">
              <p className="mb-4">
                Di PT Gerindo Jaya, kami bermitra secara eksklusif dengan produsen yang memiliki 
                komitmen yang sama terhadap keunggulan, keselamatan, dan inovasi. Setiap merek yang 
                kami wakili telah dipilih dengan cermat berdasarkan rekam jejak terbukti, kualitas 
                produk, dan keselarasan dengan standar internasional.
              </p>
              <p>
                Kemitraan kami memungkinkan kami untuk menawarkan produk asli yang didukung oleh 
                garansi produsen, dukungan teknis, dan layanan purna jual yang komprehensif. Ketika 
                Anda memilih Gerindo Jaya, Anda memilih kualitas asli dari merek yang dipercaya 
                oleh industri di seluruh dunia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}