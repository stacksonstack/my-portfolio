import { Route} from "react-router-dom";
import Home from "../Components/Home";

function HomeContainer() {
    return (
      <div className="homeContainer">
        <Route exact path="/" render={() => <Home />} />
       
    
      </div>
    );
  }
  
  export default HomeContainer;
