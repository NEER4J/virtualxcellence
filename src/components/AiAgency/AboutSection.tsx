
interface AboutData {
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
}

const AboutSection:React.FC = () => {
  const aboutData: AboutData = {
    title: "Our Story",
    paragraphs: [
      "Founded in Canada, Virtual Xcellence began as a software development firm and has since grown into a full-spectrum digital transformation company.",
      "Today, we help organizations of all sizes reimagine their operations with AI, automation, cloud, and leadership advisory services.",
      "Our mission is simple:",
      "to empower businesses to embrace technology as a growth accelerator.",
    ],
    image: "/assets/imgs/about/Founded-420x420.png",
    imageAlt: "About Virtual Xcellence",
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
                    {idx === 2 ? <strong>{text}</strong> : text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
