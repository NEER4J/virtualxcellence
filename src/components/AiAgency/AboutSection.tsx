import Link from "next/link";

interface AboutData {
  subtitle: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  aboutLink: string;
  buttonText: string;
}

const AboutSection:React.FC = () => {
  const aboutData: AboutData = {
    subtitle: "WHO WE ARE",
    title: "Innovators, Strategists, and Technologists",
    paragraphs: [
      "We are innovators, strategists, and technologists driven by a single mission — to bridge the gap between business vision and technology execution.",
      "From startups to enterprises, Virtual Xcellence partners with organizations to digitize processes, modernize infrastructure, and embrace AI-powered solutions.",
    ],
    image: "/assets/imgs/shape/shape-23.webp",
    imageAlt: "About Virtual Xcellence",
    aboutLink: "/ai-agency/about",
    buttonText: "About Agency",
  };
  return (
    <section className="about-area-4">
      <div className="container">
        <div className="about-area-4-inner section-spacing">
          <div className="section-content-wrapper">
            <div className="thumb fade-anim" data-direction="left" suppressHydrationWarning={true}>
              <img
                src={aboutData?.image}
                alt={aboutData?.imageAlt || "About Image"}
              />
            </div>
            <div className="section-content">
              <div className="section-title-wrapper fade-anim" suppressHydrationWarning={true}>
                <div className="subtitle-wrapper">
                  <span className="section-subtitle">
                    {aboutData?.subtitle}
                  </span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">{aboutData?.title}</h2>
                </div>
              </div>
              <div
                className="text-wrapper fade-anim"
                data-direction="right"
                suppressHydrationWarning={true}
              >
                {aboutData?.paragraphs?.map((text, idx) => (
                  <p className="text" key={idx}>
                    {text}
                  </p>
                ))}
              </div>
              <div
                className="btn-wrapper fade-anim"
                data-direction="right"
                suppressHydrationWarning={true}
              >
                <div className="t-btn-group">
                  <Link
                    className="t-btn t-btn-circle"
                    href={aboutData?.aboutLink || "#"}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link
                    className="t-btn t-btn-primary"
                    href={aboutData?.aboutLink || "#"}
                  >
                    {aboutData?.buttonText || "About Agency"}
                  </Link>
                  <Link
                    className="t-btn t-btn-circle"
                    href={aboutData?.aboutLink || "#"}
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
