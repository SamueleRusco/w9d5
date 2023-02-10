import React from "react";
import { Row } from "react-bootstrap";
import CardNet from "./Cards";

const CardList = () => (
  <>
    <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
      <CardNet />
      <CardNet />
      <CardNet />
      <CardNet />
    </Row>
  </>
);

export default CardList;
