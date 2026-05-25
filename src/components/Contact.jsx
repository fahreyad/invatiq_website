import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with your actual form submission logic / API call
    setSent(true);
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="badge">Get in Touch</div>
          <h2 className="section-title">
            Let's Build Something
            <span className="text-gradient"> Great Together</span>
          </h2>
          <p className="section-subtitle">
            Reach out for a free consultation or demo. We'll get back to you
            within one business day.
          </p>
        </div>

        <div className="contact__grid">
          {/* Info cards */}
          <div className="contact__info">
            {[
              { icon: Mail, label: "Email Us", value: "info@invatiqsoft.com" },
              { icon: Phone, label: "Call Us", value: "+000 000 000 000" },
              {
                icon: MapPin,
                label: "Visit Us",
                value: "Our Office, Your City",
              },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="contact__info-card">
                <div className="contact__info-icon">
                  <Icon size={22} />
                </div>
                <div>
                  <div className="contact__info-label">{label}</div>
                  <div className="contact__info-value">{value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="contact__form-wrap">
            {sent ? (
              <div className="contact__success">
                <div className="contact__success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>
                  Thank you for reaching out. Our team will contact you shortly.
                </p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your Company"
                      value={form.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">Service of Interest</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service…</option>
                      <option>Smart POS &amp; Inventory</option>
                      <option>ERP System</option>
                      <option>Pharmacy Management</option>
                      <option>Billing System</option>
                      <option>Manufacturing</option>
                      <option>Supply Chain</option>
                      <option>Dealer Management</option>
                      <option>Accounting, HR &amp; Payroll</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your needs…"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary contact__submit">
                  Send Message <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
