//React bootstrap card used in this code
import { Card } from "react-bootstrap";

 const Player = ({name, team,nationality,JerseyNumber,Age,image})=>{
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src= {image}/>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text> {name}</Card.Text>
          <Card.Text> {team}</Card.Text>
          <Card.Text>{nationality}</Card.Text>
          <Card.Text>{JerseyNumber}</Card.Text>
          <Card.Text> {Age}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    );
 }

 export default Player;