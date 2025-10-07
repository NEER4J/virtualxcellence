import { ReactElement } from "react";
import { Metadata } from "next";
import { createRuntimePageMetadata } from '@/lib/runtime-seo'
import Header from "@/components/Home/Header";

// Force dynamic rendering - prevents static generation
export const dynamic = 'force-dynamic'
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import FooterSection from "@/components/Home/FooterSection";

export async function generateMetadata(): Promise<Metadata> {
  return createRuntimePageMetadata('/terms-conditions', {
    title: "Terms & Conditions || Virtual Xcellence - AI, Automation & Business Transformation",
    description: "Read Virtual Xcellence's Terms & Conditions. Understand our terms of service, user agreements, and policies for using our digital solutions and services.",
    keywords: [
      "Virtual Xcellence terms and conditions",
      "technology consulting terms",
      "AI automation terms",
      "business transformation terms",
      "cybersecurity terms",
      "cloud consulting terms",
      "fractional CTO terms",
      "fractional CFO terms",
      "business process outsourcing terms",
      "digital transformation terms",
      "technology solutions terms",
      "terms of service",
      "user agreement",
      "legal terms",
      "service agreement",
    ],
    canonicalUrl: "https://virtualxcellence.com/terms-conditions"
  });
}

const TermsConditionsPage = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <main>
        <Breadcrumb
          title="Terms & Conditions"
          subTitle="Virtual Xcellence"
          pageName="TERMS & CONDITIONS"
          subtitle=""
          subtext="Please read these terms and conditions carefully before using our services. By accessing or using Virtual Xcellence services, you agree to be bound by these terms."
        />
        
        <section className="terms-conditions-section section-spacing">
          <div className="container">
            <div className="row">
              <div className="">
                <div className="terms-content">
                  
                  {/* Introduction */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">1. Introduction</h2>
                    <p className="mb-3">
                      Welcome to Virtual Xcellence. These Terms of Service (&quot;Terms&quot;) govern your use of our website, 
                      services, and products operated by Virtual Xcellence (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) located at 
                      28 Church St. Magnetwan ON P0A 1P0 Ontario - Magnetwan.
                    </p>
                    <p className="mb-3">
                      By accessing or using our services, you agree to be bound by these Terms. If you disagree with 
                      any part of these terms, then you may not access our services.
                    </p>
                  </div>

                  {/* Acceptance of Terms */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">2. Acceptance of Terms</h2>
                    <p className="mb-3">
                      By using our services, you confirm that you have read, understood, and agree to be bound by these 
                      Terms and our Privacy Policy. These Terms constitute a legally binding agreement between you and 
                      Virtual Xcellence.
                    </p>
                  </div>

                  {/* Services Description */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">3. Services Description</h2>
                    <p className="mb-3">
                      Virtual Xcellence provides digital solutions, consulting, technology services, and outsourcing 
                      services including but not limited to:
                    </p>
                    <ul className="list-unstyled ms-4">
                      <li className="mb-2">• Digital Solution Development</li>
                      <li className="mb-2">• Technology Consulting</li>
                      <li className="mb-2">• System Integration</li>
                      <li className="mb-2">• Business Process Outsourcing (BPO)</li>
                      <li className="mb-2">• Knowledge Process Outsourcing (KPO)</li>
                      <li className="mb-2">• Training Services (Microsoft, SAP, Oracle, Project Management)</li>
                      <li className="mb-2">• AI & Automation Solutions</li>
                    </ul>
                  </div>

                  {/* User Responsibilities */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">4. User Responsibilities</h2>
                    <p className="mb-3">When using our services, you agree to:</p>
                    <ul className="list-unstyled ms-4">
                      <li className="mb-2">• Provide accurate and complete information</li>
                      <li className="mb-2">• Use our services only for lawful purposes</li>
                      <li className="mb-2">• Respect intellectual property rights</li>
                      <li className="mb-2">• Not interfere with or disrupt our services</li>
                      <li className="mb-2">• Maintain the confidentiality of any login credentials</li>
                      <li className="mb-2">• Comply with all applicable laws and regulations</li>
                    </ul>
                  </div>

                  {/* Service Availability */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">5. Service Availability</h2>
                    <p className="mb-3">
                      We strive to provide continuous service availability, but we do not guarantee uninterrupted access. 
                      Our services may be temporarily unavailable due to:
                    </p>
                    <ul className="list-unstyled ms-4">
                      <li className="mb-2">• Scheduled maintenance and updates</li>
                      <li className="mb-2">• Technical difficulties or system failures</li>
                      <li className="mb-2">• Force majeure events beyond our control</li>
                      <li className="mb-2">• Third-party service dependencies</li>
                    </ul>
                  </div>

                  {/* Intellectual Property */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">6. Intellectual Property Rights</h2>
                    <p className="mb-3">
                      All content, trademarks, and intellectual property on our website and in our services are owned by 
                      Virtual Xcellence or our licensors. You may not use, reproduce, or distribute any content without 
                      our written permission.
                    </p>
                  </div>

                  {/* Limitation of Liability */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">7. Limitation of Liability</h2>
                    <p className="mb-3">
                      To the maximum extent permitted by law, Virtual Xcellence shall not be liable for any indirect, 
                      incidental, special, consequential, or punitive damages, including without limitation, loss of 
                      profits, data, use, goodwill, or other intangible losses.
                    </p>
                  </div>

                  {/* Privacy Policy */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">8. Privacy Policy</h2>
                    <p className="mb-3">
                      Your privacy is important to us. Please review our Privacy Policy, which also governs your use 
                      of our services, to understand our practices.
                    </p>
                  </div>

                  {/* Termination */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">9. Termination</h2>
                    <p className="mb-3">
                      We may terminate or suspend your access to our services immediately, without prior notice or 
                      liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>
                  </div>

                  {/* Changes to Terms */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">10. Changes to Terms</h2>
                    <p className="mb-3">
                      We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                      If a revision is material, we will try to provide at least 30 days notice prior to any new 
                      terms taking effect.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">11. Contact Information</h2>
                    <p className="mb-3">
                      If you have any questions about these Terms & Conditions, please contact us:
                    </p>
                    <div className="contact-info">
                      <p className="mb-2"><strong>Email:</strong> info@virtualxcellence.com</p>
                      <p className="mb-2"><strong>Canada:</strong> +1-905-823-7677</p>
                      <p className="mb-2"><strong>India:</strong> +91-120-4286226</p>
                    </div>
                  </div>

                  {/* Governing Law */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">12. Governing Law</h2>
                    <p className="mb-3">
                      These Terms shall be interpreted and governed by the laws of the State of Ontario, Canada, 
                      without regard to its conflict of law provisions.
                    </p>
                  </div>

                  <div className="terms-footer mt-5 pt-4 border-top">
                    <p className="text-muted">
                      <small>Last updated: {new Date().toLocaleDateString()}</small>
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <FooterSection 
          ctaHeading="Have questions about our terms?"
          buttonLabel="Contact Us"
          buttonLink="/contact"
        />
      </main>
    </div>
  );
};

export default TermsConditionsPage;
