import profilePic from "../assets/profile_pic.jpg"
import githubIcon from "../assets/Btn-github.svg"
import IconLinkedin from "../assets/Btn-linkedin.svg"
import IconStackoverflow from "../assets/Btn-stackoverflow.svg"
import IconTwitter from "../assets/Btn-twitter.svg"

export const ContactSection = () => {
  return (
  <div>
    <h1>Let`s talk</h1>
    <img className="profile-pic" src={profilePic} width="150" alt="profile-picuture"/>
    <h2>Arnau Vidal</h2>
    <h2>+46(0)063123345</h2>
    <h2>arnauvidal@gmail.com</h2>
    <div>
    <a href="https://github.com/vidalhuix"><img src={githubIcon} alt="github-icon"/></a>  
      <a href="https://www.linkedin.com/in/arnau-vidal-i-huix-4266a940/"><img src={IconLinkedin} alt="icon linkedin" /></a>
      <a href=""><img src={IconStackoverflow} alt="icon stackoverflow" /></a>
      <a href=""><img src={IconTwitter} alt="icon twitter" /></a>   
    </div>
  </div>
  )
}