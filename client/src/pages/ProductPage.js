import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Row,
  Card,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Rating from '../components/Rating';
import { detailsProducts } from '../redux/actions/productActions';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

const ProductPage = ({ match, history }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProducts(match.params.id));
  }, [dispatch, match]);

  const addCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      <Container>
        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorMessage variant="danger">{error}</ErrorMessage>
        ) : (
          <Row>
            <Col md={5}>
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
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price:</Col>
                      <Col>
                        <strong>{product.price}</strong>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item
                    className={
                      product.countInStock > 0 ? 'text-success' : 'text-danger'
                    }
                  >
                    <strong>
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </strong>
                  </ListGroup.Item>
                  {product.countInStock > 0 && (
                    <ListGroup.Item>
                      <Row>
                        <Col>Quantity</Col>
                        <Col>
                          <Form.Control
                            as="select"
                            value={qty}
                            onChange={(e) => setQty(e.target.value)}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </Form.Control>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  )}
                  <ListGroup.Item style={{ border: 'none' }}>
                    <Button
                      className="btn-block"
                      variant="outline-info"
                      disabled={product.countInStock === 0}
                      style={{ borderRadius: '50px' }}
                      onClick={addCartHandler}
                    >
                      Add to Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        )}

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
