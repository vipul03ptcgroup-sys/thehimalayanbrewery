import { Link } from "react-router-dom";
import RevealSection from "../components/RevealSection";

export default function Home() {
  return (
    <div className="relative">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="sky" cx="50%" cy="30%" r="70%">
                <stop offset="0%" stopColor="#1a2a1a" />
                <stop offset="100%" stopColor="#0D0D0D" />
              </radialGradient>
              <linearGradient id="mtn1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2C3E2D" />
                <stop offset="100%" stopColor="#151a15" />
              </linearGradient>
              <linearGradient id="mtn2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1a211a" />
                <stop offset="100%" stopColor="#0D0D0D" />
              </linearGradient>
              <linearGradient id="snow1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E8E8E8" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#2C3E2D" stopOpacity="0" />
              </linearGradient>
            </defs>
            <rect width="1440" height="900" fill="url(#sky)" />
            {[...Array(60)].map((_, i) => (
              <circle key={i} cx={Math.sin(i * 137.5) * 700 + 720} cy={Math.cos(i * 97.3) * 200 + 250} r={i % 3 === 0 ? 1.5 : 0.8} fill="white" opacity={0.3 + (i % 3) * 0.2} />
            ))}
            <circle cx="1150" cy="180" r="35" fill="#C9A84C" opacity="0.12" />
            <circle cx="1150" cy="180" r="22" fill="#E8C97A" opacity="0.18" />
            <polygon points="0,700 200,300 400,500 600,250 800,420 1000,200 1200,380 1440,280 1440,900 0,900" fill="url(#mtn2)" opacity="0.7" />
            <polygon points="0,900 150,500 300,650 500,350 700,550 900,300 1100,480 1300,320 1440,430 1440,900" fill="url(#mtn1)" />
            <polygon points="500,350 480,430 520,430" fill="url(#snow1)" opacity="0.8" />
            <polygon points="900,300 870,400 930,400" fill="url(#snow1)" opacity="0.9" />
            <polygon points="1300,320 1275,410 1325,410" fill="url(#snow1)" opacity="0.7" />
            <rect x="0" y="780" width="1440" height="120" fill="#0D0D0D" opacity="0.8" />
          </svg>
        </div>

        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto animate-fade-in">
          {/* <p className="font-rajdhani text-xs tracking-[0.5em] text-yellow-500 uppercase mb-6 animate-fade-up delay-200">
            Est. in the Himalayas · Brewed at Altitude
          </p> */}
          <h1 className="font-display font-black leading-none mb-8 animate-fade-up delay-400">
            <span className="block text-6xl md:text-8xl lg:text-9xl text-amber-50">The</span>
            <span className="block text-5xl md:text-7xl lg:text-8xl gold-shimmer mt-1">Himalayan</span>
            <span className="block text-4xl md:text-6xl lg:text-7xl text-amber-50/80 italic font-normal mt-2">Brewery</span>
          </h1>
          <div className="flex items-center justify-center gap-4 mb-10 animate-fade-up delay-600">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-600/60" />
            <span className="text-yellow-500 text-xl">✦</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-600/60" />
          </div>
          <p className="font-light text-xl md:text-2xl text-amber-50/70 max-w-2xl mx-auto leading-relaxed mb-12 animate-fade-up delay-800">
            Crafted with pure Himalayan ingredients, delivering bold flavors, refreshing taste, and a premium beverage experience in every sip.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-1000">
            <Link to="/about" className="font-rajdhani text-sm uppercase tracking-widest px-10 py-4 bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-colors duration-300">
              Our Story
            </Link>
            <Link to="/contact" className="font-rajdhani text-sm uppercase tracking-widest px-10 py-4 border border-yellow-600/60 text-yellow-500 hover:border-yellow-500 hover:bg-yellow-500/10 transition-all duration-300">
              Get in Touch
            </Link>
          </div>
          <div className="mt-14 animate-fade-up delay-1200">
            <span className="inline-flex items-center gap-3 font-rajdhani text-xs uppercase tracking-widest text-amber-50/40 border border-amber-50/10 px-5 py-2">
              <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
              Our Products Launching Soon
            </span>
          </div>
        </div>

        {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="font-rajdhani text-xs tracking-widest text-amber-50/30 uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-yellow-600/50 to-transparent" />
        </div> */}
      </section>

      {/* BANNER */}
      {/* <section className="relative z-10 bg-yellow-500 py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          <p className="font-rajdhani text-xs uppercase tracking-widest text-black font-semibold">
            {Array(12).fill("✦  Premium Beverages & Food · Fresh Ingredients · Crafted with Quality · Launching Soon  ").join("")}
          </p>
        </div>
      </section> */}

      {/* PILLARS */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <RevealSection className="text-center mb-20">
            <p className="font-rajdhani text-xs uppercase tracking-[0.5em] text-yellow-500 mb-4">What We Stand For</p>
            <h2 className="font-display text-4xl md:text-6xl text-amber-50">The Pillars of <em>Altitude</em></h2>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-yellow-600/10">
            {[
              { icon: "⛰", title: "Pure Origins", body: "We use high-quality, pure ingredients to ensure freshness, safety, and great taste in every product." },
              { icon: "🌾", title: "Artisan Grain", body: "Carefully selected ingredients and recipes bring rich flavor, consistency, and quality to all our beverages and food products." },
              { icon: "🏔", title: "Altitude Craft", body: "Our process focuses on hygiene, precision, and innovation to deliver products that meet modern taste and quality standards." },
            ].map((p, i) => (
              <RevealSection key={p.title} delay={i * 150} className="bg-stone-900/80 p-12 text-center hover:bg-stone-900 transition-colors duration-500">
                <div className="text-5xl mb-6">{p.icon}</div>
                <div className="w-8 h-px bg-yellow-600/40 mx-auto mb-6" />
                <h3 className="font-display text-2xl text-amber-50 mb-4">{p.title}</h3>
                <p className="text-amber-50/60 leading-relaxed font-light text-lg">{p.body}</p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative z-10 py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-900/30 to-stone-950" />
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
          <svg viewBox="0 0 800 500" className="w-full max-w-4xl" fill="none" stroke="#C9A84C" strokeWidth="1">
            <polygon points="400,50 100,450 700,450" />
            <polygon points="200,200 50,450 350,450" />
            <polygon points="600,150 450,450 750,450" />
          </svg>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <RevealSection>
            <p className="font-rajdhani text-xs uppercase tracking-[0.5em] text-yellow-500 mb-6">A Message From The Mountains</p>
            <blockquote className="font-display text-3xl md:text-5xl text-amber-50 leading-tight mb-8 italic">
              "Great taste comes from quality ingredients, careful preparation, and a passion for excellence."
            </blockquote>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-yellow-600/50" />
              <span className="text-yellow-500 font-rajdhani text-xs tracking-widest uppercase">The Himalayan Brewery</span>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-yellow-600/50" />
            </div>
            <p className="text-amber-50/55 text-xl leading-relaxed font-light max-w-2xl mx-auto">
              We are dedicated to creating high-quality beverages and food that combine taste, freshness, and innovation — delivering a satisfying experience every time.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-10 py-20 px-6 border-y border-yellow-600/15">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "10+", label: "Product Varieties" },
              { num: "100%", label: "Quality Ingredients" },
              { num: "100%", label: "Hygienic Preparation" },
              { num: "∞", label: "Customer Satisfaction" },
            ].map((s, i) => (
              <RevealSection key={s.label} delay={i * 100} className="text-center">
                <p className="font-display text-4xl md:text-5xl text-yellow-500 mb-2">{s.num}</p>
                <p className="font-rajdhani text-xs uppercase tracking-widest text-amber-50/40">{s.label}</p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <RevealSection>
            <p className="font-rajdhani text-xs uppercase tracking-[0.5em] text-yellow-500 mb-4">Be The First To Know</p>
            <h2 className="font-display text-4xl md:text-6xl text-amber-50 mb-6">Our Products<br /><em>Will Awakens Soon</em></h2>
            <p className="text-amber-50/55 text-xl mb-10 font-light leading-relaxed">Our range of beverages and food products will be available soon. Contact us to stay updated and be the first to try them.</p>
            <Link to="/contact" className="font-rajdhani text-sm uppercase tracking-widest px-12 py-5 bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-colors duration-300 inline-block">
              Contact Us
            </Link>
          </RevealSection>
        </div>
      </section>
    </div>
  );
}
