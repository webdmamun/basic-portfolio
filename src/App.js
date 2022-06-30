import "./App.css";
import About from "./componentes/about/About";
import Contact from "./componentes/contact/Contact";
import Services from "./componentes/services/Services";
import Portfolio from "./componentes/portfolio/Portfolio";
import Testimonials from "./componentes/testimonials/Testimonials";
import Experience from "./componentes/experience/Experience";
import Header from "./componentes/shared/header/Header";
import Nav from "./componentes/shared/nav/Nav";
import Footer from "./componentes/shared/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
