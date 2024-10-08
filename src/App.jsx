// Components
import About from "./components/About";
import CTA from "./components/CTA";
import Carousel from "./components/Carousel";
import Download from "./components/Download";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";
import Team from "./components/Team";

function App() {
  return (
    <section className="">
      <Navbar />
      <NavbarMobile />
      <Hero />
      <About />
      <Team />
      <Events />
      <Carousel />
      <Download />
      <CTA />
      <Footer />
    </section>
  );
}

export default App;
