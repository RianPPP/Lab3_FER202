// SelectedItemsPopup.js
import React, { useState } from 'react';
import { Modal, ListGroup, Button } from 'react-bootstrap';

const SelectedItemsPopup = ({ cartItems, updateCart }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleQuantityChange = (item, quantity) => {
    const updatedCart = cartItems.map((i) => {
      if (i.id === item.id) {
        return { ...i, quantity };
      }
      return i;
    });
    updateCart(updatedCart);
  };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Open Cart
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.id}>
                {item.name} x {item.quantity}
                <Button
                  variant="primary"
                  onClick={() => handleQuantityChange(item, item.quantity + 1)}
                >
                  +
                </Button>
                <Button
                  variant="primary"
                  onClick={() =>
                    handleQuantityChange(item, item.quantity - 1)
                  }
                >
                  -
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SelectedItemsPopup;