import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Review = ({singlereview}) => {
    const{name,review}=singlereview;
    return (
        <Col>
          <Card>
        
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {review.slice(0,200)}
          </Card.Text>
        </Card.Body>
      </Card>
        </Col>
    );
};

export default Review;