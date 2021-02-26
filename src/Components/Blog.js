function Blog({title, picture, date, blurb}){
    return(
        <div>
            <h1>{title}</h1>
            <p>{date}</p>
            <p>{blurb}</p>
        </div>
    )
}
export default Blog;