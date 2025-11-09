"use client"

import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Shield, Wrench, Package, Phone, Award, Users, Clock, CheckCircle } from 'lucide-react'

export default function Home() {
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
      title: 'Peralatan Keselamatan',
      description: 'Helm, sarung tangan, kacamata, dan alat pelindung premium',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b0595d4d-3d1f-4828-8600-ebf84eb97841/generated_images/minimalist-flat-lay-of-premium-safety-eq-ce544ee9-20251109110839.jpg',
      icon: Shield,
      link: '/products#safety'
    },
    {
      title: 'Perkakas Listrik & Manual',
      description: 'Perkakas industri untuk setiap aplikasi',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b0595d4d-3d1f-4828-8600-ebf84eb97841/generated_images/industrial-power-tools-and-equipment-dis-c169c065-20251109110840.jpg',
      icon: Wrench,
      link: '/products#tools'
    },
    {
      title: 'Proteksi Kebakaran',
      description: 'Sistem keselamatan dan pemadam kebakaran lengkap',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b0595d4d-3d1f-4828-8600-ebf84eb97841/generated_images/close-up-of-premium-fire-extinguisher-an-70e59324-20251109110950.jpg',
      icon: Shield,
      link: '/products#fire'
    },
    {
      title: 'Listrik & Otomasi',
      description: 'Komponen otomasi dan kontrol canggih',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b0595d4d-3d1f-4828-8600-ebf84eb97841/generated_images/professional-electrical-automation-compo-0eb800c4-20251109110952.jpg',
      icon: Package,
      link: '/products#electrical'
    }
  ]

  const brands = [
    '3M', 'Bosch', 'Makita', 'DeWalt', 'Honeywell', 'MSA', 'Ansell', 'Brady',
    'Schneider Electric', 'ABB', 'Siemens', 'Omron'
  ]

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Kualitas Premium',
      description: 'Hanya produk bersertifikat dari produsen terkemuka dunia'
    },
    {
      icon: Users,
      title: 'Dukungan Ahli',
      description: 'Konsultasi teknis dan layanan purna jual dari profesional berpengalaman'
    },
    {
      icon: Clock,
      title: 'Pengiriman Cepat',
      description: 'Logistik efisien untuk pengiriman tepat waktu di seluruh Indonesia'
    },
    {
      icon: CheckCircle,
      title: 'Rekam Jejak Terbukti',
      description: 'Dipercaya oleh perusahaan industri dan konstruksi terkemuka'
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/b0595d4d-3d1f-4828-8600-ebf84eb97841/generated_images/professional-industrial-worker-wearing-y-230891b2-20251109110839.jpg"
            alt="Keselamatan Industri"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-white mb-6 tracking-tight">
            Solusi Industri Terpercaya.<br />
            <span className="text-white/90">Dirancang untuk Keunggulan.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto font-light">
            Mitra terpercaya Anda untuk peralatan industri dan keselamatan premium di seluruh Indonesia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-black hover:bg-white/90 text-base h-12 px-8 rounded-full font-medium"
            >
              <Link href="/products">Jelajahi Produk</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-black text-base h-12 px-8 rounded-full font-medium"
            >
              <Link href="/contact">Hubungi Kami</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-section opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
              Kategori Produk
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Solusi komprehensif untuk semua kebutuhan industri Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {productCategories.map((category, index) => (
              <Link 
                key={index} 
                href={category.link}
                className="group fade-in-section opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 h-full">
                  <div className="relative h-64 md:h-80 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <category.icon className="w-8 h-8 text-white mb-3" />
                      <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                        {category.title}
                      </h3>
                      <p className="text-white/80 text-sm md:text-base">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 md:py-32 bg-secondary/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-section opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
              Merek Terpercaya
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Kami bermitra dengan produsen terkemuka di dunia
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 flex items-center justify-center p-6 md:p-8 bg-card rounded-2xl hover:shadow-lg transition-shadow"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="text-lg md:text-xl font-semibold text-foreground/70">
                  {brand}
                </span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/brands">Lihat Semua Mitra</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in-section opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
              Mengapa Memilih Gerindo Jaya
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Keunggulan dalam layanan, kualitas, dan keandalan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
            Siap untuk Memulai?
          </h2>
          <p className="text-lg sm:text-xl mb-10 opacity-90">
            Hubungi tim kami hari ini untuk konsultasi ahli dan harga kompetitif
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              variant="secondary"
              className="h-12 px-8 rounded-full font-medium"
            >
              <Link href="/contact">Hubungi</Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary h-12 px-8 rounded-full font-medium"
            >
              <Link href="tel:+62123456789">
                <Phone className="mr-2 h-5 w-5" />
                Telepon Sekarang
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}