import logo from "../assets/logoWhite.svg";

const Navbar = () => {
  return (
    <section className="">
      <nav className="bg-primary absolute w-full left-0 px-8 py-6 md:py-4 md:px-24 z-20">
        <div className="flex justify-center md:justify-between items-center text-xs lg:text-sm uppercase">
          <a href="">
            <img
              src={logo}
              alt=""
              className="w-16 md:w-20 cursor-pointer scale-125"
            />
          </a>

          <aside id="desktop_menu" className="hidden md:block">
            <div className="font-light list-none flex gap-4 lg:gap-12">
              <a
                href="/"
                className="py-2 px-4 cursor-pointer text-white hover:text-secondary hover:underline underline-offset-4 transition-colors"
              >
                Home
              </a>
              <a
                href="/about"
                className="py-2 px-4 cursor-pointer text-white hover:text-secondary hover:underline underline-offset-4 transition-colors"
              >
                About
              </a>
              <a
                href="/portfolio"
                className="py-2 px-4 cursor-pointer text-white hover:text-secondary hover:underline underline-offset-4 transition-colors"
              >
                Portfolio
              </a>
              <a
                href="/contact"
                className="py-2 px-4 cursor-pointer text-white hover:text-secondary hover:underline underline-offset-4 transition-colors "
              >
                Contact
              </a>
            </div>
          </aside>

          <aside className="hidden md:block ">
            <a href="/contact">
              <button className="font-bold border-2 text-xs lg:text-sm uppercase border-secondary px-6 lg:px-8 py-2 text-secondary hover:text-white hover:scale-105 hover:bg-secondary transition-all">
                Hire Us
              </button>
            </a>
          </aside>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
