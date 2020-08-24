import React from "react";
import CardData from "../data.json";
import { Container, Row, Col } from "react-bootstrap";
import CardItem from "./CardItem";

const CardList = () => {
  return (
    <Container className="main-container p-5 d-flex justify-content-center align-items-center">
      <Row>
        {CardData.map((CardData) => (
          <Col key={CardData.Id}>
            <CardItem CardData={CardData} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardList;
