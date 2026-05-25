import { Globe, HeadphonesIcon, Shield, Zap } from "lucide-react";
import "./WhyUs.css";

const REASONS = [
  {
    icon: Zap,
    title: "Fast Implementation",
    description:
      "Get up and running in days, not months. Our structured onboarding process minimizes disruption.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Role-based access control, end-to-end encryption, and audit logs keep your data safe.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Round-the-clock technical support from a dedicated team that knows your business.",
  },
  {
    icon: Globe,
    title: "Multi-language & Cloud",
    description:
      "Arabic, English and more. Deploy on-premise or in the cloud — your choice.",
  },
];

export default function WhyUs() {
  return (
    <section className="section" id="why-us">
      <div className="container">
        <div className="section-header">
          <div className="badge">Why InvatiqSoft</div>
          <h2 className="section-title">
            The Partner That
            <span className="text-gradient"> Goes the Extra Mile</span>
          </h2>
          <p className="section-subtitle">
            We don't just deliver software — we deliver outcomes.
          </p>
        </div>

        <div className="why-grid">
          {REASONS.map((r, i) => {
            const Icon = r.icon;
            return (
              <div
                key={i}
                className="why-card"
                style={{ "--delay": `${i * 0.1}s` }}
              >
                <div className="why-card__icon">
                  <Icon size={28} strokeWidth={1.7} />
                </div>
                <h3 className="why-card__title">{r.title}</h3>
                <p className="why-card__desc">{r.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA banner */}
        <div className="cta-banner">
          <div className="cta-banner__text">
            <h3>Ready to transform your business?</h3>
            <p>
              Schedule a free, no-obligation demo with our solutions team today.
            </p>
          </div>
          <div className="cta-banner__actions">
            <a
              href="https://pos.invatiqsoft.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Try POS Demo
            </a>
            <a
              href="tel:+8801672260365"
              className="btn-outline"
              style={{ background: "transparent" }}
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
