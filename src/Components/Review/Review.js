import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Review.css'
const Review = ({ singlereview }) => {
  const { name, review, rating,img } = singlereview;
  return (
    <>
    
      <Col>
        <Card>
          <Card.Body>
            <Card.Title><h3>{name}</h3> <img src={img} className="image" alt="" /></Card.Title>
            <Rating
              initialRating={rating}
              emptySymbol={<FontAwesomeIcon icon={faStar} />}
              fullSymbol={
                <FontAwesomeIcon style={{ color: "goldenrod" }} icon={faStar} />
              }
              readonly
            ></Rating>

            <Card.Text>{review.slice(0, 200)}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Review;
