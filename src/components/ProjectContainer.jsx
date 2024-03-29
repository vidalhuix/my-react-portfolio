import { BtnLiveDemo } from "./buttons/BtnLiveDemo"
import { BtnViewCode } from "./buttons/BtnViewCode"



export const ProjectContainer = ({ id, name, description, created_at, homepage, git_url, topics }) => {
  return (
    <div>
      <h2>{id}</h2>
      <h4>{name}</h4>
      <p>{description}</p>
      <p>{created_at}</p>
      <BtnLiveDemo homepage={homepage} />
      <BtnViewCode git_url={git_url} />
      <p>{topics.length > 0 ? topics.join(" / ") : "No topics"}</p>
      <hr />
    </div>
  )
}
 