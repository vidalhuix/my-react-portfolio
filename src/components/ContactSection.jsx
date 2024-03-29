import profilePic from "../assets/profile_pic.jpg"
import githubIcon from "../assets/Btn-github.svg"

/* import IconLinkedin from "../assets/Btn-linkedin.png"
import IconStackoverflow from "../assets/Btn-stackoverflow.png"
import IconTwitter from "../assets/Btn-twitter.png" */

export const ContactSection = () => {
  return (
  <div>
    <h1>Let`s talk</h1>
    <img src={profilePic} width="150" alt="profile-picuture"/>
    <h2>Arnau Vidal</h2>
    <h2>+46(0)063123345</h2>
    <h2>arnauvidal@gmail.com</h2>
    <div>
      <img src={githubIcon} alt="github-icon"/>  
      {/* <img src={IconGithub} alt="icon-github"/> */}
      {/* <a href=""><img src={IconLinkedin} alt="icon linkedin" /></a>
      <a href=""><img src={IconStackoverflow} alt="icon stackoverflow" /></a>
      <a href=""><img src={IconTwitter} alt="icon twitter" /></a>  */}     
    </div>
  </div>
  )
}