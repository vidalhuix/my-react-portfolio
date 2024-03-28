import { useState } from "react"



export const ProjectContainer = ({ id, name, description, created_at, homepage, topics }) => {
  return (
    <div>
      <h2>{id}</h2>
      <h4>{name}</h4>
      <p>Description: {description}</p>
      <p>{created_at}</p>
      <p>Homepage: {homepage ? <a href={homepage}>{homepage}</a> : "Not available"}</p>
      <p>{topics.length > 0 ? topics.join(", ") : "No topics"}</p>
      <hr />
    </div>
  )
}
 