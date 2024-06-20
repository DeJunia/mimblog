import React from 'react'
import { Link } from 'react-router-dom'
import PageLog from '../assets/logo3.jpg'
import githubIcon from '../assets/github-d.svg'
import emailIcon from '../assets/email-d.svg'
import linkedInIcon from '../assets/linkedin-d.svg'
import { FaLaptop, FaTabletAlt, FaMobileAlt, FaMobile} from 'react-icons/fa'


const About = ({width}) => {
  const date = new Date();
  return (
    <main className="About" >
      <div className='heading'>
        <div className='webInfo'>
              <img src={PageLog} alt="De Junia Logo" width={100} height={100} /> <p>A blog webApp made by VeaGle (Dejunia). <a href="https://github.com/DeJunia">Visit our Github Page</a></p>
              
        </div>
         <p><span style={{
          color: "rgb(0, 166, 255)",
         }}>mimBlog</span> is a webApp to post anything in mind.
         Not much to say. Just post responsibly.
         Copyright &copy; {date.getFullYear()}
         </p>
         
      </div>
      <div className="footer">
         <div className="left">
          <a href="https://www.linkedin.com/in/de-junia-291ab4307">
            <img src={linkedInIcon} alt="linked" width={24} height={24} />
          </a>
          <a href="#">
            <img src={emailIcon} alt="linked" width={24} height={24} />
          </a>
          <a href="https://github.com/DeJunia">
            <img src={githubIcon} alt="linked" width={24} height={24} />
          </a>
          
         </div>
         <div className="right">
          {width < 768 ? <FaMobileAlt />
          : width < 992 ? <FaTabletAlt />
            : <FaLaptop />}
         </div>
      </div>
    </main>
  )
}

export default About