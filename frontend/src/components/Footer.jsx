import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Courses", path: "/courses" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Internship", path: "/internship" },
  { label: "Contact", path: "/contact" },
];

const services = [
  "Website Development",
  "App Development",
  "Digital Marketing",
  "Data Science",
  "Video Editing",
  "IT Training",
];

const socials = [
  { label: "Instagram", text: "ig", url: "https://www.instagram.com/" },
  { label: "LinkedIn", text: "in", url: "https://www.linkedin.com/" },
  { label: "Facebook", text: "f", url: "https://www.facebook.com/" },
  { label: "YouTube", text: "▶", url: "https://www.youtube.com/" },
];

function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="ks-footer">
      <div className="ks-footer-container">
        <div className="ks-footer-grid">
          {/* BRAND */}
          <section className="ks-footer-brand">
            <Link
              to="/"
              className="ks-footer-logo"
              aria-label="KSquare Softtech home"
            >
              <span className="ks-footer-logo-mark">K</span>

              <span className="ks-footer-logo-text">
                <strong>KSQUARE</strong>
                <small>SOFTTECH</small>
              </span>
            </Link>

            <p className="ks-footer-tagline">Learn Skills. Build Careers.</p>

            <p className="ks-footer-description">
              We help businesses grow with modern digital solutions and empower
              students through practical IT training and career-focused
              learning.
            </p>

            <div className="ks-footer-socials">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  title={social.label}
                >
                  {social.text}
                </a>
              ))}
            </div>
          </section>

          {/* QUICK LINKS */}
          <nav className="ks-footer-column">
            <h3>Quick Links</h3>

            <ul>
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link to={item.path}>
                    <span className="ks-footer-arrow" aria-hidden="true">
                      ↗
                    </span>
                    <span className="ks-footer-link-text">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* SERVICES */}
          <nav className="ks-footer-column">
            <h3>Our Services</h3>

            <ul>
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services">
                    <span className="ks-footer-arrow" aria-hidden="true">
                      ↗
                    </span>
                    <span className="ks-footer-link-text">{service}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CONTACT */}
          <section className="ks-footer-column ks-footer-contact">
            <h3>Get In Touch</h3>

            <a className="ks-footer-contact-item" href="tel:+91 88077 54570">
              <span className="ks-footer-contact-icon" aria-hidden="true">
                ☎
              </span>

              <span className="ks-footer-contact-info">
                <span className="ks-footer-contact-label">Call Us</span>
                <span className="ks-footer-contact-value">+91 88077 54570</span>
              </span>
            </a>

            <a
              className="ks-footer-contact-item"
              href="mailto:info@ksquaresofttech.org"
            >
              <span className="ks-footer-contact-icon" aria-hidden="true">
                @
              </span>

              <span className="ks-footer-contact-info">
                <span className="ks-footer-contact-label">Email Us</span>
                <span className="ks-footer-contact-value">
                  info@ksquaresofttech.org
                </span>
              </span>
            </a>

            <div className="ks-footer-contact-item">
              <span className="ks-footer-contact-icon" aria-hidden="true">
                ⌖
              </span>

              <span className="ks-footer-contact-info">
                <span className="ks-footer-contact-label">Our Location</span>
                <span className="ks-footer-contact-value">
                  Sri Krishna Building, 80/2, Chinthamanipudur, Coimbatore,
                  Pallapalayam, Tamil Nadu 641103
                </span>
              </span>
            </div>

            <a
              className="ks-footer-whatsapp"
              href="https://wa.me/918807754570"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ks-footer-whatsapp-icon" aria-hidden="true">
                ◉
              </span>
              <span className="ks-footer-whatsapp-text">Chat on WhatsApp</span>
              <span className="ks-footer-whatsapp-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </section>
        </div>

        {/* CTA */}
        <div className="ks-footer-cta">
          <div className="ks-footer-cta-content">
            <span className="ks-footer-cta-label">HAVE A PROJECT IN MIND?</span>

            <h3>Let's build something great together.</h3>

            <p>Tell us about your idea. Let's find the right solution.</p>
          </div>

          <Link to="/contact" className="ks-footer-cta-button">
            <span>Contact Our Team</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="ks-footer-bottom">
        <div className="ks-footer-bottom-inner">
          <p>
            © {year} <strong>KSquare Softtech</strong>. All rights reserved.
          </p>

          <span className="ks-footer-bottom-tagline">
            Learn Skills. Build Careers.
          </span>

          <a href="#top" className="ks-footer-back-top" onClick={scrollToTop}>
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
