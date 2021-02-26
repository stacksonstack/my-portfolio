import { GoMarkGithub } from "react-icons/go";
import { AiFillMediumCircle as MediumCircle} from "react-icons/ai";
import { AiFillLinkedin as Linkedin} from "react-icons/ai";
import { AiOutlineMail as Mail} from "react-icons/ai";

function Icons(){
    return(
        <div>
            <Mail/>
            <Linkedin />
            <GoMarkGithub />
            <MediumCircle style={{width: "50px", height: "50px" }}/>
        </div>
    )
}

export default Icons;