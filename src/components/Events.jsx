import mahotsav from "../assets/mahotsav.jpeg";
import visarjan from "../assets/visarjan.jpg";

const Events = () => {
  return (
    <div id="upcoming-events" className="bg-primary py-24 sm:py-36">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-zinc-50 md:mb-6 lg:text-3xl">
            Upcoming Events
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-50 md:text-lg">
            Our celebrations are a time of joy, devotion, and unity. Here’s a
            glimpse of what’s coming up
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:gap-8">
          <a
            href="#"
            className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-800 shadow-lg md:h-64 xl:h-96"
          >
            <img
              src={mahotsav}
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-800 to-transparent md:via-transparent"></div>

            <div className="relative mt-auto p-4">
              <span className="block text-sm text-gray-200">
                6 - 13 September
              </span>
              <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                Ganesh Chaturthi Mahotsav
              </h2>
            </div>
          </a>

          <a
            href="#"
            className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-800 shadow-lg md:h-64 xl:h-96"
          >
            <img
              src={mahotsav}
              loading="lazy"
              alt="Photo by Magicle"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-800 to-transparent md:via-transparent"></div>

            <div className="relative mt-auto p-4">
              <span className="block text-sm text-gray-200">
                10 - 12 September
              </span>
              <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                Cultural Nights
              </h2>
            </div>
          </a>

          <a
            href="#"
            className="group relative flex h-48 flex-col overflow-hidden rounded-lg bg-gray-800 shadow-lg md:h-64 xl:h-96"
          >
            <img
              src={visarjan}
              loading="lazy"
              alt="Photo by Martin Sanchez"
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-zinc-800 to-transparent md:via-transparent"></div>

            <div className="relative mt-auto p-4">
              <span className="block text-sm text-gray-200">14 September</span>
              <h2 className="mb-2 text-xl font-semibold text-white transition duration-100">
                Visarjan Procession
              </h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Events;
