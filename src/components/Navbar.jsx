import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        {/* Logo — SVG horizontal, adapts for light/dark */}
        <a href="#hero" className="navbar__logo">
          <img
            src="/logo.svg"
            alt="InvatiqSoft"
            className={`logo-img logo-img--${theme}`}
          />
        </a>

        {/* Desktop nav */}
        <nav className="navbar__links">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="navbar__actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            title={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <a href="#contact" className="btn-primary navbar__cta">
            Get Started
          </a>
          <button
            className="hamburger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav className={`mobile-menu${menuOpen ? " mobile-menu--open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="mobile-menu__link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn-primary mobile-menu__cta"
          onClick={() => setMenuOpen(false)}
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}
