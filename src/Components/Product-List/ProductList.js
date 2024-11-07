import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import productOne from './ProductImg/product-1.png'
import productTwo from './ProductImg/product-2.png'
import producThree from './ProductImg/product-3.png'
import productFour from './ProductImg/product-4.png'

const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    image: 
    productOne,
    price: 19.99,
    oldPrice: 25.99,
    description: "A comfortable classic t-shirt in multiple colors.",
  },
  {
    id: 2,
    name: "Vintage Jacket",
    image: productTwo,
    price: 49.99,
    oldPrice: 69.99,
    description: "A stylish vintage jacket for cool weather.",
  },
  {
    id: 3,
    name: "Casual Sneakers",
    image:producThree ,
    price: 39.99,
    oldPrice: 59.99,
    description: "Perfect for everyday wear and casual outings.",
  },
  {
    id: 4,
    name: "Denim Jeans",
    image: productFour,
    price: 29.99,
    oldPrice: 49.99,
    description: "Comfortable and stylish denim jeans for everyday wear.",
  },
];

const ProductList = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        {products.map((product) => (
          <Col md={6} key={product.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Row className="g-0">
                {/* Left Column for Image */}
                <Col md={4}>
                  <Card.Img 
                    src={product.image} 
                    alt={product.name} 
                    className="img-fluid rounded-start" 
                  />
                </Col>
                
                {/* Right Column for Text */}
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className="text-muted">
                      {product.description}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="mb-0">${product.price.toFixed(2)}</h5>
                      {product.oldPrice && (
                        <small className="text-danger">
                          <s>${product.oldPrice.toFixed(2)}</s>
                        </small>
                      )}
                    </div>
                    <div className="mt-3 d-flex justify-content-between">
                      <Button variant="primary" size="sm">
                        View Details
                      </Button>
                      <Button variant="outline-primary" size="sm">
                        Add to Wishlist
                      </Button>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
