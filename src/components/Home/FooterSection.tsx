import Link from "next/link";

interface FooterProps {
  data?: unknown;
  ctaHeading?: string;
  buttonLabel?: string;
  buttonLink?: string;
}
const FooterSection:React.FC<FooterProps> = ({ 
  ctaHeading = "Transform Your Business Into a Digital Powerhouse",
  buttonLabel = "Contact Us",
  buttonLink = "/contact"
}) => {
  return (
    <footer className="footer-area-2">
      <div className="area-bg" style={{display: 'none'}}>
        <img src="/assets/imgs/shape/shape-42.webp" alt="image" />
      </div>

      <div className="cta-area fade-anim" suppressHydrationWarning={true}>
        <div className="container">
          <div className="cta-area-inner">
            <div className="section-header">
              <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
               
                <div className="title-wrapper">
                  <h2 className="section-title">{ctaHeading}</h2>
                </div>
              </div>
              <div className="btn-wrapper fade-anim" suppressHydrationWarning={true}>
                <div className="t-btn-group">
                  <Link className="t-btn t-btn-circle" href={buttonLink}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link className="t-btn t-btn-primary" href={buttonLink}>
                    {buttonLabel}
                  </Link>
                  <Link className="t-btn t-btn-circle" href={buttonLink}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer-widget-wrapper-box">
          <div className="footer-widget-wrapper">

            {/* Logo + description + socials */}
            <div className="footer-widget-box">
              <div className="info-box">
                <div className="footer-logo">
                  <Link href="/">
                    <img src="/assets/imgs/logo/VX-Logo.png" alt="site logo" />
                  </Link>
                </div>
                <div className="text-wrapper">
                  <p className="text">Virtual Xcellence is a Canada-based technology and consulting company helping organizations transform their operations with AI, automation, cloud, and business innovation.</p>
                </div>
                <div className="social-links">
                  <Link target="_blank" href="https://www.facebook.com/vxcellence/">
                    <i className="fa-brands fa-facebook-f"></i>
                  </Link>
                  <Link target="_blank" href="https://twitter.com/vxinnovation">
                    <i className="fa-brands fa-twitter"></i>
                  </Link>
                  <Link target="_blank" href="https://www.linkedin.com/company/virtualxcellence/">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-widget-box">
              <h2 className="title">Services</h2>
              <ul className="footer-nav-list">
              <li><Link href="/services/cybersecurity">Cybersecurity</Link></li>
                <li><Link href="/services/development">Development</Link></li>
                <li><Link href="/services/consultation">Consultation</Link></li>
                <li><Link href="/services/fractional-cto">Fractional CTO</Link></li>
                <li><Link href="/services/fractional-cfo">Fractional CFO</Link></li>
                <li><Link href="/services/business-transformation">Business Transformation</Link></li>
                <li><Link href="/services/ai-automation">AI & Automation</Link></li>
                <li><Link href="/services/cloud-infrastructure">Cloud & Infrastructure</Link></li>
                <li><Link href="/services/business-process-outsourcing">Business Process Outsourcing</Link></li>
              </ul>
            </div>

            {/* Company Info */}
            <div className="footer-widget-box">
              <h2 className="title">Company Info</h2>
              <ul className="footer-nav-list">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-widget-box">
              <h2 className="title">Contact Us</h2>
              <ul className="footer-nav-list contact">
                <li>
                  <span className="nav-title">Canada</span>
                  <Link href="tel:+19058237677">+1-905-823-7677</Link>
                </li>
                <li>
                  <span className="nav-title">United States</span>
                  <Link href="tel:+17025370123">1-(702) 537-0123</Link>
                </li>
                <li>
                  <span className="nav-title">India</span>
                  <Link href="tel:+911204286226">+91-120-4286226</Link>
                </li>
                <li>
                  <span className="nav-title">Email</span>
                  <Link href="mailto:info@virtualxcellence.com">info@virtualxcellence.com</Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="copyright-area-inner">
            <div className="copyright-text">
              <p className="text">
                Copyright © 2025{" "}
                <Link href="#">
                  Virtual Xcellence
                </Link>. All rights reserved.
              </p>
            </div>
            <ul className="copyright-nav-list">
              <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link href="/terms-of-sale">Terms of Sale</Link></li>
              <li><Link href="/refund-policy">Refund Policy</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/sitemap">Sitemap</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
