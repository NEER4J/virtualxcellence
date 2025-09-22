"use client";
import { Accordion } from "react-bootstrap";

interface IFaq {
  question: string;
  answer: string;
}

const CybersecurityFaqSection: React.FC<{ type?: number; imageSrc?: number }> = ({ type, imageSrc: img }) => {
  const faqData: IFaq[] = [
    {
      question: "What cybersecurity services does Virtual Xcellence offer?",
      answer:
        "We offer comprehensive cybersecurity services including threat assessment, penetration testing, security monitoring, incident response, vulnerability management, security training, compliance auditing, and risk management solutions.",
    },
    {
      question: "How quickly can you respond to a security incident?",
      answer:
        "Our incident response team is available 24/7 and can typically respond to critical security incidents within 15 minutes, with full containment and remediation procedures initiated within the first hour.",
    },
    {
      question: "Do you provide ongoing security monitoring?",
      answer:
        "Yes, we offer 24/7 security monitoring services with real-time threat detection, automated response systems, and regular security reports to keep you informed of your security posture.",
    },
    {
      question: "What compliance standards do you help with?",
      answer:
        "We assist with various compliance standards including SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, and other industry-specific regulations to ensure your business meets all necessary security requirements.",
    },
    {
      question: "How do you ensure our data remains secure?",
      answer:
        "We implement multiple layers of security including encryption, access controls, regular security audits, employee training, and follow industry best practices to ensure your data is protected at all times.",
    },
  ];

  const imageSrc1 = "/assets/imgs/gallery/image-21.webp";
  const imageSrc2 = "/assets/imgs/gallery/image-22.webp";
  const imageSrc = img === 2 ? imageSrc2 : imageSrc1;

  return (
    <section className={`${type === 2 ? "faq-area-2" : "faq-area"} `}>
      <div className="container">
        <div
          className={`${
            type === 2 ? "faq-area-2-inner" : "faq-area-inner"
          }  section-spacing`}
        >
          <div className="section-content-wrapper">
            <div
              className={`faq-thumb fade-anim order-${type === 2 ? 1 : 0}`}
              data-direction={type === 2 ? "right" : "left"}
            >
              <img src={imageSrc} alt="Cybersecurity FAQ Image" />
            </div>
            <div
              className={`section-content fade-anim order-${
                type === 2 ? 0 : 1
              }`}
              data-direction={type === 2 ? "left" : "right"}
            >
              <div className="section-title-wrapper">
                <div className="subtitle-wrapper">
                  <span className="section-subtitle">Have security questions?</span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">Find answers in our FAQ&apos;s</h2>
                </div>
              </div>

              <div
                className={`${
                  type === 2 ? "accordion-wrapper-2" : "accordion-wrapper"
                }`}
              >
                <Accordion defaultActiveKey="0">
                  {faqData?.map((item, index) => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                      <Accordion.Header>{item?.question}</Accordion.Header>
                      <Accordion.Body>{item?.answer}</Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CybersecurityFaqSection;
