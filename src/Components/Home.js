import Icons from "./Icons";
import React from "react";
import { useHistory } from "react-router-dom";
function Home(props) {
  const history = useHistory();
  const navigateTo = () => history.push("/about");
  return (
    <div className="home">
    <div id="home-name">
    <h1 className="title-name-text">Stacey Carrillo</h1>
  </div>
  <div id="home-text">
  <p>
        I'm a NYC based full-stack developer focusing on creating clean & user
        friendly experiences
      </p>
      <button id="home-btn" onClick={navigateTo}>Check out my work &#x21E8; </button>
      
      <div id="home-icons"> <Icons /></div>
      </div>
      
      </div>
  );
}
export default Home;
