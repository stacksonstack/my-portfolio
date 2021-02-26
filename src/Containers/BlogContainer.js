import Blogs from '../AppData/Blogs'
import Blog from '../Components/Blog';

function BlogContainer(){
   
    return(
        <div>
            {Blogs().map((blog)=> <Blog blurb={blog.blurb}/>)}
        </div>
    )
}

export default BlogContainer;