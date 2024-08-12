import FemaleProcessionExtraSecurity from "../assets/FemalePES.pdf";
import IICLetter from "../assets/IIC-Letter.pdf";
import SoundPermission from "../assets/Sound-Permission.pdf";

const Download = () => {
  return (
    <div id="download" className="bg-primary text-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="mb-4 font-medium text-zinc-300 md:mb-6 md:text-lg ">
            Download → Change → Use 🏃🏻‍♂️‍➡️
          </p>

          <h1 className="mb-8 text-3xl font-bold sm:text-4xl md:mb-12 md:text-5xl">
            Important Documents
          </h1>

          <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
            <a
              href={IICLetter}
              download={IICLetter}
              target="__blank"
              className="inline-block w-full md:w-auto rounded-lg bg-orange-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-orange-600 focus-visible:ring active:bg-orange-700 md:text-base"
            >
              IIC Letter ↓
            </a>

            <a
              href={FemaleProcessionExtraSecurity}
              download={FemaleProcessionExtraSecurity}
              target="__blank"
              className="inline-block w-full md:w-auto rounded-lg bg-orange-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-orange-600 focus-visible:ring active:bg-orange-700 md:text-base"
            >
              Female Procession Extra Security ↓
            </a>

            <a
              href={SoundPermission}
              download={SoundPermission}
              target="__blank"
              className="inline-block w-full md:w-auto rounded-lg bg-orange-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-orange-600 focus-visible:ring active:bg-orange-700 md:text-base"
            >
              Sound Permission ↓
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
