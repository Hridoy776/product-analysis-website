import React from "react";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
      <>
    <section >
      <h1 className="text-center text-primary ">well come to tech world</h1>
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
          <Button className="w-25">play live demo</Button>
        </div>
      </div>
    </section>
    <section>
        <h1 className="text-center text-primary">customer review</h1>
    </section>
    </>
  );
};

export default Home;
