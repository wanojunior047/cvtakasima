'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight,
  Building,
  Users,
  Award,
  Target,
  Shield,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-amber-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="/takasima-logo.png" 
                alt="CV TAKASIMA" 
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                CV TAKASIMA
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors">Beranda</Link>
              <Link href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">Tentang</Link>
              <Link href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">Layanan</Link>
              <Link href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">Kontak</Link>
              <Button className="bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700">
                Hubungi Kami
              </Button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="#home" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Beranda</Link>
              <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Tentang</Link>
              <Link href="#services" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Layanan</Link>
              <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-emerald-600">Kontak</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-emerald-100 text-emerald-800 border-emerald-200">
                Perusahaan Terpercaya di Kalimantan Barat
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                  CV TAKASIMA
                </span>
                <br />
                Solusi Terbaik untuk Bisnis Anda
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Perusahaan profesional yang berkomitmen menyediakan layanan berkualitas tinggi 
                dengan integritas dan keunggulan dalam setiap pelayanan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700">
                  Mulai Kerjasama
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-3xl transform rotate-3 opacity-20"></div>
              <Card className="relative bg-white shadow-2xl rounded-3xl p-8">
                <div className="aspect-square flex items-center justify-center">
                  <img 
                    src="/takasima-logo.png" 
                    alt="CV TAKASIMA" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Tentang <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">CV TAKASIMA</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Kami adalah perusahaan yang berdedikasi untuk memberikan layanan terbaik 
              dengan standar kualitas yang tinggi dan komitmen yang kuat.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 border-emerald-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Berpengalaman</h3>
              <p className="text-gray-600">Tim profesional dengan pengalaman bertahun-tahun di industri ini</p>
            </Card>
            <Card className="p-6 border-amber-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Berkualitas</h3>
              <p className="text-gray-600">Standar kualitas tertinggi dalam setiap produk dan layanan</p>
            </Card>
            <Card className="p-6 border-emerald-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Terpercaya</h3>
              <p className="text-gray-600">Reputasi terpercaya dengan integritas yang tinggi</p>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-emerald-50 to-amber-50 border-emerald-200 p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">Informasi Perusahaan</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">
                      Dusun Tapang Semadak, Kel. Tapang Semadak, Kec. Sekadau Hilir, 
                      Kab. Sekadau, Prov. Kalimantan Barat, 79586
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">082233059428</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">info@takasima.com</span>
                  </div>
                </div>
              </div>
              <div className="aspect-video bg-white rounded-xl shadow-lg flex items-center justify-center">
                <TrendingUp className="h-16 w-16 text-emerald-600" />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Layanan <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">Unggulan Kami</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Berbagai layanan profesional yang dirancang untuk memenuhi kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Konsultasi Bisnis</h3>
              <p className="text-gray-600 mb-4">Solusi strategis untuk pengembangan bisnis Anda dengan pendekatan yang terukur dan efektif.</p>
              <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 p-0">
                Pelajari lebih lanjut <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Manajemen Proyek</h3>
              <p className="text-gray-600 mb-4">Pengelolaan proyek profesional dari perencanaan hingga implementasi dengan hasil yang optimal.</p>
              <Button variant="ghost" className="text-amber-600 hover:text-amber-700 p-0">
                Pelajari lebih lanjut <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pengembangan Usaha</h3>
              <p className="text-gray-600 mb-4">Strategi pengembangan usaha yang komprehensif untuk pertumbuhan berkelanjutan.</p>
              <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 p-0">
                Pelajari lebih lanjut <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Hubungi <span className="bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">CV TAKASIMA</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Siap untuk memulai kerjasama? Hubungi kami hari ini untuk konsultasi gratis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Pesan</label>
                  <textarea 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Tuliskan pesan Anda..."
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-700 hover:to-amber-700">
                  Kirim Pesan
                </Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="font-medium">Alamat</p>
                      <p className="text-gray-600">
                        Dusun Tapang Semadak, Kel. Tapang Semadak<br />
                        Kec. Sekadau Hilir, Kab. Sekadau<br />
                        Prov. Kalimantan Barat, 79586
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="font-medium">Telepon</p>
                      <p className="text-gray-600">082233059428</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-emerald-600" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@takasima.com</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-r from-emerald-50 to-amber-50 border-emerald-200">
                <h3 className="text-xl font-semibold mb-2">Jam Operasional</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Senin - Jumat: 08:00 - 17:00</p>
                  <p>Sabtu: 08:00 - 12:00</p>
                  <p>Minggu: Tutup</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="/takasima-logo.png" 
                  alt="CV TAKASIMA" 
                  className="h-8 w-auto"
                />
                <span className="text-lg font-bold">CV TAKASIMA</span>
              </div>
              <p className="text-gray-400">
                Perusahaan profesional yang berkomitmen pada kualitas dan integritas.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Konsultasi Bisnis</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Manajemen Proyek</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Pengembangan Usaha</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Tentang Kami</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Kebijakan Privasi</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Syarat & Ketentuan</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                <p>082233059428</p>
                <p>info@takasima.com</p>
                <p>Sekadau, Kalimantan Barat</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CV TAKASIMA. Hak Cipta Dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}