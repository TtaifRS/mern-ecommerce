import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Image, ListGroup, Row } from 'react-bootstrap';
import axios from 'axios';

import Rating from '../components/Rating';

const ProductPage = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);

      setProduct(data);
    };
    fetchProduct();
  }, [match]);
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={4}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup.Item style={{ border: 'none' }}>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item style={{ border: 'none' }}>
              <h5> Price: ${product.price}</h5>
            </ListGroup.Item>
            <ListGroup.Item style={{ border: 'none' }}>
              {product.description}
            </ListGroup.Item>
            <ListGroup.Item
              className={
                product.countInStock > 0 ? 'text-success' : 'text-danger'
              }
              style={{ border: 'none' }}
            >
              <strong>
                {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
              </strong>
            </ListGroup.Item>
            <ListGroup.Item style={{ border: 'none' }}>
              <Button
                className="btn-block"
                variant="outline-info"
                disabled={product.countInStock === 0}
                style={{ borderRadius: '50px' }}
              >
                Add to Cart
              </Button>
            </ListGroup.Item>
          </Col>
        </Row>
        <Link
          className="btn btn-outline-dark my-5 "
          style={{ borderRadius: '50px' }}
          to="/"
        >
          Go Back
        </Link>
      </Container>
    </>
  );
};

export default ProductPage;
