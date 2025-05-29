import { GrAchievement } from "react-icons/gr";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonialData = [
  {
    image: "/certificate1.png",
    name: "Anne Smith",
    position: "Customer",
    message: "Frontend Developer (React)",
  },
  {
    image: "/certificate2.png",
    name: "Jane Doe",
    position: "Customer",
    message: "Problem Solving (Intermediate)",
  },
  {
    image: "/certificate3.png",
    name: "Jhon Doe",
    position: "Customer",
    message: "Angular (Intermediate)",
  },
  {
    image: "/certificate4.png",
    name: "Anne Smith",
    position: "Customer",
    message: "Node.js (Intermediate)",
  },
  {
    image: "/certificate5.png",
    name: "Jane Doe",
    position: "Customer",
    message: "SQL (Intermediate)",
  },
  {
    image: "/certificate6.png",
    name: "Jhon Doe",
    position: "Customer",
    message: "JavaScript (Intermediate)",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            <div className="w-full max-w-[300px] sm:max-w-[600px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                <div className="mb-2 mx-auto">
                  <Image
                    src={person.image}
                    width={400}
                    height={400}
                    alt={person.name}
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              <div className="mb-4">
                <GrAchievement
                  className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"
                  aria-hidden
                />
              </div>

              <div className="xl:text-lg text-center md:text-left">
                {person.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
