function Project({title, picture, demo_link, github_link, description}){
    return(
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{demo_link}</p>
            <p>{github_link}</p>
        </div>
    )
}

export default Project;