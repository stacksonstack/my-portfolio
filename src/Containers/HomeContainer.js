import { Route} from "react-router-dom";
import Home from "../Components/Home";

function HomeContainer() {
    return (
      <div>
        <Route exact path="/" render={() => <Home />} />
       
    
      </div>
    );
  }
  
  export default HomeContainer;
