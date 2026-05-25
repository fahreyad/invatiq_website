import "./Footer.css";

const LINKS = {
  Solutions: [
    "Smart POS & Inventory",
    "ERP System",
    "Pharmacy Management",
    "Billing System",
    "Manufacturing",
    "Supply Chain",
    "Dealer Management",
    "HR & Payroll",
  ],
  Company: ["About Us", "Our Team", "Careers", "News & Blog", "Contact Us"],
  Support: [
    "Documentation",
    "Help Center",
    "System Status",
    "Privacy Policy",
    "Terms of Service",
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          {/* Brand */}
          <div className="footer__brand">
            <img src="/logo.svg" alt="InvatiqSoft" className="footer__logo" />
            <p className="footer__brand-text">
              Enterprise software solutions designed to innovate, solve, and
              grow businesses of every size.
            </p>
            <div className="footer__tagline">
              INNOVATE &bull; SOLVE &bull; GROW
            </div>
          </div>

          {/* Links */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading} className="footer__col">
              <h4 className="footer__col-heading">{heading}</h4>
              <ul>
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="footer__link">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} InvatiqSoft. All rights reserved.
          </span>
          <span className="footer__bottom-tag">
            Built with <span className="footer__heart">♥</span> by InvatiqSoft
          </span>
        </div>
      </div>
    </footer>
  );
}
