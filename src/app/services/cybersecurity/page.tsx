import { ReactElement } from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/AiAgency/common/Breadcrumb";
import CybersecurityChallengeSection, { CybersecurityServiceSection } from "@/components/Cybersecurity/ServiceSection";
import CybersecurityProcessSection from "@/components/Cybersecurity/ProcessSection";
import CybersecurityIndustrySection from "@/components/Cybersecurity/IndustrySection";
import CybersecurityToolsSection from "@/components/Cybersecurity/ToolsSection";
import CybersecurityTextSliderSection from "@/components/Cybersecurity/TextSliderSection";
import CybersecurityFaqSection from "@/components/Cybersecurity/FaqSection";


export const metadata: Metadata = {
  title: "Cybersecurity Services || Virtual Xcellence - Creative Digital Agency NextJS Template",
  description:
    "Explore our comprehensive cybersecurity services with Virtual Xcellence. Professional security solutions, threat protection, and digital safety for your business with advanced security measures.",
  keywords: [
    "Virtual Xcellence cybersecurity",
    "cybersecurity services",
    "digital security solutions",
    "threat protection",
    "cyber defense",
    "security consulting",
    "vulnerability assessment",
    "penetration testing",
    "security monitoring",
    "incident response",
    "cyber risk management",
    "data protection",
  ],
  creator: "PixaVation",
  other: {
    developer: "PixaVation",
    section: "Cybersecurity Services Page",
  },
};

const CybersecurityPage = (): ReactElement => {
  return (
    <div className="body-wrapper body-inner-page">
        <main>
          <Breadcrumb
            title="CYBERSECURITY"
            subTitle="Secure Your Digital Future with Virtual Xcellence"
            pageName="CYBERSECURITY"
            subtext="In today's hyperconnected world, businesses face an ever-evolving threat landscape. Cyberattacks are no longer isolated incidents, they are a daily reality. The cost of a single breach can run into millions, not to mention the reputational damage. At Virtual Xcellence, we provide end-to-end cybersecurity solutions that help businesses protect, detect, respond, and recover with confidence."
          />
          <CybersecurityChallengeSection />
          <CybersecurityServiceSection />
          <CybersecurityProcessSection />
          <CybersecurityIndustrySection />
          <CybersecurityToolsSection />
          <CybersecurityTextSliderSection />
          <CybersecurityFaqSection type={2} />
        </main>
    </div>
  );
};
export default CybersecurityPage;