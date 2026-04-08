import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); window.scrollTo(0, 0); }, [pathname]);

  const links = [{ to: "/", label: "Home" }, { to: "/about", label: "About" }, { to: "/contact", label: "Contact" }];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3 bg-black/95 backdrop-blur-md border-b border-yellow-600/20" : "py-6 bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" style={{ textDecoration: 'none', lineHeight: 1, display: 'flex', alignItems: 'center' }}>
            <img
              src="/Logo.png"
              style={{
                height: '100%',
                maxHeight: 56,
                width: 'auto',
                objectFit: 'contain',
                opacity: scrolled ? 0.9 : 1,
                transition: 'opacity 0.3s ease'
              }}
              alt='Logo'
            />
          </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map(link => (
            <Link key={link.to} to={link.to}
              className={`nav-link font-rajdhani text-sm uppercase tracking-widest transition-colors duration-300 ${pathname === link.to ? "text-yellow-500" : "text-amber-50/80 hover:text-yellow-500"}`}>
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="font-rajdhani text-xs uppercase tracking-widest px-5 py-2 border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black transition-all duration-300">
            Shop Soon
          </Link>
        </div>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`block w-6 h-px bg-yellow-500 transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-px bg-yellow-500 transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-px bg-yellow-500 transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      <div className={`md:hidden transition-all duration-500 overflow-hidden ${menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-black/98 border-t border-yellow-600/20 px-6 py-6 flex flex-col gap-5">
          {links.map(link => (
            <Link key={link.to} to={link.to} className="font-rajdhani text-sm uppercase tracking-widest text-amber-50/80 hover:text-yellow-500 transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
