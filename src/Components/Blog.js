function Blog({title, picture, date, blurb, link}){
    return(
        <div class="blog-div">
            <h1 id="blog-title">{title}</h1>
            <img src={picture} alt="blog example" id="blog-img"/>
            <p id="blog-date">{date}</p>
            <a href={link} target="_blank" rel="noreferrer"><p>Click Here To Read More</p></a>
        </div>
    )
}
export default Blog;