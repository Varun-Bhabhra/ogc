import TenYear from "../../src/components/TenYear";

const Hero = () => {
  return (
    <div
      id="home"
      className="bg-herobgMob lg:bg-herobg bg-cover bg-no-repeat bg-top md:bg-top pb24 sm:pb8 lg:pb12 h-dvh"
    >
      {" "}
      <div className="mx-auto h-full max-w-screen-2xl px-4 md:px-8 flex items-end md:items-center">
        {/* Hero Starts Here */}
        <section className="max-w-lg sm:max-w-xl xl:max-w-screen-sm">
          <div className="flex gap-2 rounded border bg-orange-50 p-2 text-orange-500 max-w-[16rem]">
            <span className="mt-0.5 rounded-full bg-orange-300 px-2 py-1 text-xs font-semibold leading-none text-orange-800">
              10
            </span>
            <span className="text-sm">Glorious Years of Devotion</span>
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

            <div className="flex w-full flex-col gap-6 md:flex-row items-center pb-8">
              <a
                href="#upcoming-events"
                className="inline-block w-full md:w-auto rounded-lg bg-orange-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-orange-600 focus-visible:ring active:bg-orange-700 md:text-base"
              >
                Upcoming events
              </a>
              <a href="#download" className="text-white hover:underline">
                Important PDFs →
              </a>
            </div>
          </div>
        </section>
      </div>
      <TenYear />
    </div>
  );
};

export default Hero;
