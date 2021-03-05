import Blogs from '../AppData/Blogs'
import Blog from '../Components/Blog';

function BlogContainer(){
   
    return(
        <div class="blog-container" >
            {Blogs().map((blog)=> <Blog key={blog.title} blurb={blog.blurb} title={blog.title} date={blog.date}/>)}
        </div>
    )
}

export default BlogContainer;