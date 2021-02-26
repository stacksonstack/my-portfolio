import "./App.css";
import { Route, Switch } from "react-router-dom";
import DefaultContainer from "./Containers/DefaultContainer";
import Home from "./Components/Home";


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route component={DefaultContainer} />
      </Switch>
    </div>
  );
}

export default App;
