import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const Blog = () => {
  return (
    <>
      <Row xs={1} md={2} lg={3} className="g-4 container mx-auto my-5">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>context api</Card.Title>
              <Card.Text>
                React context api in react produces global vairable which can be pass through around. context api is the alternative of props drilling from grandParent to parent to child component.Provide is a component of context api which is the store of variable which are provided all the other component inside.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Symantic tag</Card.Title>
              <Card.Text>
                semantic tag provides more information of website rather than prasentation.For example 'p' tag is a semantic tag.that provide information that inside this paragragp is written.that is also help the browser and developer but 'i' tag doesn't provide exact meaning. 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>block inline inline-block</Card.Title>
              <Card.Text>
                
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Blog;
