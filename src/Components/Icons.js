import { FaGithubSquare as Github } from "react-icons/fa";
import { FaMedium as Medium } from "react-icons/fa";
import { AiFillLinkedin as Linkedin } from "react-icons/ai";
import { AiFillMail as Mail } from "react-icons/ai";


function Icons() {
  return (
    <div>
      <a href="mailto:staceycarrillo.se@gmail.com" target="_blank" rel="noreferrer"><Mail className="icon" /></a>
      <a href="https://www.linkedin.com/in/stacey-carrillo" target="_blank" rel="noreferrer"> <Linkedin className="icon"/> </a>
      <a href="https://github.com/stacksonstack" target="_blank" rel="noreferrer"> <Github className="icon" /> </a>
      <a href="https://staceycarrillo.medium.com/" target="_blank" rel="noreferrer"> <Medium className="icon" /> </a>
    </div>
  );
}

export default Icons;
