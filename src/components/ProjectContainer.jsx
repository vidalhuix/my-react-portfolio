import { BtnLiveDemo, BtnViewCode } from "./buttons/Buttons"
import styles from "./ProjectContainer.module.css"

export const ProjectContainer = ({ imageLink, name, description, created_at, homepage, git_url, topics }) => {
  const imageLink = `https://raw.githubusercontent.com/vidalhuix/${name}/blob/main/src/assets/featured-image.jpg`

  return (
    <div className={styles.project}>
      <img src={imageLink} alt="Project Iamge"/>
      <h2>{name}</h2>
      <p>{description}
      <span className={styles.createdAt}> Created {created_at}.</span>
      </p>
      <div className={styles.topics}>
        {topics.length > 0 ? (
          <ul>
            {topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        ) : (
          <p>No topics</p>
        )}
      </div>
      <BtnLiveDemo homepage={homepage} />
      <BtnViewCode git_url={git_url} />
      <hr />
    </div>
  )
}
