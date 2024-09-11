import visarjan from "../assets/visarjan.jpg";
import gannu2 from "../assets/gannu2.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Carousel = () => {
  return (
    <section className="bg-white text-zinc-800 py-24 sm:py-36">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* Heading */}
        <div className="mb-10 md:mb-16 mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold md:mb-6 lg:text-3xl">
            Upcoming Events
          </h2>

          <p className=" text-center md:text-lg">
            Our celebrations are a time of joy, devotion, and unity. Here’s a
            glimpse of what’s coming up.
          </p>
        </div>

        {/* carousel swiper  */}
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper rounded-xl"
        >
          <SwiperSlide className="cursor-grab">
            <img src={gannu2} alt="" className="max-h-[36rem]" />
          </SwiperSlide>
          <SwiperSlide className="">
            <img src={visarjan} alt="" className="max-h-[36rem]" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
