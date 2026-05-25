import {
  BarChart3,
  Calculator,
  Factory,
  Handshake,
  Pill,
  Receipt,
  ShoppingCart,
  Truck,
} from "lucide-react";
import "./Services.css";

const SERVICES = [
  {
    icon: ShoppingCart,
    title: "Smart POS & Inventory",
    description:
      "Next-generation point-of-sale with real-time inventory tracking, barcode scanning, multi-branch sync, and intelligent stock alerts.",
    tags: ["Retail", "Multi-branch", "Real-time"],
    color: "#0070E0",
  },
  {
    icon: BarChart3,
    title: "ERP System",
    description:
      "Unify every department — finance, operations, HR, and procurement — into a single, powerful Enterprise Resource Planning platform.",
    tags: ["Enterprise", "Modules", "Scalable"],
    color: "#29ABE2",
  },
  {
    icon: Pill,
    title: "Pharmacy Management",
    description:
      "End-to-end pharmacy solution covering drug inventory, expiry tracking, prescriptions, insurance billing, and regulatory compliance.",
    tags: ["Healthcare", "Compliance", "Prescriptions"],
    color: "#0070E0",
  },
  {
    icon: Receipt,
    title: "Billing System",
    description:
      "Automated invoicing, multi-currency support, tax management, payment gateway integrations, and real-time financial reporting.",
    tags: ["Invoicing", "Multi-currency", "Reports"],
    color: "#29ABE2",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "From bill of materials to production scheduling, quality control, and machine utilization — manage your entire shop floor digitally.",
    tags: ["BOM", "Production", "Quality Control"],
    color: "#0070E0",
  },
  {
    icon: Truck,
    title: "Supply Chain",
    description:
      "Gain end-to-end visibility across procurement, warehousing, logistics, and delivery with powerful supply chain orchestration tools.",
    tags: ["Logistics", "Procurement", "Warehousing"],
    color: "#29ABE2",
  },
  {
    icon: Handshake,
    title: "Dealer Management",
    description:
      "Streamline dealer onboarding, price lists, order management, commissions, and performance dashboards for your distribution network.",
    tags: ["Distribution", "Commissions", "Orders"],
    color: "#0070E0",
  },
  {
    icon: Calculator,
    title: "Accounting, HR & Payroll",
    description:
      "Integrated double-entry accounting, leave management, employee records, automated payroll processing, and statutory compliance.",
    tags: ["Finance", "HR", "Payroll"],
    color: "#29ABE2",
  },
];

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-header">
          <div className="badge">Our Solutions</div>
          <h2 className="section-title">
            Everything Your Business Needs,
            <span className="text-gradient"> One Platform</span>
          </h2>
          <p className="section-subtitle">
            Eight powerful modules. Seamlessly integrated. Built to scale with
            you.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={i}
                className="service-card"
                style={{ "--svc-color": svc.color, "--delay": `${i * 0.08}s` }}
              >
                <div className="service-card__icon-wrap">
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <h3 className="service-card__title">{svc.title}</h3>
                <p className="service-card__desc">{svc.description}</p>
                <div className="service-card__tags">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="service-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="service-card__arrow">→</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
