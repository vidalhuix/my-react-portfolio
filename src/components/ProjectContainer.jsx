import { BtnLiveDemo } from "./buttons/BtnLiveDemo"



export const ProjectContainer = ({ id, name, description, created_at, homepage, topics }) => {
  return (
    <div>
      <h2>{id}</h2>
      <h4>{name}</h4>
      <p>{description}</p>
      <p>{created_at}</p>
      <BtnLiveDemo homepage={homepage} />
      <p>{topics.length > 0 ? topics.join(" / ") : "No topics"}</p>
      <hr />
    </div>
  )
}
 