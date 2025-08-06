"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Users,
  Target,
  Award,
  Globe,
  Server,
  Database,
  Shield,
  Zap,
  Star,
  Quote,
  ArrowRight,
  Menu,
  X,
} from "lucide-react"

export default function PRMCompanyProfile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "portfolio", "team", "testimonials", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const services = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "IT Consulting",
      description: "Strategic technology consulting to drive digital transformation and business growth.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Network Infrastructure",
      description: "Robust network solutions ensuring seamless connectivity and optimal performance.",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Management",
      description: "Comprehensive data solutions from storage to analytics and business intelligence.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity",
      description: "Advanced security solutions protecting your digital assets and infrastructure.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation services to modernize your business operations.",
    },
  ]

  const projects = [
    {
      title: "Smart City Infrastructure",
      description:
        "Implemented comprehensive IoT and network infrastructure for smart city initiatives across Indonesia.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Infrastructure",
    },
    {
      title: "Enterprise Cloud Migration",
      description: "Successfully migrated 500+ enterprise applications to cloud infrastructure with zero downtime.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Cloud Solutions",
    },
    {
      title: "National Cybersecurity Framework",
      description: "Developed and deployed cybersecurity framework protecting critical national infrastructure.",
      image: "/placeholder.svg?height=300&width=400",
      category: "Security",
    },
  ]

  const team = [
    {
      name: "Dr. Ahmad Wijaya",
      position: "Director of PRM Division",
      image: "/placeholder.svg?height=300&width=300",
      description: "20+ years experience in telecommunications and digital transformation.",
    },
    {
      name: "Sarah Putri",
      position: "Head of Technology",
      image: "/placeholder.svg?height=300&width=300",
      description: "Expert in cloud architecture and enterprise solutions with 15 years experience.",
    },
    {
      name: "Budi Santoso",
      position: "Head of Operations",
      image: "/placeholder.svg?height=300&width=300",
      description: "Specialized in network infrastructure and project management for large-scale deployments.",
    },
  ]

  const testimonials = [
    {
      name: "PT. Indonesia Power",
      position: "Chief Technology Officer",
      content:
        "PRM's expertise in digital transformation has been instrumental in modernizing our operations. Their professional approach and technical excellence exceeded our expectations.",
      rating: 5,
    },
    {
      name: "Bank Mandiri",
      position: "IT Director",
      content:
        "The cybersecurity solutions provided by PRM have significantly enhanced our security posture. Their team's dedication and expertise are truly commendable.",
      rating: 5,
    },
    {
      name: "Pertamina",
      position: "Head of Digital Innovation",
      content:
        "Working with PRM on our cloud migration project was seamless. They delivered on time and within budget while maintaining the highest quality standards.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div>
                <div className="font-bold text-gray-900">PRM</div>
                <div className="text-xs text-gray-600">Telkom Indonesia</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "services", label: "Services" },
                { id: "portfolio", label: "Portfolio" },
                { id: "team", label: "Team" },
                { id: "testimonials", label: "Testimonials" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-red-600 ${
                    activeSection === item.id ? "text-red-600" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-red-600">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-3">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "services", label: "Services" },
                  { id: "portfolio", label: "Portfolio" },
                  { id: "team", label: "Team" },
                  { id: "testimonials", label: "Testimonials" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-left text-sm font-medium transition-colors hover:text-red-600 ${
                      activeSection === item.id ? "text-red-600" : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-blue-900"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              PRM
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal mt-2 text-red-200">
                Empowering Digital Future with Telkom
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Leading Indonesia's digital transformation through innovative technology solutions, robust infrastructure,
              and strategic partnerships.
            </p>
            <Button
              onClick={() => scrollToSection("about")}
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Pelajari Lebih Lanjut
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="h-6 w-6 text-white rotate-90" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tentang Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              PRM adalah divisi strategis Telkom Indonesia yang berfokus pada transformasi digital dan solusi teknologi
              enterprise untuk memajukan Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Target className="h-12 w-12 text-red-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Visi Kami</h3>
                <p className="text-gray-600 leading-relaxed">
                  Menjadi pemimpin dalam transformasi digital Indonesia dengan menyediakan solusi teknologi terdepan
                  yang mendorong pertumbuhan ekonomi dan kemajuan bangsa.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Misi Kami</h3>
                <p className="text-gray-600 leading-relaxed">
                  Memberikan solusi teknologi inovatif, membangun infrastruktur digital yang handal, dan memberdayakan
                  talenta terbaik untuk menciptakan nilai berkelanjutan.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Profesionalisme</h3>
                <p className="text-gray-600">
                  Tim ahli dengan pengalaman puluhan tahun di industri teknologi dan telekomunikasi.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Inovasi</h3>
                <p className="text-gray-600">
                  Mengadopsi teknologi terdepan untuk memberikan solusi yang efektif dan efisien.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Keandalan</h3>
                <p className="text-gray-600">Komitmen tinggi terhadap kualitas layanan dan kepuasan pelanggan.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi teknologi komprehensif untuk mendukung transformasi digital perusahaan Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="text-red-600 group-hover:text-blue-600 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portofolio Proyek</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Showcase proyek-proyek terbaik yang telah kami kerjakan untuk berbagai klien enterprise.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-900">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{project.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tim Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dipimpin oleh para ahli berpengalaman yang berdedikasi untuk memberikan yang terbaik.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center group hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="relative mb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-32 h-32 rounded-full mx-auto object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-red-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimoni Klien</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kepercayaan dan kepuasan klien adalah prioritas utama kami.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative p-6 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="pt-6">
                  <Quote className="h-8 w-8 text-red-600 mb-4" />
                  <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Siap membantu transformasi digital perusahaan Anda. Mari berdiskusi tentang kebutuhan teknologi Anda.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl mb-6">Kirim Pesan</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                        <Input placeholder="Masukkan nama lengkap" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <Input type="email" placeholder="nama@perusahaan.com" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Perusahaan</label>
                      <Input placeholder="Nama perusahaan" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                      <Textarea placeholder="Ceritakan tentang kebutuhan teknologi perusahaan Anda..." rows={5} />
                    </div>
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                      Kirim Pesan
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="p-6">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Alamat Kantor</h3>
                      <p className="text-gray-600">
                        Telkom Indonesia
                        <br />
                        Jl. Japati No. 1, Bandung
                        <br />
                        Jawa Barat 40133, Indonesia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Telepon</h3>
                      <p className="text-gray-600">+62 22 7566 5000</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-red-600 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">prm@telkom.co.id</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Embedded Map */}
              <Card className="p-6">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-gray-900 mb-4">Lokasi Kami</h3>
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Google Maps Embed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <div>
                  <div className="font-bold text-xl">PRM</div>
                  <div className="text-sm text-gray-400">Telkom Indonesia</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Divisi strategis Telkom Indonesia yang berfokus pada transformasi digital dan solusi teknologi
                enterprise untuk memajukan Indonesia.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    <span className="text-xs">in</span>
                  </div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                    <span className="text-xs">tw</span>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Layanan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    IT Consulting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Network Infrastructure
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Data Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cybersecurity
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Perusahaan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Karir
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Berita
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Kontak
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} PRM - Telkom Indonesia. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
