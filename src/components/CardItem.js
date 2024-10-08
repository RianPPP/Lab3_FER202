// CardItem.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardItem = ({ item, addToCart }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <Button variant="primary" onClick={() => addToCart(item)}>
          Buy
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardItem;