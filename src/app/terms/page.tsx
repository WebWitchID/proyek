import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-8 tracking-tight">
            Syarat Layanan
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-lg mb-8">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Persetujuan terhadap Syarat</h2>
              <p className="text-muted-foreground mb-4">
                Dengan mengakses atau menggunakan layanan PT Gerindo Jaya, Anda setuju untuk terikat pada 
                Syarat Layanan ini. Jika Anda tidak setuju dengan syarat-syarat ini, mohon untuk tidak 
                menggunakan layanan kami.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Produk dan Layanan</h2>
              <p className="text-muted-foreground mb-4">
                PT Gerindo Jaya menyediakan peralatan industri dan keselamatan untuk bisnis. Semua 
                deskripsi produk, spesifikasi, dan harga dapat berubah tanpa pemberitahuan. Kami 
                berhak untuk membatasi jumlah dan menghentikan produk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Pesanan dan Pembayaran</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Semua pesanan tunduk pada penerimaan dan ketersediaan</li>
                <li>Harga dikutip dalam Rupiah Indonesia kecuali dinyatakan lain</li>
                <li>Syarat pembayaran ditentukan dalam penawaran individual</li>
                <li>Kami berhak menolak atau membatalkan pesanan</li>
                <li>Pajak dan biaya pengiriman tambahan kecuali dinyatakan lain</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Pengiriman dan Risiko</h2>
              <p className="text-muted-foreground mb-4">
                Waktu pengiriman hanya perkiraan dan tidak dijamin. Risiko kerugian berpindah ke 
                pembeli saat pengiriman. Kami tidak bertanggung jawab atas keterlambatan yang 
                disebabkan oleh keadaan di luar kendali kami yang wajar.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Garansi</h2>
              <p className="text-muted-foreground mb-4">
                Produk dilindungi oleh garansi produsen jika berlaku. Kami tidak memberikan garansi 
                tambahan di luar yang diberikan oleh produsen. Setiap klaim garansi harus diarahkan 
                kepada kami untuk diproses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Pengembalian dan Pengembalian Dana</h2>
              <p className="text-muted-foreground mb-4">
                Pengembalian diterima dalam waktu 30 hari sejak pengiriman untuk produk yang belum 
                dibuka dalam kemasan asli. Barang pesanan khusus atau spesial tidak dapat dikembalikan. 
                Biaya restocking mungkin berlaku. Pengembalian dana akan diproses dalam waktu 14 hari 
                kerja sejak pengembalian disetujui.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Batasan Tanggung Jawab</h2>
              <p className="text-muted-foreground mb-4">
                Sejauh diizinkan oleh hukum, PT Gerindo Jaya tidak bertanggung jawab atas kerusakan 
                tidak langsung, insidental, khusus, konsekuensial, atau hukuman yang timbul dari 
                penggunaan produk atau layanan kami.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Kekayaan Intelektual</h2>
              <p className="text-muted-foreground mb-4">
                Semua konten di situs web ini, termasuk teks, grafik, logo, dan gambar, adalah 
                milik PT Gerindo Jaya atau pemasok kontennya dan dilindungi oleh undang-undang 
                hak cipta Indonesia dan internasional.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Hukum yang Berlaku</h2>
              <p className="text-muted-foreground mb-4">
                Syarat Layanan ini diatur oleh hukum Republik Indonesia. Setiap sengketa akan 
                tunduk pada yurisdiksi eksklusif pengadilan Jakarta, Indonesia.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Perubahan terhadap Syarat</h2>
              <p className="text-muted-foreground mb-4">
                Kami berhak untuk mengubah syarat-syarat ini kapan saja. Perubahan akan berlaku 
                efektif segera setelah diposting. Penggunaan layanan kami yang berkelanjutan 
                merupakan penerimaan terhadap syarat yang dimodifikasi.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Informasi Kontak</h2>
              <p className="text-muted-foreground mb-4">
                Untuk pertanyaan tentang Syarat Layanan ini, silakan hubungi kami di:
              </p>
              <p className="text-muted-foreground">
                PT Gerindo Jaya<br />
                Email: legal@gerindojaya.co.id<br />
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