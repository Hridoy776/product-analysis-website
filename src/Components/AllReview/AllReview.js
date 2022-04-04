import React from "react";
import { Row ,Col,Card,} from "react-bootstrap";
import useReview from "../../usereview/usereview";

const AllReview = () => {
  const [reviews] = useReview();

  return (
    <>
      <Row xs={1} md={2} lg={3} className="g-4 container mx-auto">
      {
          reviews.map(singlereview=>{return <Col>
            <Card >
              <Card.Body>
                <Card.Title>{singlereview.name}</Card.Title>
                <Card.Text>{singlereview.review.slice(0, 200)}</Card.Text>
                <Card.Text>Rattings:{singlereview.rating}</Card.Text>
              </Card.Body>
            </Card>
          </Col>})
      }
      </Row>
    </>
  );
};

export default AllReview;
