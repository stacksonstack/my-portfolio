import './App.css';
import { Route, Switch} from "react-router-dom";
import NavBar from './Components/NavBar'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Home from './Components/Home'
function App() {
  return (
    <div >

      <NavBar />
      <Switch >
      <Route exact path="/" render={()=> <Home/>}/>
      <Route path="/about" render={()=> <About />}/>
      <Route path="/contact" render={()=> <Contact/>} />
      
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
