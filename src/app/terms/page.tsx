import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText, Shield, Users, AlertTriangle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Beranda
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Syarat & Ketentuan <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">CV TAKASIMA</span>
          </h1>
          <p className="text-lg text-gray-600">
            Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-emerald-600" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di CV TAKASIMA. Syarat dan Ketentuan ini mengatur penggunaan layanan yang 
                disediakan oleh CV TAKASIMA. Dengan mengakses atau menggunakan layanan kami, Anda setuju 
                untuk terikat oleh syarat dan ketentuan ini.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Jika Anda tidak setuju dengan bagian mana pun dari syarat dan ketentuan ini, Anda tidak 
                boleh menggunakan layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Definitions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-emerald-600" />
                Definisi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div>
                  <span className="font-semibold">"CV TAKASIMA"</span>
                  <span className="text-gray-700 ml-2">- Merujuk pada perusahaan CV TAKASIMA yang beralamat di Dusun Tapang Semadak, Kel. Tapang Semadak, Kec. Sekadau Hilir, Kab. Sekadau, Prov. Kalimantan Barat.</span>
                </div>
                <div>
                  <span className="font-semibold">"Layanan"</span>
                  <span className="text-gray-700 ml-2">- Merujuk pada semua produk, jasa, dan fasilitas yang disediakan oleh CV TAKASIMA.</span>
                </div>
                <div>
                  <span className="font-semibold">"Pengguna"</span>
                  <span className="text-gray-700 ml-2">- Merujuk pada individu atau entitas yang menggunakan layanan CV TAKASIMA.</span>
                </div>
                <div>
                  <span className="font-semibold">"Konten"</span>
                  <span className="text-gray-700 ml-2">- Merujuk pada semua informasi, teks, gambar, dan materi lain yang tersedia melalui layanan kami.</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Description */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
                Deskripsi Layanan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                CV TAKASIMA menyediakan berbagai layanan termasuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Konsultasi bisnis dan manajemen</li>
                <li>Layanan pengembangan usaha</li>
                <li>Manajemen proyek profesional</li>
                <li>Layanan dukungan pelanggan</li>
                <li>Layanan informasi dan konsultasi</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Kami berhak untuk mengubah, menangguhkan, atau menghentikan layanan kapan saja dengan atau tanpa pemberitahuan sebelumnya.
              </p>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-emerald-600" />
                Tanggung Jawab Pengguna
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Sebagai pengguna layanan CV TAKASIMA, Anda setuju untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Memberikan informasi yang akurat dan terkini</li>
                <li>Menggunakan layanan untuk tujuan yang sah dan sesuai hukum</li>
                <li>Tidak melakukan aktivitas yang merugikan pihak lain</li>
                <li>Mematuhi semua peraturan dan ketentuan yang berlaku</li>
                <li>Menjaga kerahasiaan informasi akun dan kredensial</li>
                <li>Tidak mencoba membahayakan keamanan sistem kami</li>
                <li>Melaporkan masalah atau pelanggaran dengan segera</li>
              </ul>
            </CardContent>
          </Card>

          {/* Prohibited Activities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-emerald-600" />
                Aktivitas yang Dilarang
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Anda dilarang untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Menyalahgunakan layanan untuk tujuan ilegal</li>
                <li>Mengirimkan materi yang melanggar hak cipta atau hak kekayaan intelektual</li>
                <li>Mengganggu atau merusak sistem dan infrastruktur kami</li>
                <li>Menggunakan layanan untuk penipuan atau aktivitas penipuan</li>
                <li>Mengirimkan virus, malware, atau kode berbahaya lainnya</li>
                <li>Mengumpulkan informasi pribadi pengguna lain tanpa izin</li>
                <li>Meniru identitas orang lain atau entitas</li>
                <li>Melakukan spam atau pengiriman pesan yang tidak diinginkan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-emerald-600" />
                Kekayaan Intelektual
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Semua hak kekayaan intelektual terkait layanan CV TAKASIMA, termasuk namun tidak terbatas pada:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Nama "CV TAKASIMA" dan logo perusahaan</li>
                <li>Konten, desain, dan materi grafis</li>
                <li>Perangkat lunak dan teknologi yang digunakan</li>
                <li>Dokumentasi dan materi promosi</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                adalah milik CV TAKASIMA dan dilindungi oleh hukum hak cipta dan kekayaan intelektual yang berlaku.
              </p>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-emerald-600" />
                Pembatasan Tanggung Jawab
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Sejauh diizinkan oleh hukum, CV TAKASIMA tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Kerugian langsung, tidak langsung, insidental, atau konsekuensial</li>
                <li>Kehilangan data atau informasi</li>
                <li>Kerugian bisnis atau peluang</li>
                <li>Kerusakan sistem atau perangkat pengguna</li>
                <li>Gangguan layanan yang disebabkan oleh faktor di luar kendali kami</li>
              </ul>
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-emerald-600" />
                Privasi dan Data Pribadi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Privasi Anda sangat penting bagi kami. Penggunaan data pribadi Anda diatur oleh 
                Kebijakan Privasi CV TAKASIMA yang terpisah. Dengan menggunakan layanan kami, 
                Anda setuju dengan pengumpulan dan penggunaan data sesuai kebijakan privasi kami.
              </p>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-emerald-600" />
                Penghentian Layanan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                CV TAKASIMA berhak untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Menangguhkan atau menghentikan akses layanan Anda</li>
                <li>Menghapus akun Anda jika melanggar syarat dan ketentuan</li>
                <li>Memberhentikan layanan kapan saja dengan pemberitahuan</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Anda juga dapat menghentikan penggunaan layanan kapan saja dengan memberitahukan kami.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-emerald-600" />
                Perubahan Syarat dan Ketentuan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                CV TAKASIMA berhak untuk mengubah syarat dan ketentuan ini kapan saja. Perubahan akan 
                diberitahukan melalui website atau email Anda. Penggunaan terus layanan kami setelah 
                perubahan menunjukkan persetujuan Anda terhadap syarat dan ketentuan yang diperbarui.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-emerald-600" />
                Hukum yang Berlaku
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum yang berlaku 
                di Republik Indonesia. Setiap sengketa yang timbul dari atau berhubungan dengan 
                syarat dan ketentuan ini akan diselesaikan melalui perundingan baik-baik atau melalui 
                pengadilan yang berwenang di Indonesia.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-gradient-to-r from-emerald-50 to-amber-50 border-emerald-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-emerald-600" />
                Hubungi Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> legal@takasima.com</p>
                <p><strong>Telepon:</strong> 082233059428</p>
                <p><strong>Alamat:</strong> Dusun Tapang Semadak, Kel. Tapang Semadak, Kec. Sekadau Hilir, Kab. Sekadau, Prov. Kalimantan Barat, 79586</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}