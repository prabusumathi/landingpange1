import React from 'react'
import './Validation.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const validation = () => {
  return (
    <Container fluid className='validation '>
    <Row className='p-5'>

      <Col className=' text-center'sm={12}>
      <h1 className='text-light text-center'>Don't Miss Out on Grocery</h1>
      <h1 className='text-light text-center'>Deals</h1>
      <p className='text-light text-center'>SING UP FOR THE UPDATE NEWSLETTER</p>
    
      <input type="email"  className='text-center in '/>
      <button className='text-center bt '>Submit</button>
     
      </Col>



    </Row>
  </Container>
  )
}

export default validation
