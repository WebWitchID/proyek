import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">PT Gerindo Jaya</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mitra terpercaya untuk solusi peralatan industri dan keselamatan di Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Produk
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Layanan
                </Link>
              </li>
              <li>
                <Link
                  href="/brands"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Merek
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kategori Produk</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products#safety"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Peralatan Keselamatan
                </Link>
              </li>
              <li>
                <Link
                  href="/products#tools"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Perkakas Listrik & Manual
                </Link>
              </li>
              <li>
                <Link
                  href="/products#fasteners"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pengencang & Bearing
                </Link>
              </li>
              <li>
                <Link
                  href="/products#fire"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Proteksi Kebakaran
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hubungi Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+62123456789"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  +62 123 456 789
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@gerindojaya.co.id"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  info@gerindojaya.co.id
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Jakarta, Indonesia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} PT Gerindo Jaya. Hak cipta dilindungi.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Syarat Layanan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}