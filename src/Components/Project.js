function Project({title, picture, demo_link, frontend_link, backend_link, description}){
    return(
        <>
        
        <div className="project-div">
            <h1 className="title-text">{title}</h1>
            <img src={picture} alt="Project UI"/>
            <p>{description}</p>
            {demo_link? <a href={demo_link} target="_blank" rel="noreferrer" ><p>Demo Video</p></a>:null}
            <a href={frontend_link} target="_blank" rel="noreferrer" ><p>{backend_link ? "Frontend Repo" : "Github Repo"}</p></a>
            {backend_link? <a href={backend_link} target="_blank" rel="noreferrer" ><p>Backend Repo</p></a> :null}
            {title === "Scrambled" ? null : <p id="keep-scrolling">Keep &dArr; Scrolling</p>}
        </div>
        </>
    )
}

export default Project;