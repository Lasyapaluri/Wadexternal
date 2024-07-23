import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const catalogue = () => {
  // Example data
  const products = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1' },
    { id: 2, name: 'Product 2', description: 'Description for Product 2' },
    { id: 3, name: 'Product 3', description: 'Description for Product 3' },
    { id: 4, name: 'Product 4', description: 'Description for Product 4' },
  ];

  return (
    <Container>
      <h2>Catalog</h2>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={3}>
            <Card style={{ marginBottom: '20px' }}>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default catalogue;
