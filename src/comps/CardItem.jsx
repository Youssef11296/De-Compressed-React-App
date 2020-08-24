import React from "react";
import { Card, Button } from "react-bootstrap";

const CardItem = ({ CardData }) => {
  return (
    <>
      <Card
        data-aos={
          CardData.Id === 1
            ? "fade-left"
            : CardData.Id === 2
            ? "zoom-out"
            : CardData.Id === 3
            ? "fade-right"
            : ""
        }
        className="card-style 
      my-3 justify-content-center align-items-center text-center"
      >
        <div className="face face1">
          <Card.Img src={CardData.Img} className="the-img" />
          {/* <Card.Body> */}
          <Card.Title className="mt-4 face1-h">
            <h2>{CardData.MainHeading}</h2>
          </Card.Title>
        </div>
        <div className="face face2">
          <h2>{CardData.Heading}</h2>
          <Card.Text>{CardData.Paragraph}</Card.Text>
          <Button>{CardData.Link}</Button>
          {/* </Card.Body> */}
        </div>
      </Card>
    </>
  );
};

export default CardItem;
