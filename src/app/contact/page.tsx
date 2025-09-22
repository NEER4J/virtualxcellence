import { ReactElement } from "react";
import { Metadata } from "next";
import Header from "@/components/Home/Header";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import ContactMetaSection from "@/components/AiAgency/Contact/ContactMetaSection";
import ContactSection from "@/components/AiAgency/Contact/ContactSection";
import FooterSection from "@/components/Home/FooterSection";


// all data
import contactData from "@/constant/AiAgency/Contact/contact";

export const metadata: Metadata = {
  title: "Contact || Virtual Xcellence - Creative Digital Agency NextJS Template",
  description:
    "Get in touch with the Virtual Xcellence team. Whether you have questions, project inquiries, or want to collaborate, our contact page makes it easy to connect.",
  keywords: [
    "Virtual Xcellence contact page",
    "NextJS contact template",
    "agency contact",
    "business contact page",
    "get in touch",
    "contact form NextJS",
    "digital agency contact",
    "startup contact page",
    "professional contact page",
    "customer support",
    "contact details",
    "business inquiries",
    "NextJS contact form",
    "responsive contact page",
    "contact us",
    "contact page template",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Contact Page",
  },
};

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

