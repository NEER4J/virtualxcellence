"use client";
import { Accordion } from "react-bootstrap";

interface IFaq {
  question: string;
  answer: string;
}

interface IndustriesFaqSectionProps {
  faqData?: IFaq[];
  type?: number;
  sectionTitle?: string;
}

const IndustriesFaqSection: React.FC<IndustriesFaqSectionProps> = ({ 
  faqData,
  type, 
  sectionTitle = "Find answers in our FAQ's"
}) => {
  if (!faqData) {
    return null; // Safety check
  }

  return (
    <section className={`${type === 2 ? "faq-area-2" : "faq-area"} `}>
      <div className="container">
        <div
          className={`${
            type === 2 ? "faq-area-2-inner" : "faq-area-inner"
          }  section-spacing`}
        >
          <div className="">
            <div className="section-content fade-anim" data-direction="right">
              <div className="section-title-wrapper">
                <div className="title-wrapper">
                  <h2 className="section-title">{sectionTitle}</h2>
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

export default IndustriesFaqSection;
