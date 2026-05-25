import { ArrowRight, Play } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Animated background blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__blob hero__blob--3" />

      <div className="container hero__content">
        <div className="hero__text">
          <div className="badge">Trusted Enterprise Software Partner</div>
          <h1 className="hero__title">
            Powering Businesses with
            <span className="hero__title-gradient"> Intelligent Software</span>
          </h1>
          <p className="hero__subtitle">
            From point-of-sale to full-scale ERP, InvatiqSoft delivers modern,
            integrated solutions that streamline operations, reduce costs, and
            accelerate growth across every industry.
          </p>
          <div className="hero__tagline">
            <span>INNOVATE</span>
            <span className="hero__dot">•</span>
            <span>SOLVE</span>
            <span className="hero__dot">•</span>
            <span>GROW</span>
          </div>
          <div className="hero__actions">
            <a href="#contact" className="btn-primary">
              Get a Free Demo <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn-outline">
              <Play size={16} fill="currentColor" /> Explore Services
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card-stack">
            {[
              { icon: "🏪", label: "Smart POS", color: "#0070E0" },
              { icon: "🏭", label: "ERP System", color: "#29ABE2" },
              { icon: "💊", label: "Pharmacy", color: "#0070E0" },
              { icon: "🧾", label: "Billing", color: "#29ABE2" },
              { icon: "🚚", label: "Supply Chain", color: "#0070E0" },
              { icon: "💰", label: "HR & Payroll", color: "#29ABE2" },
            ].map((item, i) => (
              <div
                key={i}
                className="hero__mini-card"
                style={{ "--delay": `${i * 0.15}s`, "--accent": item.color }}
              >
                <span className="hero__mini-icon">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <div className="hero__scroll-line" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
