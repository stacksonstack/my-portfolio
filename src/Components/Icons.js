import { FaGithubSquare as Github } from "react-icons/fa";
import { FaMedium as Medium} from "react-icons/fa";
import { AiFillLinkedin as Linkedin} from "react-icons/ai";
import { AiFillMail as Mail} from "react-icons/ai";

function Icons(){
    return(
        <div>
            <Mail className="icon"/>
            <Linkedin className="icon"/>
            <Github className="icon" />
            <Medium className="icon"/>
        </div>
    )
}

export default Icons;