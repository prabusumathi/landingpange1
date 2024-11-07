import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
const Footer = () => {
  return (
    <Container>
    <Row className='pt-3'>
      <Col>
      <h3>
      Information</h3>
      <p>Become a Vendor</p>
      <p>Affiliate Program</p>
      <p>Our Suppliers</p>
      <p>Privacy Policy</p>
      <p>Extended Plan</p>
      <p>Community</p>
      
      
      </Col>

      <Col>
      
      <h3>
      Customer Support
</h3>
<p>Help Center</p>
<p>Contact Us</p>
<p>Report Abuse</p>
<p>Submit and Dispute</p>
<p>Policies & Rules</p>
<p>Online Shopping</p>
      </Col>

      <Col>
      
      <h3>
      My Account
</h3>
<p>My Account</p>
<p>Order History</p>
<p>Shoping Cart</p>
<p>Compare</p>
<p>Help Ticket</p>
<p>Wishlist</p>
      </Col>

      <Col>
      
      <h3>
      Daily Groceries
</h3>
<p>Dairy & Eggs</p>
<p>Meat & Seafood</p>
<p>Breakfast Food</p>
<p>Household Supplies</p>
<p>Bread & Bakery</p>
<p>Pantry Staples</p>
      </Col>

    </Row>
    <Row className='text-center justify-content-between pb-3'>
        <Col sm={3} className=''>
        <FaFacebook />
     
        
       
        </Col>
        <Col sm={3}>   <FaTwitter /></Col>
        <Col sm={3}><FaInstagramSquare /></Col>
        <Col sm={3}> <IoLogoWhatsapp /></Col>
    </Row>
  </Container>
  )
}

export default Footer
