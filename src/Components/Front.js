import React from 'react'
import './Front.css'
import imge from './img/page1-1.png'
import imgeTwo from './img/page1-2.png'

import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Front = () => {
 
  return (
    <div className='text-center front' >
      <Container className='front text-center mx-auto'>
      <Carousel>
        <Carousel.Item>
          <Row className="align-items-center ">
            <Col md={6}>
              <div className='f'>
             
       <h1>Daily Grocery Order and Get express delivery</h1>
       <button className='btn'>Explore shop</button>
      
              </div >
            </Col>
            <Col md={6}>
              <img
                src={imge}
                alt="Slide 1"
                className="img " 
              />
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row className="align-items-center">
            <Col md={6}>
              <div className='f'>
             
              <h1>Daily Grocery Order and Get express delivery</h1>
              <button className='btn'>Explore shop</button>
       
              </div>
            </Col>
            <Col md={6}>
              <img
                src={imgeTwo}
                alt="Slide 2"
                className="img p-5"
              />
            </Col>
          </Row>
        </Carousel.Item>
        </Carousel>
        </Container>



     
      
    </div>
  )
}

export default Front
