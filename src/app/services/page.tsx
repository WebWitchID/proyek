"use client"

import { useEffect } from 'react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Package, Headphones, Truck, FileCheck, Settings, Users } from 'lucide-react'

export default function ServicesPage() {
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

  const services = [
    {
      icon: Package,
      title: 'Solusi Pasokan B2B',
      description: 'Manajemen rantai pasokan komprehensif untuk klien industri',
      features: [
        'Pemesanan massal dengan harga kompetitif',
        'Paket produk yang disesuaikan',
        'Dukungan manajemen inventori',
        'Perjanjian pasokan reguler',
        'Syarat pembayaran yang fleksibel'
      ]
    },
    {
      icon: FileCheck,
      title: 'Solusi Proyek',
      description: 'Dukungan end-to-end untuk proyek industri dan konstruksi',
      features: [
        'Konsultasi dan perencanaan proyek',
        'Spesifikasi dan pemilihan peralatan',
        'Instalasi dan commissioning',
        'Dukungan manajemen proyek',
        'Jaminan kualitas dan pengujian'
      ]
    },
    {
      icon: Headphones,
      title: 'Dukungan Teknis',
      description: 'Panduan ahli dari tim teknis berpengalaman kami',
      features: [
        'Hotline teknis 24/7',
        'Pelatihan produk dan workshop',
        'Panduan pemeliharaan',
        'Bantuan troubleshooting',
        'Dokumentasi teknis'
      ]
    },
    {
      icon: Truck,
      title: 'Logistik & Pengiriman',
      description: 'Pengiriman efisien ke seluruh Indonesia',
      features: [
        'Pengiriman hari yang sama (area terpilih)',
        'Cakupan pengiriman nasional',
        'Pelacakan pesanan real-time',
        'Penjadwalan pengiriman fleksibel',
        'Pengemasan aman dan terjamin'
      ]
    },
    {
      icon: Settings,
      title: 'Layanan Pemeliharaan',
      description: 'Jaga peralatan Anda beroperasi dengan performa puncak',
      features: [
        'Program pemeliharaan preventif',
        'Inspeksi dan pengujian peralatan',
        'Layanan perbaikan dan kalibrasi',
        'Manajemen suku cadang',
        'Kontrak pemeliharaan tersedia'
      ]
    },
    {
      icon: Users,
      title: 'Layanan Konsultasi',
      description: 'Saran profesional yang disesuaikan dengan kebutuhan bisnis Anda',
      features: [
        'Konsultasi kepatuhan keselamatan',
        'Penilaian kebutuhan peralatan',
        'Strategi optimasi biaya',
        'Praktik terbaik industri',
        'Pengembangan solusi khusus'
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
            Layanan Kami
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Dukungan komprehensif di luar pasokan produk
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 p-8 border-0 hover:shadow-xl"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-secondary/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 fade-in-section opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
              Cara Kami Bekerja
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Proses yang sederhana dan transparan dari pertanyaan hingga pengiriman
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Pertanyaan', description: 'Hubungi kami dengan kebutuhan Anda' },
              { step: '02', title: 'Konsultasi', description: 'Ahli kami memberikan rekomendasi' },
              { step: '03', title: 'Penawaran', description: 'Terima harga yang kompetitif' },
              { step: '04', title: 'Pengiriman', description: 'Pengiriman cepat dan aman' }
            ].map((item, index) => (
              <div
                key={index}
                className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 text-center"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
            Mari Diskusikan Proyek Anda
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Tim kami siap membantu Anda menemukan solusi yang sempurna
          </p>
          <Button asChild size="lg" className="h-12 px-8 rounded-full font-medium">
            <Link href="/contact">Hubungi Tim Kami</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}