import { ReactElement } from "react";
import { Metadata } from "next";
import { generateSeoMetadata } from '@/lib/seo'
import Header from "@/components/Home/Header";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import FooterSection from "@/components/Home/FooterSection";

export async function generateMetadata(): Promise<Metadata> {
  const fallbackMetadata: Metadata = {
    title: "Terms of Sale || Virtual Xcellence - AI, Automation & Business Transformation",
    description:
      "Read Virtual Xcellence's Terms of Sale for online and retail stores. Understand our terms for purchasing products, services, and digital content.",
    keywords: [
      "Virtual Xcellence terms of sale",
      "technology consulting purchase terms",
      "AI automation purchase terms",
      "business transformation purchase terms",
      "cybersecurity purchase terms",
      "cloud consulting purchase terms",
      "fractional CTO purchase terms",
      "fractional CFO purchase terms",
      "business process outsourcing purchase terms",
      "digital transformation purchase terms",
      "technology solutions purchase terms",
      "online store terms",
      "retail terms",
      "purchase terms",
      "e-commerce terms",
    ],
    creator: "Virtual Xcellence",
    other: {
      developer: "Virtual Xcellence",
      section: "Terms of Sale Page",
    },
  };

  return generateSeoMetadata('/terms-of-sale', fallbackMetadata);
}

const TermsOfSalePage = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <main>
        <Breadcrumb
          title="Terms of Sale"
          subTitle="Virtual Xcellence"
          pageName="TERMS OF SALE"
          subtitle=""
          subtext="These Terms of Sale govern your use of our online and retail stores, and the purchase of products and services from Virtual Xcellence."
        />
        
        <section className="terms-of-sale-section section-spacing">
          <div className="container">
            <div className="row">
              <div className="">
                <div className="terms-sale-content">
                  
                  {/* Introduction */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">Virtual Xcellence Terms of Sale</h2>
                    <p className="mb-3">
                      <strong>United States and Canada Consumer Store</strong>
                    </p>
                    <p className="mb-3">
                      Welcome to Virtual Xcellence online and retail Stores operated by Virtual Xcellence (&quot;Virtual Xcellence,&quot; 
                      &quot;We,&quot; &quot;Us,&quot; &quot;Our&quot;), located at 3900 Ravine Hollow Ct. Maumee, Ohio, 43537, USA.
                    </p>
                    <p className="mb-3">
                      &quot;Store&quot; refers to our online and retail venues that allow you to browse, view, acquire, purchase, and 
                      rate and review products and services including devices, game consoles, digital content, applications, 
                      services, and more.
                    </p>
                  </div>

                  {/* Store Policies */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">1. Store Policies</h2>
                    <p className="mb-3">
                      These Terms of Sale (&quot;Terms of Sale&quot;) cover use of the online and retail stores, and other services 
                      that refer to these Terms of Sale (collectively &quot;Store&quot;). Through the Store, Virtual Xcellence provides 
                      access to a variety of resources, including download areas, software, tools, and information about 
                      software, services and other merchandise (collectively &quot;Services&quot;).
                    </p>
                    <p className="mb-3">
                      By using the Online Store, or by acquiring products or services from the Store, you accept and agree 
                      to these Terms of Sale, Virtual Xcellence&apos;s Privacy Statement, and applicable terms and conditions, 
                      policies or disclaimers found in the Store or referenced in these Terms of Sale (collectively the 
                      &quot;Store Policies&quot;).
                    </p>
                    <p className="mb-3 text-danger">
                      <strong>YOU MAY NOT USE THE STORE IF YOU DO NOT AGREE TO THE STORE POLICIES.</strong>
                    </p>
                    <p className="mb-3">
                      Virtual Xcellence may update or amend any policies without notice at any time.
                    </p>
                  </div>

                  {/* Third-Party Links */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">2. Links to Third-Party Websites</h2>
                    <p className="mb-3">
                      The Store may include links to third-party websites that let you leave the Store. These linked sites 
                      are not under the control of Virtual Xcellence and Virtual Xcellence is not responsible for the 
                      contents of any linked site or any link contained in a linked site.
                    </p>
                    <p className="mb-3">
                      Virtual Xcellence is providing these links to you only as a convenience, and the inclusion of any 
                      link does not imply endorsement by Virtual Xcellence of the site. Your use of the third-party 
                      website may be subject to that third party&apos;s terms and conditions.
                    </p>
                  </div>

                  {/* Billing Terms */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">3. Billing Terms</h2>
                    <p className="mb-3">
                      By providing Virtual Xcellence with a payment method, you:
                    </p>
                    <ul className="list-unstyled ms-4">
                      <li className="mb-2">• Represent that you are authorized to use the payment method that you provided</li>
                      <li className="mb-2">• Confirm that any payment information you provide is true and accurate</li>
                      <li className="mb-2">• Authorize Virtual Xcellence to charge you for any products, services or available content purchased using your payment method</li>
                      <li className="mb-2">• Authorize Virtual Xcellence to charge you for any paid feature of the Store that you choose to sign up for or use</li>
                    </ul>
                    <p className="mb-3">
                      You agree to promptly update your account and other information, including your email address and 
                      credit card numbers and expiration dates, so that we can complete your transactions and contact you 
                      as needed in connection with your transactions.
                    </p>
                  </div>

                  {/* Billing Schedule */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">4. Billing Schedule</h2>
                    <p className="mb-3">
                      We may bill you:
                    </p>
                    <ul className="list-unstyled ms-4">
                      <li className="mb-2">• In advance</li>
                      <li className="mb-2">• At the time of purchase</li>
                      <li className="mb-2">• Shortly after purchase</li>
                      <li className="mb-2">• On a recurring basis for subscriptions</li>
                    </ul>
                    <p className="mb-3">
                      We may charge you up to the amount you have approved, and we will notify you in advance and in 
                      accordance with the terms of your subscription of any change in the amount to be charged for 
                      recurring subscriptions.
                    </p>
                  </div>

                  {/* Trial Periods */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">5. Trial Period Offers</h2>
                    <p className="mb-3">
                      If you are taking part in any trial-period offer, you must cancel the service by the end of the 
                      trial period to avoid incurring new charges unless we notify you otherwise. If you do not cancel 
                      the service at the end of the trial period, you authorize us to charge your payment method for 
                      the product or service.
                    </p>
                  </div>

                  {/* Additional Terms */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">6. Additional Terms and Conditions</h2>
                    <p className="mb-3">
                      In addition to software and other downloadable products, other products and services available in 
                      the Store may also be offered to you subject to separate end user license agreements, terms of use, 
                      terms of service or other terms and conditions.
                    </p>
                    <p className="mb-3">
                      If you purchase, install, or use those products, you may be required to also accept those terms 
                      as a condition of purchase, installation, or use.
                    </p>
                  </div>

                  {/* Return Policy */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">7. Return Policy</h2>
                    <p className="mb-3">
                      We will accept returns and exchanges for eligible products for 30 days from the date of purchase 
                      or download, as applicable. Simply return the eligible product in like new condition and in its 
                      original packaging, along with all parts, components, instruction manuals and documentation that 
                      were initially included.
                    </p>
                    <p className="mb-3">
                      This Return Policy does not affect any statutory rights that may apply to your purchase.
                    </p>
                  </div>

                  {/* Software Returns */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">8. Software Return Policy</h2>
                    <p className="mb-3">
                      Packaged software must be returned with their seal intact and must include all media and product keys. 
                      As a limited exception, software packages that have been opened may be returned during the return 
                      period if you are unsatisfied with the license agreement or warranty, but only if you do not make 
                      or retain any copies.
                    </p>
                    <p className="mb-3">
                      Even if you return your products, packaged software these Terms of Sale will still apply to the 
                      time between your purchase or download and return.
                    </p>
                  </div>

                  {/* Non-Returnable Items */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">9. Non-Returnable Items</h2>
                    <p className="mb-3">
                      Some items are not eligible for return; unless otherwise provided by law or by a particular product 
                      offer, all purchases of these types of products are final and non-refundable:
                    </p>
                    <ul className="list-unstyled ms-4">
                      <li className="mb-2">• Digital apps, games, in-app content and subscriptions</li>
                      <li className="mb-2">• Subscriptions on marketing</li>
                      <li className="mb-2">• Consulting services</li>
                      <li className="mb-2">• Special order products, if not part of a Store promotional offering</li>
                      <li className="mb-2">• Services that have been performed or consumed</li>
                    </ul>
                  </div>

                  {/* Refund Process */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">10. Refund Process</h2>
                    <p className="mb-3">
                      When you make a qualifying return, we will credit the full amount, less the original shipping and 
                      handling charges (if any) except we won&apos;t deduct those charges for returns because you are unsatisfied 
                      with the license agreement or warranty, and you will typically receive your refund in approximately 
                      3-5 business days.
                    </p>
                    <p className="mb-3">
                      Any refunds will be applied to the same account, and using the same method of payment, used to 
                      place the order.
                    </p>
                  </div>

                  {/* Customer Service */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">11. Customer Service</h2>
                    <p className="mb-3">
                      For more information about customer service options please email support@virtualxcellence.com
                    </p>
                  </div>

                  {/* Privacy Statement */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">12. Privacy and Protection of Personal Information</h2>
                    <p className="mb-3">
                      Your privacy is important to us. We use certain information that we collect from you to operate 
                      and provide the Store. Please read the Virtual Xcellence Privacy Statement as it describes the 
                      types of data we collect from you and your devices (&quot;Data&quot;) and how we use your Data.
                    </p>
                    <p className="mb-3">
                      The Privacy Statement also describes how Virtual Xcellence uses your communications with others; 
                      postings or feedback submitted by you to Virtual Xcellence via the Store; and the files, photos, 
                      documents, audio, digital works, and videos that you upload, store or share on your devices or 
                      through the Store (&quot;Your Content&quot;).
                    </p>
                    <p className="mb-3">
                      By using the Store, you expressly consent to Virtual Xcellence&apos;s collection, use and disclosure 
                      of Your Content and Data as described in the Privacy Statement.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div className="terms-section mb-5">
                    <h2 className="section-title mb-4">13. Contact Information</h2>
                    <p className="mb-3">
                      If you have any questions about these Terms of Sale, please contact us:
                    </p>
                    <div className="contact-info">
                      <p className="mb-2"><strong>Email:</strong> support@virtualxcellence.com</p>
                      <p className="mb-2"><strong>Canada:</strong> +1-905-823-7677</p>
                      <p className="mb-2"><strong>United States:</strong> +1-702-537-0123</p>
                      <p className="mb-2"><strong>India:</strong> +91-120-4286226</p>
                      <p className="mb-2"><strong>Address:</strong> 3900 Ravine Hollow Ct. Maumee, Ohio, 43537, USA</p>
                    </div>
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
          ctaHeading="Questions about our terms of sale?"
          buttonLabel="Contact Support"
          buttonLink="/contact"
        />
      </main>
    </div>
  );
};

export default TermsOfSalePage;
