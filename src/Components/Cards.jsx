import { Col, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardNet = (props) => {
  console.log(props);
  return (
    <>
      <Col className="cardFilm mb-2 px-1">
        <Image
          className="imgNetflix"
          src={props.film.Poster}
          alt="movie picture"
          fluid
        />
        <Link
          className="btn text-white border border-white"
          to={`/movie-details/${props.film.imdbID}`}
        >
          more details
        </Link>
      </Col>
    </>
  );
};

export default CardNet;
