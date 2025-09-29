import { ReactElement } from "react";
import { Metadata } from "next";
import { generateSeoMetadata } from '@/lib/seo'
import Header from "@/components/Home/Header";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import FooterSection from "@/components/Home/FooterSection";

export async function generateMetadata(): Promise<Metadata> {
  const fallbackMetadata: Metadata = {
    title: "Refund Policy || Virtual Xcellence - AI, Automation & Business Transformation",
    description:
      "Read Virtual Xcellence's Refund Policy. Learn about our return and refund terms for products and services, including eligibility, timeframes, and process.",
    keywords: [
      "Virtual Xcellence refund policy",
      "technology consulting refund policy",
      "AI automation refund policy",
      "business transformation refund policy",
      "cybersecurity refund policy",
      "cloud consulting refund policy",
      "fractional CTO refund policy",
      "fractional CFO refund policy",
      "business process outsourcing refund policy",
      "digital transformation refund policy",
      "technology solutions refund policy",
      "return policy",
      "refund terms",
      "money back guarantee",
      "return process",
    ],
    creator: "Virtual Xcellence",
    other: {
      developer: "Virtual Xcellence",
      section: "Refund Policy Page",
    },
  };

  return generateSeoMetadata('/refund-policy', fallbackMetadata);
}

const RefundPolicyPage = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <main>
        <Breadcrumb
          title="Refund Policy"
          subTitle="Virtual Xcellence"
          pageName="REFUND POLICY"
          subtitle=""
          subtext="We want you to be completely satisfied with your purchase. This policy outlines our return and refund terms for products and services."
        />
        
        <section className="refund-policy-section section-spacing">
          <div className="container">
            <div className="row">
              <div className="">
                <div className="refund-content">
                  
                  {/* Introduction */}
                  <div className="refund-section mb-5">
                    <h2 className="section-title mb-4">1. Introduction</h2>
                    <p className="mb-3">
                      At Virtual Xcellence, we strive to provide high-quality products and services that meet your expectations. 
                      This Refund Policy outlines the terms and conditions for returns and refunds for products and services 
                      purchased through our platform.
                    </p>
                    <p className="mb-3">
                      Please read this policy carefully before making a purchase. By purchasing our products or services, 
                      you agree to the terms outlined in this Refund Policy.
                    </p>
                  </div>

                  {/* General Return Policy */}
                  <div className="refund-section mb-5">
                    <h2 className="section-title mb-4">2. General Return Policy</h2>
                    <p className="mb-3">
                      We will accept returns and exchanges for eligible products for <strong>30 days</strong> from the date 
                      of purchase or download, as applicable. To be eligible for a return:
                    </p>
                    <ul className="list-unstyled ms-4">
                      <li className="mb-2">• The product must be returned in like-new condition</li>
                      <li className="mb-2">• All original packaging, parts, and components must be included</li>
                      <li className="mb-2">• Instruction manuals and documentation must be returned</li>
                      <li className="mb-2">• The return must be initiated within the 30-day window</li>
                    </ul>
                  </div>

                  {/* Software Returns */}
                  <div className="refund-section mb-5">
                    <h2 className="section-title mb-4">3. Software and Digital Products</h2>
                    <p className="mb-3">
                      For packaged software and digital products:
                    </p>
                    <ul className="list-unstyled ms-4">
                      <li className="mb-2">• Packaged software must be returned with seal intact</li>
                      <li className="mb-2">• All media and product keys must be included</li>
                      <li className="mb-2">• Opened software may be returned if you&apos;re unsatisfied with the license agreement</li>
                      <li className="mb-2">• No copies of the software may be made or retained</li>
                    </ul>
                  </div>

                  {/* Non-Refundable Items */}
                  <div className="refund-section mb-5">
                    <h2 className="section-title mb-4">4. Non-Refundable Items</h2>
                    <p className="mb-3">
                      The following items are <strong>not eligible for return or refund</strong> unless otherwise provided by law:
                    </p>
                    <ul className="list-unstyled ms-4">
                      <li className="mb-2">• Digital apps, games, and in-app content</li>
                      <li className="mb-2">• Subscriptions and recurring services</li>
                      <li className="mb-2">• Consulting services that have been performed</li>
                      <li className="mb-2">• Special order products (unless part of a promotional offering)</li>
                      <li className="mb-2">• Services that have been consumed or delivered</li>
                      <li className="mb-2">• Custom-developed solutions</li>
                    </ul>
                  </div>

                  {/* Refund Process */}
                  <div className="refund-section mb-5">
                    <h2 className="section-title mb-4">5. Refund Process</h2>
                    <p className="mb-3">
                      To initiate a return or request a refund:
                    </p>
                    <ol className="ms-4">
                      <li className="mb-2">Contact our customer service team at support@virtualxcellence.com</li>
                      <li className="mb-2">Provide your order number and reason for return</li>
                      <li className="mb-2">Follow the return instructions provided by our team</li>
                      <li className="mb-2">Package the item securely with all original components</li>
                      <li className="mb-2">Ship the item to the address provided by our team</li>
                    </ol>
                  </div>

                  {/* Refund Timeline */}
                  <div className="refund-section mb-5">
                    <h2 className="section-title mb-4">6. Refund Timeline</h2>
                    <p className="mb-3">
                      Once we receive your returned item and verify it meets our return criteria:
                    </p>
                    <ul className="list-unstyled ms-4">
                      <li className="mb-2">• Refunds will be processed within 3-5 business days</li>
                      <li className="mb-2">• Refunds will be credited to the original payment method</li>
                      <li className="mb-2">• Original shipping charges may be deducted (except for warranty/license issues)</li>
                      <li className="mb-2">• You will receive email confirmation once the refund is processed</li>
                    </ul>
                  </div>

                  {/* Exchanges */}
                  <div className="refund-section mb-5">
                    <h2 className="section-title mb-4">7. Exchanges</h2>
                    <p className="mb-3">
                      We offer exchanges for eligible products within the same 30-day return window. Exchange requests 
                      are subject to product availability and may require additional payment if the replacement item 
                      has a higher value.
                    </p>
                  </div>

                  {/* Damaged or Defective Items */}
                  <div className="refund-section mb-5">
                    <h2 className="section-title mb-4">8. Damaged or Defective Items</h2>
                    <p className="mb-3">
                      If you receive a damaged or defective item:
                    </p>
                    <ul className="list-unstyled ms-4">
                      <li className="mb-2">• Contact us immediately at support@virtualxcellence.com</li>
                      <li className="mb-2">• Provide photos of the damage or defect</li>
                      <li className="mb-2">• We will arrange for a replacement or full refund</li>
                      <li className="mb-2">• Return shipping costs will be covered by Virtual Xcellence</li>
                    </ul>
                  </div>

                  {/* Statutory Rights */}
                  <div className="refund-section mb-5">
                    <h2 className="section-title mb-4">9. Your Statutory Rights</h2>
                    <p className="mb-3">
                      This Refund Policy does not affect your statutory rights as a consumer. You may have additional 
                      rights under applicable consumer protection laws that cannot be excluded or limited by this policy.
                    </p>
                  </div>

                  {/* International Returns */}
                  <div className="refund-section mb-5">
                    <h2 className="section-title mb-4">10. International Returns</h2>
                    <p className="mb-3">
                      For international customers, return shipping costs are the responsibility of the customer unless 
                      the return is due to our error or a defective product. Customs duties and taxes are non-refundable.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="refund-section mb-5">
                    <h2 className="section-title mb-4">11. Contact Us</h2>
                    <p className="mb-3">
                      If you have any questions about our Refund Policy or need assistance with a return, please contact us:
                    </p>
                    <div className="contact-info">
                      <p className="mb-2"><strong>Email:</strong> support@virtualxcellence.com</p>
                      <p className="mb-2"><strong>Canada:</strong> +1-905-823-7677</p>
                      <p className="mb-2"><strong>India:</strong> +91-120-4286226</p>
                    </div>
                  </div>

                  <div className="refund-footer mt-5 pt-4 border-top">
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
          ctaHeading="Need help with a return or refund?"
          buttonLabel="Contact Support"
          buttonLink="/contact"
        />
      </main>
    </div>
  );
};

export default RefundPolicyPage;
