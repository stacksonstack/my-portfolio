import { Route} from "react-router-dom";
import NavBar from "../Components/NavBar";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function DefaultContainer() {
  return (
    <div>
      <NavBar />
      <Route path="/about" render={() => <About />} />
      <Route path="/contact" render={() => <Contact />} />
      <Footer />
    </div>
  );
}

export default DefaultContainer;
