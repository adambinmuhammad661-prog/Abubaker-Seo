/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Phone, Mail, MessageCircle, ArrowRight, CheckCircle2, 
  Globe, Search, BarChart3, Settings, Users, MapPin, Target, 
  Zap, ShieldCheck, Code2, Database, LayoutGrid, TrendingUp,
  ChevronRight, Star, Quote, Facebook, Linkedin, Instagram, ExternalLink
} from 'lucide-react';

// --- Types ---
type Page = 'home' | 'services' | 'real-estate' | 'about' | 'contact';

// --- Components ---

const Navbar = ({ currentPage, setPage }: { currentPage: Page, setPage: (p: Page) => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string, id: Page }[] = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Real Estate SEO', id: 'real-estate' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button onClick={() => setPage('home')} className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                <Search className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight">Abubaker<span className="text-blue-500">SEO</span></span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setPage(link.id)}
                className={`text-sm font-medium transition-colors ${currentPage === link.id ? 'text-blue-500' : 'text-gray-400 hover:text-white'}`}
              >
                {link.name}
              </button>
            ))}
            <a
              href="https://wa.me/923430044968"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-600/20 flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-white p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0a0a0a] border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => { setPage(link.id); setIsMenuOpen(false); }}
                  className={`text-lg font-medium text-left ${currentPage === link.id ? 'text-blue-500' : 'text-gray-400'}`}
                >
                  {link.name}
                </button>
              ))}
              <a
                href="https://wa.me/923430044968"
                className="bg-blue-600 text-white px-6 py-3 rounded-xl text-center font-semibold"
              >
                WhatsApp Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setPage }: { setPage: (p: Page) => void }) => (
  <footer className="bg-[#0a0a0a] border-t border-white/10 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
              <Search className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">Abubaker<span className="text-blue-500">SEO</span></span>
          </div>
          <p className="text-gray-400 max-w-md leading-relaxed mb-8">
            Helping real estate agents and local businesses dominate Google through semantic optimization, technical excellence, and data-driven strategies.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://www.facebook.com/muhammad.abubaker.siddiq.seo.specialist" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/muhammad-abubaker-siddiq-seo-specialist/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://www.instagram.com/abubaker_ktk/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-6">Services</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><button onClick={() => setPage('services')} className="hover:text-blue-500 transition-colors">Local SEO</button></li>
            <li><button onClick={() => setPage('services')} className="hover:text-blue-500 transition-colors">GBP Optimization</button></li>
            <li><button onClick={() => setPage('real-estate')} className="hover:text-blue-500 transition-colors">Real Estate SEO</button></li>
            <li><button onClick={() => setPage('services')} className="hover:text-blue-500 transition-colors">Technical SEO</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-blue-500" />
              <span>+92 343 0044968</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-blue-500" />
              <span>mas6679200@gmail.com</span>
            </li>
            <li className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>Rawalpindi, Pakistan</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Muhammad Abubaker Siddiq. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Pages ---

const HomePage = ({ setPage }: { setPage: (p: Page) => void }) => (
  <div className="space-y-32 pb-32">
    {/* Hero Section */}
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold mb-8">
            Full-Stack SEO & Web Development Specialist
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Get More Local Clients from <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Google, AI & Maps</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
            From high-performance web development to cutting-edge AEO & GEO strategies. I build the systems that put your business in front of ready-to-buy customers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/923430044968"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-blue-600/25 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start Growing on WhatsApp</span>
            </a>
            <button
              onClick={() => setPage('services')}
              className="w-full sm:w-auto bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-full text-lg font-bold transition-all flex items-center justify-center space-x-2"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Pain Points */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Invisible on Maps?",
            desc: "If you're not in the top 3 of Google Maps, you're losing 70% of local traffic.",
            icon: MapPin
          },
          {
            title: "No Quality Leads?",
            desc: "Generic traffic is useless. I focus on 'Search Intent' to bring people ready to buy.",
            icon: Target
          },
          {
            title: "AI Search Gap?",
            desc: "Is your business showing up in ChatGPT or Perplexity? If not, you're missing the future of search.",
            icon: Zap
          }
        ].map((item, i) => (
          <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group">
            <div className="w-12 h-12 bg-blue-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
              <item.icon className="w-6 h-6 text-blue-500 group-hover:text-white" />
            </div>
            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Services Overview */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">360° Digital Growth Engine</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">I don't just optimize; I build, rank, and scale. From technical foundations to AI-driven visibility.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { title: "Full SEO Strategy", icon: TrendingUp, desc: "End-to-end On-Page, Off-Page, and Technical SEO." },
          { title: "Web Design & Dev", icon: LayoutGrid, desc: "High-converting, lightning-fast websites built for SEO." },
          { title: "AEO & GEO", icon: Zap, desc: "Optimize for Answer Engines (AI) and Generative Search." },
          { title: "Local SEO & GBP", icon: MapPin, desc: "Dominate local maps and city-specific searches." },
          { title: "Semantic SEO", icon: Database, desc: "Topical authority through entity-based content." },
          { title: "Technical Excellence", icon: Code2, desc: "Perfect indexing and Core Web Vitals optimization." }
        ].map((service, i) => (
          <div key={i} className="p-6 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/5 hover:bg-white/10 transition-all cursor-pointer" onClick={() => setPage('services')}>
            <service.icon className="w-8 h-8 text-blue-500 mb-4" />
            <h4 className="text-lg font-bold mb-2">{service.title}</h4>
            <p className="text-sm text-gray-400">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA Section */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-[40px] bg-gradient-to-br from-blue-600 to-blue-800 p-12 md:p-20 overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-32 -mt-32" />
        <h2 className="text-3xl md:text-5xl font-bold mb-8 relative z-10">Ready to dominate the search landscape?</h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto relative z-10">Let's audit your current presence and build a roadmap to the first page of Google and AI search results.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
          <a href="https://wa.me/923430044968" className="bg-white text-blue-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-50 transition-colors shadow-2xl">
            Book a Free Strategy Call
          </a>
          <button onClick={() => setPage('contact')} className="text-white font-semibold flex items-center space-x-2 hover:translate-x-2 transition-transform">
            <span>Or send an email</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {[
          { q: "What is AEO and GEO?", a: "AEO (Answer Engine Optimization) and GEO (Generative Engine Optimization) are strategies to ensure your business is cited and recommended by AI models like ChatGPT, Gemini, and Perplexity." },
          { q: "Do you build the websites yourself?", a: "Yes. As a software engineering student, I build custom, high-performance websites that are technically optimized for SEO from day one." },
          { q: "What is 'Full SEO'?", a: "Full SEO includes On-Page (content/HTML), Off-Page (backlinks/authority), and Technical SEO (speed/indexing) to provide a complete growth solution." }
        ].map((faq, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="font-bold mb-3 flex items-center space-x-3">
              <span className="text-blue-500">Q.</span>
              <span>{faq.q}</span>
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed pl-7">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

const ServicesPage = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
    <div className="text-center max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">Full-Stack Digital Services</h1>
      <p className="text-xl text-gray-400">Comprehensive solutions for the modern search era. I combine technical development with advanced optimization.</p>
    </div>

    <div className="grid grid-cols-1 gap-24">
      {[
        {
          title: "Website Design & Development",
          desc: "I build high-performance, conversion-focused websites. No generic templates—just custom code optimized for speed, user experience, and search engines.",
          points: ["Custom React/Next.js Development", "UI/UX Design for Conversion", "Mobile-First Responsive Design", "Lightning Fast Load Times"],
          icon: LayoutGrid,
          img: "https://picsum.photos/seed/webdev/800/600"
        },
        {
          title: "On-Page SEO Optimization",
          desc: "Every element on your page matters. I optimize your content and HTML to ensure search engines understand exactly what you offer.",
          points: ["Keyword Mapping & Optimization", "Meta Tags & Header Structure", "Internal Linking Strategy", "Image Alt Text & Compression"],
          icon: Target,
          img: "https://picsum.photos/seed/onpage/800/600"
        },
        {
          title: "Off-Page SEO & Authority Building",
          desc: "I help you build the 'Trust' and 'Authority' needed to rank. It's not just about links; it's about building a digital footprint that Google respects.",
          points: ["High-Quality Backlink Acquisition", "Digital PR & Guest Posting", "Brand Mention Monitoring", "Social Signal Optimization"],
          icon: Globe,
          img: "https://picsum.photos/seed/offpage/800/600"
        },
        {
          title: "AEO & GEO (AI Search Optimization)",
          desc: "The future of search is AI. I optimize your data and content to ensure you are the 'Chosen Answer' in ChatGPT, Gemini, and Generative Search results.",
          points: ["Generative Engine Optimization", "LLM Citation Strategy", "Structured Data for AI", "Conversational Keyword Research"],
          icon: Zap,
          img: "https://picsum.photos/seed/ai-seo/800/600"
        },
        {
          title: "Local SEO & Map Pack Domination",
          desc: "I optimize your website and Google Business Profile to rank for 'near me' searches and local keywords in your specific city.",
          points: ["GBP Category & Post Optimization", "Local Citation Building", "Proximity & Relevance Tuning", "Review Management Strategy"],
          icon: MapPin,
          img: "https://picsum.photos/seed/localseo/800/600"
        },
        {
          title: "Technical SEO & Performance",
          desc: "As a software engineer, I fix the deep technical issues that hold your site back. Perfect indexing and perfect speed.",
          points: ["Core Web Vitals Fixes", "Advanced Schema Markup", "Crawl Budget Optimization", "Sitemap & Robots.txt Tuning"],
          icon: Code2,
          img: "https://picsum.photos/seed/techseo/800/600"
        }
      ].map((service, i) => (
        <div key={i} className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
          <div className="flex-1 space-y-8">
            <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center">
              <service.icon className="w-8 h-8 text-blue-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">{service.title}</h2>
            <p className="text-lg text-gray-400 leading-relaxed">{service.desc}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.points.map((pt, j) => (
                <li key={j} className="flex items-center space-x-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 w-full aspect-video rounded-[32px] border border-white/10 overflow-hidden relative group">
            <img 
              src={service.img} 
              alt={service.title} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors" />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const RealEstatePage = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32">
    <section className="text-center max-w-4xl mx-auto">
      <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">Niche Expertise</span>
      <h1 className="text-4xl md:text-6xl font-bold mt-6 mb-8">SEO for Real Estate Agents & Property Dealers</h1>
      <p className="text-xl text-gray-400">In real estate, being second is being last. I help you capture 'Buy' and 'Sell' intent keywords before your competitors even know they exist.</p>
    </section>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="p-10 rounded-[40px] bg-white/5 border border-white/10">
        <h3 className="text-2xl font-bold mb-6">The Digital Arbitrage Strategy</h3>
        <p className="text-gray-400 leading-relaxed mb-8">
          Most agents spend thousands on Zameen or Facebook ads. I help you build a "Digital Asset" that ranks for keywords like <span className="text-blue-400 italic">"3 marla house for sale in Rawalpindi"</span> or <span className="text-blue-400 italic">"best property dealer in Bahria Town"</span>.
        </p>
        <ul className="space-y-4">
          {["Rank for specific housing societies", "Capture high-intent property leads", "Build trust with local authority", "Reduce cost-per-lead by 80%"].map((item, i) => (
            <li key={i} className="flex items-center space-x-3">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {[
          { label: "Lead Quality", val: "92%", desc: "Intent-based traffic" },
          { label: "Cost Reduction", val: "75%", desc: "Vs. Paid Advertising" },
          { label: "Visibility", val: "10X", desc: "In Local Map Pack" },
          { label: "Authority", val: "Top 1%", desc: "In niche markets" }
        ].map((stat, i) => (
          <div key={i} className="p-6 rounded-3xl bg-blue-600/5 border border-blue-500/10 flex flex-col justify-center text-center">
            <span className="text-3xl font-bold text-blue-500 mb-1">{stat.val}</span>
            <span className="text-sm font-semibold text-white mb-2">{stat.label}</span>
            <span className="text-xs text-gray-500">{stat.desc}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <div className="aspect-square rounded-[48px] bg-gradient-to-br from-blue-600 to-blue-900 overflow-hidden relative group">
          <img 
            src="https://drive.google.com/uc?export=view&id=1hwvs3SUmhDC67IrtzY9Z9uB_ZnEfAjr3" 
            alt="Muhammad Abubaker Siddiq" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay" />
        </div>
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-blue-600 rounded-full blur-[80px] opacity-50 -z-10" />
      </div>
      
      <div className="space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold">I am Muhammad Abubaker Siddiq</h1>
        <p className="text-xl text-blue-500 font-semibold">Software Engineer & Local SEO Strategist</p>
        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
          <p>
            Based in Rawalpindi, Pakistan, I bridge the gap between technical software engineering and conversion-focused SEO. My background in software engineering allows me to understand search engines not just as "black boxes," but as complex systems of indexing, retrieval, and ranking.
          </p>
          <p>
            I don't just "do SEO." I build data-driven growth systems for real estate agents and local businesses. My approach is rooted in Semantic SEO—focusing on search intent and topical authority rather than outdated keyword tactics.
          </p>
          <p>
            My mission is simple: To help local businesses grow predictably by making them the most trusted and visible authority in their city.
          </p>
        </div>
        <div className="pt-8 grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-white font-bold mb-2">Technical Mindset</h4>
            <p className="text-sm text-gray-500">Optimizing for performance, structure, and automation.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-2">Result Focused</h4>
            <p className="text-sm text-gray-500">Focusing on leads and calls, not just vanity metrics.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="text-center max-w-3xl mx-auto mb-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-8">Let's Talk Growth</h1>
      <p className="text-xl text-gray-400">Ready to dominate your local market? Choose your preferred way to connect.</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-1 space-y-8">
        <a 
          href="https://wa.me/923430044968" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block p-8 rounded-3xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/20 transition-all group"
        >
          <MessageCircle className="w-10 h-10 text-[#25D366] mb-6 group-hover:scale-110 transition-transform" />
          <h3 className="text-2xl font-bold mb-2">WhatsApp</h3>
          <p className="text-gray-400 mb-4">Fastest way to get a response.</p>
          <span className="text-[#25D366] font-bold">+92 343 0044968</span>
        </a>
        
        <div className="p-8 rounded-3xl bg-blue-600/10 border border-blue-500/20">
          <Mail className="w-10 h-10 text-blue-500 mb-6" />
          <h3 className="text-2xl font-bold mb-2">Email</h3>
          <p className="text-gray-400 mb-4">For detailed project inquiries.</p>
          <span className="text-blue-400 font-bold">mas6679200@gmail.com</span>
        </div>
      </div>

      <div className="lg:col-span-2 p-8 md:p-12 rounded-[40px] bg-white/5 border border-white/10">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Full Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-colors" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Business Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-colors" placeholder="Real Estate Agency" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Service Interested In</label>
            <select className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-colors appearance-none">
              <option>Local SEO</option>
              <option>GBP Optimization</option>
              <option>Real Estate SEO</option>
              <option>Technical Audit</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Message</label>
            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-colors" placeholder="Tell me about your business goals..." />
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-blue-600/20">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [page, setPage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'home': return <HomePage setPage={setPage} />;
      case 'services': return <ServicesPage />;
      case 'real-estate': return <RealEstatePage />;
      case 'about': return <AboutPage />;
      case 'contact': return <ContactPage />;
      default: return <HomePage setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30 selection:text-white">
      <Navbar currentPage={page} setPage={setPage} />
      
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setPage={setPage} />
    </div>
  );
}
