// Images
// import HeroGanesh from "../assets/hero.webp";
import logo from "../assets/logoWhite.svg";

const Hero = () => {
  return (
    <div className="relative bg-hero bg-cover bg-center pb-6 sm:pb-8 lg:pb-12">
      <div className="absolute inset-0 bg-zinc-500 mix-blend-multiply"></div>
      <div className=" relative mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* Navbar Starts Here */}
        <header className="mb-4 flex items-center justify-center py-4 md:py-8">
          <a
            href="/"
            className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
            aria-label="logo"
          >
            <img src={logo} alt="OGC logo" className="w-32" />
          </a>
        </header>

        {/* Hero Starts Here */}
        <section className="flex flex-col items-center">
          <div className="flex items-center gap-2 rounded border bg-gray-50 p-2 text-gray-500">
            <span className="mt-0.5 rounded-full bg-indigo-100 px-2 py-1 text-xs font-semibold leading-none text-indigo-800">
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

          <div className="flex max-w-screen-lg flex-col items-center pb-0 pt-8 text-center sm:pb-16 lg:pb-32 lg:pt-32">
            <p className="mb-4 font-semibold text-zinc-200 md:mb-6 md:text-lg xl:text-xl">
              Very proud to introduce
            </p>

            <h1 className="mb-8 text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
              Celebrating a Decade of Spiritual Harmony with Lord Ganesha
            </h1>

            <p className="mb-8 leading-relaxed text-zinc-300 md:mb-12 xl:text-lg">
              This is a section of some simple filler text, also known as
              placeholder text. It shares characteristics of real text.
            </p>

            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
              <a
                href="#"
                className="inline-block rounded-lg bg-orange-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-orange-600 focus-visible:ring active:bg-orange-700 md:text-base"
              >
                Download PDF
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
