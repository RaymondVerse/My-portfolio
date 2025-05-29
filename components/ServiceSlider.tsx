import React from "react";
import {
  RxArrowTopRight,
  RxCodesandboxLogo,
  RxComponent1,
  RxComponentBoolean,
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
} from "react-icons/rx";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const serviceData = [
  {
    Icon: RxComponent1,
    title: "Frontend",
    description:
      "Expert in crafting responsive, user-friendly interfaces using modern frameworks like React, Next, Vue and Angular.",
  },
  {
    Icon: RxCodesandboxLogo,
    title: "Backend",
    description:
      "Skilled in developing robust, scalable, and optimized server-side applications using Node, Express and Python.",
  },
  {
    Icon: RxPencil2,
    title: "Design",
    description:
      "Adept at creating visually appealing and intuitive designs, focusing on user experience (UX) and user interface (UI).",
  },
  {
    Icon: RxComponentBoolean,
    title: "Smart Contract",
    description:
      "Experienced in developing secure and efficient smart contracts on blockchain platforms like Ethereum and Solana.",
  },
  {
    Icon: RxCrop,
    title: "Archtecture",
    description:
      "Specialized in designing scalable, maintainable, and high-performance software architectures like cloud-native.",
  },
  {
    Icon: RxRocket,
    title: "SEO",
    description:
      " Skilled in keyword research, on-page optimization, and performance enhancements to improve visibility.",
  },
  {
    Icon: RxReader,
    title: "Management",
    description:
      "Strong in agile methodologies, team collaboration, and driving innovation to deliver high-quality projects on time.",
  },
  {
    Icon: RxDesktop,
    title: "Database",
    description:
      "Proficient in designing, optimizing, and managing relational and non-relational databases MySQL, PostgreSQL, MongoDB",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
