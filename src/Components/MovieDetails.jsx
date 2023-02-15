import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const location = useParams();

  const [film, setfilm] = useState(null);

  const fetchCompito = () => {
    fetch("http://www.omdbapi.com/?apikey=94ef9189&i=" + location.movieID)
      .then((response) => response.json())
      .then((data) => setfilm({ searchResult: data }))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    console.log("location", location);
    fetchCompito();
    console.log(film);
  }, [location.movieID]);

  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>QUESTO è MOVIE DETAILS</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieDetails;
