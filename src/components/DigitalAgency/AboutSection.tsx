"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import counterUp from "counterup2";

interface ICounter {
  value: number;
  suffix: string;
  label: string;
  delay: string;
}

interface ICircleImage {
  textImg: string;
  iconImg: string;
  link: string;
}

interface AboutData {
  subtitle: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  circleImages: ICircleImage;
  mainImage: string;
  counters: ICounter[];
}

const AboutSection:React.FC<{className?: string}> = ({className:updateClass}) => {
  const aboutData: AboutData = {
    subtitle: "WHO WE ARE",
    title: "Innovators, Strategists, and Technologists",
    description: "We are innovators, strategists, and technologists driven by a single mission — to bridge the gap between business vision and technology execution. From startups to enterprises, Virtual Xcellence partners with organizations to digitize processes, modernize infrastructure, and embrace AI-powered solutions.",
    ctaText: "About Agency",
    ctaLink: "/ai-agency/about",
    circleImages: {
      textImg: "/assets/imgs/shape/shape-2.webp",
      iconImg: "/assets/imgs/shape/shape-3.webp",
      link: "#awards",
    },
    mainImage: "/assets/imgs/shape/shape-23.webp",
    counters: [
      { value: 3.5, suffix: "k", label: "Completed Projects", delay: "0.30" },
      { value: 25, suffix: "+", label: "Years Of Experience", delay: "0.45" },
      { value: 1.6, suffix: "k", label: "World Wide Clients", delay: "0.60" },
      { value: 22, suffix: "+", label: "Trusted Companies", delay: "0.75" },
    ],
  };
  useEffect(() => {
    const counters = document.querySelectorAll(".t-counter-value");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting && !el.classList.contains("is-visible")) {
            counterUp(el, {
              duration: 1500,
              delay: 16,
            });
            el.classList.add("is-visible");
          }
        });
      },
      { threshold: 1 }
    );

    counters.forEach((el) => observer.observe(el));
    return () => counters.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className={`about-area ${updateClass}`}>
      <div className="container">
        <div className={`about-area-inner ${updateClass ? 'section-spacing' : 'section-spacing'}`}>
          <div className="section-content-wrapper btn-move">
            <div className="section-content">
              <div className="section-title-wrapper fade-anim">
                <div className="subtitle-wrapper">
                  <span className="section-subtitle">{aboutData?.subtitle}</span>
                </div>
                <div className="title-wrapper">
                  <h2 className="section-title">{aboutData?.title}</h2>
                </div>
              </div>

              <div className="text-wrapper fade-anim">
                <p className="text">{aboutData?.description}</p>
              </div>

              <div className="btn-wrapper fade-anim">
                <div className="t-btn-group">
                  <Link className="t-btn t-btn-circle" href={aboutData?.ctaLink || "#"}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                  <Link className="t-btn t-btn-primary" href={aboutData?.ctaLink || "#"}>
                    {aboutData?.ctaText}
                  </Link>
                  <Link className="t-btn t-btn-circle" href={aboutData?.ctaLink || "#"}>
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>

            <div className="about-thumb fade-anim">
              <div className="btn-wrapper">
                <Link href={aboutData?.circleImages?.link || "#"} className="circle-text btn-item">
                  <img src={aboutData?.circleImages?.textImg} alt="text shape" className="text" />
                  <img src={aboutData?.circleImages?.iconImg} alt="icon shape" className="icon" />
                </Link>
              </div>
              <div className="image img_anim_reveal">
                <img src={aboutData?.mainImage} alt="about image" />
              </div>
            </div>
          </div>

          <div className="counter-wrapper-box fade-anim">
            <div className="counter-wrapper">
              {aboutData?.counters?.map((counter:ICounter, index:number) => (
                <div className="counter-item fade-anim" data-delay={counter?.delay} key={index}>
                  <span className="number">
                    <span
                      className="t-counter-value"
                      data-value={counter?.value}
                    >
                      {counter?.value}
                    </span>
                    <span className="counter-suffix">{counter?.suffix}</span>
                  </span>
                  <p className="text">{counter?.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
