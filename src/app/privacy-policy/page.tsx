import { ReactElement } from "react";
import { Metadata } from "next";
import { generateSeoMetadata } from '@/lib/seo'
import Header from "@/components/Home/Header";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import FooterSection from "@/components/Home/FooterSection";

export async function generateMetadata(): Promise<Metadata> {
  const fallbackMetadata: Metadata = {
    title: "Privacy Policy || Virtual Xcellence - AI, Automation & Business Transformation",
    description:
      "Read Virtual Xcellence's Privacy Policy. Learn how we collect, use, and protect your personal information when you use our digital solutions and services.",
    keywords: [
      "Virtual Xcellence privacy policy",
      "technology consulting privacy policy",
      "AI automation privacy policy",
      "business transformation privacy policy",
      "cybersecurity privacy policy",
      "cloud consulting privacy policy",
      "fractional CTO privacy policy",
      "fractional CFO privacy policy",
      "business process outsourcing privacy policy",
      "digital transformation privacy policy",
      "technology solutions privacy policy",
      "data protection",
      "privacy statement",
      "personal information",
      "data collection",
    ],
    creator: "Virtual Xcellence",
    other: {
      developer: "Virtual Xcellence",
      section: "Privacy Policy Page",
    },
  };

  return generateSeoMetadata('/privacy-policy', fallbackMetadata);
}

const PrivacyPolicyPage = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <main>
        <Breadcrumb
          title="Privacy Policy"
          subTitle="Virtual Xcellence"
          pageName="PRIVACY POLICY"
          subtitle=""
          subtext="We are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data."
        />
        
        <section className="privacy-policy-section section-spacing">
          <div className="container">
            <div className="row">
              <div className="">
                <div className="privacy-content">
                  
                  {/* Introduction */}
                  <div className="privacy-section mb-5">
                    <h2 className="section-title mb-4">1. Introduction</h2>
                    <p className="mb-3">
                      Virtual Xcellence (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy 
                      explains how we collect, use, disclose, and safeguard your information when you visit our website 
                      or use our services.
                    </p>
                    <p className="mb-3">
                      Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, 
                      please do not access our services.
                    </p>
                  </div>

                  {/* Information We Collect */}
                  <div className="privacy-section mb-5">
                    <h2 className="section-title mb-4">2. Information We Collect</h2>
                    
                    <h3 className="subsection-title mb-3">2.1 Personal Information</h3>
                    <p className="mb-3">We may collect personal information that you voluntarily provide to us, including:</p>
                    <ul className="list-unstyled ms-4">
                      <li className="mb-2">• Name and contact information (email, phone number, address)</li>
                      <li className="mb-2">• Company information and job title</li>
                      <li className="mb-2">• Payment and billing information</li>
                      <li className="mb-2">• Communication preferences</li>
                      <li className="mb-2">• Any other information you choose to provide</li>
                    </ul>

                    <h3 className="subsection-title mb-3">2.2 Automatically Collected Information</h3>
                    <p className="mb-3">We may automatically collect certain information when you use our services:</p>
                    <ul className="list-unstyled ms-4">
                      <li className="mb-2">• IP address and device information</li>
                      <li className="mb-2">• Browser type and version</li>
                      <li className="mb-2">• Operating system</li>
                      <li className="mb-2">• Website usage data and analytics</li>
                      <li className="mb-2">• Cookies and similar tracking technologies</li>
                    </ul>
                  </div>

                  {/* How We Use Information */}
                  <div className="privacy-section mb-5">
                    <h2 className="section-title mb-4">3. How We Use Your Information</h2>
                    <p className="mb-3">We use the information we collect for various purposes, including:</p>
                    <ul className="list-unstyled ms-4">
                      <li className="mb-2">• Providing and maintaining our services</li>
                      <li className="mb-2">• Processing transactions and payments</li>
                      <li className="mb-2">• Communicating with you about our services</li>
                      <li className="mb-2">• Improving our website and services</li>
                      <li className="mb-2">• Sending marketing communications (with your consent)</li>
                      <li className="mb-2">• Complying with legal obligations</li>
                      <li className="mb-2">• Protecting our rights and preventing fraud</li>
                    </ul>
                  </div>

                  {/* Information Sharing */}
                  <div className="privacy-section mb-5">
                    <h2 className="section-title mb-4">4. Information Sharing and Disclosure</h2>
                    <p className="mb-3">We may share your information in the following circumstances:</p>
                    <ul className="list-unstyled ms-4">
                      <li className="mb-2">• With your explicit consent</li>
                      <li className="mb-2">• With service providers who assist us in operating our business</li>
                      <li className="mb-2">• To comply with legal obligations or court orders</li>
                      <li className="mb-2">• To protect our rights, property, or safety</li>
                      <li className="mb-2">• In connection with a business transfer or merger</li>
                    </ul>
                    <p className="mb-3">
                      We do not sell, trade, or rent your personal information to third parties for marketing purposes.
                    </p>
                  </div>

                  {/* Data Security */}
                  <div className="privacy-section mb-5">
                    <h2 className="section-title mb-4">5. Data Security</h2>
                    <p className="mb-3">
                      We implement appropriate technical and organizational security measures to protect your personal 
                      information against unauthorized access, alteration, disclosure, or destruction. However, no method 
                      of transmission over the internet or electronic storage is 100% secure.
                    </p>
                  </div>

                  {/* Cookies and Tracking */}
                  <div className="privacy-section mb-5">
                    <h2 className="section-title mb-4">6. Cookies and Tracking Technologies</h2>
                    <p className="mb-3">
                      We use cookies and similar tracking technologies to enhance your experience on our website. 
                      You can control cookie settings through your browser preferences.
                    </p>
                    <p className="mb-3">
                      Types of cookies we use:
                    </p>
                    <ul className="list-unstyled ms-4">
                      <li className="mb-2">• Essential cookies (required for website functionality)</li>
                      <li className="mb-2">• Analytics cookies (help us understand website usage)</li>
                      <li className="mb-2">• Marketing cookies (used for targeted advertising)</li>
                    </ul>
                  </div>

                  {/* Your Rights */}
                  <div className="privacy-section mb-5">
                    <h2 className="section-title mb-4">7. Your Privacy Rights</h2>
                    <p className="mb-3">Depending on your location, you may have the following rights:</p>
                    <ul className="list-unstyled ms-4">
                      <li className="mb-2">• Access to your personal information</li>
                      <li className="mb-2">• Correction of inaccurate information</li>
                      <li className="mb-2">• Deletion of your personal information</li>
                      <li className="mb-2">• Restriction of processing</li>
                      <li className="mb-2">• Data portability</li>
                      <li className="mb-2">• Objection to processing</li>
                      <li className="mb-2">• Withdrawal of consent</li>
                    </ul>
                  </div>

                  {/* Data Retention */}
                  <div className="privacy-section mb-5">
                    <h2 className="section-title mb-4">8. Data Retention</h2>
                    <p className="mb-3">
                      We retain your personal information only for as long as necessary to fulfill the purposes outlined 
                      in this Privacy Policy, unless a longer retention period is required or permitted by law.
                    </p>
                  </div>

                  {/* International Transfers */}
                  <div className="privacy-section mb-5">
                    <h2 className="section-title mb-4">9. International Data Transfers</h2>
                    <p className="mb-3">
                      Your information may be transferred to and processed in countries other than your own. We ensure 
                      that such transfers comply with applicable data protection laws and implement appropriate safeguards.
                    </p>
                  </div>

                  {/* Children's Privacy */}
                  <div className="privacy-section mb-5">
                    <h2 className="section-title mb-4">10. Children&apos;s Privacy</h2>
                    <p className="mb-3">
                      Our services are not intended for children under 13 years of age. We do not knowingly collect 
                      personal information from children under 13. If you are a parent or guardian and believe your 
                      child has provided us with personal information, please contact us.
                    </p>
                  </div>

                  {/* Changes to Privacy Policy */}
                  <div className="privacy-section mb-5">
                    <h2 className="section-title mb-4">11. Changes to This Privacy Policy</h2>
                    <p className="mb-3">
                      We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                      the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="privacy-section mb-5">
                    <h2 className="section-title mb-4">12. Contact Us</h2>
                    <p className="mb-3">
                      If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                    </p>
                    <div className="contact-info">
                      <p className="mb-2"><strong>Email:</strong> info@virtualxcellence.com</p>
                      <p className="mb-2"><strong>Canada:</strong> +1-905-823-7677</p>
                      <p className="mb-2"><strong>United States:</strong> +1-702-537-0123</p>
                      <p className="mb-2"><strong>India:</strong> +91-120-4286226</p>
                      <p className="mb-2"><strong>Address:</strong> 3900 Ravine Hollow Ct. Maumee, Ohio, 43537, USA</p>
                    </div>
                  </div>

                  <div className="privacy-footer mt-5 pt-4 border-top">
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
          ctaHeading="Questions about your privacy?"
          buttonLabel="Contact Us"
          buttonLink="/contact"
        />
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
