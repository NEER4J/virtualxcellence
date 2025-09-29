"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

interface Project {
  id: number;
  title: string;
  result: string;
  tags: string[];
  image: string;
}

interface WorkData {
  sectionSubtitle: string;
  sectionTitle: string;
  viewAllText: string;
  projects: Project[];
}

const workData: WorkData = {
  sectionSubtitle: "Our Portfolio",
  sectionTitle: "Selected works",
  viewAllText: "See All Works",
  projects: [
    {
      id: 1,
      title: "Retail Chain: AI demand forecasting",
      result: "35% cost savings",
      tags: ["RETAIL", "AI"],
      image: "/assets/imgs/new/AI-demand-forecasting-740x515.jpg",
    },
    {
      id: 2,
      title: "Logistics Provider: Conversational AI",
      result: "65% faster response time",
      tags: ["LOGISTICS", "AI"],
      image: "/assets/imgs/new/Logistics-Provider-740x515.jpg",
    },
    {
      id: 3,
      title: "Financial Institution: Omni Channel customer Experience",
      result: "100% achieved",
      tags: ["FINANCE", "OMNI-CHANNEL"],
      image: "/assets/imgs/new/Omnichannel-Customer-Experience-740x515.jpg",
    },
  ],
};

const WorkSlider = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={false}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        speed={1800}
        navigation={{
          prevEl: ".work-button-prev",
          nextEl: ".work-button-next",
        }}
        pagination={{
          el: ".work-pagination",
          type: "progressbar",
          clickable: true,
        }}
        breakpoints={{
          576: { slidesPerView: 1.2 },
          768: { slidesPerView: 1.2 },
          992: { slidesPerView: 1.5 },
          1201: { slidesPerView: 2.5 },
          1367: { slidesPerView: 2.5 },
        }}
      >
        {workData?.projects?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="work-box-2">
              <div className="thumb">
                <div className="meta">
                  {item?.tags?.map((tag, idx) => (
                    <span className="tag" key={idx}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div>
                  <img src={item?.image} alt={item?.title || "Project image"} />
                </div>
                <div className="content">
                  <h3 className="title">
                    {item?.title}
                  </h3>
                  <p className="result text-white">{item?.result}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="work-pagination fade-anim"></div>
      <div className="slide-nav-wrapper">
        <div className="slide-nav fade-anim">
          <div className="work-button-prev slide-nav-button" role="button">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="work-button-next slide-nav-button" role="button">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
        <div className="btn-wrapper fade-anim">
          <div className="t-btn-group">
            <button
              className="t-btn t-btn-circle"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
            <button
              className="t-btn t-btn-primary"
            >
              {workData?.viewAllText}
            </button>
            <button
              className="t-btn t-btn-circle"
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkSlider;
