import { Col, Image } from "react-bootstrap";

const CardNet = (props) => (
  <>
    <Col className="cardFilm mb-2 px-1">
      <Image className="imgNetflix" src={props.src} alt="movie picture" fluid />
    </Col>
  </>
);

export default CardNet;
