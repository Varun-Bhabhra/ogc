import President from "../assets/president.webp";

const About = () => {
  return (
    <div id="about" className="bg-white py-24 sm:py-36">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div>
            <div className="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
              <img
                src={President}
                loading="lazy"
                alt="Photo by Martin Sanchez"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div className="md:pt-8">
            <p className="text-center font-bold text-orange-500 md:text-left">
              President's Vision
            </p>

            <h1 className="mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
              Ganesh Agarwal
            </h1>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              At the heart of our Ganesh Puja Committee is the unwavering belief
              that devotion should never be hindered by financial concerns. Our
              esteemed president, Ganesh Agarwal, embodies this principle with
              his progressive and inclusive vision. His guiding philosophy,
              encapsulated in the slogan "jo lagega, lagega," reflects his
              commitment to ensuring that every aspect of our Puja is conducted
              with the utmost devotion, regardless of the cost.
              <br />
              <br />
              Ganesh Agarwal's vision is simple yet profound: when it comes to
              worship and the celebration of Lord Ganesha, no expense should
              stand in the way of our collective devotion. He firmly believes
              that the true value of our Puja lies not in the money spent but in
              the sincerity of our hearts. Under his leadership, our committee
              is dedicated to creating an atmosphere where every devotee can
              connect with the divine, free from the burdens of financial worry.
            </p>

            <h2 className="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left">
              About us
            </h2>

            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              With this vision, Ganesh Agarwal inspires us all to focus on the
              spiritual essence of our celebrations, reminding us that in
              devotion, it’s the intention and faith that matter most.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
