import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-8 tracking-tight">
            Kebijakan Privasi
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg mb-8">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Pendahuluan</h2>
              <p className="text-muted-foreground mb-4">
                PT Gerindo Jaya ("kami," "milik kami," atau "kita") berkomitmen untuk melindungi privasi Anda. 
                Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan 
                melindungi informasi Anda ketika Anda mengunjungi situs web kami atau menggunakan layanan kami.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Informasi yang Kami Kumpulkan</h2>
              <p className="text-muted-foreground mb-4">
                Kami mengumpulkan informasi yang Anda berikan langsung kepada kami, termasuk:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Nama dan informasi kontak (email, nomor telepon)</li>
                <li>Nama perusahaan dan detail bisnis</li>
                <li>Pertanyaan produk dan informasi pembelian</li>
                <li>Preferensi komunikasi</li>
                <li>Informasi lain yang Anda pilih untuk berikan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Cara Kami Menggunakan Informasi Anda</h2>
              <p className="text-muted-foreground mb-4">
                Kami menggunakan informasi yang kami kumpulkan untuk:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Memproses pesanan Anda dan menyediakan layanan pelanggan</li>
                <li>Menanggapi pertanyaan Anda dan mengirimkan informasi terkait</li>
                <li>Mengirimkan pemberitahuan teknis dan pesan dukungan</li>
                <li>Berkomunikasi dengan Anda tentang produk, layanan, dan acara</li>
                <li>Meningkatkan situs web dan layanan kami</li>
                <li>Mematuhi kewajiban hukum</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Pembagian Informasi</h2>
              <p className="text-muted-foreground mb-4">
                Kami tidak menjual atau menyewakan informasi pribadi Anda kepada pihak ketiga. Kami hanya 
                dapat membagikan informasi Anda dalam keadaan berikut:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Dengan penyedia layanan yang membantu operasi kami</li>
                <li>Ketika diwajibkan oleh hukum atau untuk melindungi hak kami</li>
                <li>Dengan persetujuan Anda atau atas arahan Anda</li>
                <li>Sehubungan dengan transaksi bisnis (merger, penjualan, dll.)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Keamanan Data</h2>
              <p className="text-muted-foreground mb-4">
                Kami menerapkan langkah-langkah teknis dan organisasi yang sesuai untuk melindungi 
                informasi pribadi Anda. Namun, tidak ada metode transmisi melalui Internet yang 
                100% aman, dan kami tidak dapat menjamin keamanan absolut.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Hak Anda</h2>
              <p className="text-muted-foreground mb-4">
                Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Mengakses dan menerima salinan informasi pribadi Anda</li>
                <li>Memperbaiki informasi yang tidak akurat atau tidak lengkap</li>
                <li>Meminta penghapusan informasi Anda</li>
                <li>Menolak atau membatasi pemrosesan informasi Anda</li>
                <li>Menarik persetujuan kapan saja</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Hubungi Kami</h2>
              <p className="text-muted-foreground mb-4">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau praktik privasi kami, 
                silakan hubungi kami di:
              </p>
              <p className="text-muted-foreground">
                PT Gerindo Jaya<br />
                Email: privacy@gerindojaya.co.id<br />
                Telepon: +62 123 456 789
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}