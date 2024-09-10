import Firework from "../assets/firework.webm";

const TenYear = () => {
  return (
    <div className="relative py-2 sm:py-0 lg:py-0">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover "
      >
        <source src={Firework} type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-orange-400 mix-blend-multiply"></div>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="relative flex flex-wrap rounded-lg px-4 py-3 justify-center sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8">
          <div className="order-1 inline-block w-11/12 max-w-screen-sm text-xs md:text-xl text-white font-bold sm:order-none sm:mb-0 sm:w-auto lg:text-xl text-center">
            Celebrating Our 10 Year Anniversary!
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenYear;
