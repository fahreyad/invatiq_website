import { CheckCircle2 } from "lucide-react";
import "./About.css";

const HIGHLIGHTS = [
  "Cloud-ready & on-premise deployments",
  "Modular architecture — adopt what you need",
  "Dedicated implementation & support team",
  "Regular updates and feature releases",
  "Arabic & multilingual UI support",
  "Role-based access & data security",
];

export default function About() {
  return (
    <section className="section section-alt" id="about">
      <div className="container about__grid">
        {/* Visual */}
        <div className="about__visual">
          <div className="about__logo-box">
            <img src="/logo.svg" alt="InvatiqSoft" className="about__logo" />
            <p className="about__tagline">INNOVATE &bull; SOLVE &bull; GROW</p>
          </div>
          <div className="about__stat-pills">
            {[
              { value: "8+", label: "Product Modules" },
              { value: "500+", label: "Clients Served" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "24/7", label: "Support" },
            ].map((s) => (
              <div key={s.label} className="about__pill">
                <span className="about__pill-value">{s.value}</span>
                <span className="about__pill-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Text */}
        <div className="about__text">
          <div className="badge">Who We Are</div>
          <h2 className="section-title" style={{ textAlign: "left" }}>
            Built by Experts.
            <span className="text-gradient"> Driven by Innovation.</span>
          </h2>
          <p className="about__para">
            InvatiqSoft is a technology company dedicated to building
            enterprise-grade business software that is accessible, practical,
            and future-ready. We partner with businesses of all sizes — from
            growing SMEs to large enterprises — delivering solutions that
            genuinely transform operations.
          </p>
          <p className="about__para">
            Our team of experienced engineers, consultants, and support
            specialists works closely with every client to ensure successful
            deployment and long-term ROI.
          </p>
          <ul className="about__highlights">
            {HIGHLIGHTS.map((h) => (
              <li key={h}>
                <CheckCircle2 size={18} className="about__check" />
                {h}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn-primary"
            style={{ marginTop: "32px" }}
          >
            Talk to Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
