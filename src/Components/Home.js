import Icons from './Icons'
import React from 'react';
import { useHistory } from "react-router-dom";
function Home(props){

    const history = useHistory();
    const navigateTo = () => history.push('/about')
    return(
        <div>
            <h2>Stacey Carrillo (The Name Fades In)</h2>
            <p>I'm a NYC based full-stack developer
                focusing on creating clean & user friendly experiences</p>
            <button onClick={navigateTo}>Check out my work (arrow here) </button>
            <Icons/>
        </div>
    )
}
export default Home;