import cta from "../assets/cta.jpg";

const CTA = () => {
  return (
    <div className="bg-white py-24 sm:py-36">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">
          <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
            <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">
              Your involvement makes our celebrations possible.
            </h2>

            <p className="mb-8 max-w-md text-gray-400">
              Whether you wish to volunteer your time or contribute financially,
              every bit of support helps us create a more enriching experience
              for all devotees.
            </p>

            <div className="mt-auto space-y-4 md:space-y-0 md:space-x-4">
              <a
                href="#"
                className="inline-block w-full md:w-auto rounded-lg bg-orange-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-orange-600 focus-visible:ring active:bg-orange-700 md:text-base"
              >
                Volunteer
              </a>

              <a
                href="#"
                className="inline-block w-full md:w-auto rounded-lg bg-orange-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-orange-600 focus-visible:ring active:bg-orange-700 md:text-base"
              >
                Donate
              </a>
            </div>
          </div>

          <div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
            <img
              src={cta}
              loading="lazy"
              alt="Photo by Dom Hill"
              className="h-full w-full object-cover object-bottom"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
