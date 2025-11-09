"use client"

import { useEffect } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Target, Eye, Award, Users, TrendingUp, Globe } from 'lucide-react'

export default function AboutPage() {
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

  const values = [
    {
      icon: Target,
      title: 'Kualitas Utama',
      description: 'Kami hanya menyediakan produk bersertifikat premium dari produsen terkemuka dunia'
    },
    {
      icon: Users,
      title: 'Fokus Pelanggan',
      description: 'Kesuksesan Anda adalah prioritas kami dengan dukungan dan konsultasi yang berdedikasi'
    },
    {
      icon: Award,
      title: 'Integritas',
      description: 'Praktik bisnis yang transparan dan kemitraan yang etis'
    },
    {
      icon: TrendingUp,
      title: 'Inovasi',
      description: 'Selalu terdepan dengan teknologi dan solusi industri terkini'
    }
  ]

  const stats = [
    { value: '15+', label: 'Tahun Pengalaman' },
    { value: '500+', label: 'Klien Puas' },
    { value: '10.000+', label: 'Produk' },
    { value: '24/7', label: 'Dukungan' }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden mt-16 md:mt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b0595d4d-3d1f-4828-8600-ebf84eb97841/generated_images/modern-industrial-warehouse-interior-wit-d072aa07-20251109110950.jpg"
            alt="Tentang Gerindo Jaya"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
            Tentang PT Gerindo Jaya
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto font-light">
            Mitra terpercaya Anda dalam keunggulan industri sejak puluhan tahun
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-8 tracking-tight">
              Siapa Kami
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                PT Gerindo Jaya adalah pemasok terkemuka peralatan industri dan keselamatan di Indonesia, 
                berdedikasi untuk menyediakan solusi komprehensif bagi pabrik, perusahaan konstruksi, dan 
                tim pemeliharaan di seluruh nusantara.
              </p>
              <p>
                Dengan pengalaman lebih dari 15 tahun di industri ini, kami telah membangun reputasi untuk 
                keandalan, kualitas, dan layanan pelanggan yang luar biasa. Jangkauan produk kami yang luas 
                mencakup peralatan keselamatan, perkakas listrik, pengencang, bearing, pelumas, sistem 
                proteksi kebakaran, dan komponen otomasi listrik.
              </p>
              <p>
                Kami bermitra dengan merek-merek terkenal dunia untuk memastikan klien kami menerima produk 
                berkualitas tinggi yang didukung oleh keahlian teknis dan dukungan purna jual yang komprehensif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 bg-secondary/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-700">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
                Misi Kami
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Memberdayakan industri Indonesia dengan peralatan berkualitas premium dan solusi ahli, 
                memastikan keselamatan kerja, efisiensi operasional, dan kesuksesan bisnis melalui 
                kemitraan yang andal dan produk inovatif.
              </p>
            </div>

            <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: '100ms' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
                Visi Kami
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Menjadi pemasok peralatan industri paling terpercaya dan disukai di Indonesia, 
                diakui atas komitmen kami terhadap kualitas, inovasi, dan keunggulan pelanggan 
                di semua sektor industri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 fade-in-section opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
              Nilai-Nilai Inti Kami
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Prinsip-prinsip yang memandu segala yang kami lakukan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}