import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-yellow-600/20 bg-black/80 relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div>
            <p className="font-rajdhani text-xs tracking-[0.4em] text-yellow-500 uppercase mb-1">
              Welcome to
            </p>
            <h2 className="font-display text-2xl text-amber-50 mb-4">
              The Himalayan Brewery
            </h2>
            <p className="text-amber-50/50 text-base leading-relaxed">
              Experience the essence of the Himalayas in every sip. 
              We craft premium beverages using pure ingredients, 
              blending tradition with innovation to deliver bold flavors 
              and unforgettable moments.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-rajdhani text-xs uppercase tracking-widest text-yellow-500 mb-5">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "Our Story" },
                { to: "/contact", label: "Get in Touch" }
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-amber-50/60 hover:text-yellow-500 transition-colors font-light text-base"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-rajdhani text-xs uppercase tracking-widest text-yellow-500 mb-5">
              Contact
            </h3>
            <div className="flex flex-col gap-3 text-amber-50/60 text-base font-light">
              <p>The Himalayan Brewery</p>
              <p>Virar (East), Maharashtra, India</p>
              <a
                href="mailto:ptcvirar@gmail.com"
                className="hover:text-yellow-500 transition-colors"
              >
                ptcvirar@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yellow-600/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-amber-50/30 font-rajdhani text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} The Himalayan Brewery. All rights reserved.
          </p>
          <p className="text-amber-50/20 font-rajdhani text-xs tracking-widest uppercase">
            Pure Ingredients · Crafted at Altitude · Inspired by Nature
          </p>
        </div>
      </div>
    </footer>
  );
}