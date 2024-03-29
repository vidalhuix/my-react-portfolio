import LiveDemo from "../../assets/Btn-live-demo.svg"


export const BtnLiveDemo = ({ homepage }) =>{
  return(
    <div>
      <a href={homepage} target="_blank" rel="noopener noreferrer">
        <img src={LiveDemo} alt="github-icon"/>
        Live demo
      </a> 
    </div>
  )
}