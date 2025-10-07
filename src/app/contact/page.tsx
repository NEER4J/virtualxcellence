import { ReactElement } from "react";
import { Metadata } from "next";
import { createRuntimePageMetadata } from '@/lib/runtime-seo'
import Header from "@/components/Home/Header";

// Force dynamic rendering - prevents static generation
export const dynamic = 'force-dynamic'
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import ContactMetaSection from "@/components/AiAgency/Contact/ContactMetaSection";
import ContactSection from "@/components/AiAgency/Contact/ContactSection";
import FooterSection from "@/components/Home/FooterSection";


// all data
import contactData from "@/constant/AiAgency/Contact/contact";

export async function generateMetadata(): Promise<Metadata> {
  return createRuntimePageMetadata('/contact', {
    title: "Contact || Virtual Xcellence - AI, Automation & Business Transformation",
    description: "Get in touch with the Virtual Xcellence team. Whether you have questions, project inquiries, or want to collaborate, our contact page makes it easy to connect.",
    keywords: [
      "Virtual Xcellence contact",
      "technology consulting contact",
      "AI automation contact",
      "business transformation contact",
      "cybersecurity contact",
      "cloud consulting contact",
      "fractional CTO contact",
      "fractional CFO contact",
      "business process outsourcing contact",
      "digital transformation contact",
      "technology solutions contact",
      "get in touch",
      "contact form",
      "business inquiries",
      "professional contact",
      "customer support",
    ],
    canonicalUrl: "https://virtualxcellence.com/contact"
  });
}

const ContactPage = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
      <Header />
      <main>
        <Breadcrumb
          title="Contact"
          subTitle="Virtual Xcellence"
          pageName="CONTACT"
        />
        <ContactMetaSection />
        <ContactSection data={contactData} />
        <FooterSection />
      </main>
    </div>
  );
};
export default ContactPage;

