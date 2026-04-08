import { Link } from "react-router-dom";
import RevealSection from "../components/RevealSection";

export default function About() {
  // const team = [
  //   { name: "Arjun Thapa", role: "Head Brewer & Co-Founder", bio: "A third-generation highland farmer turned master brewer, Arjun spent 12 years studying fermentation traditions across Europe before returning to the Himalayas with a singular vision." },
  //   { name: "Priya Sherpa", role: "Co-Founder & Creative Director", bio: "Born in Darjeeling, Priya brings a deep reverence for Himalayan heritage to every label, story, and sensory experience the brewery creates." },
  //   { name: "Dev Rana", role: "Head of Sourcing", bio: "With intimate knowledge of highland agronomy, Dev works directly with mountain farmers to cultivate the rare grains and botanicals that define our character." },
  // ];

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-15">
          <svg viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
            <defs>
              <linearGradient id="abg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2C3E2D" />
                <stop offset="100%" stopColor="#0D0D0D" />
              </linearGradient>
            </defs>
            <polygon points="0,600 300,200 500,350 720,100 950,280 1200,150 1440,250 1440,600" fill="url(#abg)" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-stone-950" />
        </div>
        <div className="relative">
          <p className="font-rajdhani text-xs uppercase tracking-[0.5em] text-yellow-500 mb-4">Our Story</p>
          <h1 className="font-display text-5xl md:text-7xl text-amber-50 mb-6">Quality<br /><em className="text-yellow-500">You Can Trust</em></h1>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-600/50" />
            <span className="text-yellow-500">✦</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-600/50" />
          </div>
          <p className="text-amber-50/65 text-xl font-light leading-relaxed max-w-2xl mx-auto">
            We are a food and beverage brand focused on delivering high-quality products made with care, consistency, and a passion for great taste.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <RevealSection>
              <p className="font-rajdhani text-xs uppercase tracking-widest text-yellow-500 mb-4">The Beginning</p>
              <h2 className="font-display text-3xl md:text-4xl text-amber-50 mb-6">Our Journey</h2>
              <p className="text-amber-50/65 text-lg leading-relaxed mb-4 font-light">
                Our journey began with a simple goal, to provide fresh, high-quality beverages and food that people can trust and enjoy every day.
              </p>
              <p className="text-amber-50/65 text-lg leading-relaxed font-light">
                Over time, we focused on improving our recipes, sourcing better ingredients, and maintaining high standards to create products that stand out in taste and quality.
              </p>
            </RevealSection>
            <RevealSection delay={200} className="flex justify-center">
              <svg viewBox="0 0 400 350" className="w-full max-w-sm opacity-80">
                <defs>
                  <linearGradient id="mtnFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#2C3E2D" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="snowFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#F5EDD8" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#F5EDD8" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon points="200,30 50,320 350,320" fill="url(#mtnFill)" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.4" />
                <polygon points="200,30 170,110 230,110" fill="url(#snowFill)" />
                <polygon points="80,180 20,320 140,320" fill="url(#mtnFill)" opacity="0.6" />
                <polygon points="320,150 260,320 380,320" fill="url(#mtnFill)" opacity="0.5" />
                <circle cx="200" cy="30" r="3" fill="#C9A84C" opacity="0.8" />
                <text x="200" y="345" textAnchor="middle" fontFamily="Rajdhani, sans-serif" fontSize="11" fill="#C9A84C" opacity="0.6" letterSpacing="4">HIMALAYAN</text>
              </svg>
            </RevealSection>
          </div>

          {/* Philosophy */}
          <div className="border-t border-yellow-600/15 pt-24">
            <RevealSection className="text-center mb-16">
              <p className="font-rajdhani text-xs uppercase tracking-widest text-yellow-500 mb-4">Our Philosophy</p>
              <h2 className="font-display text-3xl md:text-5xl text-amber-50">Our Core Values</h2>
            </RevealSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Quality First", body: "We prioritize quality in everything we do — from selecting ingredients to final production." },
                { title: "Hygiene & Safety", body: "We follow strict hygiene and safety standards to ensure every product is clean, safe, and reliable." },
                { title: "Customer Focus", body: "Our goal is to deliver products that meet customer expectations in taste, freshness, and value." },
              ].map((item, i) => (
                <RevealSection key={item.title} delay={i * 150}>
                  <div className="border border-yellow-600/15 p-8 h-full hover:border-yellow-600/40 transition-colors duration-500">
                    <div className="w-6 h-px bg-yellow-500 mb-5" />
                    <h3 className="font-display text-xl text-amber-50 mb-4">{item.title}</h3>
                    <p className="text-amber-50/55 leading-relaxed font-light text-base">{item.body}</p>
                  </div>
                </RevealSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="py-24 px-6 bg-black/40 relative z-10">
        <div className="max-w-6xl mx-auto">
          <RevealSection className="text-center mb-16">
            <p className="font-rajdhani text-xs uppercase tracking-widest text-yellow-500 mb-4">The People</p>
            <h2 className="font-display text-3xl md:text-5xl text-amber-50">Hands Behind the Brew</h2>
          </RevealSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <RevealSection key={member.name} delay={i * 150} className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-600/20 to-green-900/40 border border-yellow-600/30 flex items-center justify-center mx-auto mb-5">
                  <span className="font-display text-2xl text-yellow-500">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-display text-xl text-amber-50 mb-1">{member.name}</h3>
                <p className="font-rajdhani text-xs uppercase tracking-widest text-yellow-500 mb-4">{member.role}</p>
                <p className="text-amber-50/55 font-light leading-relaxed text-base">{member.bio}</p>
              </RevealSection>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-24 px-6 text-center relative z-10">
        <RevealSection>
          <p className="font-rajdhani text-xs uppercase tracking-widest text-yellow-500 mb-4">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-5xl text-amber-50 mb-6">Contact Us for More Information</h2>
          <Link to="/contact" className="font-rajdhani text-sm uppercase tracking-widest px-10 py-4 bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition-colors duration-300 inline-block">
            Contact Us
          </Link>
        </RevealSection>
      </section>
    </div>
  );
}
