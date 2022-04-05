import React from "react";
import { Row  } from "react-bootstrap";

import useReview from "../../usereview/usereview";
import Review from "../Review/Review";

const AllReview = () => {
  const [reviews] = useReview();

  return (
    <>
    <h1 className="text-center text-primary my-4">Our customer what says!</h1>
      <Row xs={1} md={2} lg={3} className="g-4 container mx-auto my-3">
        {
         reviews.map((review) =><Review key={review.id} singlereview={review}></Review> )
        } 
      </Row>
    </>
  );
};

export default AllReview;
