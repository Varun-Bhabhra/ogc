import Firework from "../assets/firework.webm";

const TenYear = () => {
  return (
    <div className="relative py-8 sm:py-8 lg:py-8">
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
          {/* <a
            href="#"
            className="order-last inline-block w-2/6 md:w-auto mx-auto md:mx-0 whitespace-nowrap rounded-lg bg-orange-600 px-4 py-2 text-center text-xs font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-orange-700 focus-visible:ring active:bg-orange-800 sm:order-none sm:w-auto md:text-sm"
          >
            Join Us!
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default TenYear;
