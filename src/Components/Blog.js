function Blog({title, picture, date, blurb}){
    return(
        <div class="blog-div">
            <h1 id="blog-title">{title}</h1>
            <p>{date}</p>
            <p>{picture}</p>
            <p>Click Here To Read More</p> 
        </div>
    )
}
export default Blog;