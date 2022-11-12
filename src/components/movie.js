import * as React from "react";
import Card from "react-bootstrap/Card";
import ReviewEntry from "./review-entry";

function MovieCard(props) {
  return (
    <Card id="movie-card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.movieName}</Card.Title>
        <Card.Text>{props.movieSummary}</Card.Text>
      </Card.Body>
      <ReviewEntry />
    </Card>
  );
}

export default MovieCard;
