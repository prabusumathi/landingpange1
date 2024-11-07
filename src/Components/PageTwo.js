import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
// import image1 from './img/page2-1.png'
import './PageTwo.css'
const PageTwo = () => {
  return (
    <Container className='p-5' fluid>
    <Row className='d-flex justify-content-evenly'>

      <Col xl={3} sm={3} lg={3} md={3}   className='bgr1 g-3 align-items-center'  >
      <div className='text-center pt-5'>
        <h2 >
        Everyday Fresh <br />Meat</h2>
        <button className='bten p-2 '>Shop now </button>
      </div>
     </Col>

     <Col xl={3} sm={3} lg={3} md={3} className='bgr2  g-3 align-items-center' >
      <div className='text-center pt-5'>
        <h2 >
        Everyday Fresh <br />Meat</h2>
        <button className='bten p-2 '>Shop now </button>
      </div>
     </Col>

     <Col xl={3} sm={3} lg={3} md={3}  className='bgr3  g-3 align-items-center' >
      <div className='text-center pt-5' >
        <h2>
        Everyday Fresh <br /> Meat</h2>
        <button className='bten p-2 '>Shop now </button>
      </div>
     </Col>

     <Col xl={3} sm={3} lg={3} md={3}    className='bgr4  g-3 align-items-center'>
      <div className='text-center pt-5'>
        <h2 >
        Everyday Fresh <br />Meat</h2>
        <button className='bten p-2 ms-3 mt-4'>Shop now </button>
      </div>
     </Col>


    </Row>
  </Container>
  )
}

export default PageTwo
