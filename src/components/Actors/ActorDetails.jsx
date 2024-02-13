import { useParams } from "react-router-dom";

export function ActorDetails() {
  const { id } = useParams();
  return <p>Actor id: {id}</p>;
}
