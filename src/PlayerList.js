import { CardGroup } from "react-bootstrap";
import players from "./Players";
import Player from "./Player";

// Use of Map to loop through the players component
const PlayerList = () => {
  return (
    <CardGroup>
      {players.map((player) => {
        return (
          <Player
            name={player.name}
            team={player.team}
            nationality={player.nationality}
            JerseyNumber={player.Jerseynumber}
            age={player.age}
            image ={player.image}
          />
        );
      })}
    </CardGroup>
  );
};

export default PlayerList;
