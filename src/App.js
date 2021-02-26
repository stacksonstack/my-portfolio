import './App.css';
import { Route, Switch, withRouter } from "react-router-dom";
import NavBar from './Components/NavBar'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div >
       <NavBar />
      <Switch >
     
      <Route path="/about" render={()=> <About />}/>
      <Route path="/contact" render={()=> <Contact/>} />
      
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
