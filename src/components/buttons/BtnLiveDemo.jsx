import LiveDemo from "../../assets/Btn-live-demo.svg"
import styles from "./Btn.module.css"

export const BtnLiveDemo = ({ homepage }) =>{
  return(
    <div className={styles.btncontainer}>
      <a href={homepage} target="_blank" rel="noopener noreferrer">
        <img src={LiveDemo} alt="github-icon"/>
        <p>Live demo</p>
      </a> 
    </div>
  )
}