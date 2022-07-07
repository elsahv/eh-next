import { 
  FaLinkedin,
  FaInstagram,
  FaGithub
 } from 'react-icons/fa';


const ContactForm = () => {
  return (
    <>
    Contact Info
    
     <ul>
      
      <li>
        <a href="mailto:elsahovey@gmail.com">elsahovey@gmail.com</a>
        </li>
       <li>
        
       <a className="sm-icon" href="http://github.com/elsahv"> 
            <FaGithub />
            </a>
       </li>

      <li>
      <a className="sm-icon" href="https://linkedin.com/in/elsa-hovey"> 
            <FaLinkedin />
            </a>
      </li>
      <li>
      <a className="sm-icon" href="https://www.instagram.com/elsahoveydevdesign/"> 
            <FaInstagram />
            </a>
      </li>
     </ul> 
     
    </>
  )
}

export default ContactForm