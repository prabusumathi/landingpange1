import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import './FlashSales.css'
import salestwo from './img1/sales-2.png';

const FlashSales = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <Container fluid className="d-flex justify-content-center">
      <Row className="w-100">
        <Col className="text-center" sm={12}>
          <Carousel responsive={responsive}>
            {[...Array(9)].map((_, index) => (
              <Card key={index} className="text-center mx-auto card" style={{ width: '18rem' }} >
                <Card.Img variant="top" src={salestwo} height={270} />
                <Card.Body>
                  <Card.Title>$28.99$14.99 /Qty</Card.Title>
                  <Card.Text>
                  4.8<i class="bi bi-star-fill"></i>
                  (17k)
                  </Card.Text>
                  <Card.Text className='fs-5'> Taylor Farms Broccoli Florets Vegetables
                  By Lucky Supermarket</Card.Text>
                 
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default FlashSales;
