import profilePic from "../assets/profile_pic.jpg"

export const Header = () => {
  return (
    <div>
      <h2>Hi, I'm Arnau Vidal</h2>
      <h1>Frontend Developer</h1>
      <img src={profilePic} width="250" alt="profile-picuture"/>
      <p>Arnau is a dynamic and ambitious frontend developer. Proficient in modern 
        JavaScript and React, fueled by a relentless pursuit of knowledge and growth. 
        With fluency in four languages and a background in architecture, can bring a unique
         blend of creativity and technical expertise to every project.</p>
    </div>
  )
}