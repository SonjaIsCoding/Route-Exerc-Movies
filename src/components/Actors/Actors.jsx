import { actors } from "../../data/actors";
import styles from "./Actors.module.css";

export function Actors() {
  return (
    <>
      <h1>Actors List</h1>
      <ul className={styles.list}>
        {actors.map((actor) => {
          return (
            <li key={actor.id}>
              <p>{actor.name}</p>
              <p>{actor.popularity}</p>
              <p>{actor.character}</p>
              <p>{actor.image}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
