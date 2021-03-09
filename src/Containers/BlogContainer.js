import Blogs from '../AppData/Blogs'
import Blog from '../Components/Blog';

function BlogContainer(){
   
    return(
        <>
        <h1 className="title-text">My Blogs</h1>
        <div class="blog-container" >
            {Blogs().map((blog)=> <Blog key={blog.title} picture={blog.picture} blurb={blog.blurb} title={blog.title} date={blog.date} link={blog.link} />)}
        </div>
        </>
    )
}

export default BlogContainer;