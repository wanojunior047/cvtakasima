import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Shield, Eye, Database, UserCheck } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Kebijakan Privasi <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">CV TAKASIMA</span>
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
                <Eye className="h-5 w-5 text-emerald-600" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Selamat datang di CV TAKASIMA. Kami sangat menghargai privasi Anda dan berkomitmen untuk melindungi 
                data pribadi yang Anda percayakan kepada kami. Kebijakan Privasi ini menjelaskan bagaimana kami 
                mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda saat menggunakan 
                layanan kami.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dengan menggunakan layanan CV TAKASIMA, Anda setuju dengan praktik-praktik yang dijelaskan dalam 
                kebijakan privasi ini.
              </p>
            </CardContent>
          </Card>

          {/* Information Collection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-emerald-600" />
                Pengumpulan Informasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">Informasi yang Kami Kumpulkan</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Informasi identitas pribadi (nama, alamat email, nomor telepon)</li>
                  <li>Informasi kontak (alamat, kode pos)</li>
                  <li>Informasi demografis (usia, jenis kelamin, lokasi)</li>
                  <li>Informasi penggunaan layanan (riwayat transaksi, preferensi)</li>
                  <li>Informasi teknis (alamat IP, browser, perangkat)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Cara Kami Mengumpulkan Informasi</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Formulir pendaftaran dan kontak yang Anda isi</li>
                  <li>Komunikasi langsung dengan tim kami</li>
                  <li>Penggunaan website dan layanan kami</li>
                  <li>Cookie dan teknologi pelacakan lainnya</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Information Usage */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-emerald-600" />
                Penggunaan Informasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami menggunakan informasi pribadi Anda untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Menyediakan dan meningkatkan layanan kami</li>
                <li>Memproses transaksi dan mengelola akun Anda</li>
                <li>Memberikan dukungan pelanggan yang responsif</li>
                <li>Mengirimkan informasi penting tentang layanan</li>
                <li>Menganalisis penggunaan untuk pengembangan produk</li>
                <li>Memastikan keamanan dan mencegah penipuan</li>
                <li>Mematuhi kewajiban hukum dan peraturan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-emerald-600" />
                Perlindungan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                CV TAKASIMA berkomitmen untuk melindungi data pribadi Anda dengan:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Enkripsi data selama transmisi dan penyimpanan</li>
                <li>Akses terbatas untuk informasi pribadi</li>
                <li>Keamanan fisik dan digital di fasilitas kami</li>
                <li>Audit keamanan rutin dan pembaruan sistem</li>
                <li>Pelatihan staf tentang privasi data</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-emerald-600" />
                Pembagian Informasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga 
                untuk tujuan pemasaran tanpa persetujuan Anda. Kami hanya akan membagikan informasi Anda:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Dengan persetujuan eksplisit dari Anda</li>
                <li>Untuk memenuhi layanan yang Anda minta</li>
                <li>Untuk mematuhi kewajiban hukum</li>
                <li>Dengan mitra tepercaya yang membantu menyediakan layanan</li>
                <li>Dalam kasus penjualan atau merger perusahaan</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-emerald-600" />
                Hak Anda sebagai Pengguna
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Mengakses dan melihat data pribadi yang kami simpan</li>
                <li>Memperbaiki data yang tidak akurat</li>
                <li>Menghapus data pribadi Anda (dalam batas yang diizinkan)</li>
                <li>Menolak pemrosesan data tertentu</li>
                <li>Meminta salinan data pribadi Anda</li>
                <li>Menarik persetujuan kapan saja</li>
              </ul>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-emerald-600" />
                Kebijakan Cookie
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Kami menggunakan cookie dan teknologi serupa untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Mengingat preferensi Anda</li>
                <li>Menganalisis penggunaan website</li>
                <li>Mempersonalisasi pengalaman pengguna</li>
                <li>Menyediakan fitur keamanan</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Anda dapat mengontrol cookie melalui pengaturan browser Anda.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-emerald-600" />
                Perubahan Kebijakan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                CV TAKASIMA dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan 
                diberitahukan melalui website atau email Anda. Penggunaan terus layanan kami setelah 
                perubahan menunjukkan persetujuan Anda terhadap kebijakan yang diperbarui.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-gradient-to-r from-emerald-50 to-amber-50 border-emerald-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5 text-emerald-600" />
                Hubungi Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau perlakuan data pribadi Anda, 
                silakan hubungi kami:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> privacy@takasima.com</p>
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