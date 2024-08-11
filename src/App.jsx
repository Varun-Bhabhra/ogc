// Components
import About from "./components/About";
import CTA from "./components/CTA";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile";

function App() {
  return (
    <section className="">
      <Navbar />
      <NavbarMobile />
      <Hero />
      <About />
      <Events />
      <CTA />
      <Footer />
    </section>
  );
}

export default App;
