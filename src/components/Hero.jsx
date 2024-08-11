// Images
// import HeroGanesh from "../assets/hero.webp";
import logo from "../assets/logoWhite.svg";

const Hero = () => {
  return (
    <div className="bg-herobgMob lg:bg-herobg bg-cover bg-center pb-6 sm:pb-8 lg:pb-12 h-screen">
      {" "}
      <div className="mx-auto h-full max-w-screen-2xl px-4 md:px-8 flex items-end md:items-center">
        {/* Hero Starts Here */}
        <section className="max-w-lg xl:max-w-screen-sm">
          <div className="flex gap-2 rounded border bg-gray-50 p-2 text-gray-500 max-w-xs">
            <span className="mt-0.5 rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold leading-none text-orange-800">
              10
            </span>
            <span className="text-sm">Glorious Years of Devotion</span>

            {/* <a
              href="#"
              className="text-sm font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
            >
              More
            </a> */}
          </div>

          <div className="max-w-screen-lg h-full flex flex-col pb-0 pt-8">
            <p className="mb-4 font-regular text-zinc-200 md:mb-6 md:text-lg xl:text-xl">
              Welcome to Om Ganeshay Committee
            </p>

            <h1 className="mb-8 text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-7xl capitalize">
              Where devotion meets tradition.
            </h1>

            <p className="max-w-[28rem] mb-8 leading-relaxed text-zinc-300 md:mb-12 xl:text-lg">
              We are a community dedicated to the worship of Lord Ganesha,
              striving to preserve and celebrate our rich cultural heritage.
            </p>

            <div className="flex w-full flex-col gap-6 sm:flex-row items-center">
              <a
                href="#"
                className="inline-block w-full md:w-auto rounded-lg bg-orange-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-orange-600 focus-visible:ring active:bg-orange-700 md:text-base"
              >
                Download PDF
              </a>
              <a href="#" className="text-white hover:underline">
                Upcoming Events →
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
