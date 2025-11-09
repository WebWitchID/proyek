"use client"

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Card } from '@/components/ui/card'
import { Shield, Wrench, Package, Zap, Flame, Settings } from 'lucide-react'

export default function ProductsPage() {
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

  const productCategories = [
    {
      id: 'safety',
      icon: Shield,
      title: 'Peralatan Keselamatan',
      description: 'Alat pelindung diri lengkap untuk keselamatan di tempat kerja',
      products: [
        'Helm Keselamatan & Topi Keras',
        'Kacamata Keselamatan & Pelindung Wajah',
        'Sarung Tangan Kerja & Pelindung Tangan',
        'Masker Respirasi & Filter',
        'Sepatu & Boots Keselamatan',
        'Rompi Visibilitas Tinggi',
        'Peralatan Proteksi Jatuh',
        'Pelindung Telinga & Earplug'
      ],
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b0595d4d-3d1f-4828-8600-ebf84eb97841/generated_images/minimalist-flat-lay-of-premium-safety-eq-ce544ee9-20251109110839.jpg'
    },
    {
      id: 'tools',
      icon: Wrench,
      title: 'Perkakas Listrik & Manual',
      description: 'Perkakas profesional untuk aplikasi industri',
      products: [
        'Bor Listrik & Impact Driver',
        'Gerinda & Pemotong',
        'Gergaji Sirkular & Reciprocating',
        'Kunci & Set Soket',
        'Obeng & Tang',
        'Alat Ukur & Level',
        'Perkakas Pneumatik',
        'Solusi Penyimpanan Perkakas'
      ],
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b0595d4d-3d1f-4828-8600-ebf84eb97841/generated_images/industrial-power-tools-and-equipment-dis-c169c065-20251109110840.jpg'
    },
    {
      id: 'fasteners',
      icon: Package,
      title: 'Pengencang & Bearing',
      description: 'Solusi pengencang berkualitas tinggi dan sistem bearing',
      products: [
        'Baut, Mur & Ring',
        'Sekrup & Angkur',
        'Ball & Roller Bearing',
        'Linear Bearing',
        'Pelumas Industri',
        'Sealant Ulir',
        'Perekat & Compound',
        'Ring Penahan & Klip'
      ],
      image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=600&fit=crop'
    },
    {
      id: 'fire',
      icon: Flame,
      title: 'Sistem Proteksi Kebakaran',
      description: 'Peralatan keselamatan dan pemadam kebakaran komprehensif',
      products: [
        'Alat Pemadam Kebakaran (Semua Jenis)',
        'Sistem Alarm Kebakaran',
        'Detektor Asap',
        'Selang & Nozzle Kebakaran',
        'Sistem Sprinkler',
        'Lampu Darurat',
        'Selimut Kebakaran',
        'Rambu Keselamatan Kebakaran'
      ],
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b0595d4d-3d1f-4828-8600-ebf84eb97841/generated_images/close-up-of-premium-fire-extinguisher-an-70e59324-20251109110950.jpg'
    },
    {
      id: 'electrical',
      icon: Zap,
      title: 'Listrik & Otomasi',
      description: 'Komponen listrik dan otomasi canggih',
      products: [
        'PLC & Kontroler',
        'Sensor & Transduser',
        'Circuit Breaker & Sakelar',
        'Kabel & Pengkabelan Industri',
        'Motor Drive & VFD',
        'Relay & Kontaktor',
        'Power Supply',
        'Komponen Panel'
      ],
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b0595d4d-3d1f-4828-8600-ebf84eb97841/generated_images/professional-electrical-automation-compo-0eb800c4-20251109110952.jpg'
    },
    {
      id: 'maintenance',
      icon: Settings,
      title: 'Produk Pemeliharaan',
      description: 'Perlengkapan penting untuk pemeliharaan industri',
      products: [
        'Pembersih & Degreaser Industri',
        'Oli & Grease Pelumas',
        'Abrasif & Amplas',
        'Tape & Perekat',
        'Peralatan Las',
        'Komponen Hidrolik',
        'Fitting Pneumatik',
        'Perkakas Pemeliharaan'
      ],
      image: 'https://images.unsplash.com/photo-1581092160607-ee67e7d1e9f5?w=800&h=600&fit=crop'
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
            Produk Kami
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Jangkauan lengkap peralatan industri dan keselamatan untuk semua kebutuhan Anda
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-32">
          {productCategories.map((category, index) => (
            <div
              key={category.id}
              id={category.id}
              className="scroll-mt-24"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Image */}
                <div className={`fade-in-section opacity-0 translate-y-8 transition-all duration-700 ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}>
                  <Card className="overflow-hidden border-0 shadow-xl">
                    <div className="relative h-64 md:h-96">
                      <Image
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Card>
                </div>

                {/* Content */}
                <div className={`fade-in-section opacity-0 translate-y-8 transition-all duration-700 ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`} style={{ transitionDelay: '200ms' }}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                    <category.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-semibold mb-4 tracking-tight">
                    {category.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {category.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.products.map((product, idx) => (
                      <div
                        key={idx}
                        className="flex items-start space-x-3 p-3 rounded-lg hover:bg-accent transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm">{product}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-secondary/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
            Tidak Menemukan yang Anda Butuhkan?
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Hubungi tim kami untuk solusi khusus dan rekomendasi produk
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-colors"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}