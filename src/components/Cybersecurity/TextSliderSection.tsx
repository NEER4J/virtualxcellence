"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

interface ITextSlide {
  id: number;
  text: string;
  suffix: string;
}

interface TextSliderData {
  items: ITextSlide[];
}

const CybersecurityTextSliderSection: React.FC = () => {
  const textSliderData: TextSliderData = {
    items: [
      {
        id: 1,
        text: `Where Security Meets Innovation`,
        suffix: `Protecting Your Digital Future`,
      },
      {
        id: 2,
        text: `Advanced Cybersecurity Solutions`,
        suffix: `Defending Against Modern Threats`,
      },
      {
        id: 3,
        text: `Security. Protection. Peace of Mind.`,
        suffix: `We Shield Your Business`,
      },
      {
        id: 4,
        text: `Intelligent Threat Detection`,
        suffix: `Securing Your Digital Assets`,
      },
      {
        id: 5,
        text: `Where Security Meets Innovation`,
        suffix: `Protecting Your Digital Future`,
      },
      {
        id: 6,
        text: `Advanced Cybersecurity Solutions`,
        suffix: `Defending Against Modern Threats`,
      },
      {
        id: 7,
        text: `Security. Protection. Peace of Mind.`,
        suffix: `We Shield Your Business`,
      },
      {
        id: 8,
        text: `Intelligent Threat Detection`,
        suffix: `Securing Your Digital Assets`,
      },
    ],
  };

  return (
    <div className="text-slider-area-2">
      <div className="text-slider-box">
        <div className="text-slider fade-anim" suppressHydrationWarning={true}>
          <Swiper
            modules={[Autoplay]}
            className="text-slider-active-2"
            slidesPerView="auto"
            spaceBetween={0}
            speed={15000}
            loop={true}
            autoplay={{
              delay: 1,
              disableOnInteraction: false,
            }}
            allowTouchMove={false}
          >
            {textSliderData?.items?.map((item: ITextSlide) => (
              <SwiperSlide key={item?.id}>
                <div className="text-slider-item">
                  <h2 className="title">
                    <span className="icon">&#47;&#47;</span>
                    {item?.text}
                    <span className="icon">&#47;&#47;</span>
                    {item?.suffix}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityTextSliderSection;
