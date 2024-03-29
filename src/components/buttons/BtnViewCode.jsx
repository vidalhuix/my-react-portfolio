import ViewCode from "../../assets/Btn-github.svg"
import styles from "./Btn.module.css" 
import style from "./BtnViewCode.module.css" 

export const BtnViewCode = ({ git_url }) =>{
  return(
    <div className={`${styles.btncontainer} ${styles.btnViewCode}`} >
      <a href={git_url} target="_blank" >
        <img src={ViewCode} width={48} alt="github-icon" />
        <p>View the code</p>
      </a> 
    </div>
  )
}