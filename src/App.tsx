import { useState } from 'react';
import {
  Car,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Award,
  ChevronRight,
  MessageSquare,
  Sparkles,
  Send,
  Menu,
  X,
  TrendingDown,
  CircleDollarSign,
  Search,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const phoneRaw = "+48505915046";
  const phoneFormatted = "+48 505 915 046";

  const openWhatsApp = (customMessage?: string) => {
    const defaultText = customMessage || "Cześć! Chciałbym zapytać o import samochodu z Chin.";
    const url = `https://wa.me/${phoneRaw.replace(/\s+/g, '')}?text=${encodeURIComponent(defaultText)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#070709] text-slate-100 font-sans selection:bg-[#e2b744] selection:text-black">
      
      {/* HEADER NAVIGATION */}
      <header className="sticky top-0 z-50 bg-[#070709]/80 backdrop-blur-md border-b border-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white block">
                Dostawa z <span className="text-[#e2b744]">Chin</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#jak-to-dziala" className="text-sm font-medium text-slate-400 hover:text-[#e2b744] transition-colors">
              Jak to działa
            </a>
            <a href="#dostepne-marki" className="text-sm font-medium text-slate-400 hover:text-[#e2b744] transition-colors">
              Dostępne marki
            </a>
            <a href="#dlaczego-ja" className="text-sm font-medium text-slate-400 hover:text-[#e2b744] transition-colors">
              Dlaczego ja
            </a>
            <a href="#kontakt" className="text-sm font-medium text-slate-400 hover:text-[#e2b744] transition-colors">
              Koszt i kontakt
            </a>
          </nav>

          {/* Call-to-Action Link */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => openWhatsApp("Dzień dobry, chciałbym zapytać o wycenę importu samochodu.")}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-[#e2b744] px-4 py-2.5 rounded-md hover:bg-[#f3ca58] active:scale-95 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              WhatsApp: {phoneFormatted}
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0f] border-b border-slate-900 py-6 px-4 flex flex-col gap-4 animate-fadeIn">
            <a
              href="#jak-to-dziala"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-[#e2b744] py-2 border-b border-slate-900"
            >
              Jak to działa
            </a>
            <a
              href="#dostepne-marki"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-[#e2b744] py-2 border-b border-slate-900"
            >
              Dostępne marki
            </a>
            <a
              href="#dlaczego-ja"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-[#e2b744] py-2 border-b border-slate-900"
            >
              Dlaczego ja
            </a>
            <a
              href="#kontakt"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-[#e2b744] py-2"
            >
              Koszt i kontakt
            </a>
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                openWhatsApp("Dzień dobry, kontaktuję się przez stronę.");
              }}
              className="w-full flex items-center justify-center gap-2 py-3 mt-2 rounded-md bg-[#e2b744] text-black font-bold uppercase tracking-wider text-xs"
            >
              <Phone className="w-4 h-4" />
              WhatsApp: {phoneFormatted}
            </button>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:py-32 border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(226,183,68,0.06),transparent_50%)]" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[radial-gradient(circle,rgba(56,189,248,0.03),transparent_60%)] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6">
            IMPORT SAMOCHODÓW Z CHIN – WYBIERZ AUTO, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e2b744] to-[#fcd34d]">JA ZAJMĘ SIĘ CAŁĄ RESZTĄ!</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-medium text-slate-400 mb-8 max-w-2xl mx-auto">
            Nie przepłacaj w salonach i komisach.
          </p>

          {/* Value Callout Card */}
          <div className="bg-gradient-to-br from-[#121217] to-[#16161f] border border-[#e2b744]/20 p-6 md:p-8 rounded-2xl mb-10 shadow-2xl shadow-yellow-950/5 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3 text-[#e2b744]">
              <TrendingDown className="w-6 h-6" />
              <span className="text-xs font-bold uppercase tracking-widest">Oszczędność finansowa</span>
            </div>
            <p className="font-display font-extrabold text-xl sm:text-2xl text-white leading-snug">
              CENY AUT IMPORTOWANYCH Z CHIN SĄ CZĘSTO NIŻSZE NAWET o{" "}
              <span className="text-[#e2b744] underline decoration-wavy decoration-[#e2b744]/40 underline-offset-4">
                60 000 ZŁ
              </span>{" "}
              w porównaniu z ofertami salonów!
            </p>
          </div>

          <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Dzięki mojej pomocy możesz sprowadzić <strong className="text-white font-semibold">NOWE lub UŻYWANE AUTO</strong> prosto z rynku chińskiego – <strong className="text-[#e2b744] font-semibold">SZYBKO, BEZPIECZNIE i w NAJLEPSZEJ CENIE</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => openWhatsApp("Dzień dobry, chciałbym zapytać o wycenę i dostępność samochodu z Chin.")}
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#e2b744] text-black font-extrabold uppercase tracking-wider text-xs hover:bg-[#f3ca58] transition-all shadow-lg shadow-yellow-500/10 active:scale-95 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Napisz na WhatsApp
            </button>
            <a
              href="#jak-to-dziala"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-semibold uppercase tracking-wider text-xs hover:border-slate-700 hover:text-white transition-all text-center"
            >
              Dowiedz się jak to działa
            </a>
          </div>
        </div>
      </section>

      {/* JAK TO DZIAŁA? */}
      <section id="jak-to-dziala" className="py-20 md:py-28 max-w-5xl mx-auto px-4 border-b border-slate-900">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#e2b744] mb-3">
            <Search className="w-3.5 h-3.5" />
            Procedura krok po kroku
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Jak to działa?
          </h2>
          <div className="w-12 h-1 bg-[#e2b744] mx-auto mt-4 rounded-full" />
        </div>

        {/* Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
          
          {/* Step 1 */}
          <div className="bg-[#111116] border border-slate-800/80 p-6 rounded-xl flex flex-col justify-between relative hover:border-slate-700 transition-colors">
            <div>
              <span className="font-display font-black text-4xl text-[#e2b744]/20 block mb-4">01</span>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                Wybierasz samochód sam (podaję stronę z ofertami) lub podajesz mi markę/model – a ja go wyszukam.
              </p>
            </div>
            <div className="mt-6 flex gap-2 items-center text-xs text-slate-500 font-mono">
              <ExternalLink className="w-3 h-3 text-[#e2b744]" />
              <span>Chiny Oferty</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#111116] border border-slate-800/80 p-6 rounded-xl flex flex-col justify-between relative hover:border-slate-700 transition-colors">
            <div>
              <span className="font-display font-black text-4xl text-[#e2b744]/20 block mb-4">02</span>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                Jeśli nie ma go w ofercie, kontaktuję się bezpośrednio z dealerem w Chinach.
              </p>
            </div>
            <div className="mt-6 flex gap-2 items-center text-xs text-slate-500 font-mono">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#e2b744]" />
              <span>Bezpośredni kontakt</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#111116] border border-slate-800/80 p-6 rounded-xl flex flex-col justify-between relative hover:border-slate-700 transition-colors">
            <div>
              <span className="font-display font-black text-4xl text-[#e2b744]/20 block mb-4">03</span>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                Cena = faktura sprzedawcy w Chinach (ZERO ukrytych kosztów).
              </p>
            </div>
            <div className="mt-6 flex gap-2 items-center text-xs text-slate-500 font-mono">
              <CircleDollarSign className="w-3.5 h-3.5 text-[#e2b744]" />
              <span>Zero ukrytych kosztów</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-[#111116] border border-slate-800/80 p-6 rounded-xl flex flex-col justify-between relative hover:border-slate-700 transition-colors">
            <div>
              <span className="font-display font-black text-4xl text-[#e2b744]/20 block mb-4">04</span>
              <p className="text-sm text-slate-300 leading-relaxed font-medium">
                Kupujesz tylko z SALONÓW lub SPRAWDZONYCH DILERÓW. Mój agent w Chinach ma możliwość SPRAWDZENIA sprzedawcy.
              </p>
            </div>
            <div className="mt-6 flex gap-2 items-center text-xs text-slate-500 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-[#e2b744]" />
              <span>Weryfikacja agenta</span>
            </div>
          </div>

          {/* Step 5 */}
          <div className="bg-[#111116] border border-[#e2b744]/20 p-6 rounded-xl flex flex-col justify-between relative hover:border-[#e2b744]/40 transition-colors shadow-lg shadow-yellow-950/5">
            <div>
              <span className="font-display font-black text-4xl text-[#e2b744] block mb-4">05</span>
              <p className="text-sm text-slate-200 leading-relaxed font-semibold">
                Zajmuję się wszystkim: formalnościami prawnymi, transportem, cłem i rejestracją auta.
              </p>
            </div>
            <div className="mt-6 flex gap-2 items-center text-xs text-[#e2b744] font-mono">
              <Award className="w-3.5 h-3.5" />
              <span>Kompleksowo</span>
            </div>
          </div>

        </div>
      </section>

      {/* DOSTĘPNE MARKI I WERSJE */}
      <section id="dostepne-marki" className="py-20 md:py-28 max-w-5xl mx-auto px-4 border-b border-slate-900">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#e2b744] mb-3">
            <Car className="w-3.5 h-3.5" />
            Pojazdy i specyfikacje
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Dostępne marki i wersje
          </h2>
          <div className="w-12 h-1 bg-[#e2b744] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Group 1: Chinese Brands */}
          <div className="bg-gradient-to-br from-[#121217] to-[#14141e] border-2 border-[#e2b744]/30 rounded-2xl p-6 md:p-8 hover:border-[#e2b744]/50 transition-colors shadow-xl shadow-yellow-950/5">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-black tracking-widest text-[#e2b744] bg-[#e2b744]/10 px-3 py-1 rounded-full uppercase">
                Marki chińskie
              </span>
              <span className="text-xs font-mono text-slate-500">CHN</span>
            </div>
            <h3 className="font-display font-extrabold text-xl text-white mb-4">
              Wszystkie marki chińskie
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Najnowocześniejsze pojazdy z rynku azjatyckiego, w tym BYD, NIO, Zeekr, Li Auto, Xiaomi, Xpeng, Geely, Changan oraz wiele innych innowacyjnych modeli.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-slate-900 text-slate-300 px-3 py-1.5 rounded border border-slate-800">BYD</span>
              <span className="text-xs bg-slate-900 text-slate-300 px-3 py-1.5 rounded border border-slate-800">NIO</span>
              <span className="text-xs bg-slate-900 text-slate-300 px-3 py-1.5 rounded border border-slate-800">Zeekr</span>
              <span className="text-xs bg-slate-900 text-slate-300 px-3 py-1.5 rounded border border-slate-800">Xiaomi</span>
              <span className="text-xs bg-slate-900 text-slate-300 px-3 py-1.5 rounded border border-slate-800">Xpeng</span>
            </div>
          </div>

          {/* Brand Group 2: Japanese Brands */}
          <div className="bg-[#111116] border border-slate-800/80 rounded-2xl p-6 md:p-8 hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-black tracking-widest text-slate-400 bg-slate-800 px-3 py-1 rounded-full uppercase">
                Marki japońskie
              </span>
              <span className="text-xs font-mono text-slate-500">JPN</span>
            </div>
            <h3 className="font-display font-extrabold text-xl text-white mb-4">
              Import z Japonii / Azji
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Sprawdzone i niezawodne pojazdy japońskich producentów, dostępne w świetnych specyfikacjach na rynku azjatyckim:
            </p>
            <ul className="space-y-2 mb-6">
              {['Honda', 'Toyota', 'Nissan', 'Mazda', 'Mitsubishi'].map((brand, idx) => (
                <li key={idx} className="text-sm font-medium text-slate-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#e2b744]" />
                  {brand}
                </li>
              ))}
            </ul>
          </div>

          {/* Brand Group 3: European Brands */}
          <div className="bg-[#111116] border border-slate-800/80 rounded-2xl p-6 md:p-8 hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-black tracking-widest text-slate-400 bg-slate-800 px-3 py-1 rounded-full uppercase">
                Marki europejskie
              </span>
              <span className="text-xs font-mono text-slate-500">EUR</span>
            </div>
            <h3 className="font-display font-extrabold text-xl text-white mb-4">
              Koncerny europejskie
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Wyjątkowo bogate, rzadkie wersje wyposażeniowe marek premium produkowanych na rynki zewnętrzne w doskonałych cenach:
            </p>
            <div className="flex flex-wrap gap-2">
              {['BMW', 'Audi', 'Volkswagen', 'Mercedes-Benz', 'Volvo', 'Škoda', 'Renault'].map((brand, idx) => (
                <span key={idx} className="text-xs bg-slate-900 text-slate-300 px-2.5 py-1.5 rounded border border-slate-800">
                  {brand}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Versions Callout Bar */}
        <div className="mt-12 bg-slate-950/40 border border-slate-900 rounded-2xl p-6 text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
            Dostępne rodzaje napędów:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2.5 px-4 py-2 bg-slate-900/60 rounded-full border border-slate-800">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
              <span className="text-sm font-semibold text-white">Elektryczne</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 bg-slate-900/60 rounded-full border border-slate-800">
              <div className="w-2.5 h-2.5 rounded-full bg-sky-500 shadow-sm shadow-sky-500/50" />
              <span className="text-sm font-semibold text-white">Hybrydowe</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 py-2 bg-slate-900/60 rounded-full border border-slate-800">
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm shadow-amber-500/50" />
              <span className="text-sm font-semibold text-white">Spalinowe</span>
            </div>
          </div>
        </div>
      </section>

      {/* DLACZEGO JA? */}
      <section id="dlaczego-ja" className="py-20 md:py-28 max-w-5xl mx-auto px-4 border-b border-slate-900">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#e2b744] mb-3">
            <Award className="w-3.5 h-3.5" />
            Doświadczenie i gwarancja
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
            Dlaczego ja?
          </h2>
          <div className="w-12 h-1 bg-[#e2b744] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-[#111116] border border-slate-800/80 p-8 rounded-2xl flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#e2b744]/10 border border-[#e2b744]/20 flex items-center justify-center text-[#e2b744]">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">
              Doświadczenie w imporcie
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Kilkuletnie doświadczenie w bezpośrednim sprowadzaniu aut i pokonywaniu skomplikowanych ścieżek logistycznych.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111116] border border-slate-800/80 p-8 rounded-2xl flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#e2b744]/10 border border-[#e2b744]/20 flex items-center justify-center text-[#e2b744]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">
              Liczne rekomendacje
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Zbudowane zaufanie poparte licznymi rekomendacjami od firm partnerskich oraz zadowolonych osób prywatnych.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#111116] border border-slate-800/80 p-8 rounded-2xl flex flex-col gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#e2b744]/10 border border-[#e2b744]/20 flex items-center justify-center text-[#e2b744]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-lg text-white">
              Kompleksowa obsługa
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Pełne odciążenie klienta – koordynuję cały proces od wyszukania idealnego egzemplarza, przez opłatę cła, aż po rejestrację pojazdu w kraju.
            </p>
          </div>

        </div>
      </section>

      {/* KOSZT OBSŁUGI & KONTAKT */}
      <section id="kontakt" className="py-20 md:py-28 max-w-5xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left info column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#e2b744] mb-3">
                <CircleDollarSign className="w-3.5 h-3.5" />
                Jasne warunki finansowe
              </div>
              <h2 className="font-display font-extrabold text-3xl text-white mb-4">
                Koszt obsługi &amp; Kontakt
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Współpracując ze mną zyskujesz pełną transparentność finansową. Nie ukrywam marż. Płacisz za faktyczną wartość pojazdu u dealera oraz stały, uzgodniony koszt mojej usługi.
              </p>
            </div>

            {/* Pricing Box */}
            <div className="bg-gradient-to-br from-[#121217] to-[#151520] border-2 border-[#e2b744] p-6 rounded-2xl shadow-xl shadow-yellow-950/10">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#e2b744] bg-[#e2b744]/10 px-3 py-1 rounded-full">
                Stała prowizja
              </span>
              <div className="mt-4">
                <span className="text-xs text-slate-400 block uppercase font-bold tracking-wider">Koszt obsługi zlecenia:</span>
                <span className="font-display font-black text-3xl sm:text-4xl text-white block mt-1 tracking-tight">
                  6 000 ZŁ BRUTTO
                </span>
                <span className="text-sm text-slate-400 font-semibold block mt-0.5">
                  ~1 450 €
                </span>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
                (płatne przy podpisaniu umowy)
              </div>
            </div>

            {/* Contact details list */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-900">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block font-bold uppercase">Kontakt WhatsApp</span>
                  <button
                    onClick={() => openWhatsApp("Dzień dobry!")}
                    className="text-base font-bold text-white hover:text-[#e2b744] transition-colors"
                  >
                    {phoneFormatted}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right column: Action Board instead of a Form */}
          <div className="lg:col-span-7 bg-[#111116] border border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#e2b744] mb-2">
                <Sparkles className="w-4 h-4" />
                Masz pytania lub szukasz modelu?
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white leading-snug">
                Marzysz o konkretnym modelu?
              </h3>
            </div>

            <button
              onClick={() => openWhatsApp("Dzień dobry! Chciałbym sprawdzić cenę i dostępność samochodu z Chin.")}
              className="w-full flex items-center justify-center gap-2.5 py-4 bg-[#e2b744] text-black font-extrabold uppercase tracking-wider text-xs rounded-xl hover:bg-[#f3ca58] transition-all shadow-lg shadow-yellow-500/10 active:scale-95"
            >
              <MessageSquare className="w-5 h-5" />
              Napisz na WhatsApp o wycenę
            </button>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-500 text-xs">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-display font-extrabold text-sm text-white block mb-1">
              Dostawa z <span className="text-[#e2b744]">Chin</span>
            </span>
            <p>© 2026 Dostawa z Chin. Wszelkie prawa zastrzeżone.</p>
          </div>
          <div className="flex gap-6">
            <button
              onClick={() => openWhatsApp("Dzień dobry")}
              className="hover:text-white transition-colors"
            >
              Obsługa klienta WhatsApp
            </button>
            <a href="#jak-to-dziala" className="hover:text-white transition-colors">
              Procedura
            </a>
            <a href="#dostepne-marki" className="hover:text-white transition-colors">
              Oferowane Marki
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
