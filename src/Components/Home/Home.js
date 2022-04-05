import React from "react";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useReview from "../../usereview/usereview";
import Review from "../Review/Review";

const Home = () => {
    const [reviews]=useReview()
    const navigate=useNavigate()
    const seeAllReviews=()=>{
        navigate('/review')
    }
  return (
      <>
    <section className="container" >
      <h1 className="text-center text-primary my-5">well come to tech world</h1>
      <div className="d-sm-flex justify-content-center m-3">
        <div className="m-3 order-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRf0J6Q7DPDuPPJO3xlNSKOmR3I1VxqXlWPM60N5Qi7Yg1fsgO-H9N6bz2DBj5X26ICEg&usqp=CAU"
            alt=""
          />
        </div>
        <div className="w-sm-50  d-flex flex-column order-2">
          <h2>this is your first macbook pro</h2>
          <h2 className="text-primary">this is your lucky macbook pro</h2>
          <p className="text-lg-center">
            <strong>MacBook Pro</strong>. Our most powerful notebooks. Fast M1
            processors, incredible graphics, and spectacular Retina displays.
            Now available in a 16-inch model
          </p>
         <p> <button className="w-sm-25   btn btn-primary">play live demo</button></p>
        </div>
      </div>
    </section>
    <section className="container d-flex flex-column aligns-item-center ">
        <h1 className="text-center text-primary my-5">customer review</h1>
        <Row xs={1} md={2} lg={3} className="g-4">
         {reviews.slice(0,3).map(review=><Review key={review.id} singlereview={review}></Review>)}
        </Row>
        <div className="d-flex justify-content-center my-3">
        <button onClick={seeAllReviews} className="my-3 btn btn-primary  w-sm-25 ">see all reviews</button>
        </div>
    </section>
    </>
  );
};

export default Home;
