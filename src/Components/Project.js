function Project({title, picture, demo_link, frontend_link, backend_link, description, projId, nextProj}){
    let nextProject = `#${nextProj}`
    
    return(
        <>
       <div className="project-container">
        <div className="project-div" id={projId}>
            <div className="proj-title"><h1 className="title-text">{title}</h1></div>
            <div className="proj-img"><img src={picture} alt="Project UI" id="project-image"/></div>
            <div className="proj-desc"><p id="desc">{description}</p></div>
            <div className="proj-links" >
                {console.log("project next ",nextProj)}
            {demo_link? <a href={demo_link} target="_blank" rel="noreferrer" ><p id="links">Demo Video</p></a>:null}
            <a href={frontend_link} target="_blank" rel="noreferrer" ><p id="links">{backend_link ? "Frontend Repo" : "Github Repo"}</p></a>
            {backend_link? <a href={backend_link} target="_blank" rel="noreferrer" ><p id="links">Backend Repo</p></a> :null}
            </div>
        </div>
        {title === "Scrambled" ? null : <a href={nextProject} ><p id="keep-scrolling" className="floating">&#8681;</p></a> }
        </div>
        </>
    )
}

export default Project;