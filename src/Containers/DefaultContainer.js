import { Route} from "react-router-dom";
import NavBar from "../Components/NavBar";
import About from "../Components/About";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import BlogContainer from './BlogContainer'

function DefaultContainer() {
  return (
    <div>
      <NavBar />
      <Route path="/about" render={() => <About />} />
      <Route path="/contact" render={() => <Contact />} />
      <Route path="/blogs" render={() => <BlogContainer />} />
      <Footer />
    </div>
  );
}

export default DefaultContainer;
