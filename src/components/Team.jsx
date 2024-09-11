import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import TeamData from "../Config/teamData.config.json";

const Team = () => {
  return (
    <div className="bg-white py-24 sm:py-10">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Meet our Team
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Our celebrations are a time of joy, devotion, and unity. Here’s a
            glimpse of what’s coming up.
          </p>
        </div>

        {/* carousel swiper  */}
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper h-[32rem] cursor-grab"
        >
          {TeamData.map((item, key) => (
            <SwiperSlide className="py-24" key={key}>
              <div className="w-[6rem]">
                <div className="flex flex-col items-center gap-2 sm:flexrow md:gap-4">
                  <div className="h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-32 md:w-32 mx-12">
                    <img
                      src={item.image}
                      loading="lazy"
                      alt="Photo of team member"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div>
                    <div className="text-center font-semibold text-zinc-800 text-sm/snug md:text-lg/snug">
                      {item.name}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
