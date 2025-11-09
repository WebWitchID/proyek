"use client"

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
      
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon',
      details: '+62 123 456 789',
      action: 'tel:+62123456789',
      actionText: 'Hubungi kami'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@gerindojaya.co.id',
      action: 'mailto:info@gerindojaya.co.id',
      actionText: 'Email kami'
    },
    {
      icon: MapPin,
      title: 'Lokasi',
      details: 'Jakarta, Indonesia',
      action: '#map',
      actionText: 'Lihat peta'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      details: 'Sen - Jum: 08:00 - 17:00',
      action: null,
      actionText: null
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden mt-16 md:mt-20">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/10 via-background to-secondary/20" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 tracking-tight">
            Hubungi Kami
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Kami siap membantu semua kebutuhan peralatan industri Anda
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="fade-in-section opacity-0 translate-y-8 transition-all duration-700 p-6 border-0 hover:shadow-lg transition-shadow"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{info.details}</p>
                {info.action && info.actionText && (
                  <a
                    href={info.action}
                    className="text-sm text-primary hover:underline font-medium"
                  >
                    {info.actionText} →
                  </a>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
                Kirim Pesan
              </h2>
              <p className="text-muted-foreground mb-8">
                Isi formulir di bawah ini dan tim kami akan menghubungi Anda dalam waktu 24 jam.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Alamat Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor Telepon *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+62 123 456 789"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Nama Perusahaan</Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Perusahaan Anda"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Pesan *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ceritakan tentang kebutuhan Anda..."
                    rows={6}
                    className="resize-none"
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200 text-sm">
                    Terima kasih! Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200 text-sm">
                    Maaf! Terjadi kesalahan. Silakan coba lagi.
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full h-12 rounded-full font-medium"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </Button>
              </form>
            </div>

            {/* Map */}
            <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-700" style={{ transitionDelay: '200ms' }}>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
                Kunjungi Kantor Kami
              </h2>
              <p className="text-muted-foreground mb-8">
                Kami berlokasi di Jakarta, Indonesia. Jadwalkan kunjungan untuk melihat showroom kami dan diskusikan kebutuhan Anda.
              </p>

              <Card className="overflow-hidden border-0 shadow-xl" id="map">
                <div className="relative h-96 bg-muted">
                  {/* Google Maps Embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65833328423!2d106.68942995!3d-6.229386849999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
              </Card>

              <div className="mt-8 p-6 bg-secondary/30 rounded-2xl">
                <h3 className="font-semibold mb-4">Alamat Kantor</h3>
                <p className="text-muted-foreground">
                  PT Gerindo Jaya<br />
                  Jakarta, Indonesia<br />
                  Kode Pos: 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 md:py-32 bg-secondary/30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="fade-in-section opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 tracking-tight">
              Cara Lain Menghubungi Kami
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Pilih metode yang paling sesuai untuk Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-8">
                <a href="https://wa.me/62123456789" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-8">
                <a href="tel:+62123456789">
                  Telepon Langsung
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-8">
                <a href="mailto:info@gerindojaya.co.id">
                  Email Kami
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}